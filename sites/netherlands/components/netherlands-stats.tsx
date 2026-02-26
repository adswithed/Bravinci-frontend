'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { TrendingUp, MapPin, Users, Award } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'

const stats = [
  {
    value: 10,
    suffix: '+',
    label: 'Years in Netherlands',
    description: 'Delivering strategic intelligence solutions to the Dutch market',
    icon: Award,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Dutch Clients',
    description: 'Trusted partnerships across supply chain, banking, and public sectors',
    icon: Users,
  },
  {
    value: 20,
    suffix: 'M+',
    prefix: '€',
    label: 'Value Delivered',
    description: 'Measurable impact through data-driven transformation',
    icon: TrendingUp,
  },
  {
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Long-term partnerships with sustained engagement',
    icon: MapPin,
  },
]

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, startCounting])

  return count
}

function StatCard({
  stat,
  isVisible,
}: {
  stat: typeof stats[0] & { prefix?: string }
  isVisible: boolean
}) {
  const count = useCountUp(stat.value, 2000, isVisible)
  const Icon = stat.icon

  return (
    <div
      className={cn(
        'group relative p-8 rounded-2xl transition-all duration-500',
        'bg-white backdrop-blur-sm border border-gray-200 shadow-lg',
        'hover:shadow-xl hover:border-brand-primary/30 hover:scale-105'
      )}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-brand-primary" />
      </div>

      {/* Value */}
      <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">
        {stat.prefix && <span className="text-brand-secondary">{stat.prefix}</span>}
        {count}
        <span className="text-brand-secondary">{stat.suffix}</span>
      </div>

      {/* Label */}
      <div className="text-lg font-semibold text-gray-900 mb-2">
        {stat.label}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {stat.description}
      </p>

      {/* Decorative element */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  )
}

export function NetherlandsStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-brand-primary/5 animate-blob" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-brand-secondary/5 animate-blob animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-primary/5 animate-blob animation-delay-800" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(14,120,170,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,120,170,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-gray-700 mb-6">
            <TrendingUp className="w-4 h-4 text-brand-primary" />
            <span>Our Impact in the Netherlands</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proven Excellence in <span className="text-brand-primary">Dutch Market</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering strategic intelligence solutions that drive measurable transformation
            across the Netherlands business landscape.
          </p>
        </FadeIn>

        {/* Stats Grid */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatCard stat={stat} isVisible={isVisible} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom highlight */}
        <FadeIn delay={0.5} className="mt-16 text-center">
          <p className="text-gray-600 text-sm">
            Headquartered in <span className="text-brand-primary font-semibold">Beesd, Netherlands</span> serving clients across the Benelux
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
