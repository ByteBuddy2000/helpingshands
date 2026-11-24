"use client"

import { useState } from "react"

const FAQ_ITEMS = [
  {
    question: "Does submitting an enquiry guarantee assistance?",
    answer:
      "No. An enquiry allows the team to understand what information you need. Any assistance depends on programme availability, eligibility and confirmed resources.",
  },
  {
    question: "Do I have to pay an application or release fee?",
    answer:
      "No fee is charged to submit an enquiry. Do not pay anyone who says a fee is required to release a prize, donation or support payment.",
  },
  {
    question: "Can I upload documents or track an application online?",
    answer:
      "Not currently. The public website does not yet offer document uploads or a secure application-status portal. Please do not email sensitive identity or financial documents.",
  },
  {
    question: "Can I donate online?",
    answer:
      "Online donations are not currently being accepted through this website. Verified donation arrangements will be published before any appeal opens.",
  },
  {
    question: "How do I contact the organisation?",
    answer:
      "Use the enquiry form or email helpinghands.uk.org@gmail.com. You can also call +44 7721791363.",
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="bg-[#f1eee5] px-5 py-20 sm:px-8 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* FAQ Content */}
        <div className="max-w-[850px]">

          {/* Section Kicker */}
          <span className="mb-6 block text-[9px] font-bold uppercase tracking-[0.28em] text-[#b49555]">
            Frequently Asked Questions
          </span>

          {/* Heading */}
          <h2 className="mb-8 text-[42px] font-bold leading-[1.08] tracking-[-0.055em] text-[#29483c] sm:text-[52px] md:text-[58px]">
            Clear answers.
            <br />

            <span className="text-[#cbb681]">
              No surprises.
            </span>
          </h2>

          {/* FAQ List */}
          <div className="border-t border-[#dcd5c5]">

            {FAQ_ITEMS.map((item, index) => {
              const isOpen = activeIndex === index

              return (
                <div
                  key={item.question}
                  className="border-b border-[#dcd5c5]"
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-2 py-[22px] text-left"
                  >
                    {/* Accordion Arrow */}
                    <span
                      className={`shrink-0 text-[13px] text-[#29483c] transition-transform duration-200 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      ▶
                    </span>

                    <span className="text-[14px] font-bold leading-6 text-[#172f28] transition-colors group-hover:text-[#a58b58] sm:text-[15px]">
                      {item.question}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[820px] pb-[22px] pl-5 text-[13px] leading-[1.8] tracking-[0.005em] text-[#536b7a] sm:text-[14px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}