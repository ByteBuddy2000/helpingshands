import { Award, Gift, Info, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DEMO_ORG, DEMO_PRIZES } from '../../data/christmasDemoData';
import { RevealFromBottom, StaggerGroup, StaggerItem } from '../ScrollReveal';

export function CampaignIntroAndPrizes() {
  return (
    <>
      {/* Campaign Introduction */}
      <section
        id="overview"
        aria-labelledby="campaign-intro-heading"
        className="bg-[#FFFEFA] py-16 sm:py-22"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <RevealFromBottom distance={32} className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B66D50]">
                Campaign Overview · Educational Demo
              </p>
              <h2
                id="campaign-intro-heading"
                className="text-balance mt-3 font-display text-[clamp(1.85rem,3vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#1A3150]"
              >
                Transparent festive giving,{' '}
                <span className="text-[#8a7040]">built for clarity and trust.</span>
              </h2>
            </RevealFromBottom>

            <RevealFromBottom distance={32} delay={0.08} className="lg:col-span-7">
              <div className="space-y-4 text-[15px] leading-[1.8] text-[#4a5a6f] sm:text-base">
                <p>
                  <strong className="font-semibold text-[#1A3150]">{DEMO_ORG.name}</strong> presents
                  this Christmas Giveaway 2026 educational demo under the theme{' '}
                  <em>&ldquo;{DEMO_ORG.theme}&rdquo;</em>. It illustrates how a community seasonal
                  initiative communicates clear eligibility, transparent prize schedules, and
                  accessible local events.
                </p>
                <p>
                  Every figure, venue, and submission workflow on this site uses mock data for
                  educational and UI/UX demonstration purposes only. No real personal information is
                  stored, and no entry, claim, delivery, or processing fees are ever charged.
                </p>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-lg border border-[#DBCEAC] bg-[#f5f2eb] p-4 text-sm text-[#1A3150]">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#B66D50]" aria-hidden="true" />
                <p className="leading-relaxed">
                  <strong>Educational Demo Notice:</strong> All monetary figures (£65,000 combined
                  illustrative pool), event listings, and confirmation numbers are simulated
                  examples.
                </p>
              </div>
            </RevealFromBottom>
          </div>
        </div>
      </section>

      {/* Five Illustrative Prize Cards */}
      <section
        id="prizes"
        aria-labelledby="prizes-heading"
        className="border-y border-[#e5dfd2] bg-[#f5f2eb] py-16 sm:py-22"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <RevealFromBottom distance={32}>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B66D50]">
                  Illustrative Prize Schedule · Demo Only
                </p>
                <h2
                  id="prizes-heading"
                  className="text-balance mt-3 font-display text-[clamp(1.85rem,3vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#1A3150]"
                >
                  Five illustrative award tiers{' '}
                  <span className="text-[#8a7040]">totalling £65,000 (demo).</span>
                </h2>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#4a5a6f]">
                <ShieldCheck className="h-4 w-4 text-[#B66D50]" aria-hidden="true" />
                <span>Illustrative only · Zero entry, claim, or delivery fees</span>
              </div>
            </div>
          </RevealFromBottom>

          <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DEMO_PRIZES.map((prize) => (
              <StaggerItem
                key={prize.rank}
                className={prize.featured ? 'sm:col-span-2 lg:col-span-1 flex' : 'flex'}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="flex w-full"
                >
                  <Card
                    className={`flex w-full flex-col justify-between rounded-lg border p-6 shadow-sm transition-colors ${
                      prize.featured
                        ? 'border-[#C6B993] bg-[#1A3150] text-[#FFFEFA] ring-0'
                        : 'border-[#e5dfd2] bg-[#FEFDFA] text-[#17263d] ring-0 hover:border-[#C6B993]'
                    }`}
                  >
                    <CardHeader className="p-0">
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`text-[11px] font-bold uppercase tracking-[0.16em] ${
                            prize.featured ? 'text-[#C6B993]' : 'text-[#B66D50]'
                          }`}
                        >
                          {prize.tier} · Illustrative
                        </span>
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-md ${
                            prize.featured
                              ? 'bg-[#213C5C] text-[#C6B993]'
                              : 'bg-[#f5f2eb] text-[#B66D50]'
                          }`}
                        >
                          {prize.featured ? (
                            <Award className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <Gift className="h-5 w-5" aria-hidden="true" />
                          )}
                        </div>
                      </div>

                      <CardTitle
                        className={`mt-4 font-display text-4xl font-extrabold tabular-nums tracking-[-0.04em] ${
                          prize.featured ? 'text-[#FFFEFA]' : 'text-[#1A3150]'
                        }`}
                      >
                        {prize.amount}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="mt-4 flex flex-1 flex-col justify-between p-0">
                      <p
                        className={`text-sm leading-[1.7] ${
                          prize.featured ? 'text-[#FFFEFA]/85' : 'text-[#4a5a6f]'
                        }`}
                      >
                        {prize.description}
                      </p>

                      <div
                        className={`mt-6 border-t pt-4 text-xs font-semibold ${
                          prize.featured
                            ? 'border-[#FFFEFA]/15 text-[#DBCEAC]'
                            : 'border-[#e5dfd2] text-[#627285]'
                        }`}
                      >
                        Tier {prize.rank} · Educational Demo Figure
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}

            {/* 6th Grid Card: Total Illustrative Pool Summary */}
            <StaggerItem className="flex">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="flex w-full"
              >
                <Card className="flex w-full flex-col justify-between rounded-lg border border-[#C6B993] bg-[#DBCEAC]/35 p-6 text-[#1A3150] ring-0">
                  <CardHeader className="p-0">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a7040]">
                      Combined Demo Schedule
                    </span>
                    <CardTitle className="mt-4 font-display text-4xl font-extrabold tabular-nums tracking-[-0.04em] text-[#1A3150]">
                      £65,000
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4 flex flex-1 flex-col justify-between p-0">
                    <p className="text-sm leading-[1.7] text-[#1A3150]/85">
                      Combined illustrative prize total across five tiers (£30k + £20k + £10k + £3k
                      + £2k). All awards are strictly simulated for educational demonstration.
                    </p>
                    <div className="mt-6 border-t border-[#1A3150]/15 pt-4 text-xs font-bold text-[#1A3150]">
                      100% Free Demo · No Fees Required
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
