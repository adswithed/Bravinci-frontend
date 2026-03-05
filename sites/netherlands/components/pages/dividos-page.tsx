'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Database,
  BarChart3,
  Warehouse,
  BrainCircuit,
  ShieldCheck,
  Network,
  BadgeEuro,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingDown,
  Globe,
  Shield,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const capabilities = [
  {
    icon: Database,
    title: 'Data Sovereignty and Local Hosting',
    description:
      'Full control over data location and infrastructure. Host in regional datacenters, national facilities, or private infrastructure, ensuring compliance with GDPR, AFM frameworks, and sector-specific data governance obligations without data crossing jurisdictional boundaries.',
    color: 'blue' as const,
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics and Business Intelligence',
    description:
      'Interactive dashboards, ad-hoc analysis, predictive modelling, and real-time operational intelligence, delivered on infrastructure the organisation controls, without the premium pricing that hyperscaler analytics services impose on European customers.',
    color: 'orange' as const,
  },
  {
    icon: Warehouse,
    title: 'Data Warehousing and Integration',
    description:
      'Scalable data warehousing integrating data from ERP systems, operational databases, third-party platforms, and external sources into a unified, governed foundation for analytics and AI across the organisation.',
    color: 'blue' as const,
  },
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence and Generative AI',
    description:
      'Deploy machine learning, natural language processing, and generative AI on locally hosted infrastructure, avoiding data transfer to international platforms that major AI providers structurally require, a consideration of direct relevance as EU AI Act obligations take effect.',
    color: 'orange' as const,
  },
  {
    icon: ShieldCheck,
    title: 'High Availability Architecture',
    description:
      'Twin datacenter setup ensuring business continuity and disaster recovery. Scalable across compute, storage, memory, and user capacity as organisational requirements grow, without proprietary scaling constraints.',
    color: 'blue' as const,
  },
  {
    icon: Network,
    title: 'Open Architecture',
    description:
      'Modular, vendor-agnostic platform eliminating lock-in. Integrate existing technology investments and retain migration flexibility as requirements evolve, rather than deepening dependency on proprietary ecosystems.',
    color: 'orange' as const,
  },
  {
    icon: BadgeEuro,
    title: 'Transparent Pricing',
    description:
      'Pay-as-you-go model with no hidden costs or long-term commitments. Predictable Euro-denominated pricing removes exchange rate exposure and enables accurate infrastructure budget planning.',
    color: 'blue' as const,
  },
  {
    icon: Users,
    title: 'Multi-Tenant Capabilities',
    description:
      'Support multiple business units, subsidiaries, or clients on shared infrastructure while maintaining rigorous data isolation and governance boundaries, suited to holding companies and organisations with distributed Benelux operations.',
    color: 'orange' as const,
  },
]

const stats = [
  { value: '40-60%', label: 'Cost Reduction', icon: TrendingDown, color: 'blue' as const },
  { value: '100%', label: 'Data Sovereignty', icon: Shield, color: 'orange' as const },
  { value: 'EUR', label: 'Pricing (No FX Risk)', icon: BadgeEuro, color: 'blue' as const },
  { value: 'GDPR', label: 'Compliant', icon: CheckCircle2, color: 'orange' as const },
]

