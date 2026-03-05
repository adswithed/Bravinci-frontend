'use client'

/**
 * Page Renderer
 *
 * Dynamically renders page sections from WordPress CMS data.
 * Maps section types to React components and transforms data to props.
 */

import { Suspense } from 'react'
import { getComponent, hasComponent } from '@/shared/lib/section-registry'
import type { CMSPageSection, CMSItem } from '@/shared/lib/wordpress'

interface PageRendererProps {
  sections: CMSPageSection[]
}

/**
 * Loading skeleton for sections
 */
function SectionSkeleton() {
  return (
    <div className="animate-pulse bg-muted/30 min-h-[300px] w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="h-4 w-32 bg-muted rounded" />
        <div className="h-3 w-48 bg-muted/60 rounded" />
      </div>
    </div>
  )
}

/**
 * Error boundary fallback for sections
 */
function SectionErrorFallback({ type }: { type: string }) {
  return (
    <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg my-4 text-center">
      <p className="text-destructive font-medium">Failed to render section</p>
      <p className="text-sm text-muted-foreground mt-1">Type: {type}</p>
    </div>
  )
}

/**
 * Page Renderer Component
 *
 * Takes an array of sections from WordPress and renders the corresponding
 * React components with transformed props.
 */
export function PageRenderer({ sections }: PageRendererProps) {
  // Sort sections by order
  const sortedSections = [...sections].sort((a, b) => (a.order || 0) - (b.order || 0))

  return (
    <>
      {sortedSections.map((section) => {
        // Check if component exists for this section type
        if (!hasComponent(section.type)) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`[PageRenderer] Unknown section type: ${section.type}`)
          }
          return null
        }

        const Component = getComponent(section.type)
        if (!Component) return null

        // Transform section data to component props
        const props = transformSectionToProps(section)

        return (
          <Suspense key={section.id} fallback={<SectionSkeleton />}>
            <Component {...props} />
          </Suspense>
        )
      })}
    </>
  )
}

/**
 * Transform WordPress section data to React component props
 */
function transformSectionToProps(section: CMSPageSection): Record<string, unknown> {
  const { settings, data, type } = section

  // Base props from settings
  const props: Record<string, unknown> = { ...settings }

  // If section has resolved CPT data, transform it for the component
  if (data && Array.isArray(data) && data.length > 0) {
    switch (type) {
      case 'services':
        props.services = data.map(transformService)
        break

      case 'solutions':
        props.solutions = data.map(transformSolution)
        break

      case 'industries':
        props.industries = data.map(transformIndustry)
        break

      case 'testimonials':
        props.testimonials = data.map(transformTestimonial)
        break

      case 'stats':
        props.stats = data.map(transformStat)
        break

      case 'partners':
        props.partners = data.map(transformPartner)
        break

      case 'insights':
        props.insights = data.map(transformInsight)
        break

      case 'trust':
        props.certifications = data.map(transformCertification)
        break

      default:
        // Pass data as-is for other types
        props.items = data
    }
  }

  return props
}

/**
 * Transform a service item from WordPress to component props
 */
function transformService(item: CMSItem) {
  return {
    title: item.title,
    description: item.description || item.excerpt || '',
    icon: item.icon || 'Lightbulb',
    features: Array.isArray(item.features)
      ? item.features.map((f: { text?: string }) => f.text || f)
      : [],
    gradient: buildGradient(item.gradient_from as string, item.gradient_to as string),
    iconBg: buildIconBg(item.icon_bg as string),
    span: item.grid_span || 'md:col-span-1',
    href: item.href || `/services/${item.slug}`,
  }
}

/**
 * Transform a solution item from WordPress to component props
 */
function transformSolution(item: CMSItem) {
  return {
    id: item.id,
    title: item.title,
    description: item.description || item.excerpt || '',
    icon: item.icon || 'Shield',
    badge: item.badge || '',
    features: Array.isArray(item.features)
      ? item.features.map((f: { text?: string }) => f.text || f)
      : [],
    href: item.href || `/solutions/${item.slug}`,
    highlight: Boolean(item.is_featured),
  }
}

/**
 * Transform an industry item from WordPress to component props
 */
function transformIndustry(item: CMSItem) {
  return {
    title: item.title,
    description: item.description || item.excerpt || '',
    icon: item.icon || 'Building2',
    color: item.color || '#0E78AA',
    href: item.href || `/industries/${item.slug}`,
  }
}

/**
 * Transform a testimonial item from WordPress to component props
 */
function transformTestimonial(item: CMSItem) {
  const image = item.image as { url?: string } | string | undefined
  return {
    text: item.text || item.content || '',
    image: typeof image === 'object' ? image?.url : image || '/placeholder-avatar.png',
    name: item.name || item.title,
    role: item.role || '',
    company: item.company || '',
  }
}

/**
 * Transform a stat item from WordPress to component props
 */
function transformStat(item: CMSItem) {
  return {
    value: Number(item.value) || 0,
    prefix: item.prefix || '',
    suffix: item.suffix || '',
    label: item.label || item.title,
    description: item.description || '',
    icon: item.icon || 'Award',
  }
}

/**
 * Transform a partner item from WordPress to component props
 */
function transformPartner(item: CMSItem) {
  const logo = item.logo as { url?: string } | string | undefined
  return {
    name: item.title,
    description: item.description || '',
    logo: typeof logo === 'object' ? logo?.url : logo,
    url: item.url || '',
  }
}

/**
 * Transform an insight item from WordPress to component props
 */
function transformInsight(item: CMSItem) {
  return {
    title: item.title,
    description: item.description || item.excerpt || '',
    icon: item.icon || 'Target',
    gradient: item.gradient || 'from-blue-500/20 to-blue-500/5',
    href: item.href || `/insights/${item.slug}`,
  }
}

/**
 * Transform a certification item from WordPress to component props
 */
function transformCertification(item: CMSItem) {
  return {
    title: item.title,
    description: item.description || '',
    icon: item.icon || 'Shield',
  }
}

/**
 * Build gradient class from color values
 */
function buildGradient(from?: string, to?: string): string {
  if (!from && !to) return 'from-primary/20 to-primary/5'

  // Convert hex to Tailwind-compatible format
  // For simplicity, we use inline styles in the component instead
  return `from-[${from || '#0E78AA'}]/20 to-[${to || '#0E78AA'}]/5`
}

/**
 * Build icon background class from color value
 */
function buildIconBg(color?: string): string {
  if (!color) return 'bg-primary/10'
  return `bg-[${color}]/10`
}

export default PageRenderer
