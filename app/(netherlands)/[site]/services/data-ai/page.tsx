/**
 * Country Site Data & AI Enablement Service Page Route
 */

import { NigeriaDataAiPage } from '@/sites/nigeria/components/pages/data-ai-page'
import { SitePageResolver } from '../../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  nigeria: NigeriaDataAiPage,
}

export default function DataAiPage() {
  return <SitePageResolver pages={pages} />
}
