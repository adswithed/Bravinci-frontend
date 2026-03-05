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

// Get Nigeria-specific navigation
function getNigeriaNavigation(): NavigationItemMega[] {
  const basePath = '/nigeria'

  return [
    {
      name: 'About',
      href: '#',
      megaMenu: {
        columns: [
          {
            sections: [
              {
                title: 'Company',
                items: [
                  {
                    name: 'About Bravinci Nigeria',
                    href: `${basePath}/about`,
                    description: 'Strategic intelligence for Nigeria\'s leading organisations',
                    icon: Building2,
                    featured: true,
                  },
                  {
                    name: 'Leadership',
                    href: `${basePath}/about/leadership`,
                    description: 'Meet our Nigerian leadership team',
                    icon: Users,
                    featured: true,
                  },
                  {
                    name: 'Our Approach',
                    href: `${basePath}/about/our-approach`,
                    description: 'The Bravinci Nigeria Method',
                    icon: Code2,
                    featured: true,
                  },
                  {
                    name: 'Global Relationship',
                    href: `${basePath}/about/global-relationship`,
                    description: 'Global expertise with Nigerian market insight',
                    icon: Handshake,
                    featured: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      name: 'What we do',
      href: '#',
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
                    description: 'Strategic guidance grounded in Nigerian market expertise',
                    icon: Lightbulb,
                    featured: true,
                  },
                  {
                    name: 'Digital Transformation',
                    href: `${basePath}/services/digital-transformation`,
                    description: 'Digital evolution delivering sustainable business impact',
                    icon: TrendingUp,
                    featured: true,
                  },
                  {
                    name: 'Data & AI Enablement',
                    href: `${basePath}/services/data-ai`,
                    description: 'Transform business data into strategic intelligence',
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
                    name: 'Data2Employ',
                    href: `${basePath}/solutions/data2employ`,
                    description: 'Workforce intelligence for Nigerian organisations',
                    icon: Database,
                    featured: true,
                  },
                  {
                    name: 'Odoo ERP',
                    href: `${basePath}/solutions/odoo-erp`,
                    description: 'Enterprise resource planning for Nigerian business',
                    icon: Layers,
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
                    description: 'Government modernisation and service delivery',
                    icon: Landmark,
                  },
                  {
                    name: 'Oil and Gas',
                    href: `${basePath}/industries/oil-gas`,
                    description: 'Technology solutions for energy sector',
                    icon: Zap,
                  },
                  {
                    name: 'Real Estate',
                    href: `${basePath}/industries/real-estate`,
                    description: 'Intelligent systems for property sector',
                    icon: Building2,
                  },
                  {
                    name: 'Manufacturing',
                    href: `${basePath}/industries/manufacturing`,
                    description: 'Smart manufacturing solutions',
                    icon: Factory,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
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
                    name: 'Enterprise Resource Planning',
                    href: `${basePath}/insights`,
                    description: 'Strategic intelligence for Nigerian ERP success',
                    icon: Database,
                    featured: true,
                  },
                  {
                    name: 'Labour Market Insights',
                    href: `${basePath}/insights`,
                    description: 'Understanding Nigeria\'s workforce dynamics',
                    icon: Users,
                    featured: true,
                  },
                  {
                    name: 'GIS Intelligence',
                    href: `${basePath}/insights`,
                    description: 'Spatial intelligence for strategic advantage',
                    icon: Target,
                    featured: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
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
                    name: 'Life at Bravinci Nigeria',
                    href: `${basePath}/career`,
                    description: 'Build transformative solutions for Nigeria\'s leading organisations',
                    icon: HeartHandshake,
                    featured: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ]
}

// Get Netherlands-specific navigation
function getNetherlandsNavigation(): NavigationItemMega[] {
  const basePath = '/netherlands'

  return [
    {
      name: 'About',
      href: '#',
      megaMenu: {
        columns: [
          {
            sections: [
              {
                title: 'Company',
                items: [
                  {
                    name: 'Bravinci Netherlands',
                    href: `${basePath}/about`,
                    description: '100 years of global expertise, delivered with precision',
                    icon: Building2,
                    featured: true,
                  },
                  {
                    name: 'Our Relationship with Bravinci Global',
                    href: `${basePath}/about/relationship`,
                    description: 'Global intelligence, Netherlands delivery',
                    icon: Handshake,
                    featured: true,
                  },
                  {
                    name: 'Leadership',
                    href: `${basePath}/about/leadership`,
                    description: 'Experienced leadership advancing Dutch business transformation',
                    icon: Users,
                    featured: true,
                  },
                  {
                    name: 'Our Approach',
                    href: `${basePath}/about/approach`,
                    description: 'The Bravinci Netherlands Method',
                    icon: Code2,
                    featured: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      name: 'Solutions',
      href: '#',
      megaMenu: {
        columns: [
          {
            sections: [
              {
                title: 'Platforms',
                items: [
                  {
                    name: 'Dividos',
                    href: `${basePath}/solutions/dividos`,
                    description: 'Data sovereignty and analytics platform for full organisational control',
                    icon: Layers,
                    featured: true,
                  },
                  {
                    name: 'Strategic Command Centre',
                    href: `${basePath}/solutions/strategy-command-center`,
                    description: 'Integrated strategic intelligence platform for transformative decision-making',
                    icon: Target,
                    featured: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      name: 'Services',
      href: '#',
      megaMenu: {
        columns: [
          {
            sections: [
              {
                title: 'Our Services',
                items: [
                  {
                    name: 'Consulting Services',
                    href: `${basePath}/services/consulting`,
                    description: 'BI, AI, Systems Integration, and Digital Transformation',
                    icon: Lightbulb,
                    featured: true,
                  },
                  {
                    name: 'Managed Services',
                    href: `${basePath}/services/managed-services`,
                    description: 'Expert management of critical business functions',
                    icon: TrendingUp,
                    featured: true,
                  },
                  {
                    name: 'Education',
                    href: `${basePath}/services/education`,
                    description: 'Strategic Intelligence Masterclass',
                    icon: GraduationCap,
                    featured: true,
                  },
                  {
                    name: 'Secondment',
                    href: `${basePath}/services/secondment`,
                    description: 'Bravinci United Model',
                    icon: UserPlus,
                    featured: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      name: 'Industries',
      href: `${basePath}/industries`,
      megaMenu: {
        columns: [
          {
            sections: [
              {
                title: 'Sectors',
                items: [
                  {
                    name: 'Supply Chain & Logistics',
                    href: `${basePath}/industries/supply-chain`,
                    description: 'Strategic intelligence for Netherlands supply chain leaders',
                    icon: Factory,
                  },
                  {
                    name: 'Banking',
                    href: `${basePath}/industries/banking`,
                    description: 'Data intelligence for financial services organisations',
                    icon: Landmark,
                  },
                  {
                    name: 'Manufacturing',
                    href: `${basePath}/industries/manufacturing`,
                    description: 'Operational intelligence for manufacturing organisations',
                    icon: Factory,
                  },
                  {
                    name: 'Healthcare & Life Sciences',
                    href: `${basePath}/industries/healthcare`,
                    description: 'Data intelligence for healthcare organisations',
                    icon: Heart,
                  },
                  {
                    name: 'Education & Workforce Development',
                    href: `${basePath}/industries/education`,
                    description: 'Strategic intelligence for educational institutions',
                    icon: GraduationCap,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
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
                    name: 'Data Governance and Repatriation',
                    href: `${basePath}/insights/data-governance`,
                    description: 'Navigating data governance complexity and European data sovereignty',
                    icon: Database,
                    featured: true,
                  },
                  {
                    name: 'Business Intelligence',
                    href: `${basePath}/insights/business-intelligence`,
                    description: 'Building data-driven decision-making capability',
                    icon: BarChart3,
                    featured: true,
                  },
                  {
                    name: 'ESG',
                    href: `${basePath}/insights/esg`,
                    description: 'European sustainability reporting and ESG strategy',
                    icon: Leaf,
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
                    name: 'Contract Management',
                    href: `${basePath}/insights/contract-management`,
                    description: 'Transforming contract management into competitive capability',
                    icon: FileText,
                    featured: true,
                  },
                  {
                    name: 'Risk and Regulations',
                    href: `${basePath}/insights/risk-regulations`,
                    description: 'Navigating Dutch and European regulatory requirements',
                    icon: Shield,
                    featured: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
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
                    name: 'Life at Bravinci Netherlands',
                    href: `${basePath}/career`,
                    description: 'Build transformative solutions for the Netherlands\' leading organisations',
                    icon: HeartHandshake,
                    featured: true,
                  },
                  {
                    name: 'Open Roles',
                    href: `${basePath}/career/jobs`,
                    description: 'Current opportunities at Bravinci Netherlands',
                    icon: Briefcase,
                    featured: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ]
}

// Get navigation structure based on site slug
export function getNavigation(siteSlug: string): NavigationItemMega[] {
  if (siteSlug === 'nigeria') {
    return getNigeriaNavigation()
  }

  if (siteSlug === 'netherlands') {
    return getNetherlandsNavigation()
  }

  const basePath = siteSlug === 'global' ? '' : `/${siteSlug}`

  return [
    // 1. ABOUT
    {
      name: 'About',
      href: '#',
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
      href: '#',
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
      },
    },

    // 3. INSIGHTS
    {
      name: 'Insights',
      href: '#',
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
      },
    },

    // 4. CAREERS
    {
      name: 'Careers',
      href: '#',
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
      },
    },
  ]
}

// Simple navigation for mobile
export function getSimpleNavigation(siteSlug: string): { name: string; href: string; children?: { name: string; href: string }[] }[] {
  if (siteSlug === 'netherlands') {
    const basePath = '/netherlands'
    return [
      {
        name: 'About',
        href: '#',
        children: [
          { name: 'Bravinci Netherlands', href: `${basePath}/about` },
          { name: 'Our Relationship with Bravinci Global', href: `${basePath}/about/relationship` },
          { name: 'Leadership', href: `${basePath}/about/leadership` },
          { name: 'Our Approach', href: `${basePath}/about/approach` },
        ],
      },
      {
        name: 'Solutions',
        href: '#',
        children: [
          { name: 'Dividos', href: `${basePath}/solutions/dividos` },
          { name: 'Strategic Command Centre', href: `${basePath}/solutions/strategy-command-center` },
        ],
      },
      {
        name: 'Services',
        href: '#',
        children: [
          { name: 'Consulting Services', href: `${basePath}/services/consulting` },
          { name: 'Managed Services', href: `${basePath}/services/managed-services` },
          { name: 'Education', href: `${basePath}/services/education` },
          { name: 'Secondment', href: `${basePath}/services/secondment` },
        ],
      },
      {
        name: 'Industries',
        href: `${basePath}/industries`,
        children: [
          { name: 'Supply Chain & Logistics', href: `${basePath}/industries/supply-chain` },
          { name: 'Banking', href: `${basePath}/industries/banking` },
          { name: 'Manufacturing', href: `${basePath}/industries/manufacturing` },
          { name: 'Healthcare & Life Sciences', href: `${basePath}/industries/healthcare` },
          { name: 'Education & Workforce Development', href: `${basePath}/industries/education` },
        ],
      },
      {
        name: 'Insights',
        href: `${basePath}/insights`,
        children: [
          { name: 'Data Governance and Repatriation', href: `${basePath}/insights/data-governance` },
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
          { name: 'Life at Bravinci Netherlands', href: `${basePath}/career` },
          { name: 'Open Roles', href: `${basePath}/career/jobs` },
        ],
      },
    ]
  }

  if (siteSlug === 'nigeria') {
    const basePath = '/nigeria'
    return [
      {
        name: 'About',
        href: '#',
        children: [
          { name: 'About Bravinci Nigeria', href: `${basePath}/about` },
          { name: 'Leadership', href: `${basePath}/about/leadership` },
          { name: 'Our Approach', href: `${basePath}/about/our-approach` },
          { name: 'Global Relationship', href: `${basePath}/about/global-relationship` },
        ],
      },
      {
        name: 'What we do',
        href: '#',
        children: [
          { name: 'Strategy & Advisory', href: `${basePath}/services/strategy-advisory` },
          { name: 'Digital Transformation', href: `${basePath}/services/digital-transformation` },
          { name: 'Data & AI Enablement', href: `${basePath}/services/data-ai` },
          { name: 'Data2Employ', href: `${basePath}/solutions/data2employ` },
          { name: 'Odoo ERP', href: `${basePath}/solutions/odoo-erp` },
        ],
      },
      {
        name: 'Industries',
        href: `${basePath}/industries`,
        children: [
          { name: 'Public Sector', href: `${basePath}/industries/public-sector` },
          { name: 'Oil and Gas', href: `${basePath}/industries/oil-gas` },
          { name: 'Real Estate', href: `${basePath}/industries/real-estate` },
          { name: 'Manufacturing', href: `${basePath}/industries/manufacturing` },
        ],
      },
      { name: 'Insights', href: `${basePath}/insights` },
      { name: 'Careers', href: `${basePath}/career` },
    ]
  }

  const basePath = siteSlug === 'global' ? '' : `/${siteSlug}`

  return [
    {
      name: 'About',
      href: '#',
      children: [
        { name: 'Who We Are', href: `${basePath}/about` },
        { name: 'Leadership', href: `${basePath}/about/leadership` },
        { name: 'Our Approach', href: `${basePath}/bravinci-code` },
        { name: 'Partners & Ecosystem', href: `${basePath}/about/partners` },
      ],
    },
    {
      name: 'What we do',
      href: '#',
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
      href: '#',
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
      href: '#',
      children: [
        { name: 'Life at Bravinci', href: `${basePath}/career` },
        { name: 'Open Roles', href: `${basePath}/career/jobs` },
        { name: 'Culture & Values', href: `${basePath}/career/culture` },
      ],
    },
  ]
}
