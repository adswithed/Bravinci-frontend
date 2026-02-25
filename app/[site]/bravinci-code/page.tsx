'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Target,
  Lightbulb,
  Users,
  Shield,
  Award
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useSite } from '@/lib/site-context'

const principles = [
  {
    title: 'Strategic Excellence',
    description: 'We deliver strategic intelligence solutions that transform data into competitive advantage.',
    icon: Target
  },
  {
    title: 'Innovation First',
    description: 'State-of-the-art governance combined with ready-made, business-centric solutions.',
    icon: Lightbulb
  },
  {
    title: 'Collaborative Partnership',
    description: 'We work alongside our clients as partners, not vendors, to achieve shared goals.',
    icon: Users
  },
  {
    title: 'Integrity & Trust',
    description: 'ISO 27001 certified operations ensuring your data is protected and handled with care.',
    icon: Shield
  }
]

const coreValues = [
  'Transform data into actionable insights',
  'Enable informed decision-making at every level',
  'Drive sustainable competitive advantage',
  'Foster a culture of continuous improvement',
  'Build long-term strategic partnerships',
  'Deliver measurable business impact'
]

export default function BravinciCodePage() {
  const { basePath } = useSite()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[#0E78AA]/5" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={cn(
                  'space-y-6 transition-all duration-700',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                )}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                  <BookOpen className="w-4 h-4 text-[#0E78AA]" />
                  <span>Our Philosophy</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">The </span>
                  <span className="gradient-text">Bravinci Code</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our guiding principles and values that define how we work, innovate,
                  and deliver exceptional intelligence solutions. The Bravinci Code
                  represents our commitment to excellence and client success.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href={`${basePath}/contact`}>
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                    asChild
                  >
                    <Link href={`${basePath}/about`}>About Us</Link>
                  </Button>
                </div>
              </div>

              <div
                className={cn(
                  'relative transition-all duration-700 delay-200',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                )}
              >
                <div className="relative p-8 rounded-3xl glass-card">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-2xl bg-[#0E78AA] flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl font-bold text-white">B</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Bravinci Code</h3>
                    <p className="text-muted-foreground">Our principles for excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our Core </span>
                <span className="gradient-text">Principles</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The foundational beliefs that guide everything we do at Bravinci.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon
                return (
                  <div
                    key={principle.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#0E78AA]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">What We </span>
                  <span className="gradient-text">Stand For</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  The Bravinci Code is more than words—it's a commitment to our clients,
                  partners, and ourselves to maintain the highest standards of excellence.
                </p>
                <ul className="space-y-4">
                  {coreValues.map((value, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0" />
                      <span className="text-muted-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl glass-card border border-[#0E78AA]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#F7AE57]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Our Commitment</h3>
                    <p className="text-sm text-muted-foreground">Excellence in everything we do</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that true success comes from helping our clients succeed.
                  The Bravinci Code ensures that every interaction, every solution,
                  and every partnership reflects our unwavering commitment to excellence.
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
              Experience the Bravinci Difference
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Ready to work with a partner who lives by these principles?
              Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href={`${basePath}/contact`}>
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href={`${basePath}/services`}>Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
