import type { RemodelingService } from './site';

/**
 * Detail-page copy for the eight Additions & Remodeling services.
 *
 * Kept apart from `remodelingServices` in site.ts so the card data (title,
 * short, bullets, icon) stays small and the long page copy lives in one place.
 *
 * Rules this copy follows, because the pages go live without client review of
 * every line: no invented numbers, no awards, no warranty terms and no project
 * counts. Only what FBS can back up — the two Massachusetts licenses, the towns
 * already listed in site.ts, and how the work is run.
 *
 * Photos: only real FBS jobs, never stock. As of 23/11/2026 only Sunrooms and
 * Deck Roofs have confirmed photos (delivered by Ingrid; alt text taken from
 * her `fotos-alt-text.csv`). The other six pages leave `photos` undefined and
 * render without a gallery, exactly as before.
 */
export type RemodelingPhoto = {
  /** File in /public/images/work, including the extension. */
  src: string;
  alt: string;
  stage: 'before' | 'during' | 'after';
};

export type RemodelingPage = {
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  overview: string[];
  features: string[];
  benefits: { title: string; text: string }[];
  options: { name: string; text: string }[];
  /** Real job photos for this service. Omitted where FBS has none yet. */
  photos?: RemodelingPhoto[];
  /** Line above the gallery, naming the job the photos come from. */
  photosCaption?: string;
};

