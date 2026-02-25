'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/components/mega-menu'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  Users,
  Handshake,
  Heart,
  MapPin,
  Building
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useSite } from '@/lib/site-context'

const regions = [
  {
    name: 'Netherlands',
    description: 'Our headquarters in Beesd, serving the Benelux region.',
    href: '/netherlands',
    active: true
  },
  {
    name: 'Nigeria',
    description: 'Expanding intelligence solutions across West Africa.',
    href: '/nigeria',
    active: true
  },
  {
    name: 'Surinam',
    description: 'Serving South American markets with local expertise.',
    href: '/surinam',
    active: true
  },
  {
    name: 'More Regions',
    description: 'Coming soon to Romania, Morocco, France, and beyond.',
    href: '#',
    active: false
  }
]

const benefits = [
  {
    title: 'Global Network',
    description: 'Access to a worldwide network of intelligence professionals and local experts.',
    icon: Globe
  },
  {
    title: 'Local Expertise',
    description: 'Deep understanding of regional markets, cultures, and business practices.',
    icon: MapPin
  },
  {
    title: 'Shared Knowledge',
    description: 'Cross-border collaboration and knowledge sharing across all Bravinci entities.',
    icon: Users
  },
  {
    title: 'United Standards',
    description: 'Consistent quality and methodology across all regional operations.',
    icon: CheckCircle2
  }
]

const partnershipTypes = [
  'Regional Franchise Opportunities',
  'Strategic Partnerships',
  'Reseller Agreements',
  'Technology Licensing',
  'Consulting Collaborations',
  'Training Partnerships'
]

export default function BravinciUnitedPage() {
  const { basePath } = useSite()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[#0E78AA]/5" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={cn(
                  'space-y-6 transition-all duration-700',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                )}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
                  <Globe className="w-4 h-4 text-[#0E78AA]" />
                  <span>Global Alliance</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text">Bravinci United</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  One global family of intelligence professionals, united by shared values
                  and a common mission to democratize enterprise intelligence solutions
                  across the world.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href={`${basePath}/contact`}>
                      Partner With Us
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                    asChild
                  >
                    <Link href={`${basePath}/about`}>Learn More</Link>
                  </Button>
                </div>
              </div>

              <div
                className={cn(
                  'relative transition-all duration-700 delay-200',
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                )}
              >
                <div className="relative p-8 rounded-3xl glass-card">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Globe className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">3+</p>
                      <p className="text-sm text-muted-foreground">Active Regions</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Users className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">100+</p>
                      <p className="text-sm text-muted-foreground">Years Experience</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Handshake className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">Shared</p>
                      <p className="text-sm text-muted-foreground">Ownership Model</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Heart className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">United</p>
                      <p className="text-sm text-muted-foreground">By Values</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Our Global </span>
                <span className="gradient-text">Presence</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Bravinci United operates across multiple regions, each with local expertise
                and a deep understanding of regional markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regions.map((region, index) => (
                <div
                  key={region.name}
                  className={cn(
                    'group p-6 rounded-2xl glass-card transition-all duration-500',
                    region.active ? 'hover-lift' : 'opacity-60'
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-[#0E78AA]" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-[#0E78AA] transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {region.description}
                  </p>
                  {region.active && (
                    <Link
                      href={region.href}
                      className="inline-flex items-center text-sm font-medium text-[#0E78AA] hover:underline"
                    >
                      Visit Site
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">United </span>
                <span className="gradient-text">Benefits</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Why being part of Bravinci United creates value for clients and partners alike.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.title}
                    className="group p-6 rounded-2xl glass-card hover-lift transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#F7AE57]" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-[#F7AE57] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-20 relative overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-foreground">Become a </span>
                  <span className="gradient-text">Partner</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join the Bravinci United network and bring world-class intelligence
                  solutions to your region. We offer various partnership models to
                  suit your business goals.
                </p>
                <ul className="space-y-3 mb-8">
                  {partnershipTypes.map((type, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="gradient-bg text-white font-semibold"
                  asChild
                >
                  <Link href={`${basePath}/contact`}>
                    Explore Partnerships
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="p-8 rounded-3xl glass-card border border-[#0E78AA]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0E78AA]/10 flex items-center justify-center">
                    <Building className="w-6 h-6 text-[#0E78AA]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Social Enterprise Model</h3>
                    <p className="text-sm text-muted-foreground">Shared success philosophy</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bravinci operates as a social enterprise with a shared ownership model.
                  This promotes profound commitment among all partners and enhances the
                  quality of our international collaborations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When you join Bravinci United, you become part of something bigger
                  than a traditional business relationship—you become family.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Bravinci Family
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you're looking to partner with us or bring Bravinci to your region,
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href={`${basePath}/contact`}>
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
                <Link href={`${basePath}/about`}>Learn About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
