import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Geist } from 'next/font/google';
import { cities, getCity } from '@/lib/cities';
import { site } from '@/lib/site';
import { allServices } from '@/lib/all-services';
import { buildCityPage } from '@/lib/local-copy';
import { HomeHero } from '@/components/home/HomeHero';
import { QuoteSection } from '@/components/home/QuoteSection';
import { Credentials } from '@/components/home/Credentials';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { ProjectsMasonry } from '@/components/home/ProjectsMasonry';
import { WinterBand } from '@/components/home/WinterBand';
import { FinalCta } from '@/components/home/FinalCta';
import { LocalIntro, LocalWhy, LocalServices, LocalFaq, NearbyTowns } from '@/components/local/LocalSections';

const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-geist' });

type Params = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city } = await params;
  const found = getCity(city);
  if (!found) return {};
  const page = buildCityPage(found, allServices);
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `/service-areas/${found.slug}` },
    openGraph: {
      type: 'website',
      url: `${site.url}/service-areas/${found.slug}`,
      siteName: site.name,
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: `${site.name} in ${found.name}, MA` }],
    },
  };
}

export default async function CityPage({ params }: Params) {
  const { city } = await params;
  const found = getCity(city);
  if (!found) notFound();

  const page = buildCityPage(found, allServices);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${site.url}/service-areas/${found.slug}#webpage`,
        url: `${site.url}/service-areas/${found.slug}`,
        name: page.metaTitle,
        description: page.metaDescription,
        inLanguage: 'en-US',
        about: { '@id': `${site.url}/#business` },
      },
      {
        '@type': 'Service',
        name: `Home additions and remodeling in ${found.name}, MA`,
        serviceType: 'Home additions and remodeling',
        provider: { '@id': `${site.url}/#business` },
        areaServed: { '@type': 'City', name: `${found.name}, MA` },
        url: `${site.url}/service-areas/${found.slug}`,
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
        ],
      },
    ],
  };

  // The order of the middle sections is chosen per town, so two city pages do
  // not scroll the same way either.
  const blocks: Record<string, React.ReactNode> = {
    'local-intro': <LocalIntro key="intro" page={page} />,
    'what-we-build': (
      <LocalServices key="services" city={found} services={allServices} title="What we build in this town" />
    ),
    'why-this-town': <LocalWhy key="why" page={page} />,
    process: <ProcessTimeline key="process" />,
    gallery: <ProjectsMasonry key="gallery" />,
    credentials: <Credentials key="credentials" />,
    nearby: <NearbyTowns key="nearby" page={page} />,
    faq: <LocalFaq key="faq" page={page} />,
  };

  return (
    <div className={geist.variable}>
      <HomeHero
        eyebrow={`Licensed MA builder · serving ${found.name}`}
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        ariaLabel={`FBS Construction in ${found.name}, Massachusetts`}
      />
      <QuoteSection
        title={`Free quote in ${found.name}`}
        text={page.cta}
        instance={`city-${found.slug}`}
      />
      {page.sections.map((name) => blocks[name])}
      <WinterBand />
      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
