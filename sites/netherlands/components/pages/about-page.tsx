/**
 * Netherlands About Page
 */

'use client'

import { useEffect, useState } from 'react'
import { MegaMenu } from '@/shared/components'
import { Footer } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  Globe,
  Award,
  Users,
  Target,
  CheckCircle2,
  Building2,
  MapPin,
  Calendar,
  Shield,
  ArrowRight,
  Briefcase,
  Monitor,
  GraduationCap
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

export function NetherlandsAboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E78AA]/5 via-background to-background" />
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
                  <Building2 className="w-4 h-4 text-[#0E78AA]" />
                  <span>About Bravinci Netherlands</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">100 years of global expertise, </span>
                  <span className="gradient-text">delivered with precision</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bravinci Netherlands is the Dutch operating practice of Bravinci Global, established to bring the firm&apos;s ten decades of strategic intelligence and digital transformation expertise to organisations operating in the Netherlands and the wider Benelux region. We combine the institutional knowledge, proprietary methodologies, and global delivery capability of a world-class advisory firm with the local understanding, regulatory familiarity, and cultural fluency that effective Netherlands-based client work demands.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/netherlands/contact">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0E78AA]/30 hover:border-[#0E78AA]"
                    asChild
                  >
                    <Link href="/netherlands/services">Our Services</Link>
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
                      <Calendar className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">100+</p>
                      <p className="text-sm text-muted-foreground">Years Global Expertise</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <MapPin className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">Benelux</p>
                      <p className="text-sm text-muted-foreground">Focus</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F7AE57]/10 text-center">
                      <Shield className="w-8 h-8 text-[#F7AE57] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">ISO 27001</p>
                      <p className="text-sm text-muted-foreground">Certified</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#0E78AA]/10 text-center">
                      <Award className="w-8 h-8 text-[#0E78AA] mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">SCIP ICoE</p>
                      <p className="text-sm text-muted-foreground">Benelux</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section id="introduction" data-section="introduction" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-3xl glass-card border-l-4 border-[#0E78AA]">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bravinci Netherlands is the Dutch operating practice of Bravinci Global, established to bring the firm&apos;s ten decades of strategic intelligence and digital transformation expertise to organisations operating in the Netherlands and the wider Benelux region. We combine the institutional knowledge, proprietary methodologies, and global delivery capability of a world-class advisory firm with the local understanding, regulatory familiarity, and cultural fluency that effective Netherlands-based client work demands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="what-we-do" data-section="what-we-do" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">What </span>
                <span className="gradient-text">We Do</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-3xl glass-card hover-lift transition-all duration-500">
                <p className="text-muted-foreground leading-relaxed">
                  Our Consulting practice addresses the strategic and operational challenges that prevent organisations from achieving their full potential. Our Solutions practice deploys proprietary platforms, Dividos and the Strategic Command Centre, that embed data intelligence directly into client operations. Our Education and Secondment practices build internal capability, ensuring that transformation outcomes endure well beyond initial engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment to the Dutch Market */}
        <section id="commitment" data-section="commitment" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl glass-card border border-[#0E78AA]/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E78AA]/10 text-sm font-medium text-[#0E78AA] mb-4">
                    <Target className="w-4 h-4" />
                    <span>Dutch Market Commitment</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Our Commitment to the Dutch Market
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Netherlands operates at the heart of European commerce, innovation, and regulatory leadership. Dutch organisations face a distinctive combination of challenges: European compliance obligations that demand rigorous governance, global competitive pressures that require continuous operational efficiency, and a talent market that places a premium value on sophisticated working environments. Bravinci Netherlands was established specifically to address this environment, and every aspect of our practice reflects that commitment.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'European compliance obligations addressed with rigorous governance',
                    'Global competitive pressures met with continuous operational efficiency',
                    'Sophisticated working environments for the Dutch talent market',
                    'Every aspect of our practice reflects our Dutch market commitment',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-[#0E78AA] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learn More CTA */}
        <section id="learn-more" data-section="learn-more" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Learn More About Our Approach
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Explore how the Bravinci Netherlands Method delivers sustainable transformation outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0E78AA] hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <Link href="/netherlands/about/approach">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
