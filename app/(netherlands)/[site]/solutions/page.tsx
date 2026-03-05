/**
 * Country Site Solutions Page Route
 */

import { NetherlandsSolutionsPage } from '@/sites/netherlands/components/pages/solutions-page'
import { NigeriaSolutionsPage } from '@/sites/nigeria/components/pages/solutions-page'
import { SitePageResolver } from '../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  netherlands: NetherlandsSolutionsPage,
  nigeria: NigeriaSolutionsPage,
}

export default function SolutionsPage() {
  return <SitePageResolver pages={pages} />
}
