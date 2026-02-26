# Netherlands Website Build Context

## Project Overview

This is a **Bravinci multisite project** with a headless WordPress backend and Next.js frontend. The global site is complete, and now we need to build the **Netherlands regional site**.

**Tech Stack:**
- Next.js 15+ with App Router
- Tailwind CSS v4
- Framer Motion for animations
- WordPress Multisite (backend)
- TypeScript

**Brand Colors:**
- Primary: `#0E78AA` (Bravinci Blue)
- Secondary: `#F7AE57` (Accent Orange/Gold)

## Current Project Structure

The frontend has been restructured with **independent site architecture**:

```
frontend/
├── app/
│   ├── page.tsx                           # Global homepage
│   ├── [site]/
│   │   ├── page.tsx                       # Country homepage (current, basic)
│   │   ├── layout.tsx                     # Country site layout
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── solutions/page.tsx
│   │   ├── industries/page.tsx
│   │   ├── career/page.tsx
│   │   └── contact/page.tsx
│
├── shared/                                # Used by ALL sites
│   ├── components/
│   │   ├── mega-menu.tsx                 # Navigation (shared structure)
│   │   ├── footer.tsx                    # Footer (shared structure)
│   │   ├── services-section.tsx          # Shared sections
│   │   ├── solutions-section.tsx
│   │   ├── industries-section.tsx
│   │   ├── about-section.tsx
│   │   ├── cta-section.tsx
│   │   ├── country-hero-section.tsx      # Light hero with 3D robot
│   │   ├── value-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── trust-section.tsx
│   │   └── ui/                           # Design system (Button, Card, etc.)
│   ├── lib/
│   │   ├── utils.ts                      # cn() utility
│   │   ├── site-context.tsx              # useSite() hook
│   │   ├── types.ts                      # TypeScript types
│   │   └── wordpress.ts                  # WordPress API (to be implemented)
│   └── config/
│       ├── navigation.ts                 # getNavigation(siteSlug)
│       └── sites/
│           ├── global.ts
│           ├── netherlands.ts            # Netherlands config
│           ├── nigeria.ts
│           └── surinam.ts
│
├── sites/
│   ├── global/                           # ✅ COMPLETE
│   │   └── components/
│   │       ├── hero-section.tsx          # Dark hero with globe
│   │       ├── stats-section.tsx         # 15+ years, 200+ solutions
│   │       ├── partners-section.tsx      # Microsoft, AWS, etc.
│   │       └── global-site-wrapper.tsx
│   │
│   └── netherlands/                      # ⏳ TO BE BUILT
│       ├── components/                   # Netherlands-specific components
│       └── config/                       # Netherlands-specific config
```

## Global Site (Reference Implementation)

### Global Homepage Structure (`app/page.tsx`)
```tsx
import { MegaMenu, ServicesSection, SolutionsSection, IndustriesSection, AboutSection, CTASection } from '@/shared/components'
import { HeroSection, StatsSection, PartnersSection, GlobalSiteWrapper } from '@/sites/global/components'
import { Footer } from '@/shared/components'

export default function HomePage() {
  return (
    <GlobalSiteWrapper>
      <MegaMenu />
      <main>
        <HeroSection />           {/* Dark with globe */}
        <StatsSection />          {/* 15+ years, 200+ solutions, etc. */}
        <ServicesSection />       {/* 3 services */}
        <SolutionsSection />      {/* 3 solutions */}
        <IndustriesSection />     {/* 6 industries */}
        <AboutSection />          {/* The Bravinci Advantage */}
        <PartnersSection />       {/* Microsoft, AWS, Odoo, etc. */}
        <CTASection />
      </main>
      <Footer />
    </GlobalSiteWrapper>
  )
}
```

### Global Hero Features
- Dark background
- Animated 3D globe
- White text
- GSAP animations
- Tagline: "Strategic Intelligence Meets Innovation"

## Netherlands Site - What to Build

