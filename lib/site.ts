// Single source of truth for business data (NAP), used across UI + JSON-LD schema.

export const site = {
  name: 'FBS Construction Inc',
  legalName: 'FBS Construction Inc',
  shortName: 'FBS Construction',
  tagline: 'Premium Home Exterior Solutions',
  description:
    'Top-rated home exterior contractor in Massachusetts & New England. Expert siding installation, window replacement, door installation and custom deck construction with 15+ years of experience.',
  url: 'https://fbsconstructioninc.com',
  // Contact
  phone: '(774) 285-6562',
  phoneRaw: '+17742856562',
  email: 'fbsconstruction@hotmail.com',
  // Address
  address: {
    city: 'Whitinsville',
    region: 'MA',
    regionName: 'Massachusetts',
    postalCode: '01588',
    country: 'US',
    street: '',
  },
  geo: {
    // Whitinsville, MA approximate coordinates
    latitude: 42.1112,
    longitude: -71.6673,
  },
  hours: [
    { day: 'Monday', open: '08:00', close: '18:00' },
    { day: 'Tuesday', open: '08:00', close: '18:00' },
    { day: 'Wednesday', open: '08:00', close: '18:00' },
    { day: 'Thursday', open: '08:00', close: '18:00' },
    { day: 'Friday', open: '08:00', close: '18:00' },
    { day: 'Saturday', open: '08:00', close: '15:00' },
  ],
  hoursLabel: 'Mon–Fri 8AM–6PM · Sat 8AM–3PM · Sun Closed',
  founded: '2010',
  yearsExperience: '15+',
  social: {
    facebook: 'https://www.facebook.com/FBS-Construction-Inc-102622222024283',
    instagram: 'https://www.instagram.com/fbsconstructioninc',
    google: 'https://www.google.com/search?q=FBS+Construction+Inc+Whitinsville+MA',
  },
  rating: {
    value: '5.0',
    count: 27,
  },
  serviceAreas: [
    'Massachusetts',
    'Rhode Island',
    'Connecticut',
    'New Hampshire',
    'Vermont',
    'Maine',
  ],
  localTowns: [
    'Whitinsville',
    'Northbridge',
    'Uxbridge',
    'Sutton',
    'Douglas',
    'Millbury',
    'Grafton',
    'Worcester',
  ],
  stats: [
    { value: '15+', label: 'Years Experience' },
    { value: '1000+', label: 'Projects Completed' },
    { value: '5★', label: 'Google Rating' },
    { value: '100%', label: 'Satisfaction Guarantee' },
  ],
} as const;

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  icon: 'siding' | 'window' | 'door' | 'deck';
};

export const services: ServiceItem[] = [
  {
    slug: 'siding-installation',
    title: 'Siding Installation',
    short: 'Vinyl, fiber cement & engineered wood siding that protects and transforms.',
    description:
      'Boost curb appeal and weather protection with premium siding installed by certified pros. We handle full tear-offs, insulation upgrades and custom trim work for a flawless, energy-efficient exterior.',
    features: [
      'Vinyl, fiber cement & engineered wood',
      'Insulation & weather-barrier upgrades',
      'Custom trim, soffit & fascia work',
      'Manufacturer-backed warranties',
    ],
    image: '/images/project-siding-navy-bay.webp',
    imageAlt: 'New navy blue lap siding installed on a New England home by FBS Construction',
    icon: 'siding',
  },
  {
    slug: 'window-replacement',
    title: 'Window Replacement',
    short: 'Energy-efficient windows that cut bills and elevate every room.',
    description:
      'Replace drafty, outdated windows with energy-efficient units that lower utility bills and flood your home with light. Precise, weather-tight installation backed by leading manufacturer warranties.',
    features: [
      'Double-hung, casement, bay & bow, sliding',
      'ENERGY STAR® low-E glass options',
      'Precision, weather-tight installation',
      'Improved comfort & lower energy bills',
    ],
    image: '/images/project-board-batten.webp',
    imageAlt: 'New construction home with freshly installed windows and gray board-and-batten siding',
    icon: 'window',
  },
  {
    slug: 'door-installation',
    title: 'Door Installation',
    short: 'Entry, patio & storm doors that boost security and style.',
    description:
      'Make a statement and improve security with professionally installed entry, patio and storm doors. Energy-efficient cores, premium hardware and a perfect, draft-free fit every time.',
    features: [
      'Entry, patio/sliding & French doors',
      'Storm doors & security upgrades',
      'Energy-efficient insulated cores',
      'Premium hardware & weather sealing',
    ],
    image: '/images/project-garage-navy.webp',
    imageAlt: 'Navy home with new garage doors and entry door installed by FBS Construction',
    icon: 'door',
  },
  {
    slug: 'custom-deck-construction',
    title: 'Custom Deck Construction',
    short: 'Composite & wood decks built for years of outdoor living.',
    description:
      'Extend your living space with a custom-built deck designed for how you live. Durable composite or natural wood, code-compliant framing, railings, stairs and built-in seating.',
    features: [
      'Composite & natural wood decking',
      'Railings, stairs & built-in seating',
      'Code-compliant, engineered framing',
      'Shade structures & custom layouts',
    ],
    image: '/images/project-deck-framing.webp',
    imageAlt: 'Custom deck framing under construction behind a gray-blue sided home',
    icon: 'deck',
  },
];

