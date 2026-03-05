/**
 * Country Site Data2Employ Solution Page Route
 */

import { NigeriaData2employPage } from '@/sites/nigeria/components/pages/data2employ-page'
import { SitePageResolver } from '../../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  nigeria: NigeriaData2employPage,
}

export default function Data2employPage() {
  return <SitePageResolver pages={pages} />
}
