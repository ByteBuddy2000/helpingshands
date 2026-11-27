export interface DemoPrize {
  rank: string;
  tier: string;
  amount: string;
  numericValue: number;
  description: string;
  featured?: boolean;
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  summary: string;
  fullDescription: string;
  accessibilityNote: string;
  capacityNote: string;
  imageSrc: string;
  imageAlt: string;
}

export interface HowToEnterStep {
  step: string;
  title: string;
  description: string;
}

export interface TimelineMilestone {
  date: string;
  title: string;
  phase: string;
  description: string;
}

export interface PolicyItem {
  id: string;
  title: string;
  summary: string;
  points: string[];
}

export const DEMO_ORG = {
  name: 'Community Giving Foundation — UK',
  demoBanner: 'EDUCATIONAL DEMO · MOCK DATA ONLY · NO REAL SUBMISSIONS OR PAYMENTS',
  theme: 'Sharing Love, Hope and Happiness This Christmas',
  campaignTitle: 'Christmas Giveaway 2026',
  year: '2026',
  email: 'hello@communitygiving.example',
  location: 'United Kingdom (Illustrative Demo)',
  heroImage: '/src/assets/images/christmas_hero_banner_1795684559790.jpg',
  heroImageAlt:
    'Community members gathered inside a sunlit British town hall decorated with evergreen garlands, golden lights, and seasonal hampers',
};

export const DEMO_NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Events', href: '#events' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Rules & Privacy', href: '#governance' },
  { label: 'Contact', href: '#contact' },
];

export const DEMO_PRIZES: DemoPrize[] = [
  {
    rank: '01',
    tier: 'First Prize',
    amount: '£30,000',
    numericValue: 30000,
    description:
      'Illustrative top seasonal award in this educational demo. Demonstrates clear prize-tier hierarchy with zero entry or claim fees.',
    featured: true,
  },
  {
    rank: '02',
    tier: 'Second Prize',
    amount: '£20,000',
    numericValue: 20000,
    description:
      'Illustrative secondary award tier showing how transparent total prize pool figures are presented before entries open.',
  },
  {
    rank: '03',
    tier: 'Third Prize',
    amount: '£10,000',
    numericValue: 10000,
    description:
      'Illustrative third-place award designed to model clear disclosure and independent draw selection.',
  },
  {
    rank: '04',
    tier: 'Additional Prize',
    amount: '£3,000',
    numericValue: 3000,
    description:
      'Illustrative additional community award tier. All demo figures are fictional examples for UI demonstration only.',
  },
  {
    rank: '05',
    tier: 'Additional Prize',
    amount: '£2,000',
    numericValue: 2000,
    description:
      'Illustrative community award tier completing the £65,000 demonstration prize schedule. Strictly fee-free.',
  },
];

