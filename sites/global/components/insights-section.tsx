'use client'

import Link from 'next/link'
import { Brain, BarChart3, Target, ArrowRight, Sparkles, LucideIcon } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'

// Icon mapping for WordPress data
const iconMap: Record<string, LucideIcon> = {
  'target': Target,
  'brain': Brain,
  'bar-chart-3': BarChart3,
}

// Default data for standalone usage
const defaultInsights = [
  {
    title: 'Strategic Intelligence',
    description: 'Market trends, competitive analysis, and actionable insights that drive strategic decision-making.',
    icon: 'target',
    href: '/insights/strategic-intelligence',
    gradient: 'from-[#0E78AA]/10 to-[#0E78AA]/5',
  },
  {
    title: 'Artificial Intelligence',
    description: 'AI trends, applications, and best practices transforming business operations and strategy.',
    icon: 'brain',
    href: '/insights/artificial-intelligence',
    gradient: 'from-[#F7AE57]/10 to-[#F7AE57]/5',
  },
  {
    title: 'Business Intelligence',
    description: 'Data analytics, visualization insights, and intelligence frameworks for measurable outcomes.',
    icon: 'bar-chart-3',
    href: '/insights/business-intelligence',
    gradient: 'from-[#0E78AA]/10 to-[#F7AE57]/10',
  },
]

export interface Insight {
  id?: number
  title: string
  description: string
  icon: string
  gradient?: string
  href?: string
}

export interface InsightsSectionProps {
  badge?: string
  title?: string
  titleHighlight?: string
  subtitle?: string
  insights?: Insight[]
  ctaText?: string
  ctaLink?: string
}

export function InsightsSection({
  badge = 'Thought Leadership',
  title = 'Insights That',
  titleHighlight = 'Drive Action',
  subtitle = 'Explore our latest research, industry analysis, and expert perspectives on strategic intelligence and digital transformation.',
  insights = defaultInsights,
  ctaText = 'View All Insights',
  ctaLink = '/insights',
}: InsightsSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#0E78AA]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F7AE57]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#F7AE57]" />
            <span>{badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title} <span className="text-[#0E78AA]">{titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </FadeIn>

        {/* Insights Grid */}
        <StaggerContainer className="grid gap-8 md:grid-cols-3 mb-12">
          {insights.map((insight) => {
            const Icon = iconMap[insight.icon] || Target
            return (
              <StaggerItem key={insight.title}>
                <Link
                  href={insight.href || '/insights'}
                  className="group block h-full"
                >
                  <div className={cn(
                    'relative h-full p-8 rounded-2xl border border-gray-200 bg-white',
                    'transition-all duration-300',
                    'hover:shadow-xl hover:border-[#0E78AA]/20 hover:-translate-y-2'
                  )}>
                    {/* Background gradient */}
                    <div className={cn(
                      'absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity',
                      insight.gradient || 'from-[#0E78AA]/10 to-[#0E78AA]/5'
                    )} />

                    <div className="relative">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-[#0E78AA]" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0E78AA] transition-colors">
                        {insight.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {insight.description}
                      </p>

                      {/* Read more link */}
                      <div className="flex items-center gap-2 text-[#0E78AA] font-medium">
                        <span>Explore insights</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* View All Button */}
        <FadeIn delay={0.4} className="text-center">
          <Link
            href={ctaLink}
            className={cn(
              'inline-flex items-center gap-2 px-8 py-4 rounded-xl',
              'bg-white border-2 border-[#0E78AA] text-[#0E78AA] font-semibold',
              'hover:bg-[#0E78AA] hover:text-white',
              'transition-all duration-300 shadow-sm hover:shadow-lg'
            )}
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
