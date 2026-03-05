/**
 * Dynamic CMS Page Route
 *
 * Catch-all route that handles pages created in WordPress.
 * Fetches page data from the WordPress REST API and renders
 * sections using the PageRenderer component.
 */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCMSPage, getCMSPages } from '@/shared/lib/wordpress'
import { globalSite } from '@/shared/config/sites'
import { PageRenderer } from '@/shared/components/page-renderer'
import { MegaMenu, Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

/**
 * Generate metadata for the page
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const pageSlug = slug.join('/')

  const page = await getCMSPage(globalSite, pageSlug)

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: page.seo.title || page.title,
    description: page.seo.description,
    openGraph: {
      title: page.seo.title || page.title,
      description: page.seo.description,
      images: page.seo.og_image ? [page.seo.og_image] : [],
    },
  }
}

/**
 * Generate static params for all WordPress pages
 * This enables static generation at build time
 */
export async function generateStaticParams() {
  try {
    const pages = await getCMSPages(globalSite)

    return pages.map((page) => ({
      slug: page.slug.split('/').filter(Boolean),
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

/**
 * CMS Page Component
 */
export default async function CMSPage({ params }: PageProps) {
  const { slug } = await params
  const pageSlug = slug.join('/')

  // Fetch page data from WordPress
  const page = await getCMSPage(globalSite, pageSlug)

  // Return 404 if page not found
  if (!page) {
    notFound()
  }

  return (
    <GlobalSiteWrapper>
      <MegaMenu />
      <main>
        {/* Render all page sections */}
        <PageRenderer sections={page.sections} />

        {/* If page has content (from WordPress editor), render it */}
        {page.content && (
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: page.content }} />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
