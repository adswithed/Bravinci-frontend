'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Home,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Building2,
  CreditCard,
  Users,
  Wrench,
  BarChart3,
  HardHat,
  ShieldCheck,
  Cpu,
  Sparkles,
} from 'lucide-react'

const challenges = [
  'Title verification and land documentation complexity',
  'Multiple regulatory approvals and compliance requirements',
  'Construction material price volatility and supply delays',
  'Payment collection and instalment plan management',
  'Project delivery timeline and budget management',
  'Post-delivery facility and community management',
]

const solutions = [
  {
    icon: Building2,
    title: 'Property Management',
    description:
      'End-to-end project development management covering land acquisition tracking, regulatory approval workflows, construction phase management, milestone monitoring, budget tracking, and handover coordination providing complete visibility from land purchase through project completion and unit delivery.',
  },
  {
    icon: CreditCard,
    title: 'Financial Operations',
    description:
      'Real estate financial management covering project-level profitability tracking, cash flow forecasting, receivables management, construction cost monitoring, revenue recognition, investor reporting, and management dashboards providing real-time financial visibility across the portfolio.',
  },
  {
    icon: Users,
    title: 'Tenant Management',
    description:
      'Comprehensive sales management systems covering lead capture, prospect nurturing, unit reservation, sales documentation, commission tracking, and customer relationship management with automated communications, sales pipeline analytics, and agent performance dashboards.',
  },
  {
    icon: Wrench,
    title: 'Facility Maintenance',
    description:
      'Post-delivery facility management systems covering maintenance request tracking, vendor coordination, service charge administration, common area management, utility monitoring, tenant communications, and community management for residential and commercial estates.',
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence',
    description:
      'Geographic information system integration enabling spatial visualization of land holdings, project locations, infrastructure mapping, title boundary verification, proximity analysis for market intelligence, and interactive maps for sales and marketing presentations.',
  },
  {
    icon: HardHat,
    title: 'Development Management',
    description:
      'Construction materials and services procurement management covering vendor pre-qualification, quotation comparison, purchase order management, delivery tracking, quality inspection, payment processing, and cost analysis optimizing construction spend across multiple active projects.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance',
    description:
      'Property document control systems managing title documents, survey plans, building approvals, construction drawings, sales agreements, payment receipts, and regulatory certificates with version control, secure storage, access management, and automated filing workflows.',
  },
  {
    icon: Cpu,
    title: 'Technology Integration',
    description:
      'Flexible payment plan administration supporting instalment schedules, milestone-linked payments, mortgage processing coordination, payment tracking, automated reminders, defaulter management, and reconciliation across multiple payment channels including bank transfers, cards, and mobile money.',
  },
]

const outcomes = [
  { stat: '50%', label: 'Faster Project Delivery', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
  { stat: '35%', label: 'Improvement in Collections', accent: 'bg-[#F7AE57]/10', textColor: 'text-[#F7AE57]' },
  { stat: '100%', label: 'Portfolio Visibility', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
]

export function NigeriaRealEstatePage() {
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
                <Home className="w-4 h-4 text-[#0E78AA]" />
                <span>Real Estate</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Intelligent systems for{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Nigeria&apos;s dynamic property sector
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Integrated technology platforms that streamline development, sales,
                and management operations across Nigeria&apos;s real estate value chain.
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
                  <Link href="/nigeria/industries">All Industries</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Challenge & Approach */}
        <section
          id="challenges"
          data-section="challenges"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/5 via-background to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <FadeIn direction="left">
                <div className="p-8 rounded-3xl border border-[#F7AE57]/20 bg-[#F7AE57]/[0.03]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-[#F7AE57]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      <span className="text-foreground">The </span>
                      <span className="bg-gradient-to-r from-[#F7AE57] to-[#e8963a] bg-clip-text text-transparent">Challenge</span>
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Nigerian real estate faces operational complexity: title verification
                    processes, multiple regulatory approvals, construction material price
                    volatility, payment collection challenges, project delivery timelines,
                    customer communication demands, post-delivery facility management, and
                    the need for data-driven decision-making across increasingly large
                    project portfolios.
                  </p>
                  <div className="space-y-3">
                    {challenges.map((challenge, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F7AE57] mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.15}>
                <div className="p-8 rounded-3xl border border-[#0E78AA]/20 bg-[#0E78AA]/[0.03]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-[#0E78AA]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      <span className="text-foreground">Our </span>
                      <span className="bg-gradient-to-r from-[#0E78AA] to-[#0a9ed4] bg-clip-text text-transparent">Approach</span>
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We provide integrated solutions addressing the complete real estate
                    value chain: land acquisition and title management, project development
                    and construction management, sales and marketing automation, payment
                    plan administration, facility management, construction procurement,
                    financial reporting, and GIS integration enabling data-driven decisions
                    across the entire portfolio lifecycle.
                  </p>
                  <div className="space-y-3">
                    {[
                      'End-to-end project development tracking and management',
                      'Automated sales pipelines and customer relationship management',
                      'Flexible payment plan administration and collection tracking',
                      'Construction procurement and cost optimization',
                      'Post-delivery facility and community management platforms',
                      'Portfolio-wide financial analytics and reporting dashboards',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0E78AA] mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section
          id="solutions"
          data-section="solutions"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Real Estate </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Purpose-built capabilities for Nigeria&apos;s property development and management sector.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <StaggerItem key={solution.title}>
                    <div className="group h-full p-6 rounded-2xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                      <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-[#0E78AA]" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Outcomes */}
        <section
          id="outcomes"
          data-section="outcomes"
          className="py-24 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Measurable </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Outcomes</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our real estate solutions deliver measurable improvements in project delivery
                speed, payment collection efficiency, and portfolio-wide operational visibility.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {outcomes.map((outcome) => (
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
                Optimize Real Estate Operations
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Connect with our real estate technology experts to explore how integrated
                platforms can streamline development, sales, and management operations
                across your property portfolio.
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
                  <Link href="/nigeria/industries">All Industries</Link>
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
