/**
 * Netherlands Secondment Page
 *
 * Senior Bravinci Netherlands professionals embedded within client organisations
 * through the Bravinci United model.
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import Link from 'next/link'
import {
  Users,
  Database,
  Brain,
  BarChart3,
  Monitor,
  Compass,
  ArrowRight,
  CheckCircle2,
  Handshake,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react'
import { cn } from '@/shared/lib/utils'

const capabilities = [
  {
    icon: Database,
    title: 'Data and Analytics Leadership',
    description:
      'Senior data and analytics professionals who can lead your organisation&apos;s data strategy, build analytical capabilities, and drive data-driven decision-making. Our experts bring extensive experience in data architecture, governance, analytics transformation, and team leadership within Netherlands and European organisations.',
  },
  {
    icon: Brain,
    title: 'AI Programme Leadership',
    description:
      'Experienced AI leaders who can define and execute your artificial intelligence strategy, from use case identification through to production deployment and governance. Our AI programme leaders combine technical depth with business acumen and regulatory awareness, including EU AI Act compliance requirements.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence Management',
    description:
      'BI management professionals who can oversee your business intelligence environment, optimise reporting and analytics capabilities, and ensure your BI investments deliver maximum strategic value. Our experts bring experience across leading BI platforms and deep understanding of best practice governance frameworks.',
  },
  {
    icon: Monitor,
    title: 'Digital Transformation Management',
    description:
      'Transformation leaders who can manage complex digital transformation programmes, coordinating technology, process, and people change across your organisation. Our professionals bring structured programme management capabilities combined with deep understanding of digital technologies and their business applications.',
  },
  {
    icon: Compass,
    title: 'Strategy and Planning Expertise',
    description:
      'Strategic planning professionals who can strengthen your organisation&apos;s strategic intelligence, competitive analysis, and planning capabilities. Our experts bring frameworks and methodologies refined across decades of international experience, adapted to the specific competitive dynamics of the Netherlands market.',
  },
]

export function NetherlandsSecondmentPage() {
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
                <Users className="w-4 h-4 text-[#0E78AA]" />
                <span>Secondment</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Senior expertise embedded within your organisation, </span>
                <span className="gradient-text">operating as your team</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Bravinci United provides senior expertise embedded directly within your
                organisation, bringing specialist capabilities in data leadership, AI programme
                management, business intelligence, digital transformation, and strategic
                planning to address your most critical capability needs.
              </p>
            </div>
          </div>
        </section>

        {/* Bravinci United Model */}
        <section
          id="united-model"
          data-section="united-model"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-[#0E78AA]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-foreground">The Bravinci </span>
                    <span className="gradient-text">United Model</span>
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Bravinci United is our secondment model that places senior professionals
                  directly within client organisations. Unlike traditional consulting
                  engagements where advisors remain external, Bravinci United professionals
                  embed fully into your team structure, adopting your culture, systems, and
                  working practices.
                </p>
              </div>

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
                  This model addresses a critical gap in the Netherlands market: the need
                  for senior specialist expertise that is difficult to recruit permanently,
                  expensive to maintain on a full-time basis, and essential for driving
                  strategic initiatives. Bravinci United provides this expertise with the
                  flexibility, speed, and quality that traditional recruitment cannot match.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          data-section="how-it-works"
          className="py-20 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">How It </span>
                <span className="gradient-text">Works</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-3xl glass-card">
                <p className="text-muted-foreground leading-relaxed">
                  Our secondment specialists are embedded within client organisations for
                  assignments ranging from three months to multi-year engagements, depending
                  on organisational requirements. They operate within client management
                  structures, attend client meetings, participate in organisational
                  decision-making, and take direct accountability for the outcomes of their
                  defined scope, all while maintaining access to Bravinci&apos;s broader
                  network of expertise and methodology resources.
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
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Secondment </span>
                <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Five areas of senior expertise available through the Bravinci United
                secondment model.
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

        {/* Why the Model Delivers */}
        <section
          id="why-model"
          data-section="why-model"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why the Bravinci United Model </span>
                <span className="gradient-text">Delivers</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-3xl glass-card">
                <p className="text-muted-foreground leading-relaxed">
                  The Bravinci United model succeeds because embedded expertise creates
                  organizational outcomes that advisory expertise cannot. Specialists working
                  within teams understand organizational context, build trust with colleagues,
                  and develop the nuanced understanding of organizational dynamics that enables
                  genuinely effective work. Combined with Bravinci&apos;s methodological
                  foundations and global intelligence network, this embedded model delivers
                  both speed-to-impact and quality of outcome that conventional staffing
                  solutions rarely match.
                </p>
              </div>
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
              Discuss a Bravinci United Placement
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our Netherlands practice to discuss how the Bravinci United model
              could address your current leadership or expertise gap requirements.
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
