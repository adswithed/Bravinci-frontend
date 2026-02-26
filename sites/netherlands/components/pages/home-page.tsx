/**
 * Netherlands Home Page
 */

'use client'

import { MegaMenu, Footer, CountryHeroSection, SolutionsSection, ServicesSection, AboutSection, TestimonialsSection, TrustSection, CTASection } from '@/shared/components'
import { NetherlandsStats, NetherlandsValue } from '@/sites/netherlands/components'

export function NetherlandsHomePage() {
  return (
    <>
      <MegaMenu />
      <main>
        <CountryHeroSection />
        <NetherlandsValue />
        <SolutionsSection />
        <ServicesSection />
        <NetherlandsStats />
        <AboutSection />
        <TestimonialsSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
