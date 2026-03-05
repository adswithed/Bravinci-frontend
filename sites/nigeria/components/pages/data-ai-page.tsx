'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Database,
  ShieldCheck,
  Link2,
  BarChart3,
  Cpu,
  Bot,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Sparkles,
} from 'lucide-react'

const capabilities = [
  {
    icon: ShieldCheck,
    title: 'Data Strategy and Governance',
    description:
      'Foundation establishment, including governance policies, quality standards, security protocols, access management, regulatory compliance, master data management, and organisational capability development.',
  },
  {
    icon: Link2,
    title: 'Enterprise Data Integration',
    description:
      'Consolidation of fragmented sources into unified platforms. Extract, transform, and load inconsistent formats into standardised structures, enabling comprehensive business intelligence.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence and Visualisation',
    description:
      'Dashboard development provides real-time visibility into performance, operations, and customer behaviours. Mobile-optimised for executive accessibility and decision support.',
  },
  {
    icon: Cpu,
    title: 'Advanced Analytics',
    description:
      'Statistical analysis identifying patterns, trends, and correlations. Predictive models forecast demand, anticipating churn, identifying risk, optimising pricing, and providing early warning of operational issues.',
  },
  {
    icon: Bot,
    title: 'Artificial Intelligence',
    description:
      'AI deployment addressing specific business challenges: customer segmentation, inventory optimisation, fraud detection, chatbot implementation, and document processing, automating manual data entry.',
  },
]

const outcomes = [
  { stat: '50%', label: 'Forecast Accuracy Improvement', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
  { stat: '40%', label: 'Inventory Cost Reduction', accent: 'bg-[#F7AE57]/10', textColor: 'text-[#F7AE57]' },
  { stat: '35%', label: 'Customer Retention Increase', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
  { stat: '30%', label: 'Faster Decision-Making', accent: 'bg-[#F7AE57]/10', textColor: 'text-[#F7AE57]' },
  { stat: '\u20A640-120M', label: 'Annual Value Creation', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
]

export function NigeriaDataAiPage() {
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
                <Database className="w-4 h-4 text-[#0E78AA]" />
                <span>Data &amp; AI Enablement</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Transform business data into{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  strategic intelligence
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Unlock the full potential of your organisational data to drive better
                decisions, improve operational performance, and create measurable business
                outcomes.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Problem & Solution */}
        <section
          id="problem-solution"
          data-section="problem-solution"
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
                  <p className="text-muted-foreground leading-relaxed">
                    Nigerian organisations accumulate operational data yet struggle to extract
                    strategic value. Data remains fragmented across systems, analytics
                    capabilities are limited, data quality is inconsistent, and insights driving
                    better decisions remain hidden.
                  </p>
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
                  <p className="text-muted-foreground leading-relaxed">
                    We build data and analytics capabilities addressing the complete intelligence
                    lifecycle: consolidation from disparate sources, quality improvement, analytics
                    development, visualisation for decision support, and progressive AI deployment
                    delivering value despite common data challenges.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section
          id="capabilities"
          data-section="capabilities"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Data &amp; AI </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Full-spectrum data and analytics services for Nigerian enterprises.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => {
                const Icon = capability.icon
                return (
                  <StaggerItem key={capability.title}>
                    <div className="group h-full p-6 rounded-2xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                      <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-[#0E78AA]" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                        {capability.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {capability.description}
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
                Our data and AI engagements deliver a 50% improvement in forecast accuracy,
                40% reduction in inventory carrying costs, 35% increase in customer
                retention, 30% faster decision-making, and
                {' \u20A6'}40-120M annual value creation.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {outcomes.map((outcome) => (
                <StaggerItem key={outcome.label}>
                  <div className={cn(
                    'p-6 rounded-3xl text-center hover:-translate-y-1 transition-all duration-500',
                    outcome.accent
                  )}>
                    <div className={cn('text-3xl md:text-4xl font-bold mb-2', outcome.textColor)}>
                      {outcome.stat}
                    </div>
                    <h3 className="text-sm font-bold text-foreground">
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
                Unlock Your Data&apos;s Potential
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Connect with our data and AI experts to explore how strategic intelligence
                capabilities can transform your decision-making and drive measurable business
                outcomes.
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
                  <Link href="/nigeria/services">All Services</Link>
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
