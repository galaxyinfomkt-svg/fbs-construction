import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, '_raw_images');
const OUT = path.join(ROOT, 'public', 'images');

// Map of raw source files -> semantic name + target max width + quality
const JOBS = [
  // Logo (keep alpha)
  { src: '691e2af888e1e6ae019672f3.png', out: 'logo.webp', width: 480, quality: 90, alpha: true },
  // Hero (front gray facade, blue sky)
  { src: '691e6c655e13ec8f9a15daec.webp', out: 'hero-front.webp', width: 1920, quality: 74 },
  // Gallery / project photos
  { src: '691e65f8f05eaff76735f997.jpg', out: 'project-deck-white.webp', width: 1400, quality: 76 },
  { src: '691e6c658273682708d4f0b6.webp', out: 'about-deck-white.webp', width: 1400, quality: 76 },
  { src: '691e6c65300f06620893463b.webp', out: 'project-siding-navy-wall.webp', width: 1400, quality: 76 },
  { src: '691e6c6559e47b07675c4f50.webp', out: 'project-deck-framing.webp', width: 1400, quality: 76 },
  { src: '691e6c6559e47b58825c4f4f.webp', out: 'project-garage-navy.webp', width: 1400, quality: 76 },
  { src: '691e6c65827368ae47d4f0b7.webp', out: 'project-siding-navy-bay.webp', width: 1400, quality: 76 },
  { src: '691e6c65840ed12161485080.webp', out: 'project-townhomes.webp', width: 1400, quality: 76 },
  { src: '691e6c65e171b852e64b2c5f.webp', out: 'project-board-batten.webp', width: 1200, quality: 76 },
  { src: '691e6c65e171b854a04b2c5e.webp', out: 'project-siding-gray-garage.webp', width: 1400, quality: 76 },
];

async function run() {
  await mkdir(OUT, { recursive: true });
  let totalIn = 0;
  let totalOut = 0;
  for (const job of JOBS) {
    const inPath = path.join(SRC, job.src);
    const outPath = path.join(OUT, job.out);
    const pipeline = sharp(inPath).resize({
      width: job.width,
      withoutEnlargement: true,
    });
    const buf = await pipeline
      .webp({ quality: job.quality, effort: 6, alphaQuality: job.alpha ? 100 : undefined })
      .toBuffer();
    await sharp(buf).toFile(outPath);
    const inMeta = await sharp(inPath).metadata();
    totalIn += inMeta.size || 0;
    totalOut += buf.length;
    console.log(
      `${job.out.padEnd(34)} ${(buf.length / 1024).toFixed(0).padStart(5)} KB  (${inMeta.width}x${inMeta.height} -> w${Math.min(job.width, inMeta.width)})`,
    );
  }
  // Square icon from logo for favicon / PWA (white bg so it shows on dark)
  await sharp(path.join(SRC, '691e2af888e1e6ae019672f3.png'))
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(ROOT, 'app', 'icon.png'));
  // OG image (1200x630) on charcoal background with logo centered
  const logoForOg = await sharp(path.join(SRC, '691e2af888e1e6ae019672f3.png'))
    .resize(760, null, { withoutEnlargement: true })
    .toBuffer();
  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: { r: 26, g: 26, b: 26, alpha: 1 } },
  })
    .composite([{ input: logoForOg, gravity: 'center' }])
    .png()
    .toFile(path.join(OUT, 'og-image.png'));

  console.log(
    `\nTotal: ${(totalIn / 1024 / 1024).toFixed(2)} MB -> ${(totalOut / 1024 / 1024).toFixed(2)} MB optimized`,
  );
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
