import { ArrowRight, CalendarDays, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { DEMO_ORG } from '../../data/christmasDemoData';
import { ResilientImage } from '../ResilientImage';
import { RevealFromBottom } from '../ScrollReveal';

interface ChristmasHeroProps {
  onTryForm: () => void;
  onExploreEvents: () => void;
}

export function ChristmasHero({ onTryForm, onExploreEvents }: ChristmasHeroProps) {
  return (
    <section
      aria-labelledby="christmas-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#162842] via-[#1A3150] to-[#213C5C] text-[#FFFEFA]"
    >
      <div className="hero-dot-pattern pointer-events-none absolute inset-0 opacity-55" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -left-48 top-12 h-[380px] w-[380px] rounded-full border border-[#DBCEAC]/15"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -bottom-64 -right-56 h-[520px] w-[520px] rounded-full border border-[#DBCEAC]/15"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Hero Copy */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <RevealFromBottom immediate distance={24} delay={0.02}>
              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C6B993]">
                <span className="h-px w-7 bg-[#C6B993]" aria-hidden="true" />
                <span>Christmas Giveaway 2026 · Educational Demo</span>
              </div>
            </RevealFromBottom>

            <RevealFromBottom immediate distance={34} delay={0.08}>
              <h1
                id="christmas-hero-heading"
                className="text-balance mt-5 font-display text-[clamp(2.25rem,4vw,3.45rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-[#FFFEFA]"
              >
                Sharing Love, Hope and Happiness{' '}
                <span className="text-[#C6B993]">This Christmas.</span>
              </h1>
            </RevealFromBottom>

            <RevealFromBottom immediate distance={30} delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-[1.75] text-[#FFFEFA]/88 sm:text-[17px]">
                Welcome to the <strong className="font-semibold text-[#FFFEFA]">{DEMO_ORG.name}</strong>{' '}
                educational demonstration. Explore an illustrative 2026 seasonal community giveaway,
                upcoming winter gatherings, and fee-free participation standards—built strictly with
                mock data.
              </p>
            </RevealFromBottom>

            <RevealFromBottom immediate distance={28} delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  type="button"
                  onClick={onTryForm}
                  className="h-12 cursor-pointer gap-2.5 rounded bg-[#C6B993] px-6 text-sm font-bold text-[#162842] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#DBCEAC]"
                >
                  <span>Try Simulated Entry Form</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={onExploreEvents}
                  className="h-12 cursor-pointer rounded border-[#C6B993]/50 bg-[#162842]/50 px-6 text-sm font-semibold text-[#FFFEFA] hover:border-[#C6B993] hover:bg-[#162842] hover:text-[#FFFEFA]"
                >
                  Explore Community Events
                </Button>
              </div>
            </RevealFromBottom>

            <RevealFromBottom immediate distance={20} delay={0.26}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#FFFEFA]/15 pt-5 text-xs text-[#DBCEAC]/90">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#C6B993]" aria-hidden="true" />
                  <span>Zero entry, claim, delivery or processing fees</span>
                </span>
                <span aria-hidden="true" className="text-[#C6B993]">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 shrink-0 text-[#C6B993]" aria-hidden="true" />
                  <span>27 Nov – 26 Dec 2026 (Demo)</span>
                </span>
              </div>
            </RevealFromBottom>
          </div>

          {/* Right Festive Photography */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:col-span-6"
          >
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-lg border border-[#C6B993]/35 bg-[#162842] shadow-2xl">
              <ResilientImage
                src={DEMO_ORG.heroImage}
                alt={DEMO_ORG.heroImageAlt}
                fallbackTitle="Christmas Community Gathering"
                className="h-full w-full object-cover object-center lg:min-h-[440px]"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#162842]/92 via-[#162842]/50 to-transparent p-6"
                aria-hidden="true"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6B993]">
                  Educational Demo Showcase
                </p>
                <p className="mt-1 font-display text-lg font-bold tracking-tight text-[#FFFEFA]">
                  Mock seasonal campaign · No real data or payments collected.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Key Dates Strip */}
      <div className="relative z-10 border-t border-[#FFFEFA]/15 bg-[#162842]/60">
        <div className="mx-auto flex min-h-[48px] max-w-[1200px] flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#DBCEAC] sm:px-6 lg:px-8">
          <span>Announcement: 27 Nov 2026</span>
          <span aria-hidden="true" className="text-[#C6B993]">·</span>
          <span>Entries Open: 1 Dec 2026</span>
          <span aria-hidden="true" className="text-[#C6B993]">·</span>
          <span>Entries Close: 23 Dec 2026</span>
          <span aria-hidden="true" className="text-[#C6B993]">·</span>
          <span>Draw: 24 Dec 2026</span>
        </div>
      </div>
    </section>
  );
}
