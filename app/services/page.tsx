'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { GlobalSiteWrapper } from '@/components/global-site-wrapper'
import { Button } from '@/components/ui/button'
import {
  Compass,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle2,
  Target,
  TrendingUp,
  Brain,
  BarChart3,
  Shield,
  Clock,
  Globe,
  Award,
  Zap,
  LineChart,
  Users,
  Workflow,
  Cloud,
  Layers,
  Sparkles,
  Settings,
  FileSearch,
  GitBranch
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const services = [
  {
    id: 'strategy',
    title: 'Strategy & Advisory',
    heroText: 'Strategic intelligence that illuminates the path forward',
    description: 'Navigate organizational complexity with strategic intelligence frameworks that illuminate opportunity, quantify risk, and accelerate decision-making. Our advisory services combine deep sector expertise with analytical rigor to deliver actionable strategic direction.',
    problemStatement: 'Organizations face unprecedented complexity—regulatory volatility, technological disruption, competitive intensity, and stakeholder demands converge to create strategic uncertainty. Traditional planning approaches struggle to address multi-dimensional challenges that require simultaneous consideration of operational, financial, technological, and market dynamics.',
    solution: 'Our strategy and advisory practice combines strategic foresight with analytical rigor to deliver intelligence that matters. We don\'t produce shelf-ware strategies or generic recommendations. Instead, we build decision frameworks, scenario models, and strategic playbooks that become operational tools for navigating complexity and capturing opportunity.',
    icon: Compass,
    color: '#0E78AA',
    capabilities: [
      { title: 'Strategic Planning & Scenario Modeling', icon: Target },
      { title: 'Market Intelligence & Competitive Analysis', icon: LineChart },
      { title: 'Digital Strategy & Transformation Roadmapping', icon: GitBranch },
      { title: 'Operating Model Design & Optimization', icon: Settings },
      { title: 'Risk Assessment & Mitigation Planning', icon: Shield },
      { title: 'Strategic Due Diligence & M&A Support', icon: FileSearch },
      { title: 'Executive Advisory & Decision Support', icon: Users },
      { title: 'Change Leadership & Transformation Management', icon: Workflow },
    ],
    outcomes: [
      '50% reduction in strategic planning cycles',
      '40% improvement in forecast accuracy',
      'Significantly higher stakeholder alignment',
      'Frameworks for navigating uncertainty',
    ],
    ctaText: 'Discuss Your Strategic Challenges'
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    heroText: 'Transformation that delivers measurable business impact',
    description: 'Accelerate digital evolution through integrated technology solutions that enhance operational efficiency, improve customer experience, and create sustainable competitive advantage. We manage transformation complexity so you can focus on business outcomes.',
    problemStatement: 'Digital transformation has become a strategic imperative, yet most initiatives fail to deliver expected value. Organizations struggle with technology selection, integration complexity, change resistance, and unclear ROI. The challenge isn\'t technology availability—it\'s architecting transformation that aligns technical capabilities with business objectives while managing risk and ensuring sustainable adoption.',
    solution: 'We approach digital transformation as business transformation enabled by technology, not technology projects with business implications. Our methodology focuses on outcome definition, solution architecture, stakeholder engagement, and capability building to ensure transformations stick and deliver compound value over time.',
    icon: Cpu,
    color: '#F7AE57',
    capabilities: [
      { title: 'Digital Vision & Roadmap Development', icon: Target },
      { title: 'Enterprise Architecture & Platform Selection', icon: Layers },
      { title: 'Cloud Migration & Modernization', icon: Cloud },
      { title: 'Business Process Optimization & Automation', icon: Workflow },
      { title: 'Customer Experience Transformation', icon: Users },
      { title: 'Digital Product & Service Design', icon: Sparkles },
      { title: 'Integration Architecture & API Strategy', icon: GitBranch },
      { title: 'Change Management & Adoption Enablement', icon: TrendingUp },
    ],
    outcomes: [
      '3x ROI within 18 months',
      '60% reduction in manual processes',
      'Significantly improved customer satisfaction',
      'Faster time-to-value with lower risk',
    ],
    ctaText: 'Explore Transformation Possibilities'
  },
  {
    id: 'data-ai',
    title: 'Data & AI Enablement',
    heroText: 'Transform data assets into decision advantage',
    description: 'Unlock trapped value in your data ecosystem through advanced analytics, artificial intelligence, and intelligent automation. We build intelligence architectures that turn information assets into decision advantage and measurable business impact.',
    problemStatement: 'Organizations accumulate vast data volumes but struggle to extract strategic value. Data remains siloed across systems, analytics capabilities are fragmented, and AI initiatives fail to move beyond pilot projects. The result is untapped intelligence potential—strategic insights remain hidden while competitors capitalize on data-driven decision-making and operational optimization.',
    solution: 'We build intelligence architectures that turn data chaos into strategic clarity. Our approach addresses the complete data lifecycle—from governance and integration to advanced analytics and AI deployment—ensuring your data ecosystem becomes a sustainable competitive advantage rather than a technical liability.',
    icon: Database,
    color: '#0E78AA',
    capabilities: [
      { title: 'Data Strategy & Governance Frameworks', icon: Shield },
      { title: 'Enterprise Data Architecture & Integration', icon: Layers },
      { title: 'Advanced Analytics & Visualization', icon: BarChart3 },
      { title: 'Artificial Intelligence & Machine Learning', icon: Brain },
      { title: 'Predictive Modeling & Forecasting', icon: LineChart },
      { title: 'Natural Language Processing & Automation', icon: Sparkles },
      { title: 'Real-time Analytics & Operational Intelligence', icon: Zap },
      { title: 'Data Quality & Master Data Management', icon: Settings },
    ],
    outcomes: [
      '70% reduction in report generation time',
      '40% improvement in forecast precision',
      '5-15% revenue opportunity identification',
      'Sustainable competitive advantage from data',
    ],
    ctaText: 'Unlock Your Data\'s Potential'
  }
]

export default function ServicesPage() {
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
                <Compass className="w-4 h-4 text-[#0E78AA]" />
                <span>Our Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Strategic Intelligence Services That </span>
                <span className="gradient-text">Drive Measurable Transformation</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Bravinci&apos;s service portfolio spans the complete intelligence lifecycle—from strategic
                planning and advisory to digital transformation and advanced analytics enablement.
                Each service is designed to address critical organizational challenges while building
                sustainable internal capability.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className="px-4 py-2 rounded-full glass-card text-sm font-medium hover:bg-foreground/5 transition-colors"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((service, serviceIndex) => {
          const ServiceIcon = service.icon
          return (
            <section
              key={service.id}
              id={service.id}
              className={cn(
                'py-20 md:py-28 relative overflow-hidden',
                serviceIndex % 2 === 1 && 'bg-muted/30'
              )}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Service Header */}
                <div className="text-center mb-16">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <ServiceIcon className="w-10 h-10" style={{ color: service.color }} />
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="text-foreground">{service.title.split(' ')[0]} </span>
                    <span style={{ color: service.color }}>{service.title.split(' ').slice(1).join(' ')}</span>
                  </h2>

                  <p className="text-xl text-muted-foreground font-medium italic max-w-2xl mx-auto">
                    {service.heroText}
                  </p>
                </div>

                {/* Problem & Solution */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                  <div className="p-8 rounded-2xl glass-card">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <Target className="w-5 h-5" style={{ color: service.color }} />
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.problemStatement}
                    </p>
                  </div>

                  <div className="p-8 rounded-2xl border-2" style={{ borderColor: `${service.color}30`, backgroundColor: `${service.color}05` }}>
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <Sparkles className="w-5 h-5" style={{ color: service.color }} />
                      Our Approach
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.solution}
                    </p>
                  </div>
                </div>

                {/* Capabilities Grid */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-center mb-8">
                    <span className="text-foreground">Capabilities & </span>
                    <span style={{ color: service.color }}>Offerings</span>
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {service.capabilities.map((capability, i) => {
                      const CapIcon = capability.icon
                      return (
                        <div
                          key={capability.title}
                          className="group p-5 rounded-xl glass-card hover:scale-105 transition-all duration-300"
                        >
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: `${service.color}15` }}
                          >
                            <CapIcon className="w-5 h-5" style={{ color: service.color }} />
                          </div>
                          <h4 className="font-semibold text-sm text-foreground group-hover:text-[#0E78AA] transition-colors">
                            {capability.title}
                          </h4>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">
                      <span className="text-foreground">Measurable </span>
                      <span style={{ color: service.color }}>Outcomes</span>
                    </h3>
                    <ul className="space-y-4">
                      {service.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" style={{ color: service.color }} />
                          <span className="text-lg text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 rounded-2xl text-white" style={{ backgroundColor: service.color }}>
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-white/80 mb-6">
                      {service.description}
                    </p>
                    <Button
                      size="lg"
                      className="w-full bg-white hover:bg-white/90 font-semibold shadow-lg"
                      style={{ color: service.color }}
                      asChild
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        {service.ctaText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        {/* Why Choose Us */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-muted/10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">The Bravinci </span>
                <span className="gradient-text">Difference</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our integrated approach ensures cohesive solutions that deliver compound value over time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-3xl glass-card">
                <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[#0E78AA]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">15+ Years Experience</h3>
                <p className="text-muted-foreground">
                  Driving strategic transformation across six continents with sustained partnerships and measurable outcomes.
                </p>
              </div>

              <div className="text-center p-8 rounded-3xl glass-card">
                <div className="w-16 h-16 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-[#F7AE57]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Ecosystem Partners</h3>
                <p className="text-muted-foreground">
                  Strategic alliances with Microsoft, AWS, Odoo, Yellowfin, and Exasol ensure best-in-class technology.
                </p>
              </div>

              <div className="text-center p-8 rounded-3xl glass-card">
                <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-[#0E78AA]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">98% Client Satisfaction</h3>
                <p className="text-muted-foreground">
                  Our partnership model emphasizes knowledge transfer and sustainable capability building.
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
              Ready to Transform Intelligence into Action?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you need strategic direction, technology implementation, or data ecosystem
              transformation, let&apos;s discuss how our services can accelerate your most important objectives.
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
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
