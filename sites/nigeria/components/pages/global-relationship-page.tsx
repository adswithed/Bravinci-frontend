/**
 * Nigeria Global Relationship Page
 *
 * How Bravinci Nigeria operates within the global Bravinci network,
 * combining international expertise with Nigerian market insight.
 */

'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Globe,
  ArrowRight,
  Lightbulb,
  MapPin,
  BookOpen,
  Award,
  Shield,
  Zap,
  TrendingUp,
  RefreshCw,
  Flag,
  HeartHandshake,
  Target,
  Sparkles,
} from 'lucide-react'

const partnershipWorks = [
  {
    icon: Lightbulb,
    title: 'Access to Global Innovation',
    description:
      'Nigerian clients benefit from proven methodologies, technology frameworks, and strategic approaches refined across international markets. Solutions incorporating global best practices are adapted specifically for Nigerian business requirements.',
  },
  {
    icon: MapPin,
    title: 'Local Market Adaptation',
    description:
      'Every international methodology undergoes rigorous adaptation for Nigeria\'s regulatory environment, business culture, infrastructure realities, and market dynamics. Global frameworks serve as foundations, not prescriptions.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Transfer',
    description:
      'Continuous exchange of expertise between Nigerian operations and the global network ensures local teams remain at the forefront of industry developments, emerging technologies, and evolving best practices.',
  },
  {
    icon: Award,
    title: 'Regional Expertise',
    description:
      'Bravinci Nigeria serves as the West African hub within the global network, contributing unique insights about regional markets, regulatory frameworks, and business opportunities back to the international organization.',
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'International Standards',
    description:
      'Solutions delivered to globally recognized quality standards, including ISO certifications and international best practice frameworks, ensuring Nigerian organizations compete effectively in global markets.',
  },
  {
    icon: Zap,
    title: 'Innovation Access',
    description:
      'Early access to emerging technologies, analytical methodologies, and strategic frameworks being developed across the global network, providing competitive advantage to Nigerian clients.',
  },
  {
    icon: TrendingUp,
    title: 'Reduced Risk',
    description:
      'Leveraging proven approaches that have been validated across multiple markets reduces implementation risk and accelerates time-to-value for Nigerian organizations.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Enhancement',
    description:
      'Ongoing improvements to methodologies, technologies, and service delivery models based on learnings from global engagements, ensuring Nigerian clients always receive cutting-edge solutions.',
  },
]

const partnershipPrinciples = [
  {
    icon: Flag,
    title: 'Nigerian Leadership',
    description:
      'All Nigerian operations are led by experienced local professionals who understand the market, culture, and regulatory landscape. International support enhances rather than replaces local leadership and decision-making.',
    color: '#0E78AA',
  },
  {
    icon: HeartHandshake,
    title: 'Local Value Creation',
    description:
      'Commitment to developing Nigerian talent, building local capabilities, and creating sustainable value within the Nigerian economy. Our presence strengthens rather than extracts from the local business ecosystem.',
    color: '#F7AE57',
  },
  {
    icon: Target,
    title: 'Market-Appropriate Solutions',
    description:
      'Every solution is designed and delivered with Nigerian market requirements as the primary consideration. Global expertise informs but does not dictate approach, ensuring relevance and effectiveness in local contexts.',
    color: '#0E78AA',
  },
]

export function NigeriaGlobalRelationshipPage() {
  return (
    <>
      <MegaMenu />
      <main>
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0E78AA]/20" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-[#0E78AA]/8 blur-3xl" />
          <div className="absolute bottom-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-[#F7AE57]/8 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40">
            <FadeIn className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-sm font-medium text-white/80">
                <Globe className="w-4 h-4 text-[#F7AE57]" />
                <span>Global Relationship</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Global Expertise Delivered with{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Nigerian Market Insight
                </span>
              </h1>

              <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
                Combining proven international methodologies with specialized local expertise
                for transformative outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-[#0E78AA] hover:bg-[#0a5a80] text-white font-semibold shadow-lg h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Partner With Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/about">About Bravinci Nigeria</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Introduction */}
        <section id="introduction" data-section="introduction" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="max-w-4xl mx-auto">
              <div className="p-8 md:p-10 rounded-3xl border border-[#0E78AA]/20 bg-gradient-to-br from-[#0E78AA]/5 to-transparent">
                <div className="flex items-start gap-4 mb-4">
                  <Sparkles className="w-6 h-6 text-[#0E78AA] mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold text-foreground">International Network, Local Excellence</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bravinci Nigeria operates as part of Bravinci&apos;s international network,
                  combining proven methodologies refined across six continents with specialized
                  expertise in Nigeria&apos;s unique business environment. This relationship ensures
                  Nigerian clients access global innovation while receiving solutions specifically
                  adapted to local requirements, regulatory frameworks, and market dynamics.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* How Partnership Works */}
        <section id="partnership-works" data-section="partnership-works" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">How the Partnership </span>
                <span className="text-[#0E78AA]">Works</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A structured relationship that maximizes value for Nigerian organizations.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {partnershipWorks.map((item, index) => {
                const Icon = item.icon
                const borderColor = index % 2 === 0 ? 'border-l-[#0E78AA]' : 'border-l-[#F7AE57]'
                const iconBg = index % 2 === 0 ? 'bg-[#0E78AA]/10' : 'bg-[#F7AE57]/10'
                const iconColor = index % 2 === 0 ? 'text-[#0E78AA]' : 'text-[#F7AE57]'
                return (
                  <StaggerItem key={item.title}>
                    <div
                      className={cn(
                        'group p-6 rounded-2xl glass-card hover-lift transition-all duration-500 border-l-4',
                        borderColor
                      )}
                    >
                      <div className={cn(
                        'w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
                        iconBg
                      )}>
                        <Icon className={cn('w-7 h-7', iconColor)} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" data-section="benefits" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Benefits to </span>
                <span className="text-[#0E78AA]">Nigerian Organizations</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tangible advantages delivered through our global partnership model.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <StaggerItem key={benefit.title}>
                    <div className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500 h-full">
                      <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-[#0E78AA]" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Partnership Principles */}
        <section id="partnership-principles" data-section="partnership-principles" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Partnership </span>
                <span className="text-[#0E78AA]">Principles</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The values that define how we operate within Nigeria.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {partnershipPrinciples.map((principle) => {
                const Icon = principle.icon
                return (
                  <StaggerItem key={principle.title}>
                    <div
                      className="p-8 rounded-3xl glass-card hover-lift transition-all duration-500 border-l-4 h-full"
                      style={{ borderLeftColor: principle.color }}
                    >
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${principle.color}15` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: principle.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0E78AA]/90 to-slate-950" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Leverage Global Expertise for Nigerian Success
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Discover how our unique combination of international capabilities and local
                market expertise can accelerate your organisation&apos;s transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/services">Explore Services</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
