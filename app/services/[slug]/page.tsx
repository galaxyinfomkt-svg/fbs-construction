import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, site } from '@/lib/site';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { serviceIconMap, CheckIcon, ArrowRightIcon, PhoneIcon } from '@/components/icons';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
      images: [{ url: service.image, width: 1400, height: 1050, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = serviceIconMap[service.icon];
  const others = services.filter((s) => s.slug !== service.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        description: service.metaDescription,
        url: `${site.url}/services/${service.slug}`,
        serviceType: service.title,
        provider: { '@type': 'GeneralContractor', name: site.name, telephone: site.phoneRaw, url: site.url },
        areaServed: site.serviceAreas.map((a) => ({ '@type': 'State', name: a })),
        image: `${site.url}${service.image}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: `${site.url}/services/${service.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        title={service.title}
        subtitle={service.heroTagline}
        image={service.image}
        imageAlt={service.imageAlt}
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
            <h2 className="section-title mt-6">Professional {service.title}</h2>
            {service.overview.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 text-lg leading-relaxed text-gray-600">
                {p}
              </p>
            ))}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
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
                  No obligation, no pressure — just a clear, honest estimate for your project.
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
                  Licensed, bonded &amp; insured · {site.hoursLabel}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why It Matters</span>
            <h2 className="section-title mt-4">The FBS Difference</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {service.benefits.map((b, i) => (
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
            <span className="eyebrow">Options &amp; Styles</span>
            <h2 className="section-title mt-4">Choices Tailored to Your Home</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {service.options.map((o, i) => (
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

      {/* Project gallery */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Work</span>
            <h2 className="section-title mt-4">Recent {service.title} Projects</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {service.galleryImages.map((img, i) => (
              <Reveal
                key={img.src}
                as="figure"
                variant="scale"
                delay={i * 80}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 shadow-card"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={700}
                  height={525}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/gallery" className="btn-dark">
              View Full Gallery
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Explore More</span>
            <h2 className="section-title mt-4">Our Other Services</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {others.map((o, i) => {
              const OIcon = serviceIconMap[o.icon];
              return (
                <Reveal key={o.slug} delay={i * 80} variant="scale">
                  <Link
                    href={`/services/${o.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-gold/40"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={o.image}
                        alt={o.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                      <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-charcoal">
                        <OIcon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-charcoal">
                        {o.title}
                      </h3>
                      <p className="mt-1.5 flex-1 text-sm text-gray-600">{o.short}</p>
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

      <CtaBanner />
    </>
  );
}
