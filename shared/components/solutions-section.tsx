'use client'

import { useState } from 'react'
import { Button } from '@/shared/components/ui/button'
import {
  BarChart3,
  Cpu,
  Shield,
  Users,
  FileText,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'

const solutions = [
  {
    id: 1,
    title: 'Dividos',
    description: 'Next-generation data and AI platform enabling organizations to maintain full control over their data while accessing advanced analytics, business intelligence, and artificial intelligence capabilities.',
    features: [
      'Data sovereignty & local hosting',
      'Advanced analytics & AI capabilities',
      'High-performance data warehousing',
      'Transparent pay-as-you-go pricing',
    ],
    icon: Shield,
    highlight: true,
    badge: 'Data Platform',
    href: '/solutions/dividos',
  },
  {
    id: 2,
    title: 'Strategic Command Center',
    description: 'Comprehensive strategic planning and monitoring platform integrating performance metrics, strategy development tools, and competitive intelligence into one unified environment.',
    features: [
      'Real-time executive intelligence dashboard',
      'Strategic roadmap & OKR tracking',
      'Competitive threat & opportunity radar',
      'HR, financial & operational KPIs',
    ],
    icon: BarChart3,
    highlight: true,
    badge: 'Intelligence Hub',
    href: '/solutions/strategy-command-center',
  },
  {
    id: 3,
    title: 'Data2Hire',
    description: 'AI-powered talent intelligence platform that integrates HRIS, ATS, and external data sources to provide real-time workforce insights and optimize talent acquisition.',
    features: [
      'AI-powered candidate matching',
      'Skills assessment & gap analysis',
      'Workforce planning & succession',
      'Performance forecasting & retention',
    ],
    icon: Users,
    highlight: true,
    badge: 'Talent Intelligence',
    href: '/solutions/data2hire',
  },
]

export function SolutionsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section
      id="solutions"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
            <Zap className="w-4 h-4 text-[#F7AE57]" />
            <span>Purpose-Built Intelligence Platforms</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Proprietary </span>
            <span className="text-[#F7AE57]">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Years of domain expertise crystallized into deployable intelligence systems—combining
            best practices, proven methodologies, and advanced technology.
          </p>
        </FadeIn>

        {/* Solutions Grid */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon
            const isHovered = hoveredCard === solution.id

            return (
              <StaggerItem
                key={solution.id}
                className={cn(solution.highlight ? 'md:col-span-2 lg:col-span-1' : '')}
              >
                <div
                  className="group relative rounded-2xl overflow-hidden h-full"
                  onMouseEnter={() => setHoveredCard(solution.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card */}
                  <div
                    className={cn(
                      'relative h-full p-6 md:p-8 rounded-2xl border transition-all duration-300',
                      'bg-card/80 backdrop-blur-sm',
                      isHovered
                        ? 'border-[#0E78AA]/50 shadow-xl shadow-[#0E78AA]/10'
                        : 'border-border/50 shadow-lg',
                      solution.highlight && 'bg-[#0E78AA]/5'
                    )}
                  >
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={cn(
                          'text-xs font-medium px-3 py-1 rounded-full',
                          solution.highlight
                            ? 'bg-[#0E78AA] text-white'
                            : 'bg-muted text-muted-foreground'
                        )}
                      >
                        {solution.badge}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className={cn(
                        'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300',
                        isHovered
                          ? 'bg-[#0E78AA] scale-110'
                          : 'bg-[#0E78AA]/10'
                      )}
                    >
                      <Icon
                        className={cn(
                          'w-7 h-7 transition-colors duration-300',
                          isHovered ? 'text-white' : 'text-[#0E78AA]'
                        )}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature, i) => (
                        <li
                          key={feature}
                          className={cn(
                            'flex items-center gap-3 text-sm text-muted-foreground transition-all duration-300',
                            isHovered && 'translate-x-1'
                          )}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#0E78AA] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      asChild
                      variant={solution.highlight ? 'default' : 'outline'}
                      className={cn(
                        'w-full group/btn transition-all duration-300',
                        solution.highlight
                          ? 'bg-[#0E78AA] hover:bg-[#0a5a80] text-white hover:shadow-lg'
                          : 'border-[#0E78AA]/30 hover:border-[#0E78AA] hover:bg-[#0E78AA]/5'
                      )}
                    >
                      <Link href={solution.href || '/solutions'} className="flex items-center justify-center gap-2">
                        View {solution.title}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>

                  {/* Hover glow */}
                  {isHovered && (
                    <div className="absolute -inset-px bg-[#0E78AA]/15 rounded-2xl blur-xl opacity-50 -z-10" />
                  )}
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeIn delay={0.4} className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Our team is ready to help.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA] hover:bg-[#0E78AA]/5 font-semibold"
            asChild
          >
            <Link href="#contact" className="flex items-center gap-2">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
