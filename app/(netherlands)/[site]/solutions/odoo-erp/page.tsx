/**
 * Country Site Odoo ERP Solution Page Route
 */

import { NigeriaOdooErpPage } from '@/sites/nigeria/components/pages/odoo-erp-page'
import { SitePageResolver } from '../../site-page-resolver'

const pages: Record<string, React.ComponentType> = {
  nigeria: NigeriaOdooErpPage,
}

export default function OdooErpPage() {
  return <SitePageResolver pages={pages} />
}
