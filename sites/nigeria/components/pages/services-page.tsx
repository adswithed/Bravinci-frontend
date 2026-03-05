'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Target,
  Monitor,
  Database,
  ArrowRight,
  Compass,
  Sparkles,
} from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Strategy & Advisory',
    description:
      'Navigate Nigeria\u2019s complex business environment with strategic frameworks transforming uncertainty into opportunity. Our advisory practice combines Nigerian market expertise with global strategic methodologies, delivering actionable intelligence for sustainable growth. We build decision frameworks, regulatory navigation roadmaps, and operational playbooks, becoming operational tools rather than theoretical documents.',
    href: '/nigeria/services/strategy-advisory',
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
  },
  {
    icon: Monitor,
    title: 'Digital Transformation',
    description:
      'Accelerate organisational evolution through integrated technology solutions, enhancing operational efficiency, improving stakeholder engagement, and creating lasting competitive advantage. We approach digital transformation as business transformation enabled by technology rather than technology projects seeking business justification.',
    href: '/nigeria/services/digital-transformation',
    color: '#F7AE57',
    accentBg: 'bg-[#F7AE57]/10',
  },
  {
    icon: Database,
    title: 'Data & AI Enablement',
    description:
      'Transform operational data into strategic intelligence, driving better decisions and measurable business outcomes. We build data and analytics capabilities addressing the complete intelligence lifecycle: consolidation from disparate sources, quality improvement, analytics development, visualisation for decision support, and progressive AI deployment.',
    href: '/nigeria/services/data-ai',
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
  },
]

export function NigeriaServicesPage() {
  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Dark Hero Section */}
        <section
          id="hero"
          data-section="hero"
          className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0E78AA]/20"
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 -z-0 opacity-[0.07]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </div>
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0E78AA]/10 blur-[120px] -z-0" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80">
                <Compass className="w-4 h-4 text-[#0E78AA]" />
                <span>Our Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Comprehensive advisory and implementation services driving{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Nigerian business transformation
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Bravinci Nigeria&apos;s service portfolio spans the complete transformation
                lifecycle from strategic planning and advisory through digital implementation
                and advanced analytics enablement.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Service Cards Section */}
        <section
          id="services-portfolio"
          data-section="services-portfolio"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/5 via-background to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our Service </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Portfolio</span>
              </h2>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <StaggerItem key={service.title}>
                    <Link
                      href={service.href}
                      className="group block h-full"
                    >
                      <div className="h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                        <div
                          className={cn(
                            'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300',
                            service.accentBg
                          )}
                        >
                          <Icon className="w-8 h-8" style={{ color: service.color }} />
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[#0E78AA] transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div
                          className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                          style={{ color: service.color }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          data-section="cta"
          className="relative py-24 overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E78AA] via-[#0E78AA]/90 to-[#0a5a80]" />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.07]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90">
                <Sparkles className="w-4 h-4" />
                <span>Get Started</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Transform?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Whether you need strategic direction, technology implementation, or data
                ecosystem transformation, let&apos;s discuss how our services can accelerate
                your most important objectives in Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                  asChild
                >
                  <Link href="/nigeria/contact">
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
                  <Link href="/nigeria/about">About Us</Link>
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
