/**
 * Nigeria Leadership Page
 *
 * Experience-driven leadership advancing Nigerian business transformation.
 */

'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Users,
  ArrowRight,
  Briefcase,
  Landmark,
  Factory,
  Monitor,
} from 'lucide-react'

const leaders = [
  {
    name: 'Damilola Oke',
    role: 'Managing Partner | Country Director',
    icon: Briefcase,
    bio: 'Strategic leadership with 15+ years driving organizational transformation across Nigerian public and private sectors. Deep expertise in regulatory navigation and cross-sector solution delivery.',
    color: '#0E78AA',
  },
  {
    name: 'Daniel Olafimihan',
    role: 'Director, Enterprise Solutions',
    icon: Monitor,
    bio: 'Technology implementation leadership specializing in enterprise systems, digital transformation, and multi-location deployment across Nigeria\'s diverse business landscape.',
    color: '#F7AE57',
  },
  {
    name: 'Director, Public Sector Practice',
    role: 'Public Sector Practice Lead',
    icon: Landmark,
    bio: 'Government transformation and public sector modernization expertise. Specialized in federal ministry and state government service delivery improvement.',
    color: '#0E78AA',
  },
  {
    name: 'Oghosa Omorisiagbon',
    role: 'Director, Energy & Manufacturing',
    icon: Factory,
    bio: 'Sector practice leadership across oil and gas and manufacturing industries. Deep understanding of operational optimization and regulatory compliance requirements.',
    color: '#F7AE57',
  },
]

export function NigeriaLeadershipPage() {
  return (
    <>
      <MegaMenu />
      <main>
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0E78AA]/20" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[#0E78AA]/10 blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-[#F7AE57]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40">
            <FadeIn className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-sm font-medium text-white/80">
                <Users className="w-4 h-4 text-[#F7AE57]" />
                <span>Our Leadership</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Experience-Driven Leadership{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Advancing Nigerian Business Transformation
                </span>
              </h1>

              <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
                Our leadership team brings decades of combined expertise across strategy,
                technology, and sector-specific knowledge to drive meaningful transformation
                for Nigerian organizations.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Leadership Grid */}
        <section id="leadership-grid" data-section="leadership-grid" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Leadership </span>
                <span className="text-[#0E78AA]">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the leaders driving Bravinci Nigeria&apos;s mission forward.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {leaders.map((leader) => {
                const Icon = leader.icon
                return (
                  <StaggerItem key={leader.name}>
                    <div
                      className="group p-8 rounded-3xl glass-card hover-lift transition-all duration-500 border-l-4 h-full"
                      style={{ borderLeftColor: leader.color }}
                    >
                      <div className="flex items-start gap-6">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: `${leader.color}15` }}
                        >
                          <Icon className="w-8 h-8" style={{ color: leader.color }} />
                        </div>
                        <div className="space-y-3">
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-[#0E78AA] transition-colors">
                              {leader.name}
                            </h3>
                            <p className="text-sm font-medium" style={{ color: leader.color }}>
                              {leader.role}
                            </p>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {leader.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0E78AA]/90 to-slate-950" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Connect With Our Leadership
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Discover how our experienced leadership team can help drive transformation
                within your organisation. Reach out to start the conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent h-12 px-8"
                  asChild
                >
                  <Link href="/nigeria/about">Back to About</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
