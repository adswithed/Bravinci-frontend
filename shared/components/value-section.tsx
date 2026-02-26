'use client'

import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Zap, Target, AlertTriangle, Rocket, Brain, ArrowRight } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/components/ui/button'

const benefits = [
  {
    id: 1,
    title: 'Customer Success',
    description: 'Predict customer needs and deliver exceptional experiences that drive loyalty, retention, and sustainable growth.',
    icon: Target,
    color: '#0E78AA',
  },
  {
    id: 2,
    title: 'Operational Excellence',
    description: 'Streamline operations and eliminate inefficiencies through intelligent automation and actionable insights.',
    icon: Zap,
    color: '#F7AE57',
  },
  {
    id: 3,
    title: 'Market Leadership',
    description: 'Spot emerging trends and opportunities before your competitors, positioning you to lead your industry.',
    icon: TrendingUp,
    color: '#0E78AA',
  },
]

const whyNow = [
  {
    title: 'Leading Forward',
    description: 'Leading businesses are already using data to stay ahead—and it becomes harder to catch up each day.',
    icon: Rocket,
  },
  {
    title: 'AI Evolution',
    description: 'Technology, especially AI, is evolving rapidly. Keeping up is crucial to remain competitive and relevant.',
    icon: Brain,
  },
  {
    title: 'Tactical Advantage',
    description: 'Tackle challenges confidently and seize opportunities others might miss in their market environment.',
    icon: AlertTriangle,
  },
]

export function ValueSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7AE57]/5 via-background to-[#0E78AA]/5" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
            <Target className="w-4 h-4 text-[#0E78AA]" />
            <span>Value Proposition</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">How We Add </span>
            <span className="text-[#0E78AA]">Value</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise Intelligence creates tangible business impact across
            three critical dimensions of your organization.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.id}
                className={cn(
                  'group relative p-8 rounded-2xl glass-card hover-lift transition-all duration-500',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Top border accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ backgroundColor: benefit.color }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: benefit.color }} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Why Now Section */}
        <div
          className={cn(
            'rounded-3xl p-8 md:p-12 glass-card border border-[#0E78AA]/20 transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why <span className="text-[#0E78AA]">Now</span>?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your competitors aren&apos;t waiting. Neither should you.
              Investing in intelligence now will dictate your company&apos;s future.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {whyNow.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={cn(
                    'group p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-[#0E78AA]/30 transition-all duration-300',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#0E78AA]/10 group-hover:bg-[#0E78AA]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#0E78AA]" />
                    </div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#0E78AA] hover:bg-[#0a5a80] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Intelligence Journey
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
