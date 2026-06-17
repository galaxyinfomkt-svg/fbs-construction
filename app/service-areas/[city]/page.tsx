import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, services, site } from '@/lib/site';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { StatsBand } from '@/components/sections/StatsBand';
import { Process } from '@/components/sections/Process';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { serviceIconMap, CheckIcon, ArrowRightIcon, PhoneIcon, ShieldIcon } from '@/components/icons';

type Params = { params: Promise<{ city: string }> };

const cityHeroes = [
  '/images/hero-front.webp',
  '/images/project-siding-navy-wall.webp',
  '/images/project-board-batten.webp',
  '/images/project-deck-white.webp',
  '/images/project-garage-navy.webp',
  '/images/project-townhomes.webp',
  '/images/project-siding-gray-garage.webp',
  '/images/about-deck-white.webp',
];

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city } = await params;
  const found = cities.find((c) => c.slug === city);
  if (!found) return {};
  return {
    title: `${found.name}, MA Contractor | Siding, Windows, Doors & Decks`,
    description: `FBS Construction is your trusted home exterior contractor in ${found.name}, MA. Expert siding, window, door and deck installation. Free estimates — call ${site.phone}.`,
    alternates: { canonical: `/service-areas/${found.slug}` },
  };
}

export default async function CityPage({ params }: Params) {
  const { city } = await params;
  const idx = cities.findIndex((c) => c.slug === city);
  const found = cities[idx];
  if (!found) notFound();

  const hero = cityHeroes[idx % cityHeroes.length];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GeneralContractor',
        name: `${site.name} — ${found.name}, MA`,
        description: `Home exterior contractor serving ${found.name}, Massachusetts.`,
        url: `${site.url}/service-areas/${found.slug}`,
        telephone: site.phoneRaw,
        areaServed: { '@type': 'City', name: `${found.name}, MA` },
        parentOrganization: { '@type': 'GeneralContractor', name: site.name, url: site.url },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${site.url}/service-areas` },
          { '@type': 'ListItem', position: 3, name: `${found.name}, MA`, item: `${site.url}/service-areas/${found.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        title={`${found.name}, MA`}
        subtitle={`Premium siding, windows, doors and decks for ${found.name} homeowners.`}
        image={hero}
        imageAlt={`Home exterior services in ${found.name}, Massachusetts by FBS Construction`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas', href: '/service-areas' },
          { label: `${found.name}, MA` },
        ]}
      />

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">Your Local Contractor</span>
            <h2 className="section-title mt-4">Home Exterior Experts in {found.name}</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">{found.blurb}</p>
            <p className="mt-4 leading-relaxed text-gray-600">
              As a licensed, bonded and fully insured contractor based in {site.address.city}, FBS
              Construction brings 15+ years of craftsmanship to every {found.name} project — backed by
              our 100% satisfaction guarantee. From your free estimate to the final walkthrough,
              we treat your home like our own.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'Free, no-obligation estimates',
                'Licensed, bonded & insured',
                'Premium, warrantied materials',
                'On-time, on-budget delivery',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                  <CheckIcon className="h-4 w-4 shrink-0 text-gold-dark" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary shine">
                Free Estimate in {found.name}
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-dark">
                <PhoneIcon className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="lg:sticky lg:top-32">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                  <ShieldIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                  Serving {found.name} &amp; Nearby
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Also serving {cities.filter((c) => c.slug !== found.slug).slice(0, 4).map((c) => c.name).join(', ')} and surrounding towns.
                </p>
                <Link href="/contact" className="btn-primary shine mt-5 w-full">
                  Request Free Quote
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <Link href="/service-areas" className="btn-dark mt-3 w-full">
                  All Service Areas
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services in this city */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Services in {found.name}</span>
            <h2 className="section-title mt-4">What We Offer in {found.name}, MA</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => {
              const Icon = serviceIconMap[s.icon];
              return (
                <Reveal key={s.slug} delay={(i % 2) * 100} variant="scale">
                  <Link
                    href={`/service-areas/${found.slug}/${s.slug}`}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark transition-colors group-hover:bg-gold group-hover:text-charcoal">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                        {s.title} in {found.name}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{s.short}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-gold-dark">
                        Learn More <ArrowRightIcon className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Process />
      <StatsBand />
      <CtaBanner />
    </>
  );
}
