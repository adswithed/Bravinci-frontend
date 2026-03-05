/**
 * Country Site Insights Page Route
 */

import { NetherlandsInsightsPageContent } from './netherlands-insights'
import { NigeriaInsightsPage } from '@/sites/nigeria/components/pages/insights-page'
import { SitePageResolver } from '../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  netherlands: NetherlandsInsightsPageContent,
  nigeria: NigeriaInsightsPage,
}

export default function InsightsPage() {
  return <SitePageResolver pages={pages} />
}
