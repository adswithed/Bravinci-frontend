/**
 * Country Site Global Relationship Page Route
 */

import { NigeriaGlobalRelationshipPage } from '@/sites/nigeria/components/pages/global-relationship-page'
import { SitePageResolver } from '../../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  nigeria: NigeriaGlobalRelationshipPage,
}

export default function GlobalRelationshipPage() {
  return <SitePageResolver pages={pages} />
}
