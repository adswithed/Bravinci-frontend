/**
 * Individual Solution Page
 *
 * Dynamic route that renders solution content from WordPress CMS.
 * All content comes from WordPress - NO HARDCODED CONTENT.
 */

import { notFound } from 'next/navigation'
import { globalSite } from '@/shared/config/sites/global'
import { getSolutionBySlug, getSolutions, CMSItem } from '@/shared/lib/wordpress'
import { getIcon } from '@/shared/lib/icons'
import { MegaMenu, Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

// Revalidate every 60 seconds
export const revalidate = 60

// Generate static params for all solutions
export async function generateStaticParams() {
  const solutions = await getSolutions(globalSite)
  return solutions.map((solution) => ({
    slug: solution.slug,
  }))
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const solution = await getSolutionBySlug(globalSite, slug)

  if (!solution) {
    return {
      title: 'Solution Not Found',
    }
  }

  return {
    title: `${solution.title} | Bravinci Solutions`,
    description: (solution.description as string) || `${solution.title} - Bravinci Solution`,
  }
}

// Transform WordPress solution data
interface TargetAudience {
  text: string
}

interface FeatureIcon {
  icon: string
  label: string
}

interface Capability {
  icon: string
  title: string
  description: string
  zone?: string
}

interface Outcome {
  stat: string
  label: string
  description: string
  icon: string
}

interface ZoneConfig {
  key: string
  title: string
  subtitle: string
}

interface Solution {
  id: number
  title: string
  slug: string
  badgeText: string
  heroTitle: string
  heroTitleSuffix: string
  description: string
  targetHeadingPrefix: string
  targetTitle: string
  targetDescription: string
  targetAudience: TargetAudience[]
  featureIcons: FeatureIcon[]
  capabilitiesTitle: string
  capabilitiesSubtitle: string
  capabilityZones: ZoneConfig[]
  capabilities: Capability[]
  outcomesTitle: string
  outcomesSubtitle: string
  outcomes: Outcome[]
  ctaTitle: string
  ctaDescription: string
  ctaButtonText: string
  ctaButtonLink: string
  ctaSecondaryText: string
  ctaSecondaryLink: string
  icon: string
  color: string
  href: string
}

function transformSolution(item: CMSItem): Solution {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    badgeText: (item.badge_text as string) || '',
    heroTitle: (item.hero_title as string) || '',
    heroTitleSuffix: (item.hero_title_suffix as string) || '',
    description: (item.description as string) || '',
    targetHeadingPrefix: (item.target_heading_prefix as string) || 'Built for organizations that ',
    targetTitle: (item.target_title as string) || '',
    targetDescription: (item.target_description as string) || '',
    targetAudience: (item.target_audience as TargetAudience[]) || [],
    featureIcons: (item.feature_icons as FeatureIcon[]) || [],
    capabilitiesTitle: (item.capabilities_title as string) || '',
    capabilitiesSubtitle: (item.capabilities_subtitle as string) || '',
    capabilityZones: (item.capability_zones as ZoneConfig[]) || [],
    capabilities: (item.capabilities as Capability[]) || [],
    outcomesTitle: (item.outcomes_title as string) || 'Business Impact',
    outcomesSubtitle: (item.outcomes_subtitle as string) || '',
    outcomes: (item.outcomes as Outcome[]) || [],
    ctaTitle: (item.cta_title as string) || '',
    ctaDescription: (item.cta_description as string) || '',
    ctaButtonText: (item.cta_button_text as string) || 'Get Started',
    ctaButtonLink: (item.cta_button_link as string) || '/contact',
    ctaSecondaryText: (item.cta_secondary_text as string) || 'About Us',
    ctaSecondaryLink: (item.cta_secondary_link as string) || '/about',
    icon: (item.icon as string) || 'shield',
    color: (item.color as string) || '#0E78AA',
    href: (item.href as string) || `/solutions/${item.slug}`,
  }
}

