import {
  Award,
  HandHeart,
  HeartHandshake,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react"
import { motion } from "framer-motion"
import { CORE_VALUES, CoreValueItem } from "../data/aboutData"
import { RevealFromBottom, StaggerGroup, StaggerItem } from "./ScrollReveal"

const VALUE_ICONS: Record<CoreValueItem["iconName"], typeof HeartHandshake> = {
  HeartHandshake,
  ShieldCheck,
  Scale,
  Award,
  LockKeyhole,
  HandHeart,
}

export function CoreValuesSection() {
  return (
    <section
      id="core-values"
      aria-labelledby="core-values-heading"
      className="bg-[#FFFEFA] py-16 sm:py-22 lg:py-26"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <RevealFromBottom distance={32}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#B66D50] uppercase">
                What Guides Us
              </p>
              <h2
                id="core-values-heading"
                className="font-display mt-3 text-[clamp(1.85rem,3vw,2.65rem)] leading-[1.12] font-extrabold tracking-[-0.035em] text-balance text-[#1A3150]"
              >
                Six core values behind{" "}
                <span className="text-[#8a7040]">every helping hand.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-[1.75] text-[#4a5a6f]">
              These six principles shape how we listen, communicate, safeguard
              personal privacy, and support individuals and families across the
              UK.
            </p>
          </div>
        </RevealFromBottom>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((value) => {
            const Icon = VALUE_ICONS[value.iconName]
            return (
              <StaggerItem key={value.title} className="flex">
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex w-full flex-col justify-between rounded-lg border border-[#e5dfd2] bg-[#FEFDFA] p-7 transition-colors duration-200 hover:border-[#C6B993]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#f5f2eb] text-[#B66D50] transition-colors duration-200 group-hover:bg-[#1A3150] group-hover:text-[#C6B993]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-display text-xs font-extrabold tracking-[0.12em] text-[#8a7040] tabular-nums">
                        {value.number}
                      </span>
                    </div>

                    <h3 className="font-display mt-6 text-xl font-extrabold tracking-[-0.02em] text-[#1A3150]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-[1.75] text-[#4a5a6f]">
                      {value.description}
                    </p>
                  </div>

                  <div
                    className="mt-6 h-px w-10 origin-left bg-[#DBCEAC] transition-transform duration-200 group-hover:scale-x-150 group-hover:bg-[#B66D50]"
                    aria-hidden="true"
                  />
                </motion.article>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
