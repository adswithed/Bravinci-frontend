/**
 * Netherlands Education Page
 *
 * Embedding strategic intelligence capability within Netherlands organisations
 * as a sustained competitive advantage.
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import Link from 'next/link'
import {
  GraduationCap,
  Search,
  Layers,
  Target,
  Compass,
  Map,
  Brain,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { cn } from '@/shared/lib/utils'

const capabilities = [
  {
    icon: Search,
    title: 'Strategic Intelligence Assessment',
    description:
      'We begin every education engagement by assessing your organisation&apos;s current strategic intelligence maturity. This diagnostic evaluates existing intelligence processes, information flows, analytical capabilities, and decision-making frameworks against international best practice standards. The assessment identifies specific capability gaps and prioritises development areas that will deliver the greatest strategic impact for your Netherlands organisation.',
  },
  {
    icon: Layers,
    title: 'Intelligence Framework Design and Embedding',
    description:
      'Bravinci designs and embeds bespoke strategic intelligence frameworks tailored to your organisation&apos;s specific competitive context, industry dynamics, and strategic objectives. These frameworks establish systematic processes for gathering, analysing, and distributing strategic intelligence throughout the organisation, ensuring that critical insights reach decision-makers in formats that support immediate action.',
  },
  {
    icon: Target,
    title: 'Competitive Intelligence Capability',
    description:
      'We build internal competitive intelligence capabilities that enable your organisation to systematically monitor, analyse, and respond to competitor activities, market shifts, and industry developments. This includes establishing collection networks, analytical methodologies, and dissemination channels that maintain continuous competitive awareness across your Netherlands and international operations.',
  },
  {
    icon: Compass,
    title: 'Strategic Decision-Making Under Uncertainty',
    description:
      'Bravinci develops organisational capability in structured decision-making under conditions of uncertainty and complexity. Our education programmes equip leadership teams with frameworks for evaluating incomplete information, assessing strategic options, managing cognitive biases, and making confident decisions in ambiguous environments, critical capabilities for Netherlands organisations navigating rapid market change.',
  },
  {
    icon: Map,
    title: 'Scenario Planning and Strategic Resilience',
    description:
      'We embed scenario planning capabilities that enable organisations to anticipate and prepare for multiple potential futures. Our programmes teach teams to develop plausible scenarios, stress-test strategic plans against diverse conditions, and build organisational resilience that ensures strategic continuity regardless of how the external environment evolves.',
  },
  {
    icon: Brain,
    title: 'AI Integration into Strategic Intelligence',
    description:
      'Bravinci educates organisations on the strategic integration of artificial intelligence into intelligence processes. We help teams understand how AI can enhance intelligence gathering, accelerate analysis, identify patterns in complex data, and augment human decision-making, while maintaining the critical thinking and contextual judgement that AI cannot replace.',
  },
]

export function NetherlandsEducationPage() {
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
                <GraduationCap className="w-4 h-4 text-[#0E78AA]" />
                <span>Education</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Embedding strategic intelligence capability within Netherlands organisations as a </span>
                <span className="gradient-text">sustained competitive advantage</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Bravinci Education goes beyond traditional training to embed strategic
                intelligence capabilities deep within your organisation through assessment,
                framework design, and capability development that creates self-sustaining
                competitive advantages compounding over time.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section
          id="capabilities"
          data-section="capabilities"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Education </span>
                <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Six interconnected education capabilities designed to build lasting strategic
                intelligence competencies within your organisation.
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

        {/* CTA Section */}
        <section
          id="cta"
          data-section="cta"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Discuss Your Strategic Intelligence Capability Requirements
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our Netherlands Education practice to explore how Bravinci can assess,
              design, and embed strategic intelligence capability within your organisation.
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
