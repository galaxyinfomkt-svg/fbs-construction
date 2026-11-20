import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Geist } from 'next/font/google';
import { site } from '@/lib/site';
import { projects } from '@/lib/projects';
import { HomeHero } from '@/components/home/HomeHero';
import { QuoteSection } from '@/components/home/QuoteSection';
import { Credentials } from '@/components/home/Credentials';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { WinterBand } from '@/components/home/WinterBand';
import { FinalCta } from '@/components/home/FinalCta';

const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-geist' });

export const metadata: Metadata = {
  title: { absolute: `Our Projects — Additions, Remodels and Exteriors | ${site.name}` },
  description:
    'Real FBS Construction jobs across Worcester County and the Blackstone Valley — exterior renovations, siding, decks, garage doors and new construction, with what we found and what we did about it.',
  alternates: { canonical: '/projects' },
  openGraph: {
    type: 'website',
    url: `${site.url}/projects`,
    siteName: site.name,
    title: `Our Projects | ${site.name}`,
    description: 'Real FBS Construction jobs across Massachusetts, with the detail behind each one.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: `${site.name} projects` }],
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${site.url}/projects#webpage`,
        url: `${site.url}/projects`,
        name: `Our Projects | ${site.name}`,
        inLanguage: 'en-US',
        about: { '@id': `${site.url}/#business` },
      },
      {
        '@type': 'ItemList',
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.title,
          url: `${site.url}/projects/${p.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${site.url}/projects` },
        ],
      },
    ],
  };

  return (
    <div className={geist.variable}>
      <HomeHero
        eyebrow="Licensed MA builder · real jobs"
        title="The work, and what was behind it"
        subtitle="Every job on this page is ours. Each one says what the homeowner asked for, what we found once we opened it up, and what we did about it."
        ariaLabel="FBS Construction projects in Massachusetts"
      />

      <QuoteSection
        title="Want something like one of these?"
        text="Send the form or call. We will come out, look at the house and put a real number in writing."
        instance="projects"
      />

      <section className="bg-white py-20 font-geist sm:py-24">
        <div className="container-x">
          <h2 className="max-w-[24ch] text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
            {projects.length} jobs, start to finish
          </h2>
          <p className="mt-4 max-w-[62ch] text-lg text-gray-600">
            Additions and remodeling is the work we are built around, and exteriors are what we have been doing the
            longest. Both are here.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-card border border-gray-200 bg-white transition hover:border-gold hover:shadow-[0_30px_80px_-50px_rgba(0,0,0,0.55)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={p.photos[0].src}
                    alt={p.photos[0].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug text-ink">{p.title}</h3>
                  <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-gray-600">{p.summary}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-ink-muted">
                    {p.area} · {p.duration}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <Credentials />
      <WinterBand />
      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
