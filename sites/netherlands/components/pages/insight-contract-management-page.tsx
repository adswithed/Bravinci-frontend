'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  FileText,
  Brain,
  Users,
  Shield,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const keyTopics = [
  {
    icon: FileText,
    title: 'Contract Lifecycle Management Technology',
    description:
      'Intelligence on the evolving contract lifecycle management technology landscape and how Netherlands organisations can make informed platform selection and implementation decisions. Covers CLM platform evaluation frameworks that go beyond feature checklists to assess organisational fit, implementation complexity, and total cost of ownership. Examines integration requirements with existing ERP, procurement, and legal technology ecosystems, deployment model considerations including cloud versus on-premises trade-offs in the context of European data sovereignty requirements, and the practical implementation challenges that determine whether CLM investments deliver their promised value or become expensive shelfware.',
  },
  {
    icon: Brain,
    title: 'Contract Intelligence and Analytics',
    description:
      'Practical intelligence on applying AI, natural language processing, and analytics capabilities to extract strategic value from contract portfolios. Covers contract analytics use cases from basic obligation extraction to advanced risk scoring and commercial optimisation, AI-powered contract review and analysis tool evaluation, the data preparation and taxonomy requirements for effective contract intelligence, and approaches to building contract analytics capabilities that serve legal, procurement, finance, and commercial functions simultaneously. Addresses the gap between vendor marketing promises about AI-powered contract intelligence and the practical reality of implementation in complex enterprise environments.',
  },
  {
    icon: Users,
    title: 'Supplier Contract Performance Management',
    description:
      'Intelligence on transforming supplier contract management from a procurement administration function into a strategic performance management capability. Covers supplier contract KPI design and measurement frameworks, the integration of contract performance data with broader supplier relationship management, automated compliance monitoring and obligation tracking, commercial optimisation through systematic contract review and renegotiation programmes, and approaches to managing contract performance across complex multi-tier supply chains. Particularly relevant for Dutch organisations with significant international supplier networks where contract performance management complexity is amplified by cross-border legal and regulatory considerations.',
  },
  {
    icon: Shield,
    title: 'Legal and Regulatory Compliance in Contracts',
    description:
      'Navigating the increasingly complex regulatory requirements that affect contract content, structure, and management for Netherlands organisations. Covers GDPR data processing agreement requirements and management at scale, Dutch Civil Code contract law considerations and recent developments, EU regulatory requirements affecting contract terms including emerging AI Act obligations, sector-specific contractual compliance requirements for regulated Dutch industries, and approaches to maintaining regulatory currency across large contract portfolios without requiring individual manual review of every agreement. Addresses the challenge of embedding regulatory compliance into contract templates, approval workflows, and monitoring processes rather than relying on post-execution compliance review.',
  },
  {
    icon: AlertTriangle,
    title: 'Contract Risk Assessment',
    description:
      'Intelligence on building systematic contract risk assessment capabilities that identify and quantify contractual risks before they materialise as commercial, legal, or operational problems. Covers contract risk taxonomy design and categorisation, risk scoring methodologies that balance comprehensiveness with practical usability, portfolio-level risk aggregation and reporting, the integration of contract risk data with enterprise risk management frameworks, and automated risk monitoring capabilities that flag emerging risks in real-time. Examines how Netherlands organisations can move from reactive contract risk management where problems are identified after they occur to proactive risk intelligence that enables informed risk-taking and risk mitigation.',
  },
]

export function NetherlandsInsightContractManagementPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="nl-contract-hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
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
                <FileText className="w-4 h-4 text-[#0E78AA]" />
                <span>Contract Management</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Contract </span>
                <span className="gradient-text">Management</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Intelligence for Netherlands organisations transforming contract management into a competitive capability
              </p>
            </div>
          </div>
        </section>

        {/* Framing Section */}
        <section id="nl-contract-framing" data-section="framing" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contract management is a frequently underinvested organisational capability that represents significant latent value for Netherlands organisations. The typical Dutch enterprise manages thousands of active contracts representing billions in committed expenditure and revenue, yet many organisations lack the technology, processes, and analytical capabilities to extract full value from these contractual relationships or to identify and mitigate contractual risks before they materialise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The convergence of advancing contract intelligence technology, increasing regulatory complexity affecting contract requirements, and growing pressure to optimise commercial relationships creates both urgency and opportunity for Dutch organisations to transform their contract management capabilities from administrative overhead into strategic competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Key Topics */}
        <section id="nl-contract-topics" data-section="topics" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key </span>
                <span className="gradient-text">Topics</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep dives into the critical areas of contract management transformation
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
        <section id="nl-contract-cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore Contract Management Insights
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Access strategic intelligence on contract lifecycle management, contract analytics, and compliance for Netherlands organisations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/netherlands/contact">
                  Explore Contract Management Insights
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
