/**
 * Netherlands Industries Page
 *
 * Overview of Bravinci Netherlands' industry expertise with links to
 * individual industry detail pages.
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Building2,
  Ship,
  Landmark,
  Factory,
  HeartPulse,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Target,
  Lightbulb,
  Globe,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const industryCards = [
  {
    icon: Ship,
    title: 'Supply Chain & Logistics',
    description:
      'Strategic intelligence and transformation expertise for the Netherlands supply chain leaders. End-to-end visibility, streamlined operations, and data-driven decision-making.',
    href: '/netherlands/industries/supply-chain',
    color: '#0E78AA',
  },
  {
    icon: Landmark,
    title: 'Banking',
    description:
      'Data intelligence and transformation expertise for the Netherlands financial services organisations navigating regulatory complexity and digital transformation.',
    href: '/netherlands/industries/banking',
    color: '#F7AE57',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description:
      'Operational intelligence and transformation expertise for Netherlands manufacturing organisations driving efficiency and digital innovation.',
    href: '/netherlands/industries/manufacturing',
    color: '#0E78AA',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Life Sciences',
    description:
      'Data intelligence and transformation expertise for the Netherlands healthcare and life sciences organisations improving outcomes and compliance.',
    href: '/netherlands/industries/healthcare',
    color: '#F7AE57',
  },
  {
    icon: GraduationCap,
    title: 'Education & Workforce Development',
    description:
      'Strategic intelligence and transformation expertise for Dutch educational institutions and workforce development organisations.',
    href: '/netherlands/industries/education',
    color: '#0E78AA',
  },
]

const differentiators = [
  {
    icon: Globe,
    title: 'Netherlands Market Expertise',
    description:
      'Deep understanding of Dutch regulatory frameworks, industry dynamics, and market-specific challenges ensures every engagement is contextually relevant and practically implementable.',
    color: '#0E78AA',
  },
  {
    icon: Lightbulb,
    title: 'Integrated Capability',
    description:
      'Strategy, technology, analytics, and people capability delivered as a coherent programme rather than isolated workstreams, eliminating the gaps between vision and execution.',
    color: '#F7AE57',
  },
  {
    icon: Target,
    title: 'Outcome Accountability',
    description:
      'Every engagement is structured around measurable outcomes with transparent progress tracking, ensuring organisations realise tangible value from their transformation investments.',
    color: '#0E78AA',
  },
]

export function NetherlandsIndustriesPage() {
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
                <Building2 className="w-4 h-4 text-[#0E78AA]" />
                <span>Industries</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Industries We </span>
                <span className="gradient-text">Serve</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Bravinci Netherlands delivers strategic intelligence and transformation expertise across the Netherlands&apos; most dynamic industry sectors.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/netherlands/contact">
                    Discuss Your Industry Needs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Cards Grid */}
        <section
          id="industries"
          data-section="industries"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Sector </span>
                <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Five industry practices, each combining deep domain knowledge with Bravinci&apos;s integrated analytical and transformation capabilities to address sector-specific challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryCards.map((industry) => {
                const Icon = industry.icon
                return (
                  <Link key={industry.title} href={industry.href} className="group block">
                    <div className="h-full p-8 rounded-3xl glass-card hover-lift transition-all duration-500">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${industry.color}10` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: industry.color }} />
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                        {industry.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {industry.description}
                      </p>

                      <div
                        className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                        style={{ color: industry.color }}
                      >
                        Explore {industry.title}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Specialized Expertise */}
        <section
          id="expertise"
          data-section="expertise"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Choose </span>
                <span className="gradient-text">Bravinci</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What distinguishes Bravinci&apos;s industry practices from conventional consulting providers in the Netherlands market.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {differentiators.map((item) => {
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
                      <CheckCircle2 className="w-8 h-8" style={{ color: item.color }} />
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
              Ready to Transform Your Industry Position?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how Bravinci&apos;s industry expertise and integrated capabilities can address your organisation&apos;s strategic objectives and deliver measurable outcomes.
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
                <Link href="/netherlands/about">About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
