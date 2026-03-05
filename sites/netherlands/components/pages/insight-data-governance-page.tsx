'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Database,
  Shield,
  Globe,
  Building2,
  Cloud,
  CheckCircle2,
  Brain,
  Layers,
  ArrowRight,
  Lightbulb,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const keyTopics = [
  {
    icon: Shield,
    title: 'GDPR Implementation Maturity',
    description:
      'Analysis of how Dutch organisations are progressing beyond basic GDPR compliance toward mature, operationalised data protection programmes. Covers the evolution from initial compliance efforts to embedded privacy-by-design practices, consent management sophistication, data subject rights automation, and the integration of privacy impact assessments into standard business processes. Examines where Dutch organisations stand relative to European peers and identifies common maturity gaps that create regulatory and operational risk.',
  },
  {
    icon: Globe,
    title: 'European Data Sovereignty Developments',
    description:
      'Tracking the rapidly evolving European data sovereignty landscape and its implications for Dutch organisations. Covers EU Data Act implementation timelines, the European Data Governance Act, Gaia-X developments and their practical relevance, the evolving Schrems II landscape, and emerging national data sovereignty positions across key European markets. Provides strategic context for understanding how sovereignty requirements will reshape data architecture, vendor selection, and cross-border data flow decisions.',
  },
  {
    icon: Database,
    title: 'Data Repatriation Assessment Frameworks',
    description:
      'Practical frameworks for evaluating whether, when, and how to repatriate data from hyperscaler environments to European or on-premises infrastructure. Covers total cost of ownership analysis beyond simple compute comparisons, data classification methodologies for repatriation prioritisation, migration risk assessment, hybrid architecture design patterns, and the operational capabilities required to manage repatriated data effectively. Addresses the common challenge of building a credible business case that balances sovereignty aspirations with operational pragmatism.',
  },
  {
    icon: Building2,
    title: 'Data Governance Operating Models',
    description:
      'Intelligence on designing and implementing data governance operating models that actually work within Dutch organisational cultures. Covers the spectrum from centralised to federated to data mesh-inspired governance models, role definition and accountability frameworks, data stewardship programme design, executive sponsorship structures, and change management approaches that drive genuine adoption rather than paper compliance. Examines what distinguishes governance programmes that deliver measurable value from those that become bureaucratic overhead.',
  },
  {
    icon: Cloud,
    title: 'Cloud Data Governance',
    description:
      'Addressing the specific governance challenges created by cloud and multi-cloud data environments. Covers cloud-native governance tooling evaluation, cross-cloud policy enforcement, data residency controls, cloud provider lock-in risk assessment, shared responsibility model implications for governance, and the integration of cloud data governance with broader enterprise governance frameworks. Particularly relevant for Dutch organisations managing data across multiple cloud providers while maintaining regulatory compliance.',
  },
  {
    icon: CheckCircle2,
    title: 'Data Quality Management',
    description:
      'Intelligence on building sustainable data quality management capabilities that support both regulatory compliance and business value creation. Covers data quality dimension frameworks, automated quality monitoring and remediation, quality metrics and KPI design, the relationship between data quality and AI/ML model performance, master data management integration, and approaches to making data quality a shared organisational responsibility rather than an IT-owned burden.',
  },
  {
    icon: Brain,
    title: 'AI Data Governance',
    description:
      'Navigating the emerging governance requirements specifically created by AI and machine learning adoption. Covers training data governance, model data lineage requirements, bias detection and fairness monitoring, the EU AI Act data governance obligations, synthetic data governance considerations, and the integration of AI-specific governance requirements into existing data governance frameworks. Addresses the challenge of governing AI data assets that behave fundamentally differently from traditional structured data.',
  },
  {
    icon: Layers,
    title: 'Data Catalogue and Lineage Management',
    description:
      'Practical intelligence on implementing and operationalising data catalogue and lineage capabilities as foundational governance infrastructure. Covers data catalogue platform selection and implementation approaches, automated metadata harvesting, business glossary development, data lineage capture at both technical and business levels, catalogue adoption and engagement strategies, and integration with broader data governance and compliance workflows. Focuses on approaches that deliver practical findability and understanding rather than comprehensive but unused metadata repositories.',
  },
]

export function NetherlandsInsightDataGovernancePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="nl-data-governance-hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
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
                <span>Data Governance</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Data Governance </span>
                <span className="gradient-text">and Repatriation</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Intelligence for Netherlands organisations navigating data governance complexity and European data sovereignty
              </p>
            </div>
          </div>
        </section>

        {/* Framing Section */}
        <section id="nl-data-governance-framing" data-section="framing" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Data governance has moved from a back-office compliance discipline to a strategic boardroom priority for Dutch organisations. GDPR obligations, evolving European data sovereignty requirements, and the growing competitive importance of trustworthy data assets have elevated data governance to the top of organisational agendas. Simultaneously, Netherlands organisations are navigating data repatriation questions as they assess whether data currently held by US-based cloud providers meets emerging European data sovereignty standards and what operational and cost implications arise from repatriation decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Key Topics */}
        <section id="nl-data-governance-topics" data-section="topics" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key </span>
                <span className="gradient-text">Topics</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep dives into the critical areas of data governance and repatriation
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
        <section id="nl-data-governance-why" data-section="why-this-matters" className="py-20 relative overflow-hidden">
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
                        Data governance effectiveness is increasingly a competitive differentiator for Netherlands organisations, not merely a compliance requirement. Organisations with mature data governance develop more reliable analytics, make better data-driven decisions, and manage regulatory risk more cost-effectively than those with immature governance foundations. The investment in governance capability generates compounding returns across every data-dependent organisational function.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="nl-data-governance-cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore Data Governance Intelligence
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Access strategic intelligence on data governance, European data sovereignty, and repatriation assessment to inform your organisation&apos;s data strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/netherlands/contact">
                  Explore Data Governance Intelligence
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
