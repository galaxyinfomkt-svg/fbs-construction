import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Geist } from 'next/font/google';
import { cities, getCity } from '@/lib/cities';
import { site } from '@/lib/site';
import { allServices, getService } from '@/lib/all-services';
import { buildCityServicePage } from '@/lib/local-copy';
import { HomeHero } from '@/components/home/HomeHero';
import { QuoteSection } from '@/components/home/QuoteSection';
import { Credentials } from '@/components/home/Credentials';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { ProjectsMasonry } from '@/components/home/ProjectsMasonry';
import { WinterBand } from '@/components/home/WinterBand';
import { FinalCta } from '@/components/home/FinalCta';
import { LocalIntro, LocalWhy, LocalServices, LocalFaq, NearbyTowns } from '@/components/local/LocalSections';

const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-geist' });

type Params = { params: Promise<{ city: string; slug: string }> };

export function generateStaticParams() {
  return cities.flatMap((c) => allServices.map((s) => ({ city: c.slug, slug: s.slug })));
}

function build(citySlug: string, serviceSlug: string) {
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) return null;
  const index = allServices.findIndex((s) => s.slug === service.slug);
  return { city, service, page: buildCityServicePage(city, service, index) };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city, slug } = await params;
  const built = build(city, slug);
  if (!built) return {};
  const { page, city: found, service } = built;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `/service-areas/${found.slug}/${service.slug}` },
    openGraph: {
      type: 'website',
      url: `${site.url}/service-areas/${found.slug}/${service.slug}`,
      siteName: site.name,
      title: page.metaTitle,
      description: page.metaDescription,
      images: [
        service.image
          ? { url: service.image, width: 1400, height: 1050, alt: service.imageAlt ?? service.title }
          : { url: '/images/og-image.png', width: 1200, height: 630, alt: `${site.name} in ${found.name}, MA` },
      ],
    },
  };
}

export default async function CityServicePage({ params }: Params) {
  const { city, slug } = await params;
  const built = build(city, slug);
  if (!built) notFound();
  const { city: found, service, page } = built;

  const url = `${site.url}/service-areas/${found.slug}/${service.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: page.metaTitle,
        description: page.metaDescription,
        inLanguage: 'en-US',
        about: { '@id': `${site.url}/#business` },
      },
      {
        '@type': 'Service',
        name: `${service.title} in ${found.name}, MA`,
        description: page.metaDescription,
        serviceType: service.title,
        provider: { '@id': `${site.url}/#business` },
        areaServed: { '@type': 'City', name: `${found.name}, MA` },
        url,
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${site.url}/service-areas` },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${found.name}, MA`,
            item: `${site.url}/service-areas/${found.slug}`,
          },
          { '@type': 'ListItem', position: 4, name: `${service.title} in ${found.name}`, item: url },
        ],
      },
    ],
  };

  const blocks: Record<string, React.ReactNode> = {
    'local-intro': <LocalIntro key="intro" page={page} />,
    'what-we-build': (
      <LocalServices
        key="services"
        city={found}
        services={allServices}
        title={`Other work we do in ${found.name}`}
        currentSlug={service.slug}
      />
    ),
    'why-this-town': <LocalWhy key="why" page={page} />,
    process: <ProcessTimeline key="process" />,
    gallery: <ProjectsMasonry key="gallery" />,
    credentials: <Credentials key="credentials" />,
    nearby: <NearbyTowns key="nearby" page={page} serviceSlug={service.slug} />,
    faq: <LocalFaq key="faq" page={page} />,
  };

  return (
    <div className={geist.variable}>
      <HomeHero
        eyebrow={`${service.title} · ${found.name}, MA`}
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        ariaLabel={`${service.title} in ${found.name}, Massachusetts`}
      />
      <QuoteSection
        title={`Free quote for ${service.title.toLowerCase()} in ${found.name}`}
        text={page.cta}
        instance={`cs-${found.slug}-${service.slug}`}
      />
      {page.sections.map((name) => blocks[name])}
      <WinterBand />
      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
