# Quick Context: Building Netherlands Site

**Copy this entire document and paste it into a new chat to continue building the Netherlands website.**

---

## Project: Bravinci Multisite (Next.js + WordPress)

**Location:** `/Applications/MAMP/htdocs/Bravinci Project/`

**What's Done:**
- ✅ Global site is complete
- ✅ Frontend restructured with independent site architecture
- ✅ Mega menu navigation implemented
- ✅ Shared design system ready
- ✅ Build verified (56 routes compile successfully)

**What to Build: Netherlands Regional Site**

---

## Folder Structure

```
frontend/
├── shared/                    # Components used by ALL sites
│   ├── components/           # MegaMenu, Footer, sections, UI
│   ├── lib/                  # Utilities (useSite, cn, types)
│   └── config/               # Navigation, site configs
│
├── sites/
│   ├── global/               # ✅ Complete (reference this)
│   │   └── components/       # Hero, Stats, Partners
│   │
│   └── netherlands/          # ⏳ Build this
│       ├── components/       # Create Netherlands-specific components here
│       └── config/           # (optional) Netherlands config
│
└── app/
    ├── page.tsx             # Global homepage (reference)
    └── [site]/page.tsx      # Netherlands homepage (update this)
```

---

## Import Patterns

### Use Shared Components
```tsx
import {
  MegaMenu,
  Footer,
  ServicesSection,
  SolutionsSection,
  CountryHeroSection
} from '@/shared/components'

import { Button } from '@/shared/components/ui/button'
import { useSite } from '@/shared/lib'
```

### Use Global Components (for reference)
```tsx
import { HeroSection, StatsSection } from '@/sites/global/components'
```

### Create Netherlands Components
```tsx
// File: sites/netherlands/components/netherlands-stats.tsx
export function NetherlandsStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Netherlands-specific stats */}
    </section>
  )
}

// Then import in page
import { NetherlandsStats } from '@/sites/netherlands/components'
```

---

## Netherlands vs Global Differences

| Aspect | Global | Netherlands |
|--------|--------|-------------|
| **Hero** | Dark background, globe | Light background, 3D robot |
| **URL** | `/` | `/netherlands` |
| **Stats** | Global numbers (15+ years, 200+ solutions) | Netherlands numbers (local impact) |
| **Industries** | 6 global industries | Supply Chain, Banking, + others |
| **Services** | 3 core services | + Managed Services, Secondment |
| **Solutions** | Dividos, Command Center, Data2Hire | + Odoo ERP |

---

## Current Netherlands Homepage

**File:** `app/[site]/page.tsx`

Currently uses generic components:
```tsx
<MegaMenu />
<CountryHeroSection />      {/* Light hero with 3D robot - shared */}
<ValueSection />
<SolutionsSection />
<ServicesSection />
<StatsSection />            {/* Global stats - needs Netherlands version */}
<AboutSection />
<TestimonialsSection />
<TrustSection />
<CTASection />
<Footer />
```

---

## What to Build

### Phase 1: Homepage Components

1. **Netherlands Stats** (`sites/netherlands/components/netherlands-stats.tsx`)
   - Different numbers than global
   - Light background design
   - Netherlands-specific achievements

2. **Netherlands Value Proposition** (`sites/netherlands/components/netherlands-value.tsx`)
   - Dutch market expertise
   - EU compliance
   - Local success stories

3. **Update Homepage** (`app/[site]/page.tsx`)
   - Replace generic components with Netherlands-specific ones
   - Import from `@/sites/netherlands/components`

### Phase 2: Other Pages

Build these pages in `app/[site]/`:
- `/netherlands/services` - Netherlands services
- `/netherlands/about` - Netherlands team, office
- `/netherlands/industries` - Supply Chain, Banking focus
- `/netherlands/solutions` - Include Odoo ERP
- `/netherlands/career` - Netherlands jobs
- `/netherlands/contact` - Netherlands office info

---

## Netherlands Site Config

**Location:** `shared/config/sites/netherlands.ts`

Already configured with:
- Name: "Bravinci Netherlands"
- Tagline: "Strategic Intelligence & Digital Innovation in the Netherlands"
- Address: Amsterdam, Netherlands
- Phone: +31 20 123 4567
- Language: nl-NL
- Currency: EUR

---

## Content Documents

**Location:** `/Applications/MAMP/htdocs/Bravinci Project/Bravinci Website/Bravinci Netherlands/`

Check this folder for Netherlands-specific content.

---

## Navigation

Same structure for all sites:
1. **About** - Who We Are, Leadership, Our Approach, Partners
2. **What we do** - Services, Solutions, Industries (3-column)
3. **Insights** - SI, AI, BI, ESG, Contract Management, Risk
4. **Careers** - Life at Bravinci, Open Roles, Culture & Values
5. **Contact**

Navigation is handled by shared `MegaMenu` component - no changes needed.

---

## Testing

After building:
```bash
# Build test
cd frontend
npm run build

# Dev test
npm run dev
# Visit: http://localhost:3000/netherlands
```

---

## Reference Files

**Global Site (copy patterns from here):**
- `app/page.tsx` - Homepage structure
- `sites/global/components/hero-section.tsx` - Site-specific hero example
- `sites/global/components/stats-section.tsx` - Site-specific stats example

**Shared Components (use these):**
- `shared/components/mega-menu.tsx` - Navigation
- `shared/components/footer.tsx` - Footer
- `shared/components/services-section.tsx` - Services
- `shared/components/ui/` - All UI components (Button, Card, etc.)

**Documentation:**
- `STRUCTURE.md` - Full folder structure explanation
- `NETHERLANDS_BUILD_CONTEXT.md` - Detailed Netherlands build guide

---

## Quick Start Steps

1. Create barrel export: `sites/netherlands/components/index.ts`
2. Build Netherlands stats: `sites/netherlands/components/netherlands-stats.tsx`
3. Build Netherlands value: `sites/netherlands/components/netherlands-value.tsx`
4. Update homepage: Import and use new components in `app/[site]/page.tsx`
5. Test: `npm run build` should succeed
6. Build other pages following same pattern

---

## Brand Colors (Use These)

- Primary: `#0E78AA` (Bravinci Blue)
- Secondary: `#F7AE57` (Accent Orange/Gold)
- Utility classes: `text-brand-primary`, `bg-brand-primary`

---

## Component Example

```tsx
// File: sites/netherlands/components/netherlands-stats.tsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/shared/lib'

export function NetherlandsStats() {
  const stats = [
    { value: '10+', label: 'Years in Netherlands' },
    { value: '50+', label: 'Dutch Clients' },
    { value: '€20M+', label: 'Value Delivered' },
    { value: '95%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">
          Our Impact in the Netherlands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-brand-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

**For Complete Details:** See `NETHERLANDS_BUILD_CONTEXT.md` in the project root.

**Need Help?** Check `STRUCTURE.md` for folder structure or look at global site implementation as reference.

---

## Summary

Build Netherlands site by:
1. Creating components in `sites/netherlands/components/`
2. Using shared components where possible
3. Following same patterns as global site
4. Focusing on Netherlands-specific content and design

The structure is ready - just need to create the components and content!
