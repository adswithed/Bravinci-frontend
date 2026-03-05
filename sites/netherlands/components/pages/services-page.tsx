/**
 * Netherlands Services Page
 *
 * Comprehensive listing of Bravinci Netherlands' service portfolio with links
 * to individual service pages.
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import Link from 'next/link'
import {
  Briefcase,
  Settings,
  GraduationCap,
  Users,
  ArrowRight,
  Award,
  Globe,
  TrendingUp,
  Compass,
  Shield,
  Target,
} from 'lucide-react'
import { cn } from '@/shared/lib/utils'

const services = [
  {
    icon: Briefcase,
    title: 'Consulting Services',
    description:
      'Strategic advisory and implementation expertise addressing the Netherlands&apos; most complex organisational challenges across Business Intelligence, Artificial Intelligence, Systems Integration, and Digital Transformation.',
    href: '/netherlands/services/consulting',
    color: '#0E78AA',
  },
  {
    icon: Settings,
    title: 'Managed Services',
    description:
      'Expert operational management of technology platforms, analytical environments, and business intelligence capabilities, maintaining performance and compliance as technology evolves.',
    href: '/netherlands/services/managed-services',
    color: '#F7AE57',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      'Embedding strategic intelligence capability within Netherlands organisations as a sustained competitive advantage through assessment, framework design, and capability development.',
    href: '/netherlands/services/education',
    color: '#0E78AA',
  },
  {
    icon: Users,
    title: 'Secondment',
    description:
      'Senior Bravinci Netherlands professionals embedded within your organisation through the Bravinci United model, operating as your team with full accountability.',
    href: '/netherlands/services/secondment',
    color: '#F7AE57',
  },
]

const differentiators = [
  {
    icon: Globe,
    title: 'Integrated Approach',
    description:
      'Strategy, technology, operations, and people capability delivered as a coherent programme rather than isolated workstreams, eliminating the misalignment common when organisations deploy multiple single-discipline providers.',
    color: '#0E78AA',
  },
  {
    icon: Shield,
    title: 'Netherlands Regulatory Expertise',
    description:
      'Deep understanding of Dutch regulatory frameworks, GDPR obligations, AFM oversight, EU AI Act requirements, and European compliance standards ensures every recommendation is practically implementable within the Netherlands context.',
    color: '#F7AE57',
  },
  {
    icon: Target,
    title: 'Outcome Accountability',
    description:
      'Every engagement is structured around defined outcomes, tracked against agreed performance indicators throughout delivery. Clients gain visibility into progress and value realisation from day one.',
    color: '#0E78AA',
  },
]

export function NetherlandsServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="hero"
          data-section="hero"
          className="py-20 md:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E78AA]/5 via-background to-background" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                'text-center max-w-4xl mx-auto space-y-6 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                <Compass className="w-4 h-4 text-[#0E78AA]" />
                <span>Our Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Comprehensive Services Driving </span>
                <span className="gradient-text">Dutch Business Transformation</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Bravinci Netherlands&apos; services span consulting, managed services,
                education, and secondment, providing coherent, outcome-driven programmes
                that generate compound value across multiple performance dimensions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Portfolio */}
        <section
          id="services-portfolio"
          data-section="services-portfolio"
          className="py-20 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our Service </span>
                <span className="gradient-text">Portfolio</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Four interconnected service disciplines designed for the Netherlands business landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group block"
                  >
                    <div className="h-full p-8 rounded-3xl glass-card hover-lift transition-all duration-500">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${service.color}10` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: service.color }} />
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
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
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Bravinci Netherlands */}
        <section
          id="differentiators"
          data-section="differentiators"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">The Bravinci Netherlands </span>
                <span className="gradient-text">Difference</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our integrated approach combines Netherlands expertise with global best practices
                to deliver compound value over time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {differentiators.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="text-center p-8 rounded-3xl glass-card"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      style={{ backgroundColor: `${item.color}10` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          data-section="cta"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Discuss Your Transformation Requirements
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you need strategic consulting, managed operations, capability building,
              or embedded expertise, let&apos;s discuss how our services can accelerate
              your most important objectives in the Netherlands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/netherlands/contact">
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
                <Link href="/netherlands/about">About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
