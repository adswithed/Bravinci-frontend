Bravinci Project Context Document

**📌 QUICK LINKS:**
- **Building Netherlands Site?** → See `NETHERLANDS_BUILD_CONTEXT.md`
- **Understanding Structure?** → See `STRUCTURE.md`
- **Latest Changes:** Frontend restructured Feb 2026 with independent site architecture

Project Overview
Bravinci is a headless WordPress multisite with a custom Next.js frontend. The project serves a strategic intelligence consulting company with a global presence and regional offices.

Architecture
Backend: WordPress Multisite
Purpose: Content Management System (CMS) for all site content
Structure: WordPress multisite installation where each regional site is an independent WordPress site within the network
API: WordPress REST API / WPGraphQL to serve content to the frontend
Location: /Applications/MAMP/htdocs/Bravinci Project/ (WordPress installation)
Frontend: Next.js 15+ with App Router
Framework: Next.js with App Router (not Pages Router)
Styling: Tailwind CSS v4 with CSS variables
Animations: Framer Motion (motion package v12.34.0) + GSAP for complex animations
3D Elements: Spline (@splinetool/react-spline) for interactive 3D scenes
Location: /Applications/MAMP/htdocs/Bravinci Project/frontend/
Brand Guidelines
Colors
Primary: #0E78AA (Bravinci Blue)
Secondary: #F7AE57 (Accent Orange/Gold)
Design System
Modern glassmorphism aesthetic (.glass-card, .glass-nav)
Subtle animations and micro-interactions
Light backgrounds with blue/orange accents
Professional, enterprise-focused design
Site Structure
Multisite Configuration
Site	URL Route	Description
Global	/ (root)	Main corporate website, global content
Netherlands	/netherlands	Regional site for Netherlands office
Nigeria	/nigeria	Regional site for Nigeria office
Routing Logic
Global site renders at the root URL (/)
Country sites render at /{country-slug} (e.g., /netherlands, /nigeria)
Each site has its own WordPress backend site in the multisite network
Frontend File Structure (✅ RESTRUCTURED Feb 2026)

frontend/
├── app/
│   ├── page.tsx                    # Global homepage
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles + Tailwind
│   ├── [site]/                     # Dynamic route for country sites
│   │   ├── page.tsx                # Country homepage
│   │   └── layout.tsx              # Country layout with SiteProvider
│   ├── services/
│   ├── solutions/
│   ├── industries/
│   └── insights/
│
├── shared/                         # ✅ NEW: Shared across ALL sites
│   ├── components/
│   │   ├── mega-menu.tsx           # Navigation component
│   │   ├── footer.tsx
│   │   ├── services-section.tsx
│   │   ├── solutions-section.tsx
│   │   ├── industries-section.tsx
│   │   ├── about-section.tsx
│   │   ├── cta-section.tsx
│   │   ├── country-hero-section.tsx  # Light hero with 3D robot
│   │   ├── value-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── trust-section.tsx
│   │   └── ui/                     # Design system components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── spotlight.tsx
│   │       └── ...
│   ├── lib/
│   │   ├── utils.ts                # cn() utility
│   │   ├── site-context.tsx        # SiteContext/SiteProvider
│   │   ├── types.ts                # TypeScript types
│   │   └── wordpress.ts            # WordPress API functions
│   └── config/
│       ├── navigation.ts           # Navigation structure
│       └── sites/                  # Site configurations
│           ├── global.ts
│           ├── netherlands.ts
│           ├── nigeria.ts
│           └── surinam.ts
│
├── sites/                          # ✅ NEW: Site-specific components
│   ├── global/
│   │   └── components/
│   │       ├── hero-section.tsx    # Dark hero with animated globe
│   │       ├── stats-section.tsx   # Global stats (15+ years, etc.)
│   │       ├── partners-section.tsx
│   │       └── global-site-wrapper.tsx
│   ├── netherlands/
│   │   ├── components/             # Netherlands-specific components
│   │   └── config/                 # Netherlands-specific config
│   ├── nigeria/
│   │   ├── components/             # Nigeria-specific components
│   │   └── config/                 # Nigeria-specific config
│   └── surinam/
│       ├── components/             # Surinam-specific components
│       └── config/                 # Surinam-specific config
│
└── public/
    ├── logo.png                    # Blue logo for light backgrounds
    └── logo-white.png              # White logo for dark backgrounds
✅ Independent Site Architecture (IMPLEMENTED)
Each regional site is now completely independent with:

**Shared Resources** (`shared/`):
- Design system components (Button, Card, etc.)
- Common sections (Services, Solutions, Industries, etc.)
- Utilities (cn, useSite hook)
- Navigation structure
- Site configurations

**Site-Specific Resources** (`sites/{site}/`):
- Unique components (Global has dark hero, countries have light hero)
- Site-specific sections (Global has PartnersSection, countries have ValueSection)
- Can override any shared component
- Independent content from WordPress multisite

**Import Pattern:**
```tsx
// Shared components (all sites)
import { MegaMenu, Footer, ServicesSection } from '@/shared/components'

// Global-specific components
import { HeroSection, StatsSection } from '@/sites/global/components'

// Netherlands-specific components (to be built)
import { NetherlandsHero } from '@/sites/netherlands/components'
```
Current Implementation Status

