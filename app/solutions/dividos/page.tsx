'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { GlobalSiteWrapper } from '@/components/global-site-wrapper'
import { Button } from '@/components/ui/button'
import {
  Database,
  ArrowRight,
  CheckCircle2,
  Shield,
  Cpu,
  Globe,
  Layers,
  Lock,
  Zap,
  Server,
  Cloud,
  Building,
  Users,
  BarChart3,
  DollarSign,
  Settings
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const capabilities = [
  {
    title: 'Data Sovereignty and Local Hosting',
    description: 'Full control over data location and infrastructure. Host in regional datacenters, national facilities, or private infrastructure ensuring compliance with data residency requirements and regulatory frameworks.',
    icon: Shield
  },
  {
    title: 'Advanced Analytics and Business Intelligence',
    description: 'Comprehensive analytics capabilities including interactive dashboards, ad-hoc analysis, predictive modeling, and real-time operational intelligence without sacrificing data control.',
    icon: BarChart3
  },
  {
    title: 'Data Warehousing and Integration',
    description: 'Scalable data warehousing supporting massive data volumes with consistent performance. Integrate data from ERP systems, operational databases, third-party platforms, and external sources.',
    icon: Layers
  },
  {
    title: 'Artificial Intelligence and GenAI',
    description: 'Deploy machine learning models, natural language processing, and generative AI capabilities while maintaining data sovereignty on locally-hosted infrastructure.',
    icon: Cpu
  },
  {
    title: 'High Availability Architecture',
    description: 'Twin datacenter setup ensuring business continuity and disaster recovery. Scalability across compute, storage, memory, and user capacity supporting organizational growth.',
    icon: Cloud
  },
  {
    title: 'Open Architecture',
    description: 'Modular, vendor-agnostic platform eliminating lock-in. Choose tools and technologies best supporting your strategy rather than being constrained by proprietary ecosystems.',
    icon: Lock
  },
  {
    title: 'Transparent Pricing',
    description: 'Pay-as-you-go model with no hidden costs or long-term commitments. Predictable pricing enabling accurate budget planning and cost control.',
    icon: DollarSign
  },
  {
    title: 'Multi-Tenant Capabilities',
    description: 'Support multiple business units, subsidiaries, or clients on shared infrastructure while maintaining data isolation, security, and governance.',
    icon: Settings
  }
]

const targetUsers = [
  {
    title: 'Financial Institutions',
    description: 'Navigating data localization requirements',
    icon: Building
  },
  {
    title: 'Multinational Corporations',
    description: 'Seeking regional data residency',
    icon: Globe
  },
  {
    title: 'Government Agencies',
    description: 'Requiring secure local hosting',
    icon: Shield
  },
  {
    title: 'Telecommunications',
    description: 'Managing massive data volumes',
    icon: Server
  },
  {
    title: 'Energy Sector',
    description: 'Needing high-performance analytics',
    icon: Zap
  },
  {
    title: 'Enterprise Organizations',
    description: 'Escaping hyperscaler costs and lock-in',
    icon: Users
  }
]

const businessImpact = [
  '40-60% reduction in cloud infrastructure costs',
  'Elimination of currency exposure from multi-currency cloud bills',
  'Improved analytics performance through local hosting',
  'Enhanced data security and regulatory compliance',
  'Strategic flexibility through vendor independence',
  'Data sovereignty with partnership support'
]

export default function DividosPage() {
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

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={cn(
                  'space-y-6 transition-all duration-700',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                )}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                  <Database className="w-4 h-4 text-[#F7AE57]" />
                  <span>Data Platform</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text-reverse">Dividos</span>
                  <br />
                  <span className="text-foreground text-3xl md:text-4xl">Data sovereignty and analytics platform for organizational control</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  A next-generation analytics and AI platform enabling organizations to maintain
                  full control over their data while accessing advanced analytics, business intelligence,
                  data warehousing, and artificial intelligence capabilities.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/contact">
                      Explore Data Sovereignty
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#F7AE57]/30 hover:border-[#F7AE57]"
                    asChild
                  >
                    <Link href="/contact">Request Demo</Link>
                  </Button>
                </div>
              </div>

              <div
                className={cn(
                  'relative transition-all duration-700 delay-200',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                )}
              >
                <div className="relative p-8 rounded-3xl glass-card">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Shield className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">100%</p>
                      <p className="text-sm text-muted-foreground">Data Sovereignty</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <DollarSign className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">40-60%</p>
                      <p className="text-sm text-muted-foreground">Cost Reduction</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Lock className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">Zero</p>
                      <p className="text-sm text-muted-foreground">Vendor Lock-in</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Cpu className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">GenAI</p>
                      <p className="text-sm text-muted-foreground">Integrated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Who It&apos;s </span>
                <span className="gradient-text">For</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Organizations requiring data sovereignty and advanced analytics capabilities—from
                financial institutions to government agencies and enterprises seeking to escape
                hyperscaler costs and vendor lock-in.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetUsers.map((user, index) => {
                const Icon = user.icon
                return (
                  <div
                    key={user.title}
                    className="p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#F7AE57]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{user.title}</h3>
                    <p className="text-sm text-muted-foreground">{user.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key Capabilities & </span>
                <span className="gradient-text">Modules</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive platform for modern, sovereign data analytics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon
                return (
                  <div
                    key={capability.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#F7AE57]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 group-hover:text-[#F7AE57] transition-colors">
                          {capability.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Business Impact & </span>
                  <span className="gradient-text">Value Drivers</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Organizations deploying Dividos report significant improvements across
                  cost, performance, compliance, and strategic flexibility.
                </p>
                <ul className="space-y-4">
                  {businessImpact.map((impact, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F7AE57]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#F7AE57]" />
                      </div>
                      <span className="text-muted-foreground">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl glass-card border border-[#F7AE57]/20">
                <h3 className="text-xl font-bold text-foreground mb-4">The Dividos Advantage</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Organizations particularly value data sovereignty, cost predictability,
                  and partnership support. Dividos enables organizations to rethink their
                  data architecture while maintaining regulatory alignment with regional laws.
                </p>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F7AE57]/5">
                  <Globe className="w-10 h-10 text-[#F7AE57]" />
                  <div>
                    <p className="font-semibold text-foreground">Partnership with Bravinci</p>
                    <p className="text-sm text-muted-foreground">
                      Strategic guidance, onboarding, and expert consultancy
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
              Explore Data Sovereignty for Your Organization
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact Bravinci to discuss how Dividos can address your data sovereignty,
              analytics, and cloud cost challenges.
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
                <Link href="/solutions">View All Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
