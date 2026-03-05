import { SiteConfig, WPPost, WPPage, WPMedia, WPMenu } from './types'
import fallbackServices from '@/shared/data/services.json'
import fallbackSolutions from '@/shared/data/solutions.json'

/**
 * WordPress REST API client for multisite
 *
 * This module provides functions to fetch data from WordPress.
 * Each function accepts a SiteConfig to determine which site to query.
 * Falls back to static JSON data when WordPress is unreachable.
 */

interface FetchOptions {
  revalidate?: number
  cache?: RequestCache
}

// Default fetch options for ISR
const defaultOptions: FetchOptions = {
  revalidate: 60, // Revalidate every 60 seconds
}

/**
 * Base fetch function with error handling
 */
async function wpFetch<T>(
  url: string,
  options: FetchOptions = defaultOptions
): Promise<T | null> {
  try {
    const res = await fetch(url, {
      next: {
        revalidate: options.revalidate,
      },
      cache: options.cache,
    })

    if (!res.ok) {
      console.error(`WordPress API error: ${res.status} ${res.statusText}`)
      return null
    }

    return res.json()
  } catch (error) {
    console.error('WordPress API fetch error:', error)
    return null
  }
}

/**
 * Get a page by slug
 */
export async function getPage(
  site: SiteConfig,
  slug: string,
  options?: FetchOptions
): Promise<WPPage | null> {
  const url = `${site.wpApiUrl}/wp/v2/pages?slug=${slug}&_embed`
  const pages = await wpFetch<WPPage[]>(url, options)
  return pages?.[0] || null
}

/**
 * Get all pages
 */
export async function getAllPages(
  site: SiteConfig,
  options?: FetchOptions
): Promise<WPPage[]> {
  const url = `${site.wpApiUrl}/wp/v2/pages?per_page=100&_embed`
  return (await wpFetch<WPPage[]>(url, options)) || []
}

/**
 * Get posts with optional filters
 */
export async function getPosts(
  site: SiteConfig,
  params: {
    perPage?: number
    page?: number
    category?: number
    search?: string
    orderBy?: 'date' | 'title' | 'modified'
    order?: 'asc' | 'desc'
  } = {},
  options?: FetchOptions
): Promise<WPPost[]> {
  const searchParams = new URLSearchParams({
    per_page: String(params.perPage || 10),
    page: String(params.page || 1),
    orderby: params.orderBy || 'date',
    order: params.order || 'desc',
    _embed: 'true',
  })

  if (params.category) {
    searchParams.set('categories', String(params.category))
  }
  if (params.search) {
    searchParams.set('search', params.search)
  }

  const url = `${site.wpApiUrl}/wp/v2/posts?${searchParams}`
  return (await wpFetch<WPPost[]>(url, options)) || []
}

/**
 * Get a single post by slug
 */
export async function getPost(
  site: SiteConfig,
  slug: string,
  options?: FetchOptions
): Promise<WPPost | null> {
  const url = `${site.wpApiUrl}/wp/v2/posts?slug=${slug}&_embed`
  const posts = await wpFetch<WPPost[]>(url, options)
  return posts?.[0] || null
}

/**
 * Get media by ID
 */
export async function getMedia(
  site: SiteConfig,
  id: number,
  options?: FetchOptions
): Promise<WPMedia | null> {
  const url = `${site.wpApiUrl}/wp/v2/media/${id}`
  return wpFetch<WPMedia>(url, options)
}

/**
 * Get navigation menu by location
 * Requires WP REST API Menus plugin or similar
 */
export async function getMenu(
  site: SiteConfig,
  location: string,
  options?: FetchOptions
): Promise<WPMenu | null> {
  // Note: This requires a menu REST API plugin like "WP REST API Menus"
  const url = `${site.wpApiUrl}/menus/v1/locations/${location}`
  return wpFetch<WPMenu>(url, options)
}

/**
 * Get site settings/options
 * Requires custom REST endpoint or ACF to REST API
 */
export async function getSiteSettings(
  site: SiteConfig,
  options?: FetchOptions
): Promise<Record<string, any> | null> {
  // This requires custom REST endpoint setup in WordPress
  const url = `${site.wpApiUrl}/bravinci/v1/settings`
  return wpFetch<Record<string, any>>(url, options)
}

