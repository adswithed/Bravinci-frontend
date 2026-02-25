'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
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
  Users
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'Local Data Hosting',
    description: 'Host your data locally in datacenters of your choice, maintaining full control and sovereignty.',
    icon: Server
  },
  {
    title: 'Modular Architecture',
    description: 'Integrate analytics, BI, data warehousing, semantics, and AI tools in one unified platform.',
    icon: Layers
  },
  {
    title: 'Twin Datacenter Setup',
    description: 'Ensure high availability and consistent scalability with redundant infrastructure.',
    icon: Cloud
  },
  {
    title: 'Open Architecture',
    description: 'Remove vendor lock-in and select your preferred tools with our open, flexible platform.',
    icon: Lock
  },
  {
    title: 'GenAI Integration',
    description: 'Access advanced artificial intelligence capabilities built into the platform.',
    icon: Cpu
  },
  {
    title: 'Transparent Pricing',
    description: 'Pay-as-you-go model with no hidden costs or long-term commitments.',
    icon: Zap
  }
]

const targetUsers = [
  {
    title: 'SMEs',
    description: 'Enterprise-grade analytics without hyperscaler pricing',
    icon: Building
  },
  {
    title: 'Large Enterprises',
    description: 'Massive scalability with governance and control',
    icon: Globe
  },
  {
    title: 'Local Operators',
    description: 'Build community clouds with regional compliance',
    icon: Server
  },
  {
    title: 'Public Sector',
    description: 'Prioritize compliance with regional data laws',
    icon: Shield
  }
]

const challenges = [
  'Rising cloud costs eating into margins',
  'Unclear pricing structures from major providers',
  'Vendor lock-in limiting flexibility',
  'Data regulation compliance requirements',
  'Need for data sovereignty',
  'Complex multi-cloud management'
]

export default function DividosPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
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
                  <span>Analytics Platform</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text-reverse">Dividos</span>
                  <br />
                  <span className="text-foreground">Analytics & AI Platform</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Next-generation analytics and AI platform designed to help organizations
                  maintain control over their data while accessing advanced computational
                  capabilities. Achieve data sovereignty without sacrificing innovation.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
                      <Lock className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">Zero</p>
                      <p className="text-sm text-muted-foreground">Vendor Lock-in</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Zap className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">Pay</p>
                      <p className="text-sm text-muted-foreground">As You Go</p>
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

        {/* Problem Statement */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Common Challenges </span>
                  <span className="gradient-text">We Solve</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Organizations today face numerous challenges with their data infrastructure.
                  Dividos addresses these pain points head-on.
                </p>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F7AE57]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#F7AE57]" />
                      </div>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl glass-card border border-[#F7AE57]/20">
                <h3 className="text-xl font-bold text-foreground mb-4">The Dividos Difference</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Dividos enables organizations to rethink their data architecture while
                  maintaining regulatory alignment with regional laws. Our platform combines
                  the power of enterprise analytics with the flexibility of open architecture.
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

        {/* Features */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Platform </span>
                <span className="gradient-text">Features</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need for modern, sovereign data analytics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#F7AE57]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#F7AE57] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Target Users */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Built For </span>
                <span className="gradient-text">Your Organization</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're a growing SME or a large enterprise, Dividos scales to meet your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetUsers.map((user, index) => {
                const Icon = user.icon
                return (
                  <div
                    key={user.title}
                    className="p-6 rounded-2xl glass-card text-center hover-lift transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#0E78AA]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{user.title}</h3>
                    <p className="text-sm text-muted-foreground">{user.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Bravinci Support */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl glass-card border border-[#0E78AA]/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    How Bravinci Supports Your Dividos Journey
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    As a strategic partner, Bravinci provides comprehensive support to help
                    you maximize the potential of the Dividos platform.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Strategic guidance and planning',
                      'Complete onboarding assistance',
                      'Tool training and masterclasses',
                      'Ongoing consultancy services',
                      'Integration support',
                      'Best practices implementation'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center p-8 rounded-2xl bg-[#0E78AA]/5">
                  <Users className="w-16 h-16 text-[#0E78AA] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Expert Team</h3>
                  <p className="text-muted-foreground mb-6">
                    Our experienced consultants guide you through every step of your data transformation journey.
                  </p>
                  <Button className="gradient-bg text-white" asChild>
                    <Link href="/contact">
                      Talk to an Expert
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
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
              Take Control of Your Data
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Start your journey to data sovereignty with Dividos. Contact us to learn
              how we can help transform your analytics infrastructure.
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
    </>
  )
}
