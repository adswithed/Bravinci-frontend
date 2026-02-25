// Navigation configuration for mega menu
// Based on Bravinci Global Website Structure document

import { LucideIcon } from 'lucide-react'
import {
  Lightbulb,
  TrendingUp,
  Brain,
  BarChart3,
  Building2,
  Landmark,
  Heart,
  GraduationCap,
  Zap,
  Factory,
  Shield,
  FileText,
  Leaf,
  Users,
  Award,
  Handshake,
  Code2,
  HeartHandshake,
  UserPlus,
  Layers,
  Target,
  Database,
  Briefcase,
  Mail,
} from 'lucide-react'

export interface MegaMenuItem {
  name: string
  href: string
  description?: string
  icon?: LucideIcon
  featured?: boolean
  children?: { name: string; href: string }[] // For nested items like Partners
}

export interface MegaMenuSection {
  title?: string
  items: MegaMenuItem[]
}

export interface MegaMenuColumn {
  sections: MegaMenuSection[]
}

export interface NavigationItemMega {
  name: string
  href: string
  megaMenu?: {
    columns: MegaMenuColumn[]
    featured?: {
      title: string
      description: string
      href: string
      image?: string
      cta?: string
    }
  }
  children?: NavigationItemMega[] // For simple dropdowns
}

