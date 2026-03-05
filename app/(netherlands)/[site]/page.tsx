/**
 * Country Site Home Page Route
 */

import { NetherlandsHomePage } from '@/sites/netherlands/components/pages/home-page'
import { NigeriaHomePage } from '@/sites/nigeria/components/pages/home-page'
import { SitePageResolver } from './site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  netherlands: NetherlandsHomePage,
  nigeria: NigeriaHomePage,
}

export default function HomePage() {
  return <SitePageResolver pages={pages} />
}
