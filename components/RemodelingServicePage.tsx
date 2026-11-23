import Link from 'next/link';
import Image from 'next/image';
import { remodelingServices, site, type RemodelingService } from '@/lib/site';
import type { RemodelingPage } from '@/lib/remodeling-pages';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { remodelingIconMap, CheckIcon, ArrowRightIcon, PhoneIcon } from '@/components/icons';

/** Label shown on each job photo. */
const stageLabel = { before: 'Before', during: 'During', after: 'After' } as const;

/**
 * Detail page for the Additions & Remodeling services.
 *
 * Same sections and spacing as the exterior service pages. The hero runs on a
 * plain charcoal field and the "other services" cards are icon cards, because
 * stock photography is never shown as if it were FBS's work.
 *
 * A page gets a photo gallery only once FBS has confirmed photos for it. As of
 * 23/11/2026 that is Sunrooms and Deck Roofs; kitchen, bath, basement, interior
 * remodeling, home additions and screen porches still have none, and those
 * pages render exactly as before.
 */
export function RemodelingServicePage({
  service,
  content,
}: {
  service: RemodelingService;
  content: RemodelingPage;
}) {
  const Icon = remodelingIconMap[service.icon];
  const others = remodelingServices.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={content.heroTagline}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      {/* Overview + features */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <Reveal>
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
              <Icon className="h-8 w-8" />
            </span>
            <h2 className="section-title mt-6">{service.title} in Worcester County</h2>
            {content.overview.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 text-lg leading-relaxed text-gray-600">
                {p}
              </p>
            ))}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {content.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Sticky quote card */}
          <Reveal variant="right">
            <div className="lg:sticky lg:top-32">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 shadow-card">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                  Get a Free {service.title} Quote
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  A free visit, a written price and a licensed crew. No obligation.
                </p>
                <Link href="/contact" className="btn-primary shine mt-5 w-full">
                  Request Free Estimate
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <a href={`tel:${site.phoneRaw}`} className="btn-dark mt-3 w-full">
                  <PhoneIcon className="h-4 w-4" />
                  {site.phone}
                </a>
                <p className="mt-4 text-center text-xs text-gray-400">
                  {site.licenses.combined} · Fully insured
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Real job photos — only on the services FBS has confirmed photos for */}
      {content.photos && content.photos.length > 0 && (
        <section className="bg-charcoal py-20 lg:py-28">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow text-gold">Our Work</span>
              <h2 className="section-title mt-4 text-white">{service.title} we have built</h2>
              {content.photosCaption && (
                <p className="mt-4 text-lg text-white/70">{content.photosCaption}</p>
              )}
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.photos.map((photo, i) => (
                <Reveal key={photo.src} delay={i * 80} variant="scale">
                  <figure className="group overflow-hidden rounded-2xl bg-white/5">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={`/images/work/${photo.src}`}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-charcoal/85 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-gold backdrop-blur-sm">
                        {stageLabel[photo.stage]}
                      </span>
                    </div>
                  </figure>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-white/50">
              Real FBS Construction jobs. No stock photography on this site.
            </p>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why It Matters</span>
            <h2 className="section-title mt-4">The FBS Difference</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {content.benefits.map((b, i) => (
              <Reveal
                key={b.title}
                delay={i * 90}
                variant="scale"
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl"
              >
                <span className="font-display text-3xl font-bold text-gold/40 transition-colors group-hover:text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                  {b.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-gray-600">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Options</span>
            <h2 className="section-title mt-4">Ways to Build It</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {content.options.map((o, i) => (
              <Reveal
                key={o.name}
                delay={(i % 2) * 100}
                className="flex items-start gap-4 rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100 transition-colors hover:ring-gold/40"
              >
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold text-charcoal">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-charcoal">
                    {o.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other remodeling services */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Explore More</span>
            <h2 className="section-title mt-4">Other Additions &amp; Remodeling Work</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {others.map((o, i) => {
              const OIcon = remodelingIconMap[o.icon];
              return (
                <Reveal key={o.slug} delay={i * 80} variant="scale">
                  <Link
                    href={`/services/${o.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-gold/40"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/12 text-gold-dark transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal">
                      <OIcon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight text-charcoal">
                      {o.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm text-gray-600">{o.short}</p>
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

      <CtaBanner />
    </>
  );
}
