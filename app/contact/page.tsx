'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { GlobalSiteWrapper } from '@/components/global-site-wrapper'
import { Button } from '@/components/ui/button'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Globe,
  Building,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const contactInfo = [
  {
    title: 'Email',
    value: 'office@bravinci.com',
    href: 'mailto:office@bravinci.com',
    icon: Mail,
    color: '#0E78AA'
  },
  {
    title: 'Phone',
    value: '+31 (0)85-0606074',
    href: 'tel:+31850606074',
    icon: Phone,
    color: '#F7AE57'
  },
  {
    title: 'Address',
    value: 'Homburg 19-G, 4153 BS Beesd, Netherlands',
    href: 'https://maps.google.com/?q=Homburg+19-G+4153+BS+Beesd+Netherlands',
    icon: MapPin,
    color: '#0E78AA'
  },
  {
    title: 'Business Hours',
    value: 'Monday - Friday, 8:00 AM - 6:00 PM',
    href: null,
    icon: Clock,
    color: '#F7AE57'
  }
]

const services = [
  'Strategic Consulting',
  'Business Intelligence',
  'AI Solutions',
  'Training & Education',
  'Managed Services',
  'Secondment',
  'Strategy Command Center',
  'Dividos Platform',
  'Other'
]

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - in a real app, this would send to a backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you within 24 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <GlobalSiteWrapper>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[#0E78AA]/5" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div
                className={cn(
                  'transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
                  <MessageSquare className="w-4 h-4 text-[#0E78AA]" />
                  <span>Get in Touch</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-foreground">Let's Start a </span>
                  <span className="gradient-text">Conversation</span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Ready to transform your organization's intelligence capabilities?
                  We'd love to hear from you. Reach out and let's discuss how we can help.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div
                className={cn(
                  'transition-all duration-700',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                )}
              >
                <div className="p-8 rounded-3xl glass-card">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-[#0E78AA] focus:ring-1 focus:ring-[#0E78AA] outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-[#0E78AA] focus:ring-1 focus:ring-[#0E78AA] outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-[#0E78AA] focus:ring-1 focus:ring-[#0E78AA] outline-none transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-[#0E78AA] focus:ring-1 focus:ring-[#0E78AA] outline-none transition-colors"
                          placeholder="+31 6 12345678"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-[#0E78AA] focus:ring-1 focus:ring-[#0E78AA] outline-none transition-colors"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-[#0E78AA] focus:ring-1 focus:ring-[#0E78AA] outline-none transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We typically respond within 24 hours during business days.
                    </p>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div
                className={cn(
                  'space-y-6 transition-all duration-700 delay-200',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                )}
              >
                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    const content = (
                      <div className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: `${info.color}15` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: info.color }} />
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    )

                    if (info.href) {
                      return (
                        <a key={info.title} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                          {content}
                        </a>
                      )
                    }

                    return <div key={info.title}>{content}</div>
                  })}
                </div>

                {/* Map Placeholder */}
                <div className="p-6 rounded-2xl glass-card">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-5 h-5 text-[#0E78AA]" />
                    <h3 className="font-semibold text-foreground">Our Location</h3>
                  </div>
                  <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-[#0E78AA]/30 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Homburg 19-G<br />
                        4153 BS Beesd<br />
                        Netherlands
                      </p>
                      <a
                        href="https://maps.google.com/?q=Homburg+19-G+4153+BS+Beesd+Netherlands"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[#0E78AA] hover:underline mt-2"
                      >
                        View on Google Maps
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="p-6 rounded-2xl glass-card">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="w-5 h-5 text-[#F7AE57]" />
                    <h3 className="font-semibold text-foreground">Company Information</h3>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="font-medium text-foreground">Company:</span> Bravinci</p>
                    <p><span className="font-medium text-foreground">KvK:</span> 77928822</p>
                    <p><span className="font-medium text-foreground">VAT ID:</span> 861202739B01</p>
                    <p><span className="font-medium text-foreground">Certification:</span> ISO 27001</p>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="p-6 rounded-2xl border border-[#0E78AA]/20 bg-[#0E78AA]/5">
                  <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/about" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#0E78AA] transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#0E78AA]" />
                      About Us
                    </Link>
                    <Link href="/services" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#0E78AA] transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#0E78AA]" />
                      Our Services
                    </Link>
                    <Link href="/solutions" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#0E78AA] transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#0E78AA]" />
                      Solutions
                    </Link>
                    <Link href="/career" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#0E78AA] transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#0E78AA]" />
                      Careers
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Frequently Asked </span>
                <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How quickly can you respond to inquiries?',
                  a: 'We typically respond within 24 hours during business days. For urgent matters, please call us directly.'
                },
                {
                  q: 'Do you offer remote consultations?',
                  a: 'Yes, we offer both in-person and remote consultations to accommodate clients worldwide.'
                },
                {
                  q: 'What industries do you serve?',
                  a: 'We work across various industries including finance, technology, healthcare, manufacturing, and public sector organizations.'
                },
                {
                  q: 'Is there a minimum project size?',
                  a: 'We work with organizations of all sizes. Contact us to discuss your specific needs and we\'ll find the right solution for you.'
                }
              ].map((faq, index) => (
                <div key={index} className="p-6 rounded-2xl glass-card">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
