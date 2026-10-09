// Card-size (640px wide) copies of project screenshots + responsive portrait sizes.
// Usage: node scripts/make-thumbs.mjs   (outputs are committed; re-run after adding images)
import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const out = join(pub, 'projects', 'thumb');
mkdirSync(out, { recursive: true });

for (const f of readdirSync(join(pub, 'projects'))) {
  if (!f.endsWith('.webp')) continue;
  const img = sharp(join(pub, 'projects', f));
  const { width } = await img.metadata();
  await img.resize({ width: Math.min(width, 640) }).webp({ quality: 78, effort: 5 }).toFile(join(out, f));
}
for (const w of [480, 960]) {
  await sharp(join(pub, 'wisnu-alfian.webp')).resize({ width: w }).webp({ quality: 80, effort: 5 }).toFile(join(pub, `wisnu-alfian-${w}.webp`));
}
console.log('thumbs ready', existsSync(out));
