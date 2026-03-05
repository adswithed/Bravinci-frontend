'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Database,
  BarChart3,
  Leaf,
  FileText,
  Shield,
  ArrowRight,
  Lightbulb,
} from 'lucide-react'
import Link from 'next/link'

const insights = [
  {
    icon: Database,
    title: 'Data Governance and Repatriation',
    description: 'Intelligence for Netherlands organisations navigating data governance complexity and European data sovereignty.',
    href: '/netherlands/insights/data-governance',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Intelligence for the Netherlands organisations building data-driven decision-making capability.',
    href: '/netherlands/insights/business-intelligence',
  },
  {
    icon: Leaf,
    title: 'ESG',
    description: 'Intelligence for Netherlands organisations navigating European sustainability reporting and ESG strategy.',
    href: '/netherlands/insights/esg',
  },
  {
    icon: FileText,
    title: 'Contract Management',
    description: 'Intelligence for Netherlands organisations transforming contract management into a competitive capability.',
    href: '/netherlands/insights/contract-management',
  },
  {
    icon: Shield,
    title: 'Risk and Regulations',
    description: 'Intelligence for Netherlands organisations navigating evolving Dutch and European regulatory requirements.',
    href: '/netherlands/insights/risk-regulations',
  },
]

export function NetherlandsInsightsPageContent() {
  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        <section id="nl-insights-hero" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E78AA]/5 via-background to-background" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4 text-[#0E78AA]" />
              <span>Insights</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Netherlands </span>
              <span className="gradient-text">Insights</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expert intelligence and thought leadership on the topics that matter most to Netherlands organisations navigating complexity, regulation, and transformation.
            </p>
          </div>
        </section>

        <section id="nl-insights-grid" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight) => {
                const Icon = insight.icon
                return (
                  <Link key={insight.title} href={insight.href} className="group block">
                    <div className="h-full p-8 rounded-3xl glass-card hover-lift transition-all duration-500">
                      <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-[#0E78AA]" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                        {insight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {insight.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-[#0E78AA] group-hover:gap-2 transition-all">
                        Explore insights
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section id="nl-insights-cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our insights and intelligence can support your organisation&apos;s strategic agenda.
            </p>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
