'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  FileText,
  TrendingUp,
  Shield,
  Zap,
  Users,
  BarChart3,
  Brain,
  Workflow,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const contentTopics = [
  {
    icon: FileText,
    title: 'Contract Intelligence',
    description:
      'Transforming contracts from static documents into strategic intelligence assets.',
  },
  {
    icon: TrendingUp,
    title: 'Value Capture',
    description:
      'Ensuring contractual value is actually realised, not just negotiated.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description:
      'Identifying and mitigating contractual risks before they become issues.',
  },
  {
    icon: Zap,
    title: 'Process Optimisation',
    description:
      'Streamlining contract lifecycle management for speed and efficiency.',
  },
  {
    icon: Users,
    title: 'Stakeholder Collaboration',
    description:
      'Breaking down silos in how contracts are created, managed, and leveraged.',
  },
  {
    icon: BarChart3,
    title: 'Performance Visibility',
    description:
      'Building analytics that track and drive contract performance.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Contracts',
    description:
      'Leveraging AI for contract analysis, generation, and monitoring.',
  },
  {
    icon: Workflow,
    title: 'CLM Technology',
    description:
      'Selecting and implementing contract lifecycle management platforms effectively.',
  },
]

export function GlobalInsightContractManagementPage() {
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
                <FileText className="w-4 h-4 text-[#0E78AA]" />
                <span>Insights</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Contract </span>
                <span className="gradient-text">Management</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Strategic value through contract intelligence
              </p>
            </div>
          </div>
        </section>

        {/* Framing Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contracts represent commitments worth billions, yet most
                organisations treat them as filing exercises rather than strategic
                assets. The result: value leakage, hidden risks, and missed
                opportunities. This collection explores how to transform contract
                management from an administrative function into a strategic
                capability that protects and creates value.
              </p>
            </div>
          </div>
        </section>

        {/* Content Topics */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Explore </span>
                <span className="gradient-text">Topics</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep dives into the key areas of contract management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentTopics.map((topic) => {
                const Icon = topic.icon
                return (
                  <div
                    key={topic.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#0E78AA]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 text-sm group-hover:text-[#0E78AA] transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {topic.description}
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
              Stay Updated
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe to receive the latest insights on contract management
              directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Subscribe to Insights
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
