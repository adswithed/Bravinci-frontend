/**
 * Country Site Digital Transformation Service Page Route
 */

import { NigeriaDigitalTransformationPage } from '@/sites/nigeria/components/pages/digital-transformation-page'
import { SitePageResolver } from '../../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  nigeria: NigeriaDigitalTransformationPage,
}

export default function DigitalTransformationPage() {
  return <SitePageResolver pages={pages} />
}
