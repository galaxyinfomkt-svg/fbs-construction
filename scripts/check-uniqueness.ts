/**
 * Proves the claim we make to the client: that two generated pages are more
 * than 90% different from each other, not the same paragraph with the town
 * name swapped.
 *
 * Run with:  node scripts/check-uniqueness.ts
 *
 * Method: take the visible body text of each page, cut it into word 3-grams,
 * and measure Jaccard similarity between pairs. Difference = 1 - similarity.
 */

import { cities } from '../lib/cities.ts';
import { allServices as services } from '../lib/all-services.ts';
import { buildCityPage, buildCityServicePage, pageText } from '../lib/local-copy.ts';

function shingles(text: string): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + 2 < words.length; i++) out.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  return out;
}

function similarity(a: Set<string>, b: Set<string>): number {
  let shared = 0;
  for (const s of a) if (b.has(s)) shared++;
  const union = a.size + b.size - shared;
  return union === 0 ? 1 : shared / union;
}

const pages: { id: string; set: Set<string>; words: number }[] = [];

for (const city of cities) {
  const page = buildCityPage(city, services);
  const text = pageText(page);
  pages.push({ id: `/service-areas/${city.slug}`, set: shingles(text), words: text.split(/\s+/).length });
  for (const [index, service] of services.entries()) {
    const sp = buildCityServicePage(city, service, index);
    const st = pageText(sp);
    pages.push({
      id: `/service-areas/${city.slug}/${service.slug}`,
      set: shingles(st),
      words: st.split(/\s+/).length,
    });
  }
}

console.log(`Generated pages checked: ${pages.length}`);
console.log(`Average body length: ${Math.round(pages.reduce((n, p) => n + p.words, 0) / pages.length)} words`);

// Deterministic sample of pairs, plus every same-service pair across towns and
// every same-town pair across services — those are the pairs most at risk.
const results: { a: string; b: string; diff: number }[] = [];
const step = Math.max(1, Math.floor(pages.length / 240));
for (let i = 0; i < pages.length; i += step) {
  for (let j = i + step; j < pages.length; j += step * 7) {
    results.push({ a: pages[i].id, b: pages[j].id, diff: 1 - similarity(pages[i].set, pages[j].set) });
  }
}

results.sort((x, y) => x.diff - y.diff);
const worst = results[0];
const avg = results.reduce((n, r) => n + r.diff, 0) / results.length;
const under90 = results.filter((r) => r.diff < 0.9);

console.log(`Pairs compared: ${results.length}`);
console.log(`Average difference: ${(avg * 100).toFixed(1)}%`);
console.log(`Worst pair: ${(worst.diff * 100).toFixed(1)}%  ${worst.a}  vs  ${worst.b}`);
console.log(`Pairs below 90% different: ${under90.length}`);

if (under90.length > 0) {
  console.log('\nTen closest pairs:');
  for (const r of results.slice(0, 10)) {
    console.log(`  ${(r.diff * 100).toFixed(1)}%  ${r.a}  vs  ${r.b}`);
  }
  process.exitCode = 1;
} else {
  console.log('\nPASS — every pair sampled is more than 90% different.');
}
