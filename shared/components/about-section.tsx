'use client'

import { Button } from '@/shared/components/ui/button'
import {
  Award,
  Globe,
  Lightbulb,
  Users,
  Target,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Building2,
  MapPin
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'

const values = [
  {
    icon: Lightbulb,
    title: 'Intelligence-First Methodology',
    description: 'We architect intelligence systems that continuously learn, adapt, and improve decision-making across your organization.',
  },
  {
    icon: Globe,
    title: 'Ecosystem Partnership Model',
    description: 'Strategic alliances with Microsoft, AWS, Odoo, Yellowfin, and Exasol ensure best-in-class technology without vendor lock-in.',
  },
  {
    icon: Award,
    title: 'Sector-Specific Expertise',
    description: 'Deep domain knowledge accumulated through years of specialized work in your industry\'s unique regulatory and operational context.',
  },
  {
    icon: Target,
    title: 'Measurable Impact Focus',
    description: 'Every solution is designed with clear success metrics and accountability frameworks that demonstrate tangible ROI.',
  },
]

const whyChoose = [
  '40% improvement in decision velocity',
  '60% reduction in implementation risk',
  '3x return on strategic technology investments',
  'Global presence across six continents',
  '98% client satisfaction with sustained partnerships',
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* Left Content */}
          <FadeIn direction="left" className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
              <Building2 className="w-4 h-4 text-[#0E78AA]" />
              <span>Why Organizations Choose Bravinci</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-foreground">The Bravinci </span>
                <span className="text-[#0E78AA]">Advantage</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are strategic intelligence architects helping organizations navigate
                complexity and accelerate transformation through better intelligence
                that drives better decisions.
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded on the principle that better intelligence drives better decisions,
                Bravinci has spent more than 15 years partnering with ambitious organizations
                across six continents.
              </p>
              <p>
                We combine strategic foresight with technical mastery to deliver solutions
                that don&apos;t just solve today&apos;s problems but anticipate tomorrow&apos;s
                opportunities.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 rounded-xl glass-card">
              <div className="p-2 rounded-lg bg-[#0E78AA]/10">
                <MapPin className="w-5 h-5 text-[#0E78AA]" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Headquarters</p>
                <p className="text-sm text-muted-foreground">Homburg 19-G, 4153 BS Beesd, Netherlands</p>
              </div>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="bg-[#0E78AA] hover:bg-[#0a5a80] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="#contact" className="flex items-center gap-2">
                Learn More About Our Vision
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </FadeIn>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Values Grid */}
            <StaggerContainer className="grid gap-4 sm:grid-cols-2" delayChildren={0.2}>
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <StaggerItem key={value.title}>
                    <div className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500 h-full">
                      <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#0E78AA]" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>

            {/* Why Choose Section */}
            <FadeIn delay={0.4}>
              <div className="p-6 rounded-2xl border border-[#0E78AA]/20 bg-[#0E78AA]/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#F7AE57]/10">
                    <Target className="w-5 h-5 text-[#F7AE57]" />
                  </div>
                  <h3 className="font-bold text-foreground">Why Choose Bravinci?</h3>
                </div>
                <ul className="space-y-3">
                  {whyChoose.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0E78AA] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* CTA Card */}
            <FadeIn delay={0.5}>
              <div className="p-6 rounded-2xl bg-[#0E78AA] text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="w-6 h-6" />
                  <h3 className="font-bold text-lg">Ready to Get Started?</h3>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  Start with our starter package and evolve seamlessly as your needs grow.
                </p>
                <Button
                  variant="secondary"
                  className="w-full bg-white text-[#0E78AA] hover:bg-white/90 font-semibold"
                  asChild
                >
                  <Link href="#contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
