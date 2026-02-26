'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { cn } from '@/shared/lib/utils'

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ children, className, variant = 'primary', size = 'md', ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const gradientRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const button = buttonRef.current || (ref as React.MutableRefObject<HTMLButtonElement>)?.current
      if (!button) return

      const handleMouseMove = (e: MouseEvent) => {
        if (!gradientRef.current) return
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        gsap.to(gradientRef.current, {
          x: x - 100,
          y: y - 100,
          duration: 0.6,
          overwrite: 'auto',
        })
      }

      button.addEventListener('mousemove', handleMouseMove)
      return () => button.removeEventListener('mousemove', handleMouseMove)
    }, [ref])

    const variants = {
      primary:
        'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50',
      secondary:
        'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50',
      accent:
        'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={buttonRef}
        className={cn(
          'relative overflow-hidden rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <div
          ref={gradientRef}
          className="absolute w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </button>
    )
  }
)

GradientButton.displayName = 'GradientButton'
