'use client'

import { Button } from '@/shared/components/ui/button'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'

const benefits = [
  'Strategic foresight with technical excellence',
  '15+ years driving transformation across sectors',
  'Partnership model with knowledge transfer',
  'Measurable impact with clear success metrics',
  'Global delivery with local expertise',
]

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0E78AA]" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5 animate-blob animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 animate-blob animation-delay-800" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white">
            <Sparkles className="w-4 h-4" />
            <span>Start a Conversation</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Transform Intelligence{' '}
            <span className="text-[#F7AE57]">into Action?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Let&apos;s discuss how Bravinci&apos;s strategic intelligence solutions
            can accelerate your organization&apos;s most important objectives.
          </p>

          {/* Benefits List */}
          <div className="max-w-xl mx-auto">
            <StaggerContainer staggerDelay={0.06} delayChildren={0.2}>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                {benefits.map((item) => (
                  <StaggerItem key={item}>
                    <li className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-[#F7AE57] shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] gap-2"
              asChild
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
