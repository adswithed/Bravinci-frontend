'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { GlobalSiteWrapper } from '@/components/global-site-wrapper'
import { Button } from '@/components/ui/button'
import {
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Users,
  Globe,
  Heart,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Target,
  MapPin,
  Clock,
  MessageSquare,
  Brain,
  Sparkles,
  Quote
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const cultureHighlights = [
  {
    title: 'Intellectual Challenge',
    description: 'Work on strategic problems that matter for organizations shaping industries and public policy. Every engagement requires creative problem-solving, analytical rigor, and genuine thought leadership.',
    icon: Brain
  },
  {
    title: 'Technical Excellence',
    description: 'Access cutting-edge technology platforms and continuous learning opportunities. We invest in professional development because our competitive advantage comes from team capability and technical mastery.',
    icon: Sparkles
  },
  {
    title: 'Impact Focus',
    description: 'See direct connection between your work and measurable client outcomes. Bravinci engagements deliver tangible value—revenue growth, cost reduction, risk mitigation, operational improvement—not just recommendations.',
    icon: Target
  },
  {
    title: 'Collaborative Environment',
    description: 'Join teams that combine diverse expertise and perspectives. We hire for intellectual curiosity and collaborative spirit, building environments where good ideas win regardless of hierarchy.',
    icon: Users
  }
]

const values = [
  {
    title: 'Client Impact First',
    description: 'Every decision starts with client value. We measure success by measurable improvements in client performance, not billable hours or project scope.',
    practice: 'We prioritize solutions that deliver tangible business results over those that maximize revenue.',
    icon: Target
  },
  {
    title: 'Intellectual Curiosity',
    description: 'We hire people who ask better questions, challenge assumptions, and continuously learn. Strategic intelligence work demands staying current with emerging technology.',
    practice: 'Team members receive dedicated time and budget for professional development.',
    icon: Lightbulb
  },
  {
    title: 'Collaborative Excellence',
    description: 'Complex problems require diverse perspectives and genuine collaboration. We build teams where good ideas win regardless of seniority.',
    practice: 'Project teams intentionally combine diverse backgrounds and expertise.',
    icon: Users
  },
  {
    title: 'Technical Mastery',
    description: 'Strategy without execution capability is empty advice. We invest in deep technical skills across data science, cloud platforms, AI implementation.',
    practice: 'Technical team members work directly on client engagements alongside strategists.',
    icon: Brain
  },
  {
    title: 'Honest Communication',
    description: 'We tell clients what they need to hear, not what they want to hear. We surface problems early and address issues directly.',
    practice: 'Project retrospectives focus on learning rather than blame.',
    icon: MessageSquare
  }
]

const openPositions = [
  {
    title: 'Senior Strategy Consultant',
    department: 'Strategy & Advisory',
    location: 'Amsterdam / London / Hybrid',
    type: 'Full-time',
    description: 'Lead strategic intelligence engagements for clients across public and private sectors. Develop scenario models, strategic roadmaps, and decision frameworks that drive measurable business impact.'
  },
  {
    title: 'Data Scientist - AI/ML',
    department: 'Data & AI Enablement',
    location: 'Remote (Europe)',
    type: 'Full-time',
    description: 'Build and deploy machine learning models that solve critical business problems. Work with advanced analytics platforms and modern data infrastructure to deliver production-grade AI solutions.'
  },
  {
    title: 'Digital Transformation Consultant',
    department: 'Digital Transformation',
    location: 'Rotterdam / Remote',
    type: 'Full-time',
    description: 'Guide organizations through complex technology transformations. Design solution architectures, manage implementation programs, and ensure sustainable adoption of digital capabilities.'
  }
]

export default function CareerPage() {
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
            <div className="absolute inset-0 bg-[#F7AE57]/5" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div
              className={cn(
                'transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4 text-[#F7AE57]" />
                <span>Life at Bravinci</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Build Strategic Intelligence </span>
                <span className="gradient-text">Solutions That Matter</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Bravinci attracts people who want to solve meaningful problems. If you&apos;re energized
                by organizational complexity, excited about emerging technology, and motivated by
                measurable impact, you&apos;ll find engaging challenges and professional growth here.
              </p>

              <Button
                size="lg"
                className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#positions">
                  Explore Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Culture Highlights */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Join </span>
                <span className="gradient-text">Bravinci?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our teams combine strategic thinking with technical mastery to deliver
                transformation that creates lasting client value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {cultureHighlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group p-8 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-[#F7AE57]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#F7AE57] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-3xl glass-card border border-[#0E78AA]/20 text-center">
              <Quote className="w-12 h-12 text-[#0E78AA]/30 mx-auto mb-6" />
              <blockquote className="text-xl text-muted-foreground italic leading-relaxed mb-6">
                &quot;What attracted me to Bravinci was the intellectual challenge—every client engagement
                requires creative problem-solving and strategic thinking. What keeps me here is seeing
                direct impact from our work and the collaborative culture that makes complex projects
                genuinely enjoyable.&quot;
              </blockquote>
              <div className="text-foreground font-semibold">Team Member</div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Principles That Guide </span>
                <span className="gradient-text">How We Work</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our values shape every decision, every engagement, and every interaction.
              </p>
            </div>

            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="grid lg:grid-cols-3 gap-6 items-start">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-[#0E78AA]" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-[#0E78AA] transition-colors pt-2">
                          {value.title}
                        </h3>
                      </div>
                      <div>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#0E78AA]/5 border border-[#0E78AA]/10">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">In Practice: </span>
                          {value.practice}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Join Teams Building </span>
                <span className="gradient-text">Strategic Intelligence Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Current opportunities span strategy consulting, technology implementation,
                data science, and sector-specific expertise across our European offices.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <div
                  key={position.title}
                  className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-[#0E78AA] transition-colors mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {position.description}
                      </p>
                    </div>
                    <Button
                      className="gradient-bg text-white font-semibold shrink-0"
                      asChild
                    >
                      <Link href="/contact">
                        View Role
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 p-8 rounded-2xl glass-card border border-[#F7AE57]/20 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Don&apos;t see the right role?
              </h3>
              <p className="text-muted-foreground mb-6">
                Send us your CV and let us know what you&apos;re looking for.
              </p>
              <Button
                variant="outline"
                className="border-[#0E78AA]/30 hover:border-[#0E78AA]"
                asChild
              >
                <Link href="/contact">
                  Send Open Application
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
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
              We invest heavily in professional development, collaborative culture, and work
              that directly influences how organizations navigate their most important strategic decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
