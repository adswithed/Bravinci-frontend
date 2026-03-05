'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Building2,
  Send,
  FileText,
  Mail,
  Calendar,
  Users,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

export function NetherlandsCareerJobsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="jobs-hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E78AA]/5 via-background to-background" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                'max-w-3xl mx-auto text-center space-y-6 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                <Briefcase className="w-4 h-4 text-[#0E78AA]" />
                <span>Open Roles</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Join teams transforming </span>
                <span className="gradient-text">Dutch business operations</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Current opportunities span consulting, managed services, solutions delivery, and education from our Beesd headquarters.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="#jobs-openings">
                    View Openings
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                  asChild
                >
                  <Link href="/netherlands/career">Life at Bravinci</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section id="jobs-how-to-apply" data-section="how-to-apply" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl glass-card border border-[#0E78AA]/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E78AA]/10 text-sm font-medium text-[#0E78AA] mb-4">
                    <Send className="w-4 h-4" />
                    <span>How to Apply</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Application Process
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Submit your application to{' '}
                    <a
                      href="mailto:careers@bravinci.com"
                      className="text-[#0E78AA] font-semibold hover:underline"
                    >
                      careers@bravinci.com
                    </a>{' '}
                    with your CV, a brief cover letter describing your relevant experience, and your preferred start date. Please include the role title in your email subject line.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: FileText,
                      label: 'Your CV',
                      detail: 'Including relevant experience and qualifications',
                    },
                    {
                      icon: Mail,
                      label: 'Cover Letter',
                      detail: 'Brief description of your relevant experience',
                    },
                    {
                      icon: Calendar,
                      label: 'Preferred Start Date',
                      detail: 'Your earliest available start date',
                    },
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-[#0E78AA]/5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[#0E78AA]" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{item.label}</p>
                          <p className="text-sm text-muted-foreground">{item.detail}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section id="jobs-openings" data-section="openings" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Current </span>
                <span className="gradient-text">Openings</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore available positions at Bravinci Netherlands.
              </p>
            </div>

            <div className="space-y-8">
              <div className="p-8 md:p-10 rounded-3xl glass-card border border-[#0E78AA]/20">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Senior Consultant: Business Intelligence</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#0E78AA]" />
                        Beesd, Netherlands
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-[#F7AE57]" />
                        Consulting
                      </span>
                    </div>
                  </div>
                  <Button
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 shrink-0"
                    asChild
                  >
                    <a href="mailto:careers@bravinci.com">
                      Apply Now
                      <Send className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  You will lead client engagements across the BI practice, from diagnostic assessment through architecture design, implementation management, and capability transfer. You will work with Netherlands organisations across multiple sectors, bringing analytical expertise and client management capability to complex, multi-workstream engagements. The role requires deep BI technical knowledge, strong stakeholder management skills, and a genuine understanding of the Dutch data governance and regulatory environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Don&apos;t See the Right Role? */}
        <section id="jobs-speculative" data-section="speculative" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl glass-card border border-[#F7AE57]/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7AE57]/10 text-sm font-medium text-[#F7AE57] mb-4">
                    <Users className="w-4 h-4" />
                    <span>Speculative Applications</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Don&apos;t See the Right Role?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We welcome applications from exceptional professionals whose expertise aligns with Bravinci Netherlands&apos; practice areas, even when a specific vacancy is not currently advertised. Send your CV and a brief note on your background and interests to{' '}
                    <a
                      href="mailto:careers@bravinci.com"
                      className="text-[#0E78AA] font-semibold hover:underline"
                    >
                      careers@bravinci.com
                    </a>.
                  </p>
                  <Button
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="mailto:careers@bravinci.com">
                      Send Speculative Application
                      <Send className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>

                <div className="p-8 rounded-2xl glass-card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-[#F7AE57]" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Practice Areas</p>
                      <p className="text-sm text-muted-foreground">We&apos;re always looking for talent in these areas</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      'Strategic and competitive intelligence',
                      'Data science and analytics',
                      'Business transformation consulting',
                      'Technology solutions and implementation',
                      'Professional education and training',
                      'Managed services and operations',
                    ].map((area, i) => (
                      <div key={i} className="flex items-center gap-3 text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F7AE57]" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="jobs-cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have Questions About Working at Bravinci Netherlands?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to learn more about careers, culture, and current opportunities at Bravinci Netherlands.
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
                <Link href="/netherlands/career">Life at Bravinci</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
