'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  Handshake,
  Cloud,
  Database,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Target,
  Settings,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import Image from 'next/image'

const partners = [
  {
    name: 'Microsoft Azure',
    logo: '/partners/microsoft-azure.svg', // Placeholder
    description: 'Premier cloud infrastructure partner enabling scalable, secure deployment of enterprise intelligence solutions with global reach and regulatory compliance capabilities.',
    capabilities: [
      'Advanced AI and machine learning services',
      'Enterprise data platform and analytics',
      'Security and compliance frameworks',
      'Hybrid cloud integration',
    ],
    value: 'Access enterprise-grade cloud infrastructure with built-in intelligence services, ensuring your solutions scale efficiently while maintaining security, compliance, and performance standards required for critical business systems.',
    icon: Cloud,
    color: '#0E78AA',
  },
  {
    name: 'Amazon Web Services (AWS)',
    logo: '/partners/aws.svg', // Placeholder
    description: 'Strategic cloud platform partner providing flexible, high-performance infrastructure for data-intensive intelligence applications and global solution deployment.',
    capabilities: [
      'Scalable data lakes and analytics',
      'AI/ML model training and deployment',
      'Global infrastructure and edge computing',
      'Cost optimization and efficiency',
    ],
    value: 'Leverage AWS\'s extensive service portfolio and global infrastructure to build intelligence solutions that handle massive data volumes, deliver real-time insights, and adapt quickly to changing business requirements.',
    icon: Database,
    color: '#F7AE57',
  },
  {
    name: 'Odoo',
    logo: '/partners/odoo.svg', // Placeholder
    description: 'Enterprise resource planning partnership enabling integrated business management solutions with deep customization and intelligence layer integration capabilities.',
    capabilities: [
      'Unified business operations management',
      'Financial and inventory intelligence',
      'CRM and sales automation',
      'Supply chain optimization',
    ],
    value: 'Deploy flexible ERP foundations that integrate seamlessly with advanced analytics and intelligence layers, creating unified operational visibility and data-driven decision support across all business functions.',
    icon: Settings,
    color: '#0E78AA',
  },
  {
    name: 'Yellowfin',
    logo: '/partners/yellowfin.svg', // Placeholder
    description: 'Business intelligence platform partnership specializing in embedded analytics, automated insights, and collaborative decision-making environments for operational intelligence.',
    capabilities: [
      'Embedded analytics and dashboards',
      'Automated insight generation',
      'Collaborative analytics workflows',
      'Action-based intelligence',
    ],
    value: 'Transform raw data into actionable insights through intuitive visualizations and automated intelligence that democratizes analytics across your organization while maintaining governance and data quality.',
    icon: BarChart3,
    color: '#F7AE57',
  },
  {
    name: 'Exasol',
    logo: '/partners/exasol.svg', // Placeholder
    description: 'High-performance analytics database partnership enabling sub-second query response on massive datasets for real-time strategic intelligence and operational analytics.',
    capabilities: [
      'In-memory analytics processing',
      'Massive scale data warehousing',
      'Real-time insight generation',
      'Hybrid workload optimization',
    ],
    value: 'Achieve unprecedented query performance for complex analytics workloads, enabling real-time strategic intelligence that supports time-sensitive decisions and competitive responsiveness at enterprise scale.',
    icon: Zap,
    color: '#0E78AA',
  },
]

export function GlobalPartnersPage() {
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
                <Handshake className="w-4 h-4 text-[#0E78AA]" />
                <span>Partners & Ecosystem</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Strength through </span>
                <span className="gradient-text">strategic partnerships</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Bravinci's ecosystem approach means you benefit from world-class technology without the complexity of managing multiple vendor relationships. We've cultivated deep partnerships with leading platform providers, ensuring seamless integration and optimal performance across your intelligence architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {partners.map((partner, index) => {
                const Icon = partner.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={partner.name}
                    id={partner.name.toLowerCase().replace(/\s+/g, '-')}
                    className={cn(
                      'group p-8 md:p-10 rounded-3xl glass-card hover-lift transition-all duration-500',
                      'border border-[#0E78AA]/10 hover:border-[#0E78AA]/30'
                    )}
                  >
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      {/* Partner Info */}
                      <div className={cn(isEven ? 'lg:order-1' : 'lg:order-2')}>
                        {/* Logo/Icon */}
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={cn(
                              'w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform',
                              partner.color === '#0E78AA' ? 'bg-[#0E78AA]/10' : 'bg-[#F7AE57]/10'
                            )}
                          >
                            <Icon
                              className={cn(
                                'w-8 h-8',
                                partner.color === '#0E78AA' ? 'text-[#0E78AA]' : 'text-[#F7AE57]'
                              )}
                            />
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-[#0E78AA] transition-colors">
                            {partner.name}
                          </h2>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {partner.description}
                        </p>

                        {/* Capabilities */}
                        <div className="space-y-3">
                          <h3 className="font-semibold text-foreground mb-3">Key Capabilities:</h3>
                          {partner.capabilities.map((capability, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm">{capability}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Value Proposition */}
                      <div className={cn(isEven ? 'lg:order-2' : 'lg:order-1')}>
                        <div
                          className={cn(
                            'p-6 rounded-2xl h-full',
                            partner.color === '#0E78AA' ? 'bg-[#0E78AA]/5' : 'bg-[#F7AE57]/5'
                          )}
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <Target
                              className={cn(
                                'w-5 h-5',
                                partner.color === '#0E78AA' ? 'text-[#0E78AA]' : 'text-[#F7AE57]'
                              )}
                            />
                            <h3 className="font-bold text-foreground">Value to Clients</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{partner.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Ecosystem Benefits */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Ecosystem </span>
                <span className="gradient-text">Advantages</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our strategic partnerships deliver tangible benefits to your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl glass-card text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-[#0E78AA]" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground">
                  Built-in security and compliance frameworks from trusted global technology leaders.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-[#F7AE57]" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Proven Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Best-in-class performance and reliability backed by industry-leading SLAs.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-7 h-7 text-[#0E78AA]" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Single Point of Contact</h3>
                <p className="text-sm text-muted-foreground">
                  Simplified vendor management through Bravinci's integrated ecosystem approach.
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
              Leverage Our Partner Ecosystem
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Discover how Bravinci's strategic partnerships can accelerate your digital transformation and intelligence initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
