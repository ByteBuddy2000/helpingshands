import { CalendarCheck2, CheckCircle2, Lock, ShieldAlert, Trophy, XCircle } from 'lucide-react';
import {
  CAMPAIGN_TIMELINE,
  ELIGIBILITY_RULES,
  INELIGIBLE_PARTICIPANTS,
} from '../../data/christmasDemoData';
import { RevealFromBottom, StaggerGroup, StaggerItem } from '../ScrollReveal';

export function TimelineAndEligibilitySection() {
  return (
    <>
      {/* 6-Stage Campaign Timeline */}
      <section
        id="timeline"
        aria-labelledby="timeline-heading"
        className="bg-[#1A3150] py-16 text-[#FFFEFA] sm:py-22 lg:py-26"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <RevealFromBottom distance={32}>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C6B993]">
                  2026 Campaign Schedule · Educational Demo
                </p>
                <h2
                  id="timeline-heading"
                  className="text-balance mt-3 font-display text-[clamp(1.85rem,3vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#FFFEFA]"
                >
                  Key dates from announcement{' '}
                  <span className="text-[#C6B993]">through Boxing Day reveal.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-[1.75] text-[#FFFEFA]/82">
                All timestamps follow Greenwich Mean Time (GMT). Illustrative schedule created for
                educational demonstration.
              </p>
            </div>
          </RevealFromBottom>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAMPAIGN_TIMELINE.map((milestone) => (
              <StaggerItem key={milestone.title} className="flex">
                <article className="flex w-full flex-col justify-between rounded-lg border border-[#FFFEFA]/15 bg-[#162842]/80 p-6">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C6B993]">
                        {milestone.phase}
                      </span>
                      <CalendarCheck2 className="h-4 w-4 text-[#DBCEAC]" aria-hidden="true" />
                    </div>
                    <p className="mt-4 font-display text-sm font-bold text-[#DBCEAC]">
                      {milestone.date}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-extrabold tracking-[-0.02em] text-[#FFFEFA]">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.7] text-[#FFFEFA]/82">
                      {milestone.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Eligibility + Winner Selection & Fee-Free Claiming */}
      <section
        id="eligibility"
        aria-labelledby="eligibility-heading"
        className="bg-[#FFFEFA] py-16 sm:py-22 lg:py-26"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <RevealFromBottom distance={32} className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B66D50]">
              Eligibility &amp; Fair Selection · Demo Rules
            </p>
            <h2
              id="eligibility-heading"
              className="text-balance mt-3 font-display text-[clamp(1.85rem,3vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#1A3150]"
            >
              Clear eligibility and{' '}
              <span className="text-[#8a7040]">fee-free winner verification.</span>
            </h2>
          </RevealFromBottom>

          {/* Eligibility Split */}
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <StaggerItem className="flex">
              <article className="w-full rounded-lg border border-[#e5dfd2] bg-[#FEFDFA] p-7">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1A3150]" aria-hidden="true" />
                  <h3 className="font-display text-xl font-extrabold text-[#1A3150]">
                    Who Can Participate (Demo Rules)
                  </h3>
                </div>
                <ul className="mt-5 space-y-3.5 text-sm leading-[1.7] text-[#4a5a6f]">
                  {ELIGIBILITY_RULES.map((rule) => (
                    <li key={rule} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6B993]" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>

            <StaggerItem className="flex">
              <article className="w-full rounded-lg border border-[#e5dfd2] bg-[#f5f2eb] p-7">
                <div className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-[#B66D50]" aria-hidden="true" />
                  <h3 className="font-display text-xl font-extrabold text-[#1A3150]">
                    Ineligible Participants
                  </h3>
                </div>
                <ul className="mt-5 space-y-3.5 text-sm leading-[1.7] text-[#4a5a6f]">
                  {INELIGIBLE_PARTICIPANTS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B66D50]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          </StaggerGroup>

          {/* Winner Selection & Fee-Free Claiming Cards */}
          <StaggerGroup className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <StaggerItem className="flex">
              <article className="w-full rounded-lg border border-[#e5dfd2] bg-[#FEFDFA] p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#f5f2eb] text-[#B66D50]">
                    <Trophy className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-[#1A3150]">
                    Winner Selection Process
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-[1.75] text-[#4a5a6f]">
                  After entries close on 23 December 2026, duplicate or incomplete submissions are
                  filtered out. A documented random draw is conducted on 24 December 2026, and
                  private notifications are issued on 25 December 2026 before any public
                  announcement on 26 December 2026.
                </p>
              </article>
            </StaggerItem>

            <StaggerItem className="flex">
              <article className="w-full rounded-lg border border-[#C6B993] bg-[#162842] p-7 text-[#FFFEFA]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#213C5C] text-[#C6B993]">
                    <Lock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-[#FFFEFA]">
                    Prize Claiming &amp; Zero-Fee Protection
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-[1.75] text-[#FFFEFA]/85">
                  Confirmed recipients receive written details outlining the award and fee-free
                  delivery options. No entry, claim, delivery, or processing fees are ever charged.
                </p>
                <div className="mt-4 flex items-start gap-2.5 border-t border-[#FFFEFA]/15 pt-4 text-xs text-[#DBCEAC]">
                  <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#C6B993]" aria-hidden="true" />
                  <span>
                    We never request banking passwords, one-time security codes (OTPs),
                    cryptocurrency, or upfront transfer payments.
                  </span>
                </div>
              </article>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
