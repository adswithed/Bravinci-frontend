/**
 * Netherlands Industry - Manufacturing Page
 *
 * Operational intelligence and transformation expertise for
 * Netherlands manufacturing organisations.
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Factory,
  Cpu,
  Gauge,
  Network,
  Monitor,
  Leaf,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const landscapeChallenges = [
  'Legacy manufacturing execution systems limiting operational agility and data integration',
  'Industry 4.0 adoption complexity spanning IoT, digital twins, and AI-powered automation',
  'Supply chain disruptions demanding greater visibility and resilience across supplier networks',
  'Sustainability mandates including CSRD reporting, carbon reduction targets, and circular economy requirements',
  'Workforce transformation as digital manufacturing demands new skills in data analytics and automation',
  'Quality management complexity in high-precision sectors such as semiconductors, food processing, and chemicals',
]

const howWeHelp = [
  'Manufacturing intelligence platforms integrating MES, ERP, IoT, and quality management data into unified operational dashboards',
  'Predictive maintenance and equipment performance analytics that reduce unplanned downtime and extend asset lifecycles',
  'Supply chain integration solutions connecting manufacturers with suppliers, logistics providers, and distribution partners',
  'Digital transformation programmes that modernise production operations while maintaining operational continuity',
  'ESG data collection, analytics, and reporting solutions meeting CSRD and industry-specific sustainability requirements',
  'Quality management intelligence combining statistical process control, root cause analysis, and predictive quality analytics',
]

const solutions = [
  {
    icon: Cpu,
    title: 'Manufacturing Intelligence and MES Integration',
    description:
      'Unified manufacturing intelligence platforms that integrate data from manufacturing execution systems, ERP platforms, IoT sensors, and quality management systems. Our solutions provide real-time operational visibility, production performance analytics, and decision support capabilities that enable data-driven manufacturing management across the shop floor and enterprise levels.',
    color: '#0E78AA',
  },
  {
    icon: Gauge,
    title: 'Operational Performance Analytics',
    description:
      'Advanced analytics for overall equipment effectiveness (OEE), predictive maintenance, energy consumption optimisation, and production scheduling. We help Netherlands manufacturers identify performance improvement opportunities, predict equipment failures before they occur, and optimise production processes to maximise throughput, quality, and resource efficiency.',
    color: '#F7AE57',
  },
  {
    icon: Network,
    title: 'Supply Chain Integration',
    description:
      'End-to-end supply chain visibility and integration solutions that connect manufacturers with their upstream suppliers and downstream distribution networks. Our platforms enable collaborative planning, real-time inventory visibility, demand-driven production scheduling, and proactive disruption management across the manufacturing supply chain.',
    color: '#0E78AA',
  },
  {
    icon: Monitor,
    title: 'Digital Transformation for Manufacturing',
    description:
      'Comprehensive digital transformation programmes that guide Netherlands manufacturers through the transition to Industry 4.0 operating models. We address the full transformation spectrum including IoT infrastructure deployment, digital twin implementation, AI-powered automation, cloud migration, and the organisational change management required to sustain digital manufacturing capabilities.',
    color: '#F7AE57',
  },
  {
    icon: Leaf,
    title: 'ESG and Sustainability Reporting',
    description:
      'Integrated sustainability data management and reporting solutions designed for the specific requirements of manufacturing organisations. Our platforms automate the collection of environmental data including energy consumption, emissions, waste generation, and water usage, and transform this data into compliant CSRD disclosures and actionable sustainability intelligence.',
    color: '#0E78AA',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Management Intelligence',
    description:
      'Intelligent quality management solutions that combine statistical process control, automated inspection analytics, root cause analysis, and predictive quality modelling. We help manufacturers move from reactive quality management to proactive, data-driven approaches that reduce defect rates, minimise waste, and ensure consistent product quality across production lines.',
    color: '#F7AE57',
  },
]

export function NetherlandsIndustryManufacturingPage() {
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
                <Factory className="w-4 h-4 text-[#0E78AA]" />
                <span>Manufacturing</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Operational intelligence and transformation expertise for </span>
                <span className="gradient-text">Netherlands manufacturing organisations</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Bravinci Netherlands partners with manufacturing organisations to transform operational performance through data intelligence, smart manufacturing technologies, and integrated digital transformation programmes.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/netherlands/contact">
                    Discuss Your Manufacturing Objectives
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
                    The Netherlands Manufacturing Landscape
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Netherlands is home to a diverse and technologically advanced manufacturing sector that spans high-tech systems, semiconductors, food and beverage processing, chemicals and materials, and precision engineering. The Eindhoven region in particular has established itself as a global centre for high-tech manufacturing and innovation. Dutch manufacturers have established global leadership positions through continuous innovation, operational excellence, and strategic investment in advanced manufacturing technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Netherlands manufacturers face a transformative period driven by the convergence of Industry 4.0 technologies, sustainability imperatives, and supply chain restructuring. The transition to smart manufacturing demands integration of OT and IT systems, IoT sensors, digital twins, AI-powered analytics, and advanced automation with existing production systems, a complex undertaking that requires both technical expertise and organisational change management capability. Simultaneously, CSRD sustainability reporting requirements, carbon reduction targets, and circular economy mandates are adding new dimensions of complexity to manufacturing operations.
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
                  Netherlands manufacturing organisations face interconnected pressures that demand integrated intelligence and transformation capabilities across operations, supply chains, and sustainability.
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
                  We combine deep manufacturing domain expertise with advanced analytical, technology, and change management capabilities to deliver measurable operational improvements.
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
                <span className="text-foreground">Manufacturing </span>
                <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Six specialised solution areas designed to address the full spectrum of manufacturing intelligence and transformation requirements for Netherlands organisations.
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

        {/* CTA Section */}
        <section
          id="cta"
          data-section="cta"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Discuss Your Manufacturing Transformation Priorities
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our Netherlands industry practice to explore how Bravinci can support your operational performance and digital transformation agenda.
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
