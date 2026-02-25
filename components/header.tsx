'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSite } from '@/lib/site-context'

export function Header() {
  const { site, navigation, basePath } = useSite()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOnHero, setIsOnHero] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Observe hero section to determine if header should be transparent with white text
  useEffect(() => {
    const heroElement = document.querySelector('section')
    if (!heroElement) {
      setIsOnHero(false)
      return
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsOnHero(entry.isIntersecting && entry.intersectionRatio > 0.1)
      },
      { threshold: [0, 0.1, 0.5, 1], rootMargin: '-80px 0px 0px 0px' }
    )

    observerRef.current.observe(heroElement)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Determine if we should use light text (only on global site's dark hero)
  // Country sites have light-colored hero backgrounds, so they need dark text
  const isGlobalSite = site.slug === 'global'
  const useLightText = !isScrolled && isOnHero && isGlobalSite

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown(mobileDropdown === name ? null : name)
  }

  // Get display name for site selector
  const siteDisplayName = site.name.replace('Bravinci ', '')

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-nav shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={basePath || '/'} className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Bravinci"
              width={140}
              height={40}
              className={cn(
                'h-8 w-auto transition-all duration-300',
                useLightText ? 'brightness-0 invert' : ''
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    'flex items-center gap-1',
                    useLightText
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-foreground/80 hover:text-foreground hover:bg-foreground/5'
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      activeDropdown === item.name && 'rotate-180'
                    )} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 w-56 animate-fade-in">
                    <div className="glass-card rounded-xl p-2 shadow-xl">
                      {item.children.map((child) => (
                        item.name === 'Countries' ? (
                          <a
                            key={child.name}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
                          >
                            {child.name}
                          </a>
                        ) : (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
                          >
                            {child.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Site/Region Selector */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                'gap-2 transition-colors',
                useLightText ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-foreground/70'
              )}
            >
              <Globe className="w-4 h-4" />
              <span>{siteDisplayName}</span>
            </Button>

            {/* CTA Button */}
            <Button
              className={cn(
                'font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105',
                useLightText
                  ? 'bg-white text-[#0E78AA] hover:bg-white/90'
                  : 'bg-[#0E78AA] hover:bg-[#0a5a80] text-white'
              )}
              asChild
            >
              <Link href={`${basePath}/contact`}>Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              useLightText ? 'hover:bg-white/10 text-white' : 'hover:bg-foreground/5'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            'lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300',
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu - Glassmorphic Design */}
        <div
          className={cn(
            'lg:hidden fixed top-4 right-4 left-4 bottom-4 z-50 transform transition-all duration-300 ease-out',
            isMobileMenuOpen
              ? 'opacity-100 scale-100 pointer-events-auto'
              : 'opacity-0 scale-95 pointer-events-none'
          )}
        >
          <div className="h-full glass-card rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              {/* Logo */}
              <Link
                href={basePath || '/'}
                className="flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image
                  src="/logo.png"
                  alt="Bravinci"
                  width={120}
                  height={35}
                  className="h-7 w-auto"
                />
              </Link>
              {/* Close Button */}
              <button
                className="p-2.5 rounded-xl glass-card border border-white/10 hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      {/* Parent item with dropdown */}
                      <button
                        className={cn(
                          'w-full flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200',
                          mobileDropdown === item.name
                            ? 'bg-[#0E78AA]/10 text-[#0E78AA]'
                            : 'text-foreground/80 hover:text-foreground hover:bg-white/5'
                        )}
                        onClick={() => toggleMobileDropdown(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 transition-transform duration-300',
                            mobileDropdown === item.name && 'rotate-180'
                          )}
                        />
                      </button>
                      {/* Dropdown children */}
                      <div
                        className={cn(
                          'overflow-hidden transition-all duration-300 ease-in-out',
                          mobileDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        )}
                      >
                        <div className="ml-4 mt-1 mb-2 pl-4 border-l-2 border-[#0E78AA]/30 space-y-1">
                          {item.name !== 'Countries' && (
                            <Link
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-[#0E78AA] font-medium hover:bg-[#0E78AA]/10 rounded-lg transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              View All {item.name}
                            </Link>
                          )}
                          {item.children.map((child) => (
                            item.name === 'Countries' ? (
                              <a
                                key={child.name}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.name}
                              </a>
                            ) : (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3.5 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-xl transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-white/10">
              <Button
                className="w-full bg-[#0E78AA] hover:bg-[#0a5a80] text-white font-semibold rounded-xl py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
                asChild
              >
                <Link href={`${basePath}/contact`}>Get Started</Link>
              </Button>
              <p className="text-center text-xs text-foreground/50 mt-3">
                {site.tagline}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