/**
 * Get ACF fields for a page
 * Requires ACF to REST API plugin
 */
export async function getPageFields(
  site: SiteConfig,
  pageId: number,
  options?: FetchOptions
): Promise<Record<string, any> | null> {
  const page = await wpFetch<WPPage>(
    `${site.wpApiUrl}/wp/v2/pages/${pageId}`,
    options
  )
  return page?.acf || null
}

/**
 * Search across posts and pages
 */
export async function search(
  site: SiteConfig,
  query: string,
  options?: FetchOptions
): Promise<(WPPost | WPPage)[]> {
  const [posts, pages] = await Promise.all([
    getPosts(site, { search: query, perPage: 5 }, options),
    wpFetch<WPPage[]>(
      `${site.wpApiUrl}/wp/v2/pages?search=${encodeURIComponent(query)}&per_page=5`,
      options
    ),
  ])

  return [...(posts || []), ...(pages || [])]
}

/**
 * Get categories
 */
export async function getCategories(
  site: SiteConfig,
  options?: FetchOptions
): Promise<any[]> {
  const url = `${site.wpApiUrl}/wp/v2/categories?per_page=100`
  return (await wpFetch<any[]>(url, options)) || []
}

/**
 * Preview mode helper - get draft content
 */
export async function getPreview(
  site: SiteConfig,
  postId: number,
  postType: 'posts' | 'pages',
  token: string
): Promise<WPPost | WPPage | null> {
  const url = `${site.wpApiUrl}/wp/v2/${postType}/${postId}?_embed`

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    })

    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

// =============================================================================
// CMS Page Builder Types & Functions
// =============================================================================

/**
 * Page section from WordPress page builder
 */
export interface CMSPageSection {
  id: string
  type: string
  order: number
  settings: Record<string, unknown>
  data?: CMSItem[]
}

/**
 * CMS page with sections
 */
export interface CMSPage {
  id: number
  slug: string
  title: string
  content: string
  sections: CMSPageSection[]
  seo: {
    title: string
    description: string
    og_image: string | null
  }
  featured_image: string | null
}

/**
 * CMS global settings
 */
export interface CMSSettings {
  site: {
    name: string
    tagline: string
  }
  branding: {
    primary_color: string
    secondary_color: string
    logo: string | null
    logo_dark: string | null
  }
  contact: {
    address: string
    email: string
    phone: string
    vat_id: string
  }
  social: {
    linkedin: string
    twitter: string
    youtube: string
    facebook: string
    instagram: string
  }
  seo: {
    title_template: string
    default_description: string
    og_image: string | null
  }
}

/**
 * Generic CMS item (service, solution, testimonial, etc.)
 */
export interface CMSItem {
  id: number
  title: string
  slug: string
  content?: string
  excerpt?: string
  featured_image?: string | null
  [key: string]: unknown
}

/**
 * Navigation menu item
 */
export interface CMSMenuItem {
  id: number
  title: string
  url: string
  target: string
  children: CMSMenuItem[]
  classes?: string[]
}

/**
 * Get CMS page with all sections and resolved data
 */
export async function getCMSPage(
  site: SiteConfig,
  slug: string,
  options?: FetchOptions
): Promise<CMSPage | null> {
  const url = `${site.wpApiUrl}/bravinci/v1/pages/${encodeURIComponent(slug)}`
  return wpFetch<CMSPage>(url, options)
}

/**
 * Get all CMS pages (for static generation)
 */
export async function getCMSPages(
  site: SiteConfig,
  options?: FetchOptions
): Promise<Array<{ id: number; slug: string; title: string }>> {
  const url = `${site.wpApiUrl}/bravinci/v1/pages`
  return (await wpFetch<Array<{ id: number; slug: string; title: string }>>(url, options)) || []
}

/**
 * Get CMS global settings
 */
export async function getCMSSettings(
  site: SiteConfig,
  options?: FetchOptions
): Promise<CMSSettings | null> {
  const url = `${site.wpApiUrl}/bravinci/v1/settings`
  return wpFetch<CMSSettings>(url, options)
}

/**
 * Get navigation menu by location
 */
