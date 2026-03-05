/**
 * Netherlands Industry - Supply Chain & Logistics Page
 *
 * Strategic intelligence and transformation expertise for
 * Netherlands supply chain and logistics organisations.
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Ship,
  Eye,
  Search,
  BarChart3,
  ShieldAlert,
  FileCheck,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers,
  Target,
  TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const landscapeChallenges = [
  'Multi-modal logistics coordination across road, rail, water, and air networks',
  'Real-time visibility demands across increasingly complex global supply chains',
  'Regulatory compliance spanning Dutch, European, and international trade frameworks',
  'Sustainability mandates including CSRD reporting and carbon footprint reduction',
  'Digital transformation of legacy warehouse management and transport systems',
  'Talent shortages in data analytics, supply chain planning, and digital logistics',
]

const howWeHelp = [
  'End-to-end supply chain visibility platforms integrating data from multiple logistics partners and systems',
  'Predictive analytics for demand planning, inventory optimisation, and capacity management',
  'Strategic sourcing intelligence combining market data, supplier performance, and risk indicators',
  'Regulatory compliance automation for customs, trade, and sustainability reporting',
  'Digital twin and simulation capabilities for supply chain network design and optimisation',
  'Change management and capability building programmes for supply chain teams',
]

const solutions = [
  {
    icon: Eye,
    title: 'Supply Chain Intelligence and Visibility',
    description:
      'Comprehensive visibility platforms that integrate data across suppliers, manufacturers, logistics providers, and distribution networks. Our solutions provide real-time tracking, exception management, and predictive alerting to enable proactive supply chain management across the Netherlands and European logistics corridors.',
    color: '#0E78AA',
  },
  {
    icon: Search,
    title: 'Strategic Sourcing Analytics',
    description:
      'Data-driven sourcing intelligence that combines supplier performance analytics, market intelligence, total cost of ownership modelling, and risk assessment. We help procurement teams make evidence-based sourcing decisions that balance cost, quality, reliability, and sustainability considerations.',
    color: '#F7AE57',
  },
  {
    icon: BarChart3,
    title: 'Logistics Performance Optimisation',
    description:
      'Advanced analytics for transport planning, route optimisation, warehouse efficiency, and last-mile delivery performance. Our solutions leverage the Netherlands&apos; unique multi-modal infrastructure to identify optimisation opportunities across road, rail, waterway, and air freight networks.',
    color: '#0E78AA',
  },
  {
    icon: ShieldAlert,
    title: 'Supply Chain Risk Intelligence',
    description:
      'Proactive risk identification and mitigation platforms that monitor geopolitical, environmental, financial, and operational risks across the supply chain. We help organisations build resilient supply networks capable of absorbing disruptions and maintaining service levels during periods of volatility.',
    color: '#F7AE57',
  },
  {
    icon: FileCheck,
    title: 'Regulatory and Sustainability Compliance',
    description:
      'Automated compliance solutions addressing Dutch and European regulatory requirements including customs procedures, trade compliance, CSRD sustainability reporting, and carbon emissions tracking. Our platforms reduce compliance burden while ensuring accuracy and audit readiness.',
    color: '#0E78AA',
  },
  {
    icon: Cpu,
    title: 'Digital Supply Chain Transformation',
    description:
      'End-to-end digital transformation programmes that modernise supply chain operations through IoT integration, AI-powered planning, blockchain-enabled traceability, and cloud-based collaboration platforms. We guide organisations from strategy through implementation to sustained operational excellence.',
    color: '#F7AE57',
  },
]

const whyChooseItems = [
  {
    icon: Globe,
    title: 'Ecosystem Understanding',
    description:
      'Deep knowledge of the Netherlands logistics ecosystem, including Rotterdam Port, Schiphol logistics hub, and the extensive inland waterway and rail networks that make the Netherlands Europe&apos;s premier logistics gateway. Our consultants understand the specific dynamics, regulatory frameworks, and competitive pressures that shape Dutch supply chain operations.',
    color: '#0E78AA',
  },
  {
    icon: Layers,
    title: 'Integrated Capability',
    description:
      'Strategy, analytics, technology implementation, and change management delivered as a unified programme. We eliminate the fragmentation that occurs when organisations engage separate providers for consulting, technology, and operational support, ensuring coherent delivery and faster time to value.',
    color: '#F7AE57',
  },
  {
    icon: Target,
    title: 'Outcome Focus',
    description:
      'Every engagement is structured around defined, measurable outcomes aligned with your supply chain performance objectives. We track progress against agreed KPIs throughout delivery and ensure that analytical insights translate into operational improvements that sustain beyond our direct involvement.',
    color: '#0E78AA',
  },
]

export function NetherlandsIndustrySupplyChainPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="hero"
          data-section="hero"
          className="py-20 md:py-32 relative overflow-hidden"
        >
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
                <Ship className="w-4 h-4 text-[#0E78AA]" />
                <span>Supply Chain &amp; Logistics</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Strategic intelligence and transformation expertise for the </span>
                <span className="gradient-text">Netherlands supply chain leaders</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Bravinci Netherlands partners with supply chain and logistics organisations to transform operational performance through data intelligence, strategic analytics, and digital innovation.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/netherlands/contact">
                    Discuss Your Supply Chain Objectives
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                  asChild
                >
                  <Link href="/netherlands/industries">All Industries</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Landscape */}
        <section
          id="landscape"
          data-section="landscape"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-3xl glass-card border-l-4 border-[#F7AE57]">
                <div className="flex items-start gap-4 mb-6">
                  <TrendingUp className="w-8 h-8 text-[#F7AE57] shrink-0 mt-1" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    The Netherlands Supply Chain Landscape
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Netherlands sits at the heart of European supply chain infrastructure, with Rotterdam Port serving as the continent&apos;s largest logistics gateway and Dutch companies operating globally competitive logistics, distribution, and supply chain operations. This position creates both significant opportunities and complex management challenges; organisations must simultaneously maintain operational efficiency at world-class standards, navigate evolving European regulatory requirements, manage geopolitical supply chain risks, and invest in digital and sustainable transformation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The complexity facing Netherlands supply chain organisations is accelerating. Global disruptions, sustainability mandates, digital transformation imperatives, and increasing customer expectations for speed and visibility are reshaping the competitive landscape. Success requires a new generation of intelligence capabilities that transform data from across the supply chain into actionable strategic and operational insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & How We Help */}
        <section
          id="challenges"
          data-section="challenges"
          className="py-20 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Industry </span>
                  <span className="gradient-text">Challenges</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Netherlands supply chain organisations face a converging set of pressures that demand integrated intelligence and transformation capabilities.
                </p>
                <div className="space-y-3">
                  {landscapeChallenges.map((challenge, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg glass-card">
                      <CheckCircle2 className="w-5 h-5 text-[#F7AE57] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">How We </span>
                  <span className="gradient-text">Help</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We bring strategic intelligence and operational transformation expertise to supply chain and logistics organisations seeking to build competitive advantage through superior data capability, operational performance, and strategic positioning. Our engagements combine supply chain strategy, analytics and intelligence, systems integration, and workforce capability development into coherent transformation programmes designed for the Netherlands operating environment.
                </p>
                <div className="space-y-3">
                  {howWeHelp.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Cards */}
        <section
          id="solutions"
          data-section="solutions"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Supply Chain </span>
                <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Six specialised solution areas designed to address the full spectrum of supply chain intelligence and transformation requirements for Netherlands organisations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <div
                    key={solution.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${solution.color}10` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: solution.color }} />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section
          id="why-choose"
          data-section="why-choose"
          className="py-20 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Supply Chain Organisations </span>
                <span className="gradient-text">Choose Bravinci</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                What distinguishes Bravinci&apos;s supply chain practice from conventional consulting and technology providers in the Netherlands logistics market.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {whyChooseItems.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${item.color}10` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          data-section="cta"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Discuss Your Supply Chain Transformation Objectives
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our Netherlands industry practice to explore how Bravinci can support your supply chain strategy and performance agenda.
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
                <Link href="/netherlands/industries">All Industries</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
