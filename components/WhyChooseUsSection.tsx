"use client"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { WHY_CHOOSE_US } from "../data/aboutData"
import { ResilientImage } from "./ResilientImage"
import { RevealFromBottom, StaggerGroup, StaggerItem } from "./ScrollReveal"

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="border-t border-[#e5dfd2] bg-[#f5f2eb] py-16 sm:py-22 lg:py-26"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left column: Heading + Companion photography */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <RevealFromBottom distance={32}>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#B66D50] uppercase">
                Why Choose Us
              </p>
              <h2
                id="why-choose-us-heading"
                className="font-display mt-3 text-[clamp(1.85rem,3vw,2.65rem)] leading-[1.12] font-extrabold tracking-[-0.035em] text-balance text-[#1A3150]"
              >
                Thoughtful support built on{" "}
                <span className="text-[#8a7040]">human trust.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#4a5a6f]">
                Choosing who to reach out to for guidance or family support
                matters. Our UK Branch prioritises straightforward answers,
                respectful boundaries, and attentive follow-through.
              </p>
            </RevealFromBottom>

            <RevealFromBottom distance={44} delay={0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-lg border border-[#e5dfd2] bg-[#FEFDFA] shadow-sm"
              >
                <ResilientImage
                  src="/assets/images/
why_choose_us_companionship_1794961489684.jpg"
                  alt="A warm UK caregiver sitting beside an older resident at a sunlit kitchen table, listening attentively over tea"
                  fallbackTitle="Respectful Companionship & Guidance"
                  className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                />
              </motion.div>
            </RevealFromBottom>
          </div>

          {/* Right column: 6 structured pillars */}
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {WHY_CHOOSE_US.map((item) => (
              <StaggerItem key={item.number} className="flex">
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="flex w-full flex-col justify-between rounded-lg border border-[#e5dfd2] bg-[#FEFDFA] p-6 transition-colors duration-200 hover:border-[#C6B993]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-extrabold tracking-[0.14em] text-[#8a7040] tabular-nums">
                        {item.number}
                      </span>
                      <CheckCircle2
                        className="h-4 w-4 text-[#B66D50]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-display mt-4 text-lg font-bold tracking-[-0.02em] text-[#1A3150]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-[1.7] text-[#4a5a6f]">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
