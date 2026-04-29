const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// --- Configuration ---
// The folder where your original SVG images are located.
const inputDir = path.join(__dirname, 'public', 'projects'); 
// The folder where the new WEBP images will be saved.
const outputDir = path.join(__dirname, 'public', 'projects');

// ---------------------

// Ensure the output directory exists.
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all files from the input directory.
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  // Filter for .svg files only.
  const svgFiles = files.filter(file => path.extname(file).toLowerCase() === '.svg');

  if (svgFiles.length === 0) {
    console.log('No SVG files found to convert.');
    return;
  }

  console.log(`Found ${svgFiles.length} SVG files. Starting conversion...`);

  // Process each SVG file.
  svgFiles.forEach(file => {
    const inputFile = path.join(inputDir, file);
    const outputFileName = `${path.basename(file, '.svg')}.webp`;
    const outputFile = path.join(outputDir, outputFileName);

    sharp(inputFile)
      .webp({ quality: 80 }) // Adjust quality from 1 to 100
      .toFile(outputFile, (err, info) => {
        if (err) {
          console.error(`Error converting ${file}:`, err);
        } else {
          console.log(`Successfully converted ${file} to ${outputFileName}`);
        }
      });
  });
});