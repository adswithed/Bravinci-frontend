'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Briefcase,
  Rocket,
  Cpu,
  BarChart3,
  Users,
  GraduationCap,
  Globe,
  ArrowRight,
  Sparkles,
  Heart,
  Zap,
  BookOpen,
  Shield,
  Clock,
  Award,
  Target,
  Coffee,
  Laptop,
  MapPin,
} from 'lucide-react'

const cultureHighlights = [
  {
    icon: Rocket,
    title: 'Innovation-Driven',
    description:
      'Work on problems that matter for organisations shaping Nigeria\u2019s economy. Navigate regulatory complexity, design systems for real business environments, and deliver solutions creating measurable value.',
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Access advanced technology platforms and continuous learning while developing specialised expertise. Master enterprise systems, banking integration, analytics platforms, and solution design capabilities.',
    color: '#F7AE57',
    accentBg: 'bg-[#F7AE57]/10',
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    description:
      'Join teams combining diverse expertise: ERP specialists, software developers, business analysts, industry consultants, and project managers. We hire for problem-solving capability and collaborative spirit.',
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
  },
  {
    icon: Target,
    title: 'Impact-Focused',
    description:
      'See direct connection between your work and client outcomes. Our engagements deliver tangible value: revenue growth, cost reduction, compliance assurance, and competitive advantage.',
    color: '#F7AE57',
    accentBg: 'bg-[#F7AE57]/10',
  },
  {
    icon: GraduationCap,
    title: 'Professional Growth',
    description:
      'Structured career progression, international exposure through our global network, technical certifications, industry expertise development, and leadership opportunities.',
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description:
      'We value sustainable productivity and personal well-being. Flexible arrangements, wellness programmes, and a supportive culture that respects your time outside of work.',
    color: '#F7AE57',
    accentBg: 'bg-[#F7AE57]/10',
  },
]

const openPositions = [
  {
    title: 'Senior ERP Consultant',
    department: 'Enterprise Solutions',
    location: 'Lagos',
    type: 'Full-time',
    color: '#0E78AA',
  },
  {
    title: 'Business Analyst',
    department: 'Strategy & Advisory',
    location: 'Lagos / Abuja',
    type: 'Full-time',
    color: '#F7AE57',
  },
  {
    title: 'Data Engineer',
    department: 'Data & AI',
    location: 'Lagos',
    type: 'Full-time',
    color: '#0E78AA',
  },
  {
    title: 'Project Manager',
    department: 'Digital Transformation',
    location: 'Abuja',
    type: 'Full-time',
    color: '#F7AE57',
  },
]

const benefits = [
  { icon: Shield, label: 'Health & Wellness Coverage', color: '#0E78AA' },
  { icon: GraduationCap, label: 'Learning & Development Fund', color: '#F7AE57' },
  { icon: Globe, label: 'International Exposure', color: '#0E78AA' },
  { icon: Award, label: 'Performance Bonuses', color: '#F7AE57' },
  { icon: Clock, label: 'Flexible Working Hours', color: '#0E78AA' },
  { icon: Laptop, label: 'Modern Equipment & Tools', color: '#F7AE57' },
]

