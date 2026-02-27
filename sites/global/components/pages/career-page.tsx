'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  Lightbulb,
  Rocket,
  Target,
  Users,
  ArrowRight,
  Quote,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const cultureHighlights = [
  {
    icon: Lightbulb,
    title: 'Intellectual Challenge',
    description:
      'Work on strategic problems that matter for organizations shaping industries and public policy. Every engagement requires creative problem-solving, analytical rigor, and genuine thought leadership.',
  },
  {
    icon: Rocket,
    title: 'Technical Excellence',
    description:
      'Access cutting-edge technology platforms and continuous learning opportunities. We invest in professional development because our competitive advantage comes from team capability and technical mastery.',
  },
  {
    icon: Target,
    title: 'Impact Focus',
    description:
      'See direct connection between your work and measurable client outcomes. Bravinci engagements deliver tangible value—revenue growth, cost reduction, risk mitigation, operational improvement—not just recommendations.',
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    description:
      'Join teams that combine diverse expertise and perspectives. We hire for intellectual curiosity and collaborative spirit, building environments where good ideas win regardless of hierarchy.',
  },
]

export function GlobalCareerPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <GlobalSiteWrapper>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
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
                <span>Careers</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Build strategic intelligence solutions that </span>
                <span className="gradient-text">matter</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Bravinci attracts people who want to solve meaningful problems. If
                you're energized by organizational complexity, excited about emerging
                technology, and motivated by measurable impact, you'll find engaging
                challenges and professional growth here.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Narrative */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our teams combine strategic thinking with technical mastery to
                deliver transformation that creates lasting client value. We invest
                heavily in professional development, collaborative culture, and work
                that directly influences how organizations navigate their most
                important strategic decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Culture Highlights */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why </span>
                <span className="gradient-text">Bravinci</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What makes Bravinci a great place to build your career
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cultureHighlights.map((highlight) => {
                const Icon = highlight.icon
                return (
                  <div
                    key={highlight.title}
                    className="group p-8 rounded-3xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#0E78AA]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-3xl glass-card">
                <Quote className="w-12 h-12 text-[#0E78AA] mb-6" />
                <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6">
                  "What attracted me to Bravinci was the intellectual challenge—every
                  client engagement requires creative problem-solving and strategic
                  thinking. What keeps me here is seeing direct impact from our work
                  and the collaborative culture that makes complex projects genuinely
                  enjoyable."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E78AA] to-[#F7AE57]" />
                  <div>
                    <p className="font-semibold text-foreground">Team Member</p>
                    <p className="text-sm text-muted-foreground">
                      Strategy Consultant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Explore our open positions and find the role that matches your
              skills and ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/career/jobs">
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/career/culture">Our Culture & Values</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
