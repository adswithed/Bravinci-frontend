'use client'

import { useSite } from '@/shared/lib/site-context'

interface SitePageResolverProps {
  pages: Record<string, React.ComponentType>
}

export function SitePageResolver({ pages }: SitePageResolverProps) {
  const { site } = useSite()
  const PageComponent = pages[site.slug]

  if (!PageComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Page not available for this site.</p>
      </div>
    )
  }

  return <PageComponent />
}
