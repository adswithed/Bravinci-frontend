/**
 * Country Site Contact Page Route
 */

import { NetherlandsContactPage } from '@/sites/netherlands/components/pages/contact-page'
import { NigeriaContactPage } from '@/sites/nigeria/components/pages/contact-page'
import { SitePageResolver } from '../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  netherlands: NetherlandsContactPage,
  nigeria: NigeriaContactPage,
}

export default function ContactPage() {
  return <SitePageResolver pages={pages} />
}
