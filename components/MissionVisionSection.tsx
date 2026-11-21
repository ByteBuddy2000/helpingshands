"use client"
import { Compass, Eye } from "lucide-react"
import { motion } from "framer-motion"
import { RevealFromBottom, StaggerGroup, StaggerItem } from "./ScrollReveal"

export function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      aria-labelledby="mission-vision-heading"
      className="border-y border-[#e5dfd2] bg-[#f5f2eb] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <RevealFromBottom distance={30} className="max-w-2xl">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#B66D50] uppercase">
            Purpose &amp; Direction
          </p>
          <h2
            id="mission-vision-heading"
            className="font-display mt-3 text-[clamp(1.85rem,3vw,2.65rem)] leading-[1.12] font-extrabold tracking-[-0.035em] text-balance text-[#1A3150]"
          >
            Practical care.{" "}
            <span className="text-[#8a7040]">Stronger communities.</span>
          </h2>
        </RevealFromBottom>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {/* Mission Card */}
          <StaggerItem className="flex">
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex w-full flex-col justify-between rounded-lg border border-[#e5dfd2] bg-[#FEFDFA] p-8 shadow-sm sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#DBCEAC]/45 text-[#B66D50]">
                    <Compass className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="font-display text-xs font-bold tracking-[0.18em] text-[#8a7040] uppercase">
                    Our Mission
                  </span>
                </div>

                <h3 className="font-display mt-6 text-2xl font-extrabold tracking-[-0.025em] text-[#1A3150]">
                  Clear guidance and dignified connection
                </h3>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#4a5a6f]">
                  Our mission is to help people find clear information,
                  respectful practical guidance, and meaningful connections to
                  appropriate community services—approaching every enquiry with
                  warmth, honesty, and care.
                </p>
              </div>

              <div className="mt-8 border-t border-[#e5dfd2] pt-5 text-xs font-semibold text-[#627285]">
                Grounded in openness about what support is available and what
                remains subject to confirmation.
              </div>
            </motion.article>
          </StaggerItem>

          {/* Vision Card */}
          <StaggerItem className="flex">
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex w-full flex-col justify-between rounded-lg border border-[#213C5C] bg-[#1A3150] p-8 text-[#FFFEFA] shadow-sm sm:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#213C5C] text-[#C6B993]">
                    <Eye className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="font-display text-xs font-bold tracking-[0.18em] text-[#C6B993] uppercase">
                    Our Vision
                  </span>
                </div>

                <h3 className="font-display mt-6 text-2xl font-extrabold tracking-[-0.025em] text-[#FFFEFA]">
                  A community where nobody feels unheard
                </h3>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#FFFEFA]/86">
                  Our vision is a connected UK community where individuals and
                  families feel heard, valued, treated with dignity, and better
                  linked to the practical support around them.
                </p>
              </div>

              <div className="mt-8 border-t border-[#FFFEFA]/15 pt-5 text-xs font-semibold text-[#DBCEAC]">
                Building stronger local solidarity through attentive listening
                and trusted signposting.
              </div>
            </motion.article>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  )
}
