/**
 * Section Registry
 *
 * Maps WordPress section types to React components.
 * Uses dynamic imports for code splitting.
 */

import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'

// Loading placeholder for sections
const SectionLoading = () => (
  <div className="animate-pulse bg-muted/30 min-h-[300px] w-full flex items-center justify-center">
    <span className="text-muted-foreground text-sm">Loading section...</span>
  </div>
)

// Error fallback for sections
const SectionError = ({ type }: { type: string }) => (
  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-md my-4">
    <p className="text-destructive text-sm">Failed to load section: {type}</p>
  </div>
)

/**
 * Section component registry
 * Maps section type strings to dynamically imported React components
 */
const sectionComponents: Record<string, ComponentType<any>> = {
  // Global site hero
  hero: dynamic(
    () => import('@/sites/global/components/hero-section').then((m) => m.HeroSection),
    { loading: SectionLoading }
  ),

  // Stats section with animated counters
  stats: dynamic(
    () => import('@/sites/global/components/stats-section').then((m) => m.StatsSection),
    { loading: SectionLoading }
  ),

  // Services grid
  services: dynamic(
    () => import('@/shared/components/services-section').then((m) => m.ServicesSection),
    { loading: SectionLoading }
  ),

  // Solutions showcase
  solutions: dynamic(
    () => import('@/shared/components/solutions-section').then((m) => m.SolutionsSection),
    { loading: SectionLoading }
  ),

  // Industries grid
  industries: dynamic(
    () => import('@/shared/components/industries-section').then((m) => m.IndustriesSection),
    { loading: SectionLoading }
  ),

  // Client testimonials
  testimonials: dynamic(
    () => import('@/shared/components/testimonials-section').then((m) => m.TestimonialsSection),
    { loading: SectionLoading }
  ),

  // Call to action
  cta: dynamic(
    () => import('@/shared/components/cta-section').then((m) => m.CTASection),
    { loading: SectionLoading }
  ),

  // Insights/thought leadership
  insights: dynamic(
    () => import('@/sites/global/components/insights-section').then((m) => m.InsightsSection),
    { loading: SectionLoading }
  ),

  // Partners logos
  partners: dynamic(
    () => import('@/sites/global/components/partners-section').then((m) => m.PartnersSection),
    { loading: SectionLoading }
  ),

  // Trust & certifications
  trust: dynamic(
    () => import('@/shared/components/trust-section').then((m) => m.TrustSection),
    { loading: SectionLoading }
  ),

  // About section
  about: dynamic(
    () => import('@/shared/components/about-section').then((m) => m.AboutSection),
    { loading: SectionLoading }
  ),

  // Value proposition
  value: dynamic(
    () => import('@/shared/components/value-section').then((m) => m.ValueSection),
    { loading: SectionLoading }
  ),

  // Country-specific hero
  country_hero: dynamic(
    () => import('@/shared/components/country-hero-section').then((m) => m.CountryHeroSection),
    { loading: SectionLoading }
  ),
}

/**
 * Get component for a section type
 */
export function getComponent(type: string): ComponentType<any> | null {
  return sectionComponents[type] || null
}

/**
 * Check if a component exists for a section type
 */
export function hasComponent(type: string): boolean {
  return type in sectionComponents
}

/**
 * Get all available section types
 */
export function getAvailableSectionTypes(): string[] {
  return Object.keys(sectionComponents)
}

/**
 * Section type metadata for documentation
 */
export const sectionMeta: Record<string, { label: string; description: string }> = {
  hero: {
    label: 'Hero Section',
    description: 'Main hero with title, subtitle, and call-to-action buttons',
  },
  stats: {
    label: 'Statistics',
    description: 'Animated statistics grid showing impact metrics',
  },
  services: {
    label: 'Services',
    description: 'Services cards with icons and features',
  },
  solutions: {
    label: 'Solutions',
    description: 'Solutions showcase with features and badges',
  },
  industries: {
    label: 'Industries',
    description: 'Industries we serve grid',
  },
  testimonials: {
    label: 'Testimonials',
    description: 'Client testimonials carousel',
  },
  cta: {
    label: 'Call to Action',
    description: 'CTA banner with button and benefits',
  },
  insights: {
    label: 'Insights',
    description: 'Thought leadership categories grid',
  },
  partners: {
    label: 'Partners',
    description: 'Partner logos section',
  },
  trust: {
    label: 'Trust & Security',
    description: 'Certifications and trust badges',
  },
  about: {
    label: 'About',
    description: 'About section with values and company info',
  },
  value: {
    label: 'Value Proposition',
    description: 'Benefits and value proposition section',
  },
  country_hero: {
    label: 'Country Hero',
    description: 'Hero section for country-specific pages',
  },
}
