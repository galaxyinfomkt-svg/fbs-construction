import type { Metadata } from 'next';
import Link from 'next/link';
import { cities, services, site } from '@/lib/site';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { serviceIconMap, PinIcon, ArrowRightIcon, CheckIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Service Areas | Siding, Windows, Doors & Decks Near You',
  description:
    'FBS Construction serves Whitinsville, Northbridge, Uxbridge, Sutton, Douglas, Millbury, Grafton, Worcester and surrounding Massachusetts towns. Find your city.',
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        title="Service Areas"
        subtitle="Proudly serving homeowners across Central Massachusetts and New England. Find your city below."
        image="/images/project-siding-navy-wall.webp"
        imageAlt="FBS Construction serving Massachusetts towns"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]}
      />

      {/* City grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Where We Work</span>
            <h2 className="section-title mt-4">Towns We Serve</h2>
            <p className="mt-5 text-lg text-gray-600">
              Local, licensed and insured — pick your town to see the services we offer in your area.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 70} variant="scale">
                <Link
                  href={`/service-areas/${c.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-dark transition-colors group-hover:bg-gold group-hover:text-charcoal">
                    <PinIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                    {c.name}, MA
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{c.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-gold-dark">
                    View {c.name} <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services × cities matrix */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Every Service, Every Town</span>
            <h2 className="section-title mt-4">What We Offer In Your Area</h2>
            <p className="mt-5 text-lg text-gray-600">
              Each of our core services is available in all of the communities we serve.
            </p>
          </Reveal>

          <div className="mt-14 space-y-6">
            {services.map((s, i) => {
              const Icon = serviceIconMap[s.icon];
              return (
                <Reveal
                  key={s.slug}
                  delay={i * 60}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold text-charcoal">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-charcoal">
                      <Link href={`/services/${s.slug}`} className="hover:text-gold-dark">
                        {s.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {cities.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/service-areas/${c.slug}/${s.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-4 py-2 text-sm font-semibold text-charcoal ring-1 ring-gray-200 transition-all hover:bg-gold/10 hover:ring-gold/40"
                      >
                        <CheckIcon className="h-3.5 w-3.5 text-gold-dark" />
                        {s.title.split(' ')[0]} in {c.name}
                      </Link>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-12 text-center">
            <Link href="/contact" className="btn-primary shine text-base">
              Get a Free Estimate in {site.address.city}
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
