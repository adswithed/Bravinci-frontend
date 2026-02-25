import { notFound } from 'next/navigation'
import { SiteProvider } from '@/lib/site-context'
import { getCountrySiteConfig, getCountrySiteSlugs, isCountrySite } from '@/config/sites'

interface SiteLayoutProps {
  children: React.ReactNode
  params: Promise<{ site: string }>
}

// Generate static params for country sites only (global is at root)
export async function generateStaticParams() {
  return getCountrySiteSlugs().map((site) => ({ site }))
}

// Generate metadata based on site
export async function generateMetadata({ params }: { params: Promise<{ site: string }> }) {
  const { site: siteSlug } = await params
  const site = getCountrySiteConfig(siteSlug)

  if (!site) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: {
      template: site.seo.titleTemplate,
      default: site.name,
    },
    description: site.seo.defaultDescription,
    openGraph: {
      title: site.name,
      description: site.seo.defaultDescription,
      siteName: site.name,
      images: site.seo.ogImage ? [site.seo.ogImage] : [],
    },
  }
}

export default async function SiteLayout({ children, params }: SiteLayoutProps) {
  const { site: siteSlug } = await params

  // Only allow country sites in this route (global is at root)
  if (!isCountrySite(siteSlug)) {
    notFound()
  }

  const site = getCountrySiteConfig(siteSlug)

  if (!site) {
    notFound()
  }

  return (
    <SiteProvider site={site}>
      {children}
    </SiteProvider>
  )
}
