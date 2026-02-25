'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Briefcase,
  GraduationCap,
  Settings,
  Users,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Target,
  TrendingUp,
  Brain,
  BookOpen,
  Cpu,
  BarChart3,
  Shield,
  Clock,
  Globe,
  Award
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const services = [
  {
    id: 'consulting',
    title: 'Strategic Consulting',
    description: 'Expert guidance to transform your strategic decision-making capabilities and drive competitive advantage.',
    icon: Briefcase,
    color: '#0E78AA',
    features: [
      {
        title: 'Strategic Intelligence Analytics',
        description: 'Identify key intelligence topics requiring attention with our Threat & Opportunity Radar and competitive landscape analysis.',
        icon: Target
      },
      {
        title: 'Sales Battle Cards',
        description: 'Equip your sales team with competitive insights and strategies to win more deals and optimize performance.',
        icon: TrendingUp
      },
      {
        title: 'Market Analysis',
        description: 'Comprehensive external market analysis integrated with internal performance metrics for 360-degree insights.',
        icon: BarChart3
      },
      {
        title: 'Transformation Advisory',
        description: 'Guide your organization through data-driven cultural transformation and strategic evolution.',
        icon: Lightbulb
      }
    ],
    benefits: [
      'Capitalize on market changes as they occur',
      'Continuous monitoring of competitive landscape',
      'Counter-measure development and tracking',
      'Executive-level strategic recommendations'
    ]
  },
  {
    id: 'education',
    title: 'Education & Training',
    description: 'Comprehensive learning programs to build intelligence capabilities across your organization.',
    icon: GraduationCap,
    color: '#F7AE57',
    features: [
      {
        title: 'Strategic Intelligence Masterclass',
        description: '2-day intensive SCIP-certified program covering 40+ analytical frameworks and methodologies.',
        icon: Award
      },
      {
        title: 'AI Application Workshops',
        description: 'Hands-on workshops to equip teams with AI knowledge and strategic planning insights.',
        icon: Brain
      },
      {
        title: 'BI Academy',
        description: 'Transform your organization into a data-literate entity with enhanced market responsiveness.',
        icon: BookOpen
      },
      {
        title: 'Executive Briefings',
        description: 'Tailored sessions for leadership teams on intelligence-driven decision making.',
        icon: Users
      }
    ],
    benefits: [
      'SCIP-certified programs',
      'Practical, hands-on learning approach',
      'Cross-sector peer learning opportunities',
      'Ongoing e-learning resources'
    ]
  },
  {
    id: 'managed-services',
    title: 'Managed Services',
    description: 'End-to-end intelligence operations managed by our expert team, so you can focus on strategy.',
    icon: Settings,
    color: '#0E78AA',
    features: [
      {
        title: 'BI Out-of-the-Box',
        description: 'Ready-to-deploy solutions tailored to your business needs with minimal setup overhead.',
        icon: Cpu
      },
      {
        title: 'Data Operations',
        description: 'Complete data management including integration, warehousing, and analytics operations.',
        icon: BarChart3
      },
      {
        title: '24/7 Support',
        description: 'Round-the-clock global support ensuring your intelligence systems are always operational.',
        icon: Clock
      },
      {
        title: 'Security & Compliance',
        description: 'ISO 27001 certified operations ensuring your data is protected and compliant.',
        icon: Shield
      }
    ],
    benefits: [
      'Rapid deployment with minimal overhead',
      'Dedicated expert team',
      'Scalable solutions that grow with you',
      'Predictable operational costs'
    ]
  },
  {
    id: 'secondment',
    title: 'Secondment Services',
    description: 'Access our network of intelligence professionals to augment your team capabilities.',
    icon: Users,
    color: '#F7AE57',
    features: [
      {
        title: 'Intelligence Analysts',
        description: 'Experienced professionals to support your competitive and market intelligence needs.',
        icon: Target
      },
      {
        title: 'BI Specialists',
        description: 'Technical experts in data analytics, visualization, and business intelligence platforms.',
        icon: BarChart3
      },
      {
        title: 'Strategy Consultants',
        description: 'Senior consultants to guide strategic initiatives and transformation programs.',
        icon: Briefcase
      },
      {
        title: 'Project Managers',
        description: 'Dedicated project managers to ensure successful delivery of intelligence initiatives.',
        icon: CheckCircle2
      }
    ],
    benefits: [
      'Flexible engagement models',
      'Pre-vetted expert professionals',
      'Quick onboarding process',
      'Knowledge transfer included'
    ]
  }
]

export default function ServicesPage() {
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

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div
              className={cn(
                'transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4 text-[#0E78AA]" />
                <span>Our Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Comprehensive </span>
                <span className="gradient-text">Intelligence Services</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                From strategic consulting to managed operations, we offer a complete suite of
                intelligence services designed to transform your organization's decision-making
                capabilities and drive competitive advantage.
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
                'py-20 relative overflow-hidden',
                serviceIndex % 2 === 1 && 'bg-muted/30'
              )}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left Content */}
                  <div className={serviceIndex % 2 === 1 ? 'lg:order-2' : ''}>
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <ServiceIcon className="w-8 h-8" style={{ color: service.color }} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      <span className="text-foreground">{service.title.split(' ')[0]} </span>
                      <span className="gradient-text">{service.title.split(' ').slice(1).join(' ')}</span>
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <h3 className="font-semibold text-foreground">Key Benefits:</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: service.color }} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      size="lg"
                      className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <Link href="/contact">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  {/* Right Content - Features Grid */}
                  <div className={cn('grid sm:grid-cols-2 gap-4', serviceIndex % 2 === 1 ? 'lg:order-1' : '')}>
                    {service.features.map((feature, i) => {
                      const FeatureIcon = feature.icon
                      return (
                        <div
                          key={feature.title}
                          className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: `${service.color}15` }}
                          >
                            <FeatureIcon className="w-6 h-6" style={{ color: service.color }} />
                          </div>
                          <h4 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      )
                    })}
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
                <span className="text-foreground">Why Choose </span>
                <span className="gradient-text">Bravinci?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our unique approach and expertise set us apart in the intelligence solutions market.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-3xl glass-card">
                <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[#0E78AA]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">100+ Years Experience</h3>
                <p className="text-muted-foreground">
                  Combined expertise from our global network of strategic consultants and intelligence professionals.
                </p>
              </div>

              <div className="text-center p-8 rounded-3xl glass-card">
                <div className="w-16 h-16 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-[#F7AE57]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Global Reach</h3>
                <p className="text-muted-foreground">
                  24/7 availability with local expertise across Europe, Africa, and the Americas.
                </p>
              </div>

              <div className="text-center p-8 rounded-3xl glass-card">
                <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-[#0E78AA]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">ISO 27001 Certified</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade security and compliance for your sensitive business intelligence.
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your organization's
              intelligence capabilities and drive strategic success.
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
                <Link href="/solutions">View Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
