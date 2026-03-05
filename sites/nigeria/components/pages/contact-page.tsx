'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/shared/components/ui/motion-wrapper'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import {
  MessageSquare,
  MapPin,
  Mail,
  Building2,
  ArrowRight,
  Server,
  Compass,
  BarChart3,
  Monitor,
  Phone,
  Clock,
  Send,
  FileText,
  Sparkles,
  Globe,
  CheckCircle2,
  Map,
} from 'lucide-react'

const offices = [
  {
    city: 'Lagos',
    label: 'Primary Office',
    description:
      'Our principal office in Nigeria\u2019s commercial capital, serving clients across Lagos, the South-West, and nationally.',
    isPrimary: true,
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
  },
  {
    city: 'Abuja',
    label: 'Federal Capital Office',
    description:
      'Strategically positioned in the Federal Capital Territory, supporting government and public sector engagements.',
    isPrimary: false,
    color: '#F7AE57',
    accentBg: 'bg-[#F7AE57]/10',
  },
]

const serviceInquiries = [
  {
    icon: Compass,
    title: 'Strategy & Advisory',
    description:
      'Business strategy, regulatory navigation, and transformation consulting for Nigerian enterprises.',
    href: '/nigeria/services/strategy-advisory',
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
  },
  {
    icon: Monitor,
    title: 'Digital Transformation',
    description:
      'End-to-end digital modernisation, technology implementation, and innovation solutions.',
    href: '/nigeria/services/digital-transformation',
    color: '#F7AE57',
    accentBg: 'bg-[#F7AE57]/10',
  },
  {
    icon: BarChart3,
    title: 'Data & AI',
    description:
      'Data intelligence, analytics platforms, and AI enablement for data-driven decision-making.',
    href: '/nigeria/services/data-ai',
    color: '#0E78AA',
    accentBg: 'bg-[#0E78AA]/10',
  },
  {
    icon: Server,
    title: 'Solutions',
    description:
      'Enterprise resource planning, Odoo ERP implementation, and managed technology solutions.',
    href: '/nigeria/solutions/odoo-erp',
    color: '#F7AE57',
    accentBg: 'bg-[#F7AE57]/10',
  },
]

const contactPromises = [
  {
    icon: Phone,
    label: 'Speak with an Expert',
    detail: 'Direct consultation with a specialist in your area of interest',
  },
  {
    icon: Clock,
    label: 'Quick Response',
    detail: 'We respond to all enquiries within one business day',
  },
  {
    icon: FileText,
    label: 'Tailored Proposals',
    detail: 'Receive a customised proposal addressing your specific needs',
  },
]

