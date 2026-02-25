'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { GlobalSiteWrapper } from '@/components/global-site-wrapper'
import { Button } from '@/components/ui/button'
import {
  Users,
  ArrowRight,
  CheckCircle2,
  Brain,
  Target,
  TrendingUp,
  BarChart3,
  Globe,
  Zap,
  Shield,
  Clock,
  Building,
  Briefcase,
  LineChart,
  Search,
  UserCheck
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const capabilities = [
  {
    title: 'AI-Powered Candidate Matching',
    description: 'Advanced algorithms that match candidates to roles based on skills, experience, and organizational fit.',
    icon: Brain
  },
  {
    title: 'Skills Assessment & Gap Analysis',
    description: 'Comprehensive evaluation of candidate capabilities with identification of development opportunities.',
    icon: Target
  },
  {
    title: 'Cultural Fit Evaluation',
    description: 'Predictive analysis of candidate alignment with organizational values and team dynamics.',
    icon: UserCheck
  },
  {
    title: 'Performance Forecasting',
    description: 'Success modeling that predicts candidate performance and career trajectory within your organization.',
    icon: LineChart
  },
  {
    title: 'Global Talent Market Intelligence',
    description: 'Real-time insights into talent availability, compensation benchmarks, and market trends.',
    icon: Globe
  },
  {
    title: 'Hiring Velocity Optimization',
    description: 'Streamlined workflows and automation that accelerate the entire recruitment process.',
    icon: Zap
  },
  {
    title: 'Retention Risk Assessment',
    description: 'Early identification of flight risks with actionable retention strategies.',
    icon: Shield
  },
  {
    title: 'Workforce Planning & Succession',
    description: 'Strategic modeling for future talent needs and leadership pipeline development.',
    icon: TrendingUp
  }
]

const targetUsers = [
  {
    title: 'Critical Skills Gaps',
    description: 'Organizations facing talent shortages in specialized areas',
    icon: Search
  },
  {
    title: 'High-Growth Companies',
    description: 'Rapidly scaling organizations needing efficient hiring',
    icon: TrendingUp
  },
  {
    title: 'Technology Companies',
    description: 'Tech firms requiring specialized technical expertise',
    icon: Brain
  },
  {
    title: 'Digital Transformation',
    description: 'Enterprises building new digital capabilities',
    icon: Zap
  },
  {
    title: 'Professional Services',
    description: 'Consulting and services firms growing their talent base',
    icon: Briefcase
  },
  {
    title: 'Enterprise Organizations',
    description: 'Large companies seeking workforce optimization',
    icon: Building
  }
]

const businessImpact = [
  {
    metric: '50%',
    label: 'Reduction in time-to-hire',
    description: 'Accelerated recruitment cycles'
  },
  {
    metric: '35%',
    label: 'Improvement in first-year retention',
    description: 'Better quality of hire'
  },
  {
    metric: 'Higher',
    label: 'Hiring manager satisfaction',
    description: 'Better candidate matching'
  }
]

const benefits = [
  'Better talent decisions through data-driven matching',
  'Reduced recruitment costs and agency fees',
  'Accelerated organizational capability development',
  'Comprehensive workforce analytics and insights',
  'Integration with existing HRIS and ATS systems',
  'Real-time dashboard for workforce trends'
]

export default function Data2HirePage() {
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
                  <span>Talent Intelligence</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text">Data2Hire</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed italic">
                  Empower HR with Strategic Workforce Analytics
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Data2Hire integrates data from HRIS, ATS, and external sources into a comprehensive
                  dataset. The platform&apos;s interactive dashboard provides real-time insights into
                  workforce trends and risk scores, allowing HR teams to monitor and adjust strategies effectively.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/contact">
                      Request Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                    asChild
                  >
                    <Link href="/contact">Learn More</Link>
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
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {businessImpact.map((item, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-[#0E78AA]/10 text-center">
                        <p className="text-2xl font-bold text-[#0E78AA]">{item.metric}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-[#0E78AA]/5 to-[#F7AE57]/5 border border-[#0E78AA]/20">
                    <div className="flex items-center gap-3 mb-2">
                      <BarChart3 className="w-5 h-5 text-[#0E78AA]" />
                      <span className="font-semibold text-foreground">Real-time Analytics</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Interactive dashboards with workforce trends and risk scoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Who It&apos;s </span>
                <span className="gradient-text">For</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Particularly valuable for technology companies, professional services firms,
                and organisations undergoing digital transformation requiring new capability development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetUsers.map((user, index) => {
                const Icon = user.icon
                return (
                  <div
                    key={user.title}
                    className="p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#0E78AA]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{user.title}</h3>
                    <p className="text-sm text-muted-foreground">{user.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key Capabilities & </span>
                <span className="gradient-text">Modules</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                AI-powered talent intelligence features that transform how you hire and retain talent.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon
                return (
                  <div
                    key={capability.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#0E78AA]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                          {capability.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Business Impact & </span>
                  <span className="gradient-text">Value Drivers</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Organizations using Data2Hire report significant improvements across the
                  entire talent acquisition and retention lifecycle.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {businessImpact.map((item, index) => (
                    <div key={index} className="p-6 rounded-2xl glass-card text-center">
                      <p className="text-3xl font-bold text-[#0E78AA]">{item.metric}</p>
                      <p className="text-sm font-medium text-foreground mt-1">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>

                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl glass-card border border-[#0E78AA]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-[#F7AE57]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">AI-Powered Intelligence</h3>
                    <p className="text-sm text-muted-foreground">Data-driven talent decisions</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The platform enables better talent decisions, reduces recruitment costs,
                  and accelerates organizational capability development through intelligent
                  matching and predictive analytics.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#0E78AA]/5 border border-[#0E78AA]/10">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-[#0E78AA]" />
                      <span>Faster time-to-hire with AI matching</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F7AE57]/5 border border-[#F7AE57]/10">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="w-4 h-4 text-[#F7AE57]" />
                      <span>Improved retention through predictive insights</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0E78AA]/5 border border-[#0E78AA]/10">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BarChart3 className="w-4 h-4 text-[#0E78AA]" />
                      <span>Strategic workforce planning capabilities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Request Demo
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              See how Data2Hire can transform your talent acquisition and workforce
              optimization strategy. Schedule a personalized demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
                  Request Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/solutions">View All Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
