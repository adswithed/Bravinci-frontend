'use client'

import { ReactNode } from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/components/ui/button'

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
        className
      )}
    >
      {children}
    </div>
  )
}

interface BentoCardProps {
  name: string
  className?: string
  background?: ReactNode
  Icon: React.ElementType
  description: string
  href?: string
  cta?: string
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href = '#',
  cta = 'Learn more',
}: BentoCardProps) {
  return (
    <div
      className={cn(
        'group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl',
        'glass-card hover-lift cursor-pointer',
        'transform-gpu transition-all duration-300',
        className
      )}
    >
      <div className="absolute inset-0 z-0">{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <Icon className="h-12 w-12 origin-left transform-gpu text-[#0E78AA] transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-xl font-semibold text-foreground mt-4">
          {name}
        </h3>
        <p className="max-w-lg text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Button variant="ghost" asChild size="sm" className="pointer-events-auto text-[#0E78AA] hover:text-[#0E78AA]/80">
          <a href={href} className="flex items-center gap-2">
            {cta}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[#0E78AA]/5" />
    </div>
  )
}

interface FeatureCardProps {
  children?: ReactNode
  className?: string
}

export function FeatureCard({ children, className }: FeatureCardProps) {
  return (
    <div className={cn('p-4 sm:p-8 relative overflow-hidden', className)}>
      {children}
    </div>
  )
}

export function FeatureTitle({ children }: { children?: ReactNode }) {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-foreground text-xl md:text-2xl md:leading-snug font-semibold">
      {children}
    </p>
  )
}

export function FeatureDescription({ children }: { children?: ReactNode }) {
  return (
    <p className="text-sm md:text-base max-w-sm text-left text-muted-foreground my-2">
      {children}
    </p>
  )
}