export function NigeriaContactPage() {
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
                <MessageSquare className="w-4 h-4 text-[#F7AE57]" />
                <span>Contact Us</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Get in Touch &{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Achieve Your Strategic Objectives
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Whether exploring ERP solutions, requiring strategic advisory, seeking data
                and analytics capabilities, or discussing specific operational challenges,
                Bravinci Nigeria is ready to help. Our teams across Lagos and Abuja combine
                global expertise with deep Nigerian market knowledge.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                  asChild
                >
                  <Link href="#contact-form">
                    Send an Enquiry
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href="mailto:nigeria@bravinci.com">
                    <Mail className="w-4 h-4 mr-2" />
                    nigeria@bravinci.com
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Quick Response Promise ── */}
        <section
          id="response-promise"
          data-section="response-promise"
          className="py-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/5 via-background to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {contactPromises.map((item) => {
                const Icon = item.icon
                return (
                  <StaggerItem key={item.label}>
                    <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg">
                      <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-[#0E78AA]" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Office Locations ── */}
        <section
          id="offices"
          data-section="offices"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/40 to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0E78AA]/20 bg-[#0E78AA]/5 text-sm font-medium text-[#0E78AA] mb-6">
                <Globe className="w-4 h-4" />
                <span>Our Presence</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Offices
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategically located across Nigeria&apos;s major commercial centres.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {offices.map((office) => (
                <StaggerItem key={office.city}>
                  <div
                    className={cn(
                      'group h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500',
                      office.isPrimary && 'ring-2 ring-[#0E78AA]/20'
                    )}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={cn(
                          'w-14 h-14 rounded-2xl flex items-center justify-center shrink-0',
                          office.accentBg
                        )}
                      >
                        <Building2 className="w-7 h-7" style={{ color: office.color }} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {office.city}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: office.color }}>
                          {office.label}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {office.description}
                    </p>

                    {office.isPrimary && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0E78AA]/10 text-xs font-semibold text-[#0E78AA]">
                        <MapPin className="w-3.5 h-3.5" />
                        Primary Office
                      </span>
                    )}
                  </div>
                </StaggerItem>
              ))}

              {/* Email Contact Card */}
              <StaggerItem>
                <div className="group h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center shrink-0">
                      <Mail className="w-7 h-7 text-[#F7AE57]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Email</h3>
                      <p className="text-sm font-medium text-[#F7AE57]">General Enquiries</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Reach our team directly for general enquiries, partnership opportunities,
                    or service-specific questions.
                  </p>
                  <a
                    href="mailto:nigeria@bravinci.com"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E78AA] hover:text-[#0E78AA]/80 hover:gap-3 transition-all"
                  >
                    nigeria@bravinci.com
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </StaggerItem>

              {/* Phone Contact Card */}
              <StaggerItem>
                <div className="group h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-7 h-7 text-[#0E78AA]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Phone</h3>
                      <p className="text-sm font-medium text-[#0E78AA]">Direct Line</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Speak with a member of our team during business hours,
                    Monday to Friday, 9:00 AM - 6:00 PM WAT.
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    Mon - Fri, 9:00 AM - 6:00 PM WAT
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* ── Service Inquiry Cards ── */}
        <section
          id="service-inquiries"
          data-section="service-inquiries"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F7AE57]/20 bg-[#F7AE57]/5 text-sm font-medium text-[#F7AE57] mb-6">
                <Compass className="w-4 h-4" />
                <span>Service Areas</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">How Can We </span>
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Help?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select the area most relevant to your needs to learn more before reaching out.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceInquiries.map((service) => {
                const Icon = service.icon
                return (
                  <StaggerItem key={service.title}>
                    <Link href={service.href} className="group block h-full">
                      <div className="h-full p-6 rounded-2xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                        <div
                          className={cn(
                            'w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300',
                            service.accentBg
                          )}
                        >
                          <Icon className="w-7 h-7" style={{ color: service.color }} />
                        </div>

                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        <div
                          className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                          style={{ color: service.color }}
                        >
                          Learn More
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

        {/* ── Contact Form Section ── */}
        <section
          id="contact-form"
          data-section="contact-form"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/40 to-background" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Send Us a </span>
                  <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Share your requirements and our team will respond within one business day
                  with tailored guidance and next steps.
                </p>

                <div className="space-y-5">
                  {contactPromises.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[#0E78AA]" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{item.label}</p>
                          <p className="text-sm text-muted-foreground">{item.detail}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#0E78AA]/5 to-[#F7AE57]/5 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0E78AA]" />
                    <span className="font-semibold text-foreground text-sm">Our Commitment</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every enquiry receives personal attention from a qualified consultant.
                    We don&apos;t use automated responses -- a real member of our team will
                    review your requirements and provide meaningful guidance.
                  </p>
                </div>
              </FadeIn>

              {/* Form Placeholder */}
              <FadeIn>
                <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-lg">
                  <div className="text-center py-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-[#0E78AA]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Contact Form
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                      This form will be dynamically loaded from the CMS.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-12 rounded-xl bg-muted/30 border border-white/10" />
                      <div className="h-12 rounded-xl bg-muted/30 border border-white/10" />
                    </div>
                    <div className="h-12 rounded-xl bg-muted/30 border border-white/10" />
                    <div className="h-12 rounded-xl bg-muted/30 border border-white/10" />
                    <div className="h-12 rounded-xl bg-muted/30 border border-white/10" />
                    <div className="h-28 rounded-xl bg-muted/30 border border-white/10" />
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#0E78AA] to-[#0E78AA]/80 text-white font-semibold shadow-lg"
                      disabled
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Enquiry
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Form powered by CMS integration
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Map Placeholder ── */}
        <section
          id="map"
          data-section="map"
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

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Find{' '}
                <span className="bg-gradient-to-r from-[#0E78AA] to-[#F7AE57] bg-clip-text text-transparent">
                  Us
                </span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Visit our offices across Nigeria&apos;s key commercial centres.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="h-80 md:h-96 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <Map className="w-8 h-8 text-[#F7AE57]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Interactive Map</h3>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto">
                    Map integration will display our Lagos and Abuja office locations.
                    Powered by CMS configuration.
                  </p>
                </div>
              </div>
            </FadeIn>
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
                <span>Get Started</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Schedule a Consultation
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Connect with our team to discuss how Bravinci Nigeria can help transform
                your organisation&apos;s operations, strategy, and technology capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                  asChild
                >
                  <Link href="mailto:nigeria@bravinci.com">
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
