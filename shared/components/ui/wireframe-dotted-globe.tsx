"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

interface Location {
  name: string
  lat: number
  lng: number
  isHQ?: boolean
  flag?: string
}

interface RotatingEarthProps {
  width?: number
  height?: number
  className?: string
  primaryColor?: string
  dotColor?: string
  backgroundColor?: string
  locations?: Location[]
}

export default function RotatingEarth({
  width = 800,
  height = 600,
  className = "",
  primaryColor = "#0E78AA",
  dotColor = "#F7AE57",
  backgroundColor = "transparent",
  locations = []
}: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

    // Set up responsive dimensions
    const containerWidth = Math.min(width, window.innerWidth - 40)
    const containerHeight = Math.min(height, window.innerHeight - 100)
    const radius = Math.min(containerWidth, containerHeight) / 2.5

    const dpr = window.devicePixelRatio || 1
    canvas.width = containerWidth * dpr
    canvas.height = containerHeight * dpr
    canvas.style.width = `${containerWidth}px`
    canvas.style.height = `${containerHeight}px`
    context.scale(dpr, dpr)

    // Create projection and path generator for Canvas
    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90)

    const path = d3.geoPath().projection(projection).context(context)

    const pointInPolygon = (point: [number, number], polygon: number[][]): boolean => {
      const [x, y] = point
      let inside = false

      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i]
        const [xj, yj] = polygon[j]

        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside
        }
      }

      return inside
    }

    const pointInFeature = (point: [number, number], feature: any): boolean => {
      const geometry = feature.geometry

      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates
        // Check if point is in outer ring
        if (!pointInPolygon(point, coordinates[0])) {
          return false
        }
        // Check if point is in any hole (inner rings)
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) {
            return false // Point is in a hole
          }
        }
        return true
      } else if (geometry.type === "MultiPolygon") {
        // Check each polygon in the MultiPolygon
        for (const polygon of geometry.coordinates) {
          // Check if point is in outer ring
          if (pointInPolygon(point, polygon[0])) {
            // Check if point is in any hole
            let inHole = false
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true
                break
              }
            }
            if (!inHole) {
              return true
            }
          }
        }
        return false
      }

      return false
    }

    const generateDotsInPolygon = (feature: any, dotSpacing = 16) => {
      const dots: [number, number][] = []
      const bounds = d3.geoBounds(feature)
      const [[minLng, minLat], [maxLng, maxLat]] = bounds

      const stepSize = dotSpacing * 0.08

      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point: [number, number] = [lng, lat]
          if (pointInFeature(point, feature)) {
            dots.push(point)
          }
        }
      }

      return dots
    }

    interface DotData {
      lng: number
      lat: number
      visible: boolean
    }

    const allDots: DotData[] = []
    let landFeatures: any
    let animationFrame = 0

    const drawLocationPin = (location: Location, pulsePhase: number) => {
      const { lng, lat, isHQ, flag } = location
      const projected = projection([lng, lat])

      if (!projected) return false

      const [x, y] = projected

      // Check if location is visible (on front of globe)
      const center = projection.invert!([containerWidth / 2, containerHeight / 2])
      if (!center) return false
      const distance = d3.geoDistance([lng, lat], center)
      if (distance > Math.PI / 2) return false // Behind the globe

      const currentScale = projection.scale()
      const scaleFactor = currentScale / radius

      // Pulsing effect
      const pulseSize = 1 + Math.sin(pulsePhase) * 0.15

      // Pin dimensions
      const lineHeight = (isHQ ? 35 : 30) * scaleFactor
      const lineWidth = 2.5 * scaleFactor
      const pinColor = isHQ ? primaryColor : dotColor
      const flagSize = (isHQ ? 24 : 20) * scaleFactor * pulseSize

      // Draw location dot at the exact location
      context.save()
      context.beginPath()
      context.arc(x, y, 3 * scaleFactor, 0, 2 * Math.PI)
      context.fillStyle = pinColor
      context.fill()
      context.strokeStyle = "white"
      context.lineWidth = 1.5 * scaleFactor
      context.stroke()
      context.restore()

      // Draw vertical line from location to flag
      context.save()
      context.beginPath()
      context.moveTo(x, y)
      context.lineTo(x, y - lineHeight)
      context.strokeStyle = pinColor
      context.lineWidth = lineWidth
      context.stroke()

      // Add white outline to line for visibility
      context.strokeStyle = "white"
      context.lineWidth = lineWidth + 2 * scaleFactor
      context.globalAlpha = 0.3
      context.stroke()
      context.globalAlpha = 1
      context.restore()

      // Draw circular background for flag
      const circleRadius = flagSize * 0.7
      const flagY = y - lineHeight - circleRadius

      context.save()
      context.beginPath()
      context.arc(x, flagY, circleRadius, 0, 2 * Math.PI)
      context.fillStyle = "white"
      context.fill()
      context.strokeStyle = pinColor
      context.lineWidth = 2 * scaleFactor
      context.stroke()
      context.restore()

      // Draw flag emoji
      if (flag) {
        context.save()
        context.font = `${flagSize}px Arial`
        context.textAlign = "center"
        context.textBaseline = "middle"
        context.fillText(flag, x, flagY)
        context.restore()
      }

      // Draw subtle pulsing ring around flag
      context.save()
      context.beginPath()
      context.arc(x, flagY, circleRadius * 1.3 * pulseSize, 0, 2 * Math.PI)
      context.strokeStyle = pinColor
      context.lineWidth = 1.5 * scaleFactor
      context.globalAlpha = 0.4 * (1 - Math.abs(Math.sin(pulsePhase)))
      context.stroke()
      context.restore()

      return true
    }

    const render = () => {
      animationFrame++

      // Clear canvas
      context.clearRect(0, 0, containerWidth, containerHeight)

      const currentScale = projection.scale()
      const scaleFactor = currentScale / radius

      // Draw ocean (globe background)
      context.beginPath()
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI)
      context.fillStyle = backgroundColor === "transparent" ? "rgba(14, 120, 170, 0.1)" : backgroundColor
      context.fill()
      context.strokeStyle = primaryColor
      context.lineWidth = 2 * scaleFactor
      context.stroke()

      if (landFeatures) {
        // Draw graticule
        const graticule = d3.geoGraticule()
        context.beginPath()
        path(graticule())
        context.strokeStyle = primaryColor
        context.lineWidth = 0.5 * scaleFactor
        context.globalAlpha = 0.2
        context.stroke()
        context.globalAlpha = 1

        // Draw land outlines
        context.beginPath()
        landFeatures.features.forEach((feature: any) => {
          path(feature)
        })
        context.strokeStyle = primaryColor
        context.lineWidth = 1 * scaleFactor
        context.stroke()

        // Draw halftone dots
        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat])
          if (
            projected &&
            projected[0] >= 0 &&
            projected[0] <= containerWidth &&
            projected[1] >= 0 &&
            projected[1] <= containerHeight
          ) {
            context.beginPath()
            context.arc(projected[0], projected[1], 1.5 * scaleFactor, 0, 2 * Math.PI)
            context.fillStyle = dotColor
            context.fill()
          }
        })

        // Draw location pins
        if (locations && locations.length > 0) {
          const pulsePhase = (animationFrame * 0.05) % (Math.PI * 2)
          locations.forEach((location) => {
            drawLocationPin(location, pulsePhase)
          })
        }
      }
    }

    const loadWorldData = async () => {
      try {
        setIsLoading(true)

        const response = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json",
        )
        if (!response.ok) throw new Error("Failed to load land data")

        landFeatures = await response.json()

        // Generate dots for all land features
        landFeatures.features.forEach((feature: any) => {
          const dots = generateDotsInPolygon(feature, 16)
          dots.forEach(([lng, lat]) => {
            allDots.push({ lng, lat, visible: true })
          })
        })

        render()
        setIsLoading(false)
      } catch (err) {
        setError("Failed to load land map data")
        setIsLoading(false)
      }
    }

    // Set up rotation and interaction
    const rotation: [number, number] = [0, -20]
    let autoRotate = true
    const rotationSpeed = 0.3

    const rotate = () => {
      if (autoRotate) {
        rotation[0] += rotationSpeed
        projection.rotate(rotation)
        render()
      }
    }

    // Auto-rotation timer
    const rotationTimer = d3.timer(rotate)

    const handleMouseDown = (event: MouseEvent) => {
      autoRotate = false
      const startX = event.clientX
      const startY = event.clientY
      const startRotation: [number, number] = [...rotation]

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const sensitivity = 0.5
        const dx = moveEvent.clientX - startX
        const dy = moveEvent.clientY - startY

        rotation[0] = startRotation[0] + dx * sensitivity
        rotation[1] = startRotation[1] - dy * sensitivity
        rotation[1] = Math.max(-90, Math.min(90, rotation[1]))

        projection.rotate(rotation)
        render()
      }

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)

        setTimeout(() => {
          autoRotate = true
        }, 10)
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) return
      autoRotate = false
      const touch = event.touches[0]
      const startX = touch.clientX
      const startY = touch.clientY
      const startRotation: [number, number] = [...rotation]

      const handleTouchMove = (moveEvent: TouchEvent) => {
        if (moveEvent.touches.length !== 1) return
        const moveTouch = moveEvent.touches[0]
        const sensitivity = 0.5
        const dx = moveTouch.clientX - startX
        const dy = moveTouch.clientY - startY

        rotation[0] = startRotation[0] + dx * sensitivity
        rotation[1] = startRotation[1] - dy * sensitivity
        rotation[1] = Math.max(-90, Math.min(90, rotation[1]))

        projection.rotate(rotation)
        render()
      }

      const handleTouchEnd = () => {
        document.removeEventListener("touchmove", handleTouchMove)
        document.removeEventListener("touchend", handleTouchEnd)

        setTimeout(() => {
          autoRotate = true
        }, 10)
      }

      document.addEventListener("touchmove", handleTouchMove)
      document.addEventListener("touchend", handleTouchEnd)
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("touchstart", handleTouchStart)

    // Load the world data
    loadWorldData()

    // Cleanup
    return () => {
      rotationTimer.stop()
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("touchstart", handleTouchStart)
    }
  }, [width, height, primaryColor, dotColor, backgroundColor, locations])

  if (error) {
    return (
      <div className={`flex items-center justify-center rounded-2xl p-8 ${className}`}>
        <div className="text-center">
          <p className="text-destructive font-semibold mb-2">Error loading Earth visualization</p>
          <p className="text-muted-foreground text-sm">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#0E78AA] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-auto cursor-grab active:cursor-grabbing"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  )
}
