// components/WhoWeAreSection.tsx
"use client"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { BRAND_CONTACT } from "../data/aboutData"
import { ResilientImage } from "./ResilientImage"
import { RevealFromBottom } from "./ScrollReveal"

interface WhoWeAreSectionProps {
  onLearnMoreClick: () => void
}

export function WhoWeAreSection({ onLearnMoreClick }: WhoWeAreSectionProps) {
  return (
    <section
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
      className="bg-[#FFFEFA] py-16 sm:py-22 lg:py-26"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Photograph */}
          <RevealFromBottom distance={44} className="lg:col-span-5">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full overflow-hidden rounded-lg border border-[#e5dfd2] bg-[#f5f2eb] shadow-sm"
            >
              <ResilientImage
                src="/assets/images/
who_we_are_home_visit_1794961490057.jpg"
                alt="A friendly UK care coordinator walking alongside an older gentleman along a sunlit British garden pathway"
                fallbackTitle="Supporting UK Communities"
                className="h-full min-h-[300px] w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
              />
            </motion.div>
          </RevealFromBottom>

          {/* Editorial Narrative */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <RevealFromBottom distance={28} delay={0.04}>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#B66D50] uppercase">
                Who We Are
              </p>

              <h2
                id="who-we-are-heading"
                className="font-display mt-4 text-[clamp(1.85rem,3vw,2.65rem)] leading-[1.12] font-extrabold tracking-[-0.035em] text-balance text-[#1A3150]"
              >
                A people-first UK branch built on{" "}
                <span className="text-[#8a7040]">
                  respect, clarity, and everyday kindness.
                </span>
              </h2>
            </RevealFromBottom>

            <RevealFromBottom distance={32} delay={0.1}>
              <div className="mt-6 space-y-4 text-[15px] leading-[1.8] text-[#4a5a6f] sm:text-base">
                <p>
                  Helping Hands Company – UK Branch is a dedicated community and
                  support initiative focused on helping individuals and families
                  navigate everyday challenges with dignity. We serve as an
                  approachable first point of contact—offering a listening ear,
                  practical guidance, and signposting to appropriate local
                  services.
                </p>
                <p>
                  Whether someone is seeking community connection, guidance on
                  family or local support options, or clarity around upcoming
                  branch initiatives, our team responds with honesty and care.
                  We take pride in stating plainly what we can assist with and
                  helping people discover established local organisations where
                  specialist support is needed.
                </p>
                <p>
                  Led by published director{" "}
                  <strong className="font-semibold text-[#1A3150]">
                    {BRAND_CONTACT.director}
                  </strong>
                  , our UK Branch upholds straightforward communication, privacy
                  respect, and accessible human contact across every enquiry.
                </p>
              </div>
            </RevealFromBottom>

            <RevealFromBottom distance={28} delay={0.16}>
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[#e5dfd2] pt-6">
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] text-[#B66D50] uppercase">
                    Published Director
                  </p>
                  <p className="font-display mt-1 text-base font-bold text-[#1A3150]">
                    {BRAND_CONTACT.director}
                  </p>
                </div>
                <div className="h-8 w-px bg-[#e5dfd2]" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] text-[#B66D50] uppercase">
                    Service Region
                  </p>
                  <p className="font-display mt-1 text-base font-bold text-[#1A3150]">
                    {BRAND_CONTACT.location}
                  </p>
                </div>
                <div className="sm:ml-auto">
                  <motion.button
                    type="button"
                    onClick={onLearnMoreClick}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 border-b-2 border-[#C6B993] pb-1 text-sm font-bold text-[#1A3150] transition-colors hover:border-[#1A3150] hover:text-[#213C5C]"
                  >
                    <span>Explore our six core values</span>
                    <ArrowRight
                      className="h-4 w-4 text-[#B66D50]"
                      aria-hidden="true"
                    />
                  </motion.button>
                </div>
              </div>
            </RevealFromBottom>
          </div>
        </div>
      </div>
    </section>
  )
}
