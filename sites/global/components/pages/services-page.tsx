/**
 * Global Services Listing Page
 *
 * Lists all services from WordPress CMS as cards that link to individual service pages.
 * Works like a blog listing - click a service card to view the full service page.
 * NO FALLBACKS - content must come from WordPress.
 */

import { globalSite } from '@/shared/config/sites/global'
import { getServices, CMSItem } from '@/shared/lib/wordpress'
import { getIcon } from '@/shared/lib/icons'
import { MegaMenu, Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'
import { Button } from '@/shared/components/ui/button'
import {
  ArrowRight,
  Award,
  Globe,
  TrendingUp,
  Compass,
} from 'lucide-react'
import Link from 'next/link'

// Transform WordPress service data for listing
interface Service {
  id: number
  title: string
  slug: string
  heroText: string
  description: string
  icon: string
  color: string
  href: string
}

function transformService(item: CMSItem): Service {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    heroText: (item.hero_text as string) || '',
    description: (item.description as string) || '',
    icon: (item.icon as string) || 'compass',
    color: (item.color as string) || '#0E78AA',
    href: `/services/${item.slug}`,
  }
}

// Server component - fetches data at build/request time
export async function GlobalServicesPage() {
  // Fetch services from WordPress - NO FALLBACK
  const rawServices = await getServices(globalSite)
  const services = rawServices.map(transformService)

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

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
                <Compass className="w-4 h-4 text-[#0E78AA]" />
                <span>Our Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Strategic Intelligence Services That </span>
                <span className="gradient-text">Drive Measurable Transformation</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Bravinci&apos;s service portfolio spans the complete intelligence lifecycle—from strategic
                planning and advisory to digital transformation and advanced analytics enablement.
                Each service is designed to address critical organizational challenges while building
                sustainable internal capability.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const ServiceIcon = getIcon(service.icon)
                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group block"
                  >
                    <div className="h-full p-8 rounded-3xl glass-card hover-lift transition-all duration-500">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${service.color}10` }}
                      >
                        <ServiceIcon className="w-8 h-8" style={{ color: service.color }} />
                      </div>

                      <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#0E78AA] transition-colors">
                        {service.title}
                      </h2>

                      <p className="text-sm text-muted-foreground italic mb-4">
                        {service.heroText}
                      </p>

                      <p className="text-muted-foreground mb-6 line-clamp-3">
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
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">The Bravinci </span>
                <span className="gradient-text">Difference</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our integrated approach ensures cohesive solutions that deliver compound value over time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-3xl glass-card">
                <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[#0E78AA]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">15+ Years Experience</h3>
                <p className="text-muted-foreground">
                  Driving strategic transformation across six continents with sustained partnerships and measurable outcomes.
                </p>
              </div>

              <div className="text-center p-8 rounded-3xl glass-card">
                <div className="w-16 h-16 rounded-2xl bg-[#F7AE57]/10 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-[#F7AE57]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Ecosystem Partners</h3>
                <p className="text-muted-foreground">
                  Strategic alliances with Microsoft, AWS, Odoo, Yellowfin, and Exasol ensure best-in-class technology.
                </p>
              </div>

              <div className="text-center p-8 rounded-3xl glass-card">
                <div className="w-16 h-16 rounded-2xl bg-[#0E78AA]/10 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-[#0E78AA]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">98% Client Satisfaction</h3>
                <p className="text-muted-foreground">
                  Our partnership model emphasizes knowledge transfer and sustainable capability building.
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
              Ready to Transform Intelligence into Action?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you need strategic direction, technology implementation, or data ecosystem
              transformation, let&apos;s discuss how our services can accelerate your most important objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/contact">
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
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