export const remodelingPages: Record<string, RemodelingPage> = {
  'home-additions': {
    metaTitle: 'Home Additions in Whitinsville, MA | Second-Story & In-Law Suites',
    metaDescription:
      'Licensed home addition contractor in Whitinsville, MA. Second-story additions, over-garage additions, bump-outs and in-law suites across Worcester County. MA CSL CS-117744 · HIC 179686.',
    heroTagline: 'More square footage without leaving the house you already own.',
    overview: [
      'An addition is the answer when the house works except for one thing: there is not enough of it. FBS Construction frames, roofs and finishes additions that tie into the existing structure — a second story, a bump-out at the back, a suite over the garage — so the result reads as part of the original house instead of something bolted on.',
      'We run the job from the first drawing to the final inspection: foundation or structural tie-in, framing, roof, windows, siding, insulation, drywall and finishes. Massachusetts permits and inspections are handled by us, under MA Construction Supervisor License CS-117744 and Home Improvement Contractor registration 179686.',
      'Most of our additions are in Whitinsville, Northbridge, Uxbridge, Sutton, Douglas, Millbury, Grafton and Worcester. If you are nearby, call and ask — we will tell you straight whether the project is a fit.',
    ],
    features: [
      'Second-story and over-garage additions',
      'Rear and side bump-outs',
      'In-law and primary suites',
      'Structural tie-in to the existing house',
      'Permits and inspections handled',
      'Framing, roofing, siding and interior finishes',
    ],
    benefits: [
      {
        title: 'Stay Where You Are',
        text: 'Adding on keeps the address, the schools and the neighbors — and skips the cost of buying and moving.',
      },
      {
        title: 'One Crew, Start to Finish',
        text: 'Framing, roof, exterior and interior are run by the same licensed team, so nothing falls between trades.',
      },
      {
        title: 'Permits Done Right',
        text: 'Massachusetts requires a licensed Construction Supervisor on structural work. That license is ours, and the paperwork is ours too.',
      },
    ],
    options: [
      {
        name: 'Second-Story Addition',
        text: 'A full floor added above the existing footprint — bedrooms, a bath and the stair to reach them.',
      },
      {
        name: 'Over-Garage Addition',
        text: 'Usable rooms built above an attached garage, tied into the roofline of the house.',
      },
      {
        name: 'Bump-Out',
        text: 'A smaller extension that gives a kitchen, dining room or bath the few extra feet it needs.',
      },
      {
        name: 'In-Law Suite',
        text: 'A self-contained space with a bedroom, bath and living area for family who need their own door.',
      },
    ],
  },

  'interior-remodeling': {
    metaTitle: 'Interior Remodeling in Whitinsville, MA | Whole-Home Renovation',
    metaDescription:
      'Interior remodeling and whole-home renovation in Whitinsville, MA and Worcester County. Walls opened, rooms reconfigured, finishes rebuilt. Licensed MA contractor, free estimates.',
    heroTagline: 'Open the floor plan, move the walls, rebuild the finishes.',
    overview: [
      'Interior remodeling is about making the space you already have work the way you live. That can mean taking down the wall between the kitchen and the living room, turning three cramped rooms into two useful ones, or gutting a floor back to the studs and rebuilding it.',
      'Load-bearing walls are a structural question, not a decorating one. We size and install the beam, carry the load correctly and keep the inspector in the loop — the same licensed supervision that covers our additions.',
      'Interior work also runs all winter. When the ground is frozen and exterior jobs stop, this is the work we keep moving on, which is often the fastest way to get a project started in Massachusetts.',
    ],
    features: [
      'Open-concept conversions',
      'Load-bearing walls removed and beamed',
      'Room reconfiguration and new layouts',
      'Flooring, trim and finish carpentry',
      'Drywall, paint and millwork',
      'Winter work — interiors run year-round',
    ],
    benefits: [
      {
        title: 'Fix the Layout, Not the Address',
        text: 'A wall in the wrong place is cheaper to move than a house is to replace.',
      },
      {
        title: 'Structure Handled Properly',
        text: 'Beams are sized and installed under a licensed Construction Supervisor, with inspections on record.',
      },
      {
        title: 'Runs Through Winter',
        text: 'Interior projects are not weather-dependent, so a Massachusetts winter does not put your remodel on hold.',
      },
    ],
    options: [
      { name: 'Open-Concept Conversion', text: 'Walls removed and beamed to join kitchen, dining and living space.' },
      { name: 'Whole-Floor Renovation', text: 'A level taken back to the studs and rebuilt — layout, systems and finishes.' },
      { name: 'Room Reconfiguration', text: 'Partitions moved, closets added, doorways relocated to fix the flow.' },
      { name: 'Finish Carpentry', text: 'Trim, built-ins, stairs and millwork that make a renovation look finished.' },
    ],
  },

  'kitchen-remodeling': {
    metaTitle: 'Kitchen Remodeling in Whitinsville, MA | Full Kitchen Renovation',
    metaDescription:
      'Kitchen remodeling in Whitinsville, MA and Worcester County — cabinets, counters, islands and full layout changes. Licensed MA contractor. Free written estimate.',
    heroTagline: 'Cabinets, counters, islands — and the layout behind them.',
    overview: [
      'A kitchen remodel is as big as you want it to be: new cabinets and counters in the same footprint, or a new footprint entirely. We do both, and we are honest about which one your kitchen actually needs.',
      'When the layout changes, plumbing, electrical and sometimes a wall change with it. Those are coordinated as part of the job, with licensed trades and inspections where the work requires them.',
      'We build in Whitinsville, Northbridge, Uxbridge, Sutton, Douglas, Millbury, Grafton and Worcester. The estimate is written, itemized and free.',
    ],
    features: [
      'Cabinet installation and replacement',
      'Countertops and backsplash',
      'Islands and peninsulas',
      'Layout changes and wall removal',
      'Plumbing and electrical coordinated',
      'Flooring, lighting and finish work',
    ],
    benefits: [
      {
        title: 'The Room You Use Most',
        text: 'A kitchen that fits how you cook and gather pays you back every single day.',
      },
      {
        title: 'Layout First, Finishes Second',
        text: 'We start with how the space works, then choose the cabinets — not the other way around.',
      },
      {
        title: 'One Point of Contact',
        text: 'Carpentry, plumbing, electrical and finishes are scheduled by us, not left for you to chase.',
      },
    ],
    options: [
      { name: 'Cabinet & Counter Refresh', text: 'New cabinets, counters and backsplash in the existing layout.' },
      { name: 'Full Gut Renovation', text: 'Back to the studs — new layout, new systems, new finishes.' },
      { name: 'Island Addition', text: 'An island or peninsula added, with the electrical and plumbing it needs.' },
      { name: 'Open the Kitchen', text: 'The wall between kitchen and living space removed and properly beamed.' },
    ],
  },

  'bathroom-remodeling': {
    metaTitle: 'Bathroom Remodeling in Whitinsville, MA | Tub-to-Shower & Full Gut',
    metaDescription:
      'Bathroom remodeling in Whitinsville, MA and Worcester County. Tub-to-shower conversions, full gut renovations, accessible upgrades. Licensed MA contractor, free estimates.',
    heroTagline: 'Tub-to-shower conversions and full gut renovations, waterproofed right.',
    overview: [
      'Bathrooms are small rooms where the details decide everything. Waterproofing behind the tile, venting that actually moves moisture out, and a layout that gives you room to stand — that is what separates a bathroom that lasts from one that fails in five years.',
      'We handle tub-to-shower conversions, full gut renovations and accessible upgrades such as curbless showers, grab-bar blocking and comfort-height fixtures.',
      'Like our other interior work, bathrooms run year-round. Plumbing and electrical are coordinated with licensed trades, with inspections where the work calls for them.',
    ],
    features: [
      'Tub-to-shower conversions',
      'Full gut renovations',
      'Waterproofing and tile',
      'Vanities, fixtures and lighting',
      'Accessible and curbless showers',
      'Ventilation done correctly',
    ],
    benefits: [
      {
        title: 'Waterproofing You Cannot See',
        text: 'The part behind the tile is the part that fails. It gets done properly, because we are the ones who come back if it does not.',
      },
      {
        title: 'Built for How You Live Now',
        text: 'Curbless entries, blocking for grab bars and better lighting make a bathroom work for the long run.',
      },
      {
        title: 'Tight Schedule, Clear Plan',
        text: 'A bathroom out of service is disruptive. The sequence is planned before demolition starts.',
      },
    ],
    options: [
      { name: 'Tub-to-Shower Conversion', text: 'The unused tub replaced with a full shower, waterproofed and tiled.' },
      { name: 'Full Gut Renovation', text: 'Everything out, new layout and new fixtures, back to the studs.' },
      { name: 'Accessible Bathroom', text: 'Curbless entry, grab-bar blocking and comfort-height fixtures.' },
      { name: 'Powder Room', text: 'A half bath refinished, or added where the plumbing can reach.' },
    ],
  },

  'basement-finishing': {
    metaTitle: 'Basement Finishing in Whitinsville, MA | Family Room, Office & Suite',
    metaDescription:
      'Basement finishing in Whitinsville, MA and Worcester County. Family rooms, home offices, gyms and guest suites — moisture and egress handled first. Licensed MA contractor.',
    heroTagline: 'An unused basement turned into real living space — moisture handled first.',
    overview: [
      'A finished basement is the cheapest square footage in the house, as long as the water question is answered before the first stud goes up. We start there: where moisture comes from, where it goes, and what has to change before anything gets framed.',
      'After that it is a normal build — framing, insulation, egress, electrical, ceiling and finishes — turning the space into a family room, home office, gym or guest suite.',
      'Massachusetts code has specific requirements for basement bedrooms and egress. We build to them and pull the permits under license CS-117744.',
    ],
    features: [
      'Moisture assessment before framing',
      'Framing, insulation and drywall',
      'Egress windows where required',
      'Electrical, lighting and heat',
      'Flooring built for below grade',
      'Full or half bath where plumbing allows',
    ],
    benefits: [
      {
        title: 'Square Footage You Already Own',
        text: 'No foundation, no roof, no addition — the shell is already there.',
      },
      {
        title: 'Water First',
        text: 'If the moisture problem is not solved first, the finish work will not last. We say so before you spend.',
      },
      {
        title: 'Code-Compliant Bedrooms',
        text: 'Egress and ceiling height are checked up front, so a basement bedroom is legal as well as comfortable.',
      },
    ],
    options: [
      { name: 'Family Room', text: 'Open finished space with lighting, heat and flooring rated for below grade.' },
      { name: 'Home Office', text: 'A quieter, insulated room with the wiring a working setup needs.' },
      { name: 'Guest Suite', text: 'A bedroom with code-compliant egress, plus a bath where plumbing allows.' },
      { name: 'Gym or Playroom', text: 'Durable flooring, good lighting and the ceiling height you actually have.' },
    ],
  },

  sunrooms: {
    metaTitle: 'Sunrooms in Whitinsville, MA | Three-Season & Year-Round Builds',
    metaDescription:
      'Sunroom construction in Whitinsville, MA and Worcester County. Three-season and insulated four-season sunrooms, built on a proper foundation. Licensed MA contractor.',
    heroTagline: 'Bright, usable space added to the back of the house.',
    overview: [
      'A sunroom is the room people end up using most, because it is the one with the light. The first decision is honest and simple: three-season, or heated and insulated for all twelve months? The answer changes the foundation, the glazing and the budget.',
      'We build both, on a proper footing and tied into the house structure and roofline — not set on a deck frame that was never designed to carry a room.',
      'Four-season builds are insulated and heated so they stay usable through a Massachusetts winter.',
    ],
    features: [
      'Three-season and four-season builds',
      'Insulated, heated year-round options',
      'Proper foundation and structural tie-in',
      'Large glazing and window packages',
      'Roofline matched to the house',
      'Electrical, lighting and heat',
    ],
    benefits: [
      {
        title: 'The Light You Cannot Add Later',
        text: 'Glazing on three sides changes how the whole back of the house feels.',
      },
      {
        title: 'Built as a Room, Not a Kit',
        text: 'Framed, flashed and roofed like an addition, with a foundation sized for it.',
      },
      {
        title: 'Honest About the Season',
        text: 'We will tell you what a three-season room will and will not do in February, before you pay for one.',
      },
    ],
    options: [
      { name: 'Three-Season Sunroom', text: 'Open and bright from spring through fall, without the insulation package.' },
      { name: 'Four-Season Sunroom', text: 'Insulated, heated and finished for use all year.' },
      { name: 'Sunroom Conversion', text: 'An existing porch or deck area closed in and built out properly.' },
      { name: 'Roof & Glazing Options', text: 'Solid, glass or combination roofs with the window package to match.' },
    ],
    photosCaption: 'A four-season room we built in Whitinsville, MA — framing through finish.',
    photos: [
      {
        src: 'four-season-room-addition-finished-exterior-whitinsville-ma.webp',
        alt: 'Finished four-season room addition with white railings and stairs on a gray home in Whitinsville, MA',
        stage: 'after',
      },
      {
        src: 'four-season-room-addition-windows-gray-siding-whitinsville-ma.webp',
        alt: 'Four-season room addition with large windows and gray vinyl siding in Whitinsville, MA',
        stage: 'after',
      },
      {
        src: 'four-season-room-entry-stairs-railings-whitinsville-ma.webp',
        alt: 'Four-season room entry with white stairs and black balusters in Whitinsville, MA',
        stage: 'after',
      },
      {
        src: 'four-season-room-interior-new-flooring-whitinsville-ma.webp',
        alt: 'Interior of a new four-season room with wood-look flooring in Whitinsville, MA',
        stage: 'during',
      },
      {
        src: 'four-season-room-spray-foam-vaulted-ceiling-whitinsville-ma.webp',
        alt: 'Spray foam insulation in the vaulted ceiling of a four-season room with skylights',
        stage: 'during',
      },
      {
        src: 'four-season-room-framing-zip-sheathing-whitinsville-ma.webp',
        alt: 'Four-season room addition framed and sheathed with ZIP System panels in Whitinsville, MA',
        stage: 'during',
      },
    ],
  },

  'screen-porches': {
    metaTitle: 'Screen Porches in Whitinsville, MA | Screened-In Porch Builder',
    metaDescription:
      'Screened porch construction in Whitinsville, MA and Worcester County. New screened porches and deck conversions with proper roofs and framing. Licensed MA contractor.',
    heroTagline: 'The deck you can finally use from spring through the first frost.',
    overview: [
      'A deck in a New England summer is a mosquito problem with a view. A screened porch fixes that for most of the year, and costs far less than a conditioned room.',
      'We build new screened porches and convert existing decks, which means checking first whether the deck framing and footings can carry a roof. If they cannot, we say so and price the fix.',
      'Roof, framing, screen system and finishes are all part of the same job, under the same licensed supervision as our additions.',
    ],
    features: [
      'New screened porch construction',
      'Existing deck conversions',
      'Framing and footings verified for a roof',
      'Roof tied into the house',
      'Screen systems and doors',
      'Ceiling, lighting and fans',
    ],
    benefits: [
      {
        title: 'More Months Outside',
        text: 'Screens turn a few good evenings a year into most of them.',
      },
      {
        title: 'Checked Before It Is Built',
        text: 'Adding a roof to an existing deck is a structural change. We verify the frame before anything goes up.',
      },
      {
        title: 'Lower Cost Than a Room',
        text: 'No insulation, no heat, no conditioned envelope — usable space for a fraction of an addition.',
      },
    ],
    options: [
      { name: 'New Screened Porch', text: 'Built from footings up, framed and roofed as part of the house.' },
      { name: 'Deck Conversion', text: 'An existing deck screened in, once the framing is confirmed to carry it.' },
      { name: 'Screen Systems', text: 'Panel and spline options, with doors sized for real traffic.' },
      { name: 'Ceiling & Lighting', text: 'Finished ceiling, lighting and fan wiring for evening use.' },
    ],
  },

  'deck-roofs': {
    metaTitle: 'Deck Roofs in Whitinsville, MA | Covered Decks & Patio Roofs',
    metaDescription:
      'Deck roofs and covered deck construction in Whitinsville, MA and Worcester County. Roofs over new or existing decks, tied into the house. Licensed MA contractor.',
    heroTagline: 'Shade, rain protection and a dry grill.',
    overview: [
      'A roof over the deck is the smallest project on this list and often the one that changes how much the deck gets used. Shade in July, cover in a rainstorm, and somewhere to grill that is not under an umbrella.',
      'Covering an existing deck is a structural change: posts, beams and footings have to carry the new load, and the roof has to tie into the house without creating a leak. Both get checked before we quote.',
      'We build roofs over new and existing decks, matched to the roofline and finishes of the house.',
    ],
    features: [
      'Roofs over new or existing decks',
      'Footings and posts verified for the load',
      'Tied into the existing roofline',
      'Flashing detailed against leaks',
      'Finished ceiling options',
      'Lighting and fan wiring',
    ],
    benefits: [
      {
        title: 'The Deck Gets Used',
        text: 'Shade and rain cover turn an occasional deck into an everyday one.',
      },
      {
        title: 'Load Checked First',
        text: 'A roof adds weight and wind load. The existing frame is evaluated before anything is promised.',
      },
      {
        title: 'Flashed Against Leaks',
        text: 'Where the new roof meets the house is where leaks start. That detail gets the attention.',
      },
    ],
    options: [
      { name: 'Covered Deck', text: 'A full roof over the deck, matched to the house roofline.' },
      { name: 'Partial Cover', text: 'Part of the deck covered, part left open to the sun.' },
      { name: 'Finished Ceiling', text: 'A finished underside with lighting and fan wiring instead of bare framing.' },
      { name: 'New Deck & Roof', text: 'Deck and roof designed together, so the structure is right from the footings up.' },
    ],
    photosCaption: 'A covered deck we built in Groton, MA — the old deck came out first.',
    photos: [
      {
        src: 'covered-deck-composite-railings-groton-ma.webp',
        alt: 'New covered deck with white railings and stairs in Groton, MA',
        stage: 'after',
      },
      {
        src: 'covered-deck-side-view-groton-ma.webp',
        alt: 'Side view of a new covered deck with vaulted ceiling in Groton, MA',
        stage: 'after',
      },
      {
        src: 'old-deck-before-replacement-groton-ma.webp',
        alt: 'Old deck and stairs before the covered deck project in Groton, MA',
        stage: 'before',
      },
    ],
  },
};

export function getRemodelingPage(service: RemodelingService): RemodelingPage | undefined {
  return remodelingPages[service.slug];
}
