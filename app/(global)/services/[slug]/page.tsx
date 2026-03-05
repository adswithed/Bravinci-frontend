/**
 * Individual Service Page
 *
 * Dynamic route for individual service pages.
 * Fetches service by slug from WordPress CMS.
 * Layout matches the original individual service pages EXACTLY.
 */

import { notFound } from 'next/navigation'
import { globalSite } from '@/shared/config/sites/global'
import { getServiceBySlug, getServices, CMSItem } from '@/shared/lib/wordpress'
import { getIcon } from '@/shared/lib/icons'
import { MegaMenu, Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

// Revalidate every 60 seconds
export const revalidate = 60

// Generate static params for all services
export async function generateStaticParams() {
  const services = await getServices(globalSite)
  return services.map((service) => ({
    slug: service.slug,
  }))
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(globalSite, slug)

  if (!service) {
    return {
      title: 'Service Not Found | Bravinci',
    }
  }

  return {
    title: `${service.title} | Bravinci Services`,
    description: (service.description as string) || '',
  }
}

// Transform WordPress service data - matches original individual service pages
interface SolutionPoint {
  text: string
}

interface SolutionFeature {
  icon: string
  label: string
}

interface Capability {
  title: string
  description: string
  icon: string
}

interface Outcome {
  stat: string
  label: string
  description: string
  icon: string
}

interface Service {
  id: number
  title: string
  slug: string
  heroText: string
  description: string
  problemStatement: string
  solutionHeadline: string
  solution: string
  solutionPoints: SolutionPoint[]
  solutionFeatures: SolutionFeature[]
  icon: string
  color: string
  capabilitiesSubtitle: string
  capabilities: Capability[]
  outcomesSubtitle: string
  outcomes: Outcome[]
  ctaText: string
  ctaButtonText: string
  href: string
}

function transformService(item: CMSItem): Service {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    heroText: (item.hero_text as string) || '',
    description: (item.description as string) || '',
    problemStatement: (item.problem_statement as string) || '',
    solutionHeadline: (item.solution_headline as string) || '',
    solution: (item.solution as string) || '',
    solutionPoints: (item.solution_points as SolutionPoint[]) || [],
    solutionFeatures: (item.solution_features as SolutionFeature[]) || [],
    icon: (item.icon as string) || 'compass',
    color: (item.color as string) || '#0E78AA',
    capabilitiesSubtitle: (item.capabilities_subtitle as string) || '',
    capabilities: (item.capabilities as Capability[]) || [],
    outcomesSubtitle: (item.outcomes_subtitle as string) || '',
    outcomes: (item.outcomes as Outcome[]) || [],
    ctaText: (item.cta_text as string) || 'Get Started',
    ctaButtonText: (item.cta_button_text as string) || 'Get Started',
    href: (item.href as string) || `/services/${item.slug}`,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Fetch service from WordPress - NO FALLBACK
  const rawService = await getServiceBySlug(globalSite, slug)

  if (!rawService) {
    notFound()
  }

  const service = transformService(rawService)
  const ServiceIcon = getIcon(service.icon)

  return (
    <GlobalSiteWrapper>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section - matches original */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E78AA]/5 via-background to-background" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                <ServiceIcon className="w-4 h-4" style={{ color: service.color }} />
                <span>{service.title}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">{service.heroText.split(' ').slice(0, -2).join(' ')} </span>
                <span className="gradient-text">{service.heroText.split(' ').slice(-2).join(' ')}</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.problemStatement}
              </p>
            </div>
          </div>
        </section>

        {/* Solution Framing Section - matches original */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">{service.solutionHeadline.split(' ').slice(0, -2).join(' ')} </span>
                  <span className="gradient-text">{service.solutionHeadline.split(' ').slice(-2).join(' ')}</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.solution}
                </p>
                <div className="space-y-3">
                  {service.solutionPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: service.color }} />
                      <span className="text-muted-foreground">{point.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {service.solutionFeatures.length > 0 && (
                <div className="relative">
                  <div className="p-8 rounded-3xl glass-card">
                    <div className="grid grid-cols-2 gap-4">
                      {service.solutionFeatures.map((feature, i) => {
                        const FeatureIcon = getIcon(feature.icon)
                        const isAlternate = i % 2 === 1
                        return (
                          <div
                            key={i}
                            className="p-6 rounded-2xl text-center"
                            style={{
                              backgroundColor: isAlternate ? '#F7AE57' + '10' : `${service.color}10`,
                            }}
                          >
                            <FeatureIcon
                              className="w-8 h-8 mx-auto mb-2"
                              style={{ color: isAlternate ? '#F7AE57' : service.color }}
                            />
                            <p className="text-sm text-muted-foreground">{feature.label}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Capabilities Section - matches original with descriptions */}
        {service.capabilities.length > 0 && (
          <section className="py-20 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-foreground">Our </span>
                  <span className="gradient-text">Capabilities</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {service.capabilitiesSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.capabilities.map((capability, i) => {
                  const CapIcon = getIcon(capability.icon)
                  return (
                    <div
                      key={i}
                      className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${service.color}10` }}
                      >
                        <CapIcon className="w-6 h-6" style={{ color: service.color }} />
                      </div>
                      <h3 className="font-bold text-foreground mb-2 text-sm group-hover:text-[#0E78AA] transition-colors">
                        {capability.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Measurable Outcomes Section - stat cards matching original */}
        {service.outcomes.length > 0 && (
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-foreground">Measurable </span>
                  <span className="gradient-text">Outcomes</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {service.outcomesSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {service.outcomes.map((outcome, i) => {
                  const OutcomeIcon = getIcon(outcome.icon)
                  return (
                    <div
                      key={i}
                      className="group p-8 rounded-3xl glass-card hover-lift text-center transition-all duration-500"
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${service.color}10` }}
                      >
                        <OutcomeIcon className="w-8 h-8" style={{ color: service.color }} />
                      </div>

                      <div className="text-5xl font-bold gradient-text mb-2">
                        {outcome.stat}
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-3">
                        {outcome.label}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {outcome.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section - single button, fully CMS-editable */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {service.ctaText}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {service.description}
            </p>
            <Button
              size="lg"
              className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
              asChild
            >
              <Link href="/contact">
                {service.ctaButtonText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
