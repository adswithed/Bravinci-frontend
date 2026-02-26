import { SiteConfig } from '@/shared/lib/types'

export const netherlandsSite: SiteConfig = {
  id: 'netherlands',
  slug: 'netherlands',
  name: 'Bravinci Netherlands',
  tagline: 'Intelligence Solutions for Benelux',

  wpApiUrl: process.env.NEXT_PUBLIC_WP_API_URL_NETHERLANDS || 'http://localhost:8888/Bravinci%20Project/backend/wp-json',
  wpSiteId: 2,

  branding: {
    primaryColor: '#0E78AA',
    secondaryColor: '#F7AE57',
  },

  contact: {
    address: 'Homburg 19-G, 4153 BS Beesd, Netherlands',
    email: 'netherlands@bravinci.com',
    phone: '+31 (0)85-0606074',
    vatId: '861202739B01',
  },

  social: {
    linkedin: 'https://linkedin.com/company/bravinci',
    twitter: 'https://twitter.com/bravinci',
  },

  locale: {
    language: 'nl',
    currency: 'EUR',
    dateFormat: 'DD-MM-YYYY',
  },

  seo: {
    titleTemplate: '%s | Bravinci Netherlands',
    defaultDescription: 'Bravinci Netherlands provides intelligence solutions, strategic consulting, and business analytics for the Benelux region.',
  },

  // Custom navigation for Netherlands
  navigation: [
    { name: 'Home', href: '/netherlands' },
    {
      name: 'About',
      href: '/netherlands/about',
      children: [
        { name: 'About us', href: '/netherlands/about' },
        { name: 'The Bravinci Code', href: '/netherlands/bravinci-code' },
        { name: 'Blogs', href: '/netherlands/blogs' },
      ],
    },
    {
      name: 'Services',
      href: '/netherlands/services',
      children: [
        { name: 'Consulting Services', href: '/netherlands/services#consulting' },
        { name: 'Education Solutions', href: '/netherlands/services#education' },
        { name: 'Secondment', href: '/netherlands/services#secondment' },
      ],
    },
    {
      name: 'Solutions',
      href: '/netherlands/solutions',
      children: [
        { name: 'Dividos', href: '/netherlands/solutions/dividos' },
        { name: 'Strategy Command Center', href: '/netherlands/solutions/strategy-command-center' },
        { name: 'Strategic Intelligence Masterclass', href: '/netherlands/solutions/masterclass' },
      ],
    },
    { name: 'Bravinci United', href: '/netherlands/bravinci-united' },
    { name: 'Career', href: '/netherlands/career' },
    { name: 'Contact', href: '/netherlands/contact' },
  ],
}
