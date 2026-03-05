'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  BarChart3,
  Users,
  Zap,
  Shield,
  Brain,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const keyTopics = [
  {
    icon: BarChart3,
    title: 'BI Maturity Assessment',
    description:
      'Frameworks for evaluating where your organisation stands on the business intelligence maturity curve and identifying the highest-value next steps. Covers assessment methodologies that examine data infrastructure readiness, analytical capability depth, organisational data literacy, governance maturity, and cultural adoption. Provides benchmarking context specific to Netherlands organisations and practical roadmapping approaches that connect maturity improvement to measurable business outcomes rather than technology upgrades for their own sake.',
  },
  {
    icon: Users,
    title: 'Self-Service Analytics',
    description:
      'Intelligence on designing and implementing self-service analytics capabilities that genuinely empower business users while maintaining data quality, security, and governance standards. Covers platform selection considerations, data preparation and semantic layer design, user enablement and training programme design, governance guardrails that enable rather than restrict, and approaches to measuring self-service adoption and impact. Addresses the common Dutch organisational challenge of balancing analytical democratisation with the rigour expected by regulatory and compliance functions.',
  },
  {
    icon: Zap,
    title: 'Real-Time Analytics Architecture',
    description:
      'Practical intelligence on building real-time and near-real-time analytics capabilities for organisations that need to move beyond batch reporting to operational intelligence. Covers streaming data architecture patterns, event-driven analytics design, real-time dashboard and alerting implementation, the integration of real-time analytics with existing BI environments, and use case prioritisation frameworks that distinguish genuine real-time requirements from situations where near-real-time or refreshed batch approaches deliver equivalent business value at lower complexity and cost.',
  },
  {
    icon: Shield,
    title: 'BI Governance Frameworks',
    description:
      'Intelligence on establishing BI governance frameworks that ensure data quality, consistency, and trust across the organisation without creating bottlenecks that undermine agility. Covers BI centre of excellence design, metric definition and standardisation approaches, report and dashboard lifecycle management, data access and security governance, and the organisational change management required to embed governance practices into daily analytical workflows. Particularly relevant for Dutch organisations navigating the tension between decentralised business unit analytics and enterprise-wide consistency requirements.',
  },
  {
    icon: Brain,
    title: 'Analytics and AI Integration',
    description:
      'Navigating the convergence of traditional business intelligence with artificial intelligence and machine learning capabilities. Covers the practical integration of predictive models into BI workflows, augmented analytics capabilities and their current maturity, natural language query interfaces, automated insight generation, and the data engineering requirements for supporting both traditional BI and AI workloads. Addresses the strategic question of how to evolve existing BI investments to incorporate AI capabilities without disrupting established reporting and analytical workflows that the organisation depends upon.',
  },
  {
    icon: TrendingUp,
    title: 'Dutch Market BI Benchmarks',
    description:
      'Benchmarking intelligence specific to the Netherlands market covering BI technology adoption patterns, investment levels, organisational models, and capability maturity across Dutch industries. Covers sector-specific BI adoption benchmarks for financial services, manufacturing, logistics, technology, and public sector organisations. Provides context on Netherlands-specific factors including the influence of the Dutch data-progressive culture, the role of Amsterdam as a European technology hub, and how Dutch organisations compare to broader European and global peers on key BI capability dimensions.',
  },
]

export function NetherlandsInsightBusinessIntelligencePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="nl-bi-hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
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
                <span>Business Intelligence</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Business </span>
                <span className="gradient-text">Intelligence</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Intelligence for the Netherlands organisations building data-driven decision-making capability
              </p>
            </div>
          </div>
        </section>

        {/* Framing Section */}
        <section id="nl-bi-framing" data-section="framing" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Business intelligence capability has become a foundational requirement for competitive organisations in the Netherlands. The ability to transform data into actionable insight is no longer a differentiator but a baseline expectation from boards, regulators, and customers alike. Yet many Dutch organisations find themselves caught between legacy reporting environments that no longer meet their needs and the promise of modern analytics platforms that require significant investment and organisational change to deliver their potential.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This intelligence stream provides Netherlands organisations with the strategic context, practical frameworks, and market-specific benchmarking needed to make informed decisions about BI investment, architecture, and capability development. The focus is on connecting BI strategy to business outcomes rather than technology selection in isolation.
              </p>
            </div>
          </div>
        </section>

        {/* Key Topics */}
        <section id="nl-bi-topics" data-section="topics" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key </span>
                <span className="gradient-text">Topics</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep dives into the critical areas of business intelligence capability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyTopics.map((topic) => {
                const Icon = topic.icon
                return (
                  <div
                    key={topic.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#0E78AA]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 text-sm group-hover:text-[#0E78AA] transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="nl-bi-cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore Business Intelligence Insights
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Access strategic intelligence on business intelligence capability, analytics maturity, and data-driven decision-making for Netherlands organisations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/netherlands/contact">
                  Explore Business Intelligence Insights
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/netherlands/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
