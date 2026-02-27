'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  Target,
  Lightbulb,
  Users,
  Code,
  MessageSquare,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const values = [
  {
    icon: Target,
    title: 'Client Impact First',
    description:
      'Every decision starts with client value. We measure success by measurable improvements in client performance, not billable hours or project scope. This obsession with outcomes drives everything from how we structure engagements to how we staff teams and allocate resources.',
    inPractice:
      'We prioritize solutions that deliver tangible business results over those that maximize revenue. When faced with trade-offs, we choose approaches that best serve client success, even if they require more investment from our side.',
  },
  {
    icon: Lightbulb,
    title: 'Intellectual Curiosity',
    description:
      'We hire people who ask better questions, challenge assumptions, and continuously learn. Strategic intelligence work demands staying current with emerging technology, evolving best practices, and shifting sector dynamics—intellectual curiosity isn\'t optional, it\'s foundational.',
    inPractice:
      'Team members receive dedicated time and budget for professional development. We encourage exploration of new methodologies, attendance at industry conferences, and pursuit of certifications that deepen expertise and broaden perspective.',
  },
  {
    icon: Users,
    title: 'Collaborative Excellence',
    description:
      'Complex problems require diverse perspectives and genuine collaboration. We build teams where good ideas win regardless of seniority, where healthy debate strengthens solutions, and where knowledge sharing accelerates everyone\'s growth.',
    inPractice:
      'Project teams intentionally combine diverse backgrounds and expertise. We use structured approaches to ensure all voices are heard in decision-making, and we celebrate contributions that improve team outcomes rather than individual heroics.',
  },
  {
    icon: Code,
    title: 'Technical Mastery',
    description:
      'Strategy without execution capability is empty advice. We invest in deep technical skills across data science, cloud platforms, AI implementation, and enterprise architecture—enabling us to deliver solutions that actually work at scale.',
    inPractice:
      'Technical team members work directly on client engagements alongside strategists and advisors. We maintain hands-on technical capability at all levels of the organization, ensuring our recommendations are grounded in practical implementation reality.',
  },
  {
    icon: MessageSquare,
    title: 'Honest Communication',
    description:
      'We tell clients what they need to hear, not what they want to hear. This commitment to honest communication extends internally—we surface problems early, acknowledge mistakes quickly, and address issues directly without political posturing or blame deflection.',
    inPractice:
      'Project retrospectives focus on learning rather than blame. When things go wrong, we analyze root causes transparently and implement improvements. With clients, we present uncomfortable truths constructively, always paired with actionable paths forward.',
  },
]

export function GlobalCareerCulturePage() {
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
                <span>Culture & Values</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Principles that guide </span>
                <span className="gradient-text">how we work</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our values aren't aspirational statements—they're operating
                principles that shape daily decisions and long-term strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="grid lg:grid-cols-2 gap-12 items-start"
                  >
                    <div
                      className={cn(
                        'space-y-6',
                        index % 2 === 1 && 'lg:order-2'
                      )}
                    >
                      <div className="inline-flex w-16 h-16 rounded-2xl bg-[#0E78AA]/10 items-center justify-center">
                        <Icon className="w-8 h-8 text-[#0E78AA]" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="gradient-text">{value.title}</span>
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    <div
                      className={cn(
                        'p-8 rounded-3xl glass-card',
                        index % 2 === 1 && 'lg:order-1'
                      )}
                    >
                      <div className="mb-4">
                        <span className="text-sm font-semibold text-[#0E78AA] uppercase tracking-wider">
                          In Practice
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.inPractice}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join a team that lives these values every day. Explore our open
              positions and find your place at Bravinci.
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
                <Link href="/career">Life at Bravinci</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
