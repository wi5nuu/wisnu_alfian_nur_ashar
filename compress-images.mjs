import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync, readFileSync } from 'fs';
import { join, resolve } from 'path';

const publicDir = resolve('public');

function getImages(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getImages(full));
    else if (/\.(png|jpe?g)$/i.test(entry.name)) results.push(full);
  }
  return results;
}

const images = getImages(publicDir);
let totalSaved = 0;

for (const img of images) {
  const info = await sharp(img).metadata();
  const buf = readFileSync(img);
  const sizeKB = Math.round(buf.length / 1024);

  // Skip small images
  if (sizeKB < 50) continue;

  // Determine max width based on type
  let maxW = 800;
  let quality = 75;
  let fmt = 'png';
  if (img.includes('certifications')) { maxW = 400; quality = 80; }
  if (img.includes('wisnu_alfian')) { maxW = 400; quality = 80; }
  if (img.includes('president_university')) { maxW = 200; quality = 80; }
  if (img.includes('android-chrome-512')) { maxW = 192; quality = 85; }
  if (img.includes('portfolio-display')) { maxW = 600; quality = 80; }
  if (img.includes('projects')) { maxW = 400; quality = 82; }

  // Skip if already smaller than maxW
  if (info.width <= maxW && sizeKB < 100) continue;

  const out = await sharp(img)
    .resize(maxW, null, { withoutEnlargement: true, fit: 'inside' })
    .png({ quality, compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();

  const outKB = Math.round(out.length / 1024);
  const saved = sizeKB - outKB;
  if (saved > 5) {
    writeFileSync(img, out);
    totalSaved += saved;
    console.log(`✓ ${img.replace(publicDir, '')}: ${sizeKB}KB → ${outKB}KB (saved ${saved}KB)`);
  }
}

console.log(`\n✅ Total saved: ${totalSaved}KB (${Math.round(totalSaved/1024)}MB)`);
