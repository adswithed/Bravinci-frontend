'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  Database,
  Brain,
  TrendingUp,
  Network,
  LineChart,
  MessageSquare,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Target,
  Award,
  Activity
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const capabilities = [
  {
    icon: Shield,
    title: 'Data Strategy and Governance Frameworks',
    description: 'Establish comprehensive data governance and strategic frameworks for enterprise-wide data management.',
  },
  {
    icon: Network,
    title: 'Enterprise Data Architecture and Integration',
    description: 'Design scalable data architectures that enable seamless integration across systems and platforms.',
  },
  {
    icon: LineChart,
    title: 'Advanced Analytics and Visualization',
    description: 'Transform complex data into actionable insights with sophisticated analytics and visualization.',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence and Machine Learning',
    description: 'Implement AI and ML solutions that automate decisions and unlock predictive capabilities.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Modeling and Forecasting',
    description: 'Build accurate predictive models that enable proactive decision-making and planning.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing and Automation',
    description: 'Leverage NLP to automate text analysis, enhance customer interactions, and extract insights.',
  },
  {
    icon: Zap,
    title: 'Real-time Analytics and Operational Intelligence',
    description: 'Enable real-time data processing and operational intelligence for instant decision-making.',
  },
  {
    icon: Database,
    title: 'Data Quality and Master Data Management',
    description: 'Ensure data accuracy, consistency, and reliability through robust quality and MDM practices.',
  },
]

const outcomes = [
  {
    stat: '70%',
    label: 'Reduction in Report Generation',
    description: 'Automated insights delivery and self-service analytics',
    icon: Zap,
  },
  {
    stat: '40%',
    label: 'Forecast Improvement',
    description: 'Enhanced prediction accuracy with ML models',
    icon: Target,
  },
  {
    stat: '5-15%',
    label: 'Revenue Opportunities',
    description: 'Data-driven insights unlock new growth paths',
    icon: TrendingUp,
  },
]

export function GlobalServiceDataAIPage() {
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
                <Database className="w-4 h-4 text-[#0E78AA]" />
                <span>Data & AI Enablement</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Transform data assets into </span>
                <span className="gradient-text">decision advantage</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Organizations accumulate vast data volumes but struggle to extract intelligence that drives competitive advantage. Fragmented data architectures, inconsistent governance, limited analytical capabilities, and unclear AI strategies prevent organizations from converting data assets into decision-making power. The challenge isn't data availability—it's building intelligence systems that transform information into actionable insight and automated advantage.
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
                  <span className="text-foreground">Intelligence systems that </span>
                  <span className="gradient-text">create advantage</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our data and AI practice builds intelligence architectures that convert information into sustainable competitive advantage. We design data platforms, analytics capabilities, and AI systems that don't just answer questions—they anticipate needs, automate decisions, and continuously learn to improve performance and unlock opportunities.
                </p>
                <div className="space-y-3">
                  {[
                    'Unified data architectures for enterprise intelligence',
                    'Advanced analytics that reveal hidden patterns',
                    'AI systems that automate and optimize decisions',
                    'Continuous learning for sustained advantage',
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
                      <p className="text-sm text-muted-foreground">AI-Powered</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Target className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Insight-Driven</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Brain className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Intelligent</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Activity className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Real-Time</p>
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
                Comprehensive data and AI services that transform information into competitive advantage.
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
                Organizations gain intelligence systems that accelerate insights, improve forecast accuracy, and reveal revenue opportunities hidden in data.
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
              Unlock Your Data's Potential
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Connect with our data and AI experts to discover how we can transform your data assets into decision advantage.
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
