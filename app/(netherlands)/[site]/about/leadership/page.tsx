/**
 * Country Site Leadership Page Route
 */

import { NigeriaLeadershipPage } from '@/sites/nigeria/components/pages/leadership-page'
import { SitePageResolver } from '../../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  nigeria: NigeriaLeadershipPage,
}

export default function LeadershipPage() {
  return <SitePageResolver pages={pages} />
}
