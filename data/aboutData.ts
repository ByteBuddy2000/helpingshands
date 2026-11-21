export interface NavItem {
  label: string
  href: string
  sectionKey?: InfoModalKey
}

export type InfoModalKey =
  | "programmes"
  | "apply"
  | "volunteer"
  | "donations"
  | "faq"
  | "news"
  | "privacy"
  | "terms"

export interface CoreValueItem {
  number: string
  title: string
  description: string
  iconName:
    | "HeartHandshake"
    | "ShieldCheck"
    | "Scale"
    | "Award"
    | "LockKeyhole"
    | "HandHeart"
}

export interface WhyChooseItem {
  number: string
  title: string
  description: string
}

export interface ApproachStep {
  step: string
  title: string
  subtitle: string
  description: string
  iconName: "MessageCircleHeart" | "ClipboardList" | "Compass" | "Users"
}

export interface QualityStandard {
  title: string
  description: string
}

export interface InfoModalContent {
  kicker: string
  title: string
  accentWord: string
  paragraphs: string[]
  ctaLabel: string
  defaultTopic: string
}

export const BRAND_CONTACT = {
  organisation: "Helping Hands Company · UK Branch",
  shortName: "Helping Hands Company – UK Branch",
  tagline: "CARE • CONNECTION • COMMUNITY",
  footerTagline: "Kindness begins with a helping hand.",
  location: "United Kingdom",
  email: "helpinghands.uk.org@gmail.com",
  phone: "+44 7721791363",
  director: "Karyn MacKenzie",
  disclaimer:
    "Programme availability is subject to confirmation. No application or release fees are charged. This website does not imply registered charity status.",
}

export const NAV_ITEMS: NavItem[] = [
  { label: "About us", href: "#who-we-are" },
  { label: "Programmes", href: "#programmes", sectionKey: "programmes" },
  { label: "Apply for assistance", href: "#apply", sectionKey: "apply" },
  { label: "Volunteer", href: "#volunteer", sectionKey: "volunteer" },
  { label: "Donations", href: "#donations", sectionKey: "donations" },
  { label: "FAQs", href: "#faq", sectionKey: "faq" },
]

export const CORE_VALUES: CoreValueItem[] = [
  {
    number: "01",
    title: "Compassion",
    description:
      "We approach every conversation and home support enquiry with genuine warmth, patience, and an attentive ear for each person’s circumstances.",
    iconName: "HeartHandshake",
  },
  {
    number: "02",
    title: "Dignity",
    description:
      "Every individual deserves respect, personal privacy, and thoughtful support that honours their independence, preferences, and voice.",
    iconName: "ShieldCheck",
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "We communicate openly about what support we can provide, what remains subject to confirmation, and never charge application or release fees.",
    iconName: "Scale",
  },
  {
    number: "04",
    title: "Excellence",
    description:
      "From initial enquiry to local signposting and practical guidance, we hold our conduct, clarity, and follow-through to consistently high standards.",
    iconName: "Award",
  },
  {
    number: "05",
    title: "Trust",
    description:
      "Families and individuals place confidence in us during sensitive moments. We protect that trust with plain answers, boundaries, and discretion.",
    iconName: "LockKeyhole",
  },
  {
    number: "06",
    title: "Commitment",
    description:
      "We are dedicated to building lasting community connections across the UK so people feel supported, understood, and never left to navigate alone.",
    iconName: "HandHeart",
  },
]

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    number: "01",
    title: "Listening Before Advising",
    description:
      "Every person’s situation is distinct. We begin by understanding your practical needs and preferences rather than offering one-size-fits-all answers.",
  },
  {
    number: "02",
    title: "Clear, Honest Communication",
    description:
      "We state clearly what information, guidance, and community connections are currently available—with no confusing jargon or unrealistic promises.",
  },
  {
    number: "03",
    title: "Connected Local Signposting",
    description:
      "When specialist assistance is needed, we help point individuals and families toward established local groups, essential services, and community support.",
  },
  {
    number: "04",
    title: "Respect for Privacy & Safety",
    description:
      "We actively safeguard enquiry details and remind visitors never to share sensitive financial credentials, passwords, or medical records on public forms.",
  },
  {
    number: "05",
    title: "No Application or Release Fees",
    description:
      "Reaching out for guidance or community support information is completely free. We never ask for upfront fees, tax payments, or release charges.",
  },
  {
    number: "06",
    title: "People-Led UK Presence",
    description:
      "Guided by published director Karyn MacKenzie, our UK Branch focuses on grounded human warmth, community spirit, and reliable follow-up.",
  },
]

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "Listen & Understand",
    subtitle: "Respectful First Contact",
    description:
      "You reach out by form, email, or phone. We take time to listen carefully to your situation, questions, and household context without judgement.",
    iconName: "MessageCircleHeart",
  },
  {
    step: "02",
    title: "Personalised Guidance",
    subtitle: "Clarity on Real Options",
    description:
      "Our team reviews your enquiry and shares clear, practical next steps tailored to what you are looking for and what support options apply.",
    iconName: "ClipboardList",
  },
  {
    step: "03",
    title: "Coordinated Support",
    subtitle: "Connecting Local Services",
    description:
      "Where appropriate, we help bridge the gap to established local UK community organisations, essentials providers, and relevant support networks.",
    iconName: "Compass",
  },
  {
    step: "04",
    title: "Ongoing Connection",
    subtitle: "Community That Stays Present",
    description:
      "We encourage steady, respectful communication so individuals, carers, and families feel supported and informed as circumstances evolve.",
    iconName: "Users",
  },
]

