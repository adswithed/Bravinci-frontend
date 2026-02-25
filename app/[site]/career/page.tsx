'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Users,
  Globe,
  Heart,
  Lightbulb,
  TrendingUp,
  Coffee,
  BookOpen,
  Award,
  MapPin,
  Clock
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const benefits = [
  {
    title: 'Flexible Working',
    description: 'Work from anywhere with our remote-first culture and flexible hours.',
    icon: Clock
  },
  {
    title: 'Continuous Learning',
    description: 'Access to training programs, masterclasses, and professional development.',
    icon: BookOpen
  },
  {
    title: 'Global Team',
    description: 'Collaborate with talented professionals from around the world.',
    icon: Globe
  },
  {
    title: 'Career Growth',
    description: 'Clear paths for advancement and leadership opportunities.',
    icon: TrendingUp
  },
  {
    title: 'Shared Ownership',
    description: 'Social enterprise model with profit-sharing and ownership opportunities.',
    icon: Heart
  },
  {
    title: 'Innovation Culture',
    description: 'Work on cutting-edge AI and intelligence solutions.',
    icon: Lightbulb
  }
]

const values = [
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do.'
  },
  {
    title: 'Innovation',
    description: 'We embrace new ideas and continuously improve our solutions.'
  },
  {
    title: 'Collaboration',
    description: 'We work together as one team to achieve shared goals.'
  },
  {
    title: 'Integrity',
    description: 'We act with honesty and transparency in all our interactions.'
  }
]

const openPositions = [
  {
    title: 'Senior Intelligence Analyst',
    department: 'Consulting',
    location: 'Netherlands / Remote',
    type: 'Full-time'
  },
  {
    title: 'Business Intelligence Developer',
    department: 'Technology',
    location: 'Netherlands / Remote',
    type: 'Full-time'
  },
  {
    title: 'Strategic Consultant',
    department: 'Consulting',
    location: 'Netherlands / Remote',
    type: 'Full-time'
  },
  {
    title: 'AI/ML Engineer',
    department: 'Technology',
    location: 'Netherlands / Remote',
    type: 'Full-time'
  }
]

export default function CareerPage() {
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
            <div className="absolute inset-0 bg-[#F7AE57]/5" />
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
                <Briefcase className="w-4 h-4 text-[#F7AE57]" />
                <span>Join Our Team</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Build the Future of </span>
                <span className="gradient-text">Intelligence</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Join a team of passionate professionals dedicated to transforming how
                organizations make strategic decisions. At Bravinci, you'll work on
                cutting-edge solutions that make a real impact.
              </p>

              <Button
                size="lg"
                className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#positions">
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Join </span>
                <span className="gradient-text">Bravinci?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer more than just a job - we offer a chance to be part of something meaningful.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#F7AE57]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#F7AE57] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide how we work and collaborate.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl glass-card text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[#0E78AA]" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Enterprise */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl glass-card border border-[#0E78AA]/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E78AA]/10 text-sm font-medium text-[#0E78AA] mb-4">
                    <Heart className="w-4 h-4" />
                    <span>Social Enterprise</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Shared Ownership Model
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Bravinci operates as a social enterprise with a shared ownership model.
                    This promotes profound commitment among our team members and enhances
                    the quality of our international collaborations. When you join Bravinci,
                    you become part of something bigger than a traditional employer-employee
                    relationship.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Profit-sharing opportunities',
                      'Ownership stake potential',
                      'Democratic decision-making',
                      'Long-term partnership focus'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center p-8 rounded-2xl bg-[#0E78AA]/5">
                  <Users className="w-20 h-20 text-[#0E78AA] mx-auto mb-4" />
                  <p className="text-4xl font-bold text-foreground mb-2">100+</p>
                  <p className="text-muted-foreground">Years Combined Experience</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Our team brings together decades of expertise in intelligence,
                    analytics, and strategic consulting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Open </span>
                <span className="gradient-text">Positions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore current opportunities to join our team.
              </p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {openPositions.map((position, index) => (
                <div
                  key={position.title}
                  className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500 flex flex-col md:flex-row md:items-center gap-4 md:justify-between"
                >
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-[#0E78AA] transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-[#0E78AA]/30 hover:border-[#0E78AA] hover:bg-[#0E78AA]/5"
                    asChild
                  >
                    <Link href="/contact">
                      Apply
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don't see a position that fits? We're always looking for talented individuals.
              </p>
              <Button
                variant="outline"
                className="border-[#0E78AA]/30 hover:border-[#0E78AA]"
                asChild
              >
                <Link href="/contact">
                  Send Open Application
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join our team and help shape the future of enterprise intelligence.
              We can't wait to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
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
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