### Current State
The Netherlands site (`app/[site]/page.tsx`) currently uses **generic country components**:

```tsx
export default async function HomePage({ params }: PageProps) {
  return (
    <>
      <MegaMenu />
      <main>
        <CountryHeroSection />      {/* Light hero with 3D robot */}
        <ValueSection />
        <SolutionsSection />
        <ServicesSection />
        <StatsSection />
        <AboutSection />
        <TestimonialsSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
```

### Netherlands Requirements (from context.md)

The Netherlands site should:
1. Have its own **light background design** (different from global's dark theme)
2. Use the **3D robot** hero (Spline) - already implemented in `CountryHeroSection`
3. Be **completely independent** - can be customized without affecting other sites
4. Have its own stats and content
5. Eventually pull content from its WordPress site in the multisite

### Content Documents Location
Content for Netherlands is located at:
```
/Applications/MAMP/htdocs/Bravinci Project/Bravinci Website/Bravinci Netherlands/
```

## Navigation Structure

All sites use the same mega menu structure (but with site-specific links):

1. **About**
   - Who We Are
   - Leadership
   - Our Approach (The Bravinci Code)
   - Partners & Ecosystem (Microsoft Azure, AWS, Odoo, Yellowfin, Exasol)

2. **What we do** (3-column mega menu)
   - **Services:** Strategy & Advisory, Digital Transformation, Data & AI Enablement
   - **Solutions:** Dividos, Strategic Command Center, Data2Hire
   - **Industries:** Public Sector, Financial Services, Energy & Utilities, Manufacturing, Healthcare, Education

3. **Insights**
   - Strategic Intelligence
   - Artificial Intelligence
   - Business Intelligence
   - ESG
   - Contract Management
   - Risk and Regulations

4. **Careers**
   - Life at Bravinci
   - Open Roles
   - Culture & Values

5. **Contact**

Navigation is configured in `shared/config/navigation.ts` with `getNavigation(siteSlug)`.

## Import Patterns

### Shared Components (Used by all sites)
```tsx
import {
  MegaMenu,
  Footer,
  ServicesSection,
  SolutionsSection,
  CountryHeroSection,
  ValueSection
} from '@/shared/components'

import { Button } from '@/shared/components/ui/button'
import { Card } from '@/shared/components/ui/card'
```

### Utilities & Hooks
```tsx
import { cn, useSite } from '@/shared/lib'
import type { SiteConfig } from '@/shared/lib'
```

### Config
```tsx
import { getNavigation, getSiteConfig } from '@/shared/config'
```

### Global Site Components (for reference)
```tsx
import { HeroSection, StatsSection, PartnersSection } from '@/sites/global/components'
```

### Netherlands-Specific Components (to be created)
```tsx
import { NetherlandsHero, NetherlandsStats } from '@/sites/netherlands/components'
```

## Netherlands Site Configuration

Currently in `shared/config/sites/netherlands.ts`:

```ts
export const netherlandsSite: SiteConfig = {
  id: 'netherlands',
  slug: 'netherlands',
  name: 'Bravinci Netherlands',
  tagline: 'Strategic Intelligence & Digital Innovation in the Netherlands',

  wpApiUrl: process.env.NEXT_PUBLIC_WP_NETHERLANDS_API_URL || 'http://localhost:8888/wp-json',
  wpSiteId: 2,

  branding: {
    primaryColor: '#0E78AA',
    secondaryColor: '#F7AE57',
  },

  contact: {
    address: 'Amsterdam, Netherlands',
    email: 'netherlands@bravinci.com',
    phone: '+31 20 123 4567',
  },

  social: {
    linkedin: 'https://linkedin.com/company/bravinci-netherlands',
  },

  locale: {
    language: 'nl-NL',
    currency: 'EUR',
    dateFormat: 'DD-MM-YYYY',
  },

  seo: {
    titleTemplate: '%s | Bravinci Netherlands',
    defaultDescription: 'Bravinci Netherlands delivers strategic intelligence and digital transformation solutions...',
  }
}
```

## Step-by-Step: Building Netherlands Site

### Phase 1: Customize Homepage Sections

1. **Create Netherlands Stats Component**
   - File: `sites/netherlands/components/netherlands-stats.tsx`
   - Different stats than global (Netherlands-specific numbers)
   - Light background design

2. **Create Netherlands Value Proposition Section**
   - File: `sites/netherlands/components/netherlands-value.tsx`
   - Highlight Netherlands-specific value (Dutch market expertise, EU compliance, etc.)

3. **Create Netherlands Services Section** (if different from global)
   - File: `sites/netherlands/components/netherlands-services.tsx`
   - OR use shared `ServicesSection` with Netherlands content

4. **Create Netherlands Case Studies/Clients Section**
   - File: `sites/netherlands/components/netherlands-clients.tsx`
   - Showcase Dutch clients and success stories

5. **Update Homepage**
   - File: `app/[site]/page.tsx`
   - Import and use Netherlands-specific components

### Phase 2: Create Other Pages

Each page should follow this pattern:

**Services Page** (`app/[site]/services/page.tsx`):
```tsx
import { MegaMenu, Footer } from '@/shared/components'
import { NetherlandsServicesHero, NetherlandsServicesList } from '@/sites/netherlands/components'

export default async function ServicesPage({ params }: PageProps) {
  const { site: siteSlug } = await params
  const site = getSiteConfig(siteSlug)

  return (
    <>
      <MegaMenu />
      <main>
        <NetherlandsServicesHero />
        <NetherlandsServicesList />
        {/* Other sections */}
      </main>
      <Footer />
    </>
  )
}
```

**About Page** (`app/[site]/about/page.tsx`):
- Netherlands team information
- Local office details
- Relationship with Bravinci Global

**Industries Page** (`app/[site]/industries/page.tsx`):
- Focus on Netherlands-specific industries:
  - Supply Chain & Logistics (mentioned in structure doc)
  - Banking (mentioned in structure doc)
  - Others relevant to Dutch market

**Contact Page** (`app/[site]/contact/page.tsx`):
- Netherlands office address
- Dutch phone number
- Contact form (can be shared component)

### Phase 3: WordPress Integration

Once WordPress is set up:

```tsx
// Example: Fetching Netherlands content
import { getPageContent } from '@/shared/lib/wordpress'

export default async function ServicesPage({ params }: PageProps) {
  const { site: siteSlug } = await params
  const pageContent = await getPageContent(siteSlug, 'services')

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
    </main>
  )
}
```

## Key Differences: Global vs Netherlands

| Aspect | Global Site | Netherlands Site |
|--------|-------------|------------------|
| **Hero** | Dark background, white text, globe | Light background, dark text, 3D robot |
| **Navigation** | Same structure | Same structure, different content |
| **Stats** | Global numbers (15+ years, 200+ solutions) | Netherlands numbers (local impact) |
| **Industries** | 6 global industries | Supply Chain, Banking, + others |
| **Services** | Strategy, Digital Transform, Data & AI | Same + Managed Services, Secondment |
| **Solutions** | Dividos, Command Center, Data2Hire | Data2Employ (Nigeria has this), Odoo ERP |
| **Language** | English | English (can add Dutch later) |
| **URL** | `/` (root) | `/netherlands` |

## Component Override Pattern

If Netherlands needs a completely different design for a shared component:

### Option 1: Create Override Component
```tsx
// sites/netherlands/components/netherlands-footer.tsx
export function NetherlandsFooter() {
  return (
    <footer className="bg-blue-50">
      {/* Completely different design */}
    </footer>
  )
}

// In page.tsx
import { NetherlandsFooter } from '@/sites/netherlands/components'
<NetherlandsFooter />  {/* Use instead of shared Footer */}
```

### Option 2: Use Shared Component with Props
```tsx
// Shared component accepts customization
import { Footer } from '@/shared/components'

<Footer variant="light" showPartners={false} />
```

### Option 3: Use Site Context
```tsx
// Inside shared component
const { site } = useSite()

if (site.slug === 'netherlands') {
  // Netherlands-specific rendering
}
```

## Design Considerations

### Color Scheme
- Keep primary blue (`#0E78AA`) and secondary orange (`#F7AE57`)
- Use lighter backgrounds (white, light gray)
- Light blue accents for sections

### Typography
Same as global:
- Font: Inter (sans-serif)
- Headings: Bold, large
- Body: Regular weight

### Animations
- Use same Framer Motion patterns as global
- Keep animations subtle and professional
- Page transitions, hover effects, scroll animations

### Glassmorphism
- Use same `.glass-card`, `.glass-nav` utilities
- Maintain consistent aesthetic with global site

## Current Route Structure

Netherlands site already has these routes set up:
- `/netherlands` - Homepage
- `/netherlands/about`
- `/netherlands/services`
- `/netherlands/solutions`
- `/netherlands/solutions/dividos`
- `/netherlands/solutions/strategy-command-center`
- `/netherlands/solutions/data2hire`
- `/netherlands/solutions/masterclass`
- `/netherlands/industries`
- `/netherlands/career`
- `/netherlands/contact`
- `/netherlands/blogs`
- `/netherlands/bravinci-code`
- `/netherlands/bravinci-united`

All routes compile successfully but need content.

## WordPress Multisite Setup (Future)

The Netherlands site will pull content from:
- WordPress Site ID: 2
- API: `NEXT_PUBLIC_WP_NETHERLANDS_API_URL`

Until WordPress is set up, use hardcoded content in components.

## Testing & Validation

After building:
1. **Build test**: `npm run build` (should compile successfully)
2. **Dev test**: `npm run dev` and visit `http://localhost:3000/netherlands`
3. **Visual check**: Compare with design/content docs
4. **Navigation test**: All menu items should work
5. **Responsive test**: Check mobile, tablet, desktop

## Getting Started Checklist

- [ ] Read this entire context document
- [ ] Review global site implementation (`app/page.tsx`, `sites/global/components/`)
- [ ] Review shared components (`shared/components/`)
- [ ] Check Netherlands content documents
- [ ] Create `sites/netherlands/components/index.ts` barrel export
- [ ] Build Netherlands stats component
- [ ] Build Netherlands hero (or customize existing CountryHeroSection)
- [ ] Build Netherlands-specific sections
- [ ] Update `/netherlands` homepage with new components
- [ ] Build other pages (services, about, industries, etc.)
- [ ] Test build: `npm run build`
- [ ] Deploy and verify

## Important Files to Reference

| File | Purpose |
|------|---------|
| `app/page.tsx` | Global homepage - reference implementation |
| `app/[site]/page.tsx` | Country homepage - starting point |
| `sites/global/components/hero-section.tsx` | Example of site-specific hero |
| `sites/global/components/stats-section.tsx` | Example of site-specific stats |
| `shared/components/country-hero-section.tsx` | Current Netherlands hero (3D robot) |
| `shared/config/sites/netherlands.ts` | Netherlands site configuration |
| `shared/config/navigation.ts` | Navigation structure |
| `STRUCTURE.md` | Full explanation of new folder structure |

## Support & Questions

If you need clarification:
1. Check `STRUCTURE.md` for folder structure explanation
2. Look at global site implementation as reference
3. Review shared components to see what's available
4. Check site config for Netherlands-specific settings

The goal is to make Netherlands site as polished as the global site, but with its own identity and content!

---

**Quick Summary:**
Build Netherlands site by creating components in `sites/netherlands/components/`, using shared components where possible, and following the same patterns as the global site. The structure is already set up - just need to create the content and Netherlands-specific components.
