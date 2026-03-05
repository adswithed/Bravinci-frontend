'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Layers,
  Calculator,
  Warehouse,
  Factory,
  ShoppingCart,
  PackageSearch,
  Users,
  FolderKanban,
  Store,
  Globe,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  Eye,
  DollarSign,
  Shield,
  Scaling,
  Handshake,
  BarChart3,
  Palette,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Settings,
} from 'lucide-react'

const modules = [
  {
    icon: Calculator,
    title: 'Accounting and Finance',
    description:
      'Comprehensive financial management including chart of accounts aligned with Nigerian standards, automated regulatory reporting, multi-currency management, bank reconciliation, payables and receivables, budgeting, financial reporting, and complete audit trails.',
    color: '#0E78AA',
  },
  {
    icon: Warehouse,
    title: 'Inventory and Warehouse Management',
    description:
      'Multi-location inventory control across Nigerian operations. Real-time stock tracking, automated reordering, batch and serial number management for regulatory compliance, warehouse transfers, stocktaking, landed cost calculation, and inventory valuation.',
    color: '#F7AE57',
  },
  {
    icon: Factory,
    title: 'Manufacturing and Production',
    description:
      'Production planning, bill of materials, work order tracking, quality control, equipment maintenance, production costing, and manufacturing operations management. Essential for food processing, textiles, construction materials, and industrial sectors.',
    color: '#0E78AA',
  },
  {
    icon: ShoppingCart,
    title: 'Sales and CRM',
    description:
      'Customer relationship management, quotation generation, sales order processing, payment tracking, commission calculation, customer portals, sales analytics, and pipeline management supporting Nigerian business practices.',
    color: '#F7AE57',
  },
  {
    icon: Users,
    title: 'Human Resources and Payroll',
    description:
      'Employee database, recruitment tracking, attendance monitoring, leave administration, payroll processing with statutory compliance, performance evaluation, training management, and expense claims.',
    color: '#0E78AA',
  },
  {
    icon: FolderKanban,
    title: 'Project Management',
    description:
      'Project planning, task tracking, timesheet management, resource allocation, project costing, billing, and profitability analysis for consulting, construction, engineering, and project-based services.',
    color: '#F7AE57',
  },
  {
    icon: Globe,
    title: 'Website and E-commerce',
    description:
      'Online store functionality integrating with inventory, payment processing, shipping logistics, delivery management, and customer account administration for Nigerian digital commerce.',
    color: '#0E78AA',
  },
  {
    icon: PackageSearch,
    title: 'Purchase and Procurement',
    description:
      'Vendor management, purchase requisitions, RFQ generation, purchase orders, goods receipt processing, vendor bill matching, payment scheduling, and procurement analytics.',
    color: '#F7AE57',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description:
      'Retail and restaurant operations supporting multiple payment methods, offline operation capability with automatic synchronisation, and integrated reporting dashboards essential for data-driven decision-making.',
    color: '#0E78AA',
  },
]

