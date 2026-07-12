#!/bin/bash

# Image Optimization Script
# This script converts and optimizes images to WebP format
# Requires: cwebp (install with: brew install webp)

echo "Starting image optimization..."

# Function to convert and optimize images
optimize_image() {
    input=$1
    output=$2
    quality=${3:-80}
    
    if [ -f "$input" ]; then
        echo "Processing: $input"
        cwebp -q $quality "$input" -o "$output" 2>/dev/null
        if [ $? -eq 0 ]; then
            input_size=$(du -h "$input" | cut -f1)
            output_size=$(du -h "$output" | cut -f1)
            echo "✓ Optimized: $input_size → $output_size"
        else
            echo "✗ Failed to optimize $input"
        fi
    else
        echo "✗ File not found: $input"
    fi
}

# Optimize profile image
optimize_image "public/wisnu_alfian_nur_ashar.jpeg" "public/wisnu_alfian_nur_ashar.webp" 80

# Optimize logo
optimize_image "public/logo.png" "public/logo.webp" 85

# Optimize project images
for image in public/projects/*.png public/projects/*.jpg; do
    if [ -f "$image" ]; then
        base=$(basename "$image" "${image##*.}")
        ext="${image##*.}"
        output="public/projects/${base}.webp"
        optimize_image "$image" "$output" 75
    fi
done

# Optimize certification images
for image in public/certifications/*.png public/certifications/*.jpg; do
    if [ -f "$image" ]; then
        base=$(basename "$image" "${image##*.}")
        ext="${image##*.}"
        output="public/certifications/${base}.webp"
        optimize_image "$image" "$output" 80
    fi
done

echo "Image optimization complete!"
