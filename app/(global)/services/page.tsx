/**
 * Global Services Page Route
 *
 * Fetches services from WordPress and renders the services page.
 * All content comes from WordPress CMS - NO FALLBACKS.
 */

import { GlobalServicesPage } from '@/sites/global/components/pages/services-page'

// Revalidate every 60 seconds
export const revalidate = 60

export default async function ServicesPage() {
  return <GlobalServicesPage />
}
