// Home page copy. Business facts (phone, licenses, towns) still come from lib/site.ts;
// this file holds only the words that are specific to the home page.
// House rules: no stock photos presented as FBS work, no invented numbers,
// no claims FBS has not confirmed, no em dashes in visible copy.

import { site } from './site';

export const homeSeo = {
  // 63 characters: primary service + primary town + brand.
  title: 'Home Additions & Remodeling in Whitinsville, MA | FBS Construction',
  // 155 characters.
  description:
    'Licensed home addition and remodeling contractor in Whitinsville, MA. Second-story additions, in-law suites, kitchens, baths and basements. Free estimates.',
  keywords: [
    'home additions Whitinsville MA',
    'home addition contractor Worcester County',
    'second story addition Massachusetts',
    'in-law suite addition MA',
    'interior remodeling Whitinsville',
    'kitchen remodeling Worcester County',
    'bathroom remodeling Northbridge MA',
    'basement finishing Worcester County',
    'sunroom builder Massachusetts',
    'screen porch contractor MA',
    'deck roof builder Massachusetts',
    'licensed construction supervisor Whitinsville',
  ],
};

export const hero = {
  eyebrow: `Licensed MA builder · CSL ${site.licenses.csl}`,
  title: 'Home additions and remodeling in Whitinsville, MA',
  // 19 words.
  subtitle:
    'Second-story additions, in-law suites, kitchens, baths and basements. Built by a licensed Massachusetts crew, permits handled start to finish.',
  image: {
    src: '/images/hero-front.webp',
    alt: 'Two-story colonial with navy siding, black shutters and attached garage built by FBS Construction',
  },
  // Background slideshow: real FBS jobs only. `focus` is the object-position
  // that keeps the house in frame on both wide and tall screens.
  slides: [
    { src: '/images/hero-front.webp', alt: 'Two-story colonial with navy siding and black shutters built by FBS Construction', focus: '50% 45%' },
    { src: '/images/project-garage-navy.webp', alt: 'Navy home with three-bay garage and dormer by FBS Construction', focus: '45% 55%' },
    { src: '/images/project-siding-gray-garage.webp', alt: 'Gray-sided three-story home with two-car garage by FBS Construction', focus: '50% 50%' },
    { src: '/images/project-siding-navy-bay.webp', alt: 'Navy siding with bay window and white trim on an FBS project', focus: '50% 50%' },
    { src: '/images/project-deck-white.webp', alt: 'White deck with railings on the back of a home by FBS Construction', focus: '40% 55%' },
  ],
  cta: 'Get a free quote',
  formTitle: 'Get a free quote',
  formNote: 'Tell us about the project and we will call you to set up a visit.',
};

// Form section directly under the hero (the hero button scrolls here).
export const quote = {
  title: 'Get a free quote',
  text: 'Tell us what you want to build. We call you back, set up a visit and put an itemized price in writing.',
  steps: [
    'Send the form or call us',
    'We visit and measure the space',
    'You get a written, itemized price',
  ],
};

export const credentials = [
  { icon: 'license', label: 'Construction Supervisor', value: `CSL ${site.licenses.csl}` },
  { icon: 'shield', label: 'Home Improvement Contractor', value: `HIC ${site.licenses.hic}` },
  { icon: 'insured', label: 'Liability coverage', value: 'Fully insured' },
  { icon: 'calendar', label: 'Building in Massachusetts', value: `Since ${site.founded}` },
  { icon: 'estimate', label: 'Written and itemized', value: 'Free estimates' },
] as const;

export const servicesIntro = {
  eyebrow: 'What we build',
  title: 'More room without leaving the house you love',
  text: 'Eight project types, one licensed team. Interior work runs all year, so a Massachusetts winter never puts your remodel on hold.',
};

// Order follows the client's priority list.
export const homeServices = [
  {
    slug: 'home-additions',
    title: 'Home Additions',
    text: 'Second-story and over-garage additions, bump-outs and in-law suites, framed, roofed and tied into the existing house.',
    icon: 'addition',
    feature: true,
  },
  {
    slug: 'interior-remodeling',
    title: 'Interior Remodeling',
    text: 'Open the floor plan, move walls and rebuild finishes floor by floor.',
    icon: 'interior',
  },
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    text: 'Cabinets, counters, islands and the layout behind them.',
    icon: 'kitchen',
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    text: 'Tub-to-shower conversions and full gut renovations, waterproofed right.',
    icon: 'bath',
  },
  {
    slug: 'basement-finishing',
    title: 'Basement Finishing',
    text: 'Family rooms, offices and guest suites, with moisture handled first.',
    icon: 'basement',
  },
  {
    slug: 'sunrooms',
    title: 'Sunrooms',
    text: 'Three-season and year-round rooms full of daylight.',
    icon: 'sunroom',
  },
  {
    slug: 'screen-porches',
    title: 'Screen Porches',
    text: 'A bug-free porch from spring to the first frost.',
    icon: 'porch',
  },
  {
    slug: 'deck-roofs',
    title: 'Deck Roofs',
    text: 'Covered decks for shade, rain and a dry grill.',
    icon: 'deckRoof',
  },
] as const;

export const whyAdd = {
  title: 'Why homeowners add on instead of moving',
  image: {
    src: '/images/project-siding-navy-wall.webp',
    alt: 'New two-story wing with navy lap siding and white trim by FBS Construction',
  },
  points: [
    {
      icon: 'home',
      title: 'Keep the address you chose',
      text: 'Your street, your school district and your neighbors stay the same. No listing, no showings, no second closing.',
    },
    {
      icon: 'family',
      title: 'Space planned around your family',
      text: 'A suite for aging parents, a primary bedroom with its own bath, an office with a door that closes.',
    },
    {
      icon: 'license',
      title: 'One licensed team, permit to final',
      text: `Massachusetts requires a licensed Construction Supervisor on structural work. FBS holds CSL ${site.licenses.csl} and pulls every permit.`,
    },
  ],
} as const;

