'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Landmark,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Monitor,
  BarChart3,
  Calculator,
  Users,
  Building2,
  Shield,
  ShieldCheck,
  Network,
  Sparkles,
} from 'lucide-react'

const challenges = [
  'Citizen demand for transparent, digital-first services',
  'Budget constraints and revenue optimization pressure',
  'Complex procurement regulations and compliance requirements',
  'Legacy systems and fragmented data across agencies',
  'Workforce capability gaps in digital skills',
  'Inter-agency coordination and data sharing challenges',
]

const solutions = [
  {
    icon: Monitor,
    title: 'Digital Service Delivery',
    description:
      'Citizen-facing digital platforms enabling online service requests, application tracking, payment processing, and feedback collection that reduce in-person visits, eliminate bottlenecks, improve service quality, and increase citizen satisfaction with government services.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Governance',
    description:
      'Data analytics platforms that aggregate information across government systems enabling evidence-based policy formulation, programme evaluation, performance benchmarking, trend analysis, and predictive modelling for improved governance outcomes.',
  },
  {
    icon: Calculator,
    title: 'Financial Management',
    description:
      'Integrated financial management platforms covering budgeting, appropriation tracking, expenditure management, payment processing, accounts reconciliation, and financial reporting aligned with IPSAS standards and Nigerian government accounting requirements.',
  },
  {
    icon: Users,
    title: 'Citizen Engagement',
    description:
      'Comprehensive revenue management systems covering tax assessment, billing, collection, reconciliation, and reporting across multiple revenue streams including taxes, levies, fees, and fines with integration to payment gateways and banking systems.',
  },
  {
    icon: Building2,
    title: 'Infrastructure Management',
    description:
      'Capital project monitoring systems providing real-time visibility into project progress, budget utilization, contractor performance, milestone tracking, and outcome reporting enabling evidence-based decision-making and accountability for public investments.',
  },
  {
    icon: Shield,
    title: 'Workforce Modernisation',
    description:
      'Public sector HR management systems covering employee records, payroll processing, pension administration, leave management, performance evaluation, training tracking, and workforce planning with biometric integration and ghost worker elimination capabilities.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    description:
      'Government cybersecurity frameworks covering threat assessment, security architecture design, identity and access management, data protection, incident response planning, and compliance with NITDA guidelines and Nigeria Data Protection Regulation requirements.',
  },
  {
    icon: Network,
    title: 'Interoperability',
    description:
      'End-to-end procurement management systems covering requisition, bid management, vendor evaluation, contract administration, delivery tracking, and payment processing aligned with the Public Procurement Act and state procurement regulations.',
  },
]

const outcomes = [
  { stat: '70%', label: 'Reduction in Processing Time', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
  { stat: '45%', label: 'Increase in Revenue Collection', accent: 'bg-[#F7AE57]/10', textColor: 'text-[#F7AE57]' },
  { stat: '90%', label: 'Citizen Satisfaction Rate', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
]

export function NigeriaPublicSectorPage() {
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
                <Landmark className="w-4 h-4 text-[#0E78AA]" />
                <span>Public Sector</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Modernizing Nigerian government for{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  enhanced service delivery
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Technology-driven transformation that improves transparency, operational
                efficiency, and citizen satisfaction across government institutions.
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
                    Nigerian public sector organizations face pressure for transparency,
                    efficiency, and modern service delivery while navigating budget
                    constraints, complex procurement regulations, legacy systems, workforce
                    capability gaps, inter-agency coordination challenges, and citizen
                    expectations for digital-first government services.
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
                    We bring private sector innovation discipline to public sector
                    transformation while respecting governance requirements, procurement
                    processes, political realities, and the unique operational context of
                    Nigerian government institutions. Our solutions are designed for
                    scalability, security, and sustainability beyond individual
                    administration cycles.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Digital service delivery platforms reducing citizen wait times',
                      'Integrated financial management meeting IPSAS standards',
                      'Revenue collection systems increasing government income',
                      'HR systems eliminating ghost workers and automating payroll',
                      'Procurement platforms ensuring transparency and compliance',
                      'Analytics dashboards enabling evidence-based governance',
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
                <span className="text-foreground">Public Sector </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Purpose-built capabilities for Nigerian government modernization.
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
                Our public sector solutions deliver transformative improvements in service
                delivery speed, revenue collection, and citizen satisfaction across
                government institutions.
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
                Transform Public Service Delivery
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Connect with our public sector technology experts to explore how modern
                platforms can enhance transparency, efficiency, and citizen satisfaction
                across your government institution.
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
