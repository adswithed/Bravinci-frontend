/**
 * Nigeria Our Approach Page
 *
 * The Bravinci Nigeria Method - a systematic approach to delivering
 * strategic intelligence and digital transformation solutions.
 */

'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Search,
  PenTool,
  Users,
  ArrowRight,
  Compass,
  CheckCircle2,
  Sparkles,
  Target,
  BarChart3,
  ShieldCheck,
} from 'lucide-react'

const principles = [
  {
    icon: Search,
    number: '01',
    title: 'Comprehensive Discovery',
    description:
      'Significant investment in understanding strategic context, organisational culture, stakeholder ecosystem, and operational realities before proposing solutions. This discovery phase uncovers opportunities and constraints shaping effective strategy.',
    highlights: [
      'Strategic context analysis',
      'Organisational culture assessment',
      'Stakeholder ecosystem mapping',
      'Operational reality evaluation',
    ],
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Solution Architecture',
    description:
      'Designing integrated solutions addressing business requirements holistically rather than implementing isolated technologies. Creating governance frameworks and decision workflows, ensuring insights influence actions across organisations.',
    highlights: [
      'Holistic business requirements',
      'Integrated solution design',
      'Governance frameworks',
      'Decision workflow creation',
    ],
  },
  {
    icon: Users,
    number: '03',
    title: 'Collaborative Implementation',
    description:
      'Working alongside client teams throughout delivery, transferring knowledge and building internal capability. Successful engagements strengthen organisational capacity for managing future challenges independently.',
    highlights: [
      'Client team collaboration',
      'Knowledge transfer',
      'Internal capability building',
      'Sustainable independence',
    ],
  },
]

const outcomes = [
  { icon: Target, label: 'Strategic Alignment', value: '100%', description: 'Solutions aligned to business objectives' },
  { icon: BarChart3, label: 'Measurable Impact', value: '95%', description: 'Engagements delivering quantified outcomes' },
  { icon: ShieldCheck, label: 'Client Retention', value: '90%', description: 'Clients returning for follow-on engagements' },
]

export function NigeriaOurApproachPage() {
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
          <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[#0E78AA]/10 blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-[#F7AE57]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40">
            <FadeIn className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-sm font-medium text-white/80">
                <Compass className="w-4 h-4 text-[#F7AE57]" />
                <span>Our Approach</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Proven Methodology Delivering{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Sustainable Transformation
                </span>
              </h1>

              <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
                A systematic approach refined through hundreds of engagements in Nigeria,
                ensuring consistency, quality, and measurable impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-[#0E78AA] hover:bg-[#0a5a80] text-white font-semibold shadow-lg h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Start Your Transformation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/services">Explore Services</Link>
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
                  <h2 className="text-2xl font-bold text-foreground">The Bravinci Nigeria Method</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Bravinci Nigeria Method represents our systematic approach to delivering
                  strategic intelligence and digital transformation solutions, creating lasting
                  organisational value. Developed and refined through hundreds of engagements in
                  Nigeria, this methodology ensures consistency, quality, and measurable impact,
                  regardless of sector, scale, or strategic objective. It balances structured
                  discipline with flexibility, adapting to unique client contexts while maintaining
                  rigour, producing results.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Principles */}
        <section id="principles" data-section="principles" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="text-[#0E78AA]">Principles</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three foundational principles that guide every engagement.
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-8">
              {principles.map((principle, index) => {
                const Icon = principle.icon
                const isEven = index % 2 === 0
                return (
                  <StaggerItem key={principle.title}>
                    <div className="p-8 md:p-12 rounded-3xl glass-card border border-[#0E78AA]/20 hover:border-[#0E78AA]/40 transition-all duration-500">
                      <div className={cn(
                        'grid lg:grid-cols-2 gap-8 items-center',
                      )}>
                        <div className={cn(!isEven && 'lg:order-2')}>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center">
                              <Icon className="w-7 h-7 text-[#0E78AA]" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[#F7AE57]">
                                STEP {principle.number}
                              </span>
                              <h3 className="text-2xl font-bold text-foreground">
                                {principle.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {principle.description}
                          </p>
                        </div>

                        <div className={cn(!isEven && 'lg:order-1')}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {principle.highlights.map((highlight) => (
                              <div
                                key={highlight}
                                className="flex items-center gap-3 p-3 rounded-xl bg-[#0E78AA]/5 border border-[#0E78AA]/10"
                              >
                                <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0" />
                                <span className="text-sm text-muted-foreground">{highlight}</span>
                              </div>
                            ))}
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

        {/* Outcomes */}
        <section id="outcomes" data-section="outcomes" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Proven </span>
                <span className="text-[#0E78AA]">Outcomes</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our methodology consistently delivers measurable results across every engagement.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {outcomes.map((outcome, index) => {
                const Icon = outcome.icon
                const bgColor = index % 2 === 0 ? 'bg-[#0E78AA]/10' : 'bg-[#F7AE57]/10'
                const textColor = index % 2 === 0 ? 'text-[#0E78AA]' : 'text-[#F7AE57]'
                return (
                  <StaggerItem key={outcome.label}>
                    <div className="text-center p-8 rounded-2xl glass-card hover-lift transition-all duration-500">
                      <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4', bgColor)}>
                        <Icon className={cn('w-7 h-7', textColor)} />
                      </div>
                      <div className={cn('text-4xl font-bold mb-2', textColor)}>
                        {outcome.value}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{outcome.label}</h3>
                      <p className="text-sm text-muted-foreground">{outcome.description}</p>
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
                Experience Our Approach First-Hand
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Discover how the Bravinci Nigeria Method can deliver sustainable transformation
                for your organisation. Let&apos;s discuss your strategic objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Get Started
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