// Get navigation structure based on site slug
export function getNavigation(siteSlug: string): NavigationItemMega[] {
  const basePath = siteSlug === 'global' ? '' : `/${siteSlug}`

  return [
    // 1. ABOUT
    {
      name: 'About',
      href: `${basePath}/about`,
      megaMenu: {
        columns: [
          {
            sections: [
              {
                title: 'Company',
                items: [
                  {
                    name: 'Who We Are',
                    href: `${basePath}/about`,
                    description: 'Our story, mission, and vision',
                    icon: Building2,
                    featured: true,
                  },
                  {
                    name: 'Leadership',
                    href: `${basePath}/about/leadership`,
                    description: 'Meet our executive team',
                    icon: Users,
                    featured: true,
                  },
                  {
                    name: 'Our Approach',
                    href: `${basePath}/bravinci-code`,
                    description: 'The Bravinci Code - our methodology',
                    icon: Code2,
                    featured: true,
                  },
                ],
              },
            ],
          },
          {
            sections: [
              {
                title: 'Partners & Ecosystem',
                items: [
                  {
                    name: 'Partners Overview',
                    href: `${basePath}/about/partners`,
                    description: 'Our technology and strategic partners',
                    icon: Handshake,
                    featured: true,
                  },
                  {
                    name: 'Microsoft Azure',
                    href: `${basePath}/about/partners#microsoft`,
                    description: 'Cloud and AI partnership',
                  },
                  {
                    name: 'Amazon Web Services',
                    href: `${basePath}/about/partners#aws`,
                    description: 'Cloud infrastructure partner',
                  },
                  {
                    name: 'Odoo',
                    href: `${basePath}/about/partners#odoo`,
                    description: 'ERP solutions partner',
                  },
                  {
                    name: 'Yellowfin',
                    href: `${basePath}/about/partners#yellowfin`,
                    description: 'Analytics platform partner',
                  },
                  {
                    name: 'Exasol',
                    href: `${basePath}/about/partners#exasol`,
                    description: 'High-performance analytics database',
                  },
                ],
              },
            ],
          },
        ],
      },
    },

    // 2. WHAT WE DO (contains Services, Solutions, Industries)
    {
      name: 'What we do',
      href: `${basePath}/services`,
      megaMenu: {
        columns: [
          {
            sections: [
              {
                title: 'Services',
                items: [
                  {
                    name: 'Strategy & Advisory',
                    href: `${basePath}/services/strategy-advisory`,
                    description: 'Strategic planning and executive advisory',
                    icon: Lightbulb,
                    featured: true,
                  },
                  {
                    name: 'Digital Transformation',
                    href: `${basePath}/services/digital-transformation`,
                    description: 'End-to-end digital strategy and implementation',
                    icon: TrendingUp,
                    featured: true,
                  },
                  {
                    name: 'Data & AI Enablement',
                    href: `${basePath}/services/data-ai`,
                    description: 'AI solutions and intelligent automation',
                    icon: Brain,
                    featured: true,
                  },
                ],
              },
            ],
          },
          {
            sections: [
              {
                title: 'Solutions',
                items: [
                  {
                    name: 'Dividos',
                    href: `${basePath}/solutions/dividos`,
                    description: 'AI-powered contract & dividend management',
                    icon: Layers,
                    featured: true,
                  },
                  {
                    name: 'Strategic Command Center',
                    href: `${basePath}/solutions/strategy-command-center`,
                    description: 'Real-time strategic intelligence dashboard',
                    icon: Target,
                    featured: true,
                  },
                  {
                    name: 'Data2Hire',
                    href: `${basePath}/solutions/data2hire`,
                    description: 'Data-driven talent acquisition platform',
                    icon: Database,
                    featured: true,
                  },
                ],
              },
            ],
          },
          {
            sections: [
              {
                title: 'Industries',
                items: [
                  {
                    name: 'Public Sector',
                    href: `${basePath}/industries/public-sector`,
                    description: 'Government and public services',
                    icon: Building2,
                  },
                  {
                    name: 'Financial Services',
                    href: `${basePath}/industries/financial-services`,
                    description: 'Banking, insurance, capital markets',
                    icon: Landmark,
                  },
                  {
                    name: 'Energy & Utilities',
                    href: `${basePath}/industries/energy`,
                    description: 'Power, oil & gas, sustainable energy',
                    icon: Zap,
                  },
                  {
                    name: 'Manufacturing',
                    href: `${basePath}/industries/manufacturing`,
                    description: 'Discrete and process manufacturing',
                    icon: Factory,
                  },
                  {
                    name: 'Healthcare & Life Sciences',
                    href: `${basePath}/industries/healthcare`,
                    description: 'Providers, payers, and pharma',
                    icon: Heart,
                  },
                  {
                    name: 'Education & Workforce',
                    href: `${basePath}/industries/education`,
                    description: 'Educational institutions and workforce',
                    icon: GraduationCap,
                  },
                ],
              },
            ],
          },
        ],
        featured: {
          title: 'Explore Our Capabilities',
          description: 'Discover how we help organizations transform through strategic intelligence.',
          href: `${basePath}/services`,
          cta: 'View All Services',
        },
      },
    },

    // 3. INSIGHTS
    {
      name: 'Insights',
      href: `${basePath}/insights`,
      megaMenu: {
        columns: [
          {
            sections: [
              {
                title: 'Topics',
                items: [
                  {
                    name: 'Strategic Intelligence',
                    href: `${basePath}/insights/strategic-intelligence`,
                    description: 'Market trends and competitive analysis',
                    icon: Target,
                    featured: true,
                  },
                  {
                    name: 'Artificial Intelligence',
                    href: `${basePath}/insights/artificial-intelligence`,
                    description: 'AI trends, applications, and best practices',
                    icon: Brain,
                    featured: true,
                  },
                  {
                    name: 'Business Intelligence',
                    href: `${basePath}/insights/business-intelligence`,
                    description: 'Data analytics and visualization insights',
                    icon: BarChart3,
                    featured: true,
                  },
                ],
              },
            ],
          },
          {
            sections: [
              {
                items: [
                  {
                    name: 'ESG',
                    href: `${basePath}/insights/esg`,
                    description: 'Environmental, social, and governance',
                    icon: Leaf,
                    featured: true,
                  },
                  {
                    name: 'Contract Management',
                    href: `${basePath}/insights/contract-management`,
                    description: 'Best practices in contract lifecycle',
                    icon: FileText,
                    featured: true,
                  },
                  {
                    name: 'Risk and Regulations',
                    href: `${basePath}/insights/risk-regulations`,
                    description: 'Compliance, governance, risk management',
                    icon: Shield,
                    featured: true,
                  },
                ],
              },
            ],
          },
        ],
        featured: {
          title: 'Latest Research',
          description: 'Explore our latest thought leadership and industry research.',
          href: `${basePath}/insights`,
          cta: 'View All Insights',
        },
      },
    },

    // 4. CAREERS
    {
      name: 'Careers',
      href: `${basePath}/career`,
      megaMenu: {
        columns: [
          {
            sections: [
              {
                title: 'Join Our Team',
                items: [
                  {
                    name: 'Life at Bravinci',
                    href: `${basePath}/career`,
                    description: 'Culture, benefits, and employee experience',
                    icon: HeartHandshake,
                    featured: true,
                  },
                  {
                    name: 'Open Roles',
                    href: `${basePath}/career/jobs`,
                    description: 'Explore current opportunities',
                    icon: Briefcase,
                    featured: true,
                  },
                  {
                    name: 'Culture & Values',
                    href: `${basePath}/career/culture`,
                    description: 'What drives us every day',
                    icon: Award,
                    featured: true,
                  },
                ],
              },
            ],
          },
        ],
        featured: {
          title: 'We\'re Hiring',
          description: 'Join a team of innovators shaping the future of strategic intelligence.',
          href: `${basePath}/career/jobs`,
          cta: 'View Open Positions',
        },
      },
    },

    // 5. CONTACT (no submenu)
    {
      name: 'Contact',
      href: `${basePath}/contact`,
    },
  ]
}

