'use client'

import {
  Lightbulb,
  GraduationCap,
  Users,
  Code,
  Briefcase,
  BarChart3,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'

const services = [
  {
    title: 'Strategy & Advisory',
    description: 'Navigate organizational complexity with strategic intelligence frameworks that illuminate opportunity, quantify risk, and accelerate decision-making.',
    icon: Lightbulb,
    features: ['Strategic Planning & Scenario Modeling', 'Market Intelligence & Competitive Analysis', 'Digital Strategy & Transformation Roadmapping', 'Executive Advisory & Decision Support'],
    gradient: 'from-[#0E78AA]/20 to-[#0E78AA]/5',
    iconBg: 'bg-[#0E78AA]/10',
    span: 'md:col-span-2 lg:col-span-2',
    href: '/services#strategy',
  },
  {
    title: 'Digital Transformation',
    description: 'Accelerate digital evolution through integrated technology solutions that enhance operational efficiency, improve customer experience, and create sustainable competitive advantage.',
    icon: Code,
    features: ['Enterprise Architecture & Platform Selection', 'Cloud Migration & Modernization', 'Business Process Automation', 'Change Management & Adoption'],
    gradient: 'from-[#F7AE57]/20 to-[#F7AE57]/5',
    iconBg: 'bg-[#F7AE57]/10',
    span: 'md:col-span-1 lg:col-span-2',
    href: '/services#digital',
  },
  {
    title: 'Data & AI Enablement',
    description: 'Unlock trapped value in your data ecosystem through advanced analytics, artificial intelligence, and intelligent automation that drive measurable business outcomes.',
    icon: BarChart3,
    features: ['Data Strategy & Governance', 'Advanced Analytics & Visualization', 'AI & Machine Learning', 'Predictive Modeling & Forecasting'],
    gradient: 'from-[#0E78AA]/15 to-[#F7AE57]/10',
    iconBg: 'bg-[#0E78AA]/15',
    span: 'md:col-span-3 lg:col-span-2',
    href: '/services#data-ai',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
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
            <Sparkles className="w-4 h-4 text-[#0E78AA]" />
            <span>How We Help Organizations Win</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Strategic Intelligence </span>
            <span className="text-[#0E78AA]">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine strategic foresight with technical excellence to deliver
            intelligence solutions that matter.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <StaggerItem
                key={service.title}
                className={cn(service.span)}
              >
                <div
                  className={cn(
                    'group relative overflow-hidden rounded-2xl p-6 md:p-8 h-full',
                    'glass-card hover-lift cursor-pointer',
                    'transition-all duration-500'
                  )}
                >
                  {/* Gradient overlay */}
                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-300 group-hover:opacity-70',
                      service.gradient
                    )}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={cn(
                        'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                        'transition-transform duration-300 group-hover:scale-110',
                        service.iconBg
                      )}
                    >
                      <Icon className="w-6 h-6 text-[#0E78AA]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0E78AA]" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-medium text-[#0E78AA] opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -inset-px bg-[#0E78AA]/10 rounded-2xl blur-xl" />
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeIn delay={0.4} className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#0E78AA] hover:bg-[#0a5a80] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
