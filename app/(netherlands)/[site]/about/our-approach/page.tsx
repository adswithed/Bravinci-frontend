/**
 * Country Site Our Approach Page Route
 */

import { NigeriaOurApproachPage } from '@/sites/nigeria/components/pages/our-approach-page'
import { SitePageResolver } from '../../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  nigeria: NigeriaOurApproachPage,
}

export default function OurApproachPage() {
  return <SitePageResolver pages={pages} />
}
