'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Factory,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  CalendarClock,
  ShieldCheck,
  Truck,
  Package,
  Calculator,
  Wrench,
  Scale,
  Users,
  Cpu,
  Sparkles,
} from 'lucide-react'

const challenges = [
  'Raw material price volatility and import dependency',
  'SON quality standards and NAFDAC registration compliance',
  'Skilled labour shortages across production roles',
  'Supply chain disruptions and logistics challenges',
  'Power supply unreliability affecting production schedules',
  'Foreign exchange fluctuations impacting input costs',
]

const solutions = [
  {
    icon: CalendarClock,
    title: 'Production Planning & Scheduling',
    description:
      'Intelligent production planning systems that optimize capacity utilization, manage multi-product scheduling across production lines, handle make-to-order and make-to-stock workflows, and adapt to Nigerian supply chain realities including material availability fluctuations and power supply constraints.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control & Traceability',
    description:
      'End-to-end quality management systems covering incoming material inspection, in-process quality checks, finished goods testing, and customer complaint tracking with full traceability from raw materials to finished products supporting NAFDAC and SON audit requirements.',
  },
  {
    icon: Truck,
    title: 'Supply Chain Management',
    description:
      'Supplier management and evaluation systems, purchase order automation, import documentation and customs tracking, local content sourcing optimization, vendor payment management, and supply chain risk monitoring addressing Nigerian procurement complexities.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description:
      'Real-time inventory visibility across warehouses and production floors, automated reorder point management accounting for Nigerian import lead times, materials requirement planning integrated with production schedules, and waste reduction analytics for raw materials and finished goods.',
  },
  {
    icon: Calculator,
    title: 'Cost Optimisation',
    description:
      'Accurate production cost tracking including raw materials, labour, overhead allocation, and energy costs with real-time cost variance analysis, product profitability reporting, and what-if costing scenarios for pricing decisions in volatile input cost environments.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Management',
    description:
      'Preventive and predictive maintenance management for production equipment, spare parts inventory optimization, maintenance scheduling that minimizes production disruption, equipment lifecycle tracking, and integration with production planning to coordinate maintenance windows.',
  },
  {
    icon: Scale,
    title: 'Compliance & Reporting',
    description:
      'Automated compliance management for NAFDAC product registration and batch tracking, SON quality certification documentation, FIRS tax reporting and e-invoicing requirements, environmental compliance reporting, and audit trail maintenance across all regulatory obligations.',
  },
  {
    icon: Users,
    title: 'Workforce Management',
    description:
      'Integrated sales order management connecting customer orders to production scheduling, delivery planning and logistics coordination, distributor and dealer management, trade promotion tracking, and accounts receivable management for Nigeria\u2019s diverse distribution channels.',
  },
  {
    icon: Cpu,
    title: 'Technology Integration',
    description:
      'Manufacturing analytics dashboards providing real-time visibility into production KPIs, OEE metrics, quality trends, inventory levels, supply chain performance, and financial results with drill-down capabilities from executive summaries to shop floor details.',
  },
]

const outcomes = [
  { stat: '35%', label: 'Production Efficiency Gain', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
  { stat: '50%', label: 'Reduction in Downtime', accent: 'bg-[#F7AE57]/10', textColor: 'text-[#F7AE57]' },
  { stat: '100%', label: 'Regulatory Compliance', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
]

export function NigeriaManufacturingPage() {
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
                <Factory className="w-4 h-4 text-[#F7AE57]" />
                <span>Manufacturing</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Smart manufacturing solutions for{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Nigerian producers
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Intelligent systems that optimize production, ensure compliance, and drive
                profitability across Nigeria&apos;s manufacturing landscape.
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
                    Nigerian manufacturers face operational pressure: raw material price
                    volatility, import dependency, SON quality standards compliance, NAFDAC
                    registration and traceability requirements, skilled labour shortages,
                    supply chain disruptions, power supply unreliability, foreign exchange
                    fluctuations affecting input costs, and increasing competition from
                    imported goods demanding continuous efficiency improvements.
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
                    We deliver manufacturing intelligence solutions addressing Nigerian
                    production environments. Our systems handle multi-location production,
                    manage complex regulatory compliance, including NAFDAC batch tracking
                    and SON documentation, optimize inventory against import lead times,
                    provide real-time production visibility, and deliver actionable
                    analytics driving continuous improvement across quality, cost, and
                    delivery performance.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Multi-location production planning and optimization',
                      'NAFDAC batch tracking and SON compliance automation',
                      'Inventory optimization for Nigerian import lead times',
                      'Real-time production visibility and OEE monitoring',
                      'Actionable analytics for quality, cost, and delivery',
                      'Supply chain resilience and procurement intelligence',
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
                <span className="text-foreground">Manufacturing </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive capabilities designed for Nigerian manufacturing operations.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Our manufacturing solutions deliver measurable improvements in production
                efficiency, equipment uptime, and regulatory compliance across operations.
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
                Transform Manufacturing Operations
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Connect with our manufacturing technology experts to explore how intelligent
                systems can optimize your production, ensure compliance, and drive
                profitability.
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
