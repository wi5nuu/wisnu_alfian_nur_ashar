#!/usr/bin/env node
/**
 * Image Optimization Script for Portfolio
 * Converts images to WebP format for better performance
 * 
 * Usage: npm run optimize-images
 * 
 * Note: Requires sharp package. Install with:
 * npm install sharp --save-dev
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directories = [
  { src: 'public', patterns: ['*.jpg', '*.png', '*.jpeg'] },
  { src: 'public/projects', patterns: ['*.png', '*.jpg'] },
  { src: 'public/certifications', patterns: ['*.png', '*.jpg'] },
];

const IMAGE_CONFIGS = {
  'wisnu_alfian_nur_ashar': { maxWidth: 300, quality: 80 },
  'logo': { maxWidth: 512, quality: 85 },
  'hargakita': { maxWidth: 1200, quality: 75 },
  'grawizah': { maxWidth: 1200, quality: 75 },
  'default': { maxWidth: 1024, quality: 75 },
};

async function getConfig(filename) {
  const basename = path.parse(filename).name;
  for (const [key, config] of Object.entries(IMAGE_CONFIGS)) {
    if (basename.includes(key)) return config;
  }
  return IMAGE_CONFIGS.default;
}

async function optimizeImage(inputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const dirname = path.dirname(inputPath);
    const basename = path.parse(inputPath).name;
    const outputPath = path.join(dirname, `${basename}.webp`);

    // Skip if already WebP or output exists
    if (ext === '.webp' || fs.existsSync(outputPath)) {
      return null;
    }

    const config = await getConfig(basename);
    
    // Get original size
    const originalSize = fs.statSync(inputPath).size;

    // Optimize
    await sharp(inputPath)
      .resize(config.maxWidth, config.maxWidth, { 
        fit: 'inside', 
        withoutEnlargement: true 
      })
      .webp({ quality: config.quality })
      .toFile(outputPath);

    const newSize = fs.statSync(outputPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`✓ ${inputPath}`);
    console.log(`  ${(originalSize / 1024).toFixed(1)} KB → ${(newSize / 1024).toFixed(1)} KB (${savings}% saved)\n`);

    return { input: inputPath, output: outputPath, savings };
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeAllImages() {
  console.log('🖼️  Starting image optimization...\n');

  let totalOptimized = 0;
  let totalSavings = 0;

  for (const dir of directories) {
    const dirPath = dir.src;
    
    if (!fs.existsSync(dirPath)) {
      console.log(`⚠️  Directory not found: ${dirPath}`);
      continue;
    }

    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.png', '.jpeg'].includes(ext)) {
        const fullPath = path.join(dirPath, file);
        const result = await optimizeImage(fullPath);
        if (result) {
          totalOptimized++;
          totalSavings += (result.savings || 0);
        }
      }
    }
  }

  console.log(`\n✅ Optimization complete!`);
  console.log(`📊 Total images optimized: ${totalOptimized}`);
  console.log(`💾 Average savings: ${(totalSavings / totalOptimized).toFixed(1)}%\n`);
  console.log('Next steps:');
  console.log('1. Update image references to use <picture> elements with WebP sources');
  console.log('2. Run: npm run build');
  console.log('3. Test with: npm run preview');
}

// Check if sharp is installed
try {
  await optimizeAllImages();
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND') {
    console.error('❌ Sharp package not found.');
    console.error('Install it with: npm install sharp --save-dev');
    process.exit(1);
  }
  throw error;
}
