/* ═══════════════════════════════════════════════════════════════
   DETERMINISTIC VARIATION
   Two pages on this site should not read alike. Everything here
   picks from a pool using a stable hash of the page's own keys,
   so the result is different per page but identical on every build.
   No Math.random, no Date, nothing that moves between builds.
   ═══════════════════════════════════════════════════════════════ */

/** FNV-1a. Small, stable, and good enough to spread 1,300 pages. */
export function hash(...parts: string[]): number {
  let h = 0x811c9dc5;
  const input = parts.join('::');
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/** Pick one item from a pool, stably, for the given keys. */
export function pick<T>(pool: readonly T[], ...keys: string[]): T {
  if (pool.length === 0) throw new Error('pick() called with an empty pool');
  return pool[hash(...keys) % pool.length];
}

/** Pick `count` distinct items from a pool, stably. */
export function pickMany<T>(pool: readonly T[], count: number, ...keys: string[]): T[] {
  const out: T[] = [];
  const used = new Set<number>();
  const take = Math.min(count, pool.length);
  let salt = 0;
  while (out.length < take) {
    const index = hash(...keys, String(salt)) % pool.length;
    if (!used.has(index)) {
      used.add(index);
      out.push(pool[index]);
    }
    salt++;
    if (salt > pool.length * 8) break;
  }
  return out;
}

/** Reorder a list stably — same keys, same order, every build. */
export function shuffle<T>(pool: readonly T[], ...keys: string[]): T[] {
  const out = [...pool];
  for (let i = out.length - 1; i > 0; i--) {
    const j = hash(...keys, 'shuffle', String(i)) % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** True roughly half the time, stably, for an either/or choice. */
export function flag(...keys: string[]): boolean {
  return hash(...keys) % 2 === 0;
}

/* ─────────── Page composition ─────────── */

/**
 * The blocks a city or city+service page can be built from. The hero, the
 * quote form and the footer are fixed — these are the ones that move.
 */
export const SECTION_POOL = [
  'local-intro',
  'what-we-build',
  'why-this-town',
  'process',
  'gallery',
  'credentials',
  'nearby',
  'faq',
] as const;

export type SectionName = (typeof SECTION_POOL)[number];

/** Sections that always lead, so the page still makes sense when read top down. */
const ANCHORED: SectionName[] = ['local-intro'];

/**
 * A stable section order for a page. The intro stays first; the rest rotate,
 * which is a large part of why two pages do not read like the same page.
 */
export function sectionOrder(...keys: string[]): SectionName[] {
  const movable = SECTION_POOL.filter((s) => !ANCHORED.includes(s));
  return [...ANCHORED, ...shuffle(movable, ...keys, 'sections')];
}

/* ─────────── Copy pools ─────────── */

/** Headline shapes for a city + service page. */
export const HEADLINE_SHAPES = [
  (service: string, city: string) => `${service} in ${city}, MA`,
  (service: string, city: string) => `${city} ${service.toLowerCase()}, built by a licensed MA crew`,
  (service: string, city: string) => `Looking for ${service.toLowerCase()} in ${city}?`,
  (service: string, city: string) => `${service} for ${city} homeowners`,
  (service: string, city: string) => `${city}, MA ${service.toLowerCase()} done start to finish`,
  (service: string, city: string) => `The ${service.toLowerCase()} crew ${city} keeps calling back`,
] as const;

/** Headline shapes for a city hub page. */
export const CITY_HEADLINE_SHAPES = [
  (city: string) => `Home additions and remodeling in ${city}, MA`,
  (city: string) => `${city}'s licensed addition and remodeling contractor`,
  (city: string) => `Building additions in ${city}, MA since 2010`,
  (city: string) => `${city} home additions, kitchens, baths and basements`,
  (city: string) => `Remodeling ${city} homes, permit to final inspection`,
] as const;

/**
 * The angle an opening paragraph takes. Each one forces the copy to lead with
 * a different fact about the town, which is what makes the text genuinely
 * different rather than reshuffled.
 */
export const OPENING_ANGLES = [
  'climate',
  'housing-stock',
  'landmarks',
  'permits',
  'distance',
] as const;

export type OpeningAngle = (typeof OPENING_ANGLES)[number];

export function openingAngle(...keys: string[]): OpeningAngle {
  return pick(OPENING_ANGLES, ...keys, 'opening');
}

/** Sub-heading shapes, rotated so section titles differ page to page. */
export const SECTION_TITLES: Record<SectionName, readonly string[]> = {
  'local-intro': ['The short version', 'Where we start', 'First things first'],
  'what-we-build': ['What we build here', 'The work, specifically', 'What this actually covers'],
  'why-this-town': [
    'Why homeowners here call us',
    'What makes this town different',
    'Built for this street, not a catalogue',
  ],
  process: ['How your project runs', 'From first visit to final walkthrough', 'The order things happen in'],
  gallery: ['Built by FBS crews', 'Recent work', 'Real job sites, no stock photos'],
  credentials: ['Licensed, insured, and on the permit', 'The paperwork behind the work', 'Who is responsible'],
  nearby: ['Nearby towns we serve', 'Also working in', 'Around the corner from here'],
  faq: ['What homeowners ask before they call', 'Questions we get here', 'Before you pick up the phone'],
};

export function sectionTitle(section: SectionName, ...keys: string[]): string {
  return pick(SECTION_TITLES[section], ...keys, section);
}

/** Call-to-action wording, so every page does not close the same way. */
export const CTA_LINES = [
  'Tell us what the house needs and we will come look at it.',
  'A free visit, a written price, and a licensed crew.',
  'Send the form and we will call you back to set up a visit.',
  'No phone quotes. We measure first, then put a price in writing.',
  'We will walk the space with you before anyone talks about money.',
] as const;

export function ctaLine(...keys: string[]): string {
  return pick(CTA_LINES, ...keys, 'cta');
}
