/**
 * Country Site Manufacturing Industry Page Route
 */

import { NigeriaManufacturingPage } from '@/sites/nigeria/components/pages/manufacturing-page'
import { SitePageResolver } from '../../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  nigeria: NigeriaManufacturingPage,
}

export default function ManufacturingPage() {
  return <SitePageResolver pages={pages} />
}
