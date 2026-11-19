import { site, services, reviews, remodelingServices, cities } from '@/lib/site';

const businessId = `${site.url}/#business`;

const dayMap: Record<string, string> = {
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  Sunday: 'Sunday',
};

export function JsonLd() {
  const localBusiness = {
    '@type': ['GeneralContractor', 'HomeImprovementBusiness', 'LocalBusiness'],
    '@id': businessId,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phoneRaw,
    email: site.email,
    image: `${site.url}/images/hero-front.webp`,
    logo: `${site.url}/images/logo.webp`,
    priceRange: '$$',
    foundingDate: site.founded,
    slogan: site.tagline,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap[h.day],
      opens: h.open,
      closes: h.close,
    })),
    areaServed: [
      ...cities.map((c) => ({ '@type': 'City', name: `${c.name}, MA` })),
      ...site.serviceAreas.map((a) => ({ '@type': 'State', name: a })),
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: site.licenses.cslLabel,
        identifier: site.licenses.csl,
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'Commonwealth of Massachusetts — Board of Building Regulations and Standards',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'registration',
        name: site.licenses.hicLabel,
        identifier: site.licenses.hic,
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'Commonwealth of Massachusetts — Office of Consumer Affairs and Business Regulation',
        },
      },
    ],
    knowsAbout: [
      'Home additions',
      'Second-story additions',
      'In-law suite additions',
      'Interior remodeling',
      'Kitchen remodeling',
      'Bathroom remodeling',
      'Basement finishing',
      'Sunrooms',
      'Screen porches',
      'Deck roofs',
    ],
    sameAs: [site.social.facebook, site.social.instagram, site.social.google],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.slice(0, 4).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: '5' },
      reviewBody: r.text,
    })),
    makesOffer: [
      ...remodelingServices.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.short },
      })),
      ...services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.short },
      })),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Additions & Remodeling Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Additions & Remodeling',
          itemListElement: remodelingServices.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, description: s.short },
          })),
        },
        {
          '@type': 'OfferCatalog',
          name: 'Exterior',
          itemListElement: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, description: s.description },
          })),
        },
      ],
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { '@id': businessId },
    inLanguage: 'en-US',
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [localBusiness, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
