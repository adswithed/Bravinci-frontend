/**
 * Netherlands Home Page
 *
 * Self-contained home page with exact content from the Netherlands HOME PAGE document.
 * Uses the same Spline 3D robot hero design as the country sites.
 */

'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { SplineScene } from '@/shared/components/ui/spline-scene'
import { Spotlight } from '@/shared/components/ui/spotlight'
import { Button } from '@/shared/components/ui/button'
import Link from 'next/link'
import gsap from 'gsap'
import { cn } from '@/shared/lib/utils'
import {
  ArrowRight,
  Play,
  Shield,
  Award,
  Users,
  Layers,
  Target,
  Globe,
  CheckCircle2,
  Building2,
  Landmark,
  Factory,
  Heart,
  GraduationCap,
  Truck,
} from 'lucide-react'

const rotatingWords = ['Intelligence', 'Transformation', 'Expertise']

const heroStats = [
  { icon: Shield, label: 'ISO 27001', value: 'Certified' },
  { icon: Award, label: 'Experience', value: '40+ Years' },
  { icon: Globe, label: 'Region', value: 'Benelux' },
]

const whyChooseUs = [
  {
    title: 'European Standards, Local Expertise',
    description: 'Our methodologies meet the highest European professional standards while reflecting deep familiarity with Dutch regulatory requirements, including GDPR obligations, AFM oversight frameworks, and Dutch Corporate Governance Code expectations. International quality, Netherlands-specific delivery.',
    icon: Shield,
    color: '#0E78AA',
  },
  {
    title: 'Integrated Approach',
    description: 'We address strategy, technology, and people capability within integrated engagements rather than isolated workstreams. This coherent approach eliminates the misalignment common when organisations deploy multiple single-discipline providers across complex transformation programmes.',
    icon: Layers,
    color: '#F7AE57',
  },
  {
    title: 'Measurable Impact',
    description: 'Every engagement is structured around defined outcomes, tracked against agreed performance indicators throughout delivery. Clients gain visibility into progress and value realisation from day one, supporting internal accountability and stakeholder confidence.',
    icon: Target,
    color: '#0E78AA',
  },
  {
    title: '40 Years of Intelligence',
    description: 'Bravinci\u2019s proprietary methodologies, developed and refined across hundreds of European and global engagements, represent institutional knowledge that most consulting providers cannot replicate. Clients access this accumulated strategic intelligence as a core component of every engagement.',
    icon: Award,
    color: '#F7AE57',
  },
]

const industries = [
  {
    title: 'Banking',
    description: 'Empowering financial institutions to modernise operations, strengthen regulatory compliance, and deliver seamless, secure customer experiences through intelligent digital transformation.',
    icon: Landmark,
    href: '/netherlands/industries/banking',
    color: '#0E78AA',
  },
  {
    title: 'Supply Chain & Logistics',
    description: 'Enabling end-to-end visibility, streamlined operations, and data-driven decision-making to optimise inventory, reduce costs, and deliver faster, more reliable supply chain performance through intelligent digital transformation.',
    icon: Truck,
    href: '/netherlands/industries/supply-chain',
    color: '#F7AE57',
  },
  {
    title: 'Manufacturing',
    description: 'Driving operational excellence through smart manufacturing solutions, supply chain intelligence, and predictive maintenance frameworks.',
    icon: Factory,
    href: '/netherlands/industries/manufacturing',
    color: '#0E78AA',
  },
  {
    title: 'Healthcare & Life Sciences',
    description: 'Transforming patient outcomes and operational efficiency through clinical intelligence, population health analytics, and research acceleration.',
    icon: Heart,
    href: '/netherlands/industries/healthcare',
    color: '#F7AE57',
  },
  {
    title: 'Education & Workforce Development',
    description: 'Empowering educational institutions and workforce agencies to align skills development with evolving economic demands.',
    icon: GraduationCap,
    href: '/netherlands/industries/education',
    color: '#0E78AA',
  },
]

