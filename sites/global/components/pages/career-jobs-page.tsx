'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Building2,
  Code,
  BarChart3,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const jobListings = [
  {
    title: 'Senior Strategy Consultant',
    location: 'Amsterdam / London / Hybrid',
    type: 'Full-time',
    department: 'Strategy & Advisory',
    icon: Briefcase,
    description:
      'Lead strategic intelligence engagements for clients across public and private sectors. Develop scenario models, strategic roadmaps, and decision frameworks that drive measurable business impact.',
  },
  {
    title: 'Data Scientist - AI/ML',
    location: 'Remote (Europe)',
    type: 'Full-time',
    department: 'Data & AI Enablement',
    icon: BarChart3,
    description:
      'Build and deploy machine learning models that solve critical business problems. Work with advanced analytics platforms and modern data infrastructure to deliver production-grade AI solutions.',
  },
  {
    title: 'Digital Transformation Consultant',
    location: 'Rotterdam / Remote',
    type: 'Full-time',
    department: 'Digital Transformation',
    icon: Code,
    description:
      'Guide organizations through complex technology transformations. Design solution architectures, manage implementation programs, and ensure sustainable adoption of digital capabilities.',
  },
]

export function GlobalCareerJobsPage() {
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
                'text-center max-w-4xl mx-auto space-y-6 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                <Briefcase className="w-4 h-4 text-[#0E78AA]" />
                <span>Open Positions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Join teams building </span>
                <span className="gradient-text">strategic intelligence solutions</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Current opportunities span strategy consulting, technology
                implementation, data science, and sector-specific expertise across
                our European and North American offices.
              </p>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {jobListings.map((job) => {
                const Icon = job.icon
                return (
                  <div
                    key={job.title}
                    className="group p-8 rounded-3xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-[#0E78AA]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{job.type}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4" />
                                <span>{job.department}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#0E78AA] to-[#0E78AA]/90 hover:from-[#0E78AA]/90 hover:to-[#0E78AA]/80 shrink-0"
                      >
                        View Role
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* No Role Found CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="p-8 md:p-12 rounded-3xl glass-card">
                <h2 className="text-3xl font-bold mb-4">
                  Don't see the right role?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Send us your CV and let us know what you're looking for. We're
                  always interested in connecting with talented professionals.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0E78AA] to-[#0E78AA]/90 hover:from-[#0E78AA]/90 hover:to-[#0E78AA]/80"
                  asChild
                >
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Learn More?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Explore our culture, values, and what makes Bravinci a great place
              to work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/career">
                  Life at Bravinci
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/career/culture">Our Culture & Values</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