// Simple navigation for mobile
export function getSimpleNavigation(siteSlug: string): { name: string; href: string; children?: { name: string; href: string }[] }[] {
  const basePath = siteSlug === 'global' ? '' : `/${siteSlug}`

  return [
    {
      name: 'About',
      href: `${basePath}/about`,
      children: [
        { name: 'Who We Are', href: `${basePath}/about` },
        { name: 'Leadership', href: `${basePath}/about/leadership` },
        { name: 'Our Approach', href: `${basePath}/bravinci-code` },
        { name: 'Partners & Ecosystem', href: `${basePath}/about/partners` },
      ],
    },
    {
      name: 'What we do',
      href: `${basePath}/services`,
      children: [
        { name: 'Strategy & Advisory', href: `${basePath}/services/strategy-advisory` },
        { name: 'Digital Transformation', href: `${basePath}/services/digital-transformation` },
        { name: 'Data & AI Enablement', href: `${basePath}/services/data-ai` },
        { name: 'Dividos', href: `${basePath}/solutions/dividos` },
        { name: 'Strategic Command Center', href: `${basePath}/solutions/strategy-command-center` },
        { name: 'Data2Hire', href: `${basePath}/solutions/data2hire` },
      ],
    },
    {
      name: 'Industries',
      href: `${basePath}/industries`,
      children: [
        { name: 'Public Sector', href: `${basePath}/industries/public-sector` },
        { name: 'Financial Services', href: `${basePath}/industries/financial-services` },
        { name: 'Energy & Utilities', href: `${basePath}/industries/energy` },
        { name: 'Manufacturing', href: `${basePath}/industries/manufacturing` },
        { name: 'Healthcare', href: `${basePath}/industries/healthcare` },
        { name: 'Education', href: `${basePath}/industries/education` },
      ],
    },
    {
      name: 'Insights',
      href: `${basePath}/insights`,
      children: [
        { name: 'Strategic Intelligence', href: `${basePath}/insights/strategic-intelligence` },
        { name: 'Artificial Intelligence', href: `${basePath}/insights/artificial-intelligence` },
        { name: 'Business Intelligence', href: `${basePath}/insights/business-intelligence` },
        { name: 'ESG', href: `${basePath}/insights/esg` },
        { name: 'Contract Management', href: `${basePath}/insights/contract-management` },
        { name: 'Risk and Regulations', href: `${basePath}/insights/risk-regulations` },
      ],
    },
    {
      name: 'Careers',
      href: `${basePath}/career`,
      children: [
        { name: 'Life at Bravinci', href: `${basePath}/career` },
        { name: 'Open Roles', href: `${basePath}/career/jobs` },
        { name: 'Culture & Values', href: `${basePath}/career/culture` },
      ],
    },
    {
      name: 'Contact',
      href: `${basePath}/contact`,
    },
  ]
}
