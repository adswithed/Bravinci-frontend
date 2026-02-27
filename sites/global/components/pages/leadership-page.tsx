'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  Users,
  Quote,
  Linkedin,
  Mail,
  ArrowRight,
  Target,
  Brain,
  Briefcase,
  Building2
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const leaders = [
  {
    name: '[Name]',
    title: 'Chief Executive Officer & Founding Partner',
    description: 'Strategic vision and client relationship leadership with 20+ years driving transformation in public and private sectors.',
    icon: Target,
    image: '/team/ceo-placeholder.jpg', // Placeholder
  },
  {
    name: '[Name]',
    title: 'Chief Technology Officer',
    description: 'Technology architecture and innovation leadership, specialising in AI, advanced analytics, and enterprise platform integration.',
    icon: Brain,
    image: '/team/cto-placeholder.jpg', // Placeholder
  },
  {
    name: '[Name]',
    title: 'Managing Director, Financial Services',
    description: 'Sector expertise and delivery leadership for banking, insurance, and investment management clients across regulatory jurisdictions.',
    icon: Briefcase,
    image: '/team/md-fs-placeholder.jpg', // Placeholder
  },
  {
    name: '[Name]',
    title: 'Managing Director, Public Sector',
    description: 'Government and public agency transformation leadership, focusing on digital service delivery and operational modernisation.',
    icon: Building2,
    image: '/team/md-ps-placeholder.jpg', // Placeholder
  },
]

export function GlobalLeadershipPage() {
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
                'text-center max-w-3xl mx-auto space-y-6 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                <Users className="w-4 h-4 text-[#0E78AA]" />
                <span>Leadership Team</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Leadership forged </span>
                <br />
                <span className="text-foreground">through </span>
                <span className="gradient-text">strategic complexity</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Bravinci's leadership team brings together decades of experience spanning strategic consulting, technology innovation, and sector-specific expertise. United by a commitment to excellence and client impact, our leaders set the strategic direction while remaining deeply involved in client engagements and solution development.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team Grid */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {leaders.map((leader, index) => {
                const Icon = leader.icon
                return (
                  <div
                    key={leader.title}
                    className={cn(
                      'group p-8 rounded-3xl glass-card hover-lift transition-all duration-500',
                      'border border-[#0E78AA]/10 hover:border-[#0E78AA]/30'
                    )}
                  >
                    {/* Icon/Avatar */}
                    <div className="w-20 h-20 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-[#0E78AA]" />
                    </div>

                    {/* Name & Title */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-sm font-semibold text-[#F7AE57]">
                        {leader.title}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {leader.description}
                    </p>

                    {/* Social Links (placeholder) */}
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-lg bg-[#0E78AA]/10 flex items-center justify-center hover:bg-[#0E78AA] hover:text-white transition-all">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 rounded-lg bg-[#0E78AA]/10 flex items-center justify-center hover:bg-[#0E78AA] hover:text-white transition-all">
                        <Mail className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="p-10 md:p-12 rounded-3xl glass-card border-l-4 border-[#0E78AA] relative">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-[#0E78AA]/10" />

              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6">
                  "Strategic intelligence isn't about having more data, it's about having the right frameworks to turn information into decisions and decisions into measurable impact."
                </p>
                <footer className="text-muted-foreground">
                  <p className="font-semibold">Bravinci Leadership Team</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Values Preview */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Leadership </span>
                <span className="gradient-text">Principles</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our leadership team embodies the core values that define Bravinci's approach to strategic intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl glass-card text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-[#0E78AA]" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Client-Centric</h3>
                <p className="text-sm text-muted-foreground">
                  Every decision guided by client impact and measurable business value.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-7 h-7 text-[#F7AE57]" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Innovation-Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Continuously exploring new technologies and methodologies for client advantage.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-[#0E78AA]" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Collaborative</h3>
                <p className="text-sm text-muted-foreground">
                  Building lasting partnerships through knowledge transfer and shared success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Work With Our Leadership Team
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Connect with Bravinci's leadership to discuss how we can help transform your organization's strategic intelligence capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/about">About Bravinci</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
