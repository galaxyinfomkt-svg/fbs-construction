import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services, remodelingServices, site } from '@/lib/site';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { StatsBand } from '@/components/sections/StatsBand';
import { Process } from '@/components/sections/Process';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { serviceIconMap, remodelingIconMap, CheckIcon, ArrowRightIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Our Services | Home Additions, Remodeling & Exteriors in MA',
  description:
    'Home additions, interior remodeling, kitchens, baths, basements, sunrooms, screen porches and deck roofs in Whitinsville, MA — plus siding, windows, doors and decks. Licensed MA contractor.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Home additions and remodeling across Worcester County — plus the exterior work FBS has always done."
        image="/images/project-siding-gray-garage.webp"
        imageAlt="FBS Construction home services in Massachusetts"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* Additions & Remodeling — the main line of work */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Additions &amp; Remodeling</span>
            <h2 className="section-title mt-4">More Space. Same Address.</h2>
            <p className="mt-5 text-lg text-gray-600">
              Eight project types, one licensed team. Interior work runs all year, so a Massachusetts
              winter never puts your remodel on hold.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {remodelingServices.map((s, i) => {
              const Icon = remodelingIconMap[s.icon];
              return (
                <Reveal key={s.slug} delay={(i % 4) * 80} variant="scale">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-gold/40"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/12 text-gold-dark transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold uppercase leading-tight tracking-tight text-charcoal">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{s.short}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-gold-dark">
                      Learn More <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Exterior Work</span>
            <h2 className="section-title mt-4">Siding, Windows, Doors &amp; Decks</h2>
            <p className="mt-5 text-lg text-gray-600">
              The exterior work FBS has done since {site.founded} — still part of what we build, and a
              natural pair with an addition or a porch.
            </p>
          </Reveal>

          <div className="mt-16 space-y-10">
            {services.map((s, i) => {
              const Icon = serviceIconMap[s.icon];
              const reversed = i % 2 === 1;
              return (
                <Reveal
                  key={s.slug}
                  variant="scale"
                  className="grid items-center gap-8 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card lg:grid-cols-2"
                >
                  <Link
                    href={`/services/${s.slug}`}
                    aria-label={`${s.title} — learn more`}
                    className={`group/img relative block h-64 overflow-hidden lg:h-full lg:min-h-[22rem] ${reversed ? 'lg:order-2' : ''}`}
                  >
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent lg:bg-gradient-to-r" />
                  </Link>
                  <div className="p-7 lg:p-10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 font-display text-3xl font-bold uppercase tracking-tight text-charcoal">
                      {s.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-gray-600">{s.description}</p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <CheckIcon className="h-4 w-4 shrink-0 text-gold-dark" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link href={`/services/${s.slug}`} className="btn-primary shine">
                        Learn More
                        <ArrowRightIcon className="h-5 w-5" />
                      </Link>
                      <Link href="/contact" className="btn-dark">
                        Free Estimate
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-12 text-center text-gray-600">
            <p>
              Also offering full{' '}
              <span className="font-semibold text-charcoal">exterior renovations &amp; remodeling</span>{' '}
              across {site.serviceAreas.join(', ')}.
            </p>
          </Reveal>
        </div>
      </section>

      <Process />
      <StatsBand />
      <CtaBanner />
    </>
  );
}
