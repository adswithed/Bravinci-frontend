'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/shared/components/ui/button'
import RotatingEarth from '@/shared/components/ui/wireframe-dotted-globe'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import Link from 'next/link'

// Define locations outside component to prevent recreating on each render
const BRAVINCI_LOCATIONS = [
  { name: 'Netherlands (HQ)', lat: 51.9, lng: 5.2, isHQ: true, flag: '🇳🇱' },
  { name: 'Nigeria', lat: 6.5, lng: 3.4, flag: '🇳🇬' },
  { name: 'Suriname', lat: 5.8, lng: -55.2, flag: '🇸🇷' },
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTouchDevice, setIsTouchDevice] = useState(false)

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
      .from(globeRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: 'power3.out',
      }, 0.2)

    return () => {
      timeline.kill()
    }
  }, [])

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  // Handle mouse move for grid effect (desktop only)
  useEffect(() => {
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isTouchDevice])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] lg:h-screen lg:min-h-[700px] lg:max-h-[1000px] flex items-center overflow-hidden py-20 lg:py-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0E78AA]/20" />

        {/* Base grid pattern */}
        <div
          ref={gridRef}
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'linear-gradient(rgba(14,120,170,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,120,170,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Interactive grid glow following mouse (hidden on touch devices) */}
        {!isTouchDevice && (
          <>
            <div
              className="absolute pointer-events-none transition-opacity duration-300 hidden md:block"
              style={{
                left: mousePosition.x - 200,
                top: mousePosition.y - 200,
                width: 400,
                height: 400,
                background: `radial-gradient(circle, rgba(14,120,170,0.15) 0%, transparent 70%)`,
                opacity: mousePosition.x > 0 ? 1 : 0
              }}
            />

            {/* Highlighted grid lines around cursor */}
            <div
              className="absolute pointer-events-none hidden md:block"
              style={{
                left: mousePosition.x - 150,
                top: mousePosition.y - 150,
                width: 300,
                height: 300,
                backgroundImage: 'linear-gradient(rgba(14,120,170,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(14,120,170,0.6) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
                backgroundPosition: `${-mousePosition.x % 60}px ${-mousePosition.y % 60}px`,
                mask: 'radial-gradient(circle, black 0%, transparent 70%)',
                WebkitMask: 'radial-gradient(circle, black 0%, transparent 70%)',
                opacity: mousePosition.x > 0 ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          </>
        )}

        {/* Radial gradient for globe glow (smaller on mobile) */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#0E78AA]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#F7AE57]/5 blur-3xl hidden md:block" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Centered on mobile */}
          <div className="relative z-10 space-y-4 lg:space-y-6 text-center lg:text-left">
            {/* Title - Responsive sizing */}
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="text-[#0E78AA]">Intelligence</span>
              <span className="text-white">-driven</span>
              <br />
              <span className="text-white">transformation</span>
              <br />
              <span className="text-white">for </span>
              <span className="text-[#F7AE57]">tomorrow</span>
            </h1>

            {/* Description */}
            <p
              ref={descRef}
              className="text-base sm:text-lg text-white/70 max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              Bravinci partners with forward-thinking organizations to turn strategic
              intelligence into competitive advantage through advanced analytics,
              AI, and deep sector expertise.
            </p>

            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#0E78AA] hover:bg-[#0a5a80] text-white font-semibold shadow-lg shadow-[#0E78AA]/20 hover:shadow-xl hover:shadow-[#0E78AA]/30 transition-all duration-300 hover:scale-105 gap-2 h-11 px-6"
                asChild
              >
                <Link href="/about">
                  Explore Our Approach
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 hover:border-[#0E78AA] bg-white/5 hover:bg-[#0E78AA]/10 text-white font-semibold gap-2 h-11 px-6 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Globe - Hidden on mobile */}
          <div
            ref={globeRef}
            className="relative hidden lg:flex items-center justify-center lg:justify-end"
          >
            {/* Globe Container */}
            <div className="relative w-full max-w-[450px] lg:max-w-[500px] aspect-square">
              {/* Glow effect behind globe */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0E78AA]/20 to-transparent blur-2xl scale-110" />

              {/* Interactive Globe */}
              <RotatingEarth
                width={500}
                height={500}
                className="w-full h-full"
                primaryColor="#0E78AA"
                dotColor="#F7AE57"
                backgroundColor="transparent"
                locations={BRAVINCI_LOCATIONS}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles - Hidden on mobile */}
      <div className="absolute top-32 right-20 w-2 h-2 rounded-full bg-[#0E78AA] animate-float-slow shadow-lg shadow-[#0E78AA]/50 opacity-60 hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 rounded-full bg-[#F7AE57] animate-float-slow animation-delay-400 shadow-lg shadow-[#F7AE57]/50 opacity-60 hidden lg:block" />
      <div className="absolute top-1/2 right-10 w-1 h-1 rounded-full bg-white animate-float-slow animation-delay-800 shadow-lg opacity-40 hidden lg:block" />
    </section>
  )
}
