/**
 * Country Site Career Page Route
 */

import { NetherlandsCareerPage } from '@/sites/netherlands/components/pages/career-page'
import { NigeriaCareerPage } from '@/sites/nigeria/components/pages/career-page'
import { SitePageResolver } from '../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  netherlands: NetherlandsCareerPage,
  nigeria: NigeriaCareerPage,
}

export default function CareerPage() {
  return <SitePageResolver pages={pages} />
}