const outcomes = [
  { stat: '60%', label: 'Reduction in Manual Data Entry', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
  { stat: '45%', label: 'Improvement in Inventory Accuracy', accent: 'bg-[#F7AE57]/10', textColor: 'text-[#F7AE57]' },
  { stat: '40%', label: 'Faster Financial Close', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
  { stat: '35%', label: 'Better Cash Flow Visibility', accent: 'bg-[#F7AE57]/10', textColor: 'text-[#F7AE57]' },
]

const whyOdoo = [
  {
    icon: Palette,
    title: 'Market-Appropriate Design',
    description:
      'Solutions designed for Nigerian operational requirements while maintaining international standards. Systems accommodate local business practices, regulatory frameworks, and market dynamics.',
  },
  {
    icon: Shield,
    title: 'Compliance Integration',
    description:
      'FIRS, CBN, NAFDAC, PENCOM, and sector-specific regulations embedded into system architecture. Compliance becomes automated workflow rather than manual burden.',
  },
  {
    icon: DollarSign,
    title: 'Accessible Investment',
    description:
      'Licensing model making enterprise-class ERP accessible to Nigerian SMEs. Sophisticated business management at investment levels appropriate for Nigerian market.',
  },
  {
    icon: Scaling,
    title: 'Scalable Architecture',
    description:
      'Start with essential modules, expand as business grows. Modular design means paying for needed functionality while maintaining expansion capability.',
  },
  {
    icon: Handshake,
    title: 'Local Partnership',
    description:
      'Nigerian-based support understanding business practices, regulatory environment, and operational requirements. Partnership invested in long-term client success.',
  },
]

const implementationSteps = [
  { step: '01', title: 'Discovery', description: 'Requirements analysis and business process mapping across your Nigerian operations.' },
  { step: '02', title: 'Configuration', description: 'Module setup, compliance integration, and workflow customisation for your specific needs.' },
  { step: '03', title: 'Migration', description: 'Secure data migration from existing systems with full validation and reconciliation.' },
  { step: '04', title: 'Training', description: 'Comprehensive user training ensuring team adoption and operational confidence.' },
  { step: '05', title: 'Go-Live', description: 'Supported launch with parallel running and dedicated post-deployment assistance.' },
]

export function NigeriaOdooErpPage() {
  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Dark Hero Section */}
        <section
          id="hero"
          data-section="hero"
          className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0E78AA]/20"
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 -z-0 opacity-[0.07]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0E78AA]/10 blur-[120px] -z-0" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80">
                <Layers className="w-4 h-4 text-[#0E78AA]" />
                <span>Enterprise Resource Planning</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Enterprise resource planning designed for{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Nigerian business excellence
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Odoo ERP is a comprehensive enterprise resource planning platform that Bravinci
                Nigeria implements and customises for Nigerian organisations. Our Odoo deployments
                address regulatory requirements, business ecosystem integration, and operational
                requirements unique to Nigerian markets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-[#0E78AA] hover:bg-[#0E78AA]/90 text-white font-semibold shadow-lg"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Request a Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href="/nigeria/solutions">All Solutions</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Problem & Solution */}
        <section
          id="problem-solution"
          data-section="problem-solution"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/5 via-background to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <FadeIn direction="left">
                <div className="p-8 rounded-3xl border border-[#F7AE57]/20 bg-[#F7AE57]/[0.03]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-[#F7AE57]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      <span className="text-foreground">Who </span>
                      <span className="bg-gradient-to-r from-[#F7AE57] to-[#e8963a] bg-clip-text text-transparent">It&apos;s For</span>
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Nigerian businesses requiring professional management systems: growing SMEs
                    seeking operational excellence, manufacturers managing multi-location production,
                    distributors coordinating complex inventory, real estate developers managing
                    projects, energy sector service companies, professional services firms, and
                    organisations needing integrated visibility across finance, operations, and
                    human resources.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Growing SMEs seeking operational excellence',
                      'Manufacturers managing multi-location production',
                      'Distributors coordinating complex inventory',
                      'Real estate developers and energy sector operators',
                      'Professional services firms tracking profitability',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#F7AE57] shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.15}>
                <div className="p-8 rounded-3xl border border-[#0E78AA]/20 bg-[#0E78AA]/[0.03]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-[#0E78AA]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      <span className="text-foreground">What </span>
                      <span className="bg-gradient-to-r from-[#0E78AA] to-[#0a9ed4] bg-clip-text text-transparent">It Delivers</span>
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Unified business management across accounting, inventory, manufacturing, CRM,
                    human resources, and operations with Nigerian compliance and market requirements
                    built in. From growing SMEs to established enterprises across manufacturing,
                    distribution, real estate, professional services, and energy sectors.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="p-4 rounded-xl bg-[#0E78AA]/10 text-center">
                      <Calculator className="w-6 h-6 text-[#0E78AA] mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Finance</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F7AE57]/10 text-center">
                      <Warehouse className="w-6 h-6 text-[#F7AE57] mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Inventory</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F7AE57]/10 text-center">
                      <Factory className="w-6 h-6 text-[#F7AE57] mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Manufacturing</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0E78AA]/10 text-center">
                      <Users className="w-6 h-6 text-[#0E78AA] mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">HR & Payroll</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Key Modules Grid */}
        <section
          id="modules"
          data-section="modules"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Modules</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive ERP modules covering every aspect of business operations,
                customised for Nigerian market requirements and compliance frameworks.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((mod) => {
                const Icon = mod.icon
                return (
                  <StaggerItem key={mod.title}>
                    <div className="group h-full p-6 rounded-2xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${mod.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: mod.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                        {mod.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {mod.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Business Impact / Stats */}
        <section
          id="impact"
          data-section="impact"
          className="py-24 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Business </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nigerian organisations implementing Odoo ERP with Bravinci achieve measurable
                operational improvements and significant value creation.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {outcomes.map((outcome) => (
                <StaggerItem key={outcome.label}>
                  <div className={cn(
                    'p-8 rounded-3xl text-center hover:-translate-y-1 transition-all duration-500',
                    outcome.accent
                  )}>
                    <div className={cn('text-5xl md:text-6xl font-bold mb-3', outcome.textColor)}>
                      {outcome.stat}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {outcome.label}
                    </h3>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl border border-[#0E78AA]/20 bg-[#0E78AA]/[0.03]">
                <DollarSign className="w-8 h-8 text-[#0E78AA]" />
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-[#0E78AA]">{'\u20A6'}50-150M</div>
                  <p className="text-sm text-muted-foreground">Annual value creation through operational efficiency for growing enterprises</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Odoo Works in Nigeria */}
        <section
          id="why-odoo"
          data-section="why-odoo"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Odoo Works </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">in Nigeria</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Purpose-built advantages making Odoo the ideal ERP platform for Nigerian
                organisations across sectors and scales.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyOdoo.map((item, index) => {
                const Icon = item.icon
                return (
                  <StaggerItem key={item.title}>
                    <div className={cn(
                      'group h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500',
                      index >= 3 && 'lg:col-span-1'
                    )}>
                      <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-[#0E78AA]" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Implementation Approach */}
        <section
          id="implementation"
          data-section="implementation"
          className="py-24 relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Implementation </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Approach</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A structured methodology ensuring successful ERP deployment with minimal
                disruption to your Nigerian operations.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {implementationSteps.map((item, index) => (
                <StaggerItem key={item.step}>
                  <div className="group h-full p-6 rounded-2xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent mb-3">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    {index < implementationSteps.length - 1 && (
                      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                        <ArrowRight className="w-4 h-4 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          data-section="cta"
          className="relative py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E78AA] via-[#0E78AA]/90 to-[#0a5a80]" />
          <div className="absolute inset-0 opacity-[0.07]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90">
                <Sparkles className="w-4 h-4" />
                <span>Get Started</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Transform Your Operations with Odoo ERP
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Contact Bravinci Nigeria to discuss how Odoo ERP can unify your business operations,
                improve efficiency, and accelerate growth across your organisation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                  asChild
                >
                  <Link href="/nigeria/contact">
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href="/nigeria/solutions">All Solutions</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
