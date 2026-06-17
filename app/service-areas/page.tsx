import type { Metadata } from 'next';
import Link from 'next/link';
import { cities, services, site } from '@/lib/site';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { serviceIconMap, ArrowRightIcon, PinIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Service Areas | Siding, Windows, Doors & Decks Near You',
  description:
    'FBS Construction serves Whitinsville, Northbridge, Uxbridge, Sutton, Douglas, Millbury, Grafton, Worcester and surrounding Massachusetts towns. Pick a service and your town.',
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        title="Service Areas"
        subtitle="Choose a service to see the Massachusetts towns we cover — and jump straight to your area."
        image="/images/project-siding-navy-wall.webp"
        imageAlt="FBS Construction serving Massachusetts towns"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]}
      />

      {/* Services × cities */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Every Service, Every Town</span>
            <h2 className="section-title mt-4">Find Your Service &amp; Town</h2>
            <p className="mt-5 text-lg text-gray-600">
              Local, licensed and insured. Pick a service below, then your town — we&apos;ll take you
              straight to the details for your area.
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
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold text-charcoal">
                        <Icon className="h-7 w-7" />
                      </span>
                      <div>
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-charcoal">
                          {s.title}
                        </h3>
                        <p className="text-sm text-gray-500">{s.short}</p>
                      </div>
                    </div>
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-gold-dark hover:underline"
                    >
                      Service Details <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                    {cities.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/service-areas/${c.slug}/${s.slug}`}
                        className="group flex items-center justify-between gap-2 rounded-xl bg-gray-50 px-4 py-3 text-sm font-semibold text-charcoal ring-1 ring-gray-200 transition-all hover:bg-gold/10 hover:ring-gold/40"
                      >
                        <span className="flex items-center gap-2">
                          <PinIcon className="h-4 w-4 text-gold-dark" />
                          {c.name}
                        </span>
                        <ArrowRightIcon className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-60" />
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
