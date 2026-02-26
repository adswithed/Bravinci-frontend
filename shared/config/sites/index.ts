import { SiteConfig } from '@/shared/lib/types'
import { globalSite } from './global'
import { netherlandsSite } from './netherlands'

// All registered sites (including global)
export const allSites: Record<string, SiteConfig> = {
  global: globalSite,
  netherlands: netherlandsSite,
  // Add more sites as they are created:
  // nigeria: nigeriaSite,
  // surinam: surinamSite,
  // romania: romaniaSite,
  // morocco: moroccoSite,
  // france: franceSite,
}

// Country sites only (excludes global - used for [site] dynamic route)
export const countrySites: Record<string, SiteConfig> = {
  netherlands: netherlandsSite,
}

// Default site (global - served at root)
export const defaultSite = globalSite

// Get all country site slugs (for static generation of [site] routes)
export function getCountrySiteSlugs(): string[] {
  return Object.keys(countrySites)
}

// Get all site slugs including global
export function getAllSiteSlugs(): string[] {
  return Object.keys(allSites)
}

// Get site config by slug
export function getSiteConfig(slug: string): SiteConfig {
  return allSites[slug] || defaultSite
}

// Get country site config (returns null if not a country site)
export function getCountrySiteConfig(slug: string): SiteConfig | null {
  return countrySites[slug] || null
}

// Check if a site exists
export function siteExists(slug: string): boolean {
  return slug in allSites
}

// Check if it's a country site (not global)
export function isCountrySite(slug: string): boolean {
  return slug in countrySites
}

// Get all sites as array
export function getAllSites(): SiteConfig[] {
  return Object.values(allSites)
}

// Get country sites as array
export function getCountrySites(): SiteConfig[] {
  return Object.values(countrySites)
}

// Countries dropdown data (for navigation)
export function getCountriesNavigation(currentSiteSlug?: string) {
  return getCountrySites()
    .filter(site => site.slug !== currentSiteSlug)
    .map(site => ({
      name: site.name.replace('Bravinci ', ''),
      href: `/${site.slug}`,
      slug: site.slug,
    }))
}

export { globalSite, netherlandsSite }
