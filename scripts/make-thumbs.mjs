// Card-size (640px wide) copies of project screenshots + responsive portrait sizes.
// Usage: node scripts/make-thumbs.mjs   (outputs are committed; re-run after adding images)
import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const out = join(pub, 'projects', 'thumb');
// Shown at full resolution everywhere (owner request) — never downscaled.
const KEEP_FULL = new Set(['asharGrosirParfum.webp'.toLowerCase()]);
mkdirSync(out, { recursive: true });

for (const f of readdirSync(join(pub, 'projects'))) {
  if (!f.endsWith('.webp')) continue;
  const img = sharp(join(pub, 'projects', f));
  const { width } = await img.metadata();
  if (KEEP_FULL.has(f.toLowerCase())) { await img.webp({ quality: 85, effort: 5 }).toFile(join(out, f)); continue; }
  await img.resize({ width: Math.min(width, 640) }).webp({ quality: 78, effort: 5 }).toFile(join(out, f));
}
for (const w of [480, 640, 960]) {
  await sharp(join(pub, 'wisnu-alfian.webp')).resize({ width: w }).webp({ quality: 80, effort: 5 }).toFile(join(pub, `wisnu-alfian-${w}.webp`));
}
console.log('thumbs ready', existsSync(out));
