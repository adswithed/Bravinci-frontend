/**
 * Global Home Page
 *
 * Structure based on Bravinci global Website structure.docx:
 * 1. Hero Section
 * 2. Credibility / Trust Signals (Stats)
 * 3. What We Do (Services)
 * 4. Solutions Snapshot
 * 5. Industries Overview
 * 6. The Bravinci Advantage (About)
 * 7. Partners & Ecosystem Preview
 * 8. Insights / Thought Leadership Preview
 * 9. Closing CTA Section
 */

'use client'

import { MegaMenu, Footer, ServicesSection, SolutionsSection, IndustriesSection, AboutSection, CTASection } from '@/shared/components'
import { GlobalSiteWrapper, HeroSection, StatsSection, PartnersSection, InsightsSection } from '@/sites/global/components'

export function GlobalHomePage() {
  return (
    <GlobalSiteWrapper>
      <MegaMenu />
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Credibility / Trust Signals */}
        <StatsSection />

        {/* 3. What We Do - Capabilities Snapshot */}
        <ServicesSection />

        {/* 4. Solutions Snapshot */}
        <SolutionsSection />

        {/* 5. Industries Overview */}
        <IndustriesSection />

        {/* 6. The Bravinci Advantage / Differentiators */}
        <AboutSection />

        {/* 7. Partners & Ecosystem Preview */}
        <PartnersSection />

        {/* 8. Insights / Thought Leadership Preview */}
        <InsightsSection />

        {/* 9. Closing CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
