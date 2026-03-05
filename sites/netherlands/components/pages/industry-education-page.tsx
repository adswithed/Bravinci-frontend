/**
 * Netherlands Industry - Education & Workforce Development Page
 *
 * Strategic intelligence and transformation expertise for
 * Dutch educational institutions and workforce development organisations.
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  GraduationCap,
  BarChart3,
  BookOpen,
  Users,
  Monitor,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const landscapeChallenges = [
  'Increasing demand for data-driven institutional performance management and accountability',
  'Student success and retention analytics to improve educational outcomes',
  'Workforce skills gap analysis and alignment with labour market demands',
  'Digital learning transformation accelerated by post-pandemic pedagogical shifts',
  'Accreditation and quality assurance compliance requiring sophisticated data capabilities',
  'Funding optimisation and resource allocation in an environment of fiscal constraint',
]

const howWeHelp = [
  'Institutional performance analytics platforms integrating student, financial, operational, and research data for strategic decision-making',
  'Learning analytics and curriculum intelligence solutions that identify intervention opportunities and optimise educational pathways',
  'Workforce skills intelligence platforms connecting educational programmes with employer needs and labour market dynamics',
  'Digital learning transformation programmes that modernise pedagogy, technology infrastructure, and student experience',
  'Strategic intelligence dashboards for institutional leaders providing real-time visibility into key performance indicators',
]

const solutions = [
  {
    icon: BarChart3,
    title: 'Institutional Performance Analytics',
    description:
      'Comprehensive analytics platforms that integrate data across student information systems, financial systems, human resources, research management, and facilities to provide institutional leaders with unified performance visibility. Our solutions help Dutch universities, hogescholen, and MBO institutions track key performance indicators, benchmark against peers, optimise resource allocation, and demonstrate accountability to accreditation bodies and funding organisations.',
    color: '#0E78AA',
  },
  {
    icon: BookOpen,
    title: 'Learning Analytics and Curriculum Intelligence',
    description:
      'Advanced learning analytics solutions that analyse student engagement, progression, and outcomes data to identify at-risk students, evaluate curriculum effectiveness, and inform pedagogical innovation. Our platforms help Dutch educational institutions move from retrospective reporting to predictive and prescriptive analytics that enable early intervention, personalised learning pathways, and evidence-based curriculum design aligned with educational quality standards.',
    color: '#F7AE57',
  },
  {
    icon: Users,
    title: 'Workforce Skills Intelligence',
    description:
      'Data-driven workforce intelligence platforms that connect educational programme design with labour market demands, employer skill requirements, and economic development priorities. Our solutions help Dutch educational institutions and workforce development organisations analyse skills gaps, forecast future workforce needs, design responsive training programmes, and track employment outcomes to ensure educational investments translate into productive economic participation.',
    color: '#0E78AA',
  },
  {
    icon: Monitor,
    title: 'Digital Learning Transformation',
    description:
      'End-to-end digital transformation programmes that modernise educational delivery through learning management system optimisation, digital assessment platforms, virtual and hybrid learning environments, and student experience portals. We guide Dutch educational institutions through the complex process of digital adoption, addressing technology integration, pedagogical redesign, faculty development, and change management to ensure sustainable transformation.',
    color: '#F7AE57',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Intelligence for Education Leaders',
    description:
      'Executive-level strategic intelligence solutions that provide institutional leaders with real-time dashboards, scenario modelling tools, and competitive benchmarking capabilities. Our platforms help university boards, college executives, and education system leaders make evidence-based strategic decisions on programme portfolio management, research investment, internationalisation strategy, and institutional positioning within the Dutch and European higher education landscape.',
    color: '#0E78AA',
  },
]

export function NetherlandsIndustryEducationPage() {
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
                <span>Education &amp; Workforce Development</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Strategic intelligence and transformation expertise for </span>
                <span className="gradient-text">Dutch educational institutions and workforce development organisations</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Bravinci Netherlands partners with universities, hogescholen, MBO institutions, and workforce development organisations to transform institutional performance through data intelligence, learning analytics, and digital innovation.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/netherlands/contact">
                    Discuss Your Education Objectives
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                  asChild
                >
                  <Link href="/netherlands/industries">All Industries</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Landscape */}
        <section
          id="landscape"
          data-section="landscape"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-3xl glass-card border-l-4 border-[#F7AE57]">
                <div className="flex items-start gap-4 mb-6">
                  <TrendingUp className="w-8 h-8 text-[#F7AE57] shrink-0 mt-1" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    The Netherlands Education and Workforce Landscape
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Organisations must uphold academic quality, adapt curricula to evolving skill needs, and build data capabilities for evidence-based management learning and workforce development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & How We Help */}
        <section
          id="challenges"
          data-section="challenges"
          className="py-20 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Industry </span>
                  <span className="gradient-text">Challenges</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Dutch educational institutions and workforce development organisations face converging pressures that demand integrated intelligence and transformation capabilities.
                </p>
                <div className="space-y-3">
                  {landscapeChallenges.map((challenge, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg glass-card">
                      <CheckCircle2 className="w-5 h-5 text-[#F7AE57] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">How We </span>
                  <span className="gradient-text">Help</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We support Netherlands educational institutions and corporate learning organisations in developing the data intelligence, operational performance management, and transformation capabilities required to deliver measurable impact in complex, evolving environments. Our education practice combines sector understanding with analytical expertise and the specialised knowledge of the Bravinci Strategic Intelligence Masterclass programme.
                </p>
                <div className="space-y-3">
                  {howWeHelp.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Cards */}
        <section
          id="solutions"
          data-section="solutions"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Education &amp; Workforce </span>
                <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Five specialised solution areas designed to address the performance, analytical, and transformation requirements of Netherlands educational institutions and workforce development organisations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <div
                    key={solution.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${solution.color}10` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: solution.color }} />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
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
              Discuss Your Education and Workforce Development Transformation Agenda
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our Netherlands practice to explore how Bravinci can support your institutional performance and capability development objectives.
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
                <Link href="/netherlands/industries">All Industries</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
