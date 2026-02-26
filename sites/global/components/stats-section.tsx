'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { TrendingUp, Users, Award, Building } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'

const stats = [
  {
    value: 15,
    suffix: '+',
    label: 'Years of Transformation',
    description: 'Driving strategic transformation across public and private sectors',
    icon: Award,
  },
  {
    value: 200,
    suffix: '+',
    label: 'Solutions Deployed',
    description: 'Intelligence solutions deployed across six continents',
    icon: Building,
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Sustained engagement partnerships with measurable impact',
    icon: Users,
  },
  {
    value: 50,
    suffix: 'M+',
    prefix: '€',
    label: 'Value Delivered',
    description: 'Measurable value through data-driven decision frameworks',
    icon: TrendingUp,
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
        'bg-white border border-gray-100 shadow-sm',
        'hover:shadow-lg hover:border-[#0E78AA]/20 hover:-translate-y-1'
      )}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#0E78AA]/5 mb-6 group-hover:bg-[#0E78AA]/10 transition-colors">
        <Icon className="w-6 h-6 text-[#0E78AA]" />
      </div>

      {/* Value */}
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {stat.prefix && <span className="text-[#F7AE57]">{stat.prefix}</span>}
        {count}
        <span className="text-[#F7AE57]">{stat.suffix}</span>
      </div>

      {/* Label */}
      <div className="text-lg font-semibold text-gray-800 mb-2">
        {stat.label}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {stat.description}
      </p>

      {/* Decorative hover line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  )
}

export function StatsSection() {
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
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(14,120,170,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,120,170,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E78AA]/5 border border-[#0E78AA]/10 text-sm font-medium text-[#0E78AA] mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Credibility Through <span className="text-[#0E78AA]">Impact</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proven track record delivering strategic intelligence solutions
            that drive measurable transformation across sectors and continents.
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
          <p className="text-gray-500 text-sm">
            Headquartered in <span className="text-gray-900 font-semibold">Beesd, Netherlands</span> with global operations
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
