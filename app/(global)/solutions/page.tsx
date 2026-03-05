/**
 * Global Solutions Page Route
 *
 * Fetches solutions from WordPress and renders the solutions page.
 * All content comes from WordPress CMS - NO FALLBACKS.
 */

import { GlobalSolutionsPage } from '@/sites/global/components/pages/solutions-page'

// Revalidate every 60 seconds
export const revalidate = 60

export default async function SolutionsPage() {
  return <GlobalSolutionsPage />
}
