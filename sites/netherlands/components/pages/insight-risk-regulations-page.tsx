'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Shield,
  Landmark,
  Brain,
  Building2,
  Users,
  Workflow,
  Leaf,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const keyTopics = [
  {
    icon: Landmark,
    title: 'Dutch Regulatory Landscape Overview',
    description:
      'Comprehensive intelligence on the Netherlands regulatory environment and its evolution. Covers the roles and evolving priorities of key Dutch regulators including the Autoriteit Financiele Markten (AFM), De Nederlandsche Bank (DNB), the Autoriteit Persoonsgegevens (AP), and the Autoriteit Consument en Markt (ACM). Examines recent enforcement trends, regulatory focus areas, and supervisory approach developments that signal where regulatory attention is heading. Provides strategic context for understanding how the Dutch regulatory environment compares to other European jurisdictions and where Netherlands-specific requirements create additional compliance obligations.',
  },
  {
    icon: Brain,
    title: 'EU AI Act Implications',
    description:
      'Detailed intelligence on the EU AI Act and its specific implications for Netherlands organisations deploying or developing AI systems. Covers the risk-based classification framework and how to assess which organisational AI applications fall into high-risk categories, conformity assessment requirements and timelines, transparency and documentation obligations, the role of national competent authorities in AI Act enforcement, and the practical steps Netherlands organisations should take to prepare for compliance. Addresses the intersection between AI Act requirements and existing Dutch regulatory obligations, particularly for financial services, healthcare, and public sector organisations where AI deployment is subject to multiple overlapping regulatory frameworks.',
  },
  {
    icon: Building2,
    title: 'DORA Implementation',
    description:
      'Intelligence on the Digital Operational Resilience Act and its implementation requirements for Netherlands financial sector organisations and their critical ICT service providers. Covers ICT risk management framework requirements, digital operational resilience testing obligations including threat-led penetration testing, ICT third-party risk management and oversight requirements, incident reporting obligations and timelines, and information sharing provisions. Examines the interaction between DORA requirements and existing DNB supervisory expectations, the practical implementation challenges for Dutch financial institutions of varying sizes, and approaches to DORA compliance that build genuine operational resilience rather than producing documentation-heavy compliance programmes.',
  },
  {
    icon: Users,
    title: 'Third-Party and Supply Chain Risk',
    description:
      'Intelligence on managing the growing regulatory and operational risks associated with third-party and supply chain dependencies. Covers the evolving Dutch and European regulatory expectations for third-party risk management, concentration risk assessment methodologies, fourth-party and nth-party risk visibility approaches, critical supplier due diligence frameworks, and the practical challenge of maintaining effective oversight across complex international supply chains. Particularly relevant for Netherlands organisations navigating the convergence of DORA third-party requirements, NIS2 supply chain security obligations, and emerging supply chain due diligence legislation, which collectively create a significantly more demanding third-party risk management landscape.',
  },
  {
    icon: Workflow,
    title: 'Model Risk Management',
    description:
      'Intelligence on building model risk management capabilities that meet regulatory expectations while enabling organisational use of increasingly sophisticated analytical and AI models. Covers model risk governance frameworks, model validation methodologies for both traditional statistical models and AI/ML models, model inventory and lifecycle management, regulatory expectations from DNB and the AFM regarding model risk, and the practical challenge of extending model risk management practices to cover the growing portfolio of AI models that organisations are deploying across operational processes. Addresses the tension between model risk management rigour and the speed of AI adoption that many Dutch organisations are pursuing.',
  },
  {
    icon: AlertTriangle,
    title: 'Operational Resilience',
    description:
      'Intelligence on building and demonstrating operational resilience capabilities that satisfy regulatory expectations and genuinely protect critical business services. Covers important business services identification and mapping, impact tolerance setting and testing, scenario testing and stress testing programme design, business continuity and disaster recovery integration with operational resilience frameworks, and regulatory reporting and self-assessment requirements. Examines how Netherlands organisations can build operational resilience capabilities that address the convergence of DORA, NIS2, and broader DNB supervisory expectations without creating duplicative compliance programmes for each regulatory framework.',
  },
  {
    icon: Leaf,
    title: 'ESG Regulatory Developments',
    description:
      'Tracking the rapidly evolving ESG regulatory landscape and its risk and compliance implications for Netherlands organisations. Covers the Corporate Sustainability Reporting Directive implementation timeline and requirements, EU Taxonomy Regulation compliance obligations, emerging supply chain sustainability due diligence legislation, greenwashing risk and regulatory enforcement developments, and the integration of ESG regulatory requirements into existing compliance and risk management frameworks. Addresses the challenge that ESG regulation is being developed and implemented across multiple EU legislative tracks simultaneously, creating a complex compliance landscape that requires coordinated organisational response rather than siloed compliance efforts.',
  },
]

export function NetherlandsInsightRiskRegulationsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="nl-risk-hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
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
                <Shield className="w-4 h-4 text-[#0E78AA]" />
                <span>Risk &amp; Regulations</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Risk & </span>
                <span className="gradient-text">Regulations</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Intelligence for Netherlands organisations navigating evolving Dutch and European regulatory requirements
              </p>
            </div>
          </div>
        </section>

        {/* Framing Section */}
        <section id="nl-risk-framing" data-section="framing" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Netherlands regulatory environment is simultaneously one of Europe&apos;s most sophisticated and most dynamic. Dutch organisations operate under the oversight of well-resourced, technically capable regulators who are increasingly coordinating with European supervisory authorities and adapting their approaches to address emerging risks including AI adoption, operational resilience, and sustainability-related financial risk.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For Netherlands organisations, the regulatory challenge is not simply keeping up with individual regulatory changes but understanding how multiple regulatory developments interact, identifying where new requirements create strategic implications beyond compliance, and building organisational capabilities that can adapt to continuous regulatory evolution without consuming disproportionate resources.
              </p>
            </div>
          </div>
        </section>

        {/* Key Topics */}
        <section id="nl-risk-topics" data-section="topics" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key </span>
                <span className="gradient-text">Topics</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep dives into the critical areas of risk and regulatory management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Why This Matters */}
        <section id="nl-risk-why" data-section="why-this-matters" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-foreground">Why This </span>
                  <span className="gradient-text">Matters</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="p-8 rounded-2xl glass-card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Lightbulb className="w-5 h-5 text-[#F7AE57]" />
                    </div>
                    <div>
                      <p className="text-muted-foreground leading-relaxed">
                        Regulatory change in the Netherlands and European context is accelerating, and the cost of reactive regulatory management, spanning remediation investment, regulatory enforcement risk, and competitive disadvantage, consistently exceeds the cost of proactive regulatory intelligence and programme management. Organisations with systematic regulatory intelligence capability convert compliance investment into competitive advantage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="nl-risk-cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore Risk and Regulations Insights
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Access strategic intelligence on Dutch and European regulatory developments, risk management, and compliance for Netherlands organisations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/netherlands/contact">
                  Explore Risk and Regulations Insights
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
