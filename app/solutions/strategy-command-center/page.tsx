'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { GlobalSiteWrapper } from '@/components/global-site-wrapper'
import { Button } from '@/components/ui/button'
import {
  Monitor,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Target,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Eye,
  Compass,
  AlertTriangle,
  Award,
  Building,
  Briefcase,
  LineChart,
  FileText
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const zones = [
  {
    title: 'Performance Zone',
    subtitle: 'Left Console',
    description: 'HR system integration displaying workforce analytics, diversity metrics, recruitment performance, and transformation insights via AI Virtual Consultant. Financial data dashboard with customizable KPI tracking.',
    icon: BarChart3,
    color: '#0E78AA',
    features: [
      'HR system integration with workforce analytics',
      'Diversity metrics and recruitment performance',
      'Financial data with customizable KPIs',
      'AI Virtual Consultant insights'
    ]
  },
  {
    title: 'Strategy Development Zone',
    subtitle: 'Center Console',
    description: 'Strategic Intelligence Radar monitoring market trends, black swans, grey swans, and grey rhinos. OKR tracking with past, present, and future performance. Strategic roadmap portfolio management.',
    icon: Compass,
    color: '#F7AE57',
    features: [
      'Strategic Intelligence Radar',
      'OKR tracking and intervention monitoring',
      'Strategic roadmap portfolio management',
      'Agile & waterfall methodology support'
    ]
  },
  {
    title: 'Competitive Analysis Zone',
    subtitle: 'Right Console',
    description: 'Threat and opportunity radar visualizing competitive landscape. Competitive sweet spot positioning showing organizational position relative to competitors. Battle cards with competitor pricing and winning strategies.',
    icon: Target,
    color: '#0E78AA',
    features: [
      'Threat & opportunity radar',
      'Competitive sweet spot positioning',
      'Battle cards with winning strategies',
      'Competitor pricing and USP analysis'
    ]
  }
]

const targetAudience = [
  {
    title: 'C-Suite Executives',
    description: 'Comprehensive strategic oversight in one integrated platform',
    icon: Briefcase
  },
  {
    title: 'Strategy Officers',
    description: 'Tools for strategic planning and performance monitoring',
    icon: Target
  },
  {
    title: 'Board Members',
    description: 'Unified situational awareness across the organization',
    icon: Building
  },
  {
    title: 'Leadership Teams',
    description: 'Managing strategic portfolios across business units',
    icon: Users
  }
]

const businessImpact = [
  'Unified strategic visibility eliminating fragmented reporting',
  'Faster strategic decision cycles through integrated intelligence',
  'Proactive identification of threats and opportunities',
  'Significantly improved strategic alignment across leadership',
  'Continuous intelligence capability replacing periodic planning',
  'Navigate uncertainty and capitalize on emerging opportunities'
]

export default function StrategyCommandCenterPage() {
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
            <div className="absolute inset-0 bg-[#0E78AA]/5" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={cn(
                  'space-y-6 transition-all duration-700',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                )}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                  <Monitor className="w-4 h-4 text-[#0E78AA]" />
                  <span>Intelligence Hub</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Strategic </span>
                  <span className="gradient-text">Command Center</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed italic">
                  Integrated strategic intelligence platform for transformative decision-making
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  A comprehensive strategic planning and monitoring platform that integrates internal
                  performance metrics, strategy development tools, and competitive intelligence into
                  one unified environment. Powered by 40 years of strategic expertise and enhanced with AI.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/contact">
                      Experience the Command Center
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                    asChild
                  >
                    <Link href="/contact">Request Demo</Link>
                  </Button>
                </div>
              </div>

              <div
                className={cn(
                  'relative transition-all duration-700 delay-200',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                )}
              >
                <div className="relative p-8 rounded-3xl glass-card bg-gradient-to-br from-slate-900 to-slate-800">
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                  </div>
                  <div className="relative">
                    <div className="flex justify-center gap-2 mb-4">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-20 h-32 rounded-lg bg-[#0E78AA]/20 border border-[#0E78AA]/20 flex items-center justify-center"
                        >
                          <Monitor className="w-8 h-8 text-[#0E78AA]/50" />
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <p className="text-white/60 text-sm">Integrated Platform</p>
                      <p className="text-white font-bold">Strategic Command Center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Who It&apos;s </span>
                <span className="gradient-text">For</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ideal for organizations navigating volatile markets, competitive pressure, and
                complex transformation initiatives where strategic foresight, performance monitoring,
                and competitive intelligence must converge seamlessly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((user, index) => {
                const Icon = user.icon
                return (
                  <div
                    key={user.title}
                    className="p-6 rounded-2xl glass-card hover-lift transition-all duration-500 text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#0E78AA]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{user.title}</h3>
                    <p className="text-sm text-muted-foreground">{user.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Three Zones */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key Capabilities & </span>
                <span className="gradient-text">Modules</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three interconnected consoles providing comprehensive strategic management capabilities.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {zones.map((zone, index) => {
                const Icon = zone.icon
                return (
                  <div
                    key={zone.title}
                    className="group p-8 rounded-3xl glass-card hover-lift transition-all duration-500 border-t-4"
                    style={{ borderTopColor: zone.color }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${zone.color}15` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: zone.color }} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{zone.subtitle}</p>
                        <h3 className="font-bold text-foreground">{zone.title}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                      {zone.description}
                    </p>

                    <ul className="space-y-3">
                      {zone.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: zone.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Business Impact & </span>
                  <span className="gradient-text">Value Drivers</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Organizations implementing Strategic Command Center transform strategy from
                  periodic planning exercises into continuous intelligence capability.
                </p>
                <ul className="space-y-4">
                  {businessImpact.map((impact, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#0E78AA] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl glass-card border border-[#0E78AA]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#F7AE57]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">40 Years of Expertise</h3>
                    <p className="text-sm text-muted-foreground">AI-enhanced strategic intelligence</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The platform helps leadership teams anticipate &quot;dark horses,&quot; &quot;black swans,&quot;
                  and &quot;grey rhinos&quot; while making more accurate strategic decisions in fast-paced industries.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#F7AE57]" />
                    Sophisticated data warehouse integration
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#F7AE57]" />
                    HR analytics and financial data connectivity
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#F7AE57]" />
                    Real-time competitive positioning
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#F7AE57]" />
                    Executive-ready visualization
                  </li>
                </ul>
              </div>
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
              Transform information overload into strategic clarity with automated insight
              generation and alert prioritization. Schedule a demo to see it in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/solutions">View All Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
