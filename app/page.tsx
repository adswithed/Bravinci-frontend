import { MegaMenu } from '@/components/mega-menu'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { ServicesSection } from '@/components/services-section'
import { SolutionsSection } from '@/components/solutions-section'
import { IndustriesSection } from '@/components/industries-section'
import { AboutSection } from '@/components/about-section'
import { PartnersSection } from '@/components/partners-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { GlobalSiteWrapper } from '@/components/global-site-wrapper'
import { globalSite } from '@/config/sites'

export const metadata = {
  title: `Home | ${globalSite.name}`,
  description: 'Bravinci partners with forward-thinking organizations to turn strategic intelligence into competitive advantage. Through advanced analytics, artificial intelligence, and deep sector expertise, we help leaders navigate complexity and accelerate meaningful change.',
}

export default function HomePage() {
  return (
    <GlobalSiteWrapper>
      <MegaMenu />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <SolutionsSection />
        <IndustriesSection />
        <AboutSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
