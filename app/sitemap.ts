import type { MetadataRoute } from 'next';
import { site, services, cities } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-16');

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified, changeFrequency: 'monthly', priority: 1 },
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

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${site.url}/service-areas/${c.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const cityServiceRoutes: MetadataRoute.Sitemap = cities.flatMap((c) =>
    services.map((s) => ({
      url: `${site.url}/service-areas/${c.slug}/${s.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  );

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...cityServiceRoutes];
}
