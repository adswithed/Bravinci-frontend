'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Leaf,
  FileCheck,
  Database,
  Factory,
  Shield,
  Landmark,
  Users,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const keyTopics = [
  {
    icon: FileCheck,
    title: 'CSRD Implementation',
    description:
      'Comprehensive intelligence on Corporate Sustainability Reporting Directive implementation for Dutch organisations. Covers the phased CSRD rollout timeline and which Netherlands organisations are affected at each stage, European Sustainability Reporting Standards (ESRS) requirements and practical interpretation, double materiality assessment methodologies, assurance readiness preparation, and the integration of CSRD reporting requirements with existing financial reporting processes. Addresses the practical challenge of building CSRD capability that meets regulatory requirements without creating an unsustainable parallel reporting burden.',
  },
  {
    icon: Database,
    title: 'ESG Data Architecture',
    description:
      'Intelligence on building the data infrastructure required to support credible, auditable, and efficient ESG reporting and decision-making. Covers ESG data collection and aggregation strategies across complex organisational structures, data quality frameworks specific to ESG metrics, the integration of ESG data with financial and operational data systems, ESG data platform selection and implementation, and the automation of ESG data workflows to reduce manual collection burden. Particularly relevant for Dutch organisations that need to move beyond spreadsheet-based ESG data management to scalable, auditable data architectures.',
  },
  {
    icon: Factory,
    title: 'Scope 3 Emissions Management',
    description:
      'Practical intelligence on the most challenging dimension of carbon accounting for Netherlands organisations. Covers Scope 3 category prioritisation and boundary-setting methodologies, supplier engagement strategies for emissions data collection, spend-based versus activity-based calculation approaches, Scope 3 data quality improvement roadmaps, and the use of technology and AI for Scope 3 estimation and tracking. Addresses the fundamental tension between the pressure for comprehensive Scope 3 reporting and the practical reality that high-quality Scope 3 data is extremely difficult to obtain across complex global supply chains.',
  },
  {
    icon: Shield,
    title: 'ESG Governance Frameworks',
    description:
      'Intelligence on designing governance structures that embed ESG considerations into organisational decision-making rather than treating sustainability as a standalone reporting function. Covers board-level ESG oversight structures, ESG committee design and mandate, ESG target-setting and incentive alignment, internal ESG assurance and control frameworks, and the integration of ESG risk into enterprise risk management. Examines how leading Dutch organisations are evolving their governance structures to reflect the strategic importance of ESG while maintaining practical decision-making efficiency.',
  },
  {
    icon: Landmark,
    title: 'Sustainable Finance Taxonomy',
    description:
      'Navigating the EU Taxonomy Regulation and its implications for Dutch organisations across sectors. Covers taxonomy eligibility and alignment assessment methodologies, technical screening criteria interpretation for key Dutch industry sectors, the relationship between taxonomy reporting and CSRD requirements, taxonomy-aligned investment and financing strategies, and the evolving taxonomy framework including social taxonomy developments. Provides practical guidance for organisations that need to understand their taxonomy position for both compliance and strategic financing purposes.',
  },
  {
    icon: Users,
    title: 'Social and Governance Dimensions',
    description:
      'Intelligence on the social and governance dimensions of ESG that are increasingly receiving regulatory and stakeholder attention alongside environmental factors. Covers CSRD social reporting requirements including workforce, communities, and value chain workers, human rights due diligence under emerging EU legislation, diversity, equity, and inclusion measurement and reporting, governance quality assessment beyond basic compliance, and stakeholder engagement approaches that generate genuine insight rather than performative consultation. Addresses the common challenge that many organisations have focused ESG efforts heavily on environmental metrics while the social and governance dimensions are now demanding equivalent strategic attention.',
  },
]

export function NetherlandsInsightESGPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="nl-esg-hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
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
                <Leaf className="w-4 h-4 text-[#0E78AA]" />
                <span>ESG</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">ESG</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Intelligence for Netherlands organisations navigating European sustainability reporting and ESG strategy
              </p>
            </div>
          </div>
        </section>

        {/* Framing Section */}
        <section id="nl-esg-framing" data-section="framing" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                ESG has moved from a voluntary reporting preference to a mandatory regulatory requirement for a growing number of Netherlands organisations. The Corporate Sustainability Reporting Directive, the EU Taxonomy Regulation, and emerging supply chain due diligence legislation are creating a fundamentally new compliance and strategic landscape that demands structured intelligence and informed decision-making.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For Dutch organisations, the challenge extends beyond compliance. The Netherlands has historically been at the forefront of European sustainability leadership, and stakeholder expectations from investors, customers, employees, and regulators continue to increase. Organisations need intelligence that helps them navigate mandatory requirements while building ESG capabilities that genuinely drive value creation and competitive differentiation.
              </p>
            </div>
          </div>
        </section>

        {/* Key Topics */}
        <section id="nl-esg-topics" data-section="topics" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key </span>
                <span className="gradient-text">Topics</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep dives into the critical areas of ESG strategy and reporting
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
        <section id="nl-esg-cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore ESG Insights
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Access strategic intelligence on ESG reporting, sustainability strategy, and European regulatory compliance for Netherlands organisations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/netherlands/contact">
                  Explore ESG Insights
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