export function NetherlandsHomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Typewriter state
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Typewriter effect
  useEffect(() => {
    const currentWord = rotatingWords[wordIndex]
    const typeSpeed = isDeleting ? 40 : 80
    const pauseAfterType = 2000
    const pauseAfterDelete = 300

    if (!isDeleting && displayText === currentWord) {
      // Word fully typed — pause then start deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseAfterType)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === '') {
      // Word fully deleted — move to next word
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % rotatingWords.length)
      const timeout = setTimeout(() => {}, pauseAfterDelete)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1)
      )
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex])

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  // Entrance animations
  useEffect(() => {
    setIsVisible(true)

    if (typeof window === 'undefined') return

    const timeline = gsap.timeline()

    timeline
      .from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      }, 0)
      .from(descRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      }, 0.2)
      .from(buttonsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      }, 0.4)
      .from(statsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      }, 0.6)
      .from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
      }, 0.3)

    gsap.to(imageRef.current, {
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <>
      <MegaMenu />
      <main>
        {/* Hero Section - Spline 3D Robot with Netherlands content */}
        <section
          ref={containerRef}
          id="hero"
          data-section="hero"
          className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 gradient-bg-subtle" />
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div
              className="absolute top-20 -right-20 w-96 h-96 rounded-full opacity-30 animate-blob"
              style={{ background: 'linear-gradient(135deg, rgba(14, 120, 170, 0.3), rgba(247, 174, 87, 0.2))' }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-20 animate-blob animation-delay-400"
              style={{ background: 'linear-gradient(135deg, rgba(247, 174, 87, 0.3), rgba(14, 120, 170, 0.2))' }}
            />
            <div
              className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-20 animate-blob animation-delay-800"
              style={{ background: 'linear-gradient(135deg, rgba(14, 120, 170, 0.2), rgba(247, 174, 87, 0.3))' }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#0E78AA] animate-pulse" />
                  <span className="gradient-text">Bravinci Netherlands</span>
                </div>

                <h1
                  ref={titleRef}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
                >
                  <span className="text-foreground block">Strategic</span>
                  <span className="block h-[1.2em] relative">
                    <span className="gradient-text">{displayText}</span>
                    <span
                      className={cn(
                        'inline-block w-[3px] h-[0.85em] ml-1 align-middle rounded-sm',
                        'bg-gradient-to-b from-[#0E78AA] to-[#F7AE57]',
                        showCursor ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </span>
                </h1>

                <p
                  ref={descRef}
                  className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
                >
                  Bravinci Netherlands brings 40 years of global strategic intelligence and
                  transformation expertise to one of Europe&apos;s most dynamic business
                  environments. We partner with Dutch and Benelux organisations to navigate
                  complexity, accelerate performance, and build lasting competitive advantage.
                </p>

                <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-2 h-12 px-8"
                    asChild
                  >
                    <Link href="/netherlands/contact">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA] hover:bg-[#0E78AA]/5 font-semibold gap-2 h-12 px-8 transition-all duration-300"
                    asChild
                  >
                    <Link href="/netherlands/about">
                      <Building2 className="w-4 h-4" />
                      Learn More
                    </Link>
                  </Button>
                </div>

                <div
                  ref={statsRef}
                  className="flex flex-wrap gap-6 pt-8 border-t border-border/50"
                >
                  {heroStats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-3 animate-fade-in"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="p-2 rounded-lg bg-[#0E78AA]/10">
                        <stat.icon className="w-5 h-5 text-[#0E78AA]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                ref={imageRef}
                className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/[0.96] rounded-3xl pointer-events-none" />
                <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="#0E78AA"
                />
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(14, 120, 170, 0.15), transparent, rgba(247, 174, 87, 0.1))',
                  }}
                />
                <div className="absolute inset-0 z-20">
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4 backdrop-blur-xl z-30 pointer-events-none">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm">Powered by</p>
                      <p className="text-white font-semibold">Advanced AI Technology</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-[#F7AE57] animate-pulse"
                          style={{ animationDelay: `${i * 200}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-32 right-20 w-3 h-3 rounded-full gradient-bg animate-float-slow shadow-lg opacity-60" />
          <div className="absolute bottom-32 left-20 w-2 h-2 rounded-full gradient-bg animate-float-slow animation-delay-400 shadow-lg opacity-60" />
          <div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-[#F7AE57] animate-float-slow animation-delay-800 shadow-lg opacity-60" />
        </section>

        {/* Section 1: Who We Are */}
        <section id="who-we-are" data-section="who-we-are" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                'max-w-4xl mx-auto transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4 text-[#0E78AA]" />
                  <span>Who We Are</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">The Dutch Practice of </span>
                  <span className="gradient-text">Bravinci Global</span>
                </h2>
              </div>

              <div className="p-8 rounded-3xl glass-card border-l-4 border-[#0E78AA] mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bravinci Netherlands is the Dutch practice of Bravinci Global, a specialist
                  advisory and technology firm with a four-decade track record of organisational
                  transformation. Operating from Beesd, we combine global strategic intelligence
                  with a deep understanding of Dutch regulatory frameworks, European market dynamics,
                  and the operational realities facing Netherlands-based organisations today.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-center">
                Our work spans advisory, technology implementation, managed services, and workforce
                capability, addressing the full spectrum of transformation challenges. We serve
                organisations across banking and financial services, manufacturing, supply chain
                and logistics, healthcare and life sciences, and education, delivering integrated
                solutions that generate compound value across multiple performance dimensions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Our Solutions */}
        <section id="solutions" data-section="solutions" className="py-20 md:py-32 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proprietary platforms delivering data sovereignty, strategic intelligence, and operational control.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/netherlands/solutions/dividos" className="group block">
                <div className="h-full p-8 rounded-3xl glass-card hover-lift transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Layers className="w-8 h-8 text-[#0E78AA]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                    Dividos
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Dividos is a powerful, next-generation data and AI platform that gives your
                    business full control over its data without the limits and high costs of
                    traditional hyperscalers.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E78AA] group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/netherlands/solutions/strategy-command-center" className="group block">
                <div className="h-full p-8 rounded-3xl glass-card hover-lift transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-[#F7AE57]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                    Strategic Command Centre
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Real-time intelligence dashboard that consolidates critical business signals,
                    enabling faster, more informed executive decision-making across your organisation.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#F7AE57] group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Why Organisations Choose Bravinci Netherlands */}
        <section id="why-choose-us" data-section="why-choose-us" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Organisations Choose </span>
                <span className="gradient-text">Bravinci Netherlands</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group p-8 rounded-3xl glass-card hover-lift transition-all duration-500"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${item.color}10` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Industries We Serve */}
        <section id="industries" data-section="industries" className="py-20 md:py-32 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Industries </span>
                <span className="gradient-text">We Serve</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our Netherlands practice serves organisations across the supply chain and
                logistics, banking and financial services, manufacturing, healthcare and life
                sciences, and education and workforce development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {industries.map((industry) => {
                const Icon = industry.icon
                return (
                  <Link
                    key={industry.title}
                    href={industry.href}
                    className="group block"
                  >
                    <div className="h-full p-6 rounded-2xl glass-card hover-lift transition-all duration-500">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${industry.color}10` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: industry.color }} />
                      </div>
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" data-section="cta" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5 animate-blob" />
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white/5 animate-blob animation-delay-400" />
            <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-white/5 animate-blob animation-delay-800" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Begin Your Transformation Journey
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your strategic objectives and how Bravinci Netherlands
              can help you achieve them.
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
                <Link href="/netherlands/about">About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
