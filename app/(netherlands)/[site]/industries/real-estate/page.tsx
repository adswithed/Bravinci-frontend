/**
 * Country Site Real Estate Industry Page Route
 */

import { NigeriaRealEstatePage } from '@/sites/nigeria/components/pages/real-estate-page'
import { SitePageResolver } from '../../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  nigeria: NigeriaRealEstatePage,
}

export default function RealEstatePage() {
  return <SitePageResolver pages={pages} />
}
