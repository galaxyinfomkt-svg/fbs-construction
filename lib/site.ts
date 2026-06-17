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
  // Detail-page content
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  overview: string[];
  benefits: { title: string; text: string }[];
  options: { name: string; text: string }[];
  galleryImages: { src: string; alt: string }[];
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
    metaTitle: 'Siding Installation in Massachusetts | Vinyl & Fiber Cement',
    metaDescription:
      'Expert siding installation & replacement in Massachusetts and New England. Vinyl, fiber cement and engineered wood siding with insulation upgrades. Free estimates.',
    heroTagline: 'Protect and transform your home with premium siding.',
    overview: [
      'Your siding is your home’s first line of defense against New England weather — and its single biggest visual statement. FBS Construction installs and replaces siding that looks stunning and performs for decades.',
      'From full tear-offs and moisture-barrier upgrades to custom trim, soffit and fascia work, our certified crews deliver a flawless, energy-efficient exterior backed by leading manufacturer warranties.',
    ],
    benefits: [
      {
        title: 'Boost Curb Appeal & Value',
        text: 'Fresh siding instantly modernizes your home and is one of the highest-ROI exterior upgrades you can make.',
      },
      {
        title: 'Lower Energy Bills',
        text: 'Insulated siding and proper weather barriers cut drafts and keep your home comfortable year-round.',
      },
      {
        title: 'Built to Last',
        text: 'Premium materials resist rot, fading and impact — with warranties that protect your investment.',
      },
    ],
    options: [
      { name: 'Vinyl Siding', text: 'Low-maintenance, durable and available in dozens of colors and profiles.' },
      { name: 'Fiber Cement', text: 'Ultra-durable, fire-resistant siding with the look of natural wood.' },
      { name: 'Engineered Wood', text: 'Authentic wood appearance with added strength and moisture resistance.' },
      { name: 'Trim & Accents', text: 'Custom soffit, fascia, corner boards and shake accents to finish the look.' },
    ],
    galleryImages: [
      { src: '/images/project-siding-navy-wall.webp', alt: 'Navy blue lap siding installation on a new home exterior' },
      { src: '/images/project-siding-gray-garage.webp', alt: 'Gray siding installation on a multi-level home with attached garage' },
      { src: '/images/hero-front.webp', alt: 'Full exterior renovation with gray siding and black shutters' },
    ],
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
    metaTitle: 'Window Replacement in Massachusetts | Energy-Efficient Windows',
    metaDescription:
      'Energy-efficient window replacement in Massachusetts & New England. Double-hung, casement, bay & bow and more with ENERGY STAR® glass. Free estimates from FBS Construction.',
    heroTagline: 'Cut energy bills and brighten every room.',
    overview: [
      'Drafty, foggy or hard-to-open windows drain your comfort and your wallet. FBS Construction replaces them with energy-efficient units that seal tight, open smoothly and transform how your home feels.',
      'We handle precise measuring, weather-tight installation and clean finishing — so your new windows perform beautifully and look like they were always meant to be there.',
    ],
    benefits: [
      {
        title: 'Real Energy Savings',
        text: 'ENERGY STAR® low-E glass and tight installation noticeably reduce heating and cooling costs.',
      },
      {
        title: 'Year-Round Comfort',
        text: 'Eliminate cold drafts and hot spots for a more consistent, comfortable indoor temperature.',
      },
      {
        title: 'More Light & Quiet',
        text: 'Modern windows flood rooms with natural light while reducing outside noise.',
      },
    ],
    options: [
      { name: 'Double-Hung', text: 'Classic, versatile and easy to clean — the New England favorite.' },
      { name: 'Casement', text: 'Crank-open windows that seal tight and catch the breeze.' },
      { name: 'Bay & Bow', text: 'Add space, light and a dramatic focal point to any room.' },
      { name: 'Sliding & Picture', text: 'Expansive glass and easy operation for modern living.' },
    ],
    galleryImages: [
      { src: '/images/project-board-batten.webp', alt: 'Gray board-and-batten siding with covered porch and new windows' },
      { src: '/images/project-siding-navy-bay.webp', alt: 'Navy siding with bay window and white trim on a renovated home' },
      { src: '/images/project-siding-navy-wall.webp', alt: 'New windows set into navy blue lap siding' },
    ],
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
    metaTitle: 'Door Installation in Massachusetts | Entry, Patio & Storm Doors',
    metaDescription:
      'Professional door installation in Massachusetts & New England. Entry, patio, French and storm doors with security upgrades and energy-efficient cores. Free estimates.',
    heroTagline: 'A bold first impression with rock-solid security.',
    overview: [
      'Your front door sets the tone for your entire home — and your patio and storm doors shape how you live every day. FBS Construction installs doors that look incredible, seal tight and lock up secure.',
      'With energy-efficient insulated cores, premium hardware and expert weather sealing, every door we hang opens smoothly and keeps the elements where they belong: outside.',
    ],
    benefits: [
      {
        title: 'Enhanced Security',
        text: 'Solid construction, quality locksets and proper installation protect what matters most.',
      },
      {
        title: 'Energy Efficiency',
        text: 'Insulated cores and tight weather sealing stop drafts and lower energy loss.',
      },
      {
        title: 'Instant Curb Appeal',
        text: 'A statement entry door dramatically elevates the look of your whole home.',
      },
    ],
    options: [
      { name: 'Entry Doors', text: 'Steel, fiberglass and wood entry doors in countless styles.' },
      { name: 'Patio & Sliding', text: 'Bring the outdoors in with smooth-gliding patio doors.' },
      { name: 'French Doors', text: 'Timeless, elegant double doors for interiors and patios.' },
      { name: 'Storm Doors', text: 'Extra protection, ventilation and energy savings year-round.' },
    ],
    galleryImages: [
      { src: '/images/project-garage-navy.webp', alt: 'Navy home with three-car garage doors and new entry door' },
      { src: '/images/about-deck-white.webp', alt: 'White home with patio doors leading to a deck' },
      { src: '/images/project-deck-framing.webp', alt: 'Patio doors above a newly framed deck' },
    ],
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
    metaTitle: 'Custom Deck Construction in Massachusetts | Composite & Wood',
    metaDescription:
      'Custom deck construction in Massachusetts & New England. Composite and natural wood decks with railings, stairs and built-in seating. Free estimates from FBS Construction.',
    heroTagline: 'Extend your living space into the outdoors.',
    overview: [
      'A great deck turns your backyard into the best room in the house. FBS Construction designs and builds custom decks engineered for how your family actually lives, entertains and relaxes.',
      'From code-compliant framing to railings, stairs, built-in seating and shade structures, we use durable composite or natural wood to create an outdoor space that lasts for years.',
    ],
    benefits: [
      {
        title: 'More Living Space',
        text: 'Add a beautiful, functional outdoor room for dining, lounging and entertaining.',
      },
      {
        title: 'Low-Maintenance Options',
        text: 'Composite decking resists fading, staining and rot — spend more time enjoying, less maintaining.',
      },
      {
        title: 'Built to Code',
        text: 'Engineered, code-compliant framing means a deck that’s as safe as it is stunning.',
      },
    ],
    options: [
      { name: 'Composite Decking', text: 'Durable, low-maintenance boards in a range of premium colors.' },
      { name: 'Natural Wood', text: 'Classic, warm wood decking with timeless appeal.' },
      { name: 'Railings & Stairs', text: 'Custom railings, lighting and stairs tailored to your home.' },
      { name: 'Built-Ins & Shade', text: 'Bench seating, pergolas and shade structures for true outdoor living.' },
    ],
    galleryImages: [
      { src: '/images/project-deck-framing.webp', alt: 'New deck framing construction behind a gray-blue sided home' },
      { src: '/images/project-deck-white.webp', alt: 'White composite deck with railings on a Massachusetts home' },
      { src: '/images/about-deck-white.webp', alt: 'Backyard deck and patio on a white-sided New England home' },
    ],
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

