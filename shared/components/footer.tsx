'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@/shared/components/ui/separator'
import {
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Globe
} from 'lucide-react'
import { TextHoverEffect } from '@/shared/components/ui/hover-footer'
import { useSite } from '@/shared/lib/site-context'

// Default footer links (can be overridden by WordPress)
const defaultFooterLinks = {
  solutions: [
    { name: 'Dividos', href: '/solutions/dividos' },
    { name: 'Data2Hire', href: '/solutions/data2hire' },
    { name: 'Strategy Command Center', href: '/solutions/strategy-command-center' },
    { name: 'Masterclass', href: '/solutions/masterclass' },
  ],
  services: [
    { name: 'Strategy & Advisory', href: '/services/strategy-advisory' },
    { name: 'Digital Transformation', href: '/services/digital-transformation' },
    { name: 'Data & AI Enablement', href: '/services/data-ai' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/about/leadership' },
    { name: 'Bravinci Code', href: '/bravinci-code' },
    { name: 'Careers', href: '/career' },
    { name: 'Contact', href: '/contact' },
  ],
  insights: [
    { name: 'Strategic Intelligence', href: '/insights/strategic-intelligence' },
    { name: 'Artificial Intelligence', href: '/insights/artificial-intelligence' },
    { name: 'Business Intelligence', href: '/insights/business-intelligence' },
    { name: 'ESG', href: '/insights/esg' },
  ],
}

// Icon mapping for social links
const socialIcons: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  facebook: Facebook,
  instagram: Instagram,
}

export function Footer() {
  const { site, basePath } = useSite()
  const currentYear = new Date().getFullYear()

  // Get footer links (from site config or default)
  const footerLinks = site.footerLinks || defaultFooterLinks

  // Build social links from site config
  const socialLinks = Object.entries(site.social)
    .filter(([_, url]) => url)
    .map(([platform, url]) => ({
      name: platform.charAt(0).toUpperCase() + platform.slice(1),
      icon: socialIcons[platform] || Globe,
      href: url as string,
    }))

  // Helper to add base path to relative URLs
  const getHref = (href: string) => {
    if (href.startsWith('http') || href.startsWith('#')) {
      return href
    }
    return `${basePath}${href}`
  }

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 grid gap-12 lg:grid-cols-6">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <Link href={basePath || '/'} className="inline-block group">
              <Image
                src="/logo.png"
                alt="Bravinci"
                width={150}
                height={45}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>

            <p className="text-slate-400 leading-relaxed">
              {site.seo.defaultDescription}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-[#0E78AA] shrink-0" />
                <span>{site.contact.address}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-[#0E78AA] shrink-0" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-white transition-colors">
                  {site.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-[#0E78AA] shrink-0" />
                <a href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white transition-colors">
                  {site.contact.phone}
                </a>
              </div>
            </div>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-slate-800 hover:bg-[#0E78AA] transition-colors group"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Solutions */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={getHref(link.href)}
                      className="text-sm text-slate-400 hover:text-[#F7AE57] transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={getHref(link.href)}
                      className="text-sm text-slate-400 hover:text-[#F7AE57] transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={getHref(link.href)}
                      className="text-sm text-slate-400 hover:text-[#F7AE57] transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insights */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Insights</h4>
              <ul className="space-y-3">
                {(footerLinks.insights || []).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={getHref(link.href)}
                      className="text-sm text-slate-400 hover:text-[#F7AE57] transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-xs font-bold text-[#0E78AA]">ISO</span>
              </div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-xs font-bold text-[#F7AE57]">SCIP</span>
              </div>
              <span>SCIP ICoE Benelux Host</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-slate-600" />
              <span>{site.name}</span>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800" />

        {/* Large Company Name with Hover Effect */}
        <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 flex items-center justify-center">
          <div className="w-full max-w-4xl h-[10rem] md:h-[12rem] lg:h-[14rem]">
            <TextHoverEffect text="BRAVINCI." className="z-10" />
          </div>
        </div>

        <Separator className="bg-slate-800" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-500">
            <p>© {currentYear} Bravinci. All rights reserved.</p>
            {site.contact.vatId && (
              <>
                <span className="hidden md:inline">•</span>
                <p>VAT ID: {site.contact.vatId}</p>
              </>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href={getHref('/privacy')} className="text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href={getHref('/terms')} className="text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
