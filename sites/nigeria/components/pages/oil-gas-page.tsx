'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Flame,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Settings,
  Activity,
  ShieldAlert,
  Truck,
  Scale,
  Calculator,
  Users,
  Cpu,
  Sparkles,
} from 'lucide-react'

const challenges = [
  'Intense DPR regulatory oversight and reporting requirements',
  'NCDMB local content compliance and documentation',
  'Operational safety and HSE management complexity',
  'Environmental compliance and community relations',
  'Aging infrastructure and asset integrity management',
  'Volatile commodity pricing and cost optimization pressure',
]

const solutions = [
  {
    icon: Settings,
    title: 'Asset Management',
    description:
      'Comprehensive asset lifecycle management from commissioning through decommissioning, preventive and predictive maintenance scheduling, spare parts optimization, equipment reliability tracking, and integration with production systems ensuring maximum asset availability across upstream and downstream facilities.',
  },
  {
    icon: Activity,
    title: 'Production Optimisation',
    description:
      'Real-time production monitoring and optimization covering well performance tracking, production allocation, flow assurance management, reservoir surveillance, and operations coordination across multiple facilities with integrated dashboards providing complete operational visibility.',
  },
  {
    icon: Scale,
    title: 'Regulatory Compliance',
    description:
      'Automated compliance management for Department of Petroleum Resources reporting requirements, Nigerian Content Development and Monitoring Board local content submissions, environmental impact assessment tracking, license and permit management, and audit trail maintenance across all regulatory obligations.',
  },
  {
    icon: Truck,
    title: 'Supply Chain Management',
    description:
      'End-to-end contractor management including pre-qualification, performance evaluation, contract administration, and payment processing alongside supply chain optimization covering procurement, materials management, logistics coordination, and local content compliance tracking.',
  },
  {
    icon: ShieldAlert,
    title: 'Safety Management',
    description:
      'HSE management systems covering incident reporting and investigation, permit-to-work management, safety observation tracking, environmental monitoring, emergency response coordination, and compliance reporting meeting Nigerian oil and gas industry safety standards and environmental regulations.',
  },
  {
    icon: Calculator,
    title: 'Financial Management',
    description:
      'Oil and gas financial management including joint venture accounting, production sharing contract administration, revenue allocation, cost recovery tracking, budget management, procurement financial controls, and tax compliance with reporting aligned to Nigerian petroleum fiscal terms.',
  },
  {
    icon: Users,
    title: 'Workforce Management',
    description:
      'Integrated logistics management for onshore and offshore operations covering marine logistics coordination, aviation scheduling, warehouse and inventory management, materials tracking, customs and import documentation, and last-mile delivery optimization across operational locations.',
  },
  {
    icon: Cpu,
    title: 'Technology Integration',
    description:
      'Enterprise document control systems managing engineering drawings, technical documents, regulatory submissions, contracts, HSE records, and operational procedures with version control, approval workflows, access management, and retention policies meeting industry standards.',
  },
]

const outcomes = [
  { stat: '40%', label: 'Operational Efficiency Gain', accent: 'bg-[#F7AE57]/10', textColor: 'text-[#F7AE57]' },
  { stat: '99%', label: 'Regulatory Compliance Rate', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
  { stat: '60%', label: 'Faster Reporting Cycles', accent: 'bg-[#F7AE57]/10', textColor: 'text-[#F7AE57]' },
]

export function NigeriaOilGasPage() {
  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Dark Hero Section */}
        <section
          id="hero"
          data-section="hero"
          className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#F7AE57]/10"
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#F7AE57]/8 blur-[120px] -z-0" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80">
                <Flame className="w-4 h-4 text-[#F7AE57]" />
                <span>Oil &amp; Gas</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Technology solutions for{' '}
                <span className="bg-gradient-to-r from-[#F7AE57] to-[#0E78AA] bg-clip-text text-transparent">
                  Nigeria&apos;s energy sector
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Integrated technology platforms that enhance operational efficiency,
                ensure regulatory compliance, and drive performance across upstream,
                midstream, and downstream operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-[#F7AE57] text-slate-900 hover:bg-[#F7AE57]/90 font-semibold shadow-lg shadow-[#F7AE57]/25"
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
                    Nigerian oil and gas operators navigate intense regulatory oversight,
                    complex local content requirements, operational safety imperatives,
                    environmental compliance obligations, volatile commodity pricing,
                    aging infrastructure maintenance demands, and increasing pressure for
                    operational transparency and efficiency in an evolving energy landscape.
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
                    We deliver integrated solutions addressing the complete operational
                    spectrum. Our platforms connect asset management, HSE, contractor
                    management, regulatory compliance, production operations, financial
                    controls, logistics, and document management into unified systems
                    providing real-time visibility and actionable intelligence across
                    your entire operation.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Unified operational platforms connecting all functions',
                      'Automated DPR and NCDMB regulatory reporting',
                      'Integrated HSE management and incident tracking',
                      'Real-time production monitoring and optimization',
                      'Joint venture and PSC financial management',
                      'End-to-end contractor and supply chain management',
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
                <span className="text-foreground">Energy Sector </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Purpose-built capabilities for Nigeria&apos;s oil and gas operations.
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
                Our energy sector solutions deliver significant improvements in operational
                efficiency, regulatory compliance, and reporting speed across oil and gas operations.
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
                Optimize Energy Operations
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Connect with our energy sector technology experts to explore how integrated
                platforms can enhance operational efficiency, ensure compliance, and drive
                performance across your operations.
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