export type City = {
  name: string;
  slug: string;
  blurb: string;
};

// Local cities/towns FBS Construction serves — each gets a landing page per service.
export const cities: City[] = [
  {
    name: 'Whitinsville',
    slug: 'whitinsville',
    blurb:
      'Our home base. FBS Construction has transformed homes throughout Whitinsville with premium siding, windows, doors and decks.',
  },
  {
    name: 'Northbridge',
    slug: 'northbridge',
    blurb:
      'Trusted exterior renovations across Northbridge — from historic homes to new construction, built to handle New England weather.',
  },
  {
    name: 'Uxbridge',
    slug: 'uxbridge',
    blurb:
      'Uxbridge homeowners count on FBS Construction for craftsmanship that protects and elevates their homes year after year.',
  },
  {
    name: 'Sutton',
    slug: 'sutton',
    blurb:
      'From siding to custom decks, we help Sutton families boost curb appeal, comfort and the value of their homes.',
  },
  {
    name: 'Douglas',
    slug: 'douglas',
    blurb:
      'Premium home exterior solutions for Douglas, MA — energy-efficient windows, durable siding and beautiful outdoor living spaces.',
  },
  {
    name: 'Millbury',
    slug: 'millbury',
    blurb:
      'Millbury homeowners trust FBS Construction for licensed, insured exterior work backed by a 100% satisfaction guarantee.',
  },
  {
    name: 'Grafton',
    slug: 'grafton',
    blurb:
      'Serving Grafton with expert siding, window, door and deck installation — quality craftsmanship and honest, transparent pricing.',
  },
  {
    name: 'Worcester',
    slug: 'worcester',
    blurb:
      'Worcester’s choice for home exterior renovations. We bring premium materials and skilled installation to every neighborhood.',
  },
];
