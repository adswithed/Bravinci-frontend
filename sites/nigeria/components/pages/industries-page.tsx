'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Landmark,
  Flame,
  Home,
  Factory,
  ArrowRight,
  Building2,
  CheckCircle2,
  Sparkles,
  Shield,
  Cpu,
  TrendingUp,
} from 'lucide-react'

const industries = [
  {
    icon: Landmark,
    title: 'Public Sector',
    description:
      'Our public sector practice brings private sector innovation discipline while respecting government operational realities, delivering digital service delivery platforms, financial management systems, revenue collection optimization, human resource management, procurement and contract management, project monitoring, policy analytics, and cybersecurity frameworks that enhance transparency, efficiency, and citizen satisfaction.',
    href: '/nigeria/industries/public-sector',
    accent: '#0E78AA',
    gradient: 'from-[#0E78AA]/10 to-[#0E78AA]/[0.02]',
    borderColor: 'border-[#0E78AA]/20',
  },
  {
    icon: Flame,
    title: 'Oil and Gas',
    description:
      'Our energy practice delivers integrated solutions addressing the complete operational spectrum: asset management and maintenance, contractor and supply chain management, HSE compliance and incident tracking, regulatory reporting for DPR and NCDMB, production monitoring and optimization, financial management, logistics coordination, and document control systems built for Nigeria\u2019s upstream, midstream, and downstream operations.',
    href: '/nigeria/industries/oil-gas',
    accent: '#F7AE57',
    gradient: 'from-[#F7AE57]/10 to-[#F7AE57]/[0.02]',
    borderColor: 'border-[#F7AE57]/20',
  },
  {
    icon: Home,
    title: 'Real Estate',
    description:
      'Our real estate practice provides integrated solutions addressing the complete value chain: land acquisition and title management, project development and construction management, sales and CRM, payment plan administration, facility management, construction procurement, financial reporting, and GIS integration for Nigeria\u2019s dynamic property development market.',
    href: '/nigeria/industries/real-estate',
    accent: '#0E78AA',
    gradient: 'from-[#0E78AA]/10 to-[#0E78AA]/[0.02]',
    borderColor: 'border-[#0E78AA]/20',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description:
      'Our manufacturing practice delivers intelligence solutions addressing Nigerian production environments: production planning and scheduling, inventory and materials management, quality management and traceability, equipment maintenance, supply chain and procurement, production costing, sales order and distribution, regulatory compliance for NAFDAC, SON, and FIRS, and business intelligence dashboards.',
    href: '/nigeria/industries/manufacturing',
    accent: '#F7AE57',
    gradient: 'from-[#F7AE57]/10 to-[#F7AE57]/[0.02]',
    borderColor: 'border-[#F7AE57]/20',
  },
]

const differentiators = [
  {
    icon: Shield,
    title: 'Regulatory Knowledge',
    description:
      'Deep understanding of sector-specific regulations, compliance requirements, and government oversight frameworks across Nigerian industries.',
    accent: '#0E78AA',
  },
  {
    icon: Cpu,
    title: 'Operational Context',
    description:
      'Solutions designed around actual operational workflows, stakeholder dynamics, and business models specific to each industry sector.',
    accent: '#F7AE57',
  },
  {
    icon: TrendingUp,
    title: 'Proven Frameworks',
    description:
      'Battle-tested implementation methodologies refined through engagements across Nigeria\u2019s most demanding industry environments.',
    accent: '#0E78AA',
  },
]

export function NigeriaIndustriesPage() {
  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Dark Hero Section */}
        <section
          id="hero"
          data-section="hero"
          className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0E78AA]/20"
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 -z-0 opacity-[0.07]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0E78AA]/10 blur-[120px] -z-0" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80">
                <Building2 className="w-4 h-4 text-[#0E78AA]" />
                <span>Industries</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Specialized expertise driving{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  transformation across Nigeria&apos;s critical sectors
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Strategic intelligence and transformation requirements vary significantly
                across industries. Regulatory frameworks, competitive dynamics, operational
                models, and stakeholder expectations create unique challenges demanding
                specialized expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-[#0E78AA] text-white hover:bg-[#0E78AA]/90 font-semibold shadow-lg shadow-[#0E78AA]/25"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href="/nigeria/services">Our Services</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Industries Grid */}
        <section
          id="industries"
          data-section="industries"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/5 via-background to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our Industry </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep domain knowledge combined with technology capabilities to deliver
                sector-specific transformation.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {industries.map((industry) => {
                const Icon = industry.icon
                return (
                  <StaggerItem key={industry.title}>
                    <Link href={industry.href} className="group block h-full">
                      <div
                        className={cn(
                          'h-full p-8 rounded-3xl border backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500',
                          industry.borderColor,
                          `bg-gradient-to-br ${industry.gradient}`
                        )}
                      >
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: `${industry.accent}15` }}
                        >
                          <Icon className="w-8 h-8" style={{ color: industry.accent }} />
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                          {industry.title}
                        </h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {industry.description}
                        </p>

                        <div
                          className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                          style={{ color: industry.accent }}
                        >
                          Explore {industry.title}
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Why Specialized Expertise */}
        <section
          id="expertise"
          data-section="expertise"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Specialized </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Expertise Matters</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Generic approaches fail in complex industries. Our sector-specific teams
                understand your regulatory environment, competitive dynamics, and operational
                realities.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {differentiators.map((item) => {
                const Icon = item.icon
                return (
                  <StaggerItem key={item.title}>
                    <div className="text-center p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        style={{ backgroundColor: `${item.accent}15` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: item.accent }} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Stats Section */}
        <section
          id="stats"
          data-section="stats"
          className="py-24 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Proven </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Impact</span>
              </h2>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-4 gap-8">
              {[
                { stat: '4', label: 'Industry Verticals', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
                { stat: '30+', label: 'Solutions Deployed', accent: 'bg-[#F7AE57]/10', textColor: 'text-[#F7AE57]' },
                { stat: '100%', label: 'Nigerian Context', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
                { stat: '360\u00B0', label: 'End-to-End Coverage', accent: 'bg-[#F7AE57]/10', textColor: 'text-[#F7AE57]' },
              ].map((outcome) => (
                <StaggerItem key={outcome.label}>
                  <div className={cn(
                    'p-8 rounded-3xl text-center hover:-translate-y-1 transition-all duration-500',
                    outcome.accent
                  )}>
                    <div className={cn('text-5xl md:text-6xl font-bold mb-3', outcome.textColor)}>
                      {outcome.stat}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {outcome.label}
                    </h3>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          data-section="cta"
          className="relative py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E78AA] via-[#0E78AA]/90 to-[#0a5a80]" />
          <div className="absolute inset-0 opacity-[0.07]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90">
                <Sparkles className="w-4 h-4" />
                <span>Get Started</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Discover How We Can Help Your Industry
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Every industry faces unique challenges requiring specialized expertise.
                Let&apos;s discuss how our sector-specific capabilities can accelerate
                transformation in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href="/nigeria/about">About Us</Link>
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
