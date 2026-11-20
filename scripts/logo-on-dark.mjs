/**
 * Builds public/images/logo-dark.webp: the same logo, but with the counters of
 * the FBS letters filled white instead of transparent.
 *
 * The source logo leaves the inside of the letters transparent, so on a dark
 * header the letters disappear — which is why the header used to put a white
 * chip behind it. Flood-filling the transparent area from the edges tells us
 * which transparent pixels are "outside" the artwork; everything transparent
 * that the flood never reaches is an enclosed counter, and gets white.
 */
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'public/images/logo.webp');
const out = path.join(root, 'public/images/logo-dark.webp');

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h, channels: ch } = info;
const ALPHA_EMPTY = 20;

const empty = (i) => data[i * ch + 3] < ALPHA_EMPTY;
const outside = new Uint8Array(w * h);
const queue = [];

for (let x = 0; x < w; x++) {
  for (const y of [0, h - 1]) {
    const i = y * w + x;
    if (empty(i) && !outside[i]) { outside[i] = 1; queue.push(i); }
  }
}
for (let y = 0; y < h; y++) {
  for (const x of [0, w - 1]) {
    const i = y * w + x;
    if (empty(i) && !outside[i]) { outside[i] = 1; queue.push(i); }
  }
}

while (queue.length) {
  const i = queue.pop();
  const x = i % w;
  const y = (i - x) / w;
  const neighbours = [];
  if (x > 0) neighbours.push(i - 1);
  if (x < w - 1) neighbours.push(i + 1);
  if (y > 0) neighbours.push(i - w);
  if (y < h - 1) neighbours.push(i + w);
  for (const n of neighbours) {
    if (!outside[n] && empty(n)) { outside[n] = 1; queue.push(n); }
  }
}

let filled = 0;
for (let i = 0; i < w * h; i++) {
  if (empty(i) && !outside[i]) {
    const p = i * ch;
    data[p] = 255; data[p + 1] = 255; data[p + 2] = 255; data[p + 3] = 255;
    filled++;
  }
}

await sharp(data, { raw: { width: w, height: h, channels: ch } })
  .webp({ quality: 95, alpha: true })
  .toFile(out);

console.log(`logo-dark.webp written — ${filled} counter pixels filled white`);
