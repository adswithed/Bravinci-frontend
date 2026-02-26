# Bravinci Frontend Structure

This document describes the restructured frontend architecture for the Bravinci multisite project.

## Overview

The frontend has been reorganized to support **independent country sites** while maintaining **shared design system components**. This structure allows each site (Global and Netherlands) to have its own content and unique components while sharing common UI elements.

## Folder Structure

```
frontend/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Global homepage
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── [site]/                   # Dynamic route for country sites
│   │   ├── page.tsx              # Country homepage
│   │   └── layout.tsx            # Country site layout
│   └── [other pages]/            # Services, Solutions, Industries, etc.
│
├── shared/                       # Shared across ALL sites
│   ├── components/
│   │   ├── index.ts              # Barrel export for all shared components
│   │   ├── mega-menu.tsx         # Navigation component
│   │   ├── footer.tsx            # Footer component
│   │   ├── services-section.tsx
│   │   ├── solutions-section.tsx
│   │   ├── industries-section.tsx
│   │   ├── about-section.tsx
│   │   ├── cta-section.tsx
│   │   ├── country-hero-section.tsx
│   │   ├── value-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── trust-section.tsx
│   │   └── ui/                   # Design system components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── spotlight.tsx
│   │       └── ...
│   ├── lib/
│   │   ├── index.ts              # Barrel export for utilities
│   │   ├── utils.ts              # cn() and other utilities
│   │   ├── site-context.tsx      # SiteContext for multisite
│   │   ├── types.ts              # TypeScript types
│   │   └── wordpress.ts          # WordPress API client
│   └── config/
│       ├── index.ts              # Barrel export for config
│       ├── navigation.ts         # Navigation structure
│       └── sites/                # Site configurations
│           ├── index.ts
│           ├── global.ts
│           └── netherlands.ts
│
├── sites/                        # Site-specific content
│   ├── global/
│   │   ├── components/
│   │   │   ├── index.ts          # Barrel export
│   │   │   ├── hero-section.tsx  # Dark hero with globe
│   │   │   ├── stats-section.tsx # Global stats
│   │   │   ├── partners-section.tsx
│   │   │   └── global-site-wrapper.tsx
│   │
│   └── netherlands/
│       ├── components/           # Netherlands-specific components
│       │   ├── index.ts          # Barrel export
│       │   ├── netherlands-stats.tsx   # Light design, NL stats
│       │   └── netherlands-value.tsx   # Dutch market value prop
│
└── public/
    ├── logo.png                  # Blue logo for light backgrounds
    └── logo-white.png            # White logo for dark backgrounds
```

## Import Patterns

### Shared Components
```tsx
// Import shared components
import { MegaMenu, Footer, ServicesSection } from '@/shared/components'

// Import UI components
import { Button } from '@/shared/components/ui/button'

// Import utilities
import { cn, useSite } from '@/shared/lib'

// Import config
import { getNavigation, getSiteConfig } from '@/shared/config'
```

### Site-Specific Components
```tsx
// Import global site components
import { HeroSection, StatsSection, PartnersSection } from '@/sites/global/components'

// Import Netherlands-specific components
import { NetherlandsStats, NetherlandsValue } from '@/sites/netherlands/components'
```

## How It Works

### 1. Shared Components
Components in `shared/components/` are used by **all sites** unless overridden. These include:
- **Navigation**: MegaMenu (same structure, different content per site)
- **Footer**: Same design, different content per site
- **Sections**: Services, Solutions, Industries, About, CTA
- **UI Components**: Button, Card, Input, etc. (Design System)

### 2. Site-Specific Components
Components in `sites/{site}/components/` are **unique to that site**:
- **Global**: Dark hero with globe, global stats, partners section
- **Countries**: Light hero with 3D robot (can be further customized per country)

### 3. Content Separation
- **Shared components** provide the **structure and design**
- **Site configs** provide the **content** (text, links, addresses)
- **Site-specific components** provide **unique features**

### 4. Override Pattern
If a country needs a completely different component:
1. Create the component in `sites/{country}/components/`
2. Import it in the page instead of the shared version
3. The shared component remains unchanged for other sites

## Examples

### Example 1: Using Shared Footer with Different Content
```tsx
// Global site uses shared footer
import { Footer } from '@/shared/components'

// Footer gets content from site context (automatically)
<Footer />
```

The footer component uses `useSite()` to get the current site's configuration:
```tsx
// Inside shared/components/footer.tsx
const { site } = useSite()
// site.contact.address, site.contact.email, etc.
```

### Example 2: Country-Specific Hero
```tsx
// Netherlands wants a custom hero
// Create: sites/netherlands/components/netherlands-hero.tsx

// In app/[site]/page.tsx
import { NetherlandsHero } from '@/sites/netherlands/components'

// Use it only for Netherlands
{site.slug === 'netherlands' ? <NetherlandsHero /> : <CountryHeroSection />}
```

### Example 3: Shared Navigation with Site-Specific Links
```tsx
// Navigation structure is shared
import { MegaMenu } from '@/shared/components'

// Menu items come from shared/config/navigation.ts
// getNavigation(siteSlug) returns different items per site
<MegaMenu />
```

## Navigation Structure

The mega menu now follows the official structure:

1. **About** - Who We Are, Leadership, Our Approach, Partners & Ecosystem
2. **What we do** - Services, Solutions, Industries (3-column mega menu)
3. **Insights** - Strategic Intelligence, AI, BI, ESG, Contract Management, Risk
4. **Careers** - Life at Bravinci, Open Roles, Culture & Values
5. **Contact** - No submenu

See [shared/config/navigation.ts](shared/config/navigation.ts) for the full structure.

## Benefits of This Structure

### ✅ Independence
- Each site can have unique components
- Changes to one site don't affect others
- Easy to add new country sites

### ✅ Efficiency
- Shared components aren't duplicated
- Fix once, fixes everywhere (for shared components)
- Smaller bundle sizes

### ✅ Flexibility
- Use shared components by default
- Override with site-specific components when needed
- Mix and match as required

### ✅ Maintainability
- Clear separation of concerns
- Easy to find components
- Consistent design system

## Adding a New Country Site

1. **Create site config**: Add to `shared/config/sites/`
2. **Add to routing**: Already handled by `[site]/` dynamic route
3. **Customize if needed**: Create components in `sites/{country}/components/`
4. **Content**: Comes from WordPress multisite

## Migration Summary

All components have been moved from:
- `components/` → `shared/components/` or `sites/global/components/`
- `lib/` → `shared/lib/`
- `config/` → `shared/config/`

All imports have been updated to use the new paths:
- `@/components/*` → `@/shared/components/*` or `@/sites/global/components/*`
- `@/lib/*` → `@/shared/lib/*`
- `@/config/*` → `@/shared/config/*`

Build verified: ✅ All 56 routes compile successfully
