'use client'

import { Button } from '@/shared/components/ui/button'
import {
  Building2,
  Landmark,
  Zap,
  Factory,
  Heart,
  GraduationCap,
  ArrowRight,
  Globe
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'

const industries = [
  {
    title: 'Public Sector',
    description: 'Modernize service delivery, enhance transparency, and optimize resource allocation through intelligent digital transformation.',
    icon: Landmark,
    href: '/industries/public-sector',
    color: '#0E78AA',
  },
  {
    title: 'Financial Services',
    description: 'Navigate regulatory complexity, manage risk, and capitalize on digital innovation in rapidly evolving markets.',
    icon: Building2,
    href: '/industries/financial-services',
    color: '#F7AE57',
  },
  {
    title: 'Energy & Utilities',
    description: 'Support sustainable energy transition, grid modernization, and strategic planning for decarbonization pathways.',
    icon: Zap,
    href: '/industries/energy-utilities',
    color: '#0E78AA',
  },
  {
    title: 'Manufacturing',
    description: 'Drive operational excellence through smart manufacturing, supply chain intelligence, and predictive maintenance.',
    icon: Factory,
    href: '/industries/manufacturing',
    color: '#F7AE57',
  },
  {
    title: 'Healthcare & Life Sciences',
    description: 'Transform patient outcomes and operational efficiency through clinical intelligence and population health analytics.',
    icon: Heart,
    href: '/industries/healthcare',
    color: '#0E78AA',
  },
  {
    title: 'Education & Workforce',
    description: 'Align skills development with evolving economic demands and improve learner outcomes through data-driven insights.',
    icon: GraduationCap,
    href: '/industries/education',
    color: '#F7AE57',
  },
]

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
            <Globe className="w-4 h-4 text-[#0E78AA]" />
            <span>Deep Expertise Across Critical Sectors</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Industries </span>
            <span className="text-[#0E78AA]">We Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic intelligence requirements vary dramatically across sectors.
            We&apos;ve invested years developing deep domain knowledge in six critical industries.
          </p>
        </FadeIn>

        {/* Industries Grid */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <StaggerItem key={industry.title}>
                <Link
                  href={industry.href}
                  className={cn(
                    'group relative p-6 rounded-2xl h-full block',
                    'glass-card hover-lift cursor-pointer',
                    'transition-all duration-500'
                  )}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${industry.color}15` }}
                  >
                    <Icon
                      className="w-7 h-7 transition-colors duration-300"
                      style={{ color: industry.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-medium text-[#0E78AA] opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Solutions
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeIn delay={0.4} className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA] hover:bg-[#0E78AA]/5 font-semibold"
            asChild
          >
            <Link href="/industries" className="flex items-center gap-2">
              View All Industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
