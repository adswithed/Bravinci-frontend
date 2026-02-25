'use client'

import React, { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import gsap from 'gsap'

type SpotlightEnhancedProps = {
  className?: string
  fill?: string
  size?: number
  duration?: number
  delay?: number
}

export const SpotlightEnhanced = ({
  className,
  fill = 'oklch(0.35 0.15 280)',
  size = 300,
  duration = 4,
  delay = 0,
}: SpotlightEnhancedProps) => {
  const spotlightRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!spotlightRef.current) return

    // GSAP animation for spotlight
    gsap.fromTo(
      spotlightRef.current,
      {
        opacity: 0.2,
        scale: 0.8,
      },
      {
        opacity: 0.5,
        scale: 1,
        duration: duration,
        delay: delay,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    )
  }, [duration, delay])

  return (
    <svg
      ref={spotlightRef}
      className={cn(
        'pointer-events-none absolute z-1 opacity-30',
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
      style={{
        width: size,
        height: size,
      }}
    >
      <g filter="url(#filter-spotlight)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter-spotlight"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur"
          />
        </filter>
      </defs>
    </svg>
  )
}
