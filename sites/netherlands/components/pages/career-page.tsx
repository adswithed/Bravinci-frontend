'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  ArrowRight,
  Quote,
  Briefcase,
  MapPin,
  DollarSign,
  Scale,
  TrendingUp,
  Target,
  Brain,
  BarChart3,
  Handshake,
  Sprout,
  Puzzle,
  Users,
  BookOpen,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const cultureHighlights = [
  {
    icon: Target,
    title: 'Significant Challenges',
    description:
      'Our professionals work on projects that matter -- strategic transformations, competitive intelligence programmes, and technology implementations that directly influence how organisations compete and grow. Every engagement presents genuine complexity that requires creative, rigorous thinking.',
  },
  {
    icon: Brain,
    title: 'Technical and Analytical Excellence',
    description:
      'We maintain exceptionally high standards for analytical work. Our teams use advanced methodologies, proprietary platforms, and structured frameworks that ensure the quality of our output consistently exceeds client expectations. Excellence is not aspirational here; it is the baseline.',
  },
  {
    icon: BarChart3,
    title: 'Measurable Impact',
    description:
      'Bravinci Netherlands professionals see the direct results of their work. Our consulting engagements, managed services, and solution deployments are designed to produce quantifiable improvements in client performance. The connection between effort and outcome is clear and motivating.',
  },
  {
    icon: Handshake,
    title: 'Collaborative Environment',
    description:
      'Our teams operate with a flat, collaborative structure that values contribution over hierarchy. Knowledge sharing is embedded in our culture, with regular practice-area reviews, cross-functional project teams, and an open-door approach to mentorship and professional support.',
  },
  {
    icon: Sprout,
    title: 'Professional Growth',
    description:
      'We invest substantially in the development of our people. This includes access to SCIP certification pathways, internal training programmes, client-facing leadership opportunities, and the chance to contribute to Bravinci Global initiatives that expand professional horizons beyond the Dutch market.',
  },
]

const testimonials = [
  {
    quote:
      'Working at Bravinci Netherlands means engaging with clients who are genuinely grappling with strategic challenges of real consequence, and having the methodology, tools, and team support to make a meaningful difference. The access to Bravinci Global\u0027s knowledge base means you\u0027re never working without the best available intelligence.',
    name: 'Senior Consultant',
    location: 'Amsterdam',
  },
  {
    quote:
      'The quality of colleagues here is exceptional, people who are serious about their craft and committed to client outcomes. The integration between technical and advisory expertise within the same practice creates a working environment that I haven\u0027t found elsewhere.',
    name: 'Data Intelligence Lead',
    location: 'Rotterdam',
  },
]

const workingAtBravinci = [
  {
    icon: MapPin,
    title: 'Office Locations',
    description:
      'Our headquarters in Beesd, Gelderland, provides a professional and well-connected base, with client engagements across the Netherlands and the wider Benelux region. Depending on the role, there are opportunities for hybrid and flexible working arrangements.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description:
      'We offer market-competitive salaries, performance-based incentives, and a comprehensive benefits package that reflects the calibre of professionals we seek to attract and retain.',
  },
  {
    icon: Scale,
    title: 'Work-Life Balance',
    description:
      'While our work is demanding, we recognise the importance of sustainability. Bravinci Netherlands supports reasonable working hours, generous leave policies, and a culture that respects personal commitments.',
  },
  {
    icon: TrendingUp,
    title: 'Career Development',
    description:
      'Structured career pathways, regular performance reviews, and access to Bravinci Global opportunities ensure that your career trajectory at Bravinci Netherlands is clear, supported, and aligned with your professional ambitions.',
  },
]

const whoThrives = [
  {
    icon: Puzzle,
    title: 'Problem Solvers',
    description:
      'You enjoy tackling complex, ambiguous challenges and developing structured, evidence-based solutions. You are comfortable with uncertainty and energised by the process of turning complexity into clarity.',
  },
  {
    icon: Users,
    title: 'Collaborative Builders',
    description:
      'You thrive in team environments where shared success matters more than individual recognition. You contribute openly, support colleagues generously, and believe that the best outcomes emerge from collective effort.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learners',
    description:
      'You are intellectually curious, committed to staying current in your field, and eager to expand your expertise into adjacent domains. You see every project as an opportunity to learn something new.',
  },
]

export function NetherlandsCareerPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="career-hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
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
                <span>Life at Bravinci</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Build transformative solutions for the </span>
                <span className="gradient-text">Netherlands&apos; leading organisations</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Bravinci Netherlands attracts professionals seeking meaningful, intellectually demanding work at the intersection of strategy, technology, and organisational transformation. Our Beesd-based team brings together advisors, technologists, data specialists, and transformation leaders united by a commitment to delivering measurable client outcomes and building genuine expertise in a complex, rapidly evolving environment.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/netherlands/career/jobs">
                    Explore Open Positions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                  asChild
                >
                  <Link href="/netherlands/about">About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Highlights */}
        <section id="career-culture" data-section="culture" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Culture </span>
                <span className="gradient-text">Highlights</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                What makes working at Bravinci Netherlands a uniquely rewarding professional experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cultureHighlights.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group p-8 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#0E78AA]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="career-testimonials" data-section="testimonials" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">What Team </span>
                <span className="gradient-text">Members Say</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear directly from the professionals who make Bravinci Netherlands exceptional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 rounded-3xl glass-card border border-[#0E78AA]/20 relative"
                >
                  <Quote className="w-10 h-10 text-[#F7AE57]/30 absolute top-6 right-6" />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Working at Bravinci Netherlands */}
        <section id="career-working" data-section="working" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Working at </span>
                <span className="gradient-text">Bravinci Netherlands</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide the environment, benefits, and support our professionals need to thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {workingAtBravinci.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group p-8 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#F7AE57]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#F7AE57] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Who Thrives */}
        <section id="career-who-thrives" data-section="who-thrives" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Who </span>
                <span className="gradient-text">Thrives Here</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Bravinci Netherlands is the right environment for professionals who share these characteristics.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {whoThrives.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group p-8 rounded-2xl glass-card border-t-4 border-[#0E78AA] hover-lift transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#0E78AA]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="career-cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Do the Most Impactful Work of Your Career?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Explore current openings and discover where your expertise can make a real difference at Bravinci Netherlands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/netherlands/career/jobs">
                  Explore Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/netherlands/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
