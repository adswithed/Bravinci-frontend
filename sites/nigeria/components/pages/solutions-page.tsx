'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Rocket,
  Users,
  Layers,
  Monitor,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  BarChart3,
  Shield,
  Globe,
  TrendingUp,
} from 'lucide-react'

const solutions = [
  {
    icon: Layers,
    title: 'Odoo ERP',
    subtitle: 'Enterprise Resource Planning',
    description:
      'Comprehensive enterprise resource planning platform that Bravinci Nigeria implements and customises for Nigerian organisations. Our Odoo deployments address regulatory requirements, business ecosystem integration, and operational requirements unique to Nigerian markets.',
    href: '/nigeria/solutions/odoo-erp',
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
    borderColor: 'border-[#0E78AA]/20',
    bgTint: 'bg-[#0E78AA]/[0.03]',
    highlights: [
      'Unified business management across all departments',
      'Nigerian compliance and FIRS reporting built-in',
      'Scalable from growing SME to multi-location enterprise',
      'Multi-sector expertise across manufacturing, distribution, energy',
    ],
    stats: { value: '9+', label: 'Integrated Modules' },
  },
  {
    icon: Users,
    title: 'Data2Employ',
    subtitle: 'Workforce Intelligence Platform',
    description:
      'Data2Employ bridges the gap between job seekers and employment by analysing national unemployment rates and industry demands. With interactive dashboards and customisable reports, it provides valuable insights to guide policy decisions.',
    href: '/nigeria/solutions/data2employ',
    color: '#F7AE57',
    accentBg: 'bg-[#F7AE57]/10',
    borderColor: 'border-[#F7AE57]/20',
    bgTint: 'bg-[#F7AE57]/[0.03]',
    highlights: [
      'AI-powered talent matching and skills assessment',
      'Real-time labour market intelligence across Nigeria',
      'Recruitment automation reducing time-to-hire by 45%',
      'Retention analytics with predictive intervention',
    ],
    stats: { value: '6', label: 'Core Modules' },
  },
]

const platformBenefits = [
  {
    icon: Zap,
    title: 'Accelerated Deployment',
    description: 'Purpose-built platforms reduce implementation timelines compared to custom solutions, delivering value faster.',
  },
  {
    icon: Shield,
    title: 'Reduced Risk',
    description: 'Proven technologies refined through multiple deployments, minimising the uncertainty of first-time implementations.',
  },
  {
    icon: Globe,
    title: 'Nigerian Market Focus',
    description: 'Every platform configured for Nigerian regulatory frameworks, business practices, and operational requirements.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Modular architectures growing with your organisation, from initial deployment through enterprise-wide adoption.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description: 'Built-in analytics and reporting providing actionable intelligence for strategic decision-making.',
  },
  {
    icon: Monitor,
    title: 'Continuous Evolution',
    description: 'Platforms continuously enhanced with new capabilities, compliance updates, and performance improvements.',
  },
]

export function NigeriaSolutionsPage() {
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
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0E78AA]/10 blur-[120px] -z-0" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80">
                <Rocket className="w-4 h-4 text-[#0E78AA]" />
                <span>Our Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Purpose-built platforms accelerating{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Nigerian business excellence
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                While our services address client-specific challenges through customised approaches,
                Bravinci Nigeria has also developed and adapted specialised platforms solving recurring
                operational challenges across Nigerian organisations. These solutions represent years
                of domain expertise combined with proven technologies, creating deployable systems
                that accelerate value delivery while reducing implementation risk.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-[#0E78AA] hover:bg-[#0E78AA]/90 text-white font-semibold shadow-lg"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Explore Solutions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href="/nigeria/services">Our Services</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Solution Cards Section */}
        <section
          id="solutions"
          data-section="solutions"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/5 via-background to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Platforms</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialised solutions designed for the Nigerian market, built on proven technologies
                and deep domain expertise.
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-8">
              {solutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <StaggerItem key={solution.title}>
                    <div className={cn(
                      'group rounded-3xl border backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden',
                      solution.borderColor,
                      solution.bgTint
                    )}>
                      <div className="grid lg:grid-cols-5 gap-0">
                        {/* Content Side */}
                        <div className="lg:col-span-3 p-8 md:p-10">
                          <div className="flex items-center gap-4 mb-6">
                            <div
                              className={cn(
                                'w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300',
                                solution.accentBg
                              )}
                            >
                              <Icon className="w-8 h-8" style={{ color: solution.color }} />
                            </div>
                            <div>
                              <p className="text-sm font-medium" style={{ color: solution.color }}>{solution.subtitle}</p>
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-[#0E78AA] transition-colors">
                                {solution.title}
                              </h3>
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {solution.description}
                          </p>

                          <div className="space-y-3 mb-8">
                            {solution.highlights.map((highlight, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: solution.color }} />
                                <span className="text-sm text-muted-foreground">{highlight}</span>
                              </div>
                            ))}
                          </div>

                          <Button
                            size="lg"
                            className="font-semibold shadow-lg text-white"
                            style={{ backgroundColor: solution.color }}
                            asChild
                          >
                            <Link href={solution.href}>
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>

                        {/* Stats / Visual Side */}
                        <div className={cn(
                          'lg:col-span-2 flex items-center justify-center p-8 md:p-10',
                          solution.accentBg
                        )}>
                          <div className="text-center space-y-6">
                            <div className="w-24 h-24 rounded-3xl mx-auto flex items-center justify-center bg-white/80 dark:bg-white/10 shadow-lg">
                              <Icon className="w-12 h-12" style={{ color: solution.color }} />
                            </div>
                            <div>
                              <div className="text-5xl md:text-6xl font-bold" style={{ color: solution.color }}>
                                {solution.stats.value}
                              </div>
                              <p className="text-sm font-medium text-muted-foreground mt-1">
                                {solution.stats.label}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Platform Benefits Section */}
        <section
          id="benefits"
          data-section="benefits"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Choose </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Our Platforms</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Purpose-built advantages delivering faster time-to-value, reduced implementation
                risk, and continuous capability enhancement across Nigerian organisations.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformBenefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <StaggerItem key={benefit.title}>
                    <div className="group h-full p-6 rounded-2xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                      <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-[#0E78AA]" />
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
                Ready to Accelerate Your Business?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Discover how Bravinci Nigeria&apos;s purpose-built platforms can transform
                your operations, talent acquisition, and business management.
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
