/* ═══════════════════════════════════════════════════════════════
   ALL TWELVE SERVICES, IN ONE SHAPE
   The site holds its services in two places: the eight Additions &
   Remodeling services (lib/site.ts + lib/remodeling-pages.ts) and
   the four exterior services (lib/site.ts). The city pages need all
   twelve in one list, with the fields the local copy engine reads.
   ═══════════════════════════════════════════════════════════════ */

import { services, remodelingServices } from './site';
import { remodelingPages } from './remodeling-pages';

export type LocalService = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  heroTagline: string;
  overview: string[];
  benefits: { title: string; text: string }[];
  options: { name: string; text: string }[];
  /** Additions & Remodeling pages deliberately carry no photo yet. */
  image?: string;
  imageAlt?: string;
  /** Which of the two groups this belongs to, for grouping in lists. */
  group: 'additions-remodeling' | 'exterior';
};

const remodeling: LocalService[] = remodelingServices.map((s) => {
  const content = remodelingPages[s.slug];
  return {
    slug: s.slug,
    title: s.title,
    short: s.short,
    description: content?.overview[0] ?? s.short,
    features: content?.features ?? s.bullets,
    heroTagline: content?.heroTagline ?? s.short,
    overview: content?.overview ?? [s.short],
    benefits: content?.benefits ?? [],
    options: content?.options ?? [],
    group: 'additions-remodeling',
  };
});

const exterior: LocalService[] = services.map((s) => ({
  slug: s.slug,
  title: s.title,
  short: s.short,
  description: s.description,
  features: s.features,
  heroTagline: s.heroTagline,
  overview: s.overview,
  benefits: s.benefits,
  options: s.options,
  image: s.image,
  imageAlt: s.imageAlt,
  group: 'exterior',
}));

/** Additions and remodeling first — that is the work the site is built to sell. */
export const allServices: LocalService[] = [...remodeling, ...exterior];

const bySlug = new Map(allServices.map((s) => [s.slug, s]));

export function getService(slug: string): LocalService | undefined {
  return bySlug.get(slug);
}
