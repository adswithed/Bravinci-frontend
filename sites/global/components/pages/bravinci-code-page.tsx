'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  Search,
  Layers,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Target,
  Zap,
  Award,
  BarChart3
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const principles = [
  {
    number: '01',
    icon: Search,
    title: 'Deep Discovery',
    description: 'We invest significant time understanding your strategic context, organizational culture, competitive landscape, and stakeholder ecosystem before proposing solutions. This discovery phase uncovers hidden opportunities and constraints that shape effective strategy.',
    color: '#0E78AA',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Intelligence Architecture',
    description: 'We design intelligence systems—not just technology implementations. This means creating feedback loops, governance frameworks, and decision workflows that ensure insights actually influence actions across your organization.',
    color: '#F7AE57',
  },
  {
    number: '03',
    icon: Users,
    title: 'Collaborative Delivery',
    description: 'Our teams work alongside yours throughout implementation, transferring knowledge and building internal capability. We believe successful engagements strengthen your organization\'s capacity to manage future challenges independently.',
    color: '#0E78AA',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Continuous Optimization',
    description: 'Transformation doesn\'t end at go-live. We establish performance monitoring, iterative improvement cycles, and adaptive mechanisms that allow solutions to evolve with changing business requirements and market conditions.',
    color: '#F7AE57',
  },
]

const outcomes = [
  {
    icon: Zap,
    stat: '40%',
    label: 'Improvement in Decision Velocity',
    description: 'Faster strategic decisions backed by real-time intelligence',
  },
  {
    icon: Target,
    stat: '60%',
    label: 'Reduction in Implementation Risk',
    description: 'Lower project risk through proven methodologies',
  },
  {
    icon: BarChart3,
    stat: '3x',
    label: 'Return on Strategic Investments',
    description: 'Triple return within 18 months of implementation',
  },
]

export function GlobalBravinciCodePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
            <div
              className={cn(
                'text-center max-w-4xl mx-auto space-y-6 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                <Award className="w-4 h-4 text-[#0E78AA]" />
                <span>Our Methodology</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">The Bravinci Code</span>
                <br />
                <span className="text-foreground">How we turn complexity </span>
                <span className="text-foreground">into </span>
                <span className="text-[#F7AE57]">competitive advantage</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The Bravinci Code represents our systematic methodology for delivering strategic intelligence solutions that create lasting organizational value. Developed and refined across hundreds of engagements, this approach ensures consistency, quality, and measurable impact regardless of sector, scale, or strategic objective. It's not a rigid playbook but a flexible framework that adapts to your unique context while maintaining the rigor and discipline that produces results.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                  asChild
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Four Core </span>
                <span className="gradient-text">Principles</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our methodology is built on four foundational principles that guide every engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {principles.map((principle, index) => {
                const Icon = principle.icon
                return (
                  <div
                    key={principle.title}
                    className={cn(
                      'group p-8 rounded-3xl glass-card hover-lift transition-all duration-500',
                      'border-l-4',
                      principle.color === '#0E78AA' ? 'border-[#0E78AA]' : 'border-[#F7AE57]'
                    )}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={cn(
                          'w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform',
                          principle.color === '#0E78AA' ? 'bg-[#0E78AA]/10' : 'bg-[#F7AE57]/10'
                        )}
                      >
                        <Icon
                          className={cn(
                            'w-8 h-8',
                            principle.color === '#0E78AA' ? 'text-[#0E78AA]' : 'text-[#F7AE57]'
                          )}
                        />
                      </div>
                      <div>
                        <div
                          className={cn(
                            'text-4xl font-bold mb-2',
                            principle.color === '#0E78AA' ? 'text-[#0E78AA]/20' : 'text-[#F7AE57]/20'
                          )}
                        >
                          {principle.number}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Outcomes / Results */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Measurable </span>
                <span className="gradient-text">Outcomes</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The Bravinci Code delivers faster time-to-value, higher adoption rates, and more sustainable impact compared to traditional consulting models.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {outcomes.map((outcome) => {
                const Icon = outcome.icon
                return (
                  <div
                    key={outcome.label}
                    className="group p-8 rounded-3xl glass-card hover-lift text-center transition-all duration-500"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#0E78AA]" />
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

        {/* Differentiators */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="p-10 md:p-12 rounded-3xl glass-card border border-[#0E78AA]/20">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-foreground">Why the Bravinci Code </span>
                  <span className="gradient-text">Delivers Results</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: 'Faster Time-to-Value',
                    description: 'Proven frameworks reduce implementation time while maintaining quality',
                  },
                  {
                    title: 'Higher Adoption Rates',
                    description: 'Collaborative approach ensures organizational buy-in and usage',
                  },
                  {
                    title: 'Sustainable Impact',
                    description: 'Knowledge transfer builds lasting internal capabilities',
                  },
                  {
                    title: 'Proven Track Record',
                    description: 'Refined across hundreds of successful engagements',
                  },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <CheckCircle2 className="w-8 h-8 text-[#0E78AA] mx-auto mb-3" />
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience the Bravinci Code
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Discover how our proven methodology can transform your organization's strategic intelligence capabilities and deliver measurable business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
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
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
