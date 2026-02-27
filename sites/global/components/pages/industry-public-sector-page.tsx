'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  Shield,
  Users,
  FileText,
  Lock,
  Building2,
  Workflow,
  Cloud,
  Database,
  TrendingUp,
  CheckCircle2,
  Zap,
  Target,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const challenges = [
  'Legacy system modernization while maintaining security and compliance',
  'Citizen service delivery transformation across multiple channels',
  'Data integration and interoperability across government agencies',
  'Budget constraints and ROI justification requirements',
  'Regulatory compliance and data sovereignty concerns',
  'Change management in large, complex organizational structures',
]

const howWeHelp = [
  'Strategic roadmaps aligned with public sector mandates and budgets',
  'Secure cloud migration and modernization strategies',
  'Citizen-centric digital service design and delivery',
  'Data governance and analytics frameworks',
  'Compliance-first technology architecture',
  'Stakeholder engagement and change enablement',
]

const services = [
  {
    icon: Target,
    title: 'Strategy & Advisory',
    description: 'Digital government strategies aligned with citizen needs and fiscal realities.',
    href: '/services/strategy-advisory',
  },
  {
    icon: TrendingUp,
    title: 'Digital Transformation',
    description: 'Public sector transformation that improves service delivery and operational efficiency.',
    href: '/services/digital-transformation',
  },
  {
    icon: Database,
    title: 'Data & AI',
    description: 'Data-driven insights for policy decisions and improved citizen services.',
    href: '/services/data-ai',
  },
  {
    icon: Cloud,
    title: 'Cloud Modernization',
    description: 'Secure cloud platforms that meet government security and compliance standards.',
    href: '/services/cloud-modernization',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security frameworks protecting citizen data and critical infrastructure.',
    href: '/services/cybersecurity',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Intelligent automation reducing administrative burden and improving service speed.',
    href: '/services/process-automation',
  },
]

const outcomes = [
  {
    stat: '45%',
    label: 'Reduction in Service Delivery Time',
    description: 'Faster citizen service through digital channels',
    icon: Zap,
  },
  {
    stat: '60%',
    label: 'Improved Citizen Satisfaction',
    description: 'Higher satisfaction scores across service touchpoints',
    icon: Users,
  },
  {
    stat: '35%',
    label: 'Operational Cost Savings',
    description: 'Lower costs through automation and efficiency',
    icon: TrendingUp,
  },
]

export function GlobalIndustryPublicSectorPage() {
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
                <Building2 className="w-4 h-4 text-[#0E78AA]" />
                <span>Public Sector</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Digital government that </span>
                <span className="gradient-text">serves citizens better</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Government agencies face mounting pressure to deliver modern digital services while managing legacy systems, tight budgets, and complex compliance requirements. Citizens expect the same seamless digital experiences they receive from private sector organizations, yet public sector technology transformation must navigate unique constraints around security, accessibility, procurement, and stakeholder coordination.
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Public Sector </span>
                  <span className="gradient-text">Challenges</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Government organizations must transform to meet rising citizen expectations while navigating unique technical, regulatory, and organizational complexities.
                </p>
                <div className="space-y-3">
                  {challenges.map((challenge, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg glass-card">
                      <CheckCircle2 className="w-5 h-5 text-[#F7AE57] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">How </span>
                  <span className="gradient-text">Bravinci Helps</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We bring deep public sector expertise and proven transformation methodologies that respect government constraints while delivering citizen-centric outcomes.
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

        {/* Relevant Services */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Relevant </span>
                <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized services designed for public sector transformation needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#0E78AA]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-[#0E78AA] group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Measurable </span>
                <span className="gradient-text">Outcomes</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Proven results helping government agencies deliver better citizen services and operational excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {outcomes.map((outcome) => {
                const Icon = outcome.icon
                return (
                  <div
                    key={outcome.label}
                    className="group p-8 rounded-3xl glass-card hover-lift text-center transition-all duration-500"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#0E78AA]" />
                    </div>

                    <div className="text-5xl font-bold gradient-text mb-2">
                      {outcome.stat}
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {outcome.label}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {outcome.description}
                    </p>
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
              Transform Your Agency's Digital Capabilities
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Connect with our public sector experts to explore how we can help you deliver better citizen services while meeting compliance and budget requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
