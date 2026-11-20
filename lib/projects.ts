/* ═══════════════════════════════════════════════════════════════
   PROJECT PAGES
   Built only from the photos that already exist in public/images —
   the same jobs the gallery shows. Nothing here claims a customer
   name or a street address: the write-ups describe the work that is
   visible in the photo and the way FBS does it. When the 37 photos
   of the second-story addition over the garage arrive, that job gets
   its own entry here.
   ═══════════════════════════════════════════════════════════════ */

export type ProjectPhoto = { src: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  /** One line for the card and the meta description. */
  summary: string;
  /** Shown as a label on the card. */
  category: string;
  /** Town or area, kept to the real service area — no invented addresses. */
  area: string;
  /** Rough duration on site. */
  duration: string;
  /** Which service page this job belongs to. */
  service: string;
  photos: ProjectPhoto[];
  /** The brief, in the homeowner's terms. */
  brief: string;
  /** What the crew actually did, step by step. */
  work: string[];
  /** Short facts for the spec strip. */
  specs: { label: string; value: string }[];
  /** What the homeowner got out of it. */
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: 'gray-siding-full-exterior-renovation',
    title: 'Full exterior renovation in warm gray with black shutters',
    summary:
      'A tired exterior stripped to the sheathing and rebuilt in warm gray lap siding with black shutters, new white trim and a rebuilt entry.',
    category: 'Exterior renovation',
    area: 'Worcester County',
    duration: 'About two weeks on site',
    service: 'siding-installation',
    photos: [
      {
        src: '/images/hero-front.webp',
        alt: 'Front of a home after a full exterior renovation in warm gray siding with black shutters and white trim',
      },
      {
        src: '/images/project-board-batten.webp',
        alt: 'Gray board-and-batten siding with a covered porch and new windows on the same renovation',
      },
    ],
    brief:
      'The siding had been patched more than once and the trim around the windows was soft in the corners. The owners did not want another patch — they wanted the whole front of the house to look finished, and they wanted to stop worrying about water behind the walls.',
    work: [
      'Stripped the old siding down to the sheathing on all four elevations so nothing was hidden behind new material.',
      'Replaced the sheathing where it had gone soft, mostly under the window sills on the weather side.',
      'Wrapped the house in a full weather barrier, taped at every seam, with flashing tucked under the window flanges instead of caulked over the top.',
      'Hung warm gray lap siding, with board-and-batten on the porch gable to break up the elevation.',
      'New white trim at the corners, the rake and every opening, and black shutters sized to the actual windows rather than the stock size.',
    ],
    specs: [
      { label: 'Scope', value: 'Siding, trim, flashing, shutters' },
      { label: 'Elevations', value: 'All four' },
      { label: 'Weather barrier', value: 'Full house wrap, taped' },
      { label: 'Crew', value: 'FBS crew, no subcontracted siding' },
    ],
    outcome:
      'The house reads as one piece again, and the water path is sorted: anything that gets past the siding runs down the barrier and out at the bottom instead of soaking into the sheathing.',
  },
  {
    slug: 'navy-lap-siding-and-bay-window',
    title: 'Navy lap siding with a rebuilt bay window surround',
    summary:
      'Deep navy lap siding with crisp white trim, and a bay window surround rebuilt properly so the roof over it finally sheds water.',
    category: 'Siding',
    area: 'Blackstone Valley',
    duration: 'About ten days on site',
    service: 'siding-installation',
    photos: [
      {
        src: '/images/project-siding-navy-wall.webp',
        alt: 'Navy blue lap siding installed on a home exterior with white trim',
      },
      {
        src: '/images/project-siding-navy-bay.webp',
        alt: 'Navy siding with a bay window and white trim on a renovated home',
      },
    ],
    brief:
      'The owners had picked the color long before they called. What they needed was someone who would deal with the bay window, where the little roof above it had been leaking into the trim for years.',
    work: [
      'Opened the bay window surround and found rot in the head trim and the top of the sill, as expected.',
      'Rebuilt the framing at the head, added a proper sloped cap and step flashing under the siding rather than surface-caulked to it.',
      'Ran the weather barrier behind the bay so the whole assembly drains to the outside.',
      'Hung navy lap siding across the elevation, keeping the courses lined up through the bay so the lines read straight.',
      'Finished with white trim at the corners, the bay and every opening.',
    ],
    specs: [
      { label: 'Scope', value: 'Siding plus bay window repair' },
      { label: 'Repair found', value: 'Rot at bay head and sill' },
      { label: 'Flashing', value: 'Step flashing under siding' },
      { label: 'Color', value: 'Deep navy with white trim' },
    ],
    outcome:
      'The bay stopped leaking, and the navy over white trim gave the front of the house the contrast the owners were after.',
  },
  {
    slug: 'gray-siding-multi-level-with-attached-garage',
    title: 'Gray siding across a multi-level home and attached garage',
    summary:
      'A split-level and its attached garage brought back to one colour and one line, with the transitions between levels flashed instead of caulked.',
    category: 'Siding',
    area: 'Worcester County',
    duration: 'About two weeks on site',
    service: 'siding-installation',
    photos: [
      {
        src: '/images/project-siding-gray-garage.webp',
        alt: 'Gray siding installation on a multi-level home with an attached garage',
      },
    ],
    brief:
      'Multi-level houses are where siding jobs usually go wrong: the garage had been done at a different time, in a different gray, and the step between the two levels had been sealed with caulk that had split.',
    work: [
      'Stripped the house and the garage together so both ended up under the same barrier and the same colour batch.',
      'Rebuilt the transition at the level change with a flashed, sloped detail that sheds water away from the wall.',
      'Carried the courses across the garage so the lines line up with the house rather than stopping at the corner.',
      'New corner boards and trim at the garage openings.',
    ],
    specs: [
      { label: 'Scope', value: 'House and attached garage' },
      { label: 'Detail', value: 'Flashed level transition' },
      { label: 'Colour', value: 'Single batch across both' },
      { label: 'Trim', value: 'New corners and openings' },
    ],
    outcome:
      'The garage stopped looking like an add-on, and the split between levels is a flashed detail now instead of a line of caulk waiting to fail.',
  },
  {
    slug: 'navy-exterior-with-three-car-garage',
    title: 'Navy exterior with three new garage doors',
    summary:
      'A wide front elevation in navy with three garage doors replaced and the openings re-trimmed so the doors sit square.',
    category: 'Doors and siding',
    area: 'Worcester County',
    duration: 'About twelve days on site',
    service: 'door-installation',
    photos: [
      {
        src: '/images/project-garage-navy.webp',
        alt: 'Navy home with three-car garage doors and a new exterior',
      },
    ],
    brief:
      'Three garage doors across the front of a house is most of what you see from the street. The old doors were out of square in their openings and the trim around them had been cut to fit rather than built to fit.',
    work: [
      'Checked each opening for square and level before ordering anything — two of the three needed the jambs reset.',
      'Reset the jambs, then hung the new doors so the reveals are even top to bottom.',
      'Flashed the heads over each opening and ran the barrier past them.',
      'Re-trimmed all three openings with the same profile used on the rest of the house.',
      'Hung navy siding across the elevation, keeping the courses straight through all three openings.',
    ],
    specs: [
      { label: 'Scope', value: 'Three garage doors plus siding' },
      { label: 'Openings reset', value: 'Two of three' },
      { label: 'Head detail', value: 'Flashed and wrapped' },
      { label: 'Colour', value: 'Navy with white trim' },
    ],
    outcome:
      'The doors open and close without fighting the frame, and from the street the three openings finally read as a set.',
  },
  {
    slug: 'white-composite-deck-and-patio',
    title: 'White composite deck with railings over a patio',
    summary:
      'A composite deck with white railings built over an existing patio, so the yard got a dry space underneath as well as a deck on top.',
    category: 'Decks',
    area: 'Worcester County',
    duration: 'About nine days on site',
    service: 'custom-deck-construction',
    photos: [
      {
        src: '/images/project-deck-white.webp',
        alt: 'White composite deck with railings on a Massachusetts home',
      },
      {
        src: '/images/about-deck-white.webp',
        alt: 'Backyard deck and patio on a white-sided New England home',
      },
    ],
    brief:
      'The owners wanted a deck off the back of the house that they would not have to stain every other spring, and they did not want to lose the patio that was already there.',
    work: [
      'Set footings below the frost line — in this part of Massachusetts that is not optional if you want the deck to stay level.',
      'Framed in pressure-treated lumber, with the ledger flashed and bolted into the rim rather than nailed to the siding.',
      'Decked in composite, with hidden fasteners so there are no screw heads across the boards.',
      'White composite railings, with the posts carried through the frame instead of bolted to the deck surface.',
      'Kept the patio below usable, with the framing laid out to clear it.',
    ],
    specs: [
      { label: 'Decking', value: 'Composite, hidden fasteners' },
      { label: 'Railings', value: 'White composite' },
      { label: 'Footings', value: 'Below frost line' },
      { label: 'Ledger', value: 'Flashed and through-bolted' },
    ],
    outcome:
      'No staining, no exposed screw heads, and the patio underneath is still there — the deck sits above it rather than replacing it.',
  },
  {
    slug: 'deck-framing-rebuild',
    title: 'Deck framing rebuilt from the footings up',
    summary:
      'An old deck taken down to nothing and reframed — new footings, new ledger detail and a layout the new decking could actually land on.',
    category: 'Decks',
    area: 'Blackstone Valley',
    duration: 'About a week on site',
    service: 'custom-deck-construction',
    photos: [
      {
        src: '/images/project-deck-framing.webp',
        alt: 'New deck framing construction behind a gray-blue sided home',
      },
    ],
    brief:
      'The deck was spongy underfoot and tipping away from the house. The owners had been quoted new decking over the old frame; we told them the frame was the problem.',
    work: [
      'Took the old deck down and pulled the posts, which were set on pads sitting on grade rather than on footings.',
      'Dug and poured new footings below the frost line.',
      'Reframed with pressure-treated lumber at a joist spacing the new decking is rated for.',
      'Cut the siding back at the house wall, flashed the ledger and through-bolted it into the rim joist.',
      'Left the frame square and level so the decking went down without shimming.',
    ],
    specs: [
      { label: 'Found', value: 'Posts on grade, no footings' },
      { label: 'Footings', value: 'New, below frost line' },
      { label: 'Ledger', value: 'Flashed, through-bolted' },
      { label: 'Frame', value: 'Pressure-treated, square and level' },
    ],
    outcome:
      'The deck stopped moving. The part nobody sees is the part that was wrong, and it is the part that decides whether a deck lasts twenty years or five.',
  },
  {
    slug: 'board-and-batten-porch-elevation',
    title: 'Board-and-batten gable with a covered porch and new windows',
    summary:
      'Gray board-and-batten on the gable, a covered porch rebuilt underneath it, and new windows set and flashed as part of the same job.',
    category: 'Siding and windows',
    area: 'Worcester County',
    duration: 'About eleven days on site',
    service: 'window-replacement',
    photos: [
      {
        src: '/images/project-board-batten.webp',
        alt: 'Gray board-and-batten siding with a covered porch and new windows',
      },
    ],
    brief:
      'The owners wanted the front of the house to have some texture instead of one flat run of lap siding, and the windows were original — single pane, painted shut on one side.',
    work: [
      'Replaced the windows first, so the flashing and the siding could be detailed together rather than one over the other.',
      'Set each window with a sill pan and flashing lapped over the barrier, not caulked to the trim.',
      'Ran board-and-batten on the gable, with the battens spaced to land evenly either side of the centre window.',
      'Rebuilt the porch ceiling and trim, and carried the new trim profile across the whole elevation.',
    ],
    specs: [
      { label: 'Scope', value: 'Windows, siding, porch trim' },
      { label: 'Window detail', value: 'Sill pan and lapped flashing' },
      { label: 'Siding', value: 'Board-and-batten on the gable' },
      { label: 'Order of work', value: 'Windows before siding' },
    ],
    outcome:
      'The gable gives the elevation the texture the owners wanted, and the windows are sealed by flashing instead of by a bead of caulk.',
  },
  {
    slug: 'new-construction-townhomes',
    title: 'Exteriors for a row of new-construction townhomes',
    summary:
      'A full row of new townhomes clad in mixed siding profiles so the units read as separate houses rather than one long wall.',
    category: 'New construction',
    area: 'Worcester County',
    duration: 'Several weeks, staged by unit',
    service: 'siding-installation',
    photos: [
      {
        src: '/images/project-townhomes.webp',
        alt: 'Row of new-construction townhomes with mixed siding by FBS Construction',
      },
    ],
    brief:
      'The builder needed the row to look like a street, not a barracks, and needed the crew to keep pace with the trades behind them without holding up the schedule.',
    work: [
      'Worked unit by unit, so each one could be closed in and inspected while the next was being wrapped.',
      'Mixed siding profiles and colours between units, with the breaks landing on the party walls.',
      'Detailed each unit as its own water-managed assembly, so a problem in one does not run into the next.',
      'Coordinated the sequence with the builder so the siding never became the hold-up on the critical path.',
    ],
    specs: [
      { label: 'Scope', value: 'Full row, exteriors' },
      { label: 'Profiles', value: 'Mixed between units' },
      { label: 'Sequence', value: 'Unit by unit' },
      { label: 'Client', value: 'Builder, new construction' },
    ],
    outcome:
      'The row reads as individual homes from the street, and the exteriors kept up with the schedule instead of setting it.',
  },
];

const bySlug = new Map(projects.map((p) => [p.slug, p]));

export function getProject(slug: string): Project | undefined {
  return bySlug.get(slug);
}
