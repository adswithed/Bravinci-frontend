/**
 * Netherlands Consulting Services Page
 *
 * Strategic advisory and implementation expertise addressing the Netherlands'
 * most complex organisational challenges across four integrated disciplines.
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import Link from 'next/link'
import {
  Briefcase,
  BarChart3,
  Brain,
  Network,
  Monitor,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Target,
  Shield,
  Users,
} from 'lucide-react'
import { cn } from '@/shared/lib/utils'

const biItems = [
  {
    title: 'BI Strategy and Architecture',
    description:
      'Designing comprehensive business intelligence strategies and technical architectures that align analytical capabilities with organisational objectives. We assess current BI maturity, define target-state architectures, and develop implementation roadmaps that ensure data investments deliver measurable strategic value across Netherlands organisations.',
  },
  {
    title: 'Data Governance and Management',
    description:
      'Establishing robust data governance frameworks that ensure data quality, compliance, and accessibility across the organisation. Our governance consulting addresses GDPR requirements, Dutch financial services regulations, and sector-specific data management obligations, creating governance structures that enable rather than constrain analytical ambition.',
  },
  {
    title: 'Analytics and Reporting Transformation',
    description:
      'Transforming analytical capabilities from retrospective reporting into predictive and prescriptive intelligence that informs strategic decision-making at every organisational level. We redesign reporting architectures, implement advanced analytics capabilities, and build self-service environments that democratise intelligence access while maintaining governance standards.',
  },
]

const aiItems = [
  {
    title: 'AI Strategy and Readiness',
    description:
      'Defining practical AI strategies that identify high-value use cases, assess organisational readiness across data, technology, talent, and governance dimensions, and establish clear implementation pathways aligned with business priorities. Our AI strategy consulting addresses the specific opportunities and constraints facing Netherlands organisations, including EU AI Act compliance requirements.',
  },
  {
    title: 'AI Implementation and Integration',
    description:
      'Guiding organisations through the complexities of AI deployment, from model selection and data preparation through to integration with existing business processes and technology infrastructure. We ensure AI implementations deliver measurable business value while maintaining operational stability and regulatory compliance.',
  },
  {
    title: 'AI Governance and Risk Management',
    description:
      'Establishing governance frameworks that ensure AI systems operate transparently, ethically, and in compliance with the EU AI Act and Dutch regulatory expectations. Our AI governance consulting addresses model risk management, bias detection and mitigation, explainability requirements, and ongoing monitoring obligations.',
  },
]

const systemsItems = [
  {
    title: 'Enterprise Systems Architecture',
    description:
      'Designing scalable enterprise architectures that support current operational requirements while providing the flexibility to accommodate future growth and technological evolution. We assess existing technology landscapes, identify architectural constraints, and design target-state architectures that enable data flow, process efficiency, and digital capability across the organisation.',
  },
  {
    title: 'ERP and Core Systems Integration',
    description:
      'Integrating and optimising enterprise resource planning and core operational systems to eliminate data silos, streamline cross-functional processes, and provide unified visibility across business functions. Our integration consulting addresses the technical, process, and change management dimensions of complex systems integration programmes.',
  },
  {
    title: 'API and Integration Platform Development',
    description:
      'Developing API strategies and integration platform architectures that enable seamless data exchange between internal systems, external partners, and digital platforms. We design integration approaches that support digital ecosystem participation, real-time data sharing, and scalable connectivity while maintaining security and governance standards.',
  },
]

const digitalItems = [
  {
    title: 'Digital Strategy and Transformation Roadmaps',
    description:
      'Crafting digital strategies that address the specific competitive dynamics of the Netherlands market, balancing innovation ambition with practical implementation reality. Our digital strategy consulting assesses current digital maturity, identifies priority transformation initiatives, defines implementation sequencing, and establishes governance frameworks ensuring sustained progress and measurable returns.',
  },
  {
    title: 'Customer and Commercial Digitisation',
    description:
      'Transforming customer interactions and commercial processes through digital channels, leveraging data-driven personalisation, intelligent automation, and modern digital platforms to enhance customer satisfaction, improve conversion, and build lasting competitive advantage in increasingly digital Netherlands markets.',
  },
  {
    title: 'Operational and Process Transformation',
    description:
      'Redesigning operational processes through digital technologies, eliminating inefficiencies, and establishing data-driven operational models that scale with organisational growth. Our operational transformation consulting addresses process redesign, automation strategy, change management, and performance measurement across complex Netherlands organisations.',
  },
]

const whyChooseItems = [
  {
    icon: Lightbulb,
    title: 'Integrated Across Disciplines',
    description:
      'We address strategy, technology, and people capability within integrated engagements rather than isolated workstreams. This coherent approach eliminates the misalignment common when organisations deploy multiple single-discipline providers, delivering compound value that exceeds the sum of individual consulting contributions.',
  },
  {
    icon: Shield,
    title: 'Netherlands Regulatory Expertise',
    description:
      'Deep understanding of Dutch regulatory frameworks, GDPR obligations, AFM oversight, EU AI Act requirements, and European compliance standards ensures every recommendation is practically implementable within the Netherlands context. Our consultants navigate regulatory complexity as a core competency, not an afterthought.',
  },
  {
    icon: Target,
    title: 'Outcome Accountability',
    description:
      'Every consulting engagement is structured around defined outcomes, tracked against agreed performance indicators throughout delivery. Clients gain visibility into progress and value realisation from day one, with regular reporting against outcome metrics that demonstrate tangible return on consulting investment.',
  },
  {
    icon: Users,
    title: 'Capability Building',
    description:
      'We transfer knowledge and build internal capability throughout every engagement, ensuring organisations can sustain and extend the value created long after our direct involvement concludes. Our consulting model is designed to strengthen client organisations, not create permanent dependency on external advisors.',
  },
]

export function NetherlandsConsultingPage() {
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
                <Briefcase className="w-4 h-4 text-[#0E78AA]" />
                <span>Consulting Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Strategic advisory and implementation expertise addressing the Netherlands&apos; most complex </span>
                <span className="gradient-text">organisational challenges</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Bravinci Netherlands delivers consulting across four integrated disciplines,
                engaging as strategic partners accountable for outcomes rather than as
                advisors delivering recommendations for others to implement.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section
          id="problem-statement"
          data-section="problem-statement"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-[#F7AE57]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-foreground">The </span>
                    <span className="gradient-text">Challenge</span>
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Dutch organisations operating in today&apos;s environment face strategy,
                  technology, and capability challenges of increasing complexity and
                  interdependency. Regulatory requirements across financial services, data
                  governance, and corporate governance demand ever-greater sophistication in
                  compliance management. Digital transformation pressures require organisations
                  to integrate advanced analytics, artificial intelligence, and modernised
                  systems architectures while maintaining operational continuity. Leaders must
                  navigate these simultaneous demands with finite internal capacity and,
                  frequently, capability gaps in the most critical areas.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-[#0E78AA]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-foreground">Our </span>
                    <span className="gradient-text">Approach</span>
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Conventional consulting approaches of deploying specialists in isolation
                  across disconnected workstreams amplify rather than resolve this complexity.
                  Organisations gain capability in one dimension while creating misalignment
                  in others. Bravinci Netherlands&apos; consulting practice is built on an
                  integrated model that addresses strategy, intelligence, systems, and
                  technology transformation as interconnected disciplines rather than separate
                  service lines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Consulting Practice */}
        <section
          id="consulting-practice"
          data-section="consulting-practice"
          className="py-20 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our Consulting </span>
                <span className="gradient-text">Practice</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Bravinci Netherlands delivers consulting across four integrated disciplines:
                Business Intelligence, Artificial Intelligence, Systems Integration, and
                Digital Transformation. Each discipline is staffed by specialists with deep
                Netherlands market experience and supported by Bravinci Global&apos;s
                accumulated methodology and cross-industry intelligence. We engage as
                strategic partners accountable for outcomes rather than as advisors
                delivering recommendations for others to implement.
              </p>
            </div>
          </div>
        </section>

        {/* Discipline 1: Business Intelligence */}
        <section
          id="bi-consulting"
          data-section="bi-consulting"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E78AA]/10 text-sm font-medium text-[#0E78AA] mb-4">
                  <BarChart3 className="w-4 h-4" />
                  <span>Discipline 01</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Business Intelligence Consulting
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our BI consulting practice helps organisations transform their analytical
                  capabilities from fragmented reporting into strategic intelligence platforms
                  that inform decision-making at every level. We work across the full BI
                  lifecycle, from strategy and governance through to implementation and
                  optimisation.
                </p>
              </div>

              <div className="space-y-4">
                {biItems.map((item) => (
                  <div key={item.title} className="p-6 rounded-2xl glass-card">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Discipline 2: Artificial Intelligence */}
        <section
          id="ai-consulting"
          data-section="ai-consulting"
          className="py-20 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1 space-y-4">
                {aiItems.map((item) => (
                  <div key={item.title} className="p-6 rounded-2xl glass-card">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#F7AE57] shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7AE57]/10 text-sm font-medium text-[#F7AE57] mb-4">
                  <Brain className="w-4 h-4" />
                  <span>Discipline 02</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Artificial Intelligence Consulting
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI consulting practice guides organisations through the strategic,
                  technical, and governance dimensions of artificial intelligence adoption.
                  We help Netherlands organisations identify high-value AI applications,
                  navigate regulatory requirements including the EU AI Act, and build
                  sustainable AI capabilities that deliver lasting competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Discipline 3: Systems Integration */}
        <section
          id="systems-consulting"
          data-section="systems-consulting"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E78AA]/10 text-sm font-medium text-[#0E78AA] mb-4">
                  <Network className="w-4 h-4" />
                  <span>Discipline 03</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Systems Integration Consulting
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our systems integration practice addresses the technical complexity that
                  prevents organisations from realising the full value of their technology
                  investments. We design and implement integration architectures that connect
                  enterprise systems, enable data flow, and support operational efficiency
                  across the organisation.
                </p>
              </div>

              <div className="space-y-4">
                {systemsItems.map((item) => (
                  <div key={item.title} className="p-6 rounded-2xl glass-card">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Discipline 4: Digital Transformation */}
        <section
          id="digital-consulting"
          data-section="digital-consulting"
          className="py-20 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1 space-y-4">
                {digitalItems.map((item) => (
                  <div key={item.title} className="p-6 rounded-2xl glass-card">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#F7AE57] shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7AE57]/10 text-sm font-medium text-[#F7AE57] mb-4">
                  <Monitor className="w-4 h-4" />
                  <span>Discipline 04</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Digital Transformation Consulting
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our digital transformation practice helps Netherlands organisations
                  reimagine their business models, customer experiences, and operational
                  processes through strategic application of digital technologies. We go
                  beyond technology implementation to address the strategic, cultural, and
                  organisational dimensions that determine transformation success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section
          id="why-choose"
          data-section="why-choose"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Choose Bravinci </span>
                <span className="gradient-text">Consulting</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                What distinguishes Bravinci&apos;s consulting practice from conventional
                advisory providers in the Netherlands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseItems.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="text-center p-8 rounded-3xl glass-card"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-[#0E78AA]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
              Discuss Your Consulting Requirements
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Our Netherlands practice welcomes conversations about the specific strategic
              and operational challenges your organisation is addressing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/netherlands/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/netherlands/services">All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
