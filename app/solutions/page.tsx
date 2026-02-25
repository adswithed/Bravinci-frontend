'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { GlobalSiteWrapper } from '@/components/global-site-wrapper'
import { Button } from '@/components/ui/button'
import {
  Layers,
  ArrowRight,
  Monitor,
  Database,
  Users,
  Zap,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const solutions = [
  {
    title: 'Dividos',
    badge: 'Data Platform',
    description: 'Advanced scenario planning and strategic stress-testing platform that helps leadership teams evaluate multiple futures, quantify strategic options, and prepare for uncertainty with confidence. Dividos transforms strategic planning from annual exercises into continuous intelligence capability.',
    icon: Database,
    href: '/solutions/dividos',
    color: '#F7AE57',
    features: [
      'Data sovereignty and local hosting',
      'Advanced analytics and business intelligence',
      'Data warehousing and integration',
      'Artificial intelligence and GenAI',
      'High availability architecture',
      'Open architecture - no vendor lock-in'
    ],
  },
  {
    title: 'Strategic Command Center',
    badge: 'Intelligence Hub',
    description: 'Real-time executive intelligence dashboard consolidating critical business signals, performance metrics, and external intelligence into a unified decision support environment. Transform information overload into strategic clarity with automated insight generation and alert prioritization.',
    icon: Monitor,
    href: '/solutions/strategy-command-center',
    color: '#0E78AA',
    features: [
      'Real-time KPI monitoring',
      'Competitive intelligence radar',
      'Strategic roadmap management',
      'Threat & opportunity analysis',
      'OKR tracking and visualization',
      'Battle cards for competitive positioning'
    ],
  },
  {
    title: 'Data2Hire',
    badge: 'Talent Intelligence',
    description: 'AI-powered talent intelligence platform that connects organizations with specialized expertise through data-driven matching, skills assessment, and workforce optimization. Accelerate hiring velocity while improving quality of talent acquisition and retention outcomes.',
    icon: Users,
    href: '/solutions/data2hire',
    color: '#0E78AA',
    features: [
      'AI-powered candidate matching',
      'Skills assessment and gap analysis',
      'Cultural fit evaluation',
      'Performance forecasting',
      'Global talent market intelligence',
      'Retention risk assessment'
    ],
  }
]

export default function SolutionsPage() {
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

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div
              className={cn(
                'transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
                <Layers className="w-4 h-4 text-[#0E78AA]" />
                <span>Our Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Purpose-Built Intelligence Platforms for </span>
                <span className="gradient-text">Strategic Advantage</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                While our services address client-specific challenges through customized solutions,
                Bravinci has also developed proprietary platforms that solve recurring problems across
                organizations and sectors. These solutions represent years of domain expertise crystallized
                into deployable intelligence systems.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                const isEven = index % 2 === 0
                return (
                  <div
                    key={solution.title}
                    className={cn(
                      'grid lg:grid-cols-2 gap-12 items-center',
                      !isEven && 'lg:flex-row-reverse'
                    )}
                  >
                    {/* Content */}
                    <div className={!isEven ? 'lg:order-2' : ''}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                        style={{ backgroundColor: `${solution.color}15`, color: solution.color }}
                      >
                        <Sparkles className="w-3 h-3" />
                        {solution.badge}
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span style={{ color: solution.color }}>{solution.title}</span>
                      </h2>

                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {solution.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {solution.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: solution.color }} />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        size="lg"
                        className="font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: solution.color }}
                        asChild
                      >
                        <Link href={solution.href}>
                          View {solution.title}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>

                    {/* Visual */}
                    <div className={cn('relative', !isEven ? 'lg:order-1' : '')}>
                      <div className="relative p-8 rounded-3xl glass-card border-t-4"
                        style={{ borderTopColor: solution.color }}
                      >
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                          style={{ backgroundColor: `${solution.color}15` }}
                        >
                          <Icon className="w-10 h-10" style={{ color: solution.color }} />
                        </div>

                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-foreground mb-2">{solution.title}</h3>
                          <p className="text-muted-foreground">{solution.badge}</p>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-4">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: `${solution.color}10` }}>
                              <div className="h-2 rounded-full mb-2" style={{ backgroundColor: `${solution.color}40`, width: `${60 + i * 10}%` }} />
                              <div className="h-2 rounded-full" style={{ backgroundColor: `${solution.color}20`, width: `${40 + i * 15}%` }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Choose </span>
                <span className="gradient-text">Bravinci Solutions?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our solutions combine best practices, proven methodologies, and advanced technology
                into platforms that accelerate value delivery and reduce implementation risk.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-3xl glass-card">
                <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-[#0E78AA]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Rapid Deployment</h3>
                <p className="text-muted-foreground">
                  Ready-to-deploy solutions that accelerate time-to-value compared to custom development.
                </p>
              </div>

              <div className="text-center p-8 rounded-3xl glass-card">
                <div className="w-16 h-16 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-[#F7AE57]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Domain Expertise</h3>
                <p className="text-muted-foreground">
                  Years of domain expertise crystallized into deployable intelligence systems.
                </p>
              </div>

              <div className="text-center p-8 rounded-3xl glass-card">
                <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#0E78AA]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Reduced Risk</h3>
                <p className="text-muted-foreground">
                  Proven platforms that reduce implementation risk and ensure consistent outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Find the Right Solution for Your Organization
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Not sure which solution fits your needs? Our experts can help you identify
              the perfect combination of platforms and services for your strategic objectives.
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
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
