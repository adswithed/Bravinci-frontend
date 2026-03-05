import { SiteConfig } from '@/shared/lib/types'

export const nigeriaSite: SiteConfig = {
  id: 'nigeria',
  slug: 'nigeria',
  name: 'Bravinci Nigeria',
  tagline: 'Strategic Intelligence and Innovation for Nigeria',

  wpApiUrl: process.env.NEXT_PUBLIC_WP_API_URL_NIGERIA || 'http://localhost:8888/Bravinci%20Project/backend/wp-json',
  wpSiteId: 3,

  branding: {
    primaryColor: '#0E78AA',
    secondaryColor: '#F7AE57',
  },

  contact: {
    address: 'Lagos, Nigeria',
    email: 'nigeria@bravinci.com',
    phone: '+234 (0) 000 0000',
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
    titleTemplate: '%s | Bravinci Nigeria',
    defaultDescription: 'Bravinci Nigeria brings global expertise to Africa\'s largest economy, helping organisations navigate complexity and accelerate growth through strategic advisory, enterprise technology, and data-driven transformation.',
  },

  navigation: [
    { name: 'Home', href: '/nigeria' },
    {
      name: 'About',
      href: '/nigeria/about',
      children: [
        { name: 'About Us', href: '/nigeria/about' },
        { name: 'Leadership', href: '/nigeria/about/leadership' },
        { name: 'Our Approach', href: '/nigeria/about/our-approach' },
        { name: 'Global Relationship', href: '/nigeria/about/global-relationship' },
      ],
    },
    {
      name: 'Services',
      href: '/nigeria/services',
      children: [
        { name: 'Strategy & Advisory', href: '/nigeria/services/strategy-advisory' },
        { name: 'Digital Transformation', href: '/nigeria/services/digital-transformation' },
        { name: 'Data & AI Enablement', href: '/nigeria/services/data-ai' },
      ],
    },
    {
      name: 'Solutions',
      href: '/nigeria/solutions',
      children: [
        { name: 'Data2Employ', href: '/nigeria/solutions/data2employ' },
        { name: 'Odoo ERP', href: '/nigeria/solutions/odoo-erp' },
      ],
    },
    {
      name: 'Industries',
      href: '/nigeria/industries',
      children: [
        { name: 'Public Sector', href: '/nigeria/industries/public-sector' },
        { name: 'Oil and Gas', href: '/nigeria/industries/oil-gas' },
        { name: 'Real Estate', href: '/nigeria/industries/real-estate' },
        { name: 'Manufacturing', href: '/nigeria/industries/manufacturing' },
      ],
    },
    { name: 'Insights', href: '/nigeria/insights' },
    { name: 'Career', href: '/nigeria/career' },
    { name: 'Contact', href: '/nigeria/contact' },
  ],
}
