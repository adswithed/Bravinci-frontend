'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
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
  Award
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const zones = [
  {
    title: 'Performance Zone',
    subtitle: 'Left Console',
    description: 'Internal KPIs, financial data, and operational metrics at your fingertips.',
    icon: BarChart3,
    color: '#0E78AA',
    features: [
      'Real-time KPI dashboards',
      'Financial performance tracking',
      'HR system integration',
      'Workforce analytics'
    ]
  },
  {
    title: 'Strategy Development',
    subtitle: 'Center Console',
    description: 'Strategic planning tools for past, present, and future decision-making.',
    icon: Compass,
    color: '#F7AE57',
    features: [
      'Strategic Intelligence Radar',
      'OKR monitoring & tracking',
      'Strategic roadmap management',
      'Agile & waterfall support'
    ]
  },
  {
    title: 'Competitive Analysis',
    subtitle: 'Right Console',
    description: 'Comprehensive competitive intelligence and market positioning tools.',
    icon: Target,
    color: '#0E78AA',
    features: [
      'Threat & opportunity landscape',
      'Competitive positioning',
      'Sales Battle Cards',
      'Market sentiment tracking'
    ]
  }
]

const dashboards = [
  { name: 'HR Analytics', icon: Users },
  { name: 'Financial Reporting', icon: BarChart3 },
  { name: 'Operational KPIs', icon: TrendingUp },
  { name: 'Intelligence Radar', icon: Eye },
  { name: 'OKR Tracking', icon: Target },
  { name: 'Roadmap Management', icon: Compass },
  { name: 'Threat Assessment', icon: AlertTriangle },
  { name: 'Competitive Positioning', icon: Shield },
  { name: 'Battle Cards', icon: Zap }
]

const benefits = [
  'Enhanced decision-making through consolidated data visualization',
  'Real-time monitoring of risks, opportunities, and strategic shifts',
  'Anticipation of market disruptions (black swans, grey rhinos)',
  'Seamless integration with existing data systems',
  'Physical strategy room with comprehensive tools',
  'Executive boardroom sessions and ongoing e-learning'
]

export default function StrategyCommandCenterPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
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
                  <span>Flagship Solution</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Strategy </span>
                  <span className="gradient-text">Command Center</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Revolutionize your strategic processes with our cutting-edge MI-7™ LED-wall
                  solution. The Strategy Command Center integrates internal performance metrics
                  with external market analysis, providing a unified platform for strategic
                  decision-making.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/contact">
                      Request a Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                    asChild
                  >
                    <Link href="/solutions/masterclass">Learn the Methodology</Link>
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
                      <p className="text-white/60 text-sm">MI-7™ LED-Wall System</p>
                      <p className="text-white font-bold">Strategy Command Center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Zones */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Three Integrated </span>
                <span className="gradient-text">Zones</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A unified platform with three interconnected consoles for comprehensive strategic management.
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

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {zone.description}
                    </p>

                    <ul className="space-y-3">
                      {zone.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4" style={{ color: zone.color }} />
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

        {/* Nine Dashboards */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Nine Modular </span>
                <span className="gradient-text">Dashboards</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive coverage of all strategic intelligence dimensions.
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
              {dashboards.map((dashboard, index) => {
                const Icon = dashboard.icon
                return (
                  <div
                    key={dashboard.name}
                    className="group p-4 rounded-xl glass-card text-center hover:bg-[#0E78AA]/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#0E78AA]" />
                    </div>
                    <p className="text-xs font-medium text-muted-foreground">{dashboard.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Key </span>
                  <span className="gradient-text">Benefits</span>
                </h2>

                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#0E78AA] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
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
                    <h3 className="font-bold text-foreground">Support & Implementation</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive onboarding included</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#F7AE57]" />
                    Educational masterclasses
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#F7AE57]" />
                    Executive boardroom sessions
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#F7AE57]" />
                    Ongoing e-learning access
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#F7AE57]" />
                    Dedicated support team
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
              Transform Your Strategic Decision-Making
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Experience the power of the Strategy Command Center. Schedule a personalized
              demo to see how it can revolutionize your organization's strategic processes.
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
    </>
  )
}
