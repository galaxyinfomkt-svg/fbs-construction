/* ═══════════════════════════════════════════════════════════════
   BLOG
   Format follows the Wolf's Siding blog data: one entry per post,
   `content` is an array of blocks. A block that starts with "## "
   renders as a heading followed by its paragraphs; "- " lines
   render as a list; "1. " lines render as a numbered list.
   Everything is written for Massachusetts homeowners thinking about
   an addition or a remodel, which is what the site now sells.
   ═══════════════════════════════════════════════════════════════ */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  heroImage: string;
  heroAlt: string;
  category: string;
  /** ISO date. */
  date: string;
  readTime: string;
  /** Slug of the service page this post belongs with. */
  relatedService: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-a-home-addition-costs-in-massachusetts',
    title: 'What a Home Addition Really Costs in Massachusetts',
    excerpt:
      'Where the money actually goes on an addition in Worcester County — foundation, framing, the trades inside the walls, and the finishes everyone argues about.',
    heroImage: '/images/hero-front.webp',
    heroAlt: 'Front of a renovated Massachusetts home with gray siding and black shutters',
    category: 'Home Additions',
    date: '2026-11-18',
    readTime: '9 min read',
    relatedService: 'home-additions',
    content: [
      'The first question on every addition is the one nobody can answer over the phone: what is this going to cost? Anyone who gives you a number before they have seen the house is guessing, and the guess is usually low. What we can do is show you where the money goes, so when you get a real estimate you can read it.',
      '## The three parts of an addition budget\n\nAn addition is three jobs stacked on top of each other, and they do not cost the same per square foot.\n\nThe shell — foundation, framing, roof, windows, siding — is the part people picture, and it is rarely the expensive part per foot. The systems — heat, electrical, plumbing, ventilation — are where an addition stops being simple, because you are not just adding them, you are tying them into a house that was sized for its old footprint. The finishes — floors, cabinets, tile, trim — are the part you choose, and the part with the widest range.',
      '## Why the foundation matters more here than in most places\n\nMassachusetts frost depth means footings go deep, and a lot of Worcester County is sitting on ledge. Hitting rock where you planned a full foundation changes the number, and it changes it before a single wall goes up. This is why a site visit is not a formality: a crawl space on one lot and a full basement on the next can be the same addition with very different foundations underneath.',
      '## The costs people forget\n\n- **Tying into the existing roof.** Where the new roof meets the old one is a detail, and details take time.\n- **Upgrading the panel.** An addition with its own heat, lights and outlets often pushes an older service past what it can carry.\n- **Heating the new space.** Extending the existing system is sometimes cheaper than a separate unit and sometimes not — it depends what you have.\n- **Permits and inspections.** Every town does this differently, and the schedule matters as much as the fee.\n- **Where you live during the work.** On a second-story addition, that is a real question.',
      '## What makes an estimate trustworthy\n\nA written estimate should tell you what is included, what is assumed, and what would change the number. If it does not say what happens when the crew opens a wall and finds something, it is not an estimate — it is a hope.\n\nWe look at the house, talk through what you actually want, and then put it in writing with the assumptions spelled out. That way the only surprises are the ones the house hands us, and you hear about them the day we find them.',
      '## Start with the house, not the number\n\nThe cheapest way to get an addition wrong is to design it to a budget you picked before anyone looked at the foundation, the roofline or the panel. Get someone out to the house first. The number that comes after that is one you can actually plan around.',
    ],
  },
  {
    slug: 'second-story-addition-vs-building-out',
    title: 'Second-Story Addition or Building Out? How to Decide',
    excerpt:
      'Going up keeps your yard and your septic field. Going out keeps you living in the house. Here is how the two actually compare on a New England lot.',
    heroImage: '/images/project-garage-navy.webp',
    heroAlt: 'Navy two-story home with a three-car garage in Massachusetts',
    category: 'Home Additions',
    date: '2026-11-12',
    readTime: '8 min read',
    relatedService: 'home-additions',
    content: [
      'Most families who need more room can get it two ways: add a floor on top of what they have, or push out into the yard. Both work. They are not interchangeable, and the right answer usually comes down to the lot rather than the house.',
      '## Going up: what you keep and what you give up\n\nA second-story addition keeps your footprint, which means it keeps your yard, your driveway, your septic field and your setbacks. On a tight lot in an older New England neighbourhood, that is often the only option that the zoning allows at all.\n\nWhat it costs you is the roof and, usually, the living arrangement. The existing roof comes off. The walls below have to carry the new floor, which means we are checking the framing and sometimes the foundation before we design anything. And for a few weeks, the top of your house is open to the weather under temporary cover — most families move out for part of a second-story job.',
      '## Going out: what you keep and what you give up\n\nBuilding out means a new foundation and a new roof tied into the old one, but the house stays closed in while it happens. You can usually live there the whole time, with the new space sealed off from the old.\n\nWhat it costs you is yard, and sometimes more than you expect once you account for setbacks and the septic. On many lots the buildable area is smaller than the empty grass suggests.',
      '## The questions that actually decide it\n\n1. **What does your zoning allow?** Setbacks and lot coverage rule out one option more often than budget does.\n2. **Where is the septic, and where is the leach field?** You cannot build over either.\n3. **Can the existing walls and foundation carry a second floor?** Sometimes yes as built, sometimes with reinforcement, sometimes not sensibly.\n4. **Can you move out for a few weeks?** If not, going out is the realistic answer.\n5. **What are you adding?** Bedrooms and baths want to be upstairs with the other bedrooms. A kitchen, a family room or an in-law suite wants to be on the ground.',
      '## Why the in-law suite question changes the answer\n\nIf the new space is for a parent, going up is usually the wrong choice — stairs are the whole problem you are trying to solve. A ground-floor addition with its own entry, its own bath and no steps is a different design, and it is worth saying so at the start rather than halfway through.',
      '## Decide at the house\n\nThis is a decision that should be made standing in the yard with the plot plan, not at a kitchen table with a brochure. We will come out, look at the setbacks, the septic, the roofline and the framing, and tell you which way the house wants to grow.',
    ],
  },
  {
    slug: 'how-long-a-remodel-takes-in-massachusetts',
    title: 'How Long a Remodel Actually Takes — and Where the Time Goes',
    excerpt:
      'Why a kitchen takes six weeks and not two, what happens on the days nothing seems to happen, and which delays are avoidable.',
    heroImage: '/images/project-board-batten.webp',
    heroAlt: 'Massachusetts home with new windows and a covered porch after remodeling',
    category: 'Interior Remodeling',
    date: '2026-11-05',
    readTime: '7 min read',
    relatedService: 'interior-remodeling',
    content: [
      'The honest answer to "how long will this take" has two parts: how many days of work there are, and how long it takes to get those days in the right order. The second part is what makes remodels feel slow.',
      '## A kitchen, week by week\n\nDemolition and disposal is a couple of days. Then the rough trades — plumbing, electrical, any framing changes — need to go in, get inspected, and only then can the walls close. Drywall, tape and paint is most of a week on its own because compound has to dry between coats.\n\nCabinets go in once the walls are flat and the floor is down. The countertop cannot be templated until the cabinets are set and level, and the fabricator needs about a week after templating. The sink, the faucet and the final plumbing connections come after the counter. Backsplash, trim and punch list close it out.\n\nThat is roughly five to seven weeks for a full kitchen, and almost none of it can be compressed by adding people.',
      '## Where the time really goes\n\n- **Inspections.** Rough plumbing and rough electrical have to be signed off before anything closes. The schedule depends on the town, not on us.\n- **Countertop fabrication.** Template, cut, deliver. A week or more, and it cannot start early.\n- **Drying time.** Compound, primer, paint, mortar, grout. They all need the time they need.\n- **Lead times on what you picked.** This is the one you control. A cabinet order with a ten-week lead time sets the schedule no matter how fast the crew works.',
      '## The delays you can prevent\n\nPick your finishes before demolition, not during. Order the long-lead items first. Decide on the layout before the plumber moves a drain, because moving it back costs the same as moving it the first time. And settle the appliance list early — appliance sizes drive cabinet sizes, and cabinets drive everything downstream.',
      '## What a real schedule looks like\n\nA schedule worth having names the inspections, names the lead times and names the sequence. If a contractor gives you a start date and an end date with nothing in between, there is no schedule — there is a guess. Ask for the order of work. It tells you whether the person has done this before.',
    ],
  },
  {
    slug: 'massachusetts-permits-for-additions-and-remodels',
    title: 'Permits in Massachusetts: What You Need and Who Pulls It',
    excerpt:
      'Which jobs need a permit, why your licensed contractor should be the one pulling it, and what CSL and HIC actually mean on an estimate.',
    heroImage: '/images/project-siding-gray-garage.webp',
    heroAlt: 'Multi-level Massachusetts home with new gray siding and an attached garage',
    category: 'Working With a Contractor',
    date: '2026-10-28',
    readTime: '7 min read',
    relatedService: 'home-additions',
    content: [
      'Permits are the part of a project homeowners worry about and contractors sometimes try to skip. Skipping them is how a finished addition turns into a problem at closing, five years later, when the buyer\'s attorney asks for the certificate.',
      '## What needs a permit\n\nStructural work needs one: additions, removing or altering load-bearing walls, new openings, new decks, roof structure. So does most work that touches a system — new electrical circuits, moved plumbing, a new heating zone. Replacing windows and siding usually needs one too, because it touches the building envelope.\n\nWhat generally does not: paint, flooring over existing subfloor, swapping a faucet, cabinets in the same footprint with no plumbing or electrical changes.\n\nWhen it is borderline, the building department will tell you in a phone call. That call is free. The alternative is not.',
      '## Who should pull it\n\nYour contractor should, under their own licence. In Massachusetts a homeowner can pull a permit as an owner-builder, and some contractors will suggest it — usually because they do not hold the licence to pull it themselves.\n\nUnderstand what that means before you agree. As the permit holder you become responsible for the work meeting code, and you give up your access to the state\'s Guaranty Fund if the job goes wrong. If a contractor asks you to pull the permit, the right response is to ask why.',
      '## CSL and HIC, in plain terms\n\n- **CSL — Construction Supervisor Licence.** The state licence to supervise structural work. Anyone pulling a building permit for an addition needs one. Ours is CS-117744.\n- **HIC — Home Improvement Contractor registration.** The consumer-protection registration that puts a contractor inside the state\'s dispute process and Guaranty Fund. Ours is 179686.\n\nBoth are public and both are searchable. Look up anyone you are about to hand a deposit to, including us.',
      '## What the inspections are for\n\nRough inspections happen before the walls close, because that is the only time anyone can see the framing, the wiring and the pipes. Final inspection closes the permit. A closed permit is the paperwork that proves the work was done and signed off — which is exactly what a buyer\'s attorney will ask for one day.',
      '## The local part\n\nEvery building department in Massachusetts runs on its own schedule and its own habits — some take inspection requests online, some want a call by a certain hour, some have one inspector covering several towns. That is not a reason to be surprised by it. We work in these towns every week, and the schedule gets built around how that particular department actually operates.',
    ],
  },
  {
    slug: 'finishing-a-basement-in-new-england',
    title: 'Finishing a Basement in New England Without Trapping Moisture',
    excerpt:
      'The order of operations that decides whether a finished basement stays dry: water first, air sealing second, insulation third, framing last.',
    heroImage: '/images/about-deck-white.webp',
    heroAlt: 'Backyard of a white-sided New England home',
    category: 'Basement Finishing',
    date: '2026-10-20',
    readTime: '8 min read',
    relatedService: 'basement-finishing',
    content: [
      'A finished basement is the cheapest square footage in the house — you already own the floor, the walls and the roof over it. It is also the easiest room in the house to ruin, because everything that goes wrong happens behind the finished surface where you cannot see it.',
      '## Water comes first, and it is not negotiable\n\nBefore anything gets framed, the water has to be dealt with on the outside and at the slab. That means grading that runs away from the foundation, gutters and downspouts that discharge well clear of the wall, and any crack or seep in the foundation addressed at the source.\n\nIf the basement takes water once a year in a heavy spring rain, it will take water once a year after it is finished too. The difference is that afterwards it will be inside a wall.',
      '## Then air, then insulation, then framing\n\nThe order matters more than the products:\n\n1. **Fix the water.** Outside grade, gutters, foundation cracks, slab penetrations.\n2. **Air seal.** The rim joist is the biggest leak in most New England basements, and it is the one that makes the room cold no matter how much insulation goes in the walls.\n3. **Insulate the concrete.** Rigid foam against the wall, so the concrete never meets humid interior air. This is the step that prevents condensation inside the assembly.\n4. **Frame inside the foam**, not against the concrete, and keep fibrous insulation out of contact with the wall.\n5. **Then finish.**\n\nFraming a stud wall straight onto a concrete foundation and filling it with fiberglass is the classic New England basement mistake. The concrete is cold, the air in the bay is humid, and the batt holds the moisture right where it will cause trouble.',
      '## The things people find out too late\n\n- **Ceiling height.** Code has a minimum, and the ductwork is usually what eats it. Measure before you plan.\n- **Egress.** A basement bedroom needs a code-compliant way out, and that normally means a window well and some excavation.\n- **The mechanicals.** The furnace, the water heater and the panel all need clearance and access. You cannot box them in.\n- **Sump and drainage.** If there is a sump, it needs to stay reachable.\n- **Heat.** A finished basement is a new zone\'s worth of load on a system that was never asked to heat it.',
      '## Materials that forgive a wet day\n\nIn a basement, pick finishes that survive a mistake: rigid foam rather than batts against the wall, a floor that tolerates moisture, and a ceiling that can come down for access. If something does get past you, you want an assembly you can open and dry, not one you have to demolish.',
      '## Worth doing properly\n\nDone in the right order, a finished basement is dry, warm and the best value per square foot in the house. Done in the wrong order, it is a room you stop going into. The difference is all in the work nobody ever sees.',
    ],
  },
  {
    slug: 'kitchen-remodel-layout-decisions',
    title: 'The Five Kitchen Layout Decisions That Set the Whole Budget',
    excerpt:
      'Moving the sink, moving the range, taking out a wall, where the fridge lands, and how much you want to see — each one changes the number.',
    heroImage: '/images/hero-front.webp',
    heroAlt: 'Massachusetts home exterior after full renovation',
    category: 'Kitchen Remodeling',
    date: '2026-10-14',
    readTime: '7 min read',
    relatedService: 'kitchen-remodeling',
    content: [
      'Most of a kitchen budget is decided in the first conversation, before anyone picks a tile. Five layout decisions do the work.',
      '## 1. Does the sink move?\n\nA sink that stays put keeps the drain, the vent and the supply lines where they are. Moving it means opening the floor, re-running the drain at the right slope, and sometimes re-venting. That is real work, and it is hidden work — you pay for it and you never see it.',
      '## 2. Does the range move?\n\nMoving a gas range means new gas line. Moving an electric range means a new heavy circuit. And either way, moving the range usually means moving the hood, which means a new duct route to the outside. Range relocations are rarely the cheap change they look like on a drawing.',
      '## 3. Does a wall come out?\n\nOpening a kitchen into the next room is the single change that makes the biggest difference to how the house feels. If the wall is load-bearing, it needs a beam, the beam needs posts, and the posts need something to land on — sometimes all the way down to the foundation. That is a structural job with a permit and an inspection, not a demolition job.',
      '## 4. Where does the refrigerator go?\n\nThe fridge is the biggest object in the room and the one people place last. Put it somewhere that does not block a walkway or a door swing, and leave the clearance it needs to open fully. A fridge in the wrong place makes an otherwise good layout feel cramped forever.',
      '## 5. How much do you want to see?\n\nOpen shelves, glass doors and a long sight line from the living room all mean the kitchen is on display all the time. Closed storage hides the mess. This is taste, not cost — but decide it early, because it changes the cabinet order, and the cabinet order is the long-lead item.',
      '## Decide the layout first, finishes second\n\nFinishes are easy to change on paper and expensive to change on site. Layout is the opposite: cheap to settle in a conversation, expensive to revisit once the plumber has been. Get the five answers above nailed down, then go pick your tile.',
    ],
  },
  {
    slug: 'bathroom-remodel-what-is-behind-the-tile',
    title: 'Bathroom Remodels: Everything That Matters Is Behind the Tile',
    excerpt:
      'Waterproofing, slope, ventilation and the subfloor — the four things that decide whether a beautiful bathroom lasts fifteen years or five.',
    heroImage: '/images/project-siding-navy-bay.webp',
    heroAlt: 'Renovated Massachusetts home with navy siding and white trim',
    category: 'Bathroom Remodeling',
    date: '2026-10-07',
    readTime: '7 min read',
    relatedService: 'bathroom-remodeling',
    content: [
      'A bathroom is the smallest room in the house and the one most likely to be rebuilt twice. Tile looks the same whether what is behind it was done right or not — which is exactly why it is worth knowing what to ask about.',
      '## Waterproofing is a system, not a product\n\nTile is not waterproof and grout is not waterproof. Water gets through both; that is normal. What keeps it out of the framing is the waterproofing layer behind the tile, and it only works if it is continuous — up the walls, across the pan, around the valve, over the curb, and lapped in the direction water runs.\n\nA single unsealed penetration undoes the whole thing. This is the step that cheap bathroom jobs skip, and the one you will never see once the tile is on.',
      '## The pan and the slope\n\nA shower floor has to slope evenly to the drain, with no flat spots and no low spots. A curbless shower makes this harder, not easier, because the slope has to be built into the floor structure instead of sitting on top of it. If the pan is wrong, the shower holds water in the corner, and nothing you do to the tile later will fix it.',
      '## Ventilation, sized and ducted outside\n\nThe fan has to be big enough for the room and it has to discharge outdoors — not into the attic, not into a soffit bay. A fan ducted into an attic moves the moisture from the bathroom to the roof sheathing, which is a worse place for it. In a New England winter that is how you get frost on the underside of the roof.\n\nRun it during the shower and for twenty minutes after. A timer switch does that better than anyone remembers to.',
      '## The subfloor decides the tile\n\nTile is rigid. If the floor flexes, the grout cracks and then the tile does. Tile wants a stiff subfloor, which sometimes means another layer, sometimes means sistering joists, and in an older Massachusetts house often means both. Checking this before the tile is ordered is a lot cheaper than finding out after.',
      '## What to ask for in writing\n\nAsk which waterproofing system is being used and whether it is continuous at the curb and the valve. Ask how the pan slope is built. Ask where the fan ducts to. Ask what is being done to stiffen the floor. A contractor who answers those four clearly is a contractor who has done the work.',
    ],
  },
  {
    slug: 'sunroom-vs-screen-porch-vs-deck-roof',
    title: 'Sunroom, Screen Porch or Deck Roof: Which One Do You Want?',
    excerpt:
      'Three ways to add outdoor living in Massachusetts, how many months a year you actually get out of each, and what each one does to your taxes and your permit.',
    heroImage: '/images/project-deck-white.webp',
    heroAlt: 'White composite deck with railings on a Massachusetts home',
    category: 'Sunrooms & Porches',
    date: '2026-09-29',
    readTime: '8 min read',
    relatedService: 'sunrooms',
    content: [
      'People usually call asking for one of these three and describing another. They are different structures with different costs and very different seasons.',
      '## Deck roof: shade and rain cover\n\nA roof over an existing deck is the smallest of the three. It keeps the sun and the rain off, it lets you use the deck on a wet afternoon, and it keeps the decking itself from weathering as fast.\n\nIt is open on the sides. That means bugs in July and leaves in October, and it means the space is as cold as outdoors. You get roughly the same months you had before, just more of the days inside them.',
      '## Screen porch: the New England summer room\n\nA screen porch is a roofed structure with screened walls. In Massachusetts it is a genuinely useful room from late May into September, and the thing it solves is mosquitoes — which is the actual reason most people stop using their deck in the evening.\n\nIt is not heated and it is not insulated. Come November it is a nice place to keep firewood.',
      '## Sunroom: three-season or four\n\nA sunroom has real glazed walls, and the honest split is between three-season and four-season.\n\nA three-season sunroom is glazed but lightly insulated and unheated. It is comfortable spring through fall and cold in the winter.\n\nA four-season sunroom is built like the rest of the house: insulated walls and roof, proper glazing, and its own heat. That makes it a room you use in February — and it also makes it conditioned living space, which means a proper foundation, a heating plan, and a bigger permit.',
      '## What decides it\n\n- **Which months do you want?** If the answer includes January, only a four-season sunroom gets you there.\n- **Is there a deck already, and is its frame sound?** Roofing or enclosing a deck puts new load on that frame. A lot of older decks cannot take it without reinforcement.\n- **Foundation.** A four-season room needs a real one. A screen porch usually needs piers.\n- **Assessed value.** Adding conditioned living space is an addition, and your town will treat it as one.\n- **The roof tie-in.** All three attach to the house, and where the new roof meets the old one is the detail that decides whether the whole thing leaks.',
      '## The order to decide in\n\nStart with the months, not the structure. Once you know whether you want a summer room or a year-round one, the rest — foundation, glazing, heat, permit — follows from that one answer instead of fighting it.',
    ],
  },
  {
    slug: 'in-law-suite-addition-massachusetts',
    title: 'Planning an In-Law Suite Addition in Massachusetts',
    excerpt:
      'What an in-law suite needs to actually work — a ground floor, no steps, its own bath and entry — and what your town calls it on the permit.',
    heroImage: '/images/project-siding-navy-wall.webp',
    heroAlt: 'Navy lap siding on a Massachusetts home addition',
    category: 'Home Additions',
    date: '2026-09-22',
    readTime: '8 min read',
    relatedService: 'home-additions',
    content: [
      'An in-law suite is one of the few additions where the design brief is medical as much as architectural. It is being built so somebody can keep living independently, and that puts hard requirements on the plan.',
      '## Ground floor, and no steps anywhere\n\nThe whole point is to remove stairs, which means the suite is on the ground floor and the entry is level. A single step at a threshold defeats a well-designed suite. Plan for a level or gently ramped approach from the driveway, and a threshold that a walker rolls over.',
      '## Doorways and turning space\n\nWider doorways cost almost nothing at framing and are expensive to change later. Build the hallways and the bathroom door wide enough for a walker now, whether or not one is needed today — and leave turning space in the bathroom rather than filling it with fixtures.',
      '## The bathroom is the room that matters\n\nA curbless shower with a bench, blocking in the walls for grab bars, a comfort-height toilet and lever handles instead of knobs. The blocking is the cheapest item on that list and the one most often skipped — put it in during framing, and grab bars can be added any time without opening a wall.',
      '## Its own entry, its own kitchen question\n\nA separate entry is what makes a suite feel like a home rather than a spare room. A kitchen is the part that needs a conversation with the building department before it is drawn, because a second full kitchen is often where a town starts calling it a second dwelling unit rather than an in-law suite.\n\nThat distinction changes the permit, sometimes the zoning path, and sometimes the assessment. Massachusetts towns handle accessory dwelling units differently from one another, and the rules have been moving. Ask before you design, not after.',
      '## Heat, sound and independence\n\nGive the suite its own heating zone — older parents are usually comfortable at a different temperature than the rest of the house, and one thermostat for both is a daily argument. Insulate the shared wall for sound. Both are small line items at framing and impossible to retrofit cheaply.',
      '## Build for the next ten years\n\nThe mistake is designing for how someone is doing today. Wider doors, blocking in the bathroom walls, a level entry and a bedroom that can take a hospital bed if it ever has to — none of it is visible, none of it is expensive at the framing stage, and all of it is what keeps the suite working as things change.',
    ],
  },
  {
    slug: 'choosing-a-contractor-in-massachusetts',
    title: 'How to Choose a Contractor in Massachusetts (and What to Check)',
    excerpt:
      'Licence and registration lookups, what belongs in a written contract under Massachusetts law, and the deposit rule that tells you a lot about who you are dealing with.',
    heroImage: '/images/project-townhomes.webp',
    heroAlt: 'Row of new-construction townhomes in Massachusetts',
    category: 'Working With a Contractor',
    date: '2026-09-15',
    readTime: '9 min read',
    relatedService: 'interior-remodeling',
    content: [
      'Hiring a contractor is handing a stranger a deposit and a key. Massachusetts gives you more tools to check that stranger than most states do, and almost nobody uses them.',
      '## Check both credentials, yourself\n\n- **Construction Supervisor Licence (CSL)** — required to supervise structural work and to pull a building permit for an addition. FBS Construction holds CS-117744.\n- **Home Improvement Contractor (HIC) registration** — the consumer-protection registration that puts a contractor inside the state dispute process and the Guaranty Fund. Ours is 179686.\n\nBoth are public records and both are searchable on the state site. Look up every contractor you are considering. It takes two minutes and it is the single most useful thing you can do.',
      '## The deposit rule\n\nUnder Massachusetts law a contractor generally cannot take more than one third of the contract price up front, unless there are special-order materials that justify more. A contractor asking for half the job in cash before they start is either unaware of the rule or ignoring it, and neither answer is good.',
      '## What the written contract has to say\n\nMassachusetts requires a written contract on home improvement work, and it has to include real content — not just a price. Look for:\n\n- The total price and the payment schedule tied to stages of work\n- Start and completion dates\n- A clear description of the work and the materials\n- Who is pulling the permit, and that it is the contractor\n- The contractor\'s registration number\n- How changes get handled, in writing, with a price\n- The warranty, and what it covers\n\nIf an estimate has none of this, it is a sales document, not a contract.',
      '## Ask for references from the right jobs\n\nA reference from a bathroom tells you very little about an addition. Ask to speak to someone whose job was the same kind of work and roughly the same size, ideally in the last year or two. Then ask those homeowners one question that matters more than the rest: when something unexpected came up, how did the contractor handle it? Everyone hits something. How they handle it is the whole job.',
      '## The questions that separate the pros\n\n- Who is actually on site every day, and is it your crew or a subcontractor?\n- Who is my point of contact when I have a question at 4pm on a Tuesday?\n- What happens to the schedule when the town\'s inspection slips?\n- What did you find on the last job that you did not expect, and what did you do?\n\nYou are not testing their knowledge. You are listening for whether they talk about problems as a normal part of the work or pretend they do not happen.',
      '## The warning signs\n\nNo written contract. No licence number on the paperwork. Pressure to decide today. A price well under everyone else\'s with no explanation of why. A suggestion that you pull the permit yourself. Cash only. Any one of those is a reason to slow down; two together is a reason to stop.',
    ],
  },
];

const bySlug = new Map(blogPosts.map((p) => [p.slug, p]));

export function getPost(slug: string): BlogPost | undefined {
  return bySlug.get(slug);
}

/** Newest first, for the index and the "more reading" strip. */
export const postsByDate = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
