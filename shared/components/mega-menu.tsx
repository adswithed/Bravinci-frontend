'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight, Globe, ArrowRight } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { useSite } from '@/shared/lib/site-context'
import { getNavigation, getSimpleNavigation, NavigationItemMega } from '@/shared/config/navigation'
import { getCountriesNavigation } from '@/shared/config/sites'
import { Button } from '@/shared/components/ui/button'

export function MegaMenu() {
  const { site, basePath } = useSite()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOnHero, setIsOnHero] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const navigation = getNavigation(site.slug)
  const simpleNavigation = getSimpleNavigation(site.slug)
  const countries = getCountriesNavigation(site.slug)

  const isGlobalSite = site.slug === 'global'
  const isHomePage = pathname === '/' || pathname === ''

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hero section observer
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

  const useLightText = !isScrolled && isOnHero && isGlobalSite && isHomePage

  const handleMenuEnter = useCallback((menuName: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    setActiveMenu(menuName)
  }, [])

  const handleMenuLeave = useCallback(() => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }, [])

  const siteDisplayName = site.name.replace('Bravinci ', '')

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass-nav shadow-lg py-2' : 'bg-transparent py-3 mt-2'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={basePath || '/'} className="flex items-center gap-2 group relative z-10">
              <Image
                src={useLightText ? '/logo-white.svg' : '/logo.svg'}
                alt="Bravinci"
                width={120}
                height={35}
                className={cn(
                  'transition-all duration-300 w-auto',
                  isScrolled ? 'h-7' : 'h-8'
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
                  onMouseEnter={() => handleMenuEnter(item.name)}
                  onMouseLeave={handleMenuLeave}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      'flex items-center gap-1',
                      useLightText
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-foreground/80 hover:text-foreground hover:bg-foreground/5',
                      activeMenu === item.name && (useLightText ? 'bg-white/10 text-white' : 'bg-foreground/5 text-foreground')
                    )}
                  >
                    {item.name}
                    {item.megaMenu && (
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          activeMenu === item.name && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>
                </div>
              ))}

              {/* Countries dropdown */}
              {countries.length > 0 && (
                <div
                  className="relative"
                  onMouseEnter={() => handleMenuEnter('countries')}
                  onMouseLeave={handleMenuLeave}
                >
                  <button
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      'flex items-center gap-1',
                      useLightText
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-foreground/80 hover:text-foreground hover:bg-foreground/5'
                    )}
                  >
                    <Globe className="w-4 h-4" />
                    {siteDisplayName}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        activeMenu === 'countries' && 'rotate-180'
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {activeMenu === 'countries' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 pt-2 w-48"
                      >
                        <div className="mega-menu-panel rounded-xl p-2 shadow-2xl">
                          {countries.map((country) => (
                            <Link
                              key={country.slug}
                              href={country.href}
                              className="flex items-center gap-3 px-3 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
                            >
                              <Globe className="w-4 h-4 text-[#0E78AA]" />
                              {country.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
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
                'lg:hidden p-2 rounded-lg transition-colors z-10',
                useLightText ? 'hover:bg-white/10 text-white' : 'hover:bg-foreground/5'
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mega Menu Panels */}
        <AnimatePresence>
          {activeMenu && navigation.find((n) => n.name === activeMenu)?.megaMenu && (
            <MegaMenuPanel
              item={navigation.find((n) => n.name === activeMenu)!}
              onMouseEnter={() => handleMenuEnter(activeMenu)}
              onMouseLeave={handleMenuLeave}
            />
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={simpleNavigation}
        countries={countries}
        basePath={basePath}
        siteTagline={site.tagline}
        expanded={mobileExpanded}
        setExpanded={setMobileExpanded}
      />
    </>
  )
}

// Mega Menu Panel Component
function MegaMenuPanel({
  item,
  onMouseEnter,
  onMouseLeave,
}: {
  item: NavigationItemMega
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  if (!item.megaMenu) return null

  const { columns, featured } = item.megaMenu

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute left-0 right-0 top-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="mega-menu-panel rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex">
            {/* Menu Columns */}
            <div className={cn('flex-1 p-6', featured ? 'border-r border-border/50' : '')}>
              <div className={cn(
                'grid gap-6',
                columns.length === 3 ? 'grid-cols-3' : columns.length === 2 ? 'grid-cols-2' : 'grid-cols-1'
              )}>
                {columns.map((column, colIdx) => (
                  <div key={colIdx} className="space-y-6">
                    {column.sections.map((section, secIdx) => (
                      <div key={secIdx}>
                        {section.title && (
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-3">
                            {section.title}
                          </h3>
                        )}
                        <div className="space-y-1">
                          {section.items.map((menuItem) => (
                            <Link
                              key={menuItem.name}
                              href={menuItem.href}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-foreground/5 transition-all duration-200"
                            >
                              {menuItem.icon && (
                                <div className={cn(
                                  'flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors',
                                  menuItem.featured
                                    ? 'bg-[#0E78AA]/10 text-[#0E78AA] group-hover:bg-[#0E78AA] group-hover:text-white'
                                    : 'bg-muted text-muted-foreground group-hover:bg-[#0E78AA]/10 group-hover:text-[#0E78AA]'
                                )}>
                                  <menuItem.icon className="w-5 h-5" />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-foreground group-hover:text-[#0E78AA] transition-colors">
                                    {menuItem.name}
                                  </span>
                                  <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </div>
                                {menuItem.description && (
                                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                    {menuItem.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Section */}
            {featured && (
              <div className="w-72 p-6 bg-gradient-to-br from-[#0E78AA]/5 to-[#F7AE57]/5">
                <div className="h-full flex flex-col">
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground mb-2">{featured.title}</h4>
                    <p className="text-sm text-muted-foreground">{featured.description}</p>
                  </div>
                  <Link
                    href={featured.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#0E78AA] hover:text-[#0a5a80] mt-4 group"
                  >
                    {featured.cta || 'Learn More'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Mobile Menu Component
function MobileMenu({
  isOpen,
  onClose,
  navigation,
  countries,
  basePath,
  siteTagline,
  expanded,
  setExpanded,
}: {
  isOpen: boolean
  onClose: () => void
  navigation: { name: string; href: string; children?: { name: string; href: string }[] }[]
  countries: { name: string; href: string; slug: string }[]
  basePath: string
  siteTagline: string
  expanded: string | null
  setExpanded: (name: string | null) => void
}) {
  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-4 right-4 left-4 bottom-4 z-50"
          >
            <div className="h-full mega-menu-panel rounded-3xl shadow-2xl flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-border/50">
                <Link href={basePath || '/'} className="flex items-center gap-2" onClick={onClose}>
                  <Image src="/logo.svg" alt="Bravinci" width={120} height={35} className="h-7 w-auto" />
                </Link>
                <button
                  className="p-2.5 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  onClick={onClose}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          className={cn(
                            'w-full flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200',
                            expanded === item.name
                              ? 'bg-[#0E78AA]/10 text-[#0E78AA]'
                              : 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
                          )}
                          onClick={() => setExpanded(expanded === item.name ? null : item.name)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={cn(
                              'w-5 h-5 transition-transform duration-300',
                              expanded === item.name && 'rotate-180'
                            )}
                          />
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: expanded === item.name ? 'auto' : 0,
                            opacity: expanded === item.name ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 mt-1 mb-2 pl-4 border-l-2 border-[#0E78AA]/30 space-y-1">
                            <Link
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-[#0E78AA] font-medium hover:bg-[#0E78AA]/10 rounded-lg transition-colors"
                              onClick={onClose}
                            >
                              View All {item.name}
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                                onClick={onClose}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3.5 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors"
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Countries in mobile */}
                {countries.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-border/50">
                    <p className="px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Regions
                    </p>
                    <div className="space-y-1">
                      {countries.map((country) => (
                        <Link
                          key={country.slug}
                          href={country.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                          onClick={onClose}
                        >
                          <Globe className="w-4 h-4 text-[#0E78AA]" />
                          {country.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-border/50">
                <Button
                  className="w-full bg-[#0E78AA] hover:bg-[#0a5a80] text-white font-semibold rounded-xl py-6 shadow-lg hover:shadow-xl transition-all"
                  onClick={onClose}
                  asChild
                >
                  <Link href={`${basePath}/contact`}>Get Started</Link>
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">{siteTagline}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
