/* ═══════════════════════════════════════════════════════════════
   LOCAL COPY ENGINE
   Builds the body text for a city page or a city + service page.
   Every paragraph is required to carry at least one fact that only
   belongs to that town — its weather, its houses, its landmarks,
   its building department, how far it is from the shop. The shape
   of the sentence around that fact is chosen by a stable hash, so
   two towns never get the same page and a rebuild never changes it.
   ═══════════════════════════════════════════════════════════════ */

import type { City } from './cities';
import { nearbyCities } from './cities';
import type { ServiceItem } from './site';
import { site } from './site';
import { hash, pick, pickMany, shuffle, flag, openingAngle, sectionOrder, sectionTitle, ctaLine, CITY_HEADLINE_SHAPES, HEADLINE_SHAPES } from './variation';

const and = (items: string[]) =>
  items.length <= 1
    ? items[0] ?? ''
    : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;

/* ─────────── Opening paragraph ─────────── */

/**
 * Within one town the opening angle is forced to rotate across services, so
 * the twelve pages for a single town do not all lead with the same fact.
 */
function angleFor(city: City, service?: ServiceItem, serviceIndex = 0): ReturnType<typeof openingAngle> {
  if (!service) return openingAngle(city.slug, 'city', 'open');
  const angles = ['climate', 'housing-stock', 'landmarks', 'permits', 'distance'] as const;
  return angles[(hash(city.slug) + serviceIndex) % angles.length];
}

function openingParagraph(city: City, service?: ServiceItem, serviceIndex = 0): string {
  const keys = [city.slug, service?.slug ?? 'city', 'open'];
  const angle = angleFor(city, service, serviceIndex);
  const what = service ? service.title.toLowerCase() : 'additions and remodeling';
  const places = and(city.landmarks.slice(0, 2));

  switch (angle) {
    case 'climate':
      return pick(
        [
          `Every ${city.name} project starts with the weather. ${city.climate} That is not a sales line — it decides how we flash, how we vent and how we frame your ${what}.`,
          `${city.climate} So when we price ${what} in ${city.name}, the details that keep water out are already in the number, not an upgrade we offer later.`,
          `Ask any contractor who actually works in ${city.name} what kills a job here and the answer is the same. ${city.climate} We build for that first and worry about finishes second.`,
        ],
        ...keys,
      );
    case 'housing-stock':
      return pick(
        [
          `${city.housingStock} That is the house we are usually walking into in ${city.name}, and it shapes what ${what} can realistically do here.`,
          `There is a pattern to ${city.name} homes. ${city.housingStock} Knowing that before the first visit is why our estimates hold up.`,
          `${city.housingStock} So a ${what} plan that works three towns over often does not work on your street — and we will tell you that on the first visit.`,
        ],
        ...keys,
      );
    case 'landmarks':
      return pick(
        [
          `We work all over ${city.name} — ${places} and the streets around them. ${city.housingStock}`,
          `If you live near ${places}, we have almost certainly had a truck on your street. ${city.climate}`,
          `${city.name} is a ${city.county} County town we know street by street, from ${places} outward. ${city.housingStock}`,
        ],
        ...keys,
      );
    case 'permits':
      return pick(
        [
          `Here is the part most homeowners never hear about until it costs them time. ${city.permitNote} We handle that filing, and we do not start framing without it.`,
          `${city.permitNote} That is our job, not yours, and it is built into the schedule we give you.`,
          `Permitting in ${city.name} is its own small project. ${city.permitNote} We pull it, we schedule the inspections, and we meet the inspector on site.`,
        ],
        ...keys,
      );
    case 'distance':
    default:
      return pick(
        [
          `${city.name} is ${city.drive} from our shop in Whitinsville, which means the crew is on site when they said they would be. ${city.housingStock}`,
          `We are ${city.drive} away in the Blackstone Valley, so ${city.name} is a normal working day for us, not a special trip. ${city.climate}`,
          `Being ${city.drive} out keeps ${city.name} inside our real service radius — close enough that a punch-list item does not wait two weeks. ${city.housingStock}`,
        ],
        ...keys,
      );
  }
}