**Frontend Structure:** ✅ COMPLETE (Feb 2026)
✅ Independent site architecture implemented
✅ `shared/` folder with design system and common components
✅ `sites/` folder for site-specific components
✅ All imports updated to new structure
✅ Build verified: 56 routes compile successfully
✅ Navigation restructured to match official Bravinci structure
✅ Mega menu implemented with 3-column "What we do" section

**Global Site:** ✅ COMPLETE
✅ Dark hero section with animated globe and GSAP animations
✅ Stats section (15+ years, 200+ solutions, 98% satisfaction, €50M+ value)
✅ Services section (Strategy & Advisory, Digital Transformation, Data & AI)
✅ Solutions section (Dividos, Strategic Command Center, Data2Hire)
✅ Industries section (6 industries)
✅ About/Bravinci Advantage section
✅ Partners section (Microsoft, AWS, Odoo, Yellowfin, Exasol)
✅ CTA section
✅ Mega menu navigation
🔄 Insights section (content needed)

**Netherlands Site:** ⏳ READY TO BUILD
✅ Route structure set up (`/netherlands/*`)
✅ Shared components available (hero with 3D robot, sections)
✅ Site configuration complete
✅ Build context document created
⏳ Netherlands-specific components need to be built
⏳ Content from WordPress to be integrated
📄 **See:** `NETHERLANDS_BUILD_CONTEXT.md` for complete guide

**Nigeria Site:** ⏳ PENDING
✅ Route structure set up (`/nigeria/*`)
✅ Shared components available
✅ Site configuration complete
⏳ Nigeria-specific components need to be built
⏳ Content from WordPress to be integrated

**Surinam Site:** ⏳ PENDING
✅ Route structure set up (`/surinam/*`)
✅ Shared components available
✅ Site configuration complete
⏳ Surinam-specific components need to be built
⏳ Content from WordPress to be integrated
Key Technical Details
Hero Sections
Global: Dark background with animated globe, white text, GSAP timeline animations
Country sites: Light background with 3D robot (Spline), dark text
Navigation (Header)
Transparent on hero, becomes solid on scroll
Global site: White text on hero (dark background)
Country sites: Dark text on hero (light background)
Logo switches between white/blue versions based on background
SiteContext
Located at lib/site-context.tsx, provides:

Current site information (name, slug, description)
Site-specific configuration
Used by components to adapt behavior per site
Site Configuration
Located at config/sites.ts:


export const globalSite = {
  slug: 'global',
  name: 'Bravinci',
  description: '...',
}

export const sites = [
  { slug: 'netherlands', name: 'Bravinci Netherlands', ... },
  { slug: 'nigeria', name: 'Bravinci Nigeria', ... },
]
Content Documents
Located at /Bravinci Global Content/:

Home _ Landing Page.docx - Homepage content
Services - Overview.docx - Services page
Solutions - Overview.docx - Solutions page
Industries - Overview.docx - Industries page
Individual service, solution, and industry pages
About pages (Who We Are, Leadership, Partners, Approach)
Careers pages
Insights/blog content
WordPress Integration (To Be Implemented)
The frontend needs to fetch content from WordPress:


// lib/wordpress.ts (example structure)
const API_URL = process.env.WORDPRESS_API_URL

export async function getPageContent(siteSlug: string, pageSlug: string) {
  // Fetch from WordPress multisite API
  // Each site has its own endpoint: /wp-json/wp/v2/...
}

export async function getPosts(siteSlug: string) {
  // Fetch posts for specific site
}
Deployment
Platform: Vercel
Current URL: https://frontend-2n8oj3632-eddieaustyn0-gmailcoms-projects.vercel.app
Deploy command: vercel --prod from frontend directory
Next Steps / Pending Work

**Priority 1: Netherlands Site**
1. Build Netherlands-specific components in `sites/netherlands/components/`
2. Create Netherlands stats section with local numbers
3. Customize sections based on Netherlands content documents
4. Build out individual pages (Services, Solutions, Industries, About, Careers, Contact)
5. Add Netherlands-specific case studies/clients
📄 **See:** `NETHERLANDS_BUILD_CONTEXT.md` for detailed guide

**Priority 2: Nigeria & Surinam Sites**
1. Follow same pattern as Netherlands
2. Create site-specific components in respective folders
3. Customize content based on regional needs

**Priority 3: WordPress Integration**
1. Complete `shared/lib/wordpress.ts` API functions
2. Set up WordPress multisite backend
3. Connect each site to its WordPress instance
4. Implement dynamic content fetching

**Priority 4: Content & Polish**
1. Add Insights/blog section to all sites
2. Populate all pages with final content
3. Add real images and media
4. Performance optimization
5. SEO optimization

Key Files to Reference
| File | Purpose |
|------|---------|
| `STRUCTURE.md` | Complete explanation of new folder structure |
| `NETHERLANDS_BUILD_CONTEXT.md` | Guide for building Netherlands site |
| `app/page.tsx` | Global homepage (reference implementation) |
| `app/[site]/page.tsx` | Country site homepage template |
| `sites/global/components/` | Global-specific components (reference) |
| `shared/components/` | Shared components available to all sites |
| `shared/components/mega-menu.tsx` | Navigation component |
| `shared/lib/site-context.tsx` | Multisite context provider (useSite hook) |
| `shared/config/sites/` | Site configurations |
| `shared/config/navigation.ts` | Navigation structure (getNavigation) |
This document should provide complete context for continuing development in a new chat session.