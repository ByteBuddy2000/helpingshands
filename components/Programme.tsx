import Link from "next/link"
import {
  ArrowRight,
  HandHeart,
  Users,
  BookOpen,
  HeartPulse,
  Utensils,
  Sprout,
} from "lucide-react"

const PROGRAMMES = [
  {
    number: "01",
    title: "Christmas community support",
    description:
      "Seasonal information, community connection and signposting for individuals and families.",
    Icon: HandHeart,
  },
  {
    number: "02",
    title: "Family assistance",
    description:
      "Guidance to help families identify relevant local services and practical support options.",
    Icon: Users,
  },
  {
    number: "03",
    title: "Educational support",
    description:
      "Information about learning resources, community programmes and education-related services.",
    Icon: BookOpen,
  },
  {
    number: "04",
    title: "Food and essentials",
    description:
      "Signposting to established local food banks and essential-needs support providers.",
    Icon: Utensils,
  },
  {
    number: "05",
    title: "Health and urgent support",
    description:
      "Help finding appropriate health, wellbeing and emergency services. We are not an emergency provider.",
    Icon: HeartPulse,
  },
  {
    number: "06",
    title: "Community development",
    description:
      "Opportunities to connect with local groups, volunteers and community-led initiatives.",
    Icon: Sprout,
  },
]

const INFO_SECTIONS = [
  {
    id: "apply",
    kicker: "APPLY FOR ASSISTANCE",
    title: "Start with a",
    emphasis: "conversation.",
    paragraphs: [
      "Use the enquiry form below and select “Assistance enquiry” to tell us what kind of support or information you are looking for. A submitted enquiry is not an approval or guarantee of financial assistance.",
      "Please do not send identity documents, bank details, passwords, payment information or sensitive medical records through this public form. We do not charge an application or release fee.",
      "At present, this website accepts enquiries only. It does not yet provide document uploads or a secure application-status dashboard. If a programme opens, its eligibility rules and process will be published here first.",
    ],
    linkText: "Make an assistance enquiry",
    href: "#contact",
    button: true,
  },
  {
    id: "volunteer",
    kicker: "VOLUNTEER & PARTNER",
    title: "Good things grow",
    emphasis: "together.",
    paragraphs: [
      "We welcome enquiries from people and organisations interested in community volunteering, responsible partnerships or sharing local support resources.",
      "All roles and partnerships are subject to suitability checks, safeguarding requirements and confirmation by the organisation. No role is offered until details have been agreed in writing.",
    ],
    linkText: "Ask about volunteering or partnership",
    href: "#contact",
  },
  {
    id: "donations",
    kicker: "DONATIONS & SPONSORSHIP",
    title: "Transparency",
    emphasis: "comes first.",
    paragraphs: [
      "We are not accepting online donations or payments through this website at this time. No bank transfer details or payment links are published here.",
      "Before any donation or sponsorship programme is opened, the organisation will publish its verified legal and registration details where applicable, the purpose of the appeal, how funds are handled, and the terms for contributions.",
      "Please do not send money in response to unsolicited messages claiming to represent this website.",
    ],
    linkText: "Ask a question about partnerships",
    href: "#contact",
  },
  {
    id: "news",
    kicker: "NEWS & UPDATES",
    title: "Updates shared",
    emphasis: "with care.",
    paragraphs: [
      "There are no verified programme announcements to publish at present. Updates will appear here when dates, partners, eligibility details and available resources have been confirmed.",
      "Please check this page for official information rather than relying on forwarded messages or unofficial social-media posts.",
    ],
  },
]

export default function Programmes() {
  return (
    <>
      {/* ==========================================
          01. OUR PROGRAMMES
      ========================================== */}
      <section
        id="programmes"
        className="bg-[#f1eee5] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="mb-14">
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#b49555]">
              Our Programmes
            </span>

            <div className="grid gap-7 lg:grid-cols-2 lg:items-end">

              <h2 className="text-4xl font-bold leading-[1.12] tracking-[-0.045em] text-[#1A3150] sm:text-5xl lg:text-[58px]">
                Support shaped around
                <br />
                <em className="font-serif font-normal text-[#cbb681]">
                  real-life needs.
                </em>
              </h2>

              <p className="max-w-lg text-sm leading-7 text-[#65736a] sm:text-base lg:ml-auto">
                These are areas of community support the organisation
                aims to develop. Availability depends on confirmed
                resources, local partners and published programme
                criteria.
              </p>

            </div>
          </div>

          {/* Programme Grid */}
          <div className="grid border-l border-t border-[#dcd5c5] sm:grid-cols-2 lg:grid-cols-3">

            {PROGRAMMES.map(({ number, title, description, Icon }) => (
              <article
                key={number}
                className="group relative flex min-h-[260px] flex-col border-b border-r border-[#dcd5c5] p-7 transition-colors duration-300 hover:bg-[#e9e5d9] sm:p-8 lg:p-9"
              >
                <div className="mb-9 flex items-center justify-between">

                  <span className="text-xs font-bold tracking-[0.15em] text-[#b49555]">
                    {number}
                  </span>

                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="text-[#315b4c] transition-transform duration-300 group-hover:-translate-y-1"
                  />

                </div>

                <h3 className="mb-3 text-xl font-semibold leading-snug tracking-tight text-[#1A3150]">
                  {title}
                </h3>

                <p className="text-sm leading-7 text-[#68766d]">
                  {description}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ==========================================
          02–05. INFORMATION SECTIONS
      ========================================== */}
      {INFO_SECTIONS.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`px-5 py-20 sm:px-8 lg:px-10 lg:py-28 ${index % 2 === 0
              ? "bg-white"
              : "bg-[#f1eee5]"
            }`}
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            {/* Left: Heading */}
            <div>
              <span className="mb-7 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#b49555]">
                {section.kicker}
              </span>

              <h2 className="text-4xl font-bold leading-[1.12] tracking-[-0.045em] text-[#1A3150] sm:text-5xl lg:text-[58px]">
                {section.title}
                <br />

                <em className="font-serif font-normal text-[#cbb681]">
                  {section.emphasis}
                </em>
              </h2>
            </div>

            {/* Right: Description */}
            <div className="flex flex-col items-start">

              <div className="space-y-6">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-sm leading-[2] text-[#65736a] sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Section Link */}
              {section.linkText && (
                <Link
                  href={section.href!}
                  className={
                    section.button
                      ? "group mt-9 inline-flex items-center gap-4 rounded-full bg-[#1A3150] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1f382e] hover:shadow-lg"
                      : "group mt-9 inline-flex items-center gap-3 border-b border-[#b49555] pb-2 text-sm font-semibold text-[#1A3150] transition-colors hover:text-[#a58b58]"
                  }
                >
                  {section.linkText}

                  <ArrowRight
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              )}

            </div>
          </div>
        </section>
      ))}
    </>
  )
}