export function NetherlandsDividosPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E78AA]/5 via-background to-background" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                'text-center max-w-4xl mx-auto space-y-6 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                <Database className="w-4 h-4 text-[#0E78AA]" />
                <span>Dividos</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Data sovereignty and analytics platform </span>
                <span className="text-foreground">for full organisational control</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Dividos is a next-generation analytics and AI platform enabling Dutch organisations to maintain complete control over their data while accessing enterprise-grade business intelligence, data warehousing, and artificial intelligence capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* What It Is Section */}
        <section id="what-it-is" data-section="what-it-is" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-foreground">What </span>
                <span className="gradient-text">Dividos Is</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dividos is a next-generation analytics and AI platform enabling Dutch organisations to maintain complete control over their data while accessing enterprise-grade business intelligence, data warehousing, and artificial intelligence capabilities. As GDPR obligations, the EU Data Act, and Dutch data residency frameworks tighten, Dividos provides a purpose-built alternative to hyperscaler dependency: world-class analytics performance hosted on infrastructure the organisation owns, governs, and controls.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For organisations currently managing analytics workloads on major cloud platforms, Dividos delivers a financially significant transition. Transparent, Euro-denominated pricing replaces variable multi-currency cloud billing, generating material cost savings while simultaneously strengthening data governance and reducing regulatory exposure.
              </p>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section id="who-its-for" data-section="who-its-for" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Who </span>
                  <span className="gradient-text">It&apos;s For</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Financial institutions navigating Dutch and European data localisation requirements, multinational corporations seeking regional data residency, government agencies requiring secure local hosting, telecommunications and energy operators managing high-volume data environments, and any Netherlands enterprise seeking to exit hyperscaler vendor lock-in while retaining world-class analytics capability.
                </p>
                <div className="space-y-3">
                  {[
                    'Financial institutions with data localisation requirements',
                    'Multinational corporations seeking regional data residency',
                    'Government agencies requiring secure local hosting',
                    'Telecommunications and energy operators',
                    'Enterprises exiting hyperscaler vendor lock-in',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="p-8 rounded-3xl glass-card">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Database className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Data Sovereignty</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <BarChart3 className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Advanced Analytics</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <BrainCircuit className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">AI &amp; Generative AI</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <BadgeEuro className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Transparent Pricing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities Section */}
        <section id="capabilities" data-section="capabilities" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key </span>
                <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade analytics, AI, and data sovereignty capabilities delivered on infrastructure your organisation controls.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability) => {
                const Icon = capability.icon
                const bgColor = capability.color === 'blue' ? 'bg-[#0E78AA]/10' : 'bg-[#F7AE57]/10'
                const iconColor = capability.color === 'blue' ? 'text-[#0E78AA]' : 'text-[#F7AE57]'
                const hoverColor = capability.color === 'blue' ? 'group-hover:text-[#0E78AA]' : 'group-hover:text-[#F7AE57]'
                return (
                  <div
                    key={capability.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform', bgColor)}>
                      <Icon className={cn('w-6 h-6', iconColor)} />
                    </div>
                    <h3 className={cn('font-bold text-foreground mb-2 text-sm transition-colors', hoverColor)}>
                      {capability.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Business Impact Section */}
        <section id="impact" data-section="impact" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Business </span>
                <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Organisations deploying Dividos report a 40 to 60 per cent reduction in cloud infrastructure costs compared to hyperscaler platforms, elimination of currency exposure from multi-currency billing, improved analytics performance through local hosting, and a stronger regulatory compliance posture. Dutch organisations consistently cite data sovereignty, cost predictability, and Bravinci&apos;s implementation partnership as the defining advantages over hyperscaler alternatives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon
                const bgColor = stat.color === 'blue' ? 'bg-[#0E78AA]/10' : 'bg-[#F7AE57]/10'
                const iconColor = stat.color === 'blue' ? 'text-[#0E78AA]' : 'text-[#F7AE57]'
                return (
                  <div
                    key={stat.label}
                    className="group p-8 rounded-3xl glass-card hover-lift text-center transition-all duration-500"
                  >
                    <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform', bgColor)}>
                      <Icon className={cn('w-8 h-8', iconColor)} />
                    </div>

                    <div className="text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>

                    <h3 className="text-base font-bold text-foreground mb-3">
                      {stat.label}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Sparkles className="w-10 h-10 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore Data Sovereignty for Your Organisation
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact Bravinci Netherlands to discuss how Dividos can address your data residency, analytics, and cloud cost challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/netherlands/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/netherlands/solutions">Explore All Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
