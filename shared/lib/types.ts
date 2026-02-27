// Site configuration types for WordPress multisite

export interface SiteConfig {
  // Site identification
  id: string
  slug: string
  name: string
  tagline: string

  // WordPress connection
  wpApiUrl: string
  wpSiteId?: number // For multisite network

  // Branding (same brand colors, but can be customized per site if needed)
  branding: {
    primaryColor: string
    secondaryColor: string
    logo?: string
  }

  // Contact information
  contact: {
    address: string
    email: string
    phone: string
    vatId?: string
  }

  // Social links
  social: {
    linkedin?: string
    twitter?: string
    youtube?: string
    facebook?: string
    instagram?: string
  }

  // Navigation (can be overridden per site, or fetched from WP)
  navigation?: NavigationItem[]

  // Footer links (can be overridden per site, or fetched from WP)
  footerLinks?: FooterLinks

  // Locale settings
  locale: {
    language: string
    currency: string
    dateFormat: string
  }

  // SEO defaults
  seo: {
    titleTemplate: string
    defaultDescription: string
    ogImage?: string
  }
}

export interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
}

export interface FooterLinks {
  solutions: { name: string; href: string }[]
  services: { name: string; href: string }[]
  company: { name: string; href: string }[]
  insights: { name: string; href: string }[]
  resources?: { name: string; href: string }[]
}

// WordPress API response types
export interface WPPost {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  featured_media: number
  date: string
  modified: string
  acf?: Record<string, any>
}

export interface WPPage {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  template: string
  acf?: Record<string, any>
}

export interface WPMedia {
  id: number
  source_url: string
  alt_text: string
  media_details: {
    width: number
    height: number
    sizes: Record<string, { source_url: string; width: number; height: number }>
  }
}

export interface WPMenu {
  id: number
  name: string
  items: WPMenuItem[]
}

export interface WPMenuItem {
  id: number
  title: string
  url: string
  children?: WPMenuItem[]
}
