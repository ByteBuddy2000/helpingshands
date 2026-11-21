"use client"

import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  HandHeart,
  HeartHandshake,
  Users,
} from "lucide-react"

const Hero2Section = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#172B45] via-[#203E5D] to-[#315675] text-white"
    >
      {/* Background Orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 -z-10 h-[450px] w-[450px] rounded-full bg-[#C6B993]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 -bottom-40 -z-10 h-[500px] w-[500px] rounded-full bg-[#A95F48]/15 blur-[120px]" />

      {/* Hero Content */}
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-32 lg:pb-24">
        {/* Hero Copy */}
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-[#D8C18B] uppercase">
            <span className="h-2 w-2 rounded-full bg-[#A95F48] shadow-[0_0_12px_#A95F48]" />
            A Little Help Can Go a Long Way
          </div>

          {/* <h1
            id="hero-heading"
            className="font-display text-[clamp(2.8rem,5.5vw,4.5rem)] leading-[1.06] font-extrabold tracking-[-0.045em] text-white"
          >
            Stronger together.
            <br />
            <em className="font-serif font-normal text-[#D8C18B]">
              Here to help.
            </em>
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

          <p className="mt-7 max-w-[540px] text-[15px] leading-[1.9] text-white/80 sm:text-base">
            A helping hand, a listening ear, and practical support can make a
            meaningful difference. We bring people and communities together
            across the UK.
          </p>

          {/* Hero Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="#christmas"
              className="inline-flex min-h-[50px] items-center gap-3 rounded-sm bg-[#E5D5AA] px-6 py-3.5 text-sm font-bold text-[#172B45] transition-all duration-300 hover:bg-[#D8C18B] hover:shadow-lg hover:shadow-black/10"
            >
              View Christmas campaign
              <ArrowRight size={17} />
            </Link>

            <Link
              href="#about"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-[#D8C18B]"
            >
              Discover our purpose
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Hero Note */}
          <div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-6">
            <ShieldCheck size={19} className="shrink-0 text-[#D8C18B]" />

            <span className="text-xs font-medium tracking-wide text-white/75">
              Respectful, people-first community support
            </span>
          </div>
        </div>

        {/* Hero Artwork */}
        <div
          aria-label="Illustration representing people supporting one another"
          role="img"
          className="relative flex min-h-[390px] items-center justify-center sm:min-h-[460px]"
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

          <span className="absolute right-[8%] bottom-[15%] text-2xl text-[#D8C18B]">
            ✦
          </span>
          
        </div>
      </div>

      {/* Hero Bottom Features */}
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-4 border-t border-white/15 px-4 py-7 sm:gap-7 sm:px-6 lg:justify-start lg:px-8">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#D8C18B]">
          LISTENING
        </span>

        <span className="h-1 w-1 rounded-full bg-[#A95F48]" />

        <span className="text-[10px] font-bold tracking-[0.2em] text-[#D8C18B]">
          SUPPORTING
        </span>

        <span className="h-1 w-1 rounded-full bg-[#A95F48]" />

        <span className="text-[10px] font-bold tracking-[0.2em] text-[#D8C18B]">
          CONNECTING
        </span>
      </div>
    </section>
  )
}

export default Hero2Section
