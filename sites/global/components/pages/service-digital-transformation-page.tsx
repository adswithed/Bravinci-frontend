'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  TrendingUp,
  Cloud,
  Workflow,
  Users,
  Sparkles,
  Settings,
  Layers,
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  Award
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const capabilities = [
  {
    icon: Target,
    title: 'Digital Vision & Roadmap Development',
    description: 'Create comprehensive digital strategies aligned with business objectives and market opportunities.',
  },
  {
    icon: Layers,
    title: 'Enterprise Architecture & Platform Selection',
    description: 'Design scalable architectures and select optimal technology platforms for your needs.',
  },
  {
    icon: Cloud,
    title: 'Cloud Migration & Modernization',
    description: 'Migrate and modernize applications with minimal disruption and maximum value.',
  },
  {
    icon: Workflow,
    title: 'Business Process Optimization & Automation',
    description: 'Streamline operations and automate workflows for efficiency and agility.',
  },
  {
    icon: Sparkles,
    title: 'Customer Experience Transformation',
    description: 'Redesign customer journeys with digital-first experiences that drive engagement.',
  },
  {
    icon: Settings,
    title: 'Digital Product & Service Design',
    description: 'Develop innovative digital products and services that create market differentiation.',
  },
  {
    icon: Layers,
    title: 'Integration Architecture & API Strategy',
    description: 'Build robust integration frameworks and API strategies for seamless connectivity.',
  },
  {
    icon: Users,
    title: 'Change Management & Adoption Enablement',
    description: 'Drive user adoption and organizational change for sustainable transformation.',
  },
]

const outcomes = [
  {
    stat: '3x',
    label: 'ROI Within 18 Months',
    description: 'Triple return on transformation investments',
    icon: TrendingUp,
  },
  {
    stat: '60%',
    label: 'Reduction in Manual Processes',
    description: 'Significant automation and efficiency gains',
    icon: Zap,
  },
  {
    stat: '85%',
    label: 'Improved Customer Satisfaction',
    description: 'Higher NPS scores and customer engagement',
    icon: Sparkles,
  },
]

export function GlobalServiceDigitalTransformationPage() {
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
                <TrendingUp className="w-4 h-4 text-[#0E78AA]" />
                <span>Digital Transformation</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Transformation that delivers </span>
                <span className="gradient-text">measurable business impact</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital transformation has become a strategic imperative, yet most initiatives fail to deliver expected value. Organizations struggle with technology selection, integration complexity, change resistance, and unclear ROI. The challenge isn't technology availability—it's architecting transformation that aligns technical capabilities with business objectives while managing risk and ensuring sustainable adoption.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Framing */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Business transformation </span>
                  <span className="gradient-text">enabled by technology</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We approach digital transformation as business transformation enabled by technology, not technology projects with business implications. Our methodology focuses on outcome definition, solution architecture, stakeholder engagement, and capability building to ensure transformations stick and deliver compound value over time.
                </p>
                <div className="space-y-3">
                  {[
                    'Outcome-focused transformation strategies',
                    'Risk-aware solution architecture',
                    'Comprehensive stakeholder engagement',
                    'Sustainable capability building',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="p-8 rounded-3xl glass-card">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Award className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Proven Methods</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Zap className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Fast Results</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Target className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Business-Aligned</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Users className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">People-First</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end digital transformation services that drive sustainable business results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability) => {
                const Icon = capability.icon
                return (
                  <div
                    key={capability.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#0E78AA]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 text-sm group-hover:text-[#0E78AA] transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Measurable </span>
                <span className="gradient-text">Outcomes</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Achieve faster time-to-value, lower implementation risk, and higher adoption rates compared to traditional transformation approaches.
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

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore Transformation Possibilities
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Connect with our digital transformation experts to discover how we can help you achieve measurable business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
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
