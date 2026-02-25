import { SiteConfig, WPPost, WPPage, WPMedia, WPMenu } from './types'

/**
 * WordPress REST API client for multisite
 *
 * This module provides functions to fetch data from WordPress.
 * Each function accepts a SiteConfig to determine which site to query.
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
      next: { revalidate: options.revalidate },
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
