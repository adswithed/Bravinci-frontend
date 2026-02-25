import { MegaMenu } from '@/components/mega-menu'
import { CountryHeroSection } from '@/components/country-hero-section'
import { ValueSection } from '@/components/value-section'
import { SolutionsSection } from '@/components/solutions-section'
import { ServicesSection } from '@/components/services-section'
import { StatsSection } from '@/components/stats-section'
import { AboutSection } from '@/components/about-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { TrustSection } from '@/components/trust-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { getSiteConfig } from '@/config/sites'

interface PageProps {
  params: Promise<{ site: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { site: siteSlug } = await params
  const site = getSiteConfig(siteSlug)

  return {
    title: `Home | ${site.name}`,
    description: site.seo.defaultDescription,
  }
}

export default async function HomePage({ params }: PageProps) {
  const { site: siteSlug } = await params
  const site = getSiteConfig(siteSlug)

  // In the future, fetch page content from WordPress:
  // const pageContent = await getPage(site, 'home')

  return (
    <>
      <MegaMenu />
      <main>
        <CountryHeroSection />
        <ValueSection />
        <SolutionsSection />
        <ServicesSection />
        <StatsSection />
        <AboutSection />
        <TestimonialsSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
