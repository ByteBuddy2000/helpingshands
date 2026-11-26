import { Mail, MapPin, ShieldCheck } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { DEMO_ORG, GOVERNANCE_POLICIES } from '../../data/christmasDemoData';
import { RevealFromBottom } from '../ScrollReveal';

export function GovernanceAndContactSection() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Terms, Privacy Notice & Social Disclaimer Accordion */}
      <section
        id="governance"
        aria-labelledby="governance-heading"
        className="border-t border-[#e5dfd2] bg-[#f5f2eb] py-16 sm:py-22"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <RevealFromBottom distance={32} className="lg:col-span-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B66D50]">
                Terms, Privacy &amp; Disclaimers
              </p>
              <h2
                id="governance-heading"
                className="text-balance mt-3 font-display text-[clamp(1.85rem,3vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#1A3150]"
              >
                Transparent rules &amp;{' '}
                <span className="text-[#8a7040]">educational demo safeguards.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#4a5a6f]">
                Explore the illustrative Terms &amp; Conditions, Privacy Notice, and Social Media
                Disclaimer designed to show best-practice UK giveaway disclosures.
              </p>
            </RevealFromBottom>

            <RevealFromBottom distance={34} delay={0.08} className="lg:col-span-7">
              <div className="rounded-xl border border-[#e5dfd2] bg-[#FEFDFA] p-6 sm:p-8">
                <Accordion defaultValue={['terms']}>
                  {GOVERNANCE_POLICIES.map((policy) => (
                    <AccordionItem
                      key={policy.id}
                      value={policy.id}
                      className="border-[#e5dfd2] py-1"
                    >
                      <AccordionTrigger className="cursor-pointer py-4 font-display text-base font-bold text-[#1A3150] hover:no-underline">
                        <div>
                          <span>{policy.title}</span>
                          <p className="mt-1 font-sans text-xs font-normal text-[#627285]">
                            {policy.summary}
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-1 text-sm text-[#4a5a6f]">
                        <ul className="space-y-2.5 leading-[1.7]">
                          {policy.points.map((point) => (
                            <li key={point} className="flex items-start gap-2.5">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B66D50]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </RevealFromBottom>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="bg-[#1A3150] py-16 text-[#FFFEFA] sm:py-20"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <RevealFromBottom distance={30}>
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C6B993]">
                  Demo Contact Information
                </p>
                <h2
                  id="contact-heading"
                  className="text-balance mt-3 font-display text-[clamp(1.85rem,3vw,2.5rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#FFFEFA]"
                >
                  Questions about this{' '}
                  <span className="text-[#C6B993]">Christmas Giveaway Demo?</span>
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-[#FFFEFA]/85">
                  Community Giving Foundation — UK is a fictional organisation created solely for
                  this educational UI/UX demonstration. The contact address below is a reserved{' '}
                  <code>.example</code> placeholder.
                </p>
              </div>

              <div className="rounded-xl border border-[#C6B993]/35 bg-[#162842] p-6 lg:col-span-5">
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#C6B993]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#DBCEAC]">
                        Fictional Demo Email
                      </p>
                      <a
                        href={`mailto:${DEMO_ORG.email}`}
                        className="mt-0.5 block font-semibold text-[#FFFEFA] underline decoration-[#C6B993]/50 underline-offset-4 hover:text-[#C6B993]"
                      >
                        {DEMO_ORG.email}
                      </a>
                    </div>
                  </div>

                  <Separator className="bg-[#FFFEFA]/15" />

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C6B993]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#DBCEAC]">
                        Illustrative Identity
                      </p>
                      <p className="mt-0.5 text-[#FFFEFA]/90">
                        {DEMO_ORG.name} · {DEMO_ORG.location}
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-[#FFFEFA]/15" />

                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#C6B993]"
                      aria-hidden="true"
                    />
                    <p className="text-xs leading-relaxed text-[#DBCEAC]">
                      Educational Demo · Mock Data Only · No entry, claim, delivery, or processing
                      fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealFromBottom>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FFFEFA]/15 bg-[#162842] text-[#dce3eb]">
        <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="font-display text-base font-extrabold text-[#FFFEFA]">
                {DEMO_ORG.name}
              </p>
              <p className="mt-1 text-xs text-[#DBCEAC]">
                {DEMO_ORG.theme} · {DEMO_ORG.email}
              </p>
            </div>

            <a
              href="#top"
              onClick={scrollToTop}
              className="inline-flex min-h-[40px] items-center text-xs font-bold uppercase tracking-[0.16em] text-[#C6B993] transition-colors hover:text-[#FFFEFA]"
            >
              Back to top ↑
            </a>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-[#FFFEFA]/15 pt-6 text-xs text-[#c0cad5] md:flex-row md:items-center">
            <span>© 2026 {DEMO_ORG.name} (Educational Demo)</span>
            <span className="max-w-2xl leading-relaxed">
              Educational demonstration using mock data only. Does not collect real personal
              information, process payments, or imply affiliation with any external agency or social
              platform.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
