/**
 * Netherlands Industry - Banking Page
 *
 * Data intelligence and transformation expertise for
 * Netherlands financial services organisations.
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Landmark,
  Shield,
  Database,
  LineChart,
  Monitor,
  Leaf,
  SearchCheck,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Scale,
  FileSearch,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

const landscapeChallenges = [
  'Increasing regulatory complexity from DNB, AFM, ECB, and European supervisory authorities',
  'DORA (Digital Operational Resilience Act) compliance requirements',
  'Open banking and PSD2 driving competitive disruption from fintechs and big tech',
  'Anti-money laundering obligations and financial crime prevention demands',
  'ESG reporting mandates and sustainable finance integration',
  'Legacy core banking system modernisation pressures',
]

const howWeHelp = [
  'Regulatory intelligence platforms that automate compliance monitoring and reporting across Dutch and European frameworks',
  'Data governance architectures that establish single sources of truth for regulatory, risk, and commercial analytics',
  'Model risk management frameworks aligned with DNB and ECB supervisory expectations',
  'Digital banking transformation programmes balancing innovation with operational resilience',
  'ESG data integration and reporting solutions meeting CSRD, EU Taxonomy, and SFDR requirements',
  'AML and financial crime analytics leveraging advanced pattern detection and network analysis',
]

const solutions = [
  {
    icon: Shield,
    title: 'Regulatory Intelligence and Compliance Analytics',
    description:
      'Automated regulatory monitoring and compliance analytics platforms that track obligations across DNB, AFM, ECB, and European supervisory frameworks. Our solutions transform regulatory compliance from a manual, resource-intensive process into an intelligent, proactive capability that reduces risk and operational burden while ensuring continuous compliance readiness.',
    color: '#0E78AA',
  },
  {
    icon: Database,
    title: 'Data Governance for Financial Services',
    description:
      'Enterprise data governance frameworks designed specifically for the Dutch financial services context. We establish data quality management, lineage tracking, metadata management, and access control architectures that support regulatory reporting, risk analytics, and commercial intelligence while meeting GDPR and sector-specific data protection requirements.',
    color: '#F7AE57',
  },
  {
    icon: LineChart,
    title: 'Model Risk Management',
    description:
      'Comprehensive model risk management frameworks aligned with DNB and ECB supervisory expectations. Our solutions address the full model lifecycle including development, validation, monitoring, and governance, ensuring that credit risk, market risk, and operational risk models meet regulatory standards while delivering reliable analytical outputs.',
    color: '#0E78AA',
  },
  {
    icon: Monitor,
    title: 'Digital Banking Transformation',
    description:
      'End-to-end digital transformation programmes that modernise core banking operations, customer experiences, and operational processes. We help Dutch banks navigate the transition from legacy systems to modern, API-driven architectures while maintaining operational continuity and meeting DORA resilience requirements throughout the transformation journey.',
    color: '#F7AE57',
  },
  {
    icon: Leaf,
    title: 'ESG Reporting and Analytics',
    description:
      'Integrated ESG data management and reporting solutions that address CSRD, EU Taxonomy, SFDR, and DNB sustainability risk expectations. Our platforms consolidate ESG data from across the organisation, automate disclosure preparation, and provide analytical capabilities that support sustainable finance decision-making and portfolio-level ESG risk assessment.',
    color: '#0E78AA',
  },
  {
    icon: SearchCheck,
    title: 'AML and Financial Crime Analytics',
    description:
      'Advanced anti-money laundering and financial crime detection platforms leveraging machine learning, network analysis, and behavioural analytics. Our solutions help Dutch banks move beyond rule-based transaction monitoring to intelligent, risk-based approaches that improve detection effectiveness while reducing false positives and operational costs.',
    color: '#F7AE57',
  },
]

const whyChooseItems = [
  {
    icon: Scale,
    title: 'Dutch Regulatory Expertise',
    description:
      'Our financial services consultants bring direct experience working within and alongside DNB, AFM, and European supervisory frameworks. This intimate understanding of regulatory expectations, supervisory processes, and compliance standards ensures that every solution we deliver is practically implementable within the Dutch regulatory context and meets the specific expectations of Dutch financial supervisors.',
    color: '#0E78AA',
  },
  {
    icon: FileSearch,
    title: 'Evidence-Based Methodology',
    description:
      'Every engagement is grounded in rigorous analysis of your organisation&apos;s data, processes, and regulatory obligations. We avoid generic frameworks in favour of evidence-based approaches that reflect the specific characteristics of your institution, your risk profile, and your strategic objectives. This methodology ensures that recommendations are actionable, outcomes are measurable, and value realisation is tracked throughout delivery.',
    color: '#F7AE57',
  },
]

export function NetherlandsIndustryBankingPage() {
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
                <Landmark className="w-4 h-4 text-[#0E78AA]" />
                <span>Banking</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Data intelligence and transformation expertise for the </span>
                <span className="gradient-text">Netherlands financial services organisations</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Bravinci Netherlands partners with banks and financial institutions to navigate regulatory complexity, drive digital transformation, and build data-driven operating models that deliver sustainable competitive advantage.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/netherlands/contact">
                    Discuss Your Banking Objectives
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
                    The Netherlands Banking Landscape
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Dutch banking sector is one of Europe&apos;s most concentrated and sophisticated financial markets. Major institutions including ING, Rabobank, and ABN AMRO operate at significant scale, managing complex operations that span retail banking, corporate finance, asset management, and international markets. The sector is supervised by De Nederlandsche Bank (DNB) for prudential regulation and the Autoriteit Financi&euml;le Markten (AFM) for conduct supervision, creating a dual-oversight framework that demands rigorous compliance capabilities and transparent governance structures.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dutch banks face a convergence of pressures that is fundamentally reshaping the industry. Regulatory requirements continue to intensify, with DORA, the EU AI Act, CSRD sustainability reporting, and evolving AML expectations adding layers of compliance complexity. Simultaneously, fintech competitors and big tech platforms are eroding traditional revenue pools, forcing banks to accelerate digital transformation while managing legacy infrastructure and organisational change. The banks that will thrive are those that successfully transform their data and technology capabilities into strategic assets that drive regulatory efficiency, customer experience innovation, and operational resilience.
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
                  Netherlands banking organisations face intensifying regulatory, competitive, and technological pressures that demand integrated intelligence and transformation capabilities.
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
                  We combine deep financial services expertise with advanced analytical and implementation capabilities to help Dutch banks navigate complexity and build competitive advantage.
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
                <span className="text-foreground">Banking </span>
                <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Six specialised solution areas designed to address the regulatory, analytical, and transformation requirements of Netherlands financial services organisations.
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

        {/* Why Choose Section */}
        <section
          id="why-choose"
          data-section="why-choose"
          className="py-20 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Banking Organisations </span>
                <span className="gradient-text">Choose Bravinci</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                What distinguishes Bravinci&apos;s financial services practice from conventional consulting providers in the Netherlands banking market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseItems.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${item.color}10` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
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
              Discuss Your Financial Services Transformation Agenda
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Our Netherlands financial services practice welcomes conversations about regulatory compliance, data transformation, and digital banking objectives.
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
