/**
 * Country Site Services Page Route
 */

import { NetherlandsServicesPage } from '@/sites/netherlands/components/pages/services-page'
import { NigeriaServicesPage } from '@/sites/nigeria/components/pages/services-page'
import { SitePageResolver } from '../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  netherlands: NetherlandsServicesPage,
  nigeria: NigeriaServicesPage,
}

export default function ServicesPage() {
  return <SitePageResolver pages={pages} />
}
