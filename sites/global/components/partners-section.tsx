'use client'

import { Handshake } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'

// Default data for standalone usage
const defaultPartners = [
  {
    name: 'Microsoft Azure',
    description: 'Premier cloud infrastructure partner enabling scalable, secure deployment with global reach.',
  },
  {
    name: 'Amazon Web Services',
    description: 'Strategic cloud platform for data-intensive intelligence applications.',
  },
  {
    name: 'Odoo',
    description: 'Enterprise resource planning with deep customization capabilities.',
  },
  {
    name: 'Yellowfin',
    description: 'Business intelligence platform specializing in embedded analytics.',
  },
  {
    name: 'Exasol',
    description: 'High-performance analytics database for real-time strategic intelligence.',
  },
]

export interface Partner {
  id?: number
  name: string
  description: string
  logo?: string
  url?: string
}

export interface PartnersSectionProps {
  badge?: string
  title?: string
  titleHighlight?: string
  subtitle?: string
  partners?: Partner[]
}

export function PartnersSection({
  badge = 'Powered by World-Class Technology',
  title = 'Strategic',
  titleHighlight = 'Partners',
  subtitle = 'Our ecosystem approach means you benefit from world-class technology without the complexity of managing multiple vendor relationships.',
  partners = defaultPartners,
}: PartnersSectionProps) {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">
            <Handshake className="w-4 h-4 text-[#0E78AA]" />
            <span>{badge}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-foreground">{title} </span>
            <span className="text-[#0E78AA]">{titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </FadeIn>

        {/* Partners Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <StaggerItem key={partner.name}>
              <div className="group p-6 rounded-2xl glass-card text-center transition-all duration-500 hover:scale-105 h-full">
                {/* Partner Logo/Name */}
                <div className="h-12 flex items-center justify-center mb-3">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-10 max-w-full object-contain group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <span className="text-lg font-bold text-foreground group-hover:text-[#0E78AA] transition-colors">
                      {partner.name}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
