/**
 * Country Site About Page Route
 */

import { NetherlandsAboutPage } from '@/sites/netherlands/components/pages/about-page'
import { NigeriaAboutPage } from '@/sites/nigeria/components/pages/about-page'
import { SitePageResolver } from '../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  netherlands: NetherlandsAboutPage,
  nigeria: NigeriaAboutPage,
}

export default function AboutPage() {
  return <SitePageResolver pages={pages} />
}
