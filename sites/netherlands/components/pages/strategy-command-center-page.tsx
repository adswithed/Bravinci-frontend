'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Target,
  ArrowRight,
  Users,
  LineChart,
  DollarSign,
  BarChart3,
  Radar,
  CheckSquare,
  Map,
  AlertTriangle,
  Crosshair,
  Swords,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const performanceZone = [
  {
    icon: Users,
    title: 'Workforce Analytics',
    description:
      'HR system integration displaying workforce analytics, diversity metrics, recruitment performance, and transformation insights via an AI Virtual Consultant. Leadership teams access people intelligence with the same immediacy and depth as financial and operational data.',
  },
  {
    icon: DollarSign,
    title: 'Financial Intelligence Dashboard',
    description:
      'Key financial metrics and customizable KPI tracking are presented in a single dashboard, connecting financial performance to strategic progress without manual reporting cycles or data reconciliation.',
  },
  {
    icon: BarChart3,
    title: 'Operational and Commercial KPIs',
    description:
      'Operational and commercial KPIs tailored to organisational requirements with direct system connectivity, providing the performance visibility that the Netherlands leadership teams need to hold strategy and execution in alignment.',
  },
]

const strategyDevelopmentZone = [
  {
    icon: Radar,
    title: 'Strategic Intelligence Radar',
    description:
      'Continuous monitoring of market trends, black swans, grey swans, and grey rhinos based on ongoing intelligence programmes. Dutch and European regulatory developments, competitive moves, and emerging market disruptions are tracked systematically rather than discovered reactively.',
  },
  {
    icon: CheckSquare,
    title: 'OKR Tracking',
    description:
      'Objectives and Key Results tracking displays past, present, and forward-looking performance with intervention monitoring, creating genuine accountability between strategic ambition and operational delivery across the organisation.',
  },
  {
    icon: Map,
    title: 'Strategic Roadmap Management',
    description:
      'Strategic roadmap portfolio management supporting both agile and waterfall methodologies, giving the Netherlands leadership teams structured visibility into initiative progress, interdependencies, and milestone performance across complex transformation portfolios.',
  },
]

const competitiveAnalysisZone = [
  {
    icon: AlertTriangle,
    title: 'Threat and Opportunity Radar',
    description:
      'A continuously updated visualisation of the competitive landscape based on ongoing research and analysis, enabling Netherlands organisations to identify and respond to competitive developments with lead time rather than in reaction.',
  },
  {
    icon: Crosshair,
    title: 'Competitive Sweet Spot Positioning',
    description:
      'Real-time view of the organisation&apos;s position relative to competitors and client needs, supporting ongoing strategic positioning decisions rather than annual assessments that are outdated before they are acted upon.',
  },
  {
    icon: Swords,
    title: 'Battle Cards',
    description:
      'Current competitor intelligence covering pricing, sales tactics, strengths, weaknesses, and winning strategies is kept live through continuous monitoring and is available to commercial and leadership teams at the point of decision.',
  },
]

export function NetherlandsStrategyCommandCenterPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
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
                <Target className="w-4 h-4 text-[#0E78AA]" />
                <span>Strategic Command Centre</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Integrated strategic intelligence platform </span>
                <span className="text-foreground">for transformative decision-making</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                A comprehensive strategic planning and monitoring platform that integrates internal performance metrics, strategy development tools, and competitive intelligence into a single unified environment.
              </p>
            </div>
          </div>
        </section>

        {/* What It Is Section */}
        <section id="what-it-is" data-section="what-it-is" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-foreground">What the Strategic Command Centre </span>
                <span className="gradient-text">Is</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Strategic Command Centre is a comprehensive strategic planning and monitoring platform that integrates internal performance metrics, strategy development tools, and competitive intelligence into a single unified environment. Powered by 40 years of Bravinci strategic expertise and enhanced with AI, the platform connects HR analytics, financial data, operational KPIs, strategic intelligence monitoring, OKR tracking, roadmap management, competitive positioning, and battle cards through a sophisticated data warehouse, giving the Netherlands leadership teams a complete operational and strategic picture in real time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For Dutch organisations navigating volatile European markets, accelerating regulatory change, and complex transformation programmes, the Strategic Command Centre transforms strategy from a periodic planning exercise into a continuous intelligence capability. Leadership teams anticipate black swans, grey rhinos, and emerging competitive threats before they materialise, rather than responding after the fact.
              </p>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section id="who-its-for" data-section="who-its-for" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Who </span>
                  <span className="gradient-text">It&apos;s For</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  C-suite executives, strategy officers, and board members require comprehensive strategic oversight in one integrated platform. Particularly valuable for Netherlands organisations managing strategic portfolios across business units, Benelux geographies, or multiple market segments where unified situational awareness, performance monitoring, and competitive intelligence must converge seamlessly.
                </p>
                <div className="space-y-3">
                  {[
                    'C-suite executives requiring comprehensive strategic oversight',
                    'Strategy officers managing complex portfolios',
                    'Board members needing unified situational awareness',
                    'Organisations across Benelux geographies',
                    'Multi-segment businesses needing converged intelligence',
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
                      <LineChart className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">3 Intelligence Zones</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Radar className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">9 Strategic Modules</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <TrendingUp className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Real-Time Intelligence</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Target className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">360° Strategic View</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Zone Section */}
        <section id="performance-zone" data-section="performance-zone" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E78AA]/10 text-sm font-medium text-[#0E78AA] mb-4">
                <LineChart className="w-4 h-4" />
                <span>Zone 1</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Performance </span>
                <span className="gradient-text">Zone</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {performanceZone.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="group p-8 rounded-3xl glass-card hover-lift transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#0E78AA]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Strategy Development Zone Section */}
        <section id="strategy-zone" data-section="strategy-zone" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7AE57]/10 text-sm font-medium text-[#F7AE57] mb-4">
                <Lightbulb className="w-4 h-4" />
                <span>Zone 2</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Strategy Development </span>
                <span className="gradient-text">Zone</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {strategyDevelopmentZone.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="group p-8 rounded-3xl glass-card hover-lift transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#F7AE57]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#F7AE57] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Competitive Analysis Zone Section */}
        <section id="competitive-zone" data-section="competitive-zone" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E78AA]/10 text-sm font-medium text-[#0E78AA] mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Zone 3</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Competitive Analysis </span>
                <span className="gradient-text">Zone</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {competitiveAnalysisZone.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="group p-8 rounded-3xl glass-card hover-lift transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#0E78AA]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Business Impact Section */}
        <section id="impact" data-section="impact" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-foreground">Business </span>
                <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Organisations implementing the Strategic Command Centre achieve unified strategic visibility that eliminates fragmented reporting across functions and geographies, faster decision cycles through integrated intelligence, and proactive identification of threats and opportunities before they require reactive response. Strategic alignment across the Netherlands leadership teams improves materially as shared intelligence replaces competing interpretations of disconnected data.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                  <TrendingUp className="w-8 h-8 text-[#0E78AA] mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground mb-1">Unified Visibility</p>
                  <p className="text-sm text-muted-foreground">Eliminates fragmented reporting across functions and geographies</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                  <Target className="w-8 h-8 text-[#F7AE57] mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground mb-1">Faster Decisions</p>
                  <p className="text-sm text-muted-foreground">Accelerated decision cycles through integrated intelligence</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                  <Radar className="w-8 h-8 text-[#0E78AA] mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground mb-1">Proactive Intelligence</p>
                  <p className="text-sm text-muted-foreground">Identify threats and opportunities before reactive response is required</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Sparkles className="w-10 h-10 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience the Strategic Command Centre
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact Bravinci Netherlands to arrange a demonstration tailored to your organisation&apos;s strategic priorities and decision environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/netherlands/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/netherlands/solutions">Explore All Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