export const process = {
  title: 'How your project runs',
  steps: [
    {
      title: 'Walk the space',
      text: 'We visit, measure and listen to what you want the room to do.',
    },
    {
      title: 'Get a written price',
      text: 'An itemized estimate in writing. No quotes over the phone, no surprises later.',
    },
    {
      title: 'Permits and plans',
      text: 'We file with your town and schedule every inspection for you.',
    },
    {
      title: 'Build and hand over',
      text: 'A clean job site, a clear schedule and a final walkthrough together.',
    },
  ],
};

export const projects = {
  eyebrow: 'Recent work',
  title: 'Built by FBS crews',
  text: 'Real photos from our job sites. No stock images.',
  images: [
    // Each photo appears once on the page: hero-front is the hero panorama,
    // board-batten is the Home Additions tile, navy-wall is in "why add on".
    { src: '/images/project-siding-gray-garage.webp', alt: 'Gray-sided three-story home with two-car garage and bay window', shape: 'tall' },
    { src: '/images/project-garage-navy.webp', alt: 'Navy home with three-bay garage and dormer above built by FBS Construction', shape: 'wide' },
    { src: '/images/project-deck-white.webp', alt: 'White deck with railings and stairs off the back of a gray home', shape: 'square' },
    { src: '/images/project-siding-navy-bay.webp', alt: 'Navy siding with bay window and white trim on a renovated home', shape: 'wide' },
    { src: '/images/project-deck-framing.webp', alt: 'New deck framing behind a blue-gray home with patio doors', shape: 'tall' },
    { src: '/images/project-townhomes.webp', alt: 'Row of new townhomes with white and gray siding under construction', shape: 'wide' },
  ],
};

export const winter = {
  title: 'Interior remodeling does not stop for winter',
  text: 'Kitchens, baths, basements and interior renovations happen inside the heated house. Book now and start before spring.',
};

export const exteriorIntro = {
  title: 'Still need siding, windows, doors or a deck?',
  text: 'Exterior work is where FBS started, and it pairs naturally with a new addition.',
};

export const areas = {
  title: 'Serving Whitinsville and Worcester County',
  text: 'Based in Whitinsville, we build across the Blackstone Valley and the towns around Worcester.',
};

export const faqIntro = {
  eyebrow: 'Questions',
  title: 'What homeowners ask before they call',
};

// Home FAQ. Rendered on the page AND emitted as FAQPage JSON-LD, so the
// visible text and the structured data always match.
export const homeFaqs = [
  {
    question: 'Does FBS Construction build home additions?',
    answer:
      'Yes. Additions are our main service: second-story and over-garage additions, rear and side bump-outs, in-law suites and primary suites. We handle framing, roofing, the tie-in to the existing house, permits and inspections.',
  },
  {
    question: 'Is FBS Construction licensed in Massachusetts?',
    answer: `Yes. FBS Construction Inc holds Massachusetts Construction Supervisor License ${site.licenses.csl} and Home Improvement Contractor registration ${site.licenses.hic}, and carries liability insurance. The CSL is required for structural work such as additions. The HIC registration protects you as a homeowner on remodeling contracts.`,
  },
  {
    question: 'Do I need a building permit for a home addition in Massachusetts?',
    answer:
      'Yes. An addition changes the structure and footprint of the house, so your town requires a building permit and the work must be supervised by a licensed Construction Supervisor. We file the permit and schedule every inspection.',
  },
  {
    question: 'How much does a home addition or remodel cost?',
    answer:
      'It depends on size, structural work and finishes. A bathroom remodel and a second-story addition are very different projects. We visit, talk through what you want and give you an itemized written estimate, free.',
  },
  {
    question: 'Can you remodel during a Massachusetts winter?',
    answer:
      'Yes. Kitchens, bathrooms, basements and interior renovations happen inside the heated house, so winter does not stop them. Additions are scheduled so the structure is closed in before interior finishing starts.',
  },
  {
    question: 'Which towns do you serve?',
    answer: `We are based in Whitinsville and work across Worcester County, including ${site.localTowns
      .filter((t) => t !== 'Whitinsville')
      .join(', ')}.`,
  },
  {
    question: 'Do you still do siding, windows, doors and decks?',
    answer:
      'Yes. Exterior work is still part of what we do, and it pairs well with additions, sunrooms, screen porches and deck roofs.',
  },
];

// "Mon to Fri 8am to 6pm, Sat 8am to 3pm", built from site.hours so it never drifts.
const fmt = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return `${h % 12 || 12}${m ? `:${String(m).padStart(2, '0')}` : ''}${h < 12 ? 'am' : 'pm'}`;
};
const weekday = site.hours.find((h) => h.day === 'Monday');
const saturday = site.hours.find((h) => h.day === 'Saturday');
export const hoursText = [
  weekday && `Mon to Fri ${fmt(weekday.open)} to ${fmt(weekday.close)}`,
  saturday && `Sat ${fmt(saturday.open)} to ${fmt(saturday.close)}`,
]
  .filter(Boolean)
  .join(', ');

export const finalCta = {
  title: 'Tell us what the house needs',
  text: 'A free visit, a written price and a licensed crew. Call or send the form and we will take it from there.',
};