/* ─────────── Supporting paragraphs ─────────── */

function craftParagraph(city: City, service?: ServiceItem): string {
  const keys = [city.slug, service?.slug ?? 'city', 'craft'];
  const what = service ? service.title.toLowerCase() : 'an addition or a full remodel';

  if (service) {
    // The service's own writing is the same in every town, so we do not paste
    // it whole. We break it into sentences, take a different subset per town,
    // and thread a town-specific clause through the middle. That keeps the
    // page accurate about the service and still different from the same
    // service in the next town over.
    const sentences = (service.overview.length > 0 ? service.overview : [service.description])
      .join(' ')
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 25);

    const chosen = pickMany(sentences, Math.min(3, sentences.length), ...keys, 'overview-sentences');

    const localClause = pick(
      [
        `Here that matters because ${city.climate.charAt(0).toLowerCase()}${city.climate.slice(1).replace(/\.$/, '')}.`,
        `On a ${city.name} house it usually comes back to one thing: ${city.housingStock.charAt(0).toLowerCase()}${city.housingStock.slice(1).replace(/\.$/, '')}.`,
        `And in ${city.name} there is a paperwork side to it — ${city.permitNote.charAt(0).toLowerCase()}${city.permitNote.slice(1).replace(/\.$/, '')}.`,
        `We are ${city.drive} from ${city.name}, so the crew is on site early and the job keeps moving.`,
        `Around ${and(city.landmarks.slice(0, 2))} we have done this more times than we can count.`,
      ],
      ...keys,
      'local-clause',
    );

    const insertAt = hash(...keys, 'insert') % (chosen.length + 1);
    const parts = [...chosen];
    parts.splice(insertAt, 0, localClause);
    return parts.join(' ');
  }

  return pick(
    [
      `Most ${city.name} projects we take on are one of four things: a second-story or over-garage addition, an in-law suite, a gutted kitchen or bath, or a basement turned into real living space. ${city.housingStock}`,
      `Homeowners in ${city.name} call us for the same reasons: the house is a bedroom short, the kitchen is closed off, or the basement is wasted. ${city.housingStock}`,
      `In ${city.name} we are usually adding square footage rather than moving walls around — additions, in-law suites, finished basements. ${city.housingStock}`,
    ],
    ...keys,
  );
}

function trustParagraph(city: City, service?: ServiceItem): string {
  const keys = [city.slug, service?.slug ?? 'city', 'trust'];
  return pick(
    [
      `Massachusetts requires a licensed Construction Supervisor on structural work. FBS holds CSL ${site.licenses.csl} and HIC ${site.licenses.hic}, and our name goes on the ${city.name} permit — not a subcontractor's.`,
      `We are licensed in Massachusetts (CSL ${site.licenses.csl}, HIC ${site.licenses.hic}) and fully insured. ${city.permitNote}`,
      `You get one licensed company from the first measurement to the final inspection in ${city.name}. CSL ${site.licenses.csl}, HIC ${site.licenses.hic}, and the same crew on site each day.`,
    ],
    ...keys,
  );
}

/* ─────────── Why this town ─────────── */

