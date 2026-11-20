/* ═══════════════════════════════════════════════════════════════
   FBS CONSTRUCTION — SERVICE AREA DATA
   110 cities and towns. Every field below exists so that the
   generated page for a city can talk about THAT city: its weather,
   its housing stock, its landmarks, its building department.
   Nothing here is a template with the town name swapped in.
   Drive times are approximate, measured from Whitinsville, MA.
   ═══════════════════════════════════════════════════════════════ */

export type City = {
  name: string;
  slug: string;
  region: string;
  county: string;
  /** Approximate drive time from the FBS shop in Whitinsville. */
  drive: string;
  /** The weather problem that actually damages houses here. */
  climate: string;
  /** Era and style of the homes we work on in this town. */
  housingStock: string;
  /** Two or three widely known places locals recognize. */
  landmarks: string[];
  /** How permitting and inspections tend to run in this town. */
  permitNote: string;
  /** Slugs of neighbouring towns, for internal links. */
  nearby: string[];
  /** Short line used in cards and lists. */
  blurb: string;
};

export const cities: City[] = [
  /* ─────────── Worcester Area ─────────── */
  {
    name: 'Whitinsville',
    slug: 'whitinsville',
    region: 'Blackstone Valley',
    county: 'Worcester',
    drive: '0 min — this is home',
    climate:
      'Blackstone Valley winters drop heavy wet snow on long roof runs, and the freeze-thaw cycle works at every unflashed joint until water finds the framing.',
    housingStock:
      'Mill-era workers’ housing from the 1800s alongside postwar capes and ranches, most with small original footprints that beg for a rear or second-story addition.',
    landmarks: ['the Whitin Mill complex', 'Linwood Avenue', 'the Blackstone River'],
    permitNote:
      'Permits run through the Town of Northbridge building department on Main Street, and we pull them ourselves — Whitinsville is a village of Northbridge, not its own town.',
    nearby: ['northbridge', 'uxbridge', 'sutton', 'douglas', 'millbury', 'grafton'],
    blurb:
      'Our home base. FBS has been framing additions and finishing basements in the Blackstone Valley since 2010, and most of our crew lives within ten minutes of here.',
  },
  {
    name: 'Worcester',
    slug: 'worcester',
    region: 'Worcester Area',
    county: 'Worcester',
    drive: '20 min',
    climate:
      'Worcester takes some of the heaviest snow loads in Massachusetts, and the hills mean wind-driven rain hits walls that flatter towns never have to worry about.',
    housingStock:
      'Dense three-deckers, Victorians and 1920s two-families on tight city lots, where an addition usually means building up or finishing the floor you already own.',
    landmarks: ['Elm Park', 'Shrewsbury Street', 'Union Station'],
    permitNote:
      'Worcester’s Inspectional Services runs a full plan review on structural work, and a licensed Construction Supervisor has to be on the permit — that is us.',
    nearby: ['auburn', 'millbury', 'shrewsbury', 'holden', 'grafton', 'leicester'],
    blurb:
      'Second-story additions, in-law suites and gut remodels on Worcester’s three-deckers and Victorians, permits and plan review handled.',
  },
  {
    name: 'Auburn',
    slug: 'auburn',
    region: 'Worcester Area',
    county: 'Worcester',
    drive: '18 min',
    climate:
      'Sitting at the Mass Pike and 290 interchange, Auburn gets the same hard Worcester winters plus road salt and grit that chew at anything near grade.',
    housingStock:
      'Postwar ranches, split-levels and capes on generous suburban lots — the easiest houses in the valley to bump out at the back or dormer across the front.',
    landmarks: ['the Auburn Mall', 'Pakachoag Hill', 'Dr. Robert Goddard’s launch site'],
    permitNote:
      'Auburn’s building department is quick on residential permits when the plans are complete, and schedules inspections within a few days.',
    nearby: ['worcester', 'millbury', 'oxford', 'leicester', 'sutton', 'charlton'],
    blurb:
      'Dormers, bump-outs and finished basements on Auburn’s ranches and splits, with the permit filed before the first nail.',
  },
  {
    name: 'Millbury',
    slug: 'millbury',
    region: 'Worcester Area',
    county: 'Worcester',
    drive: '12 min',
    climate:
      'The Blackstone River valley holds damp air, so basements and crawl spaces here need moisture handled before a single stud goes up.',
    housingStock:
      'Nineteenth-century mill housing and farmhouses mixed with 1960s ranches, many with low basements and additions already tacked on by earlier owners.',
    landmarks: ['the Blackstone Valley Shoppes', 'Singletary Pond', 'Elm Street'],
    permitNote:
      'Millbury asks for a plot plan on anything that changes the footprint, which we prepare as part of the estimate.',
    nearby: ['sutton', 'worcester', 'auburn', 'grafton', 'oxford', 'whitinsville'],
    blurb:
      'Additions, basements and kitchens in Millbury, with the damp-basement work done right before the finishes go in.',
  },
  {
    name: 'Sutton',
    slug: 'sutton',
    region: 'Worcester Area',
    county: 'Worcester',
    drive: '8 min',
    climate:
      'Open, rural lots mean wind-driven snow piles against walls and roofs with no neighbouring houses to break it.',
    housingStock:
      'Colonials and antique farmhouses on acreage, plus newer subdivisions off Boston Road — the kind of lots where a sunroom or a screen porch actually gets used.',
    landmarks: ['Purgatory Chasm', 'Lake Singletary', 'Manchaug Pond'],
    permitNote:
      'Sutton’s building department and Board of Health coordinate on anything that adds bedrooms, because most of the town is on septic.',
    nearby: ['whitinsville', 'northbridge', 'millbury', 'douglas', 'uxbridge', 'oxford'],
    blurb:
      'Sunrooms, screen porches and additions in Sutton, with septic and bedroom-count questions answered before design.',
  },
  {
    name: 'Oxford',
    slug: 'oxford',
    region: 'Worcester Area',
    county: 'Worcester',
    drive: '20 min',
    climate:
      'The French River corridor runs cold and damp, and ice dams are a yearly problem on the long low-pitch roofs common here.',
    housingStock:
      'Capes and ranches from the 1950s through the 1970s, plus older village homes near the common with small, chopped-up floor plans.',
    landmarks: ['the Oxford common', 'Greenbriar Park', 'Route 12'],
    permitNote:
      'Oxford runs residential permits out of Town Hall and wants structural details stamped when you remove a bearing wall.',
    nearby: ['auburn', 'webster', 'charlton', 'dudley', 'sutton', 'millbury'],
    blurb:
      'Opening up chopped-up Oxford floor plans, with the beam work engineered and inspected, not guessed at.',
  },
  {
    name: 'Webster',
    slug: 'webster',
    region: 'Worcester Area',
    county: 'Worcester',
    drive: '28 min',
    climate:
      'Lake-effect damp off Webster Lake keeps crawl spaces wet, and shoreline homes take wind that inland houses never see.',
    housingStock:
      'Lake cottages converted into year-round homes, plus mill-era houses downtown — both usually under-insulated and under-framed for a second floor.',
    landmarks: ['Webster Lake', 'the Memorial Beach area', 'Main Street downtown'],
    permitNote:
      'Anything near the lake triggers a Conservation Commission review in Webster, and we file that alongside the building permit.',
    nearby: ['dudley', 'oxford', 'douglas', 'charlton', 'auburn', 'sutton'],
    blurb:
      'Turning Webster Lake cottages into real year-round houses — insulation, framing and conservation filings included.',
  },

  /* ─────────── Blackstone Valley ─────────── */
  {
    name: 'Northbridge',
    slug: 'northbridge',
    region: 'Blackstone Valley',
    county: 'Worcester',
    drive: '5 min',
    climate:
      'Valley fog and heavy wet snow are the two things that age a Northbridge roof and siding faster than anything else.',
    housingStock:
      'Mill housing, antique colonials and 1970s raised ranches, many never updated past their original footprint.',
    landmarks: ['the Blackstone River & Canal Heritage State Park', 'Rockdale', 'Church Street'],
    permitNote:
      'We file at the Northbridge building department weekly — they know our crew and our inspections move fast.',
    nearby: ['whitinsville', 'uxbridge', 'sutton', 'douglas', 'grafton', 'millbury'],
    blurb:
      'Our own town. Additions, kitchens, baths and basements across Northbridge and Rockdale, with permits pulled in person.',
  },
  {
    name: 'Uxbridge',
    slug: 'uxbridge',
    region: 'Blackstone Valley',
    county: 'Worcester',
    drive: '10 min',
    climate:
      'The Mumford and Blackstone rivers keep the ground water high, so additions here need their foundations and drainage planned, not improvised.',
    housingStock:
      'Antique capes and farmhouses near the common and newer colonials off Route 16, often with undersized kitchens behind original walls.',
    landmarks: ['the Uxbridge common', 'River Bend Farm', 'Route 16'],
    permitNote:
      'Uxbridge reviews septic capacity with the Board of Health whenever an addition adds a bedroom.',
    nearby: ['whitinsville', 'northbridge', 'douglas', 'sutton', 'mendon', 'blackstone'],
    blurb:
      'Additions and kitchen remodels in Uxbridge, with foundation drainage and septic capacity handled up front.',
  },
  {
    name: 'Douglas',
    slug: 'douglas',
    region: 'Blackstone Valley',
    county: 'Worcester',
    drive: '15 min',
    climate:
      'Douglas sits high and wooded, so it holds snow longer than the valley floor and ice dams are a yearly conversation.',
    housingStock:
      'Newer colonials on large wooded lots plus older farmhouses, many with unfinished walk-out basements waiting to become family rooms.',
    landmarks: ['Douglas State Forest', 'Wallum Lake', 'the Octagon House'],
    permitNote:
      'Most of Douglas is on well and septic, so bedroom-count and setback questions get settled before we draw anything.',
    nearby: ['whitinsville', 'uxbridge', 'sutton', 'webster', 'northbridge', 'oxford'],
    blurb:
      'Walk-out basement finishing and additions in Douglas, planned around well, septic and the town’s big wooded lots.',
  },
  {
    name: 'Blackstone',
    slug: 'blackstone',
    region: 'Blackstone Valley',
    county: 'Worcester',
    drive: '22 min',
    climate:
      'Right on the Rhode Island line and the river, Blackstone deals with flood-plain damp and the same freeze-thaw that splits valley masonry.',
    housingStock:
      'Dense mill-village housing and small capes, where in-law suites and rear additions are the realistic way to add space.',
    landmarks: ['the Blackstone Gorge', 'Roosevelt Park', 'Main Street'],
    permitNote:
      'Flood-plain mapping matters in Blackstone — we check it before promising you a foundation.',
    nearby: ['uxbridge', 'millville', 'mendon', 'whitinsville', 'bellingham', 'northbridge'],
    blurb:
      'In-law suites and rear additions in Blackstone, with flood-plain and foundation questions checked first.',
  },
  {
    name: 'Mendon',
    slug: 'mendon',
    region: 'Blackstone Valley',
    county: 'Worcester',
    drive: '18 min',
    climate:
      'Open farmland gives Mendon houses no wind break, so roofs, porches and screen rooms take the full weather.',
    housingStock:
      'Antique colonials along Route 16 and newer four-bedroom builds on former farmland, with plenty of room to add on at the side.',
    landmarks: ['Nipmuc Regional High School', 'Lake Nipmuc', 'the Mendon Twin Drive-In'],
    permitNote:
      'Mendon is a small department — one call usually gets you the inspector, and we handle it.',
    nearby: ['uxbridge', 'upton', 'milford', 'hopedale', 'blackstone', 'northbridge'],
    blurb:
      'Side additions, sunrooms and screen porches in Mendon, built to stand up to wide-open weather.',
  },
  {
    name: 'Millville',
    slug: 'millville',
    region: 'Blackstone Valley',
    county: 'Worcester',
    drive: '20 min',
    climate:
      'A tight river valley that holds cold and damp, hard on basements and on any addition built without proper drainage.',
    housingStock:
      'Small mill-village homes on narrow lots, where going up beats going out almost every time.',
    landmarks: ['the Blackstone River', 'Central Street', 'Chestnut Hill'],
    permitNote:
      'Millville’s lots are tight, so setback relief at the Zoning Board is a normal part of the schedule here.',
    nearby: ['blackstone', 'uxbridge', 'whitinsville', 'mendon', 'northbridge', 'douglas'],
    blurb:
      'Second-story additions in Millville, where narrow lots mean the only honest direction is up.',
  },

  /* ─────────── Metro West ─────────── */
  {
    name: 'Grafton',
    slug: 'grafton',
    region: 'Metro West',
    county: 'Worcester',
    drive: '12 min',
    climate:
      'Hilltop exposure around the common means wind-driven rain and snow that finds every gap in flashing and trim.',
    housingStock:
      'Federal and Greek Revival homes around the common, mill housing in Fisherville, and new construction near the commuter rail.',
    landmarks: ['the Grafton common', 'Tufts Veterinary School', 'the Grafton MBTA station'],
    permitNote:
      'Work near the common in Grafton can draw historic review, which we flag before you fall in love with a design.',
    nearby: ['whitinsville', 'northbridge', 'millbury', 'worcester', 'shrewsbury', 'upton'],
    blurb:
      'Additions and remodels in Grafton, from antiques near the common to new builds by the commuter rail.',
  },
  {
    name: 'Upton',
    slug: 'upton',
    region: 'Metro West',
    county: 'Worcester',
    drive: '15 min',
    climate:
      'Wooded and hilly, Upton holds ice on north-facing roofs well into spring.',
    housingStock:
      'Antique capes near the center and 1990s colonials on wooded subdivisions, usually with unfinished bonus space over the garage.',
    landmarks: ['the Upton State Forest', 'Pratt Pond', 'the Upton Heritage Park'],
    permitNote:
      'Upton wants a stamped plan for anything structural over the garage, which is exactly the project most people here want.',
    nearby: ['mendon', 'grafton', 'northbridge', 'hopkinton', 'milford', 'whitinsville'],
    blurb:
      'Over-the-garage additions and bonus rooms in Upton, framed and stamped so the inspector signs off the first time.',
  },
  {
    name: 'Hopedale',
    slug: 'hopedale',
    region: 'Metro West',
    county: 'Worcester',
    drive: '18 min',
    climate:
      'Hopedale’s older housing was built before modern insulation, so winter here shows up as ice dams and cold rooms.',
    housingStock:
      'Company-built Draper mill housing, remarkably uniform, which makes a well-designed addition stand out for better or worse.',
    landmarks: ['the Draper mill', 'Hopedale Pond', 'the Parklands'],
    permitNote:
      'Hopedale’s historic character means exterior changes get looked at closely — we design to match the originals.',
    nearby: ['milford', 'mendon', 'upton', 'bellingham', 'uxbridge', 'northbridge'],
    blurb:
      'Additions in Hopedale designed to sit right next to the original Draper houses, not fight them.',
  },
  {
    name: 'Milford',
    slug: 'milford',
    region: 'Metro West',
    county: 'Worcester',
    drive: '20 min',
    climate:
      'Freeze-thaw is brutal on Milford’s granite foundations and the pink granite steps the town is known for.',
    housingStock:
      'Dense two-families and triple-deckers downtown, 1960s ranches on the edges, and newer colonials off Route 109.',
    landmarks: ['Milford Town Park', 'the pink granite quarries', 'Route 16 and 109'],
    permitNote:
      'Milford’s building department is busy — complete plans are what keeps a permit from sitting, and ours are complete.',
    nearby: ['hopedale', 'mendon', 'upton', 'bellingham', 'holliston', 'medway'],
    blurb:
      'Two-family conversions, additions and remodels in Milford, with permits that do not sit in a pile.',
  },
  {
    name: 'Hopkinton',
    slug: 'hopkinton',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '25 min',
    climate:
      'High ground and open subdivisions mean Hopkinton roofs take wind loads that lower towns do not.',
    housingStock:
      'Large 1990s and 2000s colonials with unfinished basements and three-car garages — prime territory for in-law suites and basement build-outs.',
    landmarks: ['the Boston Marathon start line', 'Hopkinton State Park', 'Lake Maspenock'],
    permitNote:
      'Hopkinton reviews drainage carefully on any new footprint, especially near the reservoir watershed.',
    nearby: ['ashland', 'holliston', 'upton', 'milford', 'westborough', 'southborough'],
    blurb:
      'In-law suites and finished basements in Hopkinton’s big colonials, with drainage reviewed before we dig.',
  },
  {
    name: 'Westborough',
    slug: 'westborough',
    region: 'Metro West',
    county: 'Worcester',
    drive: '22 min',
    climate:
      'Wet ground around the Assabet headwaters means basement moisture is the first problem to solve here, not the last.',
    housingStock:
      'Colonials and garrisons from the 1970s and 1980s on half-acre lots, most with original kitchens and baths.',
    landmarks: ['Lake Chauncy', 'the Westborough Rotary', 'Bay State Commons'],
    permitNote:
      'Westborough wants wetlands checked early — a Conservation filing can add weeks if it is found late.',
    nearby: ['northborough', 'southborough', 'shrewsbury', 'hopkinton', 'grafton', 'marlborough'],
    blurb:
      'Kitchen and bath remodels and additions in Westborough, with wetlands and basement moisture handled up front.',
  },
  {
    name: 'Northborough',
    slug: 'northborough',
    region: 'Metro West',
    county: 'Worcester',
    drive: '25 min',
    climate:
      'Northborough sits where valley damp meets hill wind, which is hard on north-facing roofs and on any poorly flashed addition.',
    housingStock:
      'Capes and ranches from the 1950s and 1960s along Route 20, with newer colonials north of town.',
    landmarks: ['Ellsworth-McAfee Park', 'Route 20', 'the Northborough Free Library'],
    permitNote:
      'Northborough schedules inspections quickly when the framing is actually ready — we do not call them early.',
    nearby: ['westborough', 'marlborough', 'berlin', 'boylston', 'shrewsbury', 'southborough'],
    blurb:
      'Dormers, additions and full remodels in Northborough, scheduled so inspections never hold the job.',
  },
  {
    name: 'Southborough',
    slug: 'southborough',
    region: 'Metro West',
    county: 'Worcester',
    drive: '28 min',
    climate:
      'Reservoir land keeps the air damp year-round, and winter wind off the open water hits exposed walls hard.',
    housingStock:
      'Antique colonials near the center and large newer homes on wooded lots, often with detached garages ripe for conversion.',
    landmarks: ['the Sudbury Reservoir', 'St. Mark’s School', 'Southborough center'],
    permitNote:
      'Watershed protection rules shape what can be built where in Southborough, so siting comes before design.',
    nearby: ['westborough', 'marlborough', 'framingham', 'ashland', 'hopkinton', 'northborough'],
    blurb:
      'Garage conversions and additions in Southborough, sited around watershed rules from day one.',
  },
  {
    name: 'Shrewsbury',
    slug: 'shrewsbury',
    region: 'Metro West',
    county: 'Worcester',
    drive: '20 min',
    climate:
      'The ridge above Lake Quinsigamond catches wind and ice, and the lake side sees damp that inland streets never do.',
    housingStock:
      'Postwar capes and ranches in the center, larger colonials on the hill, and lake homes that were never built for four seasons.',
    landmarks: ['Lake Quinsigamond', 'Route 9', 'the Shrewsbury Town Common'],
    permitNote:
      'Shrewsbury’s building department holds a firm line on egress and bedroom requirements in finished basements.',
    nearby: ['worcester', 'northborough', 'boylston', 'westborough', 'grafton', 'millbury'],
    blurb:
      'Finished basements and additions in Shrewsbury, built to the egress rules the town actually enforces.',
  },
  {
    name: 'Marlborough',
    slug: 'marlborough',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '30 min',
    climate:
      'Hilly and open, Marlborough gets wind-driven snow that packs against north walls and loads long roof planes.',
    housingStock:
      'Triple-deckers and two-families downtown, 1960s ranches on the hills, and newer builds near the technology parks.',
    landmarks: ['Lake Williams', 'Main Street downtown', 'the Apex Center'],
    permitNote:
      'Marlborough is a city, so plan review is formal and a licensed Construction Supervisor is mandatory on structural work.',
    nearby: ['hudson', 'southborough', 'northborough', 'berlin', 'sudbury', 'framingham'],
    blurb:
      'Additions and two-family work in Marlborough, through a city plan review we know how to satisfy.',
  },
  {
    name: 'Hudson',
    slug: 'hudson',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '35 min',
    climate:
      'The Assabet River keeps the low streets damp, and ice dams are routine on the older downtown roofs.',
    housingStock:
      'Mill-era two-families near the river and postwar capes further out, most with small kitchens behind load-bearing walls.',
    landmarks: ['the Assabet River Rail Trail', 'Main Street', 'Danforth Falls'],
    permitNote:
      'Hudson looks hard at structural work near the river corridor, including any new foundation.',
    nearby: ['marlborough', 'stow', 'bolton', 'berlin', 'sudbury', 'maynard'],
    blurb:
      'Kitchen openings and additions in Hudson, with the beam work and the river-corridor filings both handled.',
  },
  {
    name: 'Framingham',
    slug: 'framingham',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '35 min',
    climate:
      'Sudbury River flood plain on one side, exposed hills on the other — Framingham has both wet basements and wind-beaten roofs.',
    housingStock:
      'Everything from 1900s two-families downtown to Saxonville mill housing and Nobscot ranches, so no two blocks are the same.',
    landmarks: ['Route 9', 'Saxonville', 'Nobscot Hill'],
    permitNote:
      'Framingham became a city in 2018 and runs a full inspectional services department with formal plan review.',
    nearby: ['natick', 'ashland', 'sudbury', 'southborough', 'holliston', 'wayland'],
    blurb:
      'Additions and remodels across Framingham, from Saxonville mill houses to Nobscot ranches.',
  },
  {
    name: 'Natick',
    slug: 'natick',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '40 min',
    climate:
      'Lake Cochituate damp and tight tree cover keep roofs and north walls from drying, which is how moss and rot start.',
    housingStock:
      'Capes and colonials from the 1940s through the 1960s on modest lots, where second-story additions are the usual answer.',
    landmarks: ['Lake Cochituate', 'Natick Center', 'the Natick Mall'],
    permitNote:
      'Natick enforces setbacks strictly on small lots, so a second story usually beats a bump-out here.',
    nearby: ['framingham', 'wellesley', 'wayland', 'sherborn', 'ashland', 'dover'],
    blurb:
      'Second-story additions in Natick, where lot setbacks usually make up the only honest direction.',
  },
  {
    name: 'Ashland',
    slug: 'ashland',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '32 min',
    climate:
      'The Sudbury River and reservoir keep ground water high, and spring runoff finds any basement that was finished without drainage.',
    housingStock:
      'Split-levels and colonials from the 1960s through the 1980s, plus newer construction near the commuter rail.',
    landmarks: ['Ashland State Park', 'the Ashland commuter rail station', 'the original Marathon start'],
    permitNote:
      'Ashland reviews drainage and grading on new footprints, especially downhill of the reservoir.',
    nearby: ['hopkinton', 'framingham', 'holliston', 'southborough', 'natick', 'sherborn'],
    blurb:
      'Basement finishing and additions in Ashland, done with drainage solved before the drywall.',
  },
  {
    name: 'Holliston',
    slug: 'holliston',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '28 min',
    climate:
      'Wooded lots and wetlands mean damp north walls and roofs that stay wet long after a storm.',
    housingStock:
      'Antique colonials along Washington Street and 1970s splits on wooded lots, many with dated kitchens and single baths.',
    landmarks: ['the Upper Charles Trail', 'Holliston center', 'Lake Winthrop'],
    permitNote:
      'Wetlands cover a lot of Holliston, so a Conservation Commission filing is a normal first step, not a surprise.',
    nearby: ['milford', 'hopkinton', 'ashland', 'medway', 'sherborn', 'millis'],
    blurb:
      'Kitchen and bath remodels and additions in Holliston, with conservation filings built into the schedule.',
  },
  {
    name: 'Medway',
    slug: 'medway',
    region: 'Metro West',
    county: 'Norfolk',
    drive: '28 min',
    climate:
      'Charles River damp on one side and open subdivisions on the other: wet basements here, wind-loaded roofs there.',
    housingStock:
      'Colonials from the 1980s and 1990s with unfinished basements, plus older village homes near Main Street.',
    landmarks: ['the Charles River', 'Choate Park', 'Main Street'],
    permitNote:
      'Medway is straightforward on residential permits when the structural details are drawn properly.',
    nearby: ['millis', 'milford', 'holliston', 'bellingham', 'franklin', 'norfolk'],
    blurb:
      'Finished basements and additions in Medway, with the structural details drawn before anyone picks tile.',
  },
  {
    name: 'Millis',
    slug: 'millis',
    region: 'Metro West',
    county: 'Norfolk',
    drive: '32 min',
    climate:
      'The Charles River flood plain runs through town, so foundations and crawl spaces get planned around water.',
    housingStock:
      'Ranches and capes from the 1950s and 1960s on wooded lots, most with original single baths.',
    landmarks: ['the Charles River', 'Oak Grove Farm', 'Millis center'],
    permitNote:
      'Flood-plain mapping and conservation review drive what is buildable in parts of Millis.',
    nearby: ['medway', 'medfield', 'sherborn', 'holliston', 'norfolk', 'franklin'],
    blurb:
      'Bathroom remodels and additions in Millis, sited around the Charles River flood plain.',
  },
  {
    name: 'Sherborn',
    slug: 'sherborn',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '38 min',
    climate:
      'Heavy tree cover keeps roofs shaded and damp, and large wooded lots mean limbs come down on them every winter.',
    housingStock:
      'Antique farmhouses and large custom homes on multi-acre lots, almost all on well and septic.',
    landmarks: ['Farm Pond', 'the Sherborn town forest', 'Route 27'],
    permitNote:
      'Sherborn’s Board of Health reviews septic capacity on every bedroom added — that comes first here.',
    nearby: ['dover', 'natick', 'holliston', 'millis', 'medfield', 'ashland'],
    blurb:
      'Additions on Sherborn’s big wooded lots, with septic capacity settled before the design starts.',
  },
  {
    name: 'Dover',
    slug: 'dover',
    region: 'Metro West',
    county: 'Norfolk',
    drive: '42 min',
    climate:
      'Charles River damp plus deep tree cover means slow-drying roofs and a real need for ventilation in any new space.',
    housingStock:
      'Large colonials and antique farmhouses on acreage, usually with the budget and the room for a full wing rather than a bump-out.',
    landmarks: ['the Charles River', 'Noanet Woodlands', 'Dover center'],
    permitNote:
      'Dover reviews additions carefully against setbacks and septic, and expects complete, professional drawings.',
    nearby: ['sherborn', 'medfield', 'needham', 'wellesley', 'natick', 'millis'],
    blurb:
      'Full wings and primary-suite additions in Dover, drawn to the standard the town expects.',
  },
  {
    name: 'Medfield',
    slug: 'medfield',
    region: 'Metro West',
    county: 'Norfolk',
    drive: '40 min',
    climate:
      'The Charles River lowlands hold water, and open fields leave houses exposed to winter wind.',
    housingStock:
      'Colonials from the 1960s through the 1990s plus antiques near the center, many with original kitchens.',
    landmarks: ['the Medfield State Hospital grounds', 'Rocky Woods', 'Medfield center'],
    permitNote:
      'Medfield expects a clean plot plan and holds firm on setbacks near the historic center.',
    nearby: ['millis', 'dover', 'sherborn', 'norfolk', 'walpole', 'medway'],
    blurb:
      'Kitchen remodels and additions in Medfield, with plot plans and setbacks sorted before design.',
  },
  {
    name: 'Sudbury',
    slug: 'sudbury',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '40 min',
    climate:
      'Sudbury River wetlands hold water through spring, and mature tree cover keeps roofs from drying between storms.',
    housingStock:
      'Antique colonials along the Boston Post Road and large 1970s–1990s homes on wooded acre lots, most on septic.',
    landmarks: ['the Wayside Inn', 'the Sudbury River', 'Featherland Park'],
    permitNote:
      'Sudbury coordinates building, health and conservation on additions, so filings go in together or the job waits.',
    nearby: ['wayland', 'framingham', 'marlborough', 'stow', 'maynard', 'concord'],
    blurb:
      'Primary-suite and family-room additions in Sudbury, with building, health and conservation filed together.',
  },
  {
    name: 'Wayland',
    slug: 'wayland',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '42 min',
    climate:
      'The Sudbury River flood plain runs the length of town, which decides where a foundation can and cannot go.',
    housingStock:
      'Mid-century moderns and 1950s–1960s contemporaries alongside antiques, many with flat or low-slope roof sections.',
    landmarks: ['the Sudbury River', 'Dudley Pond', 'Wayland center'],
    permitNote:
      'Wayland’s Conservation Commission is active, and flood-plain elevations get checked before a permit issues.',
    nearby: ['sudbury', 'weston', 'natick', 'lincoln', 'framingham', 'sherborn'],
    blurb:
      'Additions on Wayland’s mid-century homes, sited around the river flood plain and the low-slope roofs.',
  },
  {
    name: 'Weston',
    slug: 'weston',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '45 min',
    climate:
      'Deep shade and heavy snow loads on long roof planes make ventilation and ice-dam detailing non-negotiable.',
    housingStock:
      'Large estates and custom colonials on multi-acre wooded lots, where additions are full wings with finished detail throughout.',
    landmarks: ['the Weston Reservoir', 'Case Estates', 'Route 20'],
    permitNote:
      'Weston expects complete architectural drawings and reviews scale and massing closely.',
    nearby: ['wayland', 'wellesley', 'lincoln', 'waltham', 'natick', 'newton'],
    blurb:
      'Full-wing additions in Weston, drawn and detailed to the standard the town and the neighbourhood expect.',
  },
  {
    name: 'Lincoln',
    slug: 'lincoln',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '48 min',
    climate:
      'Conservation land all around keeps Lincoln shaded and damp; roofs and north walls dry slowly all year.',
    housingStock:
      'Antique farmhouses and architect-designed mid-century homes, both of which punish a careless addition.',
    landmarks: ['Walden Pond nearby', 'the deCordova Sculpture Park', 'Lincoln center'],
    permitNote:
      'Lincoln protects its rural character, so siting, scale and tree removal all get reviewed.',
    nearby: ['concord', 'weston', 'wayland', 'bedford', 'sudbury', 'waltham'],
    blurb:
      'Additions in Lincoln designed to match the house, whether it is an antique farmhouse or a mid-century original.',
  },
  {
    name: 'Wellesley',
    slug: 'wellesley',
    region: 'Metro West',
    county: 'Norfolk',
    drive: '45 min',
    climate:
      'Mature canopy over older neighbourhoods keeps roofs wet and drops limbs through every nor’easter.',
    housingStock:
      'Tudors, colonials and shingle-style homes from the 1920s through the 1950s, most with small original kitchens and single baths upstairs.',
    landmarks: ['Wellesley College', 'Route 9', 'Wellesley Square'],
    permitNote:
      'Wellesley enforces floor-area ratio limits, so how big an addition can be is a math question answered before design.',
    nearby: ['needham', 'natick', 'weston', 'newton', 'dover', 'dedham'],
    blurb:
      'Kitchen and primary-bath remodels and additions in Wellesley, sized to the town’s floor-area rules.',
  },
  {
    name: 'Needham',
    slug: 'needham',
    region: 'Metro West',
    county: 'Norfolk',
    drive: '45 min',
    climate:
      'Winter wind off the Charles and heavy wet snow are what age Needham roofs and porches.',
    housingStock:
      'Capes and colonials from the 1940s and 1950s on tight lots, with a steady wave of second-story additions already done nearby.',
    landmarks: ['the Charles River', 'Needham Center', 'Cutler Park'],
    permitNote:
      'Needham’s building department is used to second-story additions and expects stamped structural plans.',
    nearby: ['wellesley', 'dover', 'dedham', 'newton', 'norwood', 'natick'],
    blurb:
      'Second-story additions in Needham, stamped and detailed the way the town has come to expect.',
  },
  {
    name: 'Concord',
    slug: 'concord',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '50 min',
    climate:
      'River-valley damp and deep shade; Concord roofs and sills stay wet, which is how rot starts in old framing.',
    housingStock:
      'Genuine antiques, many pre-1850, next to 1960s contemporaries — two completely different structural problems.',
    landmarks: ['Walden Pond', 'the Old North Bridge', 'Concord center'],
    permitNote:
      'Historic district review in Concord is real, and it governs windows, trim and massing on anything visible from the street.',
    nearby: ['lincoln', 'acton', 'bedford', 'carlisle', 'sudbury', 'maynard'],
    blurb:
      'Additions and remodels in Concord that respect the historic district and the original framing underneath.',
  },
  {
    name: 'Acton',
    slug: 'acton',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '50 min',
    climate:
      'Wooded subdivisions hold snow long into spring and keep north roof planes damp and mossy.',
    housingStock:
      'Garrisons, splits and colonials from the 1960s through the 1980s, nearly all with unfinished basements.',
    landmarks: ['NARA Park', 'the Acton commuter rail station', 'Route 2A'],
    permitNote:
      'Acton is thorough on egress and ceiling height in finished basements, which is the project most people here ask for.',
    nearby: ['boxborough', 'concord', 'littleton', 'maynard', 'stow', 'westford'],
    blurb:
      'Basement finishing and additions in Acton, built to the egress and ceiling-height rules the inspector checks.',
  },
  {
    name: 'Boxborough',
    slug: 'boxborough',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '52 min',
    climate:
      'Open ridges and wooded hollows: wind-loaded roofs on one street, damp shaded ones on the next.',
    housingStock:
      'Newer colonials on large wooded lots plus a handful of antiques near the center, most on well and septic.',
    landmarks: ['Flerra Meadows', 'Route 111', 'the Boxborough town common'],
    permitNote:
      'Small department, well and septic throughout — bedroom counts and setbacks get settled first.',
    nearby: ['acton', 'littleton', 'harvard', 'stow', 'bolton', 'westford'],
    blurb:
      'Additions in Boxborough planned around well, septic and the town’s big wooded lots.',
  },
  {
    name: 'Stow',
    slug: 'stow',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '45 min',
    climate:
      'Assabet River wetlands and orchard land mean high ground water and long damp spells.',
    housingStock:
      'Antique farmhouses, orchard houses and newer colonials, many with additions already layered on over generations.',
    landmarks: ['the Assabet River National Wildlife Refuge', 'Honey Pot Hill Orchards', 'Lake Boon'],
    permitNote:
      'Conservation review is common in Stow because so much of the town borders wetlands or the refuge.',
    nearby: ['hudson', 'maynard', 'bolton', 'acton', 'boxborough', 'sudbury'],
    blurb:
      'Additions on Stow farmhouses and orchard homes, with conservation review handled as part of the job.',
  },
  {
    name: 'Maynard',
    slug: 'maynard',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '48 min',
    climate:
      'The Assabet runs right through downtown, and the low streets hold damp that shows up in basements first.',
    housingStock:
      'Dense mill-worker housing on small lots, where second stories and rear additions are the only room to grow.',
    landmarks: ['Mill & Main', 'the Assabet River', 'downtown Maynard'],
    permitNote:
      'Tight lots mean Maynard sees a lot of zoning relief requests — we tell you up front if yours needs one.',
    nearby: ['stow', 'acton', 'sudbury', 'hudson', 'concord', 'boxborough'],
    blurb:
      'Second-story and rear additions on Maynard’s mill houses, with zoning relief flagged before you commit.',
  },
  {
    name: 'Bolton',
    slug: 'bolton',
    region: 'Metro West',
    county: 'Worcester',
    drive: '40 min',
    climate:
      'Hilltop orchard country takes the full winter wind, and long driveways mean a job site that has to be managed in snow.',
    housingStock:
      'Antique colonials and large newer homes on acreage, nearly all on well and septic.',
    landmarks: ['Bolton Orchards', 'the Bolton Flats', 'Route 117'],
    permitNote:
      'Bolton is a small town department; complete plans and a clear septic plan move things quickly.',
    nearby: ['stow', 'berlin', 'lancaster', 'harvard', 'hudson', 'boxborough'],
    blurb:
      'Additions and sunrooms in Bolton, planned for hilltop wind and for driveways that have to work in winter.',
  },
  {
    name: 'Berlin',
    slug: 'berlin',
    region: 'Metro West',
    county: 'Worcester',
    drive: '35 min',
    climate:
      'Open farmland leaves Berlin houses exposed; wind-driven rain is what finds bad flashing here.',
    housingStock:
      'Antique farmhouses and a growing ring of newer colonials, many with detached barns and outbuildings.',
    landmarks: ['the Berlin Orchards area', 'Route 62', 'Berlin center'],
    permitNote:
      'Berlin’s department is small and practical — be complete and inspections come fast.',
    nearby: ['bolton', 'northborough', 'clinton', 'boylston', 'marlborough', 'lancaster'],
    blurb:
      'Farmhouse additions and barn conversions in Berlin, detailed for wide-open weather.',
  },
  {
    name: 'Clinton',
    slug: 'clinton',
    region: 'Metro West',
    county: 'Worcester',
    drive: '35 min',
    climate:
      'Wachusett Reservoir air keeps the town damp and cold, and the steep streets pile snow against foundations.',
    housingStock:
      'Dense mill-era two- and three-families on hillside lots, most with original kitchens and shared stairs.',
    landmarks: ['the Wachusett Dam', 'High Street', 'Central Park'],
    permitNote:
      'Clinton pays close attention to egress and fire separation in multi-family work, which is most of the town.',
    nearby: ['lancaster', 'berlin', 'sterling', 'boylston', 'bolton', 'west-boylston'],
    blurb:
      'Two- and three-family remodels in Clinton, with egress and fire separation done to code, not around it.',
  },
  {
    name: 'Lancaster',
    slug: 'lancaster',
    region: 'Metro West',
    county: 'Worcester',
    drive: '40 min',
    climate:
      'The Nashua River bottomland floods, and open fields leave houses taking wind from every side.',
    housingStock:
      'Federal-era homes near the common and farmhouses on acreage, plus newer builds off Route 70.',
    landmarks: ['the First Church of Christ', 'the Nashua River', 'Bolton Flats'],
    permitNote:
      'Flood-plain and historic considerations both come up in Lancaster, depending which end of town you are on.',
    nearby: ['clinton', 'bolton', 'sterling', 'harvard', 'berlin', 'leominster'],
    blurb:
      'Additions in Lancaster, checked against flood plain on one end of town and historic review on the other.',
  },
  {
    name: 'Harvard',
    slug: 'harvard',
    region: 'Metro West',
    county: 'Worcester',
    drive: '45 min',
    climate:
      'Hilltop orchards and open ridges mean the hardest wind loads in the area on roofs and porches.',
    housingStock:
      'Antique colonials and orchard houses on acreage, with strict expectations about how an addition should look.',
    landmarks: ['Fruitlands Museum', 'the Harvard town common', 'Bare Hill Pond'],
    permitNote:
      'Harvard reviews scale and appearance closely; an addition that looks bolted on will not get far.',
    nearby: ['bolton', 'lancaster', 'boxborough', 'littleton', 'ayer', 'shirley'],
    blurb:
      'Additions in Harvard drawn to look original to the house, and framed for hilltop wind.',
  },
  {
    name: 'Littleton',
    slug: 'littleton',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '52 min',
    climate:
      'Long Lake and Spectacle Pond keep parts of town damp, and wooded lots hold snow against foundations.',
    housingStock:
      'Capes and colonials from the 1960s onward plus newer construction near the commuter rail and Route 495.',
    landmarks: ['Long Lake', 'the Littleton commuter rail station', 'Route 495'],
    permitNote:
      'Littleton is organized and fast when drawings are complete and the septic plan is in.',
    nearby: ['acton', 'boxborough', 'westford', 'harvard', 'ayer', 'groton'],
    blurb:
      'Additions and basement build-outs in Littleton, with septic and drainage settled before the dig.',
  },
  {
    name: 'Westford',
    slug: 'westford',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '55 min',
    climate:
      'High ground with real wind exposure, and heavy snow that loads the long roof planes on the town’s big colonials.',
    housingStock:
      'Large 1990s and 2000s colonials with bonus rooms over three-car garages, plus older homes near the common.',
    landmarks: ['Nabnasset Lake', 'the Westford town common', 'Kimball Farm'],
    permitNote:
      'Westford expects stamped plans on anything structural and runs a thorough framing inspection.',
    nearby: ['littleton', 'chelmsford', 'groton', 'carlisle', 'acton', 'boxborough'],
    blurb:
      'Over-the-garage suites and additions in Westford, stamped and framed for the town’s snow loads.',
  },
  {
    name: 'Carlisle',
    slug: 'carlisle',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '55 min',
    climate:
      'Dense tree cover and conservation land keep Carlisle damp and shaded, hard on roofs and north walls.',
    housingStock:
      'Antique farmhouses and large custom homes on two-acre minimum lots, all on well and septic.',
    landmarks: ['the Carlisle town common', 'Great Brook Farm State Park', 'Route 225'],
    permitNote:
      'Two-acre zoning and septic capacity shape every addition in Carlisle; health review comes before building.',
    nearby: ['concord', 'bedford', 'chelmsford', 'westford', 'acton', 'lincoln'],
    blurb:
      'Additions on Carlisle’s two-acre lots, with health and septic review handled before design.',
  },
  {
    name: 'Chelmsford',
    slug: 'chelmsford',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '55 min',
    climate:
      'Merrimack Valley cold and wet snow, with ice dams a yearly problem on the town’s many 1960s capes.',
    housingStock:
      'Capes, ranches and garrisons from the 1950s through the 1970s, most with original single baths and tight kitchens.',
    landmarks: ['the Chelmsford town common', 'Freeman Lake', 'Route 3'],
    permitNote:
      'Chelmsford is high-volume and efficient; incomplete plans are the only thing that slows a permit down.',
    nearby: ['westford', 'carlisle', 'littleton', 'groton', 'bedford', 'acton'],
    blurb:
      'Dormers, kitchens and baths on Chelmsford capes and garrisons, with ice-dam detailing done properly.',
  },
  {
    name: 'Groton',
    slug: 'groton',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '60 min',
    climate:
      'Nashua River valley damp with real winter cold, and long rural driveways that need managing in snow.',
    housingStock:
      'Antique colonials along Main Street and newer homes on acreage, nearly all on well and septic.',
    landmarks: ['Groton School', 'the Nashua River Rail Trail', 'Gibbet Hill'],
    permitNote:
      'Groton coordinates building, health and conservation, and historic review applies along Main Street.',
    nearby: ['ayer', 'littleton', 'westford', 'shirley', 'harvard', 'chelmsford'],
    blurb:
      'Additions in Groton, from Main Street antiques under historic review to new homes on acreage.',
  },
  {
    name: 'Ayer',
    slug: 'ayer',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '55 min',
    climate:
      'Flat, open land near the former base takes wind, and the low streets near the rail yard hold water.',
    housingStock:
      'Small mill and rail-era homes downtown plus newer construction at Devens, two very different building problems.',
    landmarks: ['Devens', 'the Ayer commuter rail station', 'Pingry Hill'],
    permitNote:
      'Work at Devens follows its own permitting path, separate from the Town of Ayer — we check which applies.',
    nearby: ['shirley', 'groton', 'harvard', 'littleton', 'lunenburg', 'boxborough'],
    blurb:
      'Additions and remodels in Ayer and Devens, filed through whichever authority actually governs your street.',
  },
  {
    name: 'Shirley',
    slug: 'shirley',
    region: 'Metro West',
    county: 'Middlesex',
    drive: '58 min',
    climate:
      'Nashua River damp and hard inland winters, with ice dams common on the town’s older low-pitch roofs.',
    housingStock:
      'Village housing near the center and farmhouses on the outskirts, most needing insulation work before any finish work.',
    landmarks: ['the Shirley Shaker Village', 'the Nashua River', 'Shirley center'],
    permitNote:
      'Small department, practical inspectors; a clean set of plans is all it takes.',
    nearby: ['ayer', 'lunenburg', 'groton', 'harvard', 'leominster', 'littleton'],
    blurb:
      'Insulation-first remodels and additions in Shirley, so the new space is actually warm in January.',
  },
  {
    name: 'Lunenburg',
    slug: 'lunenburg',
    region: 'Metro West',
    county: 'Worcester',
    drive: '55 min',
    climate:
      'North Worcester County snow totals are the highest in our service area, and roof loads here are no joke.',
    housingStock:
      'Lake cottages around Whalom and Hickory Hills converted to year-round homes, plus newer colonials.',
    landmarks: ['Whalom Lake', 'Hickory Hills Lake', 'Route 2A'],
    permitNote:
      'Lake-area work in Lunenburg draws conservation review, and snow-load calculations get checked.',
    nearby: ['leominster', 'fitchburg', 'shirley', 'ayer', 'sterling', 'lancaster'],
    blurb:
      'Year-round conversions and additions in Lunenburg, engineered for the heaviest snow loads we build in.',
  },
  {
    name: 'Leominster',
    slug: 'leominster',
    region: 'Metro West',
    county: 'Worcester',
    drive: '50 min',
    climate:
      'Heavy north-county snow and steep streets that hold ice against foundations all winter.',
    housingStock:
      'Dense two- and three-families downtown, postwar capes on the hills, and newer builds near Route 2.',
    landmarks: ['the Leominster State Forest', 'Monument Square', 'Route 2'],
    permitNote:
      'Leominster is a city with formal plan review and a licensed supervisor required on structural work.',
    nearby: ['fitchburg', 'lunenburg', 'sterling', 'lancaster', 'princeton', 'shirley'],
    blurb:
      'Multi-family remodels and additions in Leominster, through city plan review and heavy-snow framing.',
  },
  {
    name: 'Fitchburg',
    slug: 'fitchburg',
    region: 'Metro West',
    county: 'Worcester',
    drive: '55 min',
    climate:
      'The coldest, snowiest corner we serve; ice dams and roof loads drive most of the structural work here.',
    housingStock:
      'Victorians and three-deckers on steep streets, many subdivided decades ago and in need of real structural repair.',
    landmarks: ['the Fitchburg Art Museum', 'Main Street', 'the Nashua River'],
    permitNote:
      'Fitchburg’s inspectional services reviews multi-family conversions carefully, including egress and separation.',
    nearby: ['leominster', 'lunenburg', 'westminster', 'princeton', 'shirley', 'sterling'],
    blurb:
      'Three-decker and Victorian work in Fitchburg, with structure, egress and snow loads taken seriously.',
  },
  {
    name: 'Princeton',
    slug: 'princeton',
    region: 'Metro West',
    county: 'Worcester',
    drive: '45 min',
    climate:
      'Mount Wachusett sits in town, and the wind and snow at that elevation are in a class of their own.',
    housingStock:
      'Antique farmhouses and custom homes on large hilltop lots, many with long exposed roof planes.',
    landmarks: ['Mount Wachusett', 'Wachusett Mountain State Reservation', 'the Princeton town common'],
    permitNote:
      'Princeton checks snow-load and wind calculations more carefully than any other town we work in.',
    nearby: ['sterling', 'holden', 'rutland', 'paxton', 'leominster', 'west-boylston'],
    blurb:
      'Additions in Princeton engineered for Wachusett wind and snow, not for a generic Massachusetts load.',
  },
  {
    name: 'Paxton',
    slug: 'paxton',
    region: 'Metro West',
    county: 'Worcester',
    drive: '32 min',
    climate:
      'High ground above Worcester, so Paxton gets more snow and holds it longer than the city below.',
    housingStock:
      'Ranches and colonials on wooded acre lots, most on well and septic, with unfinished basements and attics.',
    landmarks: ['Anna Maria College', 'Moore State Park', 'Asnebumskit Hill'],
    permitNote:
      'Paxton is a small department where septic capacity drives what you can add.',
    nearby: ['holden', 'leicester', 'rutland', 'worcester', 'spencer', 'princeton'],
    blurb:
      'Attic and basement conversions in Paxton, sized to what the septic system can actually carry.',
  },
  {
    name: 'Rutland',
    slug: 'rutland',
    region: 'Metro West',
    county: 'Worcester',
    drive: '40 min',
    climate:
      'The geographic center of the state and one of its coldest towns; winters here are long and hard on roofs.',
    housingStock:
      'Newer colonials on former farmland plus older farmhouses, nearly all on well and septic.',
    landmarks: ['the Ware River watershed', 'Rutland State Park', 'the Rutland town common'],
    permitNote:
      'Watershed land covers much of Rutland, so siting and septic are the first questions, not the last.',
    nearby: ['holden', 'princeton', 'paxton', 'oakham', 'barre', 'sterling'],
    blurb:
      'Additions in Rutland planned around watershed land, septic and some of the coldest winters in the state.',
  },
  {
    name: 'Holden',
    slug: 'holden',
    region: 'Metro West',
    county: 'Worcester',
    drive: '30 min',
    climate:
      'Hills above Worcester catch heavier snow, and the freeze-thaw on north-facing roofs is relentless.',
    housingStock:
      'Capes, ranches and colonials from the 1950s through the 1990s on good-sized lots, most with room to extend at the rear.',
    landmarks: ['the Holden town common', 'Eagle Lake', 'Route 122A'],
    permitNote:
      'Holden runs a steady, professional department and expects stamped structural drawings.',
    nearby: ['worcester', 'paxton', 'princeton', 'west-boylston', 'rutland', 'sterling'],
    blurb:
      'Rear additions and primary suites in Holden, stamped and framed for hill-country snow.',
  },
  {
    name: 'Sterling',
    slug: 'sterling',
    region: 'Metro West',
    county: 'Worcester',
    drive: '40 min',
    climate:
      'Open orchard country with real wind exposure and heavy north-county snow.',
    housingStock:
      'Antique colonials near the common and newer homes on former orchard land, most on septic.',
    landmarks: ['the Sterling town common', 'the Wachusett Reservoir', 'Davis Farmland'],
    permitNote:
      'Reservoir watershed rules apply across much of Sterling and can govern where a foundation goes.',
    nearby: ['west-boylston', 'holden', 'princeton', 'clinton', 'lancaster', 'boylston'],
    blurb:
      'Additions and sunrooms in Sterling, sited around watershed rules and built for open-country wind.',
  },
  {
    name: 'Boylston',
    slug: 'boylston',
    region: 'Metro West',
    county: 'Worcester',
    drive: '28 min',
    climate:
      'Wind off the Wachusett Reservoir hits exposed walls hard, and the damp keeps roofs from drying.',
    housingStock:
      'Colonials and ranches on large lots plus antiques near the common, many with original kitchens.',
    landmarks: ['the Wachusett Reservoir', 'Tower Hill Botanic Garden', 'the Boylston common'],
    permitNote:
      'Watershed protection and septic review both apply in Boylston, so siting comes first.',
    nearby: ['west-boylston', 'shrewsbury', 'northborough', 'berlin', 'sterling', 'clinton'],
    blurb:
      'Kitchen remodels and additions in Boylston, sited around reservoir watershed rules.',
  },
  {
    name: 'West Boylston',
    slug: 'west-boylston',
    region: 'Metro West',
    county: 'Worcester',
    drive: '28 min',
    climate:
      'The reservoir dominates the town; damp air and open-water wind are the two constants.',
    housingStock:
      'Capes and ranches from the 1950s and 1960s plus newer homes on the reservoir side, usually with tight original baths.',
    landmarks: ['the Wachusett Dam', 'the Old Stone Church', 'Route 12'],
    permitNote:
      'Watershed rules are strict here, and the DCR has a say on work near reservoir land.',
    nearby: ['boylston', 'holden', 'sterling', 'worcester', 'clinton', 'princeton'],
    blurb:
      'Bathroom remodels and additions in West Boylston, filed correctly where watershed rules apply.',
  },
  {
    name: 'Leicester',
    slug: 'leicester',
    region: 'Metro West',
    county: 'Worcester',
    drive: '28 min',
    climate:
      'High ground west of Worcester with heavy snow and wind that exposes any weak flashing detail.',
    housingStock:
      'Antique colonials on Main Street, 1960s ranches, and lake homes at Lake Sargent and Rochdale.',
    landmarks: ['Becker College campus', 'Lake Sargent', 'Route 9'],
    permitNote:
      'Leicester reviews lake-adjacent work with the Conservation Commission before building sign-off.',
    nearby: ['worcester', 'paxton', 'auburn', 'spencer', 'oxford', 'charlton'],
    blurb:
      'Lake-house and ranch additions in Leicester, with conservation filings handled before the build.',
  },
  {
    name: 'Spencer',
    slug: 'spencer',
    region: 'Metro West',
    county: 'Worcester',
    drive: '38 min',
    climate:
      'Hill-country cold and heavy snow, with long winters that make insulation the first line item, not the last.',
    housingStock:
      'Farmhouses and 1960s ranches, plus lake cottages at Lake Whittemore and Thompson Pond needing winterizing.',
    landmarks: ['Spencer State Forest', 'Lake Whittemore', 'Main Street'],
    permitNote:
      'Spencer works with the Board of Health on septic whenever bedrooms are added.',
    nearby: ['leicester', 'charlton', 'paxton', 'brookfield', 'oxford', 'rutland'],
    blurb:
      'Winterizing and additions in Spencer, with insulation and septic handled before finishes.',
  },
  {
    name: 'Charlton',
    slug: 'charlton',
    region: 'Metro West',
    county: 'Worcester',
    drive: '30 min',
    climate:
      'Open hills along the Mass Pike corridor take wind, and the rural lots hold drifting snow.',
    housingStock:
      'Newer colonials on acreage and older farmhouses, nearly all on well and septic with room to expand.',
    landmarks: ['the Charlton rest area on the Mass Pike', 'Buffumville Lake', 'Charlton City'],
    permitNote:
      'Charlton’s health department reviews septic capacity on every bedroom added.',
    nearby: ['oxford', 'dudley', 'spencer', 'leicester', 'auburn', 'webster'],
    blurb:
      'Additions on Charlton acreage, with septic capacity confirmed before a single bedroom is drawn.',
  },
  {
    name: 'Dudley',
    slug: 'dudley',
    region: 'Metro West',
    county: 'Worcester',
    drive: '30 min',
    climate:
      'French River damp and hard inland winters, with ice dams common on older low-slope roofs.',
    housingStock:
      'Mill-village housing near the Webster line and newer homes on the hills, many under-insulated.',
    landmarks: ['Nichols College', 'the French River', 'Dudley Hill'],
    permitNote:
      'Dudley is a small department that moves quickly when the structural details are drawn.',
    nearby: ['webster', 'oxford', 'charlton', 'douglas', 'sutton', 'auburn'],
    blurb:
      'Insulation-first remodels and additions in Dudley, so the new rooms hold heat in January.',
  },
  {
    name: 'Norfolk',
    slug: 'norfolk',
    region: 'Metro West',
    county: 'Norfolk',
    drive: '35 min',
    climate:
      'Wetlands and the Stop River keep ground water high, and wooded lots keep roofs shaded and slow to dry.',
    housingStock:
      'Colonials from the 1980s through the 2000s with unfinished basements, plus older homes near the center.',
    landmarks: ['the Norfolk commuter rail station', 'the Stop River', 'Norfolk center'],
    permitNote:
      'Conservation review is common in Norfolk given how much of the town borders wetlands.',
    nearby: ['wrentham', 'franklin', 'medway', 'walpole', 'medfield', 'millis'],
    blurb:
      'Basement finishing and additions in Norfolk, with wetlands filings handled as part of the schedule.',
  },
  {
    name: 'Wrentham',
    slug: 'wrentham',
    region: 'Metro West',
    county: 'Norfolk',
    drive: '40 min',
    climate:
      'Lake country damp around Lake Pearl and Lake Archer, with wind off open water in winter.',
    housingStock:
      'Capes and colonials plus converted lake cottages, many needing structural work before they can carry a second floor.',
    landmarks: ['Lake Pearl', 'the Wrentham Village Premium Outlets', 'Lake Archer'],
    permitNote:
      'Lake-adjacent work in Wrentham triggers conservation review, and we file it with the building permit.',
    nearby: ['norfolk', 'franklin', 'foxborough', 'bellingham', 'walpole', 'sharon'],
    blurb:
      'Lake-cottage conversions and additions in Wrentham, with the framing brought up to carry the new floor.',
  },
  {
    name: 'Bellingham',
    slug: 'bellingham',
    region: 'Greater Boston',
    county: 'Norfolk',
    drive: '25 min',
    climate:
      'Charles River headwaters keep the low ground damp; basements here need drainage before finishes.',
    housingStock:
      'Ranches and capes from the 1960s and 1970s plus newer colonials off Route 126, most with unfinished basements.',
    landmarks: ['the Charles River', 'Silver Lake', 'Route 495 and 126'],
    permitNote:
      'Bellingham is practical and fast on residential permits when the drawings are complete.',
    nearby: ['franklin', 'blackstone', 'medway', 'milford', 'wrentham', 'hopedale'],
    blurb:
      'Finished basements and additions in Bellingham, with drainage done before a sheet of drywall goes up.',
  },
  {
    name: 'Franklin',
    slug: 'franklin',
    region: 'Greater Boston',
    county: 'Norfolk',
    drive: '30 min',
    climate:
      'Mixed wetlands and open subdivisions: damp basements on one street, wind-loaded roofs on the next.',
    housingStock:
      'Large 1990s and 2000s colonials with bonus rooms and unfinished basements, plus older homes downtown.',
    landmarks: ['the Franklin town common', 'DelCarte Conservation Area', 'the Franklin commuter rail'],
    permitNote:
      'Franklin runs a busy, organized department and expects stamped plans on structural work.',
    nearby: ['bellingham', 'medway', 'norfolk', 'wrentham', 'milford', 'medfield'],
    blurb:
      'In-law suites and basement build-outs in Franklin’s big colonials, stamped and inspected properly.',
  },
  {
    name: 'Lexington',
    slug: 'lexington',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '55 min',
    climate:
      'Mature canopy keeps roofs damp and drops limbs, and wet snow loads the long roof planes on the town’s colonials.',
    housingStock:
      'Postwar capes and garrisons being steadily replaced or expanded, plus genuine antiques near the Battle Green.',
    landmarks: ['the Battle Green', 'the Minuteman Bikeway', 'Lexington Center'],
    permitNote:
      'Lexington enforces historic district rules near the center and reviews scale carefully everywhere else.',
    nearby: ['bedford', 'burlington', 'arlington', 'winchester', 'belmont', 'waltham'],
    blurb:
      'Second-story additions in Lexington, designed for historic review where it applies and scale rules where it does not.',
  },
  {
    name: 'Bedford',
    slug: 'bedford',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '55 min',
    climate:
      'Shawsheen River wetlands keep ground water high, and shaded lots mean slow-drying roofs.',
    housingStock:
      'Capes and ranches from the 1950s and 1960s on good lots, nearly all candidates for a dormer or rear addition.',
    landmarks: ['the Minuteman Bikeway terminus', 'Hanscom Field', 'Bedford center'],
    permitNote:
      'Bedford is efficient on residential permits and firm on wetlands setbacks.',
    nearby: ['lexington', 'burlington', 'carlisle', 'concord', 'lincoln', 'chelmsford'],
    blurb:
      'Dormers and rear additions on Bedford capes and ranches, with wetlands setbacks respected.',
  },
  {
    name: 'Burlington',
    slug: 'burlington',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '58 min',
    climate:
      'Open, developed land that takes wind, with heavy wet snow on the low-pitch roofs common in the town’s ranches.',
    housingStock:
      'Dense 1950s and 1960s ranches and splits on small lots, where a second story is usually the only way to add real space.',
    landmarks: ['the Burlington Mall', 'Simonds Park', 'Route 128'],
    permitNote:
      'Burlington holds a firm line on lot coverage, which pushes most projects upward rather than outward.',
    nearby: ['woburn', 'bedford', 'lexington', 'wilmington', 'winchester', 'reading'],
    blurb:
      'Second-story additions on Burlington ranches, where lot coverage rules make up the only direction.',
  },
  {
    name: 'Waltham',
    slug: 'waltham',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '50 min',
    climate:
      'Charles River damp in the lower neighbourhoods and wind on the hills above Main Street.',
    housingStock:
      'Dense two-families and triple-deckers from the 1900s through the 1930s, plus postwar capes on the north side.',
    landmarks: ['the Charles River', 'Brandeis University', 'Moody Street'],
    permitNote:
      'Waltham is a city with formal plan review, and multi-family work gets a close look at egress and separation.',
    nearby: ['watertown', 'newton', 'belmont', 'weston', 'lexington', 'lincoln'],
    blurb:
      'Two-family and triple-decker remodels in Waltham, through city review with egress done right.',
  },
  {
    name: 'Newton',
    slug: 'newton',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '50 min',
    climate:
      'Old canopy and wet snow; Newton’s slate and shingle roofs take real loads and its porches take real weather.',
    housingStock:
      'Victorians, shingle-style homes and 1920s colonials across thirteen villages, each with its own character to match.',
    landmarks: ['the Charles River', 'Newton Centre', 'Boston College'],
    permitNote:
      'Newton runs strict plan review, enforces floor-area ratio, and historic review applies in several villages.',
    nearby: ['brookline', 'waltham', 'wellesley', 'watertown', 'needham', 'weston'],
    blurb:
      'Additions and whole-house remodels in Newton, sized to floor-area rules and matched to the village.',
  },
  {
    name: 'Brookline',
    slug: 'brookline',
    region: 'Greater Boston',
    county: 'Norfolk',
    drive: '55 min',
    climate:
      'Dense urban canopy, wet snow and flat roof sections that have to be detailed perfectly or they leak.',
    housingStock:
      'Brick row houses, Victorians and 1920s apartment-style homes, most with landmark-level exterior expectations.',
    landmarks: ['Coolidge Corner', 'the Emerald Necklace', 'Washington Square'],
    permitNote:
      'Brookline’s preservation commission reviews exterior work closely, and parking and access rules affect the job site.',
    nearby: ['newton', 'boston', 'watertown', 'dedham', 'needham', 'belmont'],
    blurb:
      'Interior remodels and careful exterior work in Brookline, through preservation review and tight job-site rules.',
  },
  {
    name: 'Dedham',
    slug: 'dedham',
    region: 'Greater Boston',
    county: 'Norfolk',
    drive: '50 min',
    climate:
      'Charles River flood plain on the east side, which decides what can be built there at all.',
    housingStock:
      'Capes, colonials and two-families from the 1920s through the 1950s on modest lots.',
    landmarks: ['the Charles River', 'Dedham Square', 'Legacy Place'],
    permitNote:
      'Flood-plain elevation certificates come up regularly in Dedham, and we handle them.',
    nearby: ['needham', 'norwood', 'westwood', 'walpole', 'brookline', 'canton'],
    blurb:
      'Additions and two-family work in Dedham, with flood-plain elevations checked before design.',
  },
  {
    name: 'Norwood',
    slug: 'norwood',
    region: 'Greater Boston',
    county: 'Norfolk',
    drive: '48 min',
    climate:
      'Neponset River lowlands hold water, and the older flat-roof sections downtown need careful detailing.',
    housingStock:
      'Capes, colonials and two-families from the 1920s through the 1950s, most with original kitchens.',
    landmarks: ['the Norwood Town Common', 'Norwood Memorial Airport', 'the Neponset River'],
    permitNote:
      'Norwood is straightforward on residential permits; flood plain matters near the river only.',
    nearby: ['dedham', 'walpole', 'canton', 'westwood', 'sharon', 'needham'],
    blurb:
      'Kitchen remodels and additions in Norwood, with river-side flood questions answered where they apply.',
  },
  {
    name: 'Cambridge',
    slug: 'cambridge',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '60 min',
    climate:
      'Dense urban heat in summer and wet snow in winter, on roofs that are often flat and always tight to the neighbours.',
    housingStock:
      'Triple-deckers, row houses and Victorians on very small lots, where every square foot is fought for.',
    landmarks: ['Harvard Square', 'Central Square', 'the Charles River'],
    permitNote:
      'Cambridge has strict zoning, historic review in several districts, and real constraints on job-site access and parking.',
    nearby: ['somerville', 'belmont', 'watertown', 'arlington', 'medford', 'boston'],
    blurb:
      'Triple-decker and row-house remodels in Cambridge, planned around zoning, historic review and tight access.',
  },
  {
    name: 'Somerville',
    slug: 'somerville',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '60 min',
    climate:
      'The densest housing we work in, with flat and low-slope roofs that punish any shortcut in flashing.',
    housingStock:
      'Triple-deckers and two-families wall to wall, most being converted, dormered or gut-renovated one at a time.',
    landmarks: ['Davis Square', 'Union Square', 'the Somerville Community Path'],
    permitNote:
      'Somerville reviews conversions carefully and enforces parking and street-occupancy rules on the job site.',
    nearby: ['cambridge', 'medford', 'arlington', 'malden', 'everett', 'boston'],
    blurb:
      'Dormers, conversions and gut remodels on Somerville triple-deckers, with street and access rules handled.',
  },
  {
    name: 'Medford',
    slug: 'medford',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '60 min',
    climate:
      'Mystic River damp in the lower streets and wet snow on the hillside roofs above.',
    housingStock:
      'Colonials, capes and two-families from the 1900s through the 1950s, many with unfinished attics ready to be dormered.',
    landmarks: ['the Mystic River', 'Tufts University', 'Medford Square'],
    permitNote:
      'Medford is a city with formal review and a close eye on attic conversions and headroom.',
    nearby: ['somerville', 'malden', 'arlington', 'winchester', 'stoneham', 'melrose'],
    blurb:
      'Attic dormers and two-family remodels in Medford, built to the headroom and egress rules the city checks.',
  },
  {
    name: 'Malden',
    slug: 'malden',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '62 min',
    climate:
      'Wet snow on dense low-slope roofs, with almost no room between houses to work from the outside.',
    housingStock:
      'Two- and three-families from the 1900s through the 1930s on narrow lots, most never updated past the 1970s.',
    landmarks: ['Malden Center', 'the Middlesex Fells', 'Pine Banks Park'],
    permitNote:
      'Malden reviews multi-family work closely for egress, separation and headroom.',
    nearby: ['medford', 'melrose', 'everett', 'stoneham', 'somerville', 'revere'],
    blurb:
      'Two- and three-family remodels in Malden, done where there is no room to work from outside.',
  },
  {
    name: 'Melrose',
    slug: 'melrose',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '62 min',
    climate:
      'Hillside streets hold ice all winter, and the old canopy keeps north roof planes damp.',
    housingStock:
      'Victorians and 1920s colonials on small lots, most with steep roofs and attics worth converting.',
    landmarks: ['the Middlesex Fells', 'Melrose Common', 'Ell Pond'],
    permitNote:
      'Melrose expects neat, complete plans and watches scale on additions in the older neighbourhoods.',
    nearby: ['malden', 'wakefield', 'stoneham', 'medford', 'saugus', 'reading'],
    blurb:
      'Attic conversions and additions on Melrose Victorians, scaled to fit the street.',
  },
  {
    name: 'Wakefield',
    slug: 'wakefield',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '65 min',
    climate:
      'Lake Quannapowitt sends winter wind straight at the houses on its edge, and the low streets hold damp.',
    housingStock:
      'Colonials and capes from the 1920s through the 1950s, with lake-side homes that get the worst of the weather.',
    landmarks: ['Lake Quannapowitt', 'the Wakefield Common', 'Breakheart Reservation'],
    permitNote:
      'Wakefield applies conservation review near the lake and is firm on setbacks on the small lots.',
    nearby: ['melrose', 'reading', 'stoneham', 'saugus', 'lynnfield', 'woburn'],
    blurb:
      'Additions in Wakefield, detailed for lake-side wind and filed through conservation where it applies.',
  },
  {
    name: 'Reading',
    slug: 'reading',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '65 min',
    climate:
      'Open northern suburbs that take wind, with wet snow loading the long roofs on the town’s colonials.',
    housingStock:
      'Capes, garrisons and colonials from the 1950s through the 1970s on good lots, most with original baths.',
    landmarks: ['Reading Town Common', 'the Reading commuter rail station', 'Route 128'],
    permitNote:
      'Reading is organized and expects stamped structural plans on second-story work.',
    nearby: ['wakefield', 'stoneham', 'woburn', 'north-reading', 'melrose', 'lynnfield'],
    blurb:
      'Second-story additions and bath remodels in Reading, stamped and scheduled around inspections.',
  },
  {
    name: 'Stoneham',
    slug: 'stoneham',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '62 min',
    climate:
      'The Fells keep much of town shaded and damp, and the steep streets hold ice against foundations.',
    housingStock:
      'Capes, colonials and two-families from the 1920s through the 1950s on small hillside lots.',
    landmarks: ['the Middlesex Fells Reservation', 'Spot Pond', 'Stoneham Square'],
    permitNote:
      'Stoneham is firm on setbacks and lot coverage, which usually points a project upward.',
    nearby: ['melrose', 'wakefield', 'woburn', 'winchester', 'reading', 'medford'],
    blurb:
      'Second-story additions in Stoneham, where hillside lots and coverage rules decide the design.',
  },
  {
    name: 'Woburn',
    slug: 'woburn',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '60 min',
    climate:
      'Low ground in parts of the city holds water, and wet snow is hard on the low-slope roofs downtown.',
    housingStock:
      'Two-families and capes from the 1900s through the 1950s, plus newer construction near the highways.',
    landmarks: ['Horn Pond', 'Woburn Center', 'Route 128 and 93'],
    permitNote:
      'Woburn is a city with formal plan review and a careful look at two-family conversions.',
    nearby: ['burlington', 'winchester', 'stoneham', 'reading', 'wilmington', 'lexington'],
    blurb:
      'Two-family conversions and additions in Woburn, through city plan review done properly.',
  },
  {
    name: 'Winchester',
    slug: 'winchester',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '60 min',
    climate:
      'The Aberjona River floods the low streets, while the hillside homes take wind and heavy snow.',
    housingStock:
      'Large Victorians, Tudors and 1920s colonials, where an addition is expected to look like it was always there.',
    landmarks: ['the Mystic Lakes', 'Winchester Center', 'the Aberjona River'],
    permitNote:
      'Winchester reviews flood plain on the low side of town and design quality everywhere.',
    nearby: ['medford', 'arlington', 'stoneham', 'woburn', 'lexington', 'burlington'],
    blurb:
      'Additions on Winchester Victorians and Tudors, drawn to look original and sited around the flood plain.',
  },
  {
    name: 'Arlington',
    slug: 'arlington',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '58 min',
    climate:
      'Steep hills hold ice, and the dense canopy keeps the north side of every roof from drying.',
    housingStock:
      'Two-families and 1920s colonials on narrow lots, with the Heights homes stepping steeply up the hill.',
    landmarks: ['the Minuteman Bikeway', 'Spy Pond', 'Arlington Heights'],
    permitNote:
      'Arlington enforces setbacks and lot coverage tightly, and hillside work needs a real site plan.',
    nearby: ['cambridge', 'belmont', 'somerville', 'medford', 'winchester', 'lexington'],
    blurb:
      'Dormers and two-family remodels in Arlington, with hillside siting and coverage rules handled.',
  },
  {
    name: 'Belmont',
    slug: 'belmont',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '55 min',
    climate:
      'Belmont Hill takes wind and heavy snow; the flats below hold damp and drain slowly.',
    housingStock:
      'Tudors and colonials from the 1920s and 1930s on the hill, two-families in the flats, all tightly spaced.',
    landmarks: ['Belmont Hill', 'the Belmont Center', 'Rock Meadow'],
    permitNote:
      'Belmont reviews design and scale closely, and lot coverage drives what is possible.',
    nearby: ['watertown', 'arlington', 'cambridge', 'waltham', 'lexington', 'newton'],
    blurb:
      'Additions on Belmont Tudors and two-families, sized to coverage rules and designed to match.',
  },
  {
    name: 'Watertown',
    slug: 'watertown',
    region: 'Greater Boston',
    county: 'Middlesex',
    drive: '55 min',
    climate:
      'Charles River damp and dense building; roofs here are often low-slope and unforgiving of bad detail.',
    housingStock:
      'Two-families and 1920s colonials on small lots, many being converted into single-family homes.',
    landmarks: ['the Charles River', 'Watertown Square', 'the Arsenal Yards'],
    permitNote:
      'Watertown reviews conversions and additions against tight coverage and parking requirements.',
    nearby: ['belmont', 'newton', 'waltham', 'cambridge', 'brookline', 'arlington'],
    blurb:
      'Two-family conversions and additions in Watertown, through tight coverage and parking rules.',
  },
  {
    name: 'Quincy',
    slug: 'quincy',
    region: 'South Shore',
    county: 'Norfolk',
    drive: '60 min',
    climate:
      'Coastal salt air corrodes fasteners and flashing, and nor’easters drive rain horizontally into walls.',
    housingStock:
      'Triple-deckers and two-families in the squares, bungalows and capes in Houghs Neck and Squantum, many near the water.',
    landmarks: ['Wollaston Beach', 'Quincy Center', 'the Adams National Historical Park'],
    permitNote:
      'Coastal flood zones and velocity zones apply in parts of Quincy, which changes how a foundation must be built.',
    nearby: ['braintree', 'milton', 'weymouth', 'randolph', 'boston', 'canton'],
    blurb:
      'Coastal additions and remodels in Quincy, built with salt air and flood-zone rules in mind.',
  },
  {
    name: 'Braintree',
    slug: 'braintree',
    region: 'South Shore',
    county: 'Norfolk',
    drive: '62 min',
    climate:
      'Close enough to the water for salt air, with nor’easter wind that finds every loose piece of trim.',
    housingStock:
      'Capes, colonials and splits from the 1940s through the 1970s on good suburban lots.',
    landmarks: ['the South Shore Plaza', 'Braintree Highlands', 'the Monatiquot River'],
    permitNote:
      'Braintree runs a steady department and expects complete structural details on second-story work.',
    nearby: ['quincy', 'weymouth', 'randolph', 'milton', 'canton', 'holbrook'],
    blurb:
      'Second-story additions in Braintree, detailed for coastal wind and salt air.',
  },
  {
    name: 'Weymouth',
    slug: 'weymouth',
    region: 'South Shore',
    county: 'Norfolk',
    drive: '65 min',
    climate:
      'Back River and harbour exposure means salt air, wind-driven rain and real flood-zone questions near the water.',
    housingStock:
      'Capes and bungalows from the 1920s through the 1950s, plus converted summer homes near the shore.',
    landmarks: ['Wessagusset Beach', 'the Back River', 'Weymouth Landing'],
    permitNote:
      'Flood zone and conservation review both apply near the water in Weymouth, and both get filed up front.',
    nearby: ['braintree', 'quincy', 'hingham', 'randolph', 'holbrook', 'milton'],
    blurb:
      'Shore-side additions and conversions in Weymouth, with flood zone and conservation handled first.',
  },
  {
    name: 'Milton',
    slug: 'milton',
    region: 'South Shore',
    county: 'Norfolk',
    drive: '58 min',
    climate:
      'The Blue Hills catch heavier snow than the towns below, and the canopy keeps roofs damp into spring.',
    housingStock:
      'Large Victorians, Colonial Revivals and 1920s homes, where additions are expected to match the original detail.',
    landmarks: ['the Blue Hills Reservation', 'Milton Academy', 'the Neponset River'],
    permitNote:
      'Milton reviews design and scale closely, especially near the Blue Hills and the historic districts.',
    nearby: ['quincy', 'canton', 'dedham', 'randolph', 'braintree', 'boston'],
    blurb:
      'Additions on Milton Victorians and Colonial Revivals, matched trim for trim to the original.',
  },
  {
    name: 'Canton',
    slug: 'canton',
    region: 'South Shore',
    county: 'Norfolk',
    drive: '50 min',
    climate:
      'Neponset River wetlands hold water, and the Blue Hills side gets more snow than the rest of town.',
    housingStock:
      'Colonials and splits from the 1960s through the 1990s with unfinished basements, plus older homes near the center.',
    landmarks: ['the Blue Hills', 'the Neponset River', 'Canton Junction'],
    permitNote:
      'Wetlands review comes up often in Canton, and we file it with the building permit.',
    nearby: ['stoughton', 'milton', 'sharon', 'norwood', 'randolph', 'dedham'],
    blurb:
      'Basement build-outs and additions in Canton, with wetlands filings done alongside the permit.',
  },
  {
    name: 'Randolph',
    slug: 'randolph',
    region: 'South Shore',
    county: 'Norfolk',
    drive: '58 min',
    climate:
      'Wet snow and freeze-thaw on the low-slope roofs that are common on the town’s postwar housing.',
    housingStock:
      'Capes, ranches and splits from the 1950s and 1960s, many now multi-generational households needing in-law space.',
    landmarks: ['the Randolph Town Common', 'Ponkapoag Pond', 'Route 24'],
    permitNote:
      'Randolph reviews in-law and accessory-dwelling proposals against its zoning before anything else.',
    nearby: ['braintree', 'holbrook', 'stoughton', 'canton', 'milton', 'quincy'],
    blurb:
      'In-law suites and accessory apartments in Randolph, checked against zoning before design.',
  },
  {
    name: 'Stoughton',
    slug: 'stoughton',
    region: 'South Shore',
    county: 'Norfolk',
    drive: '55 min',
    climate:
      'Flat, wooded land that holds water, with wet snow loading long low roofs.',
    housingStock:
      'Capes, ranches and splits from the 1950s through the 1970s, most with unfinished basements and single baths.',
    landmarks: ['the Stoughton commuter rail station', 'Glen Echo Lake', 'Route 138'],
    permitNote:
      'Stoughton is practical on residential permits and firm on basement egress.',
    nearby: ['canton', 'randolph', 'sharon', 'avon', 'brockton', 'easton'],
    blurb:
      'Finished basements and bath additions in Stoughton, with egress windows done to code.',
  },
  {
    name: 'Sharon',
    slug: 'sharon',
    region: 'South Shore',
    county: 'Norfolk',
    drive: '50 min',
    climate:
      'Lake Massapoag damp and heavy tree cover, so roofs and north walls dry slowly all year.',
    housingStock:
      'Mid-century contemporaries and colonials on wooded lots, many with flat or low-slope roof sections.',
    landmarks: ['Lake Massapoag', 'Moose Hill Wildlife Sanctuary', 'Sharon center'],
    permitNote:
      'Conservation review is common in Sharon given the lake and the sanctuary land.',
    nearby: ['canton', 'stoughton', 'walpole', 'foxborough', 'norwood', 'wrentham'],
    blurb:
      'Additions on Sharon’s mid-century homes, with low-slope roof detail and conservation handled.',
  },
  {
    name: 'Walpole',
    slug: 'walpole',
    region: 'South Shore',
    county: 'Norfolk',
    drive: '45 min',
    climate:
      'Neponset River wetlands run through town, keeping ground water high and basements damp.',
    housingStock:
      'Colonials and capes from the 1950s through the 1990s on wooded lots, most with unfinished basements.',
    landmarks: ['the Neponset River', 'Bird Park', 'Walpole center'],
    permitNote:
      'Walpole applies wetlands setbacks strictly, so siting an addition starts with the resource line.',
    nearby: ['norwood', 'sharon', 'foxborough', 'medfield', 'norfolk', 'dedham'],
    blurb:
      'Additions and basement finishing in Walpole, sited from the wetlands line inward.',
  },
  {
    name: 'Foxborough',
    slug: 'foxborough',
    region: 'South Shore',
    county: 'Norfolk',
    drive: '45 min',
    climate:
      'Open land around the stadium corridor takes wind, and the wooded side holds snow and damp.',
    housingStock:
      'Colonials and capes from the 1960s through the 1990s, plus older homes around the common.',
    landmarks: ['Gillette Stadium', 'the Foxborough common', 'the F. Gilbert Hills State Forest'],
    permitNote:
      'Foxborough is organized and expects stamped plans for structural work.',
    nearby: ['walpole', 'sharon', 'wrentham', 'norfolk', 'mansfield', 'norton'],
    blurb:
      'Additions and remodels in Foxborough, stamped, permitted and framed for open-field wind.',
  },
  {
    name: 'Lynn',
    slug: 'lynn',
    region: 'North Shore',
    county: 'Essex',
    drive: '70 min',
    climate:
      'Direct ocean exposure: salt air, nor’easters and wind-driven rain that destroy poor flashing within a season.',
    housingStock:
      'Dense two- and three-families and Victorians, many near the water and all fighting salt corrosion.',
    landmarks: ['Lynn Shore Drive', 'the Lynn Woods Reservation', 'Red Rock Park'],
    permitNote:
      'Lynn is a city with formal review, and coastal flood zones apply along the shore.',
    nearby: ['saugus', 'swampscott', 'peabody', 'salem', 'revere', 'nahant'],
    blurb:
      'Coastal remodels and additions in Lynn, detailed so salt air and nor’easters do not undo the work.',
  },
  {
    name: 'Saugus',
    slug: 'saugus',
    region: 'North Shore',
    county: 'Essex',
    drive: '65 min',
    climate:
      'Close enough to the water for salt air, with marsh damp on the east side of town.',
    housingStock:
      'Capes, ranches and split-levels from the 1950s and 1960s, most with original kitchens and single baths.',
    landmarks: ['the Saugus Iron Works', 'Breakheart Reservation', 'Route 1'],
    permitNote:
      'Marsh and flood-zone mapping matter on the east side of Saugus; the rest is straightforward.',
    nearby: ['lynn', 'melrose', 'wakefield', 'revere', 'malden', 'peabody'],
    blurb:
      'Kitchen and bath remodels and additions in Saugus, with marsh-side flood questions settled first.',
  },
  {
    name: 'Peabody',
    slug: 'peabody',
    region: 'North Shore',
    county: 'Essex',
    drive: '70 min',
    climate:
      'Inland enough to miss the worst salt, close enough to take nor’easter wind and heavy coastal snow.',
    housingStock:
      'Capes, colonials and splits from the 1950s through the 1980s on suburban lots, plus older homes downtown.',
    landmarks: ['the Northshore Mall', 'Peabody Square', 'Brooksby Farm'],
    permitNote:
      'Peabody is a city with formal plan review and a firm line on egress in finished basements.',
    nearby: ['salem', 'danvers', 'lynn', 'beverly', 'middleton', 'saugus'],
    blurb:
      'Finished basements and additions in Peabody, through city review with egress done right.',
  },
  {
    name: 'Salem',
    slug: 'salem',
    region: 'North Shore',
    county: 'Essex',
    drive: '75 min',
    climate:
      'Harbour salt air and nor’easters, on some of the oldest and most exposed woodwork in the state.',
    housingStock:
      'Federal and Georgian antiques downtown and Victorians beyond, all under serious preservation expectations.',
    landmarks: ['the Salem Common', 'Chestnut Street', 'Salem Harbor'],
    permitNote:
      'Salem’s historic commission reviews exterior work in the districts, and the rules there are specific.',
    nearby: ['beverly', 'peabody', 'danvers', 'marblehead', 'swampscott', 'lynn'],
    blurb:
      'Additions and restoration-grade remodels in Salem, through historic review and built for harbour weather.',
  },
  {
    name: 'Beverly',
    slug: 'beverly',
    region: 'North Shore',
    county: 'Essex',
    drive: '78 min',
    climate:
      'Coastal wind, salt spray on the shore side, and wet snow that loads the long roofs on the town’s older homes.',
    housingStock:
      'Victorians and shingle-style homes near the water, postwar capes and ranches inland.',
    landmarks: ['Lynch Park', 'Beverly Harbor', 'Endicott College'],
    permitNote:
      'Coastal flood zones and conservation apply near the shore in Beverly; inland work is routine.',
    nearby: ['salem', 'danvers', 'peabody', 'wenham', 'manchester', 'hamilton'],
    blurb:
      'Shore-side and inland additions in Beverly, detailed for salt spray where it matters.',
  },
  {
    name: 'Danvers',
    slug: 'danvers',
    region: 'North Shore',
    county: 'Essex',
    drive: '75 min',
    climate:
      'Coastal weather without direct salt spray, plus heavy wet snow on the long roofs of its postwar housing.',
    housingStock:
      'Capes, ranches and colonials from the 1950s through the 1980s on good lots, with room to extend at the rear.',
    landmarks: ['the Danvers Rail Trail', 'Endicott Park', 'Route 1 and 114'],
    permitNote:
      'Danvers runs a steady department and expects complete structural details on additions.',
    nearby: ['peabody', 'beverly', 'salem', 'middleton', 'topsfield', 'wenham'],
    blurb:
      'Rear additions and primary suites in Danvers, framed for coastal snow loads.',
  },
];

