/**
 * Nigeria About Page
 *
 * Strategic intelligence and digital transformation expertise
 * for Nigeria's leading organizations.
 */

'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Award,
  Target,
  Building2,
  MapPin,
  Calendar,
  ArrowRight,
  Handshake,
  TrendingUp,
  Cpu,
  Sparkles,
} from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Market Leadership',
    description:
      'Comprehensive understanding of Nigeria\'s business landscape, regulatory environment, and commercial dynamics. We navigate complexity while maintaining focus on outcomes that matter to our clients and their stakeholders.',
    color: '#0E78AA',
  },
  {
    icon: Cpu,
    title: 'Technical Excellence',
    description:
      'Advanced capabilities across enterprise systems, data analytics, artificial intelligence, and digital transformation. We combine cutting-edge technology with practical implementation expertise delivering measurable results.',
    color: '#F7AE57',
  },
  {
    icon: Handshake,
    title: 'Partnership Approach',
    description:
      'Long-term relationships built on trust, transparency, and shared success. We transfer knowledge, build internal capabilities, and remain committed to client outcomes beyond initial implementations.',
    color: '#0E78AA',
  },
]

const stats = [
  { icon: Calendar, value: '12+', label: 'Years in Nigeria', color: '#0E78AA' },
  { icon: TrendingUp, value: '150+', label: 'Transformations', color: '#F7AE57' },
  { icon: Award, value: '95%', label: 'Client Satisfaction', color: '#0E78AA' },
  { icon: MapPin, value: '3', label: 'Offices', sublabel: 'Lagos, Abuja, Port Harcourt', color: '#F7AE57' },
]

export function NigeriaAboutPage() {
  return (
    <>
      <MegaMenu />
      <main>
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0E78AA]/20" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[#0E78AA]/10 blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-[#F7AE57]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-sm font-medium text-white/80">
                  <Building2 className="w-4 h-4 text-[#F7AE57]" />
                  <span>About Bravinci Nigeria</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Strategic Intelligence and{' '}
                  <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                    Digital Transformation
                  </span>{' '}
                  Expertise
                </h1>

                <p className="text-lg text-white/70 leading-relaxed">
                  Strategic intelligence and digital transformation expertise for Nigeria&apos;s
                  leading organizations.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button
                    size="lg"
                    className="bg-[#0E78AA] hover:bg-[#0a5a80] text-white font-semibold shadow-lg h-12 px-8"
                    asChild
                  >
                    <Link href="/nigeria/contact">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent h-12 px-8"
                    asChild
                  >
                    <Link href="/nigeria/services">Our Services</Link>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat) => {
                      const Icon = stat.icon
                      return (
                        <div
                          key={stat.label}
                          className="p-6 rounded-2xl text-center"
                          style={{ backgroundColor: `${stat.color}15` }}
                        >
                          <Icon className="w-8 h-8 mx-auto mb-2" style={{ color: stat.color }} />
                          <p className="text-3xl font-bold text-white">{stat.value}</p>
                          <p className="text-sm text-white/60">{stat.label}</p>
                          {stat.sublabel && (
                            <p className="text-xs text-white/40 mt-1">{stat.sublabel}</p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section id="introduction" data-section="introduction" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="max-w-4xl mx-auto">
              <div className="p-8 md:p-10 rounded-3xl border border-[#0E78AA]/20 bg-gradient-to-br from-[#0E78AA]/5 to-transparent">
                <div className="flex items-start gap-4 mb-4">
                  <Sparkles className="w-6 h-6 text-[#0E78AA] mt-1 shrink-0" />
                  <h2 className="text-2xl font-bold text-foreground">Who We Are</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bravinci Nigeria represents the convergence of global expertise and local market
                  knowledge, uniquely positioned to address the opportunities and complexities
                  facing Nigerian organizations. With over a decade serving Nigeria&apos;s most
                  ambitious enterprises and institutions, we deliver strategic advisory, enterprise
                  technology, and data intelligence solutions that create lasting value.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Core Pillars */}
        <section id="core-pillars" data-section="core-pillars" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Core </span>
                <span className="text-[#0E78AA]">Pillars</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The foundations that define our approach to delivering value in Nigeria.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <StaggerItem key={pillar.title}>
                    <div className="group p-8 rounded-2xl glass-card hover-lift transition-all duration-500 h-full border-t-4" style={{ borderTopColor: pillar.color }}>
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${pillar.color}15` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: pillar.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Stats Grid */}
        <section id="stats" data-section="stats" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="text-[#0E78AA]">Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Measurable results across Nigeria&apos;s business landscape.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <StaggerItem key={stat.label}>
                    <div
                      className="p-6 rounded-2xl text-center hover-lift transition-all duration-500"
                      style={{ backgroundColor: `${stat.color}10` }}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-2" style={{ color: stat.color }} />
                      <p className="text-4xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                      {stat.sublabel && (
                        <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
                      )}
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0E78AA]/90 to-slate-950" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Organisation?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Partner with Bravinci Nigeria to unlock strategic intelligence and digital
                transformation solutions tailored to your organisation&apos;s unique challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/services">Explore Services</Link>
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
