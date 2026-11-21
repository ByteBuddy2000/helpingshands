"use client"
import {
  ArrowRight,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"
import { BRAND_CONTACT } from "../data/aboutData"
import { ResilientImage } from "./ResilientImage"
import { RevealFromBottom } from "./ScrollReveal"
import { HeroArt } from "./HeroArt"

interface HeroSectionProps {
  onPrimaryCta: () => void
  onSecondaryCta: () => void
}

export function HeroSection({
  onPrimaryCta,
  onSecondaryCta,
}: HeroSectionProps) {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#162842] via-[#1A3150] to-[#213C5C] text-[#FFFEFA]"
    >
      {/* Subtle architectural dot texture and warm orbital rings */}
      <div
        className="hero-dot-pattern pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute top-10 -left-56 h-[420px] w-[420px] rounded-full border border-[#DBCEAC]/15"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -right-64 -bottom-72 h-[560px] w-[560px] rounded-full border border-[#DBCEAC]/15"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left editorial copy with staggered bottom-to-top reveal */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <RevealFromBottom immediate distance={24} delay={0.02}>
              {/* <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-[#C6B993] uppercase">
                <span className="h-px w-7 bg-[#C6B993]" aria-hidden="true" />
                <span>About Helping Hands Company · UK Branch</span>
              </div> */}
              <div className="mb-6 inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-[#D8C18B] uppercase">
                <span className="h-2 w-2 rounded-full bg-[#A95F48] shadow-[0_0_12px_#A95F48]" />
                A Little Help Can Go a Long Way
              </div>
            </RevealFromBottom>

            <RevealFromBottom immediate distance={34} delay={0.08}>
              {/* <h1
                id="about-hero-heading"
                className="font-display mt-6 text-[clamp(2.25rem,4vw,3.45rem)] leading-[1.06] font-extrabold tracking-[-0.04em] text-balance text-[#FFFEFA]"
              >
                Care That Makes a Difference.{" "}
                <span className="text-[#C6B993]">
                  People Who Make It Possible.
                </span>
              </h1> */}
              {/* <h1
                id="about-hero-heading"
                className="font-display mt-6 text-[clamp(2.25rem,4vw,3.45rem)] leading-[1.06] font-extrabold tracking-[-0.04em] text-balance text-[#FFFEFA]"
              >
                Together,
                <span className="text-[#C6B993]">
                  We Make a Difference.
                </span>
              </h1> */}

              <h1
                id="hero-heading"
                className="font-display text-[clamp(2.8rem,5.5vw,4.5rem)] leading-[1.06] font-extrabold tracking-[-0.045em] text-white"
              >
                Together,
                <br />
                <em className="font-serif font-normal text-[#D8C18B]">
                  We Make a Difference.
                </em>
              </h1>
            </RevealFromBottom>

            <RevealFromBottom immediate distance={32} delay={0.15}>
              {/* <p className="mt-6 max-w-xl text-base leading-[1.75] text-[#FFFEFA]/88 sm:text-[17px]">
                At Helping Hands Company – UK Branch, we believe meaningful
                support begins with genuine human presence. We bring together
                respectful practical guidance, compassionate listening, and
                trusted local community signposting for people across the United
                Kingdom.
              </p> */}
              <p className="mt-6 max-w-xl text-base leading-[1.75] text-[#FFFEFA]/88 sm:text-[17px]">
                We believe meaningful support starts with genuine human connection. Through compassionate listening, practical guidance, and trusted connections to local community services, we help people across the United Kingdom feel heard, supported, and empowered.
              </p>
            </RevealFromBottom>

            <RevealFromBottom immediate distance={28} delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <motion.button
                  type="button"
                  onClick={onPrimaryCta}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex min-h-[48px] cursor-pointer items-center gap-3 rounded bg-[#C6B993] px-6 py-3 text-sm font-bold whitespace-nowrap text-[#162842] transition-colors duration-150 hover:bg-[#DBCEAC]"
                >
                  <span>Speak With Our Team</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={onSecondaryCta}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded border border-[#C6B993]/45 bg-[#162842]/50 px-6 py-3 text-sm font-semibold whitespace-nowrap text-[#FFFEFA] transition-colors duration-150 hover:border-[#C6B993] hover:bg-[#162842]"
                >
                  <span>Explore Our Approach</span>
                </motion.button>
              </div>
            </RevealFromBottom>

            <RevealFromBottom immediate distance={20} delay={0.28}>
              <div className="mt-8 flex items-center gap-2.5 border-t border-[#FFFEFA]/15 pt-5 text-xs text-[#DBCEAC]/90">
                {/* <div className="mt-8 flex items-center gap-2.5 border-t border-[#FFFEFA]/15 pt-5 text-xs text-[#DBCEAC]/90"> */}
                {/* <ShieldCheck
                  className="h-4 w-4 shrink-0 text-[#C6B993]"
                  aria-hidden="true"
                />
                <span>
                  Free to enquire · No application or release fees · Published
                  Director: {BRAND_CONTACT.director}
                </span> */}
              </div>
            </RevealFromBottom>
          </div>

          {/* Right editorial photography */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.65,
              delay: 0.14,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col lg:col-span-6"
          >
            {/* <div className="relative h-full min-h-[300px] overflow-hidden rounded-lg border border-[#C6B993]/30 bg-[#162842] shadow-2xl">
              <ResilientImage
                src="/assets/images/hero_uk_caregiver_1794961489470.jpg"
                alt="A compassionate UK caregiver sharing warm conversation over tea with an older lady in a sunlit British home"
                fallbackTitle="People-First UK Support"
                className="h-full w-full object-cover object-center lg:min-h-[440px]"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.32,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#162842]/90 via-[#162842]/45 to-transparent p-6"
                aria-hidden="true"
              >
                <p className="text-[11px] font-bold tracking-[0.18em] text-[#C6B993] uppercase">
                  United Kingdom Branch
                </p>
                <p className="font-display mt-1 text-lg font-bold tracking-tight text-[#FFFEFA]">
                  Kindness, dignity, and practical support in every
                  conversation.
                </p>
              </motion.div>
            </div> */}

            {/* Hero Artwork */}

            <HeroArt />
            <div
              aria-label="Illustration representing people supporting one another"
              role="img"
              // className="relative flex min-h-[390px] items-center justify-center sm:min-h-[460px]"
              className="relative hidden min-h-[390px] items-center justify-center sm:min-h-[460px]"
            >
              {/* Main Illustration Card */}
              <div className="relative flex h-[320px] w-[280px] items-center justify-center overflow-hidden rounded-lg border border-white/20 bg-gradient-to-br from-[#E5D5AA] via-[#D8C18B] to-[#C6B993] shadow-2xl shadow-black/20 sm:h-[360px] sm:w-[320px]">
                {/* Decorative Sun */}
                <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full border border-[#172B45]/10 bg-[#F5E8C8]/40" />

                <div className="absolute bottom-[-90px] -left-16 h-64 w-64 rounded-full bg-[#A95F48]/20 blur-2xl" />

                {/* Illustration Icon */}
                <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-[#172B45]/10 bg-white/30 shadow-inner sm:h-40 sm:w-40">
                  <HandHeart
                    size={105}
                    strokeWidth={1.15}
                    className="text-[#A95F48] sm:h-[115px] sm:w-[115px]"
                  />
                </div>

                {/* Illustration Caption */}
                <div className="absolute right-7 bottom-7 left-7">
                  <span className="text-[9px] font-bold tracking-[0.25em] text-[#8A7040]">
                    COMMUNITY FIRST
                  </span>

                  <h3 className="font-display mt-2 text-2xl leading-tight font-extrabold tracking-tight text-[#172B45] sm:text-3xl">
                    Small acts.
                    <br />
                    Lasting impact.
                  </h3>
                </div>
              </div>

              {/* Floating Note - Top */}
              <div className="absolute top-[12%] right-0 flex items-center gap-3 rounded-lg border border-white/15 bg-[#172B45]/90 px-4 py-3 shadow-xl shadow-black/15 backdrop-blur-md sm:-right-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D8C18B]/15 text-[#D8C18B]">
                  <HeartHandshake size={19} />
                </div>

                <span className="text-xs font-semibold text-white">
                  Care that connects
                </span>
              </div>

              {/* Floating Note - Bottom */}
              <div className="absolute bottom-[12%] left-0 flex items-center gap-3 rounded-lg border border-white/15 bg-[#172B45]/90 px-4 py-3 shadow-xl shadow-black/15 backdrop-blur-md sm:-left-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A95F48]/20 text-[#D8C18B]">
                  <Users size={19} />
                </div>

                <span className="text-xs font-semibold text-white">
                  People at the heart
                </span>
              </div>

              {/* Decorative Sparkles */}
              <span className="absolute top-[12%] left-[12%] text-3xl text-[#D8C18B]">
                ✳
              </span>

              <span className="absolute bottom-[15%] right-[8%] text-2xl text-[#D8C18B]">
                ✦
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom brand rhythm bar */}
      <div className="relative z-10 border-t border-[#FFFEFA]/15 bg-[#162842]/55">
        <div className="mx-auto flex min-h-[48px] max-w-[1200px] flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 text-[8px] font-bold tracking-[0.18em] text-[#DBCEAC] uppercase sm:px-6 lg:px-8">
          <span>People-Centred Guidance</span>
          <span aria-hidden="true" className="text-[#C6B993]">
            ·
          </span>
          <span>Local Community Connection</span>
          <span aria-hidden="true" className="text-[#C6B993]">
            ·
          </span>
          <span>Open &amp; Transparent Conduct</span>
        </div>
      </div>
    </section>
  )
}
