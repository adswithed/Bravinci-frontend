'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  Shield,
  Database,
  TrendingUp,
  Globe,
  Lock,
  Cpu,
  Zap,
  Layers,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Users as UsersIcon,
  BarChart3,
  Target,
  Award
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const capabilities = [
  {
    icon: Lock,
    title: 'Data Sovereignty and Local Hosting',
    description: 'Full control over data location and infrastructure. Host in regional datacenters, national facilities, or private infrastructure ensuring compliance with data residency requirements and regulatory frameworks.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics and Business Intelligence',
    description: 'Comprehensive analytics capabilities including interactive dashboards, ad-hoc analysis, predictive modeling, and real-time operational intelligence.',
  },
  {
    icon: Database,
    title: 'Data Warehousing and Integration',
    description: 'Scalable data warehousing supporting massive data volumes with consistent performance. Integrate data from disparate sources creating unified foundation for analytics and AI.',
  },
  {
    icon: Cpu,
    title: 'Artificial Intelligence and GenAI',
    description: 'Deploy machine learning models, natural language processing, and generative AI capabilities while maintaining data sovereignty on locally-hosted infrastructure.',
  },
  {
    icon: Zap,
    title: 'High Availability Architecture',
    description: 'Twin datacenter setup ensuring business continuity and disaster recovery. Scalability across compute, storage, memory, and user capacity supporting organizational growth.',
  },
  {
    icon: Layers,
    title: 'Open Architecture',
    description: 'Modular, vendor-agnostic platform eliminating lock-in. Choose tools and technologies best supporting your strategy rather than being constrained by proprietary ecosystems.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Pay-as-you-go model with no hidden costs or long-term commitments. Predictable pricing enabling accurate budget planning and cost control.',
  },
  {
    icon: UsersIcon,
    title: 'Multi-Tenant Capabilities',
    description: 'Support multiple business units, subsidiaries, or clients on shared infrastructure while maintaining data isolation, security, and governance.',
  },
]

const outcomes = [
  {
    stat: '40-60%',
    label: 'Reduction in Cloud Infrastructure Costs',
    description: 'Compared to hyperscaler platforms',
    icon: DollarSign,
  },
  {
    stat: '100%',
    label: 'Data Sovereignty',
    description: 'Complete control over data location and security',
    icon: Shield,
  },
  {
    stat: 'Enhanced',
    label: 'Performance Through Local Hosting',
    description: 'Improved analytics and regulatory compliance',
    icon: TrendingUp,
  },
]

export function GlobalDividosPage() {
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
                <Shield className="w-4 h-4 text-[#0E78AA]" />
                <span>Data Platform</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Data sovereignty and analytics platform </span>
                <span className="text-foreground">for organizational control</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Dividos is a next-generation analytics and AI platform enabling organizations to maintain full control over their data while accessing advanced analytics, business intelligence, data warehousing, and artificial intelligence capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* What It Is / Who It's For */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Built for organizations that </span>
                  <span className="gradient-text">demand control</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Organizations requiring data sovereignty and advanced analytics capabilities: financial institutions navigating data localization requirements, multinational corporations seeking regional data residency, government agencies requiring secure local hosting for sensitive information, telecommunications companies managing massive data volumes, energy sector operators needing high-performance analytics, and any enterprise seeking to escape hyperscaler cloud costs and vendor lock-in while maintaining world-class analytics capability.
                </p>
                <div className="space-y-3">
                  {[
                    'Financial institutions with data localization needs',
                    'Government agencies requiring secure local hosting',
                    'Telecommunications managing massive data volumes',
                    'Enterprises escaping hyperscaler cloud costs',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="p-8 rounded-3xl glass-card">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Shield className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Data Sovereignty</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Database className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Advanced Analytics</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <DollarSign className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Cost Control</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Globe className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Vendor Independence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key </span>
                <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive platform capabilities designed to deliver data sovereignty without compromising functionality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <h3 className="font-bold text-foreground mb-2 text-sm group-hover:text-[#0E78AA] transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Business </span>
                <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Organizations deploying Dividos report significant cost reductions, improved performance, enhanced security, and strategic flexibility through vendor independence.
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
              Explore Data Sovereignty for Your Organization
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact Bravinci to discuss how Dividos can address your data sovereignty, analytics, and cloud cost challenges.
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
