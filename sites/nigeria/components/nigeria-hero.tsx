'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/shared/components/ui/button'
import { ArrowRight, Shield, Award, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

// ── Particles Canvas ──────────────────────────────────────────────────
interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

function ParticlesCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const rafRef = useRef<number>(0)

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 12000), 120)
    const colors = ['#0E78AA', '#F7AE57', '#008751', '#ffffff']
    const particles: Particle[] = []

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    return particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      particlesRef.current = initParticles(rect.width, rect.height)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    resize()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      ctx.clearRect(0, 0, w, h)

      const mouse = mouseRef.current
      const particles = particlesRef.current
      const connectionDistance = 120
      const mouseRadius = 150

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse repulsion
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius
          p.vx -= (dx / dist) * force * 0.02
          p.vy -= (dy / dist) * force * 0.02
        }

        // Update position
        p.x += p.vx
        p.y += p.vy

        // Damping
        p.vx *= 0.99
        p.vy *= 0.99

        // Wrap around edges
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const cdx = p.x - p2.x
          const cdy = p.y - p2.y
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy)

          if (cdist < connectionDistance) {
            const alpha = (1 - cdist / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = '#0E78AA'
            ctx.globalAlpha = alpha
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 w-full h-full', className)}
      style={{ pointerEvents: 'auto' }}
    />
  )
}

// ── Animated Beam ─────────────────────────────────────────────────────
function AnimatedBeam({ delay = 0, duration = 3, className }: { delay?: number; duration?: number; className?: string }) {
  return (
    <motion.div
      className={cn('absolute h-px bg-gradient-to-r from-transparent via-[#0E78AA]/60 to-transparent', className)}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: '200%', opacity: [0, 1, 1, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 2,
        ease: 'linear',
      }}
    />
  )
}

// ── Trust Stats ───────────────────────────────────────────────────────
const trustStats = [
  { icon: Award, label: 'Years Experience', value: '12+' },
  { icon: TrendingUp, label: 'Transformations', value: '150+' },
  { icon: Users, label: 'Client Satisfaction', value: '95%' },
  { icon: Shield, label: 'Value Delivered', value: '₦50B+' },
]

// ── Stagger animation config ──────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const