export function NigeriaCareerPage() {
  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* ── Dark Hero Section ── */}
        <section
          id="hero"
          data-section="hero"
          className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0E78AA]/20"
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 -z-0 opacity-[0.07]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </div>
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0E78AA]/10 blur-[120px] -z-0" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80">
                <Briefcase className="w-4 h-4 text-[#F7AE57]" />
                <span>Careers at Bravinci Nigeria</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Build Transformative Solutions for{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Nigeria&apos;s Leading Organisations
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Bravinci Nigeria attracts professionals seeking meaningful impact solving
                significant Nigerian business challenges. If you&apos;re energised by
                complexity, excited about technology&apos;s potential, and motivated by
                measurable outcomes improving organisational performance, you&apos;ll find
                engaging opportunities and professional growth here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                  asChild
                >
                  <Link href="#open-positions">
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
                  <Link href="#culture">Our Culture</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Culture Highlights ── */}
        <section
          id="culture"
          data-section="culture"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/5 via-background to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0E78AA]/20 bg-[#0E78AA]/5 text-sm font-medium text-[#0E78AA] mb-6">
                <Heart className="w-4 h-4" />
                <span>Our Culture</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Bravinci Nigeria
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What makes working at Bravinci Nigeria a uniquely rewarding experience.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cultureHighlights.map((item) => {
                const Icon = item.icon
                return (
                  <StaggerItem key={item.title}>
                    <div className="group h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                      <div
                        className={cn(
                          'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300',
                          item.accentBg
                        )}
                      >
                        <Icon className="w-8 h-8" style={{ color: item.color }} />
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Current Openings (CMS Placeholder) ── */}
        <section
          id="open-positions"
          data-section="open-positions"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/40 to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F7AE57]/20 bg-[#F7AE57]/5 text-sm font-medium text-[#F7AE57] mb-6">
                <Zap className="w-4 h-4" />
                <span>Open Positions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Current </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Openings
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore roles where your expertise can drive transformative outcomes for
                Nigeria&apos;s leading organisations.
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-4 max-w-4xl mx-auto">
              {openPositions.map((position) => (
                <StaggerItem key={position.title}>
                  <div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-500 cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${position.color}15` }}
                        >
                          <Briefcase className="w-6 h-6" style={{ color: position.color }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground group-hover:text-[#0E78AA] transition-colors">
                            {position.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{position.department}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#0E78AA]/10 text-xs font-medium text-[#0E78AA]">
                          {position.type}
                        </span>
                        <div
                          className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                          style={{ color: position.color }}
                        >
                          Apply
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn className="text-center mt-8">
              <p className="text-sm text-muted-foreground italic mb-6">
                Positions managed via CMS. Listings update automatically.
              </p>
              <Button
                variant="outline"
                className="border-[#0E78AA]/30 text-[#0E78AA] hover:bg-[#0E78AA]/5"
                asChild
              >
                <Link href="/nigeria/contact">
                  Don&apos;t see your role? Send us your CV
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* ── What We Look For ── */}
        <section
          id="what-we-look-for"
          data-section="what-we-look-for"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">What We </span>
                  <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                    Look For
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We seek professionals who combine technical capability with intellectual
                  curiosity and genuine commitment to client outcomes.
                </p>
                <div className="space-y-4">
                  {[
                    'Analytical thinking and structured problem-solving',
                    'Strong communication and stakeholder management',
                    'Adaptability in dynamic, complex environments',
                    'Passion for technology and continuous learning',
                    'Collaborative spirit and team orientation',
                  ].map((trait) => (
                    <div key={trait} className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#0E78AA] mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">{trait}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn>
                <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-[#0E78AA]" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Our Promise</p>
                        <p className="text-sm text-muted-foreground">
                          Meaningful work, professional growth, lasting impact
                        </p>
                      </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0E78AA]/5 to-[#F7AE57]/5 border border-white/10">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        At Bravinci Nigeria, every team member contributes to solving real
                        challenges for organisations that shape the Nigerian economy. Your
                        expertise directly influences outcomes that matter.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section
          id="benefits"
          data-section="benefits"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0E78AA]/20" />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits &{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Perks
                </span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                We invest in our people because their growth drives our success.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <StaggerItem key={benefit.label}>
                    <div className="group text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${benefit.color}20` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: benefit.color }} />
                      </div>
                      <p className="text-white font-semibold text-sm">{benefit.label}</p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section
          id="cta"
          data-section="cta"
          className="relative py-24 overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E78AA] via-[#0E78AA]/90 to-[#0a5a80]" />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.07]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90">
                <Sparkles className="w-4 h-4" />
                <span>Join Our Team</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Make an Impact?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Explore open positions and discover how your expertise can contribute to
                transformative outcomes for Nigeria&apos;s leading organisations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href="/nigeria/about">Learn About Us</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
