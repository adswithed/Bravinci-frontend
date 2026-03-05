'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  Lightbulb,
  Server,
  Users,
  MapPin,
  ArrowRight,
  BookOpen,
  Bell,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  FileText,
  BarChart3,
  Eye,
  Mail,
} from 'lucide-react'

const insightCategories = [
  {
    icon: Server,
    title: 'Enterprise Resource Planning',
    subtitle: 'Strategic intelligence for Nigerian ERP success',
    description:
      'Our ERP insights provide practical guidance, ensuring technology investments deliver measurable returns despite complexity. This collection explores methodologies for implementing enterprise systems that ensure FIRS, CBN, and NAFDAC compliance, deliver sustainable value, and support growth across Nigeria\u2019s commercial landscape.',
    href: '/nigeria/insights/erp',
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
  },
  {
    icon: Users,
    title: 'Labour Market Insights',
    subtitle: 'Understanding Nigeria\u2019s workforce dynamics',
    description:
      'Nigeria\u2019s labour market presents unique opportunities and challenges for organisations building capable teams. With Africa\u2019s largest population, growing university enrollment, and emerging technology ecosystem, talent pools are expanding, yet critical skills gaps persist across manufacturing, technology, professional services, and specialised disciplines.',
    href: '/nigeria/insights/labour-market',
    color: '#F7AE57',
    accentBg: 'bg-[#F7AE57]/10',
  },
  {
    icon: MapPin,
    title: 'Geographic Information System (GIS)',
    subtitle: 'Spatial intelligence for strategic advantage',
    description:
      'Geographic Information Systems provide powerful spatial intelligence capabilities increasingly valuable for Nigerian organisations navigating complex geography, distributed operations, and location-dependent decision-making. From real estate site selection and logistics optimisation to government infrastructure planning and utility network management.',
    href: '/nigeria/insights/gis',
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
  },
]

const featuredInsights = [
  {
    icon: BarChart3,
    category: 'Industry Analysis',
    title: 'Nigerian ERP Adoption Trends 2024-2025',
    excerpt:
      'A comprehensive analysis of enterprise resource planning adoption across Nigerian industries, examining success factors, common pitfalls, and emerging best practices.',
    readTime: '12 min read',
    color: '#0E78AA',
  },
  {
    icon: TrendingUp,
    category: 'Strategic Perspectives',
    title: 'Navigating Regulatory Complexity in Digital Transformation',
    excerpt:
      'Strategic frameworks for managing FIRS, CBN, and sector-specific regulatory requirements while accelerating digital transformation initiatives.',
    readTime: '8 min read',
    color: '#F7AE57',
  },
  {
    icon: Eye,
    category: 'Technical Insights',
    title: 'Building Data Infrastructure for Nigerian Enterprises',
    excerpt:
      'Technical guidance on establishing robust data ecosystems that address connectivity challenges, data sovereignty requirements, and scalability needs.',
    readTime: '10 min read',
    color: '#0E78AA',
  },
]

const whyInsightsItems = [
  {
    icon: BookOpen,
    title: 'Practitioner Perspectives',
    description:
      'Written by consultants actively delivering solutions in Nigerian markets, not theoretical researchers.',
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Analysis',
    description:
      'Backed by real-world data from Nigerian engagements, market research, and quantitative analysis.',
    color: '#F7AE57',
    accentBg: 'bg-[#F7AE57]/10',
  },
  {
    icon: CheckCircle2,
    title: 'Actionable Guidance',
    description:
      'Every insight includes practical recommendations organisations can apply immediately.',
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
  },
]

