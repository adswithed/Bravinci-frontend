/**
 * Nigeria Home Page
 *
 * Structure based on Bravinci Nigeria content document:
 * 1. Hero Section - Custom dark hero with Nigeria identity
 * 2. Capabilities Snapshot (What We Do)
 * 3. Solutions Snapshot
 * 4. Nigeria Stats / Credibility
 * 5. Industries Overview
 * 6. Why Bravinci Nigeria (Value Proposition)
 * 7. Closing CTA
 */

'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { NigeriaHeroSection, NigeriaStats, NigeriaValue } from '@/sites/nigeria/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import {
  Lightbulb,
  TrendingUp,
  Brain,
  Database,
  Layers,
  Target,
  Landmark,
  Zap,
  Building2,
  Factory,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const services = [
  {
    title: 'Strategy & Advisory',
    description: 'Navigate regulatory complexity and market dynamics with strategic frameworks that transform uncertainty into opportunity. Our advisory services deliver actionable insights supporting sustainable growth across Nigeria\'s evolving business landscape.',
    icon: Lightbulb,
    gradient: 'from-[#0E78AA]/20 to-[#0E78AA]/5',
    href: '/nigeria/services/strategy-advisory',
  },
  {
    title: 'Digital Transformation',
    description: 'Accelerate organisational evolution through integrated technology solutions that enhance operational efficiency, improve stakeholder engagement, and create lasting competitive advantage in Nigerian markets.',
    icon: TrendingUp,
    gradient: 'from-[#F7AE57]/20 to-[#F7AE57]/5',
    href: '/nigeria/services/digital-transformation',
  },
  {
    title: 'Data & AI Enablement',
    description: 'Unlock business intelligence through advanced analytics and artificial intelligence. Transform operational data into strategic insights, driving better decisions and measurable business outcomes.',
    icon: Brain,
    gradient: 'from-[#0E78AA]/15 to-[#F7AE57]/10',
    href: '/nigeria/services/data-ai',
  },
]

const solutions = [
  {
    title: 'Odoo ERP',
    description: 'Comprehensive enterprise resource planning for Nigerian businesses. Manage financial operations, inventory, manufacturing, sales, and human resources with integrated systems designed for regulatory compliance and operational excellence.',
    icon: Layers,
    href: '/nigeria/solutions/odoo-erp',
    color: '#0E78AA',
  },
  {
    title: 'Data2Employ',
    description: 'Workforce intelligence platform connecting organisations with exceptional talent. Address capability gaps, accelerate recruitment, and build teams that drive growth in Nigeria\'s competitive talent market.',
    icon: Database,
    href: '/nigeria/solutions/data2employ',
    color: '#F7AE57',
  },
  {
    title: 'Strategic Command Centre',
    description: 'Transform the way your organisation plans, tracks, and executes strategy with an all-in-one strategic intelligence hub that brings internal performance metrics, strategy development tools, and competitive insight together.',
    icon: Target,
    href: '/nigeria/contact',
    color: '#0E78AA',
  },
]

const industries = [
  {
    title: 'Public Sector',
    description: 'Supporting government agencies to modernise service delivery, enhance transparency, and optimise resource allocation.',
    icon: Landmark,
    href: '/nigeria/industries/public-sector',
  },
  {
    title: 'Oil and Gas',
    description: 'Partnering with energy sector organisations to optimise operations, ensure regulatory compliance, and drive operational excellence.',
    icon: Zap,
    href: '/nigeria/industries/oil-gas',
  },
  {
    title: 'Real Estate',
    description: 'Empowering property developers and facility managers to streamline operations and deliver exceptional results.',
    icon: Building2,
    href: '/nigeria/industries/real-estate',
  },
  {
    title: 'Manufacturing',
    description: 'Driving operational excellence for Nigerian manufacturers through intelligent solutions that optimise production and ensure quality.',
    icon: Factory,
    href: '/nigeria/industries/manufacturing',
  },
]

export function NigeriaHomePage() {
  return (
    <>
      <MegaMenu />
      <main>
        {/* 1. Custom Hero Section */}
        <NigeriaHeroSection />

        {/* 2. Capabilities Snapshot - What We Do */}
        <section id="capabilities" data-section="capabilities" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
            <div className="absolute inset-0 dot-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-[#0E78AA]" />
                <span>Comprehensive Solutions for Nigerian Business Excellence</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">What We </span>
                <span className="text-[#0E78AA]">Do</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver strategic intelligence, enterprise systems, and digital transformation
                designed for Nigeria&apos;s dynamic business environment.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <StaggerItem key={service.title}>
                    <Link href={service.href} className="group block h-full">
                      <div className={cn(
                        'relative overflow-hidden rounded-2xl p-6 md:p-8 h-full',
                        'glass-card hover-lift cursor-pointer transition-all duration-500'
                      )}>
                        <div className={cn(
                          'absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-300 group-hover:opacity-70',
                          service.gradient
                        )} />

                        <div className="relative z-10">
                          <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                            <Icon className="w-6 h-6 text-[#0E78AA]" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm font-medium text-[#0E78AA] opacity-0 group-hover:opacity-100 transition-opacity">
                            Learn More
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>

            <FadeIn delay={0.4} className="text-center mt-12">
              <Button
                size="lg"
                className="bg-[#0E78AA] hover:bg-[#0a5a80] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/nigeria/services">
                  Explore All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* 3. Solutions Snapshot */}
        <section id="solutions" data-section="solutions" className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-orange-50/50" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium mb-6">
                <Layers className="w-4 h-4 text-[#0E78AA]" />
                <span>Purpose-Built Platforms for Nigerian Excellence</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#0E78AA]">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proven solutions addressing the operational, regulatory, and strategic challenges
                facing Nigerian organisations.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <StaggerItem key={solution.title}>
                    <Link href={solution.href} className="group block h-full">
                      <div className="h-full p-8 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:border-brand-primary/30 transition-all duration-500 hover:scale-105">
                        <div
                          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                          style={{ backgroundColor: solution.color }}
                        />
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${solution.color}15` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: solution.color }} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0E78AA] transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {solution.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-[#0E78AA]">
                          Explore Solution
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* 4. Nigeria Stats */}
        <NigeriaStats />

        {/* 5. Industries Overview */}
        <section id="industries" data-section="industries" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Deep Expertise Across </span>
                <span className="text-[#0E78AA]">Nigeria&apos;s Leading Sectors</span>
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry) => {
                const Icon = industry.icon
                return (
                  <StaggerItem key={industry.title}>
                    <Link href={industry.href} className="group block h-full">
                      <div className="h-full p-6 rounded-2xl glass-card hover-lift transition-all duration-500">
                        <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-[#0E78AA]" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {industry.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-[#0E78AA] opacity-0 group-hover:opacity-100 transition-opacity">
                          Explore
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* 6. Why Bravinci Nigeria */}
        <NigeriaValue />

        {/* 7. Closing CTA */}
        <section id="cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0E78AA]/90 to-slate-950" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Organisation?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how Bravinci Nigeria&apos;s expertise can help achieve your
                strategic objectives and drive sustainable business excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/services">View Our Expertise</Link>
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
