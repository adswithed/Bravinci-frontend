'use client'

import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function SplineLoading() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-slate-100 to-slate-50">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        <p className="text-sm text-muted-foreground">Loading 3D Scene...</p>
      </div>
    </div>
  )
}

export function SplineScene({ scene, className = '' }: SplineSceneProps) {
  return (
    <Suspense fallback={<SplineLoading />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
