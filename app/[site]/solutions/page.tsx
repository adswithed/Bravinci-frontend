'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Layers,
  ArrowRight,
  Monitor,
  Database,
  GraduationCap,
  Cpu,
  BarChart3,
  Users,
  FileText,
  Shield,
  Zap,
  Globe
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const solutions = [
  {
    title: 'Strategy Command Center',
    description: 'Revolutionize your strategic processes with our cutting-edge MI-7 LED-wall solution designed to boost your business performance and competitiveness.',
    icon: Monitor,
    href: '/solutions/strategy-command-center',
    color: '#0E78AA',
    features: ['Real-time KPI monitoring', 'Competitive intelligence', 'Strategic roadmap management', 'Threat & opportunity radar'],
    highlight: true
  },
  {
    title: 'Dividos Platform',
    description: 'Next-generation analytics and AI platform enabling data sovereignty while accessing advanced computational capabilities.',
    icon: Database,
    href: '/solutions/dividos',
    color: '#F7AE57',
    features: ['Local data hosting', 'Modular architecture', 'GenAI integration', 'Transparent pricing'],
    highlight: true
  },
  {
    title: 'Strategic Intelligence Masterclass',
    description: 'SCIP-certified 2-day intensive program covering 40+ analytical frameworks for strategic decision-making excellence.',
    icon: GraduationCap,
    href: '/solutions/masterclass',
    color: '#0E78AA',
    features: ['SCIP certification', '40+ frameworks', 'Interactive workshops', 'Expert instruction'],
    highlight: true
  },
  {
    title: 'AI Virtual Consultant',
    description: 'Comprehensive multi-level organizational assessments with real-time transformation tracking.',
    icon: Cpu,
    href: '/contact',
    color: '#F7AE57',
    features: ['Pre-built templates', 'Customizable assessments', 'Real-time tracking', 'Rapid delivery']
  },
  {
    title: 'HR Workforce Analytics',
    description: 'Optimize talent acquisition, diversity initiatives, and workforce oversight through AI-powered insights.',
    icon: Users,
    href: '/contact',
    color: '#0E78AA',
    features: ['Talent analytics', 'Diversity tracking', 'Performance metrics', 'AI-powered insights']
  },
  {
    title: 'Contract Invoice Gap Analysis',
    description: 'No cure no pay analysis identifying discrepancies between invoices and contracts with ~10% savings potential.',
    icon: FileText,
    href: '/contact',
    color: '#F7AE57',
    features: ['Statistical analysis', 'No upfront cost', 'Substantial savings', 'Risk-free engagement']
  },
  {
    title: 'Regulatory Reporting (IFRS/CSRD)',
    description: 'Cost-effective regulatory reporting solutions with integrated data hub and streamlined connectivity.',
    icon: Shield,
    href: '/contact',
    color: '#0E78AA',
    features: ['IFRS compliance', 'CSRD reporting', 'Integrated data hub', 'Quick implementation']
  },
  {
    title: 'Data Repatriation',
    description: 'Secure migration and management of your data assets with full sovereignty and compliance.',
    icon: Globe,
    href: '/contact',
    color: '#F7AE57',
    features: ['Data sovereignty', 'Secure migration', 'Compliance assured', 'Full control']
  }
]

export default function SolutionsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const highlightedSolutions = solutions.filter(s => s.highlight)
  const otherSolutions = solutions.filter(s => !s.highlight)

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[#0E78AA]/5" />
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
                <Layers className="w-4 h-4 text-[#0E78AA]" />
                <span>Our Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Enterprise </span>
                <span className="gradient-text">Intelligence Solutions</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Powerful, ready-to-deploy solutions that transform how organizations gather,
                analyze, and act on strategic intelligence. From command centers to AI platforms,
                we have the tools to drive your competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Featured </span>
                <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our flagship products designed to transform your strategic capabilities.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {highlightedSolutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <div
                    key={solution.title}
                    className="group relative p-8 rounded-3xl glass-card hover-lift transition-all duration-500 border-t-4"
                    style={{ borderTopColor: solution.color }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${solution.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: solution.color }} />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                      {solution.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Zap className="w-4 h-4" style={{ color: solution.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full gradient-bg text-white font-semibold"
                      asChild
                    >
                      <Link href={solution.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Other Solutions */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">More </span>
                <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional tools and platforms to support your intelligence needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherSolutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <div
                    key={solution.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${solution.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: solution.color }} />
                    </div>

                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                      {solution.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {solution.description}
                    </p>

                    <Link
                      href={solution.href}
                      className="inline-flex items-center text-sm font-medium text-[#0E78AA] hover:underline"
                    >
                      Learn more
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
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
              Find the Right Solution for Your Business
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Not sure which solution fits your needs? Our experts can help you identify
              the perfect combination of tools and services for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