export type GalleryItem = { src: string; alt: string; category: string };

export const gallery: GalleryItem[] = [
  {
    src: '/images/hero-front.webp',
    alt: 'Full exterior renovation with gray siding and black shutters by FBS Construction in Massachusetts',
    category: 'Siding',
  },
  {
    src: '/images/project-siding-navy-wall.webp',
    alt: 'Navy blue lap siding installation on a new home exterior',
    category: 'Siding',
  },
  {
    src: '/images/project-siding-gray-garage.webp',
    alt: 'Gray siding installation on a multi-level home with attached garage',
    category: 'Siding',
  },
  {
    src: '/images/project-garage-navy.webp',
    alt: 'Navy home with three-car garage doors and new exterior',
    category: 'Doors',
  },
  {
    src: '/images/project-siding-navy-bay.webp',
    alt: 'Navy siding with bay window and white trim on a renovated home',
    category: 'Windows',
  },
  {
    src: '/images/project-board-batten.webp',
    alt: 'Gray board-and-batten siding with covered porch and new windows',
    category: 'Windows',
  },
  {
    src: '/images/project-deck-white.webp',
    alt: 'White composite deck with railings on a Massachusetts home',
    category: 'Decks',
  },
  {
    src: '/images/about-deck-white.webp',
    alt: 'Backyard deck and patio on a white-sided New England home',
    category: 'Decks',
  },
  {
    src: '/images/project-deck-framing.webp',
    alt: 'New deck framing construction behind a gray-blue sided home',
    category: 'Decks',
  },
  {
    src: '/images/project-townhomes.webp',
    alt: 'Row of new construction townhomes with mixed siding by FBS Construction',
    category: 'New Construction',
  },
];

export type Review = {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
};

export const reviews: Review[] = [
  {
    name: 'Michael R.',
    location: 'Northbridge, MA',
    rating: 5,
    text: 'FBS replaced all the siding on our home and it looks incredible. The crew was professional, on time, and cleaned up every day. Couldn’t be happier with the result.',
    service: 'Siding Installation',
  },
  {
    name: 'Jennifer L.',
    location: 'Uxbridge, MA',
    rating: 5,
    text: 'We had new windows installed throughout the house. The difference in comfort and our energy bills is night and day. Highly recommend FBS Construction.',
    service: 'Window Replacement',
  },
  {
    name: 'David K.',
    location: 'Sutton, MA',
    rating: 5,
    text: 'They built us a beautiful custom deck that completely changed how we use our backyard. Quality craftsmanship and fair pricing. True professionals.',
    service: 'Custom Deck',
  },
  {
    name: 'Sarah M.',
    location: 'Whitinsville, MA',
    rating: 5,
    text: 'From the free estimate to the final walkthrough, everything was handled with care. Our new entry and patio doors are gorgeous and solid. 5 stars all the way.',
    service: 'Door Installation',
  },
  {
    name: 'Robert T.',
    location: 'Douglas, MA',
    rating: 5,
    text: 'Honest, reliable and skilled. FBS handled our full exterior remodel and the curb appeal is unreal. The whole neighborhood has noticed.',
    service: 'Exterior Renovation',
  },
  {
    name: 'Amanda P.',
    location: 'Millbury, MA',
    rating: 5,
    text: 'Great communication from start to finish. They treated our home like it was their own and delivered exactly what they promised, on schedule.',
    service: 'Siding & Windows',
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: 'What areas does FBS Construction serve?',
    answer:
      'FBS Construction Inc is based in Whitinsville, Massachusetts and serves homeowners across Massachusetts and throughout New England, including Rhode Island, Connecticut, New Hampshire, Vermont and Maine.',
  },
  {
    question: 'Is FBS Construction licensed and insured?',
    answer:
      'Yes. FBS Construction Inc is a fully licensed, bonded and insured contractor. Every project is backed by our 100% satisfaction guarantee and manufacturer warranties on premium materials.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Absolutely. We provide free, no-obligation estimates for all siding, window, door and deck projects. Call (774) 285-6562 or request a quote online and we’ll schedule a convenient time to assess your project.',
  },
  {
    question: 'What types of siding do you install?',
    answer:
      'We install vinyl, fiber cement, wood and engineered wood siding, along with insulation upgrades and custom trim work, all backed by manufacturer warranties.',
  },
  {
    question: 'How long does a typical exterior project take?',
    answer:
      'Timelines vary by scope, but most siding, window and door projects are completed within a few days to a couple of weeks. We provide a clear schedule up front and pride ourselves on on-time delivery.',
  },
  {
    question: 'How much does siding or window replacement cost?',
    answer:
      'Every home is different, so pricing depends on materials, square footage and project scope. We provide transparent, detailed free estimates so you know exactly what to expect with no surprises.',
  },
];