export const QUALITY_STANDARDS: QualityStandard[] = [
  {
    title: "Transparent Programme Scope",
    description:
      "Any community programme or seasonal campaign is clearly labelled with its current status, eligibility criteria, and confirmed resources before opening.",
  },
  {
    title: "Safeguarding & Suitability Mindset",
    description:
      "Volunteering and community partnership enquiries are reviewed carefully, with suitability checks and written confirmation required before any role begins.",
  },
  {
    title: "Data Care & Discretion",
    description:
      "Submitted enquiry details are accessed solely to respond to requests and maintain a clear contact record, with respect for individual confidentiality.",
  },
  {
    title: "Accountable UK Leadership",
    description:
      "Our UK Branch operates with named accountability under published director Karyn MacKenzie and accessible direct contact channels.",
  },
]

export const ENQUIRY_TOPICS: string[] = [
  "General enquiry",
  "Assistance enquiry",
  "Community connection",
  "Practical guidance",
  "Volunteering",
  "Partnership enquiry",
  "Donation information",
  "Christmas giveaway information",
  "Other support",
]

export const INFO_MODAL_MAP: Record<InfoModalKey, InfoModalContent> = {
  programmes: {
    kicker: "OUR PROGRAMMES",
    title: "Support shaped around",
    accentWord: "real-life needs.",
    paragraphs: [
      "Helping Hands Company – UK Branch focuses on areas of community support including seasonal community initiatives, family guidance, educational resource information, local food bank signposting, health and wellbeing navigation, and community-led connections.",
      "Availability depends on confirmed resources, local partners, and published programme criteria. We are not an emergency service provider.",
    ],
    ctaLabel: "Enquire about support options",
    defaultTopic: "Practical guidance",
  },
  apply: {
    kicker: "APPLY FOR ASSISTANCE",
    title: "Start with a",
    accentWord: "conversation.",
    paragraphs: [
      "Use our enquiry form and select “Assistance enquiry” to tell us what kind of support or information you are looking for. A submitted enquiry is not an approval or guarantee of financial assistance.",
      "Please do not send identity documents, bank details, passwords, payment information, or sensitive medical records through public forms. We do not charge any application or release fee.",
    ],
    ctaLabel: "Make an assistance enquiry",
    defaultTopic: "Assistance enquiry",
  },
  volunteer: {
    kicker: "VOLUNTEER & PARTNER",
    title: "Good things grow",
    accentWord: "together.",
    paragraphs: [
      "We welcome enquiries from people and organisations interested in community volunteering, responsible partnerships, or sharing local support resources across the UK.",
      "All roles and partnerships are subject to suitability checks, safeguarding requirements, and written confirmation by the organisation.",
    ],
    ctaLabel: "Ask about volunteering or partnership",
    defaultTopic: "Volunteering",
  },
  donations: {
    kicker: "DONATIONS & SPONSORSHIP",
    title: "Transparency",
    accentWord: "comes first.",
    paragraphs: [
      "We are not accepting online donations or payments through this website at this time. No bank transfer details or payment links are published here.",
      "Before any donation or sponsorship programme opens, verified details, appeal purpose, handling arrangements, and contribution terms will be published clearly. Please do not send money in response to unsolicited messages.",
    ],
    ctaLabel: "Ask about partnerships",
    defaultTopic: "Donation information",
  },
  faq: {
    kicker: "FREQUENTLY ASKED QUESTIONS",
    title: "Clear answers.",
    accentWord: "No surprises.",
    paragraphs: [
      "Does submitting an enquiry guarantee assistance? No—an enquiry helps our team understand what information you need. Any support depends on programme availability, eligibility, and confirmed resources.",
      "Do I have to pay an application or release fee? Never. No fee is charged to submit an enquiry, and you should never pay anyone claiming a fee is required to release support.",
      "How can I contact the UK Branch? Use our enquiry form, email helpinghands.uk.org@gmail.com, or call +44 7721791363.",
    ],
    ctaLabel: "Send an enquiry",
    defaultTopic: "General enquiry",
  },
  news: {
    kicker: "NEWS & UPDATES",
    title: "Updates shared",
    accentWord: "with care.",
    paragraphs: [
      "There are no new programme announcements to publish at present. Verified updates will appear on our official channels when dates, partners, eligibility details, and available resources have been confirmed.",
      "Please rely on official website information rather than forwarded messages or unofficial social media posts.",
    ],
    ctaLabel: "Contact our team",
    defaultTopic: "General enquiry",
  },
  privacy: {
    kicker: "PRIVACY NOTICE",
    title: "Your information",
    accentWord: "deserves care.",
    paragraphs: [
      "The enquiry form collects your name, email address, optional telephone number, enquiry topic, and message solely to respond to your enquiry and maintain a record of contact.",
      "Please do not include passwords, bank credentials, payment-card details, identity documents, or sensitive health information. Contact helpinghands.uk.org@gmail.com to ask about access or correction of your submitted details.",
    ],
    ctaLabel: "Contact us about privacy",
    defaultTopic: "General enquiry",
  },
  terms: {
    kicker: "WEBSITE TERMS",
    title: "Fair use.",
    accentWord: "Clear expectations.",
    paragraphs: [
      "Website information is general and does not constitute a promise of financial assistance, a grant, a prize, or a service. Programme descriptions are subject to confirmed resources and published eligibility criteria.",
      "Submitting an enquiry form does not create an entitlement or guarantee a response within a fixed period. Do not use the website for urgent emergencies or sensitive credentials.",
    ],
    ctaLabel: "Get in touch",
    defaultTopic: "General enquiry",
  },
}
