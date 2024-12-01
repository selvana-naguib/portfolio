#!/bin/bash

# Get the input folder path as an argument
folder_path="$1"
resize_percentage="$2"

# Delete existing files with "thumbnail" in their names
find "$folder_path" -type f -name "*-thumbnail*" -delete

# Iterate through each file in the folder
for file in "$folder_path"/*; do
  # Check if the file is an image and is not thumbnail
  if [[ -f "$file" && ! "$file" =~ "thumbnail" ]]; then
    # Get the file extension
    extension="${file##*.}"

    # Calculate the new dimensions, halving the original size
    new_width=$(identify -format "%w" "$file")
    new_height=$(identify -format "%h" "$file")
    new_width=$((new_width * resize_percentage / 100))
    new_height=$((new_height * resize_percentage/ 100))

    # Create the thumbnail path
    thumbnail_path="${file%.*}-thumbnail.$extension"
    echo   "\""${file%.*}.$extension"\","
    # Create the thumbnail using ImageMagick, maintaining aspect ratio
    magick "$file" -scale "$new_width"x"$new_height" -quality "$resize_percentage" "$thumbnail_path" 
    # magick "$file" -resize  50%  "$thumbnail_path"

  fi
done

# # Below Code for nested folders 
#!/bin/bash



# Get the input folder path and resize percentage as arguments
# folder_path="$1"
# resize_percentage="$2"

# # Delete existing files with "thumbnail" in their names
# find "$folder_path" -type f -name "*thumbnail*" -delete

# # Recursively process image files in the folder and its subfolders
# find "$folder_path" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) -exec bash -c 'function create_thumbnail() {
#     local file="$1"
#     local resize_percentage="$2"

#     if [[ -f "$file" && ! "$file" =~ "-thumbnail" ]]; then
#         # Create the thumbnail path (without "thumbnail" in the filename)
#         thumbnail_path="${file%.*}-thumbnail.${file##*.}"

#         # Calculate the new dimensions, halving the original size
#         new_width=$(identify -format "%w" "$file")
#         new_height=$(identify -format "%h" "$file")
#         new_width=$((new_width * resize_percentage / 100))
#         new_height=$((new_height * resize_percentage/ 100))

#     # Create the thumbnail using ImageMagick, maintaining aspect ratio
#     magick "$file" -scale "$new_width"x"$new_height" -quality "$resize_percentage%" "$thumbnail_path" 
#     fi
# } 
# create_thumbnail "$0" "$resize_percentage"' {} \;

# #!/bin/bash

# # # Get the input folder path and resize percentage as arguments
# # folder_path="$1"
# # resize_percentage="$2"

# # # Delete existing files with "thumbnail" in their names
# # find "$folder_path" -type f -name "*-thumbnail*" -delete

# # # Recursively process image files in the folder and its subfolders
# # find "$folder_path" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) -exec convert {} -resize "$resize_percentage%" "${{}%.*}-thumbnail.${{}##*.}" \;