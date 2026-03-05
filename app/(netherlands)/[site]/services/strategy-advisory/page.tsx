/**
 * Country Site Strategy & Advisory Service Page Route
 */

import { NigeriaStrategyAdvisoryPage } from '@/sites/nigeria/components/pages/strategy-advisory-page'
import { SitePageResolver } from '../../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  nigeria: NigeriaStrategyAdvisoryPage,
}

export default function StrategyAdvisoryPage() {
  return <SitePageResolver pages={pages} />
}
