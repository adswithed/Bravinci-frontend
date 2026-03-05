/**
 * Country Site Oil and Gas Industry Page Route
 */

import { NigeriaOilGasPage } from '@/sites/nigeria/components/pages/oil-gas-page'
import { SitePageResolver } from '../../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  nigeria: NigeriaOilGasPage,
}

export default function OilGasPage() {
  return <SitePageResolver pages={pages} />
}
