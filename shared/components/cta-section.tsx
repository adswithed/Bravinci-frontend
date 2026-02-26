'use client'

import { Button } from '@/shared/components/ui/button'
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <FadeIn direction="left" className="space-y-8">
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
            <p className="text-lg text-white/80 leading-relaxed">
              Let&apos;s discuss how Bravinci&apos;s strategic intelligence solutions
              can accelerate your organization&apos;s most important objectives.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                What You Can Expect:
              </h3>
              <StaggerContainer staggerDelay={0.06} delayChildren={0.2}>
                <ul className="space-y-3">
                  {benefits.map((item) => (
                    <StaggerItem key={item}>
                      <li className="flex items-center gap-3 text-white/90">
                        <CheckCircle2 className="w-5 h-5 text-[#F7AE57] shrink-0" />
                        {item}
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Right Contact Card */}
          <FadeIn direction="right" delay={0.2} className="space-y-6">
            {/* Contact Card */}
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a
                      href="mailto:office@bravinci.com"
                      className="text-white/70 hover:text-[#F7AE57] transition-colors"
                    >
                      office@bravinci.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a
                      href="tel:+31850606074"
                      className="text-white/70 hover:text-[#F7AE57] transition-colors"
                    >
                      +31 (0)85-0606074
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-white/70">
                      Homburg 19-G, 4153 BS Beesd, Netherlands
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Business Hours</p>
                    <p className="text-white/70">
                      Monday - Friday, 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] gap-2"
              >
                Schedule a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
              >
                Download Brochure
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
              >
                View Case Studies
              </Button>
            </div>

            {/* Response Time */}
            <div className="flex items-center justify-center gap-2 text-sm text-white/60">
              <Send className="w-4 h-4" />
              <span>We typically respond within 24 hours</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
