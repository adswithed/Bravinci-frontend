'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { GlobalSiteWrapper } from '@/components/global-site-wrapper'
import { Button } from '@/components/ui/button'
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Award,
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Target,
  Brain,
  Lightbulb,
  Clock,
  Euro
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const modules = [
  {
    number: '01',
    title: 'Intelligence Fundamentals',
    description: 'Core concepts of strategic insight creation and foresight development.',
    icon: Lightbulb
  },
  {
    number: '02',
    title: 'Organizational Integration',
    description: 'How intelligence informs strategy, marketing, sales, and innovation functions.',
    icon: Users
  },
  {
    number: '03',
    title: 'Information Management',
    description: 'Source evaluation, data reliability assessment, and knowledge transformation.',
    icon: BookOpen
  },
  {
    number: '04',
    title: 'Strategic Analysis Tools',
    description: 'Over 40 analytical frameworks including scenario planning and war gaming.',
    icon: Target
  },
  {
    number: '05',
    title: 'Competitive Technology Intelligence',
    description: 'Patent analysis, technology scouting, and discontinuity assessment.',
    icon: Brain
  },
  {
    number: '06',
    title: 'Implementation Roadmap',
    description: 'Information audits, early warning systems, and intelligence portal creation.',
    icon: Award
  }
]

const targetAudience = [
  'Strategic Management Professionals',
  'Marketing Leaders',
  'R&D Directors',
  'Innovation Managers',
  'Business Development Executives',
  'Competitive Intelligence Analysts',
  'Risk Management Professionals'
]

const learningOutcomes = [
  'Master the Six Building Blocks™ methodology',
  'Apply 40+ analytical frameworks to real business challenges',
  'Develop war room and radar room concepts',
  'Create effective early warning systems',
  'Build intelligence-driven decision processes',
  'Implement strategic foresight practices'
]

export default function MasterclassPage() {
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
            <div className="absolute inset-0 bg-[#0E78AA]/5" />
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
                  <GraduationCap className="w-4 h-4 text-[#0E78AA]" />
                  <span>SCIP Certified Program</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Strategic Intelligence </span>
                  <span className="gradient-text">Masterclass</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Step up your game with our 2-day intensive SCIP-certified program.
                  Master 40+ analytical frameworks and methodologies used by the world's
                  leading intelligence professionals.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/contact">
                      Register Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                    asChild
                  >
                    <Link href="/contact">Request Info</Link>
                  </Button>
                </div>
              </div>

              <div
                className={cn(
                  'relative transition-all duration-700 delay-200',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                )}
              >
                <div className="p-8 rounded-3xl glass-card border border-[#0E78AA]/20">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/50">
                    <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center">
                      <Award className="w-8 h-8 text-[#0E78AA]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Certification</p>
                      <p className="font-bold text-foreground">SCIP Certificate of Attendance</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-[#F7AE57]" />
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-semibold text-foreground">2 Days Intensive</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#F7AE57]" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-semibold text-foreground">Utrecht, Netherlands</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#F7AE57]" />
                      <div>
                        <p className="text-sm text-muted-foreground">Next Session</p>
                        <p className="font-semibold text-foreground">Contact for Dates</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Euro className="w-5 h-5 text-[#F7AE57]" />
                      <div>
                        <p className="text-sm text-muted-foreground">Investment</p>
                        <p className="font-semibold text-foreground">€1,995 (excl. VAT)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Core </span>
                <span className="gradient-text">Curriculum</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Six comprehensive modules covering all aspects of strategic intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => {
                const Icon = module.icon
                return (
                  <div
                    key={module.number}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#0E78AA]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#F7AE57] mb-1">MODULE {module.number}</p>
                        <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                          {module.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Who Should Attend */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Who Should </span>
                  <span className="gradient-text">Attend?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  This masterclass is designed for professionals who seek to enhance their
                  strategic decision-making capabilities through intelligence-driven approaches.
                </p>
                <ul className="space-y-3">
                  {targetAudience.map((audience, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0" />
                      <span className="text-muted-foreground">{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">What You'll </span>
                  <span className="gradient-text">Learn</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Acquire the Six Building Blocks™ methodology and practical skills
                  for applying strategic insights to real business challenges.
                </p>
                <ul className="space-y-3">
                  {learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#F7AE57] shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Program </span>
                <span className="gradient-text">Highlights</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl glass-card text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-[#0E78AA]" />
                </div>
                <p className="text-3xl font-bold text-foreground">40+</p>
                <p className="text-sm text-muted-foreground">Analytical Frameworks</p>
              </div>

              <div className="p-6 rounded-2xl glass-card text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#F7AE57]" />
                </div>
                <p className="text-3xl font-bold text-foreground">Cross</p>
                <p className="text-sm text-muted-foreground">Sector Learning</p>
              </div>

              <div className="p-6 rounded-2xl glass-card text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#0E78AA]" />
                </div>
                <p className="text-3xl font-bold text-foreground">Hands-on</p>
                <p className="text-sm text-muted-foreground">Practical Exercises</p>
              </div>

              <div className="p-6 rounded-2xl glass-card text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#F7AE57]" />
                </div>
                <p className="text-3xl font-bold text-foreground">SCIP</p>
                <p className="text-sm text-muted-foreground">Certified Program</p>
              </div>
            </div>
          </div>
        </section>

        {/* Instructor */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-3xl glass-card border border-[#0E78AA]/20">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-[#0E78AA] flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">JR</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Joséph H.A.M. Rodenberg</h3>
                  <p className="text-muted-foreground">Lead Instructor & Intelligence Expert</p>
                </div>

                <p className="text-muted-foreground text-center leading-relaxed">
                  With decades of experience in competitive and strategic intelligence,
                  Joséph leads Bravinci's educational programs and teaches methodologies
                  that have been successfully applied by organizations worldwide. As part
                  of the SCIP global network, he brings world-class expertise to every session.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Strategic Capabilities?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join our next Strategic Intelligence Masterclass and gain the skills
              to transform your organization's decision-making processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/solutions/strategy-command-center">View Command Center</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