export async function getCMSMenu(
  site: SiteConfig,
  location: string,
  options?: FetchOptions
): Promise<CMSMenuItem[]> {
  const url = `${site.wpApiUrl}/bravinci/v1/menus/${encodeURIComponent(location)}`
  return (await wpFetch<CMSMenuItem[]>(url, options)) || []
}

/**
 * Get services from WordPress
 */
export async function getServices(
  site: SiteConfig,
  options?: FetchOptions
): Promise<CMSItem[]> {
  const url = `${site.wpApiUrl}/bravinci/v1/services`
  const result = await wpFetch<CMSItem[]>(url, options)
  if (result && result.length > 0) return result
  // Fallback to static data
  return (fallbackServices as unknown as CMSItem[]) || []
}

/**
 * Get a single service by slug
 */
export async function getServiceBySlug(
  site: SiteConfig,
  slug: string,
  options?: FetchOptions
): Promise<CMSItem | null> {
  const url = `${site.wpApiUrl}/bravinci/v1/services/${encodeURIComponent(slug)}`
  const result = await wpFetch<CMSItem>(url, options)
  if (result) return result
  // Fallback to static data
  const items = fallbackServices as unknown as CMSItem[]
  return items.find((s) => s.slug === slug) || null
}

/**
 * Get solutions from WordPress
 */
export async function getSolutions(
  site: SiteConfig,
  options?: FetchOptions
): Promise<CMSItem[]> {
  const url = `${site.wpApiUrl}/bravinci/v1/solutions`
  const result = await wpFetch<CMSItem[]>(url, options)
  if (result && result.length > 0) return result
  // Fallback to static data
  return (fallbackSolutions as unknown as CMSItem[]) || []
}

/**
 * Get a single solution by slug
 */
export async function getSolutionBySlug(
  site: SiteConfig,
  slug: string,
  options?: FetchOptions
): Promise<CMSItem | null> {
  const url = `${site.wpApiUrl}/bravinci/v1/solutions/${encodeURIComponent(slug)}`
  const result = await wpFetch<CMSItem>(url, options)
  if (result) return result
  // Fallback to static data
  const items = fallbackSolutions as unknown as CMSItem[]
  return items.find((s) => s.slug === slug) || null
}

/**
 * Get industries from WordPress
 */
export async function getIndustries(
  site: SiteConfig,
  options?: FetchOptions
): Promise<CMSItem[]> {
  const url = `${site.wpApiUrl}/bravinci/v1/industries`
  return (await wpFetch<CMSItem[]>(url, options)) || []
}

/**
 * Get testimonials from WordPress
 */
export async function getTestimonials(
  site: SiteConfig,
  options?: FetchOptions
): Promise<CMSItem[]> {
  const url = `${site.wpApiUrl}/bravinci/v1/testimonials`
  return (await wpFetch<CMSItem[]>(url, options)) || []
}

/**
 * Get partners from WordPress
 */
export async function getPartners(
  site: SiteConfig,
  options?: FetchOptions
): Promise<CMSItem[]> {
  const url = `${site.wpApiUrl}/bravinci/v1/partners`
  return (await wpFetch<CMSItem[]>(url, options)) || []
}

/**
 * Get statistics from WordPress
 */
export async function getStats(
  site: SiteConfig,
  options?: FetchOptions
): Promise<CMSItem[]> {
  const url = `${site.wpApiUrl}/bravinci/v1/stats`
  return (await wpFetch<CMSItem[]>(url, options)) || []
}

/**
 * Get insights from WordPress
 */
export async function getInsights(
  site: SiteConfig,
  options?: FetchOptions
): Promise<CMSItem[]> {
  const url = `${site.wpApiUrl}/bravinci/v1/insights`
  return (await wpFetch<CMSItem[]>(url, options)) || []
}

/**
 * Get certifications from WordPress
 */
export async function getCertifications(
  site: SiteConfig,
  options?: FetchOptions
): Promise<CMSItem[]> {
  const url = `${site.wpApiUrl}/bravinci/v1/certifications`
  return (await wpFetch<CMSItem[]>(url, options)) || []
}

/**
 * Get team members from WordPress
 */
export async function getTeamMembers(
  site: SiteConfig,
  options?: FetchOptions
): Promise<CMSItem[]> {
  const url = `${site.wpApiUrl}/bravinci/v1/team`
  return (await wpFetch<CMSItem[]>(url, options)) || []
}
