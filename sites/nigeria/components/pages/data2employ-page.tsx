'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Users,
  Brain,
  Target,
  TrendingUp,
  Globe,
  Zap,
  Shield,
  BarChart3,
  Clock,
  Award,
  Search,
  UserCheck,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  LineChart,
  FileSearch,
} from 'lucide-react'

const capabilities = [
  {
    icon: Brain,
    title: 'Talent Intelligence',
    description:
      'AI-powered engine analysing skills, experience, educational background, and career patterns to identify candidates meeting specific requirements. Advanced assessment beyond simple keyword matching to genuine capability fit.',
    color: '#0E78AA',
  },
  {
    icon: BarChart3,
    title: 'Workforce Analytics',
    description:
      'Strategic planning tools identifying capability gaps, future requirements, and skills development priorities. Aligning hiring strategy with business growth plans across Nigerian operations.',
    color: '#F7AE57',
  },
  {
    icon: Zap,
    title: 'Recruitment Automation',
    description:
      'Streamlining workflows, automating screening, accelerating scheduling, and reducing time-to-hire. Particularly valuable for organisations scaling rapidly or filling multiple positions simultaneously.',
    color: '#0E78AA',
  },
  {
    icon: Target,
    title: 'Skills Mapping',
    description:
      'Validation framework confirming candidate capabilities across technical, professional, and specialised disciplines. Reduces hiring risk through verified competency confirmation.',
    color: '#F7AE57',
  },
  {
    icon: LineChart,
    title: 'HR Dashboard',
    description:
      'Interactive dashboards and customisable reports providing valuable insights into talent pipeline health, recruitment efficiency, and workforce composition to guide strategic decisions.',
    color: '#0E78AA',
  },
  {
    icon: Shield,
    title: 'Compliance',
    description:
      'Predictive capabilities identifying retention risks before materialisation. Understanding turnover probability enables proactive intervention and targeted support aligned with Nigerian labour regulations.',
    color: '#F7AE57',
  },
]

const outcomes = [
  { stat: '45%', label: 'Reduction in Time-to-Hire', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
  { stat: '40%', label: 'Improvement in First-Year Retention', accent: 'bg-[#F7AE57]/10', textColor: 'text-[#F7AE57]' },
  { stat: '55%', label: 'Decrease in Hiring Mistakes', accent: 'bg-[#0E78AA]/10', textColor: 'text-[#0E78AA]' },
]

const keyBenefits = [
  {
    icon: Clock,
    title: 'Faster Team Building',
    description: 'Accelerated recruitment processes through intelligent automation enable organisations to build capable teams at the pace business demands.',
  },
  {
    icon: Award,
    title: 'Higher Quality Acquisition',
    description: 'Validated assessments and AI-powered matching reduce costly mis-hires, ensuring every placement contributes to organisational success.',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Workforce Development',
    description: 'Retention analytics and workforce planning create long-term talent strategies aligned with business growth objectives.',
  },
  {
    icon: Globe,
    title: 'Nationwide Coverage',
    description: 'Real-time insights into talent availability across Lagos, Abuja, Port Harcourt, and emerging talent pools throughout Nigeria.',
  },
]

export function NigeriaData2employPage() {
  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Dark Hero Section */}
        <section
          id="hero"
          data-section="hero"
          className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#F7AE57]/20"
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#F7AE57]/10 blur-[120px] -z-0" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80">
                <Briefcase className="w-4 h-4 text-[#F7AE57]" />
                <span>Workforce Intelligence</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Workforce intelligence connecting Nigerian organisations with{' '}
                <span className="bg-gradient-to-r from-[#F7AE57] to-[#0E78AA] bg-clip-text text-transparent">
                  exceptional talent
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Data2Employ bridges the gap between job seekers and employment by analysing national
                unemployment rates and industry demands. With interactive dashboards and customisable
                reports, it provides valuable insights to guide policy decisions. The platform&apos;s
                admin tool ensures smooth operations through efficient user and support management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-[#F7AE57] hover:bg-[#F7AE57]/90 text-slate-900 font-semibold shadow-lg"
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
                      <span className="text-foreground">The </span>
                      <span className="bg-gradient-to-r from-[#F7AE57] to-[#e8963a] bg-clip-text text-transparent">Challenge</span>
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Nigerian organisations face significant talent acquisition challenges: technology
                    companies seeking specialised skills, manufacturers requiring technical expertise,
                    energy sector operators scaling operations, financial institutions building
                    capability, and growing enterprises throughout Lagos, Abuja, Port Harcourt, and
                    across Nigeria.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Technology companies seeking specialised skills',
                      'Manufacturers requiring technical expertise',
                      'Energy sector operators scaling operations',
                      'Financial institutions building capability',
                      'Growing enterprises across Nigeria',
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
                      <span className="text-foreground">Our </span>
                      <span className="bg-gradient-to-r from-[#0E78AA] to-[#0a9ed4] bg-clip-text text-transparent">Solution</span>
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Data2Employ leverages advanced analytics, skills assessment frameworks, and
                    labour market intelligence to address capability gaps, accelerate recruitment
                    cycles, and improve retention outcomes across Nigerian organisations.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="p-4 rounded-xl bg-[#0E78AA]/10 text-center">
                      <Brain className="w-6 h-6 text-[#0E78AA] mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">AI-Powered Matching</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F7AE57]/10 text-center">
                      <Target className="w-6 h-6 text-[#F7AE57] mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Skills Assessment</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F7AE57]/10 text-center">
                      <Search className="w-6 h-6 text-[#F7AE57] mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Market Intelligence</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0E78AA]/10 text-center">
                      <UserCheck className="w-6 h-6 text-[#0E78AA] mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Retention Analytics</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Capabilities / Modules Grid */}
        <section
          id="capabilities"
          data-section="capabilities"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive workforce intelligence capabilities transforming how Nigerian
                organisations identify, assess, and retain exceptional talent.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => {
                const Icon = capability.icon
                return (
                  <StaggerItem key={capability.title}>
                    <div className="group h-full p-6 rounded-2xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${capability.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: capability.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                        {capability.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {capability.description}
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
                Organisations using Data2Employ achieve measurable improvements in talent
                acquisition efficiency, quality, and cost-effectiveness.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
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
              <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl border border-[#F7AE57]/20 bg-[#F7AE57]/[0.03]">
                <TrendingUp className="w-8 h-8 text-[#F7AE57]" />
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-[#F7AE57]">{'\u20A6'}15-25M</div>
                  <p className="text-sm text-muted-foreground">Annual savings on recruitment costs for mid-sized organisations</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Key Benefits */}
        <section
          id="benefits"
          data-section="benefits"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Key </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">Benefits</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The platform enables faster team building, higher quality acquisition, and
                sustainable workforce development across Nigerian organisations.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {keyBenefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <StaggerItem key={benefit.title}>
                    <div className="group h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-[#F7AE57]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
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
                Request a Demo
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                See how Data2Employ can transform your talent acquisition and workforce planning
                strategies across your Nigerian operations.
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