// ── Main Hero Component ───────────────────────────────────────────────
export function NigeriaHeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="nigeria-hero"
      data-section="nigeria-hero"
      className="relative min-h-[100svh] lg:h-screen lg:min-h-[700px] lg:max-h-[1100px] flex items-center overflow-hidden"
    >
      {/* ── Background Layers ── */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[#030712]" />

        {/* Aurora gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(14,120,170,0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(247,174,87,0.1) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, -40, 20, 0],
              y: [0, 30, -40, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(0,135,81,0.08) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
            animate={{
              x: [0, 30, -50, 0],
              y: [0, -20, 40, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(14,120,170,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14,120,170,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Animated beams */}
        <AnimatedBeam delay={0} duration={4} className="top-[20%] w-[60%]" />
        <AnimatedBeam delay={1.5} duration={3.5} className="top-[45%] w-[80%] via-[#F7AE57]/40" />
        <AnimatedBeam delay={3} duration={5} className="top-[70%] w-[50%] left-[20%]" />
        <AnimatedBeam delay={2} duration={3} className="top-[85%] w-[70%] via-[#008751]/30" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,18,0.4)_70%,rgba(3,7,18,0.8)_100%)]" />
      </div>

      {/* ── Interactive Particles ── */}
      {mounted && <ParticlesCanvas className="z-0" />}

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left pointer-events-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008751] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008751]" />
              </span>
              <span className="text-white/80">Bravinci Nigeria</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight"
            >
              <span className="text-white">Transforming Nigerian</span>
              <br />
              <span className="text-white">Organisations Through</span>
              <br />
              <span className="bg-gradient-to-r from-[#0E78AA] via-[#0E78AA] to-[#00b4d8] bg-clip-text text-transparent">
                Strategic Intelligence
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#F7AE57] to-[#ffd699] bg-clip-text text-transparent">
                and Innovation
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Bravinci Nigeria brings global expertise to Africa&apos;s largest economy,
              helping organisations navigate complexity and accelerate growth through
              strategic advisory, enterprise technology, and data-driven transformation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="relative group bg-[#0E78AA] hover:bg-[#0a5a80] text-white font-semibold shadow-lg shadow-[#0E78AA]/25 hover:shadow-xl hover:shadow-[#0E78AA]/40 transition-all duration-300 hover:scale-[1.02] gap-2 h-12 px-8 overflow-hidden"
                asChild
              >
                <Link href="/nigeria/solutions">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Our Solutions
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-white/15 hover:border-[#0E78AA]/50 bg-white/[0.03] hover:bg-[#0E78AA]/10 text-white font-semibold gap-2 h-12 px-8 transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <Link href="/nigeria/contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </motion.div>

            {/* Trust Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-white/[0.06] justify-center lg:justify-start"
            >
              {trustStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1, ease }}
                  className="flex items-center gap-3"
                >
                  <div className="p-1.5 rounded-md bg-white/[0.04] border border-white/[0.06]">
                    <stat.icon className="w-3.5 h-3.5 text-[#0E78AA]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{stat.value}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual — Futuristic orbital display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            className="relative hidden lg:flex items-center justify-center pointer-events-auto"
          >
            <div className="relative w-full max-w-[480px] aspect-square">
              {/* Pulsing glow backdrop */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(14,120,170,0.12) 0%, transparent 60%)',
                }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Orbital rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-[#0E78AA]/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[8%] rounded-full border border-[#F7AE57]/10"
                style={{ borderStyle: 'dashed' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[16%] rounded-full border border-[#0E78AA]/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Central hexagonal element */}
              <div className="absolute inset-[25%] rounded-full bg-gradient-to-br from-[#0E78AA]/10 via-transparent to-[#F7AE57]/5 backdrop-blur-sm border border-white/[0.08] flex items-center justify-center">
                <div className="text-center space-y-1">
                  <div className="text-5xl font-black bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                    NG
                  </div>
                  <div className="text-[10px] text-white/30 tracking-[0.25em] uppercase">
                    Strategic Intelligence
                  </div>
                </div>
              </div>

              {/* Orbiting nodes */}
              {[
                { label: 'Lagos', top: '2%', left: '50%', translate: '-50%', color: 'white' },
                { label: 'Abuja', top: '50%', left: '0%', translate: '0', color: 'white' },
                { label: 'Port Harcourt', top: '92%', left: '50%', translate: '-50%', color: 'white' },
              ].map((node, i) => (
                <motion.div
                  key={node.label}
                  className="absolute px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
                  style={{ top: node.top, left: node.left, transform: `translateX(${node.translate})` }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="text-xs text-white/50 font-medium">{node.label}</span>
                </motion.div>
              ))}

              {/* Capability nodes */}
              {[
                { label: 'ERP', top: '25%', right: '0%', bg: '#0E78AA' },
                { label: 'AI', top: '65%', right: '2%', bg: '#F7AE57' },
                { label: 'Data', top: '75%', left: '5%', bg: '#008751' },
              ].map((node, i) => (
                <motion.div
                  key={node.label}
                  className="absolute px-2.5 py-1 rounded-full backdrop-blur-sm"
                  style={{
                    top: node.top,
                    right: node.right,
                    left: node.left,
                    backgroundColor: `${node.bg}15`,
                    borderColor: `${node.bg}30`,
                    borderWidth: 1,
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, delay: i * 0.7 + 0.3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="text-xs font-semibold" style={{ color: node.bg }}>{node.label}</span>
                </motion.div>
              ))}

              {/* Subtle connection lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
                <line x1="50" y1="35" x2="85" y2="30" stroke="#0E78AA" strokeOpacity="0.1" strokeWidth="0.3" />
                <line x1="50" y1="35" x2="85" y2="65" stroke="#F7AE57" strokeOpacity="0.1" strokeWidth="0.3" />
                <line x1="50" y1="35" x2="15" y2="75" stroke="#008751" strokeOpacity="0.08" strokeWidth="0.3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent z-10 pointer-events-none" />
    </section>
  )
}
