import { SiteConfig } from '@/lib/types'

export const globalSite: SiteConfig = {
  id: 'global',
  slug: 'global',
  name: 'Bravinci Global',
  tagline: 'Intelligence Solutions Worldwide',

  wpApiUrl: process.env.NEXT_PUBLIC_WP_API_URL_GLOBAL || 'https://bravinci.com/wp-json',
  wpSiteId: 1,

  branding: {
    primaryColor: '#0E78AA',
    secondaryColor: '#F7AE57',
  },

  contact: {
    address: 'Homburg 19-G, 4153 BS Beesd, Netherlands',
    email: 'office@bravinci.com',
    phone: '+31 (0)85-0606074',
    vatId: '861202739B01',
  },

  social: {
    linkedin: 'https://linkedin.com/company/bravinci',
    twitter: 'https://twitter.com/bravinci',
    youtube: 'https://youtube.com/bravinci',
  },

  locale: {
    language: 'en',
    currency: 'EUR',
    dateFormat: 'DD/MM/YYYY',
  },

  seo: {
    titleTemplate: '%s | Bravinci - Intelligence Solutions',
    defaultDescription: 'International provider of intelligence solutions. We empower organizations with strategic insights, business analytics, and AI expertise.',
  },
}
