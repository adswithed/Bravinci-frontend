import { SiteConfig } from '@/lib/types'

export const surinamSite: SiteConfig = {
  id: 'surinam',
  slug: 'surinam',
  name: 'Bravinci Surinam',
  tagline: 'Intelligence Solutions for South America',

  wpApiUrl: process.env.NEXT_PUBLIC_WP_API_URL_SURINAM || 'https://surinam.bravinci.com/wp-json',
  wpSiteId: 3,

  branding: {
    primaryColor: '#0E78AA',
    secondaryColor: '#F7AE57',
  },

  contact: {
    address: 'Paramaribo, Surinam',
    email: 'surinam@bravinci.com',
    phone: '+597 XXX XXXX',
  },

  social: {
    linkedin: 'https://linkedin.com/company/bravinci',
  },

  locale: {
    language: 'nl',
    currency: 'SRD',
    dateFormat: 'DD-MM-YYYY',
  },

  seo: {
    titleTemplate: '%s | Bravinci Surinam - Intelligence Solutions',
    defaultDescription: 'Bravinci Surinam provides intelligence solutions and business consulting services.',
  },
}
