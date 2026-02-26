/**
 * Global Career Page
 */

'use client'

import { MegaMenu, Footer } from '@/shared/components'
import { GlobalSiteWrapper } from '@/sites/global/components'

export function GlobalCareerPage() {
  return (
    <GlobalSiteWrapper>
      <MegaMenu />
      <main className="pt-20">
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Career</h1>
              <p className="text-lg text-muted-foreground">Content coming soon.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
