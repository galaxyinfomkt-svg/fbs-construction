import type { MetadataRoute } from 'next';
import { site, services, remodelingServices, cities } from '@/lib/site';
import { allServices } from '@/lib/all-services';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-16');
  // Home was rewritten for the Home Additions & Remodeling repositioning.
  const homeModified = new Date('2026-11-19');

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: homeModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/service-areas`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/about`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${site.url}/gallery`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // The eight Additions & Remodeling pages — the repositioning the whole site
  // is built around, so they carry the higher priority.
  const remodelingRoutes: MetadataRoute.Sitemap = remodelingServices.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: homeModified,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // City landing pages are back as of 20/11/2026 — one per town, each with its
  // own local content rather than the same page with the name swapped.
  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${site.url}/service-areas/${c.slug}`,
    lastModified: homeModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const cityServiceRoutes: MetadataRoute.Sitemap = cities.flatMap((c) =>
    allServices.map((s) => ({
      url: `${site.url}/service-areas/${c.slug}/${s.slug}`,
      lastModified: homeModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  );

  return [...staticRoutes, ...remodelingRoutes, ...serviceRoutes, ...cityRoutes, ...cityServiceRoutes];
}
