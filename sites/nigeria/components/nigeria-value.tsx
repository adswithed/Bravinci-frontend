'use client'

import { useRef, useEffect, useState } from 'react'
import { Shield, MapPin, TrendingUp, Users, CheckCircle2, ArrowRight } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/components/ui/button'
import Link from 'next/link'

const benefits = [
  {
    id: 1,
    title: 'Nigerian Market Expertise',
    description: 'Comprehensive understanding of Nigeria\'s business landscape, regulatory environment, and commercial dynamics. We navigate complexity while maintaining focus on outcomes.',
    icon: MapPin,
    color: '#0E78AA',
  },
  {
    id: 2,
    title: 'Technical Excellence',
    description: 'Advanced capabilities across enterprise systems, data analytics, artificial intelligence, and digital transformation with practical implementation expertise.',
    icon: Shield,
    color: '#F7AE57',
  },
  {
    id: 3,
    title: 'Partnership Approach',
    description: 'Long-term relationships built on trust, transparency, and shared success. We transfer knowledge, build internal capabilities, and remain committed to client outcomes.',
    icon: TrendingUp,
    color: '#0E78AA',
  },
]

const keyDifferentiators = [
  {
    title: 'Nigerian Leadership',
    description: 'Led by professionals who understand local market dynamics, cultural context, and business practices.',
    icon: Users,
  },
  {
    title: 'Global Network Access',
    description: 'Nigerian clients benefit from Bravinci\'s international research, technologies, and strategic frameworks.',
    icon: MapPin,
  },
  {
    title: 'Proven Results',
    description: '150+ successful transformations delivering measurable value across Nigeria\'s leading sectors.',
    icon: CheckCircle2,
  },
]

export function NigeriaValue() {
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
      id="nigeria-value"
      data-section="nigeria-value"
      className="py-20 md:py-32 relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-orange-50/50" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 text-brand-primary" />
            <span>Why Bravinci Nigeria</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Your Strategic Partner in </span>
            <span className="text-brand-primary">Nigeria</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combining global expertise with deep local knowledge to deliver
            intelligence solutions tailored for Nigeria&apos;s dynamic business environment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.id}
                className={cn(
                  'group relative p-8 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:border-brand-primary/30 transition-all duration-500 hover:scale-105',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
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

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        <div
          className={cn(
            'rounded-3xl p-8 md:p-12 bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200 shadow-lg transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-brand-primary">Bravinci</span> in Nigeria?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re not just another consultancy. We&apos;re your local partner
              with global capabilities, committed to your success in Africa&apos;s largest economy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {keyDifferentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={cn(
                    'group p-6 rounded-xl bg-white border border-gray-200 hover:border-brand-primary/50 hover:shadow-md transition-all duration-300',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/nigeria/contact">
                Partner with Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