// Group capabilities by zone
function groupCapabilitiesByZone(capabilities: Capability[]) {
  const zones: Record<string, Capability[]> = {}
  const ungrouped: Capability[] = []

  capabilities.forEach((cap) => {
    if (cap.zone) {
      if (!zones[cap.zone]) {
        zones[cap.zone] = []
      }
      zones[cap.zone].push(cap)
    } else {
      ungrouped.push(cap)
    }
  })

  return { zones, ungrouped }
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const rawSolution = await getSolutionBySlug(globalSite, slug)

  if (!rawSolution) {
    notFound()
  }

  const solution = transformSolution(rawSolution)
  const BadgeIcon = getIcon(solution.icon)
  const { zones, ungrouped } = groupCapabilitiesByZone(solution.capabilities)
  const hasZones = Object.keys(zones).length > 0

  // Build zone lookup from WordPress data
  const zoneLookup: Record<string, { title: string; subtitle: string }> = {}
  solution.capabilityZones.forEach((z) => {
    zoneLookup[z.key] = { title: z.title, subtitle: z.subtitle }
  })

  return (
    <GlobalSiteWrapper>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E78AA]/5 via-background to-background" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                <BadgeIcon className="w-4 h-4 text-[#0E78AA]" />
                <span>{solution.badgeText}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">{solution.heroTitle}</span>
                <span className="text-foreground">{solution.heroTitleSuffix}</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        {(solution.targetDescription || solution.targetAudience.length > 0) && (
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="text-foreground">{solution.targetHeadingPrefix}</span>
                    <span className="gradient-text">{solution.targetTitle}</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.targetDescription}
                  </p>
                  {solution.targetAudience.length > 0 && (
                    <div className="space-y-3">
                      {solution.targetAudience.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {solution.featureIcons.length > 0 && (
                  <div className="relative">
                    <div className="p-8 rounded-3xl glass-card">
                      <div className="grid grid-cols-2 gap-4">
                        {solution.featureIcons.map((feature, i) => {
                          const FeatureIcon = getIcon(feature.icon)
                          const isAlternate = i % 2 === 1
                          return (
                            <div
                              key={i}
                              className="p-6 rounded-2xl text-center"
                              style={{
                                backgroundColor: isAlternate ? '#F7AE57' + '10' : '#0E78AA10',
                              }}
                            >
                              <FeatureIcon
                                className="w-8 h-8 mx-auto mb-2"
                                style={{ color: isAlternate ? '#F7AE57' : '#0E78AA' }}
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
        )}

        {/* Capabilities Section - handles both regular and zoned layouts */}
        {hasZones ? (
          // Zoned layout (e.g., Strategy Command Center)
          <>
            {Object.entries(zones).map(([zone, caps], zoneIndex) => {
              const zoneInfo = zoneLookup[zone] || { title: zone, subtitle: '' }
              const isAlternate = zoneIndex % 2 === 1

              return (
                <section
                  key={zone}
                  className="py-20 relative overflow-hidden"
                >
                  {isAlternate && (
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
                  )}
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-foreground">{zoneInfo.title.split('(')[0]}</span>
                        {zoneInfo.title.includes('(') && (
                          <span className="gradient-text"> ({zoneInfo.title.split('(')[1]}</span>
                        )}
                      </h2>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {zoneInfo.subtitle}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {caps.map((capability) => {
                        const CapIcon = getIcon(capability.icon)
                        const bgColor = zone === 'strategy' ? '#F7AE57' : '#0E78AA'
                        return (
                          <div
                            key={capability.title}
                            className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                          >
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                              style={{ backgroundColor: `${bgColor}10` }}
                            >
                              <CapIcon className="w-6 h-6" style={{ color: bgColor }} />
                            </div>
                            <h3
                              className="font-bold text-foreground mb-2 text-sm transition-colors"
                              style={{ ['--hover-color' as string]: bgColor }}
                            >
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
              )
            })}
          </>
        ) : ungrouped.length > 0 ? (
          // Regular capabilities grid (Dividos, Data2Hire style)
          <section className="py-20 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {solution.capabilitiesTitle && (
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-foreground">{solution.capabilitiesTitle.split(' ')[0]} </span>
                    <span className="gradient-text">{solution.capabilitiesTitle.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {solution.capabilitiesSubtitle}
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ungrouped.map((capability) => {
                  const CapIcon = getIcon(capability.icon)
                  return (
                    <div
                      key={capability.title}
                      className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <CapIcon className="w-6 h-6 text-[#0E78AA]" />
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
        ) : null}

        {/* Business Impact Section */}
        {solution.outcomes.length > 0 && (
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {solution.outcomesTitle && (
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-foreground">{solution.outcomesTitle.split(' ')[0]} </span>
                    <span className="gradient-text">{solution.outcomesTitle.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {solution.outcomesSubtitle}
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-8">
                {solution.outcomes.map((outcome) => {
                  const OutcomeIcon = getIcon(outcome.icon)
                  return (
                    <div
                      key={outcome.label}
                      className="group p-8 rounded-3xl glass-card hover-lift text-center transition-all duration-500"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <OutcomeIcon className="w-8 h-8 text-[#0E78AA]" />
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

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {solution.ctaTitle}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {solution.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href={solution.ctaButtonLink}>
                  {solution.ctaButtonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              {solution.ctaSecondaryText && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href={solution.ctaSecondaryLink}>{solution.ctaSecondaryText}</Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
