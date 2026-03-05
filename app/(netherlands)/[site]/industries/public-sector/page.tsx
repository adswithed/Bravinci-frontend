/**
 * Country Site Public Sector Industry Page Route
 */

import { NigeriaPublicSectorPage } from '@/sites/nigeria/components/pages/public-sector-page'
import { SitePageResolver } from '../../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  nigeria: NigeriaPublicSectorPage,
}

export default function PublicSectorPage() {
  return <SitePageResolver pages={pages} />
}
