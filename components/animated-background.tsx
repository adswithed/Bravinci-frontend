'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface AnimatedBackgroundProps {
  variant?: 'default' | 'dark' | 'vibrant'
  className?: string
}

export function AnimatedBackground({ variant = 'default', className = '' }: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)
  const orb3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeline = gsap.timeline()

    // Animate orbiting elements
    if (orb1Ref.current) {
      timeline.to(
        orb1Ref.current,
        {
          x: 100,
          y: -50,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        },
        0
      )
    }

    if (orb2Ref.current) {
      timeline.to(
        orb2Ref.current,
        {
          x: -100,
          y: 50,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        },
        0
      )
    }

    if (orb3Ref.current) {
      timeline.to(
        orb3Ref.current,
        {
          x: 50,
          y: 100,
          duration: 12,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        },
        0
      )
    }
  }, [])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated glowing orbs */}
      {variant === 'vibrant' && (
        <>
          <div
            ref={orb1Ref}
            className="absolute top-10 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <div
            ref={orb2Ref}
            className="absolute -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <div
            ref={orb3Ref}
            className="absolute top-1/2 right-10 w-72 h-72 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          />
        </>
      )}

      {/* Grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
