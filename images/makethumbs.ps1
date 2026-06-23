# ============================================
# makethumbs.ps1
# Creates 300px thumbnails for all images
# Requires: ImageMagick ("magick" command)
# ============================================

$SourceFolder = Get-Location
$ThumbFolder  = Join-Path $SourceFolder "thumbs"
$ThumbWidth   = 300

# Create thumbs folder if missing
if (!(Test-Path $ThumbFolder)) {
    Write-Host "Creating thumbnail folder: $ThumbFolder"
    New-Item -ItemType Directory -Path $ThumbFolder | Out-Null
}

# Get all JPG and PNG files
$Images = Get-ChildItem -File -Path .\* -Include *.jpg, *.jpeg, *.png


if ($Images.Count -eq 0) {
    Write-Host "No images found in $SourceFolder"
    exit
}

Write-Host "Processing $($Images.Count) images..."
Write-Host ""

foreach ($img in $Images) {

    $ThumbPath = Join-Path $ThumbFolder $img.Name

    # Skip if thumbnail already exists
    if (Test-Path $ThumbPath) {
        Write-Host "Skipping (exists): $($img.Name)"
        continue
    }

    Write-Host "Creating thumbnail: $($img.Name)"

    # Resize with warning suppression
    magick "$($img.FullName)" `
        -define jpeg:ignore-warnings=true `
        -resize "$ThumbWidth`x$ThumbWidth" `
        "$ThumbPath"
}

Write-Host ""
Write-Host "Done! Thumbnails saved to: $ThumbFolder"
