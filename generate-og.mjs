import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

async function generateOG() {
  const w = 1200, h = 630;

  // Create a gradient background matching the sage/dark theme
  const bg = await sharp({
    create: {
      width: w,
      height: h,
      channels: 4,
      background: { r: 42, g: 59, b: 62, alpha: 1 } // #2a3b3e
    }
  }).png().toBuffer();

  // Add decorative gradient overlay (radial glow top-right)
  const glow = await sharp({
    create: {
      width: 600,
      height: 600,
      channels: 4,
      background: { r: 93, g: 138, b: 149, alpha: 0.25 } // sage-500
    }
  })
    .blur(120)
    .png()
    .toBuffer();

  // Compose the OG image
  let composite = sharp(bg).composite([
    {
      input: glow,
      left: w - 400,
      top: -100,
    },
  ]);

  // Try to add profile photo (small, circular-cropped)
  const photoPath = resolve('public/wisnu_alfian_nur_ashar.jpeg');
  try {
    const photoBuf = readFileSync(photoPath);
    const mask = await sharp({
      create: { width: 160, height: 160, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } }
    })
      .composite([{
        input: Buffer.from(`<svg width="160" height="160"><circle cx="80" cy="80" r="80" fill="white"/></svg>`),
        blend: 'dest-in'
      }])
      .png()
      .toBuffer();

    const circlePhoto = await sharp(photoBuf)
      .resize(160, 160, { fit: 'cover' })
      .composite([{ input: mask, blend: 'dest-in' }])
      .png()
      .toBuffer();

    composite = composite.composite([{
      input: circlePhoto,
      left: 80,
      top: (h - 160) / 2,
    }]);
  } catch (e) {
    console.log('Photo not found, skipping');
  }

  // Add text via SVG
  const svgText = Buffer.from(`
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="nameGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#9dbfc8;stop-opacity:1" />
        </linearGradient>
      </defs>
      <text x="300" y="260" font-family="Georgia, serif" font-weight="bold" font-size="42" fill="url(#nameGrad)">Wisnu Alfian Nur Ashar</text>
      <text x="300" y="310" font-family="Arial, sans-serif" font-size="22" fill="#9dbfc8">Full-Stack Developer &amp; Cyber Security</text>
      <line x1="300" y1="340" x2="700" y2="340" stroke="#5d8a95" stroke-width="2" opacity="0.5"/>
      <text x="300" y="380" font-family="Arial, sans-serif" font-size="18" fill="#c0dce1">Building Secure, High-Performance Systems</text>
      <text x="300" y="415" font-family="Arial, sans-serif" font-size="14" fill="#7a9fac">wisnualfiannurashar.my.id</text>
      <text x="300" y="580" font-family="Arial, sans-serif" font-size="13" fill="#5d8a95" opacity="0.5">© 2026 — All Rights Reserved</text>
    </svg>
  `);

  const final = await composite.composite([{ input: svgText, left: 0, top: 0 }]).png({ compressionLevel: 9 }).toBuffer();

  writeFileSync(resolve('public/og-image.png'), final);
  console.log(`✅ OG image generated: 1200x630 (${Math.round(final.length/1024)}KB)`);
}

generateOG().catch(console.error);
