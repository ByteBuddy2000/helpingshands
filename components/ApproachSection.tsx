"use client"
import { useState } from "react"
import { ClipboardList, Compass, MessageCircleHeart, Users } from "lucide-react"
import { motion } from "framer-motion"
import { APPROACH_STEPS, ApproachStep } from "../data/aboutData"
import { RevealFromBottom, StaggerGroup, StaggerItem } from "./ScrollReveal"

const STEP_ICONS: Record<ApproachStep["iconName"], typeof MessageCircleHeart> =
  {
    MessageCircleHeart,
    ClipboardList,
    Compass,
    Users,
  }

export function ApproachSection() {
  const [activeStep, setActiveStep] = useState<string>(APPROACH_STEPS[0].step)

  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="bg-[#1A3150] py-16 text-[#FFFEFA] sm:py-22 lg:py-26"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <RevealFromBottom distance={32}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#C6B993] uppercase">
                Our Approach to Care
              </p>
              <h2
                id="approach-heading"
                className="font-display mt-3 text-[clamp(1.85rem,3vw,2.65rem)] leading-[1.12] font-extrabold tracking-[-0.035em] text-balance text-[#FFFEFA]"
              >
                Four considered steps from{" "}
                <span className="text-[#C6B993]">
                  first conversation to lasting support.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-[1.75] text-[#FFFEFA]/82">
              Every enquiry follows a calm, transparent pathway designed to put
              people first—without rush, confusion, or unnecessary barriers.
            </p>
          </div>
        </RevealFromBottom>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH_STEPS.map((step) => {
            const Icon = STEP_ICONS[step.iconName]
            const isSelected = activeStep === step.step

            return (
              <StaggerItem key={step.step} className="flex">
                <motion.button
                  type="button"
                  onClick={() => setActiveStep(step.step)}
                  aria-pressed={isSelected}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex w-full cursor-pointer flex-col justify-between rounded-lg border p-6 text-left transition-colors duration-150 ${
                    isSelected
                      ? "border-[#C6B993] bg-[#213C5C]"
                      : "border-[#FFFEFA]/15 bg-[#162842]/75 hover:border-[#C6B993]/60 hover:bg-[#213C5C]/70"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-2xl font-extrabold tracking-tight text-[#C6B993] tabular-nums">
                        {step.step}
                      </span>
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-150 ${
                          isSelected
                            ? "bg-[#C6B993] text-[#162842]"
                            : "bg-[#1A3150] text-[#DBCEAC]"
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                    </div>

                    <p className="mt-5 text-[11px] font-bold tracking-[0.15em] text-[#DBCEAC] uppercase">
                      {step.subtitle}
                    </p>
                    <h3 className="font-display mt-1.5 text-lg font-extrabold tracking-[-0.02em] text-[#FFFEFA]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.7] text-[#FFFEFA]/85">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2.5 pt-3 text-xs font-semibold text-[#C6B993]">
                    <span
                      className="relative h-1.5 w-7 overflow-hidden rounded-full bg-[#FFFEFA]/20"
                      aria-hidden="true"
                    >
                      {isSelected && (
                        <motion.span
                          layoutId="approach-step-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 360,
                            damping: 30,
                          }}
                          className="absolute inset-0 rounded-full bg-[#C6B993]"
                        />
                      )}
                    </span>
                    <span>Step {step.step} of 04</span>
                  </div>
                </motion.button>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
