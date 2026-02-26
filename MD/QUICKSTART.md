# Bravinci Website - Quick Start Guide

Get your Bravinci website up and running in 5 minutes!

## ⚡ 5-Minute Setup

### 1. Install Dependencies (1 min)
```bash
npm install
```

### 2. Start Development Server (30 sec)
```bash
npm run dev
```

### 3. Open in Browser (30 sec)
```
http://localhost:3000
```

✅ **Done!** Your website is running locally.

---

## 📝 Essential Customization (5-10 min)

### Update Content

#### Header Logo & Navigation
**File**: `/components/header.tsx` (line 13-16)
```tsx
// Change this:
<span className="hidden sm:inline font-bold text-xl text-foreground">Bravinci</span>
// And update navigation links as needed
```

#### Hero Headline
**File**: `/components/hero-section.tsx` (line 24-27)
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground">
  Your Headline Here with <span className="text-primary">Emphasis</span>
</h1>
```

#### Solutions
**File**: `/components/solutions-section.tsx` (line 13-35)
Update the `solutions` array with your offerings.

#### Company Info
**File**: `/components/about-section.tsx` (line 30-40)
Update company description and features.

#### Contact Info
**File**: `/components/cta-section.tsx` (line 60-75)
Update email, phone, and location.

#### Footer
**File**: `/components/footer.tsx` (line 45-85)
Update company info and links.

---

## 🎨 Design Customization (2-5 min)

### Change Brand Color

**File**: `/app/globals.css` (line 7-10)

Find this section:
```css
:root {
  --primary: oklch(0.28 0.08 245);  /* Blue */
  ...
}
```

**Change color values**:
- `--primary`: Your main brand color
- `--secondary`: Accent color
- `--muted`: Neutral gray

### Preset Colors
- **Professional Blue** (current): `oklch(0.28 0.08 245)`
- **Forest Green**: `oklch(0.35 0.10 150)`
- **Deep Purple**: `oklch(0.30 0.12 310)`
- **Coral Red**: `oklch(0.55 0.15 25)`

---

## 🖼️ Add Your Logo & Images

### Update Hero Image
**File**: `/public/hero-3d.jpg` - Replace with your image

### Update Other Images
```bash
/public/
├── hero-3d.jpg (Hero background)
├── analytics.jpg (Analytics section)
└── strategy.jpg (Strategy section)
```

### Update in Code
**File**: `/components/hero-section.tsx` (line 51-56)
```tsx
<Image
  src="/your-image.jpg"  // Change this path
  alt="Your description"
  fill
  priority
/>
```

---

## 🔗 Update Links & Navigation

### Internal Links
Update in `/components/header.tsx`:
```tsx
<Link href="#solutions">Solutions</Link>
<Link href="#about">About</Link>
<Link href="#services">Services</Link>
```

### External Links
Update in `/components/footer.tsx`:
```tsx
<a href="https://yourwebsite.com">Link text</a>
```

### Call-to-Action Buttons
Update throughout components:
```tsx
<Button asChild>
  <Link href="#contact">Your CTA Text</Link>
</Button>
```

---

## 📱 Add Spline 3D Scene

### Get Your Spline Scene
1. Go to [spline.design](https://spline.design)
2. Create or import your 3D scene
3. Click "Share" > "Embed"
4. Copy your scene URL

### Add to Website
**File**: `/components/hero-section.tsx` (line 45-50)

Uncomment this section:
```tsx
<SplineScene 
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.spline"
  className="w-full h-full"
/>
```

Replace `YOUR_SCENE_ID` with your actual ID.

---

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions**

---

## 📂 Project Structure

```
bravinci-website/
├── app/
│   ├── layout.tsx          # Root layout with meta tags
│   ├── globals.css         # Theme colors & styling
│   └── page.tsx            # Homepage (all sections)
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero-section.tsx    # Hero with image/Spline
│   ├── value-section.tsx   # Value propositions
│   ├── solutions-section.tsx # Your solutions
│   ├── services-section.tsx # Services offered
│   ├── stats-section.tsx   # Key metrics
│   ├── about-section.tsx   # Company info
│   ├── testimonials-section.tsx # Client quotes
│   ├── trust-section.tsx   # Certifications
│   ├── cta-section.tsx     # Contact & CTA
│   ├── footer.tsx          # Footer
│   └── ui/                 # shadcn/ui components
├── public/                 # Images & static assets
├── package.json            # Dependencies
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript config
├── README.md               # Full documentation
├── FEATURES.md             # Feature details
├── DEPLOYMENT.md           # Deployment guide
└── QUICKSTART.md           # This file
```

---

## 🎯 Common Tasks

### Change a Section Title
1. Find the section component
2. Update the `<h2>` tag with new text
3. Save and see live update

### Add a New CTA Button
1. Copy an existing button component
2. Update the text and link
3. Add your styling classes

### Update Footer Links
1. Open `/components/footer.tsx`
2. Update the link URLs
3. Modify the link text

### Add Social Media Links
**File**: `/components/footer.tsx` (line 30-45)
```tsx
<a href="https://linkedin.com/company/bravinci">
  <Linkedin className="h-5 w-5" />
</a>
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run build  # See detailed error messages
```

### Styles Not Updating
Clear browser cache:
- Open DevTools (F12)
- Settings > Network > Disable cache
- Reload page

---

## 💡 Next Steps

1. ✅ Customize content (10 min)
2. ✅ Update images (5 min)
3. ✅ Change colors (2 min)
4. ✅ Add Spline scene (if desired)
5. ✅ Update links (5 min)
6. ✅ Test on mobile (5 min)
7. ✅ Deploy to Vercel (5 min)

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Guide](https://ui.shadcn.com/)
- [Full README](./README.md)
- [Features Guide](./FEATURES.md)

---

## 🎉 You're Ready!

Your Bravinci website is ready for customization and deployment. Make it your own and launch it to the world!

**Questions?** Check the full [README.md](./README.md) for detailed information on every aspect of the site.

---

**Happy building! 🚀**
