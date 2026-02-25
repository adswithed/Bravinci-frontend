# Bravinci - Enterprise Intelligence Solutions Website

A modern, enterprise-grade website for Bravinci, a global intelligence and AI consulting company. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## 🎯 Project Overview

This is a responsive, high-performance website showcasing Bravinci's intelligence solutions, services, and expertise. The site features:

- **Modern Hero Section** with interactive 3D Spline integration (ready for your scene)
- **Enterprise Design** with premium brand colors (#163f64 primary blue)
- **Responsive Layout** optimized for mobile, tablet, and desktop
- **Smooth Animations** and professional transitions
- **SEO Optimized** with proper metadata and semantic HTML
- **Accessibility** best practices throughout

## 🚀 Features

### Sections Included

1. **Header Navigation** - Sticky header with responsive mobile menu
2. **Hero Section** - Eye-catching headline with 3D scene placeholder and CTAs
3. **Value Proposition** - Key benefits of Enterprise Intelligence
4. **Solutions Section** - Three flagship solutions with detailed cards
5. **Services Section** - Four core service offerings
6. **Statistics Section** - Key metrics showcasing company scale
7. **About Section** - Company mission and key differentiators
8. **Testimonials** - Client success stories with ratings
9. **Trust & Compliance** - Security certifications (ISO 27001, SOC 2, GDPR)
10. **CTA Section** - Contact form and call-to-action
11. **Footer** - Comprehensive site navigation and links

### Design System

- **Color Scheme**: Enterprise blue (#163f64) with neutral grays
- **Typography**: Geist font family for professional look
- **Components**: Built with shadcn/ui for consistency
- **Spacing**: Tailwind CSS scale for harmonious layout
- **Animations**: Smooth transitions and hover effects

## 📋 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Components**: shadcn/ui
- **3D**: Spline for interactive visualizations
- **Icons**: Lucide React
- **Images**: Pre-generated professional images

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Quick Start

1. **Clone or download this project**
   ```bash
   git clone <repository-url>
   cd bravinci-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed)
   Create a `.env.local` file with any required API keys

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### Update Company Information

**Header & Navigation** (`/components/header.tsx`)
- Update logo text and links
- Modify navigation items
- Customize button text

**Hero Section** (`/components/hero-section.tsx`)
- Update headline and description
- Replace Spline scene URL with your own 3D scene
- Modify CTA button text and links

**Content Sections**
- Edit solution titles and descriptions in `/components/solutions-section.tsx`
- Update service details in `/components/services-section.tsx`
- Modify statistics in `/components/stats-section.tsx`
- Update testimonials in `/components/testimonials-section.tsx`

### Brand Customization

**Colors** (`/app/globals.css`)
- Primary color: Change `--primary` value
- Secondary colors: Update `--secondary`, `--accent`, `--muted`
- Theme is automatically applied across all components

**Typography**
- Fonts are defined in `/app/layout.tsx`
- Modify Geist imports to use different fonts
- Update Tailwind theme in `globals.css`

### Spline 3D Scene Integration

The hero section includes a placeholder for a Spline 3D scene:

1. Create your scene at [spline.design](https://spline.design)
2. Get the scene URL/ID
3. Update in `/components/hero-section.tsx`:
   ```tsx
   <SplineScene 
     scene="https://prod.spline.design/YOUR_SCENE_ID/scene.spline"
     className="w-full h-full"
   />
   ```

## 🎨 Design Features

- **Responsive Grid Layouts** - Automatic adjustments for all screen sizes
- **Hover Effects** - Interactive cards with shadow transitions
- **Gradient Backgrounds** - Subtle color gradients for depth
- **Spotlight Effects** - Animated light effects in hero section
- **Professional Typography** - Proper font hierarchy and sizing
- **Accessible Navigation** - ARIA labels and semantic HTML

## 📱 Responsive Design

The site is fully responsive:
- **Mobile**: 320px+ (optimized touch targets)
- **Tablet**: 768px+ (two-column layouts)
- **Desktop**: 1024px+ (full multi-column layouts)

## 🔒 Security & Compliance

The site includes sections for:
- ISO 27001 certification
- SOC 2 compliance
- GDPR compliance notices

Update these in `/components/trust-section.tsx` to match your actual certifications.

## 📊 Performance

- **Lazy Loading**: Components load as needed
- **Image Optimization**: Using Next.js Image component (ready to implement)
- **Code Splitting**: Automatic with Next.js
- **CSS Optimization**: Tailwind v4 purges unused styles

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Click "Deploy"
4. Configure environment variables if needed

```bash
npm run build
npm run start
```

### Other Platforms

The project works with any Node.js hosting:
- Netlify
- AWS Amplify
- Heroku
- DigitalOcean

## 📞 Support & Contact

Update contact information in:
- `/components/cta-section.tsx` - Email, phone, location
- `/components/footer.tsx` - Footer links and contact

## 📄 License

This template is provided as-is for Bravinci use.

## 🎓 Next Steps

1. **Update all text content** - Replace with actual Bravinci information
2. **Add Spline 3D scene** - Replace placeholder with your interactive scene
3. **Customize colors** - Adjust if needed (primary blue is included)
4. **Add real images** - Replace placeholder images with company assets
5. **Configure analytics** - Add Google Analytics or Vercel Analytics
6. **Test on devices** - Verify mobile and desktop experience
7. **Deploy** - Push to production

## ✨ Features Highlights

✅ Enterprise-grade design  
✅ Mobile-first responsive  
✅ Accessibility compliant  
✅ SEO optimized  
✅ Fast performance  
✅ Easy to customize  
✅ Tailwind CSS v4  
✅ shadcn/ui components  
✅ TypeScript ready  
✅ Next.js 16 latest features  

---

**Built with ❤️ for Bravinci - Enterprise Intelligence Solutions**
