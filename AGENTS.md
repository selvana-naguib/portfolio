<!-- filepath: AGENT_INSTRUCTIONS.md -->
# Agent Instructions — Selvana Portfolio

Purpose
- Help automated agents or AI assistants manage and extend Selvana's UI/UX portfolio.
- Primary focus: thumbnail generation, content validation, projects.json sync, and automation.

Repository layout (relevant)
- images/projects/
  - categories: designs, diagrams, mobileApplications, websites, wireframes
  - each category contains numbered project folders (priority order), each with numbered images
  - thumbnails follow convention: original-name-thumbnail.ext
- create-thumbnail.sh — shell script used to generate thumbnails
- projects.json — canonical list of projects and metadata used by the site
- index.html, css/, js/ — site files

Prerequisites (Mac)
- Homebrew (if not installed): /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
- ImageMagick: brew install imagemagick
- Make script executable: chmod +x create-thumbnail.sh

Thumbnail script usage
- Single project folder:
  ./create-thumbnail.sh images/projects/<category>/<NN-project-folder> <resize-percentage>
  Example:
  ./create-thumbnail.sh images/projects/designs/01-homepage 50
- Batch (all immediate project folders in a category):
  for d in images/projects/designs/*; do ./create-thumbnail.sh "$d" 50; done
- Recursive across categories:
  for d in images/projects/*/*; do ./create-thumbnail.sh "$d" 50; done
- Script output:
  - Removes existing *-thumbnail* files in the target folder before generating new thumbnails.
  - Emits lines like: "images/projects/…/image.jpg", (for indexing/debug)

Agent responsibilities
- Validate prerequisites (magick/identify exist and are in PATH).
- Run create-thumbnail.sh for new or modified project folders.
- Detect missing thumbnails by comparing image files vs *-thumbnail.* counterparts.
- Update projects.json if new projects or images are added (ensure paths and ordering match folder numbering).
- Report mismatches: missing images referenced in projects.json, orphan images not referenced.
- Optionally generate metadata (dimensions, aspect ratio, dominant color) and attach into projects.json or a sidecar file.

Recommended checks and validations
- Ensure folder naming uses number prefix for ordering (e.g., 01-project).
- Image filenames should be numbered to define preview order.
- Confirm generated thumbnail exists and is non-zero size:
  test -s path/to/image-thumbnail.jpg || echo "missing: path/to/image-thumbnail.jpg"
- Confirm projects.json references correspond to actual folders/files.

Troubleshooting
- "identify: command not found" or "magick: command not found": ensure ImageMagick installed and PATH updated.
- Permission denied: run chmod +x create-thumbnail.sh and ensure agent user can read/write image folders.
- Unexpected aspect ratios: the script scales by percentage; to resize by pixels, update script to use -resize WxH while preserving aspect ratio (magick file -resize 300x300\>).

Automation & CI ideas
- Add a GitHub Action that runs when images or projects.json change:
  - Setup ImageMagick on runner
  - Run create-thumbnail.sh for modified folders
  - Run a validation script that verifies projects.json vs files and fails CI on mismatches
- Agents can run on a schedule to regenerate thumbnails with updated settings or compress images.

Suggested quick validation script (agent can adapt)
- For each project folder:
  - List images: find folder -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.png" \)
  - For each image ensure corresponding *-thumbnail.* exists
  - Report any missing or stale thumbnails

Notes for contributors
- When adding a project: add numbered folder under correct category -> add originals -> run create-thumbnail.sh -> update projects.json.
- Keep projects.json in sync with folder names and image counts to avoid runtime errors.

Contact
- If automated agents require human confirmation for ambiguous changes, open a PR with proposed JSON updates and generated thumbnails.

End of file.