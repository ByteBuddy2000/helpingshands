"use client"
// import { MotionConfig } from 'framer-motion';
import { ScrollProgressBar } from '@/components/ScrollReveal';
import { CampaignIntroAndPrizes } from '@/components/christmas/CampaignIntroAndPrizes';
import { ChristmasHero } from '@/components/christmas/ChristmasHero';
import { DemoNavbar } from '@/components/christmas/DemoNavbar';
import { EventsCarouselSection } from '@/components/christmas/EventsCarouselSection';
import { GovernanceAndContactSection } from '@/components/christmas/GovernanceAndContactSection';
import { HowToEnterAndFormSection } from '@/components/christmas/HowToEnterAndFormSection';
import { TimelineAndEligibilitySection } from '@/components/christmas/TimelineAndEligibilitySection';
import Link from 'next/link';

export default function ChristmasCampaign() {
  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-[#FFFEFA] text-[#17263d]">
      <ScrollProgressBar />

      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#162842] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#FFFEFA]"
      >
        Skip to main content
      </Link>

      <DemoNavbar onTryEntryClick={() => scrollToSection('#enter')} />

      <main id="main-content">
        <ChristmasHero
          onTryForm={() => scrollToSection('#enter')}
          onExploreEvents={() => scrollToSection('#events')}
        />

        <CampaignIntroAndPrizes />

        <EventsCarouselSection />

        <HowToEnterAndFormSection />

        <TimelineAndEligibilitySection />

        <GovernanceAndContactSection />
      </main>
    </div>
    // </MotionConfig>
  );
}
