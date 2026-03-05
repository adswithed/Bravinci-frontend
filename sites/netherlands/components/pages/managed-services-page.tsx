/**
 * Netherlands Managed Services Page
 *
 * Expert operational management of technology platforms, analytical environments,
 * and business intelligence capabilities for Netherlands organisations.
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import Link from 'next/link'
import {
  Settings,
  Server,
  BarChart3,
  Shield,
  Database,
  Brain,
  Lock,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Users,
  RefreshCw,
  TrendingUp,
} from 'lucide-react'
import { cn } from '@/shared/lib/utils'

const capabilities = [
  {
    icon: Server,
    title: 'Platform Operations Management',
    description:
      'Comprehensive management of technology platforms including cloud infrastructure, data platforms, and application environments. We ensure optimal performance, availability, and cost efficiency while maintaining alignment with organisational objectives and Dutch regulatory requirements.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence Environment Management',
    description:
      'End-to-end management of BI environments including data warehouses, reporting platforms, dashboards, and analytical tools. We maintain data quality, optimise query performance, manage user access, and ensure analytical environments evolve alongside changing business requirements.',
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance Monitoring',
    description:
      'Continuous monitoring and management of regulatory compliance across technology and data environments. We track regulatory changes, assess impact, implement required modifications, and maintain audit-ready documentation aligned with GDPR, AFM, and sector-specific Dutch requirements.',
  },
  {
    icon: Database,
    title: 'Data Governance Operations',
    description:
      'Operational management of data governance frameworks including data quality monitoring, metadata management, lineage tracking, and policy enforcement. We ensure data assets remain trustworthy, accessible, and compliant throughout their lifecycle.',
  },
  {
    icon: Brain,
    title: 'AI System Monitoring and Management',
    description:
      'Ongoing monitoring and management of deployed AI systems including model performance tracking, drift detection, retraining coordination, and compliance with EU AI Act requirements. We ensure AI systems continue to deliver value while operating within ethical and regulatory boundaries.',
  },
  {
    icon: Lock,
    title: 'Security and Compliance Assurance',
    description:
      'Comprehensive security operations including threat monitoring, vulnerability management, incident response, and compliance assurance across all managed environments. We maintain ISO 27001-aligned security postures and support Netherlands-specific security requirements.',
  },
]

const whyChooseItems = [
  {
    icon: Users,
    title: 'Specialist Expertise at Scale',
    description:
      'Our managed services teams combine deep technical expertise with extensive Netherlands market experience. Every team member understands the regulatory, cultural, and operational context in which your technology environments operate, enabling faster issue resolution and more informed operational decisions.',
    color: '#0E78AA',
  },
  {
    icon: RefreshCw,
    title: 'Continuity and Consistency',
    description:
      'We provide consistent, reliable operational management that eliminates the disruption caused by staff turnover, knowledge loss, and capability gaps. Our structured knowledge management and team rotation practices ensure continuity of service regardless of individual personnel changes.',
    color: '#F7AE57',
  },
  {
    icon: TrendingUp,
    title: 'Evolution and Improvement',
    description:
      'Bravinci managed services go beyond maintenance to drive continuous improvement. We proactively identify optimisation opportunities, recommend enhancements, and implement improvements that keep your technology environments aligned with evolving business needs and market conditions.',
    color: '#0E78AA',
  },
]

export function NetherlandsManagedServicesPage() {
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
                <Settings className="w-4 h-4 text-[#0E78AA]" />
                <span>Managed Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Sustaining operational excellence through </span>
                <span className="gradient-text">expert management of critical business functions</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Bravinci Netherlands&apos; Managed Services practice provides expert
                operational management enabling Dutch organisations to benefit from
                enterprise-grade operational standards without the full internal staffing
                investment those standards require.
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
                  Netherlands organisations implementing advanced technology platforms,
                  analytics environments, and compliance monitoring capabilities face a
                  consistent challenge: the internal resources required to operate these
                  environments at the standard required for reliable performance are not
                  always available. Recruiting and retaining specialists in data platform
                  management, business intelligence operations, AI system monitoring, and
                  regulatory technology is both expensive and competitive in the Dutch
                  talent market. The result is a gap between implemented capability and
                  operational effectiveness that erodes the value of technology investment
                  over time.
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
                  Bravinci Netherlands&apos; Managed Services practice provides expert
                  operational management of technology platforms, analytical environments,
                  and business intelligence capabilities, enabling Dutch organisations to
                  benefit from enterprise-grade operational standards without the full
                  internal staffing investment those standards require. We manage the
                  platforms we implement and the environments we design, maintaining
                  performance, compliance, and capability currency as technology evolves
                  and requirements change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section
          id="capabilities"
          data-section="capabilities"
          className="py-20 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Managed Service </span>
                <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Six interconnected managed service capabilities designed to ensure operational
                excellence across your critical business environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Bravinci Managed Services */}
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
                <span className="gradient-text">Managed Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What distinguishes Bravinci&apos;s managed services approach from
                conventional outsourcing models in the Netherlands.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseItems.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="text-center p-8 rounded-3xl glass-card"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      style={{ backgroundColor: `${item.color}10` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: item.color }} />
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
              Explore Managed Service Options
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our Netherlands practice to discuss which operational management
              requirements would benefit from Bravinci&apos;s managed service expertise.
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
