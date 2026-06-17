import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, services, site } from '@/lib/site';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Lightbox } from '@/components/Lightbox';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { serviceIconMap, CheckIcon, ArrowRightIcon, PhoneIcon } from '@/components/icons';

type Params = { params: Promise<{ city: string; slug: string }> };

export function generateStaticParams() {
  return cities.flatMap((c) => services.map((s) => ({ city: c.slug, slug: s.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city, slug } = await params;
  const found = cities.find((c) => c.slug === city);
  const service = services.find((s) => s.slug === slug);
  if (!found || !service) return {};
  return {
    title: `${service.title} in ${found.name}, MA | FBS Construction`,
    description: `Professional ${service.title.toLowerCase()} in ${found.name}, Massachusetts. ${service.short} Free estimates from FBS Construction — call ${site.phone}.`,
    alternates: { canonical: `/service-areas/${found.slug}/${service.slug}` },
    openGraph: {
      title: `${service.title} in ${found.name}, MA | ${site.name}`,
      description: service.metaDescription,
      url: `${site.url}/service-areas/${found.slug}/${service.slug}`,
      images: [{ url: service.image, width: 1400, height: 1050, alt: service.imageAlt }],
    },
  };
}

export default async function CityServicePage({ params }: Params) {
  const { city, slug } = await params;
  const found = cities.find((c) => c.slug === city);
  const service = services.find((s) => s.slug === slug);
  if (!found || !service) notFound();

  const Icon = serviceIconMap[service.icon];
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const nearbyCities = cities.filter((c) => c.slug !== found.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${service.title} in ${found.name}, MA`,
        description: `${service.metaDescription} Serving ${found.name}, Massachusetts.`,
        url: `${site.url}/service-areas/${found.slug}/${service.slug}`,
        serviceType: service.title,
        provider: { '@type': 'GeneralContractor', name: site.name, telephone: site.phoneRaw, url: site.url },
        areaServed: { '@type': 'City', name: `${found.name}, MA` },
        image: `${site.url}${service.image}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${site.url}/service-areas` },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${service.title} in ${found.name}, MA`,
            item: `${site.url}/service-areas/${found.slug}/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        title={`${service.title} in ${found.name}, MA`}
        subtitle={service.heroTagline}
        image={service.image}
        imageAlt={`${service.title} in ${found.name}, Massachusetts by FBS Construction`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas', href: '/service-areas' },
          { label: `${service.title} · ${found.name}` },
        ]}
      />

      {/* Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <Reveal>
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
              <Icon className="h-8 w-8" />
            </span>
            <h2 className="section-title mt-6">
              {service.title} for {found.name} Homes
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Looking for trusted {service.title.toLowerCase()} in {found.name}, MA? FBS Construction
              brings premium materials and expert installation to homeowners throughout {found.name}{' '}
              and the surrounding area.
            </p>
            {service.overview.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-gray-600">
                {p}
              </p>
            ))}
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary shine">
                Get a Free {found.name} Quote
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-dark">
                <PhoneIcon className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </Reveal>

          {/* Sticky quote card */}
          <Reveal variant="right">
            <div className="lg:sticky lg:top-32">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 shadow-card">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                  {service.title} in {found.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Free, no-obligation estimate for your {found.name} home — honest pricing, no
                  pressure.
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
            <span className="eyebrow">Why {found.name} Chooses FBS</span>
            <h2 className="section-title mt-4">The FBS Difference in {found.name}</h2>
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

      {/* Gallery (clickable) */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Work</span>
            <h2 className="section-title mt-4">
              Recent {service.title} Projects
            </h2>
            <p className="mt-5 text-lg text-gray-600">Tap any photo to take a closer look.</p>
          </Reveal>
          <div className="mt-12">
            <Lightbox images={service.galleryImages} columns={3} />
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/gallery" className="btn-dark">
              View Full Gallery
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Other services in this city */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">More in {found.name}</span>
            <h2 className="section-title mt-4">Our Other {found.name} Services</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {otherServices.map((o, i) => {
              const OIcon = serviceIconMap[o.icon];
              return (
                <Reveal key={o.slug} delay={i * 80} variant="scale">
                  <Link
                    href={`/service-areas/${found.slug}/${o.slug}`}
                    className="group flex h-full items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark transition-colors group-hover:bg-gold group-hover:text-charcoal">
                      <OIcon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm font-bold uppercase leading-tight tracking-tight text-charcoal">
                      {o.title} in {found.name}
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* Same service in nearby cities */}
          <Reveal className="mt-12">
            <p className="text-center text-sm font-bold uppercase tracking-wide text-gold-dark">
              {service.title} in Nearby Towns
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/service-areas/${c.slug}/${service.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-charcoal ring-1 ring-gray-200 transition-all hover:bg-gold/10 hover:ring-gold/40"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
