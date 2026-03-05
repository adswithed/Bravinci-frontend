/**
 * Netherlands Industry - Healthcare & Life Sciences Page
 *
 * Data intelligence and transformation expertise for
 * Netherlands healthcare and life sciences organisations.
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  HeartPulse,
  Activity,
  Database,
  FileCheck,
  Monitor,
  FlaskConical,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const landscapeChallenges = [
  'Value-based care transition requiring integrated clinical and financial analytics capabilities',
  'Data interoperability challenges across hospitals, GPs, insurers, and municipal health services',
  'GDPR, Medical Device Regulation, and Dutch healthcare data protection compliance requirements',
  'Digital health adoption including electronic health records, telemedicine, and patient portals',
  'Life sciences regulatory complexity spanning clinical trials, pharmacovigilance, and market access',
  'Healthcare workforce shortages driving demand for operational efficiency and automation',
]

const howWeHelp = [
  'Clinical and operational analytics platforms that integrate data across care pathways to support evidence-based decision-making',
  'Healthcare data governance frameworks meeting GDPR, Dutch healthcare regulations, and medical data protection standards',
  'Regulatory compliance analytics for life sciences organisations navigating EMA, CBG-MEB, and European regulatory requirements',
  'Digital health transformation programmes connecting patients, providers, and payers through integrated technology platforms',
  'Real-world evidence analytics supporting drug development, market access, and outcomes-based contracting',
]

const solutions = [
  {
    icon: Activity,
    title: 'Clinical and Operational Analytics',
    description:
      'Integrated analytics platforms that combine clinical outcomes data, operational performance metrics, and financial information to support evidence-based decision-making across healthcare organisations. Our solutions help Dutch hospitals and care providers optimise care pathways, reduce waiting times, improve resource utilisation, and demonstrate quality outcomes to insurers and regulators within the Netherlands healthcare system.',
    color: '#0E78AA',
  },
  {
    icon: Database,
    title: 'Healthcare Data Governance',
    description:
      'Comprehensive data governance frameworks designed specifically for the Dutch healthcare context. We establish data quality management, consent management, access control, and interoperability architectures that enable organisations to share and analyse health data responsibly while meeting GDPR requirements, Dutch healthcare data protection regulations, and the emerging European Health Data Space standards.',
    color: '#F7AE57',
  },
  {
    icon: FileCheck,
    title: 'Regulatory Compliance Analytics for Life Sciences',
    description:
      'Automated regulatory intelligence and compliance analytics platforms for pharmaceutical companies, medical device manufacturers, and biotech organisations operating in the Netherlands and European markets. Our solutions streamline regulatory submissions, pharmacovigilance reporting, clinical trial data management, and post-market surveillance, ensuring compliance with EMA, CBG-MEB, and national regulatory expectations.',
    color: '#0E78AA',
  },
  {
    icon: Monitor,
    title: 'Digital Health Transformation',
    description:
      'End-to-end digital transformation programmes that modernise healthcare delivery through electronic health record optimisation, telemedicine integration, patient engagement platforms, and connected care solutions. We guide Dutch healthcare organisations through the complex process of digital adoption, addressing technical integration, clinical workflow redesign, and change management to ensure sustainable technology adoption.',
    color: '#F7AE57',
  },
  {
    icon: FlaskConical,
    title: 'Real-World Evidence Analytics',
    description:
      'Advanced real-world evidence platforms that leverage clinical data, claims data, patient registries, and electronic health records to generate insights for drug development, comparative effectiveness research, health technology assessment, and outcomes-based contracting. Our solutions help life sciences organisations demonstrate product value and support market access strategies in the Netherlands and European healthcare markets.',
    color: '#0E78AA',
  },
]

export function NetherlandsIndustryHealthcarePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="hero"
          data-section="hero"
          className="py-20 md:py-32 relative overflow-hidden"
        >
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
                <HeartPulse className="w-4 h-4 text-[#0E78AA]" />
                <span>Healthcare &amp; Life Sciences</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Data intelligence and transformation expertise for the </span>
                <span className="gradient-text">Netherlands healthcare and life sciences organisations</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Bravinci Netherlands partners with healthcare providers, life sciences companies, and health system organisations to transform performance through data intelligence, regulatory analytics, and digital innovation.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/netherlands/contact">
                    Discuss Your Healthcare Objectives
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                  asChild
                >
                  <Link href="/netherlands/industries">All Industries</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Landscape */}
        <section
          id="landscape"
          data-section="landscape"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-3xl glass-card border-l-4 border-[#F7AE57]">
                <div className="flex items-start gap-4 mb-6">
                  <TrendingUp className="w-8 h-8 text-[#F7AE57] shrink-0 mt-1" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    The Netherlands Healthcare Landscape
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Dutch healthcare system is widely recognised as one of the most effective in Europe, combining universal access through mandatory health insurance with a managed competition model that incentivises quality and efficiency. Academic medical centres, general hospitals, mental health institutions, and primary care networks form an interconnected care delivery system. The transition to value-based care is reshaping reimbursement models, performance measurement, and care delivery approaches across the system.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The Netherlands is also home to a thriving life sciences sector, with the European Medicines Agency (EMA) headquartered in Amsterdam and major pharmaceutical companies, innovative biotech firms, and world-class research institutions concentrated across the country. Life sciences organisations face intensifying regulatory requirements, increasing pressure to demonstrate real-world evidence of product value, and growing complexity in market access and health technology assessment processes. Both healthcare providers and life sciences organisations share a common imperative: the need to transform data into an active strategic asset that drives better outcomes, regulatory compliance, and competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & How We Help */}
        <section
          id="challenges"
          data-section="challenges"
          className="py-20 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Industry </span>
                  <span className="gradient-text">Challenges</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Netherlands healthcare and life sciences organisations face converging pressures that demand integrated data intelligence and transformation capabilities.
                </p>
                <div className="space-y-3">
                  {landscapeChallenges.map((challenge, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg glass-card">
                      <CheckCircle2 className="w-5 h-5 text-[#F7AE57] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">How We </span>
                  <span className="gradient-text">Help</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We combine deep healthcare and life sciences expertise with advanced analytical and implementation capabilities to deliver measurable improvements in outcomes, compliance, and operational performance.
                </p>
                <div className="space-y-3">
                  {howWeHelp.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Cards */}
        <section
          id="solutions"
          data-section="solutions"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Healthcare &amp; Life Sciences </span>
                <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Five specialised solution areas designed to address the clinical, regulatory, and transformation requirements of Netherlands healthcare and life sciences organisations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution) => {
                const Icon = solution.icon
                return (
                  <div
                    key={solution.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${solution.color}10` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: solution.color }} />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          data-section="cta"
          className="py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore Healthcare and Life Sciences Expertise
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our Netherlands healthcare practice to discuss how Bravinci can support your clinical, operational, and regulatory transformation objectives.
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
                <Link href="/netherlands/industries">All Industries</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
