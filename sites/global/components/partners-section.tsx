'use client'

import { Handshake } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'

const partners = [
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

export function PartnersSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">
            <Handshake className="w-4 h-4 text-[#0E78AA]" />
            <span>Powered by World-Class Technology</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-foreground">Strategic </span>
            <span className="text-[#0E78AA]">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our ecosystem approach means you benefit from world-class technology
            without the complexity of managing multiple vendor relationships.
          </p>
        </FadeIn>

        {/* Partners Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <StaggerItem key={partner.name}>
              <div className="group p-6 rounded-2xl glass-card text-center transition-all duration-500 hover:scale-105 h-full">
                {/* Partner Name Placeholder - Replace with actual logos */}
                <div className="h-12 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-foreground group-hover:text-[#0E78AA] transition-colors">
                    {partner.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
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
