import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ICONS = [
  'python', 'cplusplus', 'openjdk', 'php', 'go',
  'postgresql', 'mysql', 'mongodb',
  'react', 'nextdotjs', 'astro', 'typescript', 'tailwindcss',
  'supabase', 'greensock', 'framer', 'shadcnui', 'google',
  'laravel', 'javascript', 'postman',
  'pytorch', 'fastapi', 'opencv', 'kaggle', 'roboflow',
  'googlecloud', 'huggingface', 'googlegemini',
  'hackthebox', 'kalilinux', 'docker',
  'vercel', 'railway', 'cloudflare', 'firebase',
  'nodedotjs', 'androidstudio', 'googlesheets', 'html5',
  'burpsuite', 'googleanalytics', 'jira', 'googlecolab',
];

const OUT_DIR = join(__dirname, '..', 'public', 'icons');

const CDN = 'https://cdn.simpleicons.org';

async function download(slug) {
  const url = `${CDN}/${slug}`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Failed to download ${slug}: ${resp.status}`);
  return await resp.text();
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  let downloaded = 0;
  let cached = 0;
  let failed = 0;

  for (const slug of ICONS) {
    const outPath = join(OUT_DIR, `${slug}.svg`);
    if (existsSync(outPath)) {
      cached++;
      continue;
    }
    try {
      const svg = await download(slug);
      writeFileSync(outPath, svg, 'utf-8');
      downloaded++;
      console.log(`  Downloaded: ${slug}.svg`);
    } catch (err) {
      failed++;
      console.warn(`  WARN: ${err.message} — skipping`);
    }
  }

  console.log(`\nDone. ${downloaded} downloaded, ${cached} cached, ${failed} failed (${downloaded + cached + failed} total).`);
}

main().catch(err => {
  console.error('Icon download failed:', err);
  process.exit(1);
});
