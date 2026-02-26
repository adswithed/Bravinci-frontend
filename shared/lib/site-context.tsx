'use client'

import { createContext, useContext, ReactNode } from 'react'
import { SiteConfig, NavigationItem } from './types'
import { defaultSite, getCountriesNavigation } from '@/shared/config/sites'

interface SiteContextValue {
  site: SiteConfig
  navigation: NavigationItem[]
  basePath: string
  getHref: (path: string) => string
}

const SiteContext = createContext<SiteContextValue | null>(null)

// Default navigation structure (can be overridden by WordPress)
function getDefaultNavigation(siteSlug: string): NavigationItem[] {
  const basePath = siteSlug === 'global' ? '' : `/${siteSlug}`
  const countries = getCountriesNavigation(siteSlug)

  return [
    { name: 'Home', href: basePath || '/' },
    { name: 'About', href: `${basePath}/about` },
    {
      name: 'Services',
      href: `${basePath}/services`,
      children: [
        { name: 'Consulting', href: `${basePath}/services#consulting` },
        { name: 'Education', href: `${basePath}/services#education` },
        { name: 'Managed Services', href: `${basePath}/services#managed-services` },
        { name: 'Secondment', href: `${basePath}/services#secondment` },
      ],
    },
    {
      name: 'Solutions',
      href: `${basePath}/solutions`,
      children: [
        { name: 'Dividos', href: `${basePath}/solutions/dividos` },
        { name: 'Strategy Command Center', href: `${basePath}/solutions/strategy-command-center` },
        { name: 'Strategic Intelligence Masterclass', href: `${basePath}/solutions/masterclass` },
      ],
    },
    {
      name: 'Countries',
      href: '#countries',
      children: countries.map(country => ({
        name: country.name,
        href: country.href,
      })),
    },
    { name: 'Career', href: `${basePath}/career` },
    { name: 'Contact', href: `${basePath}/contact` },
  ]
}

interface SiteProviderProps {
  children: ReactNode
  site: SiteConfig
  navigation?: NavigationItem[]
}

export function SiteProvider({ children, site, navigation }: SiteProviderProps) {
  const basePath = site.slug === 'global' ? '' : `/${site.slug}`
  const nav = navigation || site.navigation || getDefaultNavigation(site.slug)

  // Helper to generate site-relative URLs
  const getHref = (path: string): string => {
    if (path.startsWith('http') || path.startsWith('#')) {
      return path
    }
    return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
  }

  return (
    <SiteContext.Provider
      value={{
        site,
        navigation: nav,
        basePath,
        getHref,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export function useSite(): SiteContextValue {
  const context = useContext(SiteContext)
  if (!context) {
    // Return default context for cases where provider isn't available
    return {
      site: defaultSite,
      navigation: getDefaultNavigation('global'),
      basePath: '',
      getHref: (path: string) => path,
    }
  }
  return context
}

export function useSiteConfig(): SiteConfig {
  return useSite().site
}
