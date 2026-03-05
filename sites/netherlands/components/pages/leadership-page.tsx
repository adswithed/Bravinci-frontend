/**
 * Netherlands Leadership Page
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Users,
  Target,
  Building2,
  ArrowRight,
  Quote,
  Briefcase,
  Monitor,
  GraduationCap,
  UserCircle2
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const leaders = [
  {
    name: '[Name]',
    role: 'Managing Director, Bravinci Netherlands',
    description:
      '[1-2 sentences on Netherlands market tenure, key sectors served, and advisory background relevant to Dutch organizations.]',
    icon: Building2,
  },
  {
    name: '[Name]',
    role: 'Director, Consulting Services',
    description:
      '[1-2 sentences on consulting expertise across BI, AI, digital transformation, and SI disciplines.]',
    icon: Briefcase,
  },
  {
    name: '[Name]',
    role: 'Director, Solutions & Technology',
    description:
      '[1-2 sentences on Dividos and Strategic Command Center implementation expertise and platform delivery experience.]',
    icon: Monitor,
  },
  {
    name: '[Name]',
    role: 'Director, Managed Services & Education',
    description:
      '[1-2 sentences on managed services leadership and strategic intelligence education programme development.]',
    icon: GraduationCap,
  },
]

export function NetherlandsLeadershipPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E78AA]/5 via-background to-background" />
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
                  <Users className="w-4 h-4 text-[#0E78AA]" />
                  <span>Leadership</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Experienced leadership advancing </span>
                  <span className="gradient-text">Dutch business transformation</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bravinci Netherlands&apos; leadership team combines deep knowledge of the Dutch market with international experience across strategic advisory, technology transformation, and organisational capability development. Our leaders have guided transformations for organisations throughout the Netherlands and Benelux region, delivering measurable results while building sustainable client capabilities that endure beyond initial engagement.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/netherlands/contact">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                    asChild
                  >
                    <Link href="/netherlands/about">About Bravinci Netherlands</Link>
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Users className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">4</p>
                      <p className="text-sm text-muted-foreground">Senior Leaders</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Target className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">4</p>
                      <p className="text-sm text-muted-foreground">Practice Areas</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Briefcase className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">Dutch</p>
                      <p className="text-sm text-muted-foreground">Market Expertise</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Building2 className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">Global</p>
                      <p className="text-sm text-muted-foreground">Network Access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Grid */}
        <section id="leadership-grid" data-section="leadership-grid" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Leadership Team</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {leaders.map((leader) => {
                const Icon = leader.icon
                return (
                  <div
                    key={leader.role}
                    className="group p-8 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <UserCircle2 className="w-9 h-9 text-[#0E78AA]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-[#0E78AA] transition-colors">
                          {leader.name}
                        </h3>
                        <p className="text-[#0E78AA] font-semibold text-sm">{leader.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {leader.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quote Block */}
        <section id="quote" data-section="quote" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl glass-card border border-[#0E78AA]/20">
              <div className="max-w-4xl mx-auto text-center">
                <Quote className="w-12 h-12 text-[#F7AE57] mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6">
                  &ldquo;Our mission is to equip Dutch organizations with the strategic intelligence and operational capabilities they need to lead in a continuously evolving European environment.&rdquo;
                </blockquote>
                <div className="w-16 h-1 gradient-bg mx-auto rounded-full mb-4" />
                <p className="text-muted-foreground font-medium">
                  Bravinci Netherlands Leadership Team
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Connect with Our Leadership Team
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Our leadership team is committed to understanding your organisation&apos;s challenges and delivering solutions that create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/netherlands/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
