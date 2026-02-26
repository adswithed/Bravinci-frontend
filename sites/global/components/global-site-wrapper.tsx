'use client'

import { SiteProvider } from '@/shared/lib/site-context'
import { globalSite } from '@/shared/config/sites'

interface GlobalSiteWrapperProps {
  children: React.ReactNode
}

/**
 * Wrapper component for global site pages (served at root /)
 * Provides the global site configuration via SiteContext
 */
export function GlobalSiteWrapper({ children }: GlobalSiteWrapperProps) {
  return (
    <SiteProvider site={globalSite}>
      {children}
    </SiteProvider>
  )
}
