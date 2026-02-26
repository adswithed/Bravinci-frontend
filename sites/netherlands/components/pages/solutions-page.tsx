/**
 * Netherlands Solutions Page
 */

'use client'

import { MegaMenu, Footer } from '@/shared/components'

export function NetherlandsSolutionsPage() {
  return (
    <>
      <MegaMenu />
      <main className="pt-20">
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions</h1>
              <p className="text-lg text-muted-foreground">Netherlands content coming soon.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
