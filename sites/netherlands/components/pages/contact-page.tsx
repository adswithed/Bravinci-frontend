'use client'

import { useEffect, useState } from 'react'
import { MegaMenu, Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
  Send,
  MessageSquare,
  User,
  Briefcase,
  FileText,
  Map,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

export function NetherlandsContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="contact-hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E78AA]/5 via-background to-background" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                'max-w-3xl mx-auto text-center space-y-6 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                <MessageSquare className="w-4 h-4 text-[#0E78AA]" />
                <span>Get in Touch</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Let&apos;s discuss how we can help </span>
                <span className="gradient-text">achieve your strategic objectives</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Bravinci Netherlands welcomes conversations with organisations at any stage of their transformation journey, whether clarifying a strategic challenge, exploring specific service capabilities, or preparing a formal engagement proposal. Our Netherlands practice is accessible through our Beesd office, and our team is committed to responding substantively to every serious enquiry.
              </p>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section id="contact-office" data-section="office" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="p-8 rounded-3xl glass-card border border-[#0E78AA]/20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E78AA]/10 text-sm font-medium text-[#0E78AA] mb-6">
                  <Building2 className="w-4 h-4" />
                  <span>Netherlands Headquarters</span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#0E78AA]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Address</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Bravinci Netherlands<br />
                        Homburg 19-G<br />
                        4153 BS Beesd, Netherlands
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#0E78AA]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Phone</p>
                      <a
                        href="tel:+31850606074"
                        className="text-muted-foreground text-sm hover:text-[#0E78AA] transition-colors"
                      >
                        +31 (0)85-0606074
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#F7AE57]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <a
                        href="mailto:netherlands@bravinci.com"
                        className="text-muted-foreground text-sm hover:text-[#0E78AA] transition-colors"
                      >
                        netherlands@bravinci.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F7AE57]/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#F7AE57]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Office Hours</p>
                      <p className="text-muted-foreground text-sm">
                        Monday &ndash; Friday: 08:30 &ndash; 17:30 CET
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" data-section="contact-form" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-foreground">Send Us a </span>
                  <span className="gradient-text">Message</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Fill out the form below and a member of our team will respond within one business day.
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-3xl glass-card">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Your full name"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0E78AA]/50 focus:border-[#0E78AA] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="your@email.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0E78AA]/50 focus:border-[#0E78AA] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Company
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          id="contact-company"
                          type="text"
                          placeholder="Your organisation"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0E78AA]/50 focus:border-[#0E78AA] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="+31 (0) ..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0E78AA]/50 focus:border-[#0E78AA] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="What is your enquiry about?"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0E78AA]/50 focus:border-[#0E78AA] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us about your project or enquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0E78AA]/50 focus:border-[#0E78AA] transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section id="contact-map" data-section="map" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Location</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find us in Beesd, Gelderland, centrally located in the Netherlands.
              </p>
            </div>

            <div className="rounded-3xl glass-card overflow-hidden">
              <div className="h-80 bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-4">
                    <Map className="w-8 h-8 text-[#0E78AA]" />
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-2">Map</p>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Bravinci Netherlands &mdash; Homburg 19-G, 4153 BS Beesd, Netherlands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact-cta" data-section="cta" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start a Conversation?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you are looking to transform your organisation&apos;s strategic capabilities or explore partnership opportunities, Bravinci Netherlands is here to help you take the next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/netherlands/services">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/netherlands/about">About Bravinci</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
