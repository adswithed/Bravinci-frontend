/**
 * Country Site Industries Page Route
 */

import { NetherlandsIndustriesPage } from '@/sites/netherlands/components/pages/industries-page'
import { NigeriaIndustriesPage } from '@/sites/nigeria/components/pages/industries-page'
import { SitePageResolver } from '../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  netherlands: NetherlandsIndustriesPage,
  nigeria: NigeriaIndustriesPage,
}

export default function IndustriesPage() {
  return <SitePageResolver pages={pages} />
}
