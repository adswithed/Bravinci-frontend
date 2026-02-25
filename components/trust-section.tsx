'use client'

import { Card } from '@/components/ui/card'
import { Shield, CheckCircle, Lock } from 'lucide-react'

const certifications = [
  {
    title: 'ISO 27001',
    description: 'Information Security Management',
    icon: Lock,
  },
  {
    title: 'SOC 2 Compliant',
    description: 'Security, Availability & Confidentiality',
    icon: Shield,
  },
  {
    title: 'GDPR Compliant',
    description: 'Data Protection & Privacy Standards',
    icon: CheckCircle,
  },
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F7AE57]/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Enterprise-Grade Security & Compliance
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Your data security is our highest priority. We maintain the strictest compliance standards globally.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => {
            const Icon = cert.icon
            return (
              <Card
                key={cert.title}
                className="flex flex-col items-center p-8 text-center bg-card border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 rounded-lg bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-foreground/60">{cert.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
