import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { site } from '@/lib/site';
import { homeSeo, homeFaqs, homeServices, hero } from '@/lib/home';
import { HomeHero } from '@/components/home/HomeHero';
import { Credentials } from '@/components/home/Credentials';
import { ServicesBento } from '@/components/home/ServicesBento';
import { WhyAdd } from '@/components/home/WhyAdd';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { ProjectsMasonry } from '@/components/home/ProjectsMasonry';
import { WinterBand } from '@/components/home/WinterBand';
import { ExteriorLinks } from '@/components/home/ExteriorLinks';
import { AreasReviews } from '@/components/home/AreasReviews';
import { FaqAccordion } from '@/components/home/FaqAccordion';
import { FinalCta } from '@/components/home/FinalCta';

// Home typeface. Scoped to the home for now; header, footer and inner pages
// move to it as they are rebuilt.
const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-geist' });

export const metadata: Metadata = {
  title: { absolute: homeSeo.title },
  description: homeSeo.description,
  keywords: homeSeo.keywords,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: homeSeo.title,
    description: homeSeo.description,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: `${site.name}, ${site.tagline}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeSeo.title,
    description: homeSeo.description,
    images: ['/images/og-image.png'],
  },
};

// Page-level structured data. The business entity lives in components/JsonLd
// (rendered by the layout); this graph references it by @id.
function HomeJsonLd() {
  const businessId = `${site.url}/#business`;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${site.url}/#webpage`,
        url: site.url,
        name: homeSeo.title,
        description: homeSeo.description,
        inLanguage: 'en-US',
        isPartOf: { '@id': `${site.url}/#website` },
        about: { '@id': businessId },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${site.url}${hero.image.src}` },
        mainEntity: { '@id': `${site.url}/#faq` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${site.url}/#faq`,
        mainEntity: homeFaqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      {
        '@type': 'ItemList',
        name: 'Home additions and remodeling services',
        itemListElement: homeServices.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Service',
            name: s.title,
            description: s.text,
            serviceType: s.title,
            provider: { '@id': businessId },
            areaServed: site.localTowns.map((t) => ({ '@type': 'City', name: `${t}, MA` })),
          },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

export default function HomePage() {
  return (
    <div className={geist.variable}>
      <HomeHero />
      <Credentials />
      <ServicesBento />
      <WhyAdd />
      <ProcessTimeline />
      <ProjectsMasonry />
      <WinterBand />
      <ExteriorLinks />
      <AreasReviews />
      <FaqAccordion />
      <FinalCta />
      <HomeJsonLd />
    </div>
  );
}
