"use client"
import { ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { QUALITY_STANDARDS } from "../data/aboutData"
import { ResilientImage } from "./ResilientImage"
import { RevealFromBottom, StaggerGroup, StaggerItem } from "./ScrollReveal"

export function CommitmentQualitySection() {
  return (
    <section
      id="quality"
      aria-labelledby="quality-heading"
      className="bg-[#FFFEFA] py-16 sm:py-22 lg:py-26"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: Standards & Editorial Copy */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <RevealFromBottom distance={32}>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#B66D50] uppercase">
                Commitment to Quality
              </p>
              <h2
                id="quality-heading"
                className="font-display mt-3 text-[clamp(1.85rem,3vw,2.65rem)] leading-[1.12] font-extrabold tracking-[-0.035em] text-balance text-[#1A3150]"
              >
                Careful standards in every{" "}
                <span className="text-[#8a7040]">word and action.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[#4a5a6f]">
                Quality in community and home support starts with
                accountability, honest expectations, and respect for personal
                safety. We hold our UK Branch to clear operational principles
                without making overstated claims.
              </p>
            </RevealFromBottom>

            <StaggerGroup className="mt-8 divide-y divide-[#e5dfd2] border-y border-[#e5dfd2]">
              {QUALITY_STANDARDS.map((standard) => (
                <StaggerItem key={standard.title}>
                  <div className="flex items-start gap-4 py-5">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#f5f2eb] text-[#B66D50]">
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#1A3150]">
                        {standard.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-[1.7] text-[#4a5a6f]">
                        {standard.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* Right: Quality Photography */}
          <RevealFromBottom distance={44} delay={0.1} className="lg:col-span-5">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full overflow-hidden rounded-lg border border-[#e5dfd2] bg-[#f5f2eb] shadow-sm"
            >
              <ResilientImage
                src="/assets/images/
quality_care_standard_1794961490949.jpg"
                alt="Two dedicated UK care team members reviewing care guidance notes together in a bright, welcoming hallway"
                fallbackTitle="Dedicated Team Standards"
                className="h-full min-h-[300px] w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
              />
            </motion.div>
          </RevealFromBottom>
        </div>
      </div>
    </section>
  )
}