export const DEMO_EVENTS: CommunityEvent[] = [
  {
    id: 'winter-hamper-drive',
    title: 'Winter Community Hamper Packing Day',
    date: '28 November 2026',
    time: '10:00 – 15:30 GMT',
    location: 'St. Jude Civic Hall, Manchester (Demo Venue)',
    category: 'Community Support',
    summary:
      'Local volunteers come together to assemble seasonal pantry boxes, warm woollen accessories, and handwritten greeting cards.',
    fullDescription:
      'In this illustrative community event, neighbours and volunteers gather at a local civic hall to pack seasonal food hampers and winter essentials for households across Greater Manchester. Stations are organised for non-perishable sorting, ribbon wrapping, and accessibility-friendly packing.',
    accessibilityNote: 'Step-free hall entrance, seated packing tables, and accessible washrooms.',
    capacityNote: 'Illustrative demo event · Open community showcase',
    imageSrc: '/src/assets/images/event_winter_hamper_drive_1795684559784.jpg',
    imageAlt:
      'Community volunteers smiling while tying cream and gold ribbons around wicker Christmas gift hampers in a sunlit British hall',
  },
  {
    id: 'candlelight-carols',
    title: 'Lantern & Carols Courtyard Evening',
    date: '5 December 2026',
    time: '17:30 – 19:30 GMT',
    location: 'Abbey Green Courtyard, Bath (Demo Venue)',
    category: 'Seasonal Gathering',
    summary:
      'An outdoor lantern-lit evening of traditional acoustic carols, spiced apple juice, and neighbourly connection.',
    fullDescription:
      'An illustrative open-air evening bringing residents of all ages together beneath warm courtyard lanterns. Local choirs lead classic winter carols while volunteers serve complimentary hot spiced apple juice and mince pies.',
    accessibilityNote: 'Paved level courtyard access, large-print lyric sheets, and priority seating.',
    capacityNote: 'Illustrative demo event · Family-friendly',
    imageSrc: '/src/assets/images/event_candlelight_carols_1795684560510.jpg',
    imageAlt:
      'Neighbours holding warm candles in a historic British stone courtyard adorned with evergreen wreaths at dusk',
  },
  {
    id: 'senior-festive-tea',
    title: 'Silver Years Festive Afternoon Tea',
    date: '12 December 2026',
    time: '14:00 – 16:30 GMT',
    location: 'Meadowside Conservatory, Edinburgh (Demo Venue)',
    category: 'Companionship',
    summary:
      'A calm afternoon tea with freshly baked scones, festive table games, and unhurried conversation for older residents.',
    fullDescription:
      'Designed around warm companionship during the winter months, this illustrative afternoon tea welcomes older community members for china-pot tea, seasonal pastries, gentle acoustic music, and friendly conversation in a quiet, sunlit room.',
    accessibilityNote: 'Hearing loop available, dietary options prepared, ground-floor conservatory.',
    capacityNote: 'Illustrative demo event · Quiet sensory-aware space',
    imageSrc: '/src/assets/images/event_senior_festive_tea_1795684561404.jpg',
    imageAlt:
      'Older residents laughing and enjoying afternoon tea, mince pies, and festive table settings in a bright British room',
  },
  {
    id: 'family-toy-workshop',
    title: 'Neighbourhood Gift-Wrapping Workshop',
    date: '16 December 2026',
    time: '16:00 – 19:30 GMT',
    location: 'Oakwood Barn Community Centre, Birmingham (Demo Venue)',
    category: 'Family Initiative',
    summary:
      'Kraft paper, pine sprigs, and ribbons ready for families and volunteers to wrap children’s books and winter gifts.',
    fullDescription:
      'An illustrative hands-on workshop where community members help wrap donated children’s storybooks, board games, and warm winter coats using recyclable kraft paper and twine ready for local distribution.',
    accessibilityNote: 'Wide table aisles, adjustable chairs, and warm non-alcoholic refreshments.',
    capacityNote: 'Illustrative demo event · Materials provided',
    imageSrc: '/src/assets/images/event_family_toy_workshop_1795684562014.jpg',
    imageAlt:
      'Volunteers wrapping gift boxes with brown kraft paper, pine sprigs, and gold ribbon on long oak tables',
  },
  {
    id: 'new-year-hope-supper',
    title: 'Community Table: Warm Winter Supper',
    date: '20 December 2026',
    time: '18:00 – 21:00 GMT',
    location: 'Foundry Hall, Southwark, London (Demo Venue)',
    category: 'Shared Meal',
    summary:
      'A candlelit communal two-course winter supper bringing together neighbours, volunteers, and local community partners.',
    fullDescription:
      'Rounding out the seasonal calendar, this illustrative supper brings people around shared oak tables for warm seasonal food, conversation, and appreciation for local volunteers before the festive break.',
    accessibilityNote: 'Vegetarian, vegan, and allergen-labelled menu; step-free main hall.',
    capacityNote: 'Illustrative demo event · Free community seating',
    imageSrc: '/src/assets/images/event_new_year_hope_supper_1795684561681.jpg',
    imageAlt:
      'Neighbours sharing a candlelit winter dinner around a long wooden table decorated with linen and pine branches',
  },
];

export const HOW_TO_ENTER_STEPS: HowToEnterStep[] = [
  {
    step: '01',
    title: 'Review the Demo Rules',
    description:
      'Read the educational campaign announcement, eligibility checklist, and fee-free terms before testing the form.',
  },
  {
    step: '02',
    title: 'Confirm Eligibility',
    description:
      'Verify that the simulated entrant meets the 18+ age requirement and UK / eligible region residency criteria.',
  },
  {
    step: '03',
    title: 'Complete Simulated Entry',
    description:
      'Try the client-side entry form below using sample or fictional details. No real data is transmitted or stored.',
  },
  {
    step: '04',
    title: 'Receive Demo Reference',
    description:
      'Observe how a confirmation receipt is displayed immediately on submission without payment or release charges.',
  },
  {
    step: '05',
    title: 'Follow Schedule Milestones',
    description:
      'Track the documented draw on 24 December, private notification on 25 December, and public announcement on 26 December.',
  },
];

