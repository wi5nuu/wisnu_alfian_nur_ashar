// Generates public/og-image.jpg (1200x630) in the site's black + lime style.
// Usage: node scripts/generate-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { inflateSync } from 'zlib';
import { tmpdir } from 'os';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
// Pango wants TTF/OTF; fontsource ships WOFF → unwrap to sfnt (WOFF1 is just zlib-compressed tables).
function woffToTtf(src, dst) {
  const b = readFileSync(src);
  const n = b.readUInt16BE(12);
  const dirs = [];
  for (let i = 0; i < n; i++) {
    const o = 44 + i * 20;
    dirs.push({ tag: b.subarray(o, o + 4), off: b.readUInt32BE(o + 4), comp: b.readUInt32BE(o + 8), orig: b.readUInt32BE(o + 12), sum: b.readUInt32BE(o + 16) });
  }
  const head = Buffer.alloc(12 + n * 16);
  b.copy(head, 0, 4, 8);
  head.writeUInt16BE(n, 4);
  let sr = 1, es = 0;
  while (sr * 2 <= n) { sr *= 2; es++; }
  head.writeUInt16BE(sr * 16, 6); head.writeUInt16BE(es, 8); head.writeUInt16BE(n * 16 - sr * 16, 10);
  const parts = [head];
  let pos = head.length;
  dirs.forEach((d, i) => {
    const raw = b.subarray(d.off, d.off + d.comp);
    const data = d.comp < d.orig ? inflateSync(raw) : raw;
    const pad = (4 - (data.length % 4)) % 4;
    const r = 12 + i * 16;
    d.tag.copy(head, r); head.writeUInt32BE(d.sum, r + 4); head.writeUInt32BE(pos, r + 8); head.writeUInt32BE(d.orig, r + 12);
    parts.push(data, Buffer.alloc(pad));
    pos += data.length + pad;
  });
  writeFileSync(dst, Buffer.concat(parts));
}
const tmp = join(tmpdir(), 'og-fonts');
mkdirSync(tmp, { recursive: true });
const fonts = {};
const font = (w) => {
  const out = join(tmp, `outfit-${w}.ttf`);
  if (fonts[w]) return out;
  fonts[w] = true;
  woffToTtf(join(root, 'node_modules/@fontsource/outfit/files', `outfit-latin-${w}-normal.woff`), out);
  return out;
};
const W = 1200, H = 630;

const text = async (t, w, px, rgba) => {
  const buf = await sharp({
    text: { text: `<span foreground="${rgba}">${t}</span>`, font: `Outfit ${w === 700 ? 'Bold' : 'Medium'} ${px}`, fontfile: font(w), rgba: true, dpi: 72 },
  }).png().toBuffer();
  return buf;
};

// background: black, lime glow, perspective-ish grid, wireframe gems
const lines = [];
for (let i = -12; i <= 12; i++) lines.push(`<line x1="${600 + i * 40}" y1="330" x2="${600 + i * 170}" y2="${H}" />`);
for (let j = 0; j < 8; j++) { const y = 330 + Math.pow(j / 7, 1.8) * 300; lines.push(`<line x1="0" y1="${y.toFixed(1)}" x2="${W}" y2="${y.toFixed(1)}" />`); }
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="g" cx="78%" cy="38%" r="55%"><stop offset="0" stop-color="#84E10C" stop-opacity=".28"/><stop offset="1" stop-color="#84E10C" stop-opacity="0"/></radialGradient>
    <linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0A0A0A" stop-opacity="1"/><stop offset=".55" stop-color="#0A0A0A" stop-opacity="0"/></linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0A0A0A"/>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <g stroke="#84E10C" stroke-opacity=".22" stroke-width="1">${lines.join('')}</g>
  <rect width="${W}" height="${H}" fill="url(#f)"/>
  <g fill="none" stroke="#84E10C" stroke-width="2" stroke-opacity=".9">
    <polygon points="930,150 1010,190 1010,280 930,320 850,280 850,190"/>
    <polyline points="850,190 930,230 1010,190 M930,230 930,320"/>
    <circle cx="930" cy="235" r="150" stroke-opacity=".25"/>
    <circle cx="930" cy="235" r="215" stroke-opacity=".12"/>
  </g>
  <circle cx="930" cy="235" r="10" fill="#B4F461"/>
  <g stroke="#84E10C" stroke-opacity=".5"><line x1="930" y1="235" x2="1080" y2="120"/><line x1="930" y1="235" x2="1110" y2="330"/><line x1="930" y1="235" x2="780" y2="130"/></g>
  <g fill="#B4F461"><circle cx="1080" cy="120" r="6"/><circle cx="1110" cy="330" r="6"/><circle cx="780" cy="130" r="6"/></g>
  <rect x="64" y="70" width="190" height="38" rx="19" fill="none" stroke="#fff" stroke-opacity=".3"/>
  <circle cx="86" cy="89" r="5" fill="#84E10C"/>
</svg>`;

const layers = [
  { input: Buffer.from(svg), top: 0, left: 0 },
  { input: await text('Portfolio 2026', 500, 18, '#ffffff'), top: 78, left: 100 },
  { input: await text('WISNU ALFIAN', 700, 92, '#ffffff'), top: 190, left: 64 },
  { input: await text('NUR ASHAR', 700, 92, '#84E10C'), top: 290, left: 64 },
  { input: await text('Cyber Security · AI · Software Engineering · DevOps', 500, 26, '#d4d4d4'), top: 430, left: 66 },
  { input: await text('wisnualfiannurashar.my.id', 500, 22, '#84E10C'), top: 530, left: 66 },
];

await sharp({ create: { width: W, height: H, channels: 3, background: '#0A0A0A' } })
  .composite(layers)
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(join(root, 'public/og-image.jpg'));
console.log('wrote public/og-image.jpg');
