import { SiteConfig } from '@/shared/lib/types'

export const netherlandsSite: SiteConfig = {
  id: 'netherlands',
  slug: 'netherlands',
  name: 'Bravinci Netherlands',
  tagline: 'Strategic intelligence and transformation expertise for the Netherlands',

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
    defaultDescription: 'Bravinci Netherlands provides strategic intelligence solutions, transformation consulting, and business analytics for the Netherlands and Benelux region.',
  },

  // Navigation based on Bravinci Website Navigations document
  navigation: [
    { name: 'Home', href: '/netherlands' },
    {
      name: 'About',
      href: '/netherlands/about',
      children: [
        { name: 'Bravinci Netherlands', href: '/netherlands/about' },
        { name: 'Our Relationship with Bravinci Global', href: '/netherlands/about/relationship' },
        { name: 'Leadership', href: '/netherlands/about/leadership' },
        { name: 'Our Approach', href: '/netherlands/about/approach' },
      ],
    },
    {
      name: 'Solutions',
      href: '/netherlands/solutions',
      children: [
        { name: 'Dividos', href: '/netherlands/solutions/dividos' },
        { name: 'Strategic Command Center', href: '/netherlands/solutions/strategy-command-center' },
      ],
    },
    {
      name: 'Services',
      href: '/netherlands/services',
      children: [
        { name: 'Consulting Services', href: '/netherlands/services/consulting' },
        { name: 'Managed Services', href: '/netherlands/services/managed-services' },
        { name: 'Education', href: '/netherlands/services/education' },
        { name: 'Secondment', href: '/netherlands/services/secondment' },
      ],
    },
    {
      name: 'Industries',
      href: '/netherlands/industries',
      children: [
        { name: 'Supply Chain & Logistics', href: '/netherlands/industries/supply-chain' },
        { name: 'Banking', href: '/netherlands/industries/banking' },
        { name: 'Manufacturing', href: '/netherlands/industries/manufacturing' },
        { name: 'Healthcare & Life Sciences', href: '/netherlands/industries/healthcare' },
        { name: 'Education & Workforce Development', href: '/netherlands/industries/education' },
      ],
    },
    {
      name: 'Insights',
      href: '/netherlands/insights',
      children: [
        { name: 'Data Governance and Repatriation', href: '/netherlands/insights/data-governance' },
        { name: 'Business Intelligence', href: '/netherlands/insights/business-intelligence' },
        { name: 'ESG', href: '/netherlands/insights/esg' },
        { name: 'Contract Management', href: '/netherlands/insights/contract-management' },
        { name: 'Risk and Regulations', href: '/netherlands/insights/risk-regulations' },
      ],
    },
    {
      name: 'Careers',
      href: '/netherlands/career',
      children: [
        { name: 'Life at Bravinci Netherlands', href: '/netherlands/career' },
        { name: 'Open Roles', href: '/netherlands/career/jobs' },
      ],
    },
    { name: 'Contact', href: '/netherlands/contact' },
  ],

  footerLinks: {
    solutions: [
      { name: 'Dividos', href: '/netherlands/solutions/dividos' },
      { name: 'Strategic Command Center', href: '/netherlands/solutions/strategy-command-center' },
    ],
    services: [
      { name: 'Consulting Services', href: '/netherlands/services/consulting' },
      { name: 'Managed Services', href: '/netherlands/services/managed-services' },
      { name: 'Education', href: '/netherlands/services/education' },
      { name: 'Secondment', href: '/netherlands/services/secondment' },
    ],
    company: [
      { name: 'About Us', href: '/netherlands/about' },
      { name: 'Leadership', href: '/netherlands/about/leadership' },
      { name: 'Our Approach', href: '/netherlands/about/approach' },
      { name: 'Careers', href: '/netherlands/career' },
      { name: 'Contact', href: '/netherlands/contact' },
    ],
    insights: [
      { name: 'Data Governance', href: '/netherlands/insights/data-governance' },
      { name: 'Business Intelligence', href: '/netherlands/insights/business-intelligence' },
      { name: 'ESG', href: '/netherlands/insights/esg' },
      { name: 'Contract Management', href: '/netherlands/insights/contract-management' },
      { name: 'Risk and Regulations', href: '/netherlands/insights/risk-regulations' },
    ],
  },
}