/** Every slug that has a page on this site. */
export const citySlugs: string[] = cities.map((c) => c.slug);

const cityBySlug = new Map(cities.map((c) => [c.slug, c]));

export function getCity(slug: string): City | undefined {
  return cityBySlug.get(slug);
}

/**
 * `nearby` holds real neighbouring towns, including some we do not have a page
 * for. This returns only the ones we can actually link to, topped up with other
 * towns in the same region so every page still has somewhere to send a reader.
 */
export function nearbyCities(city: City, limit = 6): City[] {
  const picked: City[] = [];
  const seen = new Set<string>([city.slug]);

  for (const slug of city.nearby) {
    const found = cityBySlug.get(slug);
    if (found && !seen.has(found.slug)) {
      picked.push(found);
      seen.add(found.slug);
    }
  }

  if (picked.length < limit) {
    for (const other of cities) {
      if (picked.length >= limit) break;
      if (other.region === city.region && !seen.has(other.slug)) {
        picked.push(other);
        seen.add(other.slug);
      }
    }
  }

  return picked.slice(0, limit);
}

/** Towns grouped by region, for the service-areas index. */
export function citiesByRegion(): { region: string; cities: City[] }[] {
  const order: string[] = [];
  const map = new Map<string, City[]>();
  for (const c of cities) {
    if (!map.has(c.region)) {
      map.set(c.region, []);
      order.push(c.region);
    }
    map.get(c.region)!.push(c);
  }
  return order.map((region) => ({ region, cities: map.get(region)! }));
}

/** The towns shown in the footer and other short lists — closest work first. */
export const coreCities: City[] = [
  'whitinsville',
  'northbridge',
  'uxbridge',
  'sutton',
  'douglas',
  'millbury',
  'grafton',
  'worcester',
]
  .map((slug) => cityBySlug.get(slug))
  .filter((c): c is City => Boolean(c));

