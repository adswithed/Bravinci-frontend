/**
 * Netherlands Global Relationship Page
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Globe,
  Award,
  Users,
  Target,
  CheckCircle2,
  Building2,
  Shield,
  ArrowRight,
  BookOpen,
  Network,
  Monitor,
  Handshake
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const capabilities = [
  {
    icon: BookOpen,
    title: 'Proprietary Methodology Access',
    description:
      'Every Bravinci Netherlands engagement draws on the Bravinci Method, a structured transformation framework developed and refined across hundreds of European and global engagements over four decades. Competitor firms do not replicate this methodology; it is a proprietary asset that the Global organisation has developed through sustained investment in knowledge management, practitioner training, and continuous refinement.',
  },
  {
    icon: Network,
    title: 'Global Intelligence Network',
    description:
      'Our Netherlands practitioners draw on Bravinci Global\u0027s intelligence network spanning multiple continents and industry sectors. When Dutch clients face challenges in areas where the Netherlands market experience is limited, such as emerging technology adoption, regulatory change management, and cross-border operational design, we access global expertise rather than developing solutions in isolation.',
  },
  {
    icon: Monitor,
    title: 'Solution Platform Investment',
    description:
      'Dividos and the Strategic Command Centre represent significant investments in proprietary technology platforms developed and maintained by Bravinci Global. Netherlands clients benefit from platform capabilities built over years of global development without bearing the full cost of that investment. Continuous platform development through the Global organization ensures that client solutions remain current as technology and market conditions evolve.',
  },
  {
    icon: Users,
    title: 'Talent and Capability',
    description:
      'Bravinci Global\u0027s network enables the Netherlands practice to deploy specialists with experience from multiple markets and contexts when engagements require capabilities beyond those resident in our local team. This access to global talent ensures that complex, multi-dimensional projects receive appropriate expertise at every workstream.',
  },
]

export function NetherlandsRelationshipPage() {
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
                  <Globe className="w-4 h-4 text-[#0E78AA]" />
                  <span>Global Relationship</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Global intelligence, </span>
                  <span className="gradient-text">Netherlands delivery</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bravinci Netherlands operates as an integrated practice within the Bravinci Global organisation, benefiting from 40 years of institutional knowledge, proprietary methodologies, and cross-industry intelligence while maintaining the local focus and Netherlands-specific expertise that client work here demands. This relationship defines how we work, what we bring to each engagement, and why our clients gain access to capabilities unavailable through purely local providers.
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
                    <Link href="/netherlands/about">About Bravinci Netherlands</Link>
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
                      <Globe className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">40+</p>
                      <p className="text-sm text-muted-foreground">Years Institutional Knowledge</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Network className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">Global</p>
                      <p className="text-sm text-muted-foreground">Intelligence Network</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Shield className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">ISO 27001</p>
                      <p className="text-sm text-muted-foreground">Certified Standards</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Handshake className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">Integrated</p>
                      <p className="text-sm text-muted-foreground">Practice Model</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capability Cards */}
        <section id="capabilities" data-section="capabilities" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">What the Global Relationship </span>
                <span className="gradient-text">Delivers</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((item) => {
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

        {/* Local Accountability, Global Capability */}
        <section id="accountability" data-section="accountability" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl glass-card border border-[#0E78AA]/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E78AA]/10 text-sm font-medium text-[#0E78AA] mb-4">
                    <Target className="w-4 h-4" />
                    <span>Local Accountability</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Local Accountability, Global Capability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Bravinci Global relationship is structured to deliver global capability with local accountability. Netherlands-based leadership is fully accountable for client outcomes and relationship management. Global resources are deployed selectively to add specific capabilities rather than to displace local expertise. Clients receive the benefits of global scale with the responsiveness and cultural alignment of a Netherlands-focused practice.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'Netherlands-based leadership fully accountable for client outcomes',
                    'Global resources deployed selectively for specific capabilities',
                    'Local expertise maintained and prioritised in every engagement',
                    'Benefits of global scale with Netherlands-focused responsiveness',
                    'Cultural alignment built into every client relationship',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience Global Expertise with Local Delivery
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Discover how the integrated relationship between Bravinci Netherlands and Bravinci Global delivers capabilities unavailable through purely local providers.
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
                <Link href="/netherlands/about/approach">Our Approach</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
