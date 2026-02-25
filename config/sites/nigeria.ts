import { SiteConfig } from '@/lib/types'

export const nigeriaSite: SiteConfig = {
  id: 'nigeria',
  slug: 'nigeria',
  name: 'Bravinci Nigeria',
  tagline: 'Intelligence Solutions for Africa',

  wpApiUrl: process.env.NEXT_PUBLIC_WP_API_URL_NIGERIA || 'https://nigeria.bravinci.com/wp-json',
  wpSiteId: 2,

  branding: {
    primaryColor: '#0E78AA',
    secondaryColor: '#F7AE57',
  },

  contact: {
    address: 'Lagos, Nigeria', // Update with actual address
    email: 'nigeria@bravinci.com',
    phone: '+234 XXX XXX XXXX', // Update with actual phone
  },

  social: {
    linkedin: 'https://linkedin.com/company/bravinci',
    twitter: 'https://twitter.com/bravinci',
  },

  locale: {
    language: 'en',
    currency: 'NGN',
    dateFormat: 'DD/MM/YYYY',
  },

  seo: {
    titleTemplate: '%s | Bravinci Nigeria - Intelligence Solutions',
    defaultDescription: 'Bravinci Nigeria provides intelligence solutions, data analytics, AI expertise, and business consulting services across Africa.',
  },
}
