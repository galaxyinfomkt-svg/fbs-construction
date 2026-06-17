import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services, site } from '@/lib/site';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { StatsBand } from '@/components/sections/StatsBand';
import { Process } from '@/components/sections/Process';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { serviceIconMap, CheckIcon, ArrowRightIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Our Services | Siding, Windows, Doors & Decks in MA',
  description:
    'Full-service home exterior contractor in Massachusetts & New England. Siding installation, window replacement, door installation and custom deck construction. Free estimates.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Premium siding, windows, doors and decks — expertly installed across Massachusetts and New England."
        image="/images/project-siding-gray-garage.webp"
        imageAlt="FBS Construction home exterior services in Massachusetts"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title mt-4">Expert Exterior Solutions, Done Right</h2>
            <p className="mt-5 text-lg text-gray-600">
              From protecting your home to transforming how it looks and feels, our craftsmen deliver
              premium results backed by a 100% satisfaction guarantee.
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
                  <div className={`relative h-64 lg:h-full lg:min-h-[22rem] ${reversed ? 'lg:order-2' : ''}`}>
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent lg:bg-gradient-to-r" />
                  </div>
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