function whyPoints(city: City, service?: ServiceItem): { title: string; body: string }[] {
  const keys = [city.slug, service?.slug ?? 'city', 'why'];

  // On a service page, most of this block comes from the service's own
  // benefits and options, which are written once per service and differ
  // completely between them. Only one point is about the town.
  if (service) {
    // Service headings carry the service fact; the body underneath is composed
    // around this town, so the same benefit does not read identically in 111
    // towns.
    const frame = (label: string, text: string, salt: string) =>
      pick(
        [
          `${text} In ${city.name}, ${city.climate.charAt(0).toLowerCase()}${city.climate.slice(1)}`,
          `${text} That matters on ${city.name} houses because ${city.housingStock.charAt(0).toLowerCase()}${city.housingStock.slice(1)}`,
          `${text} We handle it ${city.drive} from the shop, so nothing waits on a crew from out of state.`,
          `${text} And the ${city.name} permit has our licence on it, not a subcontractor's.`,
        ],
        ...keys,
        salt,
        label,
      );

    const servicePoints = [
      ...service.benefits.map((b) => ({ title: b.title, body: frame(b.title, b.text, 'benefit') })),
      ...service.options.map((o) => ({ title: o.name, body: frame(o.name, o.text, 'option') })),
    ];
    const townPoint = pick(
      [
        { title: 'Built for this weather', body: city.climate },
        { title: 'We know these houses', body: city.housingStock },
        { title: 'The permit is our problem', body: city.permitNote },
      ],
      ...keys,
      'town-point',
    );
    return [...pickMany(servicePoints, 3, ...keys), townPoint];
  }

  const pool = [
    {
      title: 'Built for this weather, not a catalogue',
      body: city.climate,
    },
    {
      title: 'We know what is behind your walls',
      body: city.housingStock,
    },
    {
      title: 'The permit is our problem',
      body: city.permitNote,
    },
    {
      title: `${city.drive} from the shop`,
      body: `Our crew is based in Whitinsville, ${city.drive} from ${city.name}. Close enough that the job gets finished instead of parked.`,
    },
    {
      title: 'One licensed team, start to finish',
      body: `No handoffs. The same ${city.county} County crew frames it, finishes it and walks it with you at the end.`,
    },
    {
      title: 'A written price, before anything moves',
      body: `We measure in ${city.name}, then put an itemized estimate in writing. No phone quotes, no number that changes once the walls are open.`,
    },
  ];

  return pickMany(pool, 3, ...keys);
}

/* ─────────── Local FAQ ─────────── */

function localFaq(city: City, service?: ServiceItem): { question: string; answer: string }[] {
  const keys = [city.slug, service?.slug ?? 'city', 'faq'];
  const what = service ? service.title.toLowerCase() : 'a home addition or remodel';

  // Service pages get questions built from that service's own options and
  // benefits first, so the FAQ block is not the same four questions town-wide.
  const servicePool = service
    ? [
        {
          question: `What does ${what} include in ${city.name}?`,
          answer: `${service.description} ${service.features.slice(0, 2).join('. ')}.`,
        },
        ...service.options.map((o) => ({
          question: `Do you do ${o.name.toLowerCase()} in ${city.name}?`,
          answer: `${o.text} We quote it as part of the same ${what} estimate, not as a change order later.`,
        })),
        ...service.benefits.map((b) => ({
          question: `${b.title}?`,
          answer: `${b.text}`,
        })),
      ]
    : [];

  const pool = [
    {
      question: `Do you actually work in ${city.name}?`,
      answer: `Yes. ${city.name} is ${city.drive} from our shop in Whitinsville and sits inside our regular service area, along with the rest of ${city.region}. We are not subcontracting it out.`,
    },
    {
      question: `Who pulls the permit for ${what} in ${city.name}?`,
      answer: `We do. ${city.permitNote} Our Massachusetts Construction Supervisor licence (CSL ${site.licenses.csl}) goes on the application, and we meet the inspector at every stage.`,
    },
    {
      question: `How long does ${what} take in ${city.name}?`,
      answer: `Design and permitting usually run three to six weeks before anyone swings a hammer, and the build depends on scope. ${city.permitNote} We give you a dated schedule with the estimate, not a vague range.`,
    },
    {
      question: `What makes a ${city.name} job different from the next town over?`,
      answer: `${city.climate} ${city.housingStock}`,
    },
    {
      question: `Can you work on older homes in ${city.name}?`,
      answer: `That is most of what we do here. ${city.housingStock} Older framing needs to be opened up and looked at before anyone promises you a beam span — so that is what we do first.`,
    },
    {
      question: `Do you give free estimates in ${city.name}?`,
      answer: `Yes. We come out, measure, listen to what you want the space to do, and send an itemized written price. No charge, and no pressure to sign on the visit.`,
    },
    {
      question: `Which parts of ${city.name} do you cover?`,
      answer: `All of it — ${and(city.landmarks)} and everywhere between. We also work in ${and(nearbyCities(city, 3).map((c) => c.name))}.`,
    },
  ];

  if (service) {
    return [...pickMany(servicePool, 3, ...keys), ...pickMany(pool, 2, ...keys)];
  }

  return pickMany(pool, 4, ...keys);
}

