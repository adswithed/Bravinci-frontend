'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  Lightbulb,
  TrendingUp,
  Target,
  BarChart3,
  Shield,
  Users,
  FileText,
  ArrowRight,
  CheckCircle2,
  Zap,
  Award,
  Activity
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const capabilities = [
  {
    icon: Target,
    title: 'Strategic Planning & Scenario Modeling',
    description: 'Build comprehensive strategic plans with multiple scenario analyses to navigate uncertainty.',
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence & Competitive Analysis',
    description: 'Deep market insights and competitive positioning intelligence to inform strategic decisions.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Strategy & Transformation Roadmapping',
    description: 'Create actionable roadmaps that align digital initiatives with business objectives.',
  },
  {
    icon: Activity,
    title: 'Operating Model Design & Optimization',
    description: 'Design and optimize operating models for efficiency and strategic alignment.',
  },
  {
    icon: Shield,
    title: 'Risk Assessment & Mitigation Planning',
    description: 'Identify, quantify, and develop mitigation strategies for strategic risks.',
  },
  {
    icon: FileText,
    title: 'Strategic Due Diligence & M&A Support',
    description: 'Comprehensive due diligence and integration planning for mergers and acquisitions.',
  },
  {
    icon: Users,
    title: 'Executive Advisory & Decision Support',
    description: 'Ongoing strategic counsel and decision frameworks for executive leadership.',
  },
  {
    icon: Lightbulb,
    title: 'Change Leadership & Transformation Management',
    description: 'Guide organizations through strategic change with proven change management methodologies.',
  },
]

const outcomes = [
  {
    stat: '50%',
    label: 'Reduction in Strategic Planning Cycles',
    description: 'Faster strategy development with maintained quality',
    icon: Zap,
  },
  {
    stat: '40%',
    label: 'Improvement in Forecast Accuracy',
    description: 'More precise predictions for better decision-making',
    icon: Target,
  },
  {
    stat: '85%',
    label: 'Higher Stakeholder Alignment',
    description: 'Significantly improved consensus on strategic initiatives',
    icon: Users,
  },
]

export function GlobalServiceStrategyAdvisoryPage() {
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
                <Lightbulb className="w-4 h-4 text-[#0E78AA]" />
                <span>Strategy & Advisory</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Strategic intelligence that </span>
                <span className="gradient-text">illuminates the path forward</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Organizations face unprecedented complexity—regulatory volatility, technological disruption, competitive intensity, and stakeholder demands converge to create strategic uncertainty. Traditional planning approaches struggle to address multi-dimensional challenges that require simultaneous consideration of operational, financial, technological, and market dynamics. Leaders need intelligence frameworks that clarify strategic options, quantify implications, and accelerate high-confidence decision-making.
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
                  <span className="text-foreground">Intelligence that </span>
                  <span className="gradient-text">drives action</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our strategy and advisory practice combines strategic foresight with analytical rigor to deliver intelligence that matters. We don't produce shelf-ware strategies or generic recommendations. Instead, we build decision frameworks, scenario models, and strategic playbooks that become operational tools for navigating complexity and capturing opportunity.
                </p>
                <div className="space-y-3">
                  {[
                    'Decision frameworks that clarify strategic options',
                    'Scenario models that quantify implications',
                    'Strategic playbooks for operational execution',
                    'Intelligence systems that sustain advantage',
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
                      <p className="text-sm text-muted-foreground">Strategic Excellence</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Target className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Outcome-Focused</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <BarChart3 className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Data-Driven</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Users className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Collaborative</p>
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
                Comprehensive strategic advisory services designed to navigate complexity and drive results.
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
                Organizations gain clarity on strategic direction, confidence in major decisions, and frameworks for navigating uncertainty.
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
              Discuss Your Strategic Challenges
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Connect with our strategy team to explore how we can help you navigate complexity and achieve your strategic objectives.
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
