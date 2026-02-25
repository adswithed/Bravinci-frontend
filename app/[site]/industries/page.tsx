'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { GlobalSiteWrapper } from '@/components/global-site-wrapper'
import { Button } from '@/components/ui/button'
import {
  Building2,
  ArrowRight,
  Landmark,
  Banknote,
  Zap,
  Factory,
  Heart,
  GraduationCap,
  CheckCircle2,
  Globe,
  Shield,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const industries = [
  {
    id: 'public-sector',
    title: 'Public Sector',
    description: 'Helping government agencies and public institutions modernize service delivery, enhance transparency, optimize resource allocation, and build citizen trust through intelligent digital transformation and strategic planning frameworks.',
    icon: Landmark,
    color: '#0E78AA',
    capabilities: [
      'Government modernization',
      'Citizen service optimization',
      'Policy analytics',
      'Regulatory compliance'
    ]
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    description: 'Enabling banks, insurers, asset managers, and fintech companies to navigate regulatory complexity, manage risk, capitalize on digital innovation, and deliver superior customer experience in rapidly evolving markets.',
    icon: Banknote,
    color: '#F7AE57',
    capabilities: [
      'Risk management',
      'Regulatory compliance',
      'Digital banking',
      'Customer intelligence'
    ]
  },
  {
    id: 'energy-utilities',
    title: 'Energy & Utilities',
    description: 'Supporting sustainable energy transition, grid modernization, operational optimization, and strategic planning for utilities and energy companies navigating decarbonization, distributed generation, and regulatory transformation.',
    icon: Zap,
    color: '#0E78AA',
    capabilities: [
      'Grid modernization',
      'Energy transition',
      'Operational efficiency',
      'Sustainability analytics'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Driving operational excellence through smart manufacturing, supply chain intelligence, predictive maintenance, quality optimization, and strategic planning for manufacturers facing disruption and competitive pressure.',
    icon: Factory,
    color: '#F7AE57',
    capabilities: [
      'Smart manufacturing',
      'Supply chain optimization',
      'Predictive maintenance',
      'Quality management'
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    description: 'Transforming patient outcomes and operational efficiency through clinical intelligence, population health analytics, research acceleration, and regulatory compliance for healthcare providers, payers, and pharmaceutical companies.',
    icon: Heart,
    color: '#0E78AA',
    capabilities: [
      'Clinical intelligence',
      'Population health',
      'Research acceleration',
      'Compliance management'
    ]
  },
  {
    id: 'education',
    title: 'Education & Workforce',
    description: 'Empowering educational institutions, workforce agencies, and training providers to align skills development with evolving economic demands, optimize resource allocation, and improve learner outcomes through data-driven decision-making.',
    icon: GraduationCap,
    color: '#F7AE57',
    capabilities: [
      'Skills alignment',
      'Learner analytics',
      'Resource optimization',
      'Outcome measurement'
    ]
  }
]

const differentiators = [
  {
    title: 'Deep Domain Knowledge',
    description: 'Years of specialized work in your industry\'s unique regulatory and operational context.',
    icon: Building2
  },
  {
    title: 'Regulatory Expertise',
    description: 'Understanding of sector-specific compliance requirements and regulatory frameworks.',
    icon: Shield
  },
  {
    title: 'Global Experience',
    description: 'Insights from implementations across six continents with local expertise.',
    icon: Globe
  },
  {
    title: 'Measurable Impact',
    description: 'Track record of delivering tangible ROI and operational improvements.',
    icon: TrendingUp
  }
]

export default function IndustriesPage() {
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
            <div className="absolute inset-0 bg-[#0E78AA]/5" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div
              className={cn(
                'transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
                <Building2 className="w-4 h-4 text-[#0E78AA]" />
                <span>Industry Expertise</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Deep Sector Expertise Driving </span>
                <span className="gradient-text">Transformation Across Critical Industries</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Strategic intelligence requirements vary dramatically across sectors—regulatory frameworks,
                competitive dynamics, operational models, and stakeholder expectations create unique challenges
                that demand specialized expertise. Bravinci has invested years developing deep domain knowledge
                in six critical industries.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <div
                    key={industry.id}
                    className="group p-8 rounded-3xl glass-card hover-lift transition-all duration-500 border-t-4 flex flex-col"
                    style={{ borderTopColor: industry.color }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${industry.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: industry.color }} />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                      {industry.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                      {industry.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {industry.capabilities.map((capability, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: industry.color }} />
                          {capability}
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full font-semibold mt-auto"
                      style={{ backgroundColor: industry.color }}
                      asChild
                    >
                      <Link href={`/industries/${industry.id}`}>
                        Explore {industry.title}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Industry Expertise Matters */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Industry </span>
                <span className="gradient-text">Expertise Matters</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our sector-specific expertise enables us to deliver solutions that reflect real-world
                operational context, regulatory requirements, and best practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl glass-card text-center hover-lift transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#0E78AA]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let&apos;s Discuss Your Industry Challenges
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Our sector specialists understand your unique regulatory environment, competitive
              dynamics, and operational requirements. Let&apos;s explore how strategic intelligence
              can accelerate your transformation.
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
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