/* ─────────── Public API ─────────── */

export type LocalPage = {
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs: string[];
  whyTitle: string;
  why: { title: string; body: string }[];
  faqTitle: string;
  faq: { question: string; answer: string }[];
  nearby: City[];
  nearbyTitle: string;
  cta: string;
  sections: ReturnType<typeof sectionOrder>;
  /** Service bullets, reordered per page so the list is not identical either. */
  bullets: string[];
};

export function buildCityPage(city: City, serviceList: ServiceItem[]): LocalPage {
  const keys = [city.slug, 'city'];
  const shape = pick(CITY_HEADLINE_SHAPES, ...keys, 'headline');

  return {
    heroTitle: shape(city.name),
    heroSubtitle: pick(
      [
        `Second-story additions, in-law suites, kitchens, baths and basements across ${city.name} and ${city.region}.`,
        `Licensed Massachusetts builder, ${city.drive} from ${city.name}, permits handled start to finish.`,
        `${city.county} County additions and remodeling, with the permit pulled and the price in writing.`,
      ],
      ...keys,
      'sub',
    ),
    metaTitle: `Home Additions & Remodeling in ${city.name}, MA | ${site.name}`,
    metaDescription: `Licensed addition and remodeling contractor serving ${city.name}, MA. ${city.housingStock.slice(0, 90)}… Free written estimates. Call ${site.phone}.`,
    paragraphs: [openingParagraph(city), craftParagraph(city), trustParagraph(city)],
    whyTitle: sectionTitle('why-this-town', ...keys),
    why: whyPoints(city),
    faqTitle: sectionTitle('faq', ...keys),
    faq: localFaq(city),
    nearby: nearbyCities(city, 6),
    nearbyTitle: sectionTitle('nearby', ...keys),
    cta: ctaLine(...keys),
    sections: sectionOrder(...keys),
    bullets: shuffle(
      serviceList.map((s) => s.title),
      ...keys,
      'bullets',
    ),
  };
}

export function buildCityServicePage(city: City, service: ServiceItem, serviceIndex = 0): LocalPage {
  const keys = [city.slug, service.slug];
  const shape = pick(HEADLINE_SHAPES, ...keys, 'headline');

  return {
    heroTitle: shape(service.title, city.name),
    heroSubtitle: flag(...keys, 'sub')
      ? service.heroTagline
      : `${service.short} In ${city.name} and across ${city.region}.`,
    metaTitle: `${service.title} in ${city.name}, MA | ${site.name}`,
    metaDescription: `${service.title} in ${city.name}, Massachusetts. ${service.short} Licensed CSL ${site.licenses.csl}. Free written estimate — call ${site.phone}.`,
    paragraphs: [
      openingParagraph(city, service, serviceIndex),
      craftParagraph(city, service),
      trustParagraph(city, service),
    ],
    whyTitle: sectionTitle('why-this-town', ...keys),
    why: whyPoints(city, service),
    faqTitle: sectionTitle('faq', ...keys),
    faq: localFaq(city, service),
    nearby: nearbyCities(city, 6),
    nearbyTitle: sectionTitle('nearby', ...keys),
    cta: ctaLine(...keys),
    sections: sectionOrder(...keys),
    bullets: shuffle(service.features, ...keys, 'bullets'),
  };
}

/** Exposed for the uniqueness check script. */
export function pageText(page: LocalPage): string {
  return [
    page.heroTitle,
    page.heroSubtitle,
    ...page.paragraphs,
    ...page.why.flatMap((w) => [w.title, w.body]),
    ...page.faq.flatMap((f) => [f.question, f.answer]),
    page.cta,
  ].join(' ');
}

export { hash };
