"use client"
import { useState } from "react"
// import { MotionConfig } from 'framer-motion';
import { ApproachSection } from "@/components/ApproachSection"
import { BranchInfoModal } from "@/components/BranchInfoModal"
import { CommitmentQualitySection } from "@/components/CommitmentQualitySection"
import { ConversionCTASection } from "@/components/ConversionCTASection"
import { CoreValuesSection } from "@/components/CoreValuesSection"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { MissionVisionSection } from "@/components/MissionVisionSection"
import { Navbar } from "@/components/Navbar"
import { ScrollProgressBar } from "@/components/ScrollReveal"
import { WhoWeAreSection } from "@/components/WhoWeAreSection"
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection"
import { ENQUIRY_TOPICS, InfoModalKey } from "@/data/aboutData"
import ChristmasSection from "@/components/ChristmasSection"
import Hero2Section from "@/components/Hero2Section"
import MarqueeStrip from "@/components/MarqueeStrip"
import FAQ from "@/components/Faq"
import Programmes from "@/components/Programme"

export default function LandingPage() {
  const [activeInfoKey, setActiveInfoKey] = useState<InfoModalKey | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<string>(ENQUIRY_TOPICS[0])

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleProceedToEnquiry = (topic: string) => {
    setSelectedTopic(topic)
    scrollToSection("#contact-cta")
  }

  return (
    <>
      <div className="min-h-screen bg-[#FFFEFA] text-[#17263d]">
        <ScrollProgressBar />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-[#162842] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#FFFEFA]"
        >
          Skip to main content
        </a>

        <Navbar
          onOpenInfo={(key) => setActiveInfoKey(key)}
          onContactClick={() => scrollToSection("#contact-cta")}
        />

        <main id="main-content">
          <HeroSection
            onPrimaryCta={() => scrollToSection("#contact-cta")}
            onSecondaryCta={() => scrollToSection("#approach")}
          />

          {/* <Hero2Section /> */}

          <WhoWeAreSection
            onLearnMoreClick={() => scrollToSection("#core-values")}
          />

          <MarqueeStrip />

          <ChristmasSection />

          <MissionVisionSection />

          <CoreValuesSection />

          <WhyChooseUsSection />

          <ApproachSection />

          {/* <CommitmentQualitySection /> */}
          <Programmes />

          <FAQ />

          <ConversionCTASection
            selectedTopic={selectedTopic}
            onTopicChange={setSelectedTopic}
          />
        </main>

        <Footer onOpenInfo={(key) => setActiveInfoKey(key)} />

        <BranchInfoModal
          activeKey={activeInfoKey}
          onClose={() => setActiveInfoKey(null)}
          onProceedToEnquiry={handleProceedToEnquiry}
        />
      </div>
    </>
  )
}