export function NigeriaInsightsPage() {
  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* ── Dark Hero Section ── */}
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
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0E78AA]/10 blur-[120px] -z-0" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80">
                <Lightbulb className="w-4 h-4 text-[#F7AE57]" />
                <span>Insights &amp; Resources</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Strategic Intelligence for{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Nigerian Business Transformation
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Nigerian organisations operate at the intersection of technological disruption
                and market evolution, where data, automation, and intelligent systems converge
                with traditional business operations. Bravinci Nigeria&apos;s thought leadership
                explores this convergence, providing actionable perspectives on enterprise
                systems, workforce dynamics, and spatial intelligence shaping competitive
                advantage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                  asChild
                >
                  <Link href="#insight-categories">
                    Explore Collections
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href="#newsletter">
                    <Bell className="w-4 h-4 mr-2" />
                    Subscribe to Updates
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Insight Categories ── */}
        <section
          id="insight-categories"
          data-section="insight-categories"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/5 via-background to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Featured </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Insight Collections
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep-dive analyses and strategic perspectives across critical business domains.
              </p>
            </FadeIn>

            <StaggerContainer className="grid lg:grid-cols-3 gap-8">
              {insightCategories.map((category) => {
                const Icon = category.icon
                return (
                  <StaggerItem key={category.title}>
                    <Link href={category.href} className="group block h-full">
                      <div className="h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                        <div
                          className={cn(
                            'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300',
                            category.accentBg
                          )}
                        >
                          <Icon className="w-8 h-8" style={{ color: category.color }} />
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                          {category.title}
                        </h3>

                        <p
                          className="text-sm font-semibold mb-4"
                          style={{ color: category.color }}
                        >
                          {category.subtitle}
                        </p>

                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                          {category.description}
                        </p>

                        <div
                          className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                          style={{ color: category.color }}
                        >
                          Explore Collection
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Featured Insights (CMS Placeholder) ── */}
        <section
          id="featured-insights"
          data-section="featured-insights"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/40 to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0E78AA]/20 bg-[#0E78AA]/5 text-sm font-medium text-[#0E78AA] mb-6">
                <FileText className="w-4 h-4" />
                <span>Latest Publications</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Recently </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Published
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our latest analyses, perspectives, and technical guidance for Nigerian enterprises.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredInsights.map((insight) => {
                const Icon = insight.icon
                return (
                  <StaggerItem key={insight.title}>
                    <div className="group h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${insight.color}15` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: insight.color }} />
                        </div>
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: insight.color }}
                        >
                          {insight.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors leading-snug">
                        {insight.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {insight.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-xs text-muted-foreground">{insight.readTime}</span>
                        <div
                          className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                          style={{ color: insight.color }}
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>

            <FadeIn className="text-center mt-12">
              <p className="text-sm text-muted-foreground italic">
                Content managed via CMS. Featured insights will update automatically.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── Why Our Insights Matter ── */}
        <section
          id="why-insights"
          data-section="why-insights"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Why Our </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Insights Matter
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Grounded in real Nigerian market experience and global best practices.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {whyInsightsItems.map((item) => {
                const Icon = item.icon
                return (
                  <StaggerItem key={item.title}>
                    <div className="text-center h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                      <div
                        className={cn(
                          'w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6',
                          item.accentBg
                        )}
                      >
                        <Icon className="w-8 h-8" style={{ color: item.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Newsletter Signup ── */}
        <section
          id="newsletter"
          data-section="newsletter"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0E78AA]/20" />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>
          {/* Glow */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#F7AE57]/8 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80 mb-6">
                  <Mail className="w-4 h-4 text-[#F7AE57]" />
                  <span>Stay Informed</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Subscribe to Our{' '}
                  <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                    Newsletter
                  </span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Receive curated insights, market analyses, and strategic perspectives
                  delivered directly to your inbox. Stay ahead of Nigerian market developments
                  with intelligence that matters.
                </p>
                <div className="space-y-3">
                  {[
                    'Monthly industry analysis and market intelligence',
                    'Early access to new research publications',
                    'Exclusive event invitations and webinar access',
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#F7AE57] shrink-0" />
                      <span className="text-slate-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn>
                <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                  <div className="space-y-4">
                    <div className="h-12 rounded-xl bg-white/5 border border-white/10" />
                    <div className="h-12 rounded-xl bg-white/5 border border-white/10" />
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#0E78AA] to-[#0E78AA]/80 text-white font-semibold shadow-lg hover:shadow-xl"
                      disabled
                    >
                      <Bell className="w-4 h-4 mr-2" />
                      Subscribe Now
                    </Button>
                    <p className="text-xs text-slate-400 text-center">
                      Newsletter signup powered by CMS integration
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section
          id="cta"
          data-section="cta"
          className="relative py-24 overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E78AA] via-[#0E78AA]/90 to-[#0a5a80]" />
          {/* Grid overlay */}
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
                <span>Let&apos;s Connect</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Explore Intelligence That Matters
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Discover actionable insights addressing your strategic challenges and
                operational opportunities. Our team is ready to discuss how our research
                can inform your decisions.
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
                  <Link href="/nigeria/services">Explore Our Services</Link>
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
