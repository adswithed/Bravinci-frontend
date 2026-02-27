'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  Clock,
} from 'lucide-react'
import { cn } from '@/shared/lib/utils'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'info@bravinci.com',
    link: 'mailto:info@bravinci.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+31 (0) 10 123 4567',
    link: 'tel:+31101234567',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon-Fri: 9:00 AM - 6:00 PM CET',
    link: null,
  },
]

const offices = [
  {
    city: 'Rotterdam',
    country: 'Netherlands',
    address: 'Wilhelminakade 173',
    postal: '3072 AP Rotterdam',
    isPrimary: true,
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    address: 'Strawinskylaan 3051',
    postal: '1077 ZX Amsterdam',
    isPrimary: false,
  },
]

export function GlobalContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <GlobalSiteWrapper>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
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
                <Mail className="w-4 h-4 text-[#0E78AA]" />
                <span>Contact Us</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Let's start a </span>
                <span className="gradient-text">conversation</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're exploring strategic challenges, considering a
                transformation initiative, or interested in joining our team, we'd
                like to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="glass-card p-8 md:p-12 rounded-3xl">
                  <h2 className="text-3xl font-bold mb-2">Send us a message</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl glass-card border border-border/50 focus:border-[#0E78AA] focus:outline-none focus:ring-2 focus:ring-[#0E78AA]/20 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl glass-card border border-border/50 focus:border-[#0E78AA] focus:outline-none focus:ring-2 focus:ring-[#0E78AA]/20 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass-card border border-border/50 focus:border-[#0E78AA] focus:outline-none focus:ring-2 focus:ring-[#0E78AA]/20 transition-all"
                        placeholder="Your company (optional)"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl glass-card border border-border/50 focus:border-[#0E78AA] focus:outline-none focus:ring-2 focus:ring-[#0E78AA]/20 transition-all resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#0E78AA] to-[#0E78AA]/90 hover:from-[#0E78AA]/90 hover:to-[#0E78AA]/80"
                    >
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <div
                      key={info.title}
                      className="glass-card p-6 rounded-2xl hover-lift transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-[#0E78AA]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-[#0E78AA] transition-colors"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.details}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Offices</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit us at one of our locations across the Netherlands
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="glass-card p-8 rounded-3xl hover-lift transition-all duration-500"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-8 h-8 text-[#0E78AA]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{office.city}</h3>
                      <p className="text-muted-foreground">{office.country}</p>
                      {office.isPrimary && (
                        <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-[#0E78AA]/10 text-[#0E78AA]">
                          Primary Office
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#0E78AA]" />
                      <div>
                        <p>{office.address}</p>
                        <p>{office.postal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how Bravinci can help you navigate complexity and
              achieve your strategic objectives.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            >
              Back to Top
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
