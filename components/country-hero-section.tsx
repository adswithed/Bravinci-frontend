'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { SplineScene } from '@/components/ui/spline-scene'
import { Spotlight } from '@/components/ui/spotlight'
import { ArrowRight, Play, Shield, Award, Users } from 'lucide-react'
import gsap from 'gsap'
import Link from 'next/link'
import { useSite } from '@/lib/site-context'

const stats = [
  { icon: Shield, label: 'ISO 27001', value: 'Certified' },
  { icon: Award, label: 'Experience', value: '100+ Years' },
  { icon: Users, label: 'Enterprises', value: '500+' },
]

export function CountryHeroSection() {
  const { site } = useSite()
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

    // Floating animation for 3D scene
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
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 gradient-bg-subtle" />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />

        {/* Animated blobs */}
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
          {/* Left Content */}
          <div className="relative z-10 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#0E78AA] animate-pulse" />
              <span className="gradient-text">International Intelligence Solutions</span>
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
            >
              <span className="text-foreground">Use </span>
              <span className="gradient-text">Intelligence</span>
              <br />
              <span className="text-foreground">to Define Your </span>
              <span className="gradient-text-reverse">Future</span>
            </h1>

            {/* Description */}
            <p
              ref={descRef}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Transform your strategy with AI-powered intelligence solutions.
              We integrate internal performance metrics with external market analysis
              for comprehensive business insights that drive exceptional decision-making.
            </p>

            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-2 h-12 px-8"
                asChild
              >
                <Link href={`/${site?.slug || ''}/contact`}>
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA] hover:bg-[#0E78AA]/5 font-semibold gap-2 h-12 px-8 transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Stats */}
            <div
              ref={statsRef}
              className="flex flex-wrap gap-6 pt-8 border-t border-border/50"
            >
              {stats.map((stat, index) => (
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

          {/* Right 3D Scene */}
          <div
            ref={imageRef}
            className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden"
          >
            {/* Dark background for 3D scene */}
            <div className="absolute inset-0 bg-black/[0.96] rounded-3xl pointer-events-none" />

            {/* Spotlight effect */}
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="#0E78AA"
            />

            {/* Gradient border glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(14, 120, 170, 0.15), transparent, rgba(247, 174, 87, 0.1))',
              }}
            />

            {/* Spline 3D Scene - interactive */}
            <div className="absolute inset-0 z-20">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>

            {/* Decorative elements - pointer-events-none so it doesn't block interaction */}
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

      {/* Floating elements */}
      <div className="absolute top-32 right-20 w-3 h-3 rounded-full gradient-bg animate-float-slow shadow-lg opacity-60" />
      <div className="absolute bottom-32 left-20 w-2 h-2 rounded-full gradient-bg animate-float-slow animation-delay-400 shadow-lg opacity-60" />
      <div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-[#F7AE57] animate-float-slow animation-delay-800 shadow-lg opacity-60" />
    </section>
  )
}
