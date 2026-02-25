'use client'

import { useRef, useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Globe,
  Award,
  Lightbulb,
  Users,
  Target,
  CheckCircle2,
  Building2,
  MapPin,
  Calendar,
  Shield,
  ArrowRight,
  Quote
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const values = [
  {
    icon: Globe,
    title: '100+ Years Combined Experience',
    description: 'Cumulative expertise from our global network of strategic consultants and intelligence professionals delivering world-class solutions.',
  },
  {
    icon: Award,
    title: 'One-Stop Shop',
    description: 'Comprehensive solutions covering strategy, analytics, implementation, transformation, and education under one roof.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-First Approach',
    description: 'State-of-the-art governance combined with ready-made, business-centric solutions that deliver immediate value.',
  },
  {
    icon: Users,
    title: 'Social Enterprise Model',
    description: 'Shared ownership promoting profound commitment and enhanced quality in international collaborations.',
  },
]

const milestones = [
  {
    year: '2020',
    title: 'Founded in Beesd, Netherlands',
    description: 'Bravinci was established with a mission to democratize enterprise intelligence solutions.',
  },
  {
    year: '2021',
    title: 'SCIP ICoE Benelux Host',
    description: 'Became the official host of the Strategic Consortium of Intelligence Professionals in Benelux.',
  },
  {
    year: '2022',
    title: 'ISO 27001 Certification',
    description: 'Achieved ISO 27001 certification for information security management systems.',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded operations to serve clients across Europe, Africa, and the Americas.',
  },
  {
    year: '2024',
    title: 'Strategy Command Center Launch',
    description: 'Launched the revolutionary MI-7 Strategy Command Center platform.',
  },
]

const certifications = [
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'SCIP ICoE', description: 'Intelligence Center of Excellence' },
  { name: 'KvK', description: 'Chamber of Commerce: 77928822' },
]

export default function AboutPage() {
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
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E78AA]/5 via-background to-background" />
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
                  <Building2 className="w-4 h-4 text-[#0E78AA]" />
                  <span>About Bravinci</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">International Provider of </span>
                  <span className="gradient-text">Intelligence Solutions</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in November 2020 and headquartered in Beesd, Netherlands, Bravinci
                  delivers comprehensive Intelligence & BI services tailored to meet your
                  organization's specific strategic needs. We help enterprises transform data
                  into actionable insights that drive growth and competitive advantage.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                    asChild
                  >
                    <Link href="/services">Our Services</Link>
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Calendar className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">2020</p>
                      <p className="text-sm text-muted-foreground">Founded</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Users className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">100+</p>
                      <p className="text-sm text-muted-foreground">Years Experience</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Shield className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">ISO</p>
                      <p className="text-sm text-muted-foreground">27001 Certified</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Globe className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">24/7</p>
                      <p className="text-sm text-muted-foreground">Global Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl glass-card border-l-4 border-[#0E78AA]">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower organizations worldwide with strategic intelligence solutions that
                  transform data into competitive advantage. We believe that every organization,
                  regardless of size, deserves access to enterprise-grade intelligence capabilities
                  that drive informed decision-making and sustainable growth.
                </p>
              </div>

              <div className="p-8 rounded-3xl glass-card border-l-4 border-[#F7AE57]">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in democratizing enterprise intelligence, making
                  sophisticated analytical tools and strategic insights accessible to organizations
                  of all sizes. We envision a world where data-driven decision-making is the
                  standard, not the exception.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our Core </span>
                <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Bravinci.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#0E78AA]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/20 to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in Bravinci's growth story.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#0E78AA] hidden md:block" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={cn(
                      'relative flex flex-col md:flex-row items-center gap-8',
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    )}
                  >
                    <div className={cn('flex-1', index % 2 === 0 ? 'md:text-right' : 'md:text-left')}>
                      <div className="p-6 rounded-2xl glass-card inline-block">
                        <span className="text-[#0E78AA] font-bold text-lg">{milestone.year}</span>
                        <h3 className="font-bold text-foreground mt-1">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="w-4 h-4 rounded-full gradient-bg shadow-lg z-10 hidden md:block" />

                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SCIP Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl glass-card border border-[#0E78AA]/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E78AA]/10 text-sm font-medium text-[#0E78AA] mb-4">
                    <Award className="w-4 h-4" />
                    <span>SCIP ICoE Benelux</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Intelligence Center of Excellence
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Bravinci proudly hosts the SCIP Intelligence Center of Excellence for the
                    Benelux region. SCIP (Strategic Consortium of Intelligence Professionals)
                    is a global association with over 25,000 members across 120 countries,
                    serving as a dynamic hub where professionals collaborate on strategic and
                    competitive intelligence initiatives.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Access to global intelligence network',
                      'Expert-led workshops and masterclasses',
                      'Collaborative learning opportunities',
                      'Industry best practices and methodologies'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                    <p className="text-4xl font-bold text-[#0E78AA]">25K+</p>
                    <p className="text-sm text-muted-foreground mt-1">Global Members</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                    <p className="text-4xl font-bold text-[#F7AE57]">120+</p>
                    <p className="text-sm text-muted-foreground mt-1">Countries</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                    <p className="text-4xl font-bold text-[#F7AE57]">4</p>
                    <p className="text-sm text-muted-foreground mt-1">European ICoEs</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                    <p className="text-4xl font-bold text-[#0E78AA]">1</p>
                    <p className="text-sm text-muted-foreground mt-1">Benelux Host</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Headquarters</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl glass-card text-center">
                <MapPin className="w-8 h-8 text-[#0E78AA] mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Homburg 19-G<br />
                  4153 BS Beesd<br />
                  Netherlands
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card text-center">
                <Shield className="w-8 h-8 text-[#F7AE57] mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Certifications</h3>
                <div className="space-y-2 text-muted-foreground">
                  {certifications.map((cert) => (
                    <p key={cert.name}>
                      <span className="font-semibold text-foreground">{cert.name}</span>
                      <br />
                      <span className="text-sm">{cert.description}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl glass-card text-center">
                <Globe className="w-8 h-8 text-[#0E78AA] mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Global Reach</h3>
                <p className="text-muted-foreground">
                  Operating across Europe, Africa, and the Americas with 24/7 availability
                  and local expertise in multiple regions.
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of enterprises that trust Bravinci for their intelligence needs.
              Let's discuss how we can help you achieve your strategic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
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
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
