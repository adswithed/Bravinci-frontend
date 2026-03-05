/**
 * Netherlands Approach Page
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Globe,
  Award,
  Lightbulb,
  Target,
  CheckCircle2,
  ArrowRight,
  Search,
  Brain,
  ClipboardCheck,
  GraduationCap,
  Handshake,
  BarChart3,
  MapPin,
  Layers
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const principles = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery and Diagnostic Precision',
    description:
      'Every engagement begins with structured discovery designed to develop an accurate understanding of the organisation\u0027s strategic position, operational performance, and capability baseline. We invest significantly in diagnostic work before recommending solutions, ensuring that our subsequent work addresses root causes rather than visible symptoms. This discipline prevents the misdiagnosis that leads to well-executed solutions for the wrong problems.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Intelligence-Led Design',
    description:
      'Solution and programme design at Bravinci Netherlands is driven by intelligence rather than assumptions. We draw on proprietary benchmarks, European regulatory intelligence, industry performance data, and competitive landscape analysis to ensure that our designs reflect what is achievable, compliant, and strategically appropriate for the client\u0027s specific context. Clients receive solutions designed for their actual environment, not adapted versions of generic frameworks.',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Phased and Accountable Delivery',
    description:
      'We structure delivery in defined phases, each with clear outcomes, agreed performance indicators, and governance checkpoints. This approach ensures ongoing alignment between delivery progress and client expectations, identifies emerging risks before they become significant issues, and creates a structured basis for stakeholder reporting throughout the engagement lifecycle.',
  },
  {
    number: '04',
    icon: GraduationCap,
    title: 'Capability Transfer and Sustainability',
    description:
      'Transformation outcomes endure only when client organizations develop the internal capability to sustain and build on them independently. We design capability transfer into every engagement through structured knowledge sessions, working alongside client teams, documentation of processes and frameworks, and targeted education where deeper capability development is required. Dependency on external support is minimized by design.',
  },
  {
    number: '05',
    icon: Handshake,
    title: 'Partnership Beyond Delivery',
    description:
      'Our client relationships extend beyond the conclusion of formal engagement workstreams. We maintain ongoing advisory relationships that provide access to emerging intelligence, regulatory updates, and methodology enhancements as organizations and their environments evolve. Clients treat Bravinci Netherlands as a long-term strategic partner rather than a transactional service provider.',
  },
]

const whySucceeds = [
  {
    icon: BarChart3,
    title: 'Grounded in Evidence',
    description:
      'The Bravinci Netherlands Method is not theoretical. It is built on documented outcomes from hundreds of engagements across European markets. Every principle reflects lessons learned from real transformation programmes, including the failures and complications that produce genuine insight.',
  },
  {
    icon: MapPin,
    title: 'Adapted for Dutch Context',
    description:
      'While the method draws on global experience, its application in Netherlands engagements reflects the specific regulatory environment, business culture, governance expectations, and market dynamics that define how Dutch organizations operate. Global methodology, local intelligence.',
  },
  {
    icon: Target,
    title: 'Outcome-Oriented Structure',
    description:
      'The method is organized around outcomes, not activities. Every phase, workstream, and deliverable is mapped to a defined organizational outcome, creating clear accountability and enabling rigorous performance tracking throughout engagement delivery.',
  },
  {
    icon: Layers,
    title: 'Scalable Across Complexity',
    description:
      'Whether applied to a focused advisory engagement or a multi-year organizational transformation programme, the method scales without loss of rigor or quality. Clients receive consistent methodology regardless of engagement size, sector, or complexity level.',
  },
]

export function NetherlandsApproachPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E78AA]/5 via-background to-background" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={cn(
                  'space-y-6 transition-all duration-700',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                )}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                  <Lightbulb className="w-4 h-4 text-[#0E78AA]" />
                  <span>Our Approach</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Proven methodology delivering </span>
                  <span className="gradient-text">sustainable transformation</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Bravinci Netherlands Method represents our systematic approach to delivering strategic advisory, technology solutions, and capability programmes that create lasting organisational value. Developed over 40 years and refined through hundreds of engagements in the Netherlands and across Europe, this methodology ensures consistency, quality, and measurable impact, regardless of sector, scale, or strategic objective. The method is not a generic consulting framework adapted for use in the Netherlands. It is a purpose-built transformation system that reflects the specific demands of the Dutch business environment.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/netherlands/contact">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                    asChild
                  >
                    <Link href="/netherlands/services">Our Services</Link>
                  </Button>
                </div>
              </div>

              <div
                className={cn(
                  'relative transition-all duration-700 delay-200',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                )}
              >
                <div className="relative p-8 rounded-3xl glass-card">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Search className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">5</p>
                      <p className="text-sm text-muted-foreground">Core Principles</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Globe className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">40+</p>
                      <p className="text-sm text-muted-foreground">Years Refined</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Target className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">Evidence</p>
                      <p className="text-sm text-muted-foreground">Based Approach</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Award className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">Dutch</p>
                      <p className="text-sm text-muted-foreground">Market Adapted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Five Principles */}
        <section id="principles" data-section="principles" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Five Principles of the </span>
                <span className="gradient-text">Bravinci Netherlands Method</span>
              </h2>
            </div>

            <div className="space-y-6">
              {principles.map((principle) => {
                const Icon = principle.icon
                return (
                  <div
                    key={principle.title}
                    className="group p-8 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-4xl font-bold text-[#0E78AA]/20">{principle.number}</span>
                        <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-[#0E78AA]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                          {principle.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why This Approach Succeeds */}
        <section id="why-succeeds" data-section="why-succeeds" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why This Approach </span>
                <span className="gradient-text">Succeeds</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whySucceeds.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group p-8 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#0E78AA]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience the Bravinci Netherlands Method
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Discover how our proven methodology can deliver sustainable transformation outcomes for your organisation.
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
                <Link href="/netherlands/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
