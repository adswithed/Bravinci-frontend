'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  Target,
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Radar,
  Flag,
  Crosshair,
  Shield,
  Zap,
  Eye,
  ArrowRight,
  CheckCircle2,
  Award,
  AlertTriangle
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const performanceZone = [
  {
    icon: Users,
    title: 'HR System Integration',
    description: 'Workforce analytics, diversity metrics, recruitment performance, and transformation insights via AI Virtual Consultant.',
  },
  {
    icon: DollarSign,
    title: 'Financial Data Dashboard',
    description: 'Key financial metrics with customizable KPI tracking for comprehensive financial oversight.',
  },
  {
    icon: Activity,
    title: 'Operational and Commercial KPIs',
    description: 'Tailored to organizational requirements with direct system connectivity for real-time monitoring.',
  },
]

const strategyZone = [
  {
    icon: Radar,
    title: 'Strategic Intelligence Radar',
    description: 'Monitoring market trends, black swans, grey swans, and grey rhinos based on continuous intelligence programs.',
  },
  {
    icon: Flag,
    title: 'OKR Tracking',
    description: 'Objectives and Key Results tracking displaying past, present, and future performance with intervention monitoring.',
  },
  {
    icon: Target,
    title: 'Strategic Roadmap Portfolio',
    description: 'Portfolio management supporting both agile and waterfall methodologies for comprehensive planning.',
  },
]

const competitiveZone = [
  {
    icon: AlertTriangle,
    title: 'Threat and Opportunity Radar',
    description: 'Visualizing competitive landscape based on ongoing research and analysis for proactive positioning.',
  },
  {
    icon: Crosshair,
    title: 'Competitive Sweet Spot',
    description: 'Positioning showing organizational position relative to competitors and client needs.',
  },
  {
    icon: Shield,
    title: 'Battle Cards',
    description: 'Competitor pricing, sales tactics, strengths, weaknesses, USPs, and winning strategies at your fingertips.',
  },
]

const outcomes = [
  {
    stat: 'Unified',
    label: 'Strategic Visibility',
    description: 'Eliminating fragmented reporting across the organization',
    icon: Eye,
  },
  {
    stat: 'Faster',
    label: 'Strategic Decision Cycles',
    description: 'Through integrated intelligence and real-time insights',
    icon: Zap,
  },
  {
    stat: 'Proactive',
    label: 'Threat Identification',
    description: 'Identify opportunities before they materialize',
    icon: Radar,
  },
]

export function GlobalStrategyCommandCenterPage() {
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
                <BarChart3 className="w-4 h-4 text-[#0E78AA]" />
                <span>Intelligence Hub</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Integrated strategic intelligence platform </span>
                <span className="text-foreground">for transformative decision-making</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Strategic Command Center is a comprehensive strategic planning and monitoring platform that integrates internal performance metrics, strategy development tools, and competitive intelligence into one unified environment. Powered by 40 years of strategic expertise and enhanced with AI, this system includes a sophisticated data warehouse seamlessly connecting HR analytics, financial data, operational KPIs, strategic intelligence radar, OKR tracking, roadmap management, threat and opportunity analysis, competitive positioning, and battle cards.
              </p>
            </div>
          </div>
        </section>

        {/* What It Is / Who It's For */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Built for </span>
                  <span className="gradient-text">strategic leaders</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  C-suite executives, strategy officers, and board members requiring comprehensive strategic oversight in one integrated platform. Ideal for organizations navigating volatile markets, competitive pressure, and complex transformation initiatives where strategic foresight, performance monitoring, and competitive intelligence must converge seamlessly. Particularly valuable for leadership teams managing strategic portfolios across business units, geographies, or market segments requiring unified situational awareness.
                </p>
                <div className="space-y-3">
                  {[
                    'C-suite executives and strategy officers',
                    'Organizations navigating volatile markets',
                    'Leadership teams managing strategic portfolios',
                    'Teams requiring unified situational awareness',
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
                      <BarChart3 className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Performance Metrics</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Target className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Strategy Development</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Radar className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Competitive Intelligence</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Eye className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Unified Oversight</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Zone Capabilities */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Performance Zone </span>
                <span className="gradient-text">(Left Console)</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-time visibility into organizational performance across HR, financial, and operational dimensions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {performanceZone.map((capability) => {
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

        {/* Strategy Development Zone */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Strategy Development Zone </span>
                <span className="gradient-text">(Center Console)</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools for strategic planning, monitoring, and adaptation in dynamic markets.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {strategyZone.map((capability) => {
                const Icon = capability.icon
                return (
                  <div
                    key={capability.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#F7AE57]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 text-sm group-hover:text-[#F7AE57] transition-colors">
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

        {/* Competitive Analysis Zone */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Competitive Analysis Zone </span>
                <span className="gradient-text">(Right Console)</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep competitive intelligence enabling proactive positioning and strategic response.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {competitiveZone.map((capability) => {
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

        {/* Business Impact */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Business </span>
                <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Organizations implementing Strategic Command Center achieve unified strategic visibility, faster decision cycles, and proactive identification of threats and opportunities.
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
              Experience the Strategic Command Center
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Transform strategy from periodic planning exercises into continuous intelligence capability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Request Demo
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
