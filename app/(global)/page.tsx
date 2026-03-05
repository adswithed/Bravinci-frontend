/**
 * Global Home Page Route
 *
 * Fetches content from WordPress CMS and renders the home page.
 * Falls back to hardcoded content if WordPress is unavailable.
 */

import { globalSite } from '@/shared/config/sites/global'
import {
  getServices,
  getSolutions,
  getIndustries,
  getStats,
  getTestimonials,
  getPartners,
  getInsights,
  CMSItem,
} from '@/shared/lib/wordpress'
import { MegaMenu, Footer, ServicesSection, SolutionsSection, IndustriesSection, AboutSection, CTASection } from '@/shared/components'
import { GlobalSiteWrapper, HeroSection, StatsSection, PartnersSection, InsightsSection } from '@/sites/global/components'
import { TestimonialsSection } from '@/shared/components/testimonials-section'

// Transform WordPress data to component props
// WordPress returns fields with prefixes like service_description, stat_value, etc.
function transformServices(items: CMSItem[]) {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    description: (item.service_description as string) || '',
    icon: (item.service_icon as string) || 'lightbulb',
    features: (item.service_features as string[]) || [],
    gradient: item.service_gradient as string,
    iconBg: item.service_icon_bg as string,
    href: item.service_href as string,
  }))
}

function transformSolutions(items: CMSItem[]) {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    description: (item.solution_description as string) || '',
    icon: (item.solution_icon as string) || 'shield',
    badge: item.solution_badge as string,
    features: (item.solution_features as string[]) || [],
    href: item.solution_href as string,
    isFeatured: item.solution_is_featured === '1' || item.solution_is_featured === true,
  }))
}

function transformIndustries(items: CMSItem[]) {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    description: (item.industry_description as string) || '',
    icon: (item.industry_icon as string) || 'landmark',
    color: item.industry_color as string,
    href: item.industry_href as string,
  }))
}

function transformStats(items: CMSItem[]) {
  return items.map((item) => ({
    id: item.id,
    value: parseInt(item.stat_value as string) || 0,
    prefix: (item.stat_prefix as string) || '',
    suffix: (item.stat_suffix as string) || '',
    label: item.title,
    description: (item.stat_description as string) || '',
    icon: (item.stat_icon as string) || 'award',
  }))
}

function transformTestimonials(items: CMSItem[]) {
  return items.map((item) => ({
    id: item.id,
    name: item.title,
    role: (item.testimonial_role as string) || '',
    text: (item.testimonial_text as string) || '',
    image: item.testimonial_image as string,
  }))
}

function transformPartners(items: CMSItem[]) {
  return items.map((item) => ({
    id: item.id,
    name: item.title,
    description: (item.partner_description as string) || '',
    logo: item.partner_logo as string,
    url: item.partner_url as string,
  }))
}

function transformInsights(items: CMSItem[]) {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    description: (item.insight_description as string) || '',
    icon: (item.insight_icon as string) || 'target',
    gradient: item.insight_gradient as string,
    href: item.insight_href as string,
  }))
}

// Fetch all content from WordPress in parallel
async function getHomePageContent() {
  const [services, solutions, industries, stats, testimonials, partners, insights] = await Promise.all([
    getServices(globalSite),
    getSolutions(globalSite),
    getIndustries(globalSite),
    getStats(globalSite),
    getTestimonials(globalSite),
    getPartners(globalSite),
    getInsights(globalSite),
  ])

  return {
    services: services.length > 0 ? transformServices(services) : undefined,
    solutions: solutions.length > 0 ? transformSolutions(solutions) : undefined,
    industries: industries.length > 0 ? transformIndustries(industries) : undefined,
    stats: stats.length > 0 ? transformStats(stats) : undefined,
    testimonials: testimonials.length > 0 ? transformTestimonials(testimonials) : undefined,
    partners: partners.length > 0 ? transformPartners(partners) : undefined,
    insights: insights.length > 0 ? transformInsights(insights) : undefined,
  }
}

export default async function HomePage() {
  const content = await getHomePageContent()

  return (
    <GlobalSiteWrapper>
      <MegaMenu />
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Credibility / Trust Signals */}
        <StatsSection stats={content.stats} />

        {/* 3. What We Do - Capabilities Snapshot */}
        <ServicesSection services={content.services} />

        {/* 4. Solutions Snapshot */}
        <SolutionsSection solutions={content.solutions} />

        {/* 5. Industries Overview */}
        <IndustriesSection industries={content.industries} />

        {/* 6. The Bravinci Advantage / Differentiators */}
        <AboutSection />

        {/* 7. Client Testimonials */}
        <TestimonialsSection testimonials={content.testimonials} />

        {/* 8. Partners & Ecosystem Preview */}
        <PartnersSection partners={content.partners} />

        {/* 9. Insights / Thought Leadership Preview */}
        <InsightsSection insights={content.insights} />

        {/* 10. Closing CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}

// Revalidate every 60 seconds
export const revalidate = 60