export const ELIGIBILITY_RULES = [
  'Minimum age of 18 years at the time of entry (illustrative standard UK requirement).',
  'Legal resident within the United Kingdom or explicitly listed eligible regions.',
  'One entry per person during the entry window (1 December – 23 December 2026).',
  'Accurate contact details and agreement to the published Terms & Privacy Notice.',
];

export const INELIGIBLE_PARTICIPANTS = [
  'Organisers, staff, or volunteers directly administering the campaign or draw.',
  'Individuals involved in winner selection, verification, or prize distribution.',
  'Immediate household members of campaign administrators where conflicts of interest apply.',
  'Duplicate, automated, or manipulated entries attempting to bypass single-entry limits.',
];

export const CAMPAIGN_TIMELINE: TimelineMilestone[] = [
  {
    date: '27 November 2026',
    title: 'Campaign Announcement',
    phase: 'Stage 01',
    description:
      'Official educational demo announcement published alongside complete terms, privacy notice, and prize schedule.',
  },
  {
    date: '1 December 2026',
    title: 'Entries Open',
    phase: 'Stage 02',
    description:
      'Simulated entry window opens at 00:00 GMT. Participation is completely free with no purchase required.',
  },
  {
    date: '23 December 2026',
    title: 'Entries Close',
    phase: 'Stage 03',
    description:
      'Entry window closes at 23:59 GMT. Duplicate or invalid submissions are removed prior to selection.',
  },
  {
    date: '24 December 2026',
    title: 'Winner Selection',
    phase: 'Stage 04',
    description:
      'Documented, independent random draw conducted across all eligible entries with date and method recorded.',
  },
  {
    date: '25 December 2026',
    title: 'Winner Notification',
    phase: 'Stage 05',
    description:
      'Selected recipients notified privately via verified contact details with a clear, fee-free verification process.',
  },
  {
    date: '26 December 2026',
    title: 'Public Announcement',
    phase: 'Stage 06',
    description:
      'Public announcement of confirmed winners published only after obtaining express consent.',
  },
];

export const GOVERNANCE_POLICIES: PolicyItem[] = [
  {
    id: 'terms',
    title: 'Official Terms & Conditions (Educational Demo)',
    summary:
      'Clear rules demonstrating transparent, fee-free giveaway governance for Community Giving Foundation — UK.',
    points: [
      'Educational Purpose Only: This entire website is a non-commercial UI/UX demonstration using mock data. No real prizes, funds, or contracts exist.',
      'Zero Fees Policy: Legitimate giveaways charge no entry fee, claim fee, delivery fee, tax payment, or processing fee at any stage.',
      'Entry Period: Illustrative opening on 1 December 2026 and closing on 23 December 2026 (following the 27 November 2026 announcement).',
      'Fair Draw & Substitution: Selection is conducted via a documented random draw. Any real-world substitution would only occur for equal or greater value where lawful.',
      'Independent Governance: Operated solely as an illustrative Community Giving Foundation — UK demo with no endorsement from external agencies.',
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy Notice & Data Minimisation',
    summary:
      'Explains how the simulated form behaves and how real UK campaigns protect entrant privacy.',
    points: [
      'No Real Data Collected: This demo application processes simulated entries strictly in local browser memory and discards them on refresh or reset.',
      'Do Not Enter Sensitive Details: Never submit real banking credentials, passwords, identity documents, or private personal data into this demonstration.',
      'Minimum Necessary Verification: In a real UK campaign, verification would never request bank passwords, one-time security codes, or cryptocurrency.',
      'Contact for Demo Questions: Reach the fictional demonstration contact at hello@communitygiving.example.',
    ],
  },
  {
    id: 'social',
    title: 'Social Media & Anti-Fraud Disclaimer',
    summary:
      'Standard transparency statement for promotional social posts and participant protection.',
    points: [
      'Platform Independence: This educational demo is not sponsored, endorsed, administered by, or associated with Meta, Facebook, Instagram, or X.',
      'No Direct-Message Payment Requests: Community Giving Foundation — UK will never request fees, security codes, or payment details over social media.',
      'Official Domain Verification: Always verify announcements on the official campaign domain rather than forwarded messages.',
    ],
  },
];














