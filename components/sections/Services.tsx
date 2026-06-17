import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/site';
import { serviceIconMap, CheckIcon, ArrowRightIcon } from '../icons';
import { Reveal } from '../Reveal';

export function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="section-title mt-4">Expert Exterior Solutions, Done Right</h2>
          <p className="mt-5 text-lg text-gray-600">
            From siding and windows to doors and custom decks, we deliver premium craftsmanship that
            protects your home and elevates its value.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIconMap[s.icon];
            return (
              <Reveal
                key={s.slug}
                as="article"
                delay={(i % 2) * 120}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-gold/40"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-charcoal shadow-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="absolute bottom-4 left-5 right-5 font-display text-2xl font-bold uppercase tracking-tight text-white">
                    {s.title}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-gray-600">{s.description}</p>
                  <ul className="mt-5 grid gap-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <CheckIcon className="h-4 w-4 shrink-0 text-gold-dark" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between gap-3 pt-2">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-charcoal transition-colors hover:text-gold-dark"
                    >
                      Learn More
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-4 py-2 text-xs font-bold uppercase tracking-wide text-gold-dark transition-colors hover:bg-gold hover:text-charcoal"
                    >
                      Free Quote
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-12 text-center text-gray-600">
          Need something more? We also handle full{' '}
          <span className="font-semibold text-charcoal">exterior renovations &amp; remodeling</span>.{' '}
          <Link href="/contact" className="font-semibold text-gold-dark underline-offset-4 hover:underline">
            Tell us about your project →
          </Link>
        </p>
      </div>
    </section>
  );
}
