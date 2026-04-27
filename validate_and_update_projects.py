# python
#!/usr/bin/env python3
"""
Validate project folder structure, create missing thumbnails and update projects.json.

Usage:
  python3 validate_and_update_projects.py [--root ROOT] [--projects-dir DIR] [--width W] [--height H] [--exact] [--dry-run] [--verbose]
"""
import argparse
import json
import os
import subprocess
import sys
from pathlib import Path
from typing import List, Dict, Optional, Tuple
import shutil
import logging
import time

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".tiff"}
DEFAULT_WIDTH = 300
DEFAULT_HEIGHT = 300

def find_imagemagick_cmd() -> Optional[List[str]]:
    # Prefer 'magick' (newer ImageMagick), otherwise 'convert'.
    if shutil.which("magick"):
        return ["magick"]
    if shutil.which("convert"):
        return ["convert"]
    return None

def is_image_file(p: Path) -> bool:
    return p.suffix.lower() in IMAGE_EXTS and p.is_file()

def is_thumbnail_file(p: Path) -> bool:
    # skip files that already are thumbnails by convention
    return "-thumbnail" in p.stem.lower()

def thumbnail_path_for(p: Path) -> Path:
    return p.with_name(f"{p.stem}-thumbnail{p.suffix}")

def make_thumbnail(im_cmd: List[str], src: Path, dst: Path, width: int, height: int, exact: bool, dry_run: bool) -> bool:
    if dry_run:
        logging.info("DRY-RUN: would create thumbnail: %s -> %s", src, dst)
        return True
    resize_spec = f"{width}x{height}"
    if exact:
        # preserve composed size using extent
        # magick: magick src -resize WIDTHxHEIGHT^ -gravity center -extent WIDTHxHEIGHT dst
        args = [im_cmd[0], str(src), "-resize", f"{resize_spec}^", "-gravity", "center", "-extent", resize_spec, str(dst)]
        if im_cmd[0] == "convert":
            args = ["convert", str(src), "-resize", f"{resize_spec}^", "-gravity", "center", "-extent", resize_spec, str(dst)]
    else:
        # magick: magick src -resize WIDTHxHEIGHT\> dst
        # use ">" behavior to only shrink if larger; we use simple -resize WxH\>
        resize_percentage = 50  # Example percentage, you can adjust or pass as an argument
        new_width = int(subprocess.check_output([im_cmd[0], "identify", "-format", "%w", str(src)]).decode().strip())
        new_height = int(subprocess.check_output([im_cmd[0], "identify", "-format", "%h", str(src)]).decode().strip())
        new_width = new_width * resize_percentage // 100
        new_height = new_height * resize_percentage // 100
        resize_arg = f"{new_width}x{new_height}>"
        args = [im_cmd[0], str(src), "-scale", resize_arg, "-quality", str(resize_percentage), str(dst)]
        if im_cmd[0] == "convert":
            args = ["convert", str(src), "-scale", resize_arg, "-quality", str(resize_percentage), str(dst)]
        # args = [im_cmd[0], str(src), "-resize", resize_arg, str(dst)]
        # if im_cmd[0] == "convert":
        #     args = ["convert", str(src), "-resize", resize_arg, str(dst)]
    logging.debug("Running ImageMagick command: %s", " ".join(args))
    try:
        subprocess.run(args, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if dst.exists() and dst.stat().st_size > 0:
            logging.info("Created thumbnail: %s", dst)
            return True
        logging.warning("Thumbnail created but file missing or zero-size: %s", dst)
        return False
    except subprocess.CalledProcessError as e:
        logging.error("ImageMagick failed for %s -> %s: %s", src, dst, e)
        return False

def safe_load_json(path: Path) -> Optional[object]:
    try:
        with path.open("r", encoding="utf-8") as fh:
            return json.load(fh)
    except Exception as e:
        logging.error("Failed to parse JSON %s: %s", path, e)
        return None

def backup_file(path: Path) -> Path:
    bak = path.with_suffix(path.suffix + f".bak-{int(time.time())}")
    shutil.copy2(path, bak)
    logging.info("Backed up %s -> %s", path, bak)
    return bak

# ...existing code...
def try_update_projects_json(projects_json_path: Path, discovered: Dict[str, List[str]], dry_run: bool) -> Tuple[bool, List[str]]:
    """
    discovered: mapping project_folder_name -> list of image relative paths (strings)
    This function attempts to update projects.json only when it can match an existing entry's folder/key
    and an 'images' list exists. It returns (changed, log_lines).
    """
    logging.debug("try_update_projects_json called with path=%s dry_run=%s discovered_keys=%s",
                  projects_json_path, dry_run, list(discovered.keys()))
    obj = safe_load_json(projects_json_path)
    logging.debug("Loaded projects.json type=%s", type(obj).__name__)
    if obj is None:
        logging.debug("projects.json could not be parsed; aborting update")
        return False, ["projects.json could not be parsed; aborting update"]

    changed = False
    log_lines: List[str] = []
    # Support top-level list of project objects OR dict
    if isinstance(obj, list):
        logging.debug("projects.json is a list with length=%d", len(obj))
        for idx, entry in enumerate(obj):
            logging.debug("Processing list entry index=%d type=%s", idx, type(entry).__name__)
            if not isinstance(entry, dict):
                logging.debug("Skipping non-dict entry at index=%d", idx)
                continue
            # try to find a key that stores folder name
            folder_key = next((k for k in ("folder", "dir", "path", "name") if k in entry), None)
            logging.debug("Resolved folder_key=%r for entry index=%d", folder_key, idx)
            if not folder_key:
                logging.debug("No folder key found for entry index=%d; skipping", idx)
                continue
            folder_val = entry.get(folder_key)
            logging.debug("folder_val for entry index=%d: %r", idx, folder_val)
            if not isinstance(folder_val, str):
                logging.debug("folder_val is not a string for entry index=%d; skipping", idx)
                continue
            short_folder = os.path.basename(os.path.normpath(folder_val))
            logging.debug("short_folder derived for entry index=%d: %s", idx, short_folder)
            if short_folder in discovered:
                logging.debug("Match found in discovered for short_folder=%s", short_folder)
                new_images = [os.path.basename(img) for img in discovered[short_folder]]
                logging.debug("Discovered images for %s: %s", short_folder, new_images)
                if "images" in entry and isinstance(entry["images"], list):
                    old_images = entry["images"]
                    logging.debug("Existing images for %s: %s", short_folder, old_images)

                    # Add missing images that exist in new_images but not in old_images
                    missing_images = [img for img in new_images if img not in old_images]
                    if missing_images:
                        if dry_run:
                            msg = f"Would add missing images for {short_folder}: {missing_images}"
                            log_lines.append(msg)
                            logging.debug("Dry-run: %s", msg)
                        else:
                            entry["images"].extend(missing_images)
                            msg = f"Added missing images for {short_folder}: {missing_images}"
                            log_lines.append(msg)
                            logging.info(msg)
                        changed = True
                    else:
                        logging.debug("No missing images to add for %s", short_folder)

                    # Remove extra images that exist in old_images but not in new_images
                    extra_images = [img for img in old_images if img not in new_images and Path(img).suffix.lower() in IMAGE_EXTS]
                    if extra_images:
                        if dry_run:
                            msg = f"Would remove extra images for {short_folder}: {extra_images}"
                            log_lines.append(msg)
                            logging.debug("Dry-run: %s", msg)
                        else:
                            entry["images"] = [img for img in old_images if img not in extra_images]
                            msg = f"Removed extra images for {short_folder}: {extra_images}"
                            log_lines.append(msg)
                            logging.info(msg)
                        changed = True
                    else:
                        logging.debug("No extra images to remove for %s", short_folder)
                else:
                    logging.debug("Entry for %s has no 'images' list; skipping update", short_folder)
            else:
                logging.debug("short_folder %s not present in discovered; removing entry", short_folder)
                if not dry_run:
                    obj.pop(idx)
                    msg = f"Removed entry for {short_folder} as it is not present in discovered"
                    log_lines.append(msg)
                    logging.info(msg)
                else:
                    msg = f"Would remove entry for {short_folder} as it is not present in discovered"
                    log_lines.append(msg)
                    logging.debug("Dry-run: %s", msg)
                changed = True
    else:
        logging.debug("projects.json has unexpected type: %s", type(obj).__name__)

   # Add logic to include new projects not in projects.json
    existing_projects = set()
    existing_projects = {os.path.basename(os.path.normpath(entry.get("folder", ""))) for entry in obj if isinstance(entry, dict) and "folder" in entry}

    new_projects = {folder: images for folder, images in discovered.items() if folder not in existing_projects}
    if new_projects:
        if dry_run:
            msg = f"Would add new projects: {list(new_projects.keys())}"
            log_lines.append(msg)
            logging.debug("Dry-run: %s", msg)
        else:
            for folder, images in new_projects.items():
                folder_path = os.path.dirname(images[0]) if images else ""
                logging.info("Determining category for new project %s with folder_path=%s with parent folder =%s", folder, folder_path, os.path.basename(os.path.dirname(folder_path)))
                if folder_path == "":
                    logging.warning("Cannot determine path for new project %s because folder is empty; skipping", folder)
                    continue
                category = {
                    "wireframes": "cat1",
                    "websites": "cat2",
                    "mobileApplications": "cat3",
                    "presentations": "cat4",
                    "diagrams": "cat5",
                    "designSystems": "cat6"
                }.get(os.path.basename(os.path.dirname(folder_path)), "Unknown")
                obj.append({"name": os.path.basename(folder_path), "folder": str(folder_path + os.sep), "images": [os.path.basename(img) for img in images], "category": category})
                msg = f"Added new project: {folder} with images: {images}"
                log_lines.append(msg)
                logging.info(msg)
                changed = True

    logging.debug("try_update_projects_json completed changed=%s log_lines=%s", changed, log_lines)

    if changed and not dry_run:
        try:
            backup_file(projects_json_path)
            with projects_json_path.open("w", encoding="utf-8") as fh:
                json.dump(obj, fh, indent=2, ensure_ascii=False)
            logging.info("projects.json changes written to file")
        except Exception as e:
            logging.error("Failed to write changes to projects.json: %s", e)
            return False, log_lines + [f"Failed to write changes to projects.json: {e}"]
    return changed, log_lines

def collect_projects_images(projects_dir: Path, root: Path) -> Dict[str, List[str]]:
    """
    Return mapping project_folder_name -> list of image paths relative to root
    """
    discovered: Dict[str, List[str]] = {}
    if not projects_dir.exists():
        logging.error("Projects directory does not exist: %s", projects_dir)
        return discovered
    for category in sorted([p for p in projects_dir.iterdir() if p.is_dir()]):
        logging.info("Category: %s", category.name)
        for project in sorted([d for d in category.iterdir() if d.is_dir()]):
            rel_project = project.relative_to(root)
            logging.info("  Project: %s", rel_project)
            entries = []
            for f in sorted([p for p in project.iterdir() if p.is_file() and is_image_file(p)]):
                if is_thumbnail_file(f):
                    logging.debug("    Skipping thumbnail file (source): %s", f.name)
                    continue
                thumb = thumbnail_path_for(f)
                rel_thumb = str(thumb.relative_to(root))
                rel_src = str(f.relative_to(root))
                entries.append(rel_src)
                logging.debug("    Found image: %s (thumbnail target: %s)", rel_src, rel_thumb)
            discovered[project.name] = entries
    return discovered

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", default=".", help="Repository root")
    parser.add_argument("--projects-dir", default="images/projects", help="Projects directory relative to root")
    parser.add_argument("--width", type=int, default=DEFAULT_WIDTH)
    parser.add_argument("--height", type=int, default=DEFAULT_HEIGHT)
    parser.add_argument("--exact", action="store_true", help="Force exact dimensions (crop/extent)")
    parser.add_argument("--dry-run", action="store_true", help="Do not write files")
    parser.add_argument("--verbose", "-v", action="store_true", help="Verbose logging")
    args = parser.parse_args()

    log_level = logging.DEBUG if args.verbose else logging.INFO
    logging.basicConfig(level=log_level, format="%(levelname)s: %(message)s")

    root = Path(args.root).resolve()
    projects_dir = (root / args.projects_dir).resolve()
    logging.info("Root: %s", root)
    logging.info("Projects dir: %s", projects_dir)
    logging.info("Thumbnail size: %dx%d (exact=%s)", args.width, args.height, args.exact)

    im_cmd = find_imagemagick_cmd()
    if not im_cmd:
        logging.warning("ImageMagick not found in PATH. Thumbnails will not be (re)created. See %s", "AGENTS.md")
    else:
        logging.info("Using ImageMagick command: %s", im_cmd[0])

    discovered = collect_projects_images(projects_dir, root)

    created = 0
    skipped_existing = 0
    skipped_thumbnail_source = 0
    failed = 0

    # Walk again to actually create thumbnails (so we can use same ordering)
    for category in sorted([p for p in projects_dir.iterdir() if p.is_dir()]):
        logging.info("Processing category: %s", category.name)
        for project in sorted([d for d in category.iterdir() if d.is_dir()]):
            for f in sorted([p for p in project.iterdir() if p.is_file() and is_image_file(p)]):
                if is_thumbnail_file(f):
                    skipped_thumbnail_source += 1
                    logging.debug("  Skipping source thumbnail file: %s", f)
                    continue
                thumb = thumbnail_path_for(f)
                if thumb.exists() and thumb.stat().st_size > 0:
                    skipped_existing += 1
                    logging.debug("  Thumbnail already exists, skipping: %s", thumb)
                    continue
                if not im_cmd:
                    logging.warning("  Skipping thumbnail creation (ImageMagick missing) for: %s", f)
                    failed += 1
                    continue
                ok = make_thumbnail(im_cmd, f, thumb, args.width, args.height, args.exact, args.dry_run)
                if ok:
                    created += 1
                else:
                    failed += 1

    logging.info("Thumbnail pass complete: created=%d, skipped_existing=%d, skipped_thumbnail_source=%d, failed=%d", created, skipped_existing, skipped_thumbnail_source, failed)

    # Attempt to update projects.json conservatively
    pj_path = root / "projects.json"
    if pj_path.exists():
        logging.info("Examining %s for missing image entries", pj_path)
        changed, pj_logs = try_update_projects_json(pj_path, discovered, args.dry_run)
        for line in pj_logs:
            logging.info("projects.json: %s", line)
        if changed:
            logging.info("projects.json updated")
        else:
            logging.info("projects.json not changed")
    else:
        logging.warning("projects.json not found at %s; skipping JSON update", pj_path)

    logging.info("Discovered projects:")
    for idx, project in enumerate(sorted(discovered.keys())):
        parent_dir = os.path.basename(os.path.dirname(os.path.dirname(discovered[project][0]))) if discovered[project] else "Unknown"
        images_count = len(discovered[project])
        logging.info("  %d: %s (Category: %s, Images: %d)", idx + 1, project, parent_dir, images_count)
    logging.info("Done.")

if __name__ == "__main__":
    main()