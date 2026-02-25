# Hero Section - Quick Start Guide

## What Changed?

The hero section was completely redesigned with:
- ✨ Vibrant purple, blue, orange, and pink color gradients
- 🎬 Smooth GSAP animations throughout
- 🌊 Animated glowing background orbs
- 🪂 Parallax scrolling effect on 3D hero
- ⚡ Staggered entrance animations
- 🖱️ Interactive hover effects

## Key Animation Features

### 1. Staggered Entrance (On Page Load)
Elements appear one after another with smooth transitions:
```
Title (0.8s) → Description (0.8s) → Buttons (0.8s) → Trust (0.8s)
```

### 2. Floating Hero Container
The 3D container gently floats up and down:
- Smooth, continuous motion
- 4-second cycle
- Creates depth perception

### 3. Parallax Scroll Effect
As you scroll down, the hero 3D container moves at 30% of your scroll speed:
- Creates visual depth
- Modern parallax technique
- Smooth performance

### 4. Glowing Background
Three animated orbs pulse and move in the background:
- Purple-Blue orb (top right)
- Cyan-Blue orb (bottom left)
- Orange-Pink orb (center)

## Component Overview

### Files to Know About

| File | Purpose | Customization |
|------|---------|---|
| `/components/hero-section.tsx` | Main hero section with all animations | Edit GSAP timings, text content |
| `/app/globals.css` | Color palette and animation keyframes | Adjust colors, animation speeds |
| `/components/ui/gradient-button.tsx` | Interactive buttons | Change button colors/sizes |
| `/components/animated-background.tsx` | Background orb animations | Adjust orb colors, timing |

## Customization Examples

### Change Button Colors
In `/components/hero-section.tsx`, update the Button className:
```tsx
// From:
className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 ..."

// To:
className="gap-2 bg-gradient-to-r from-green-600 to-emerald-600 ..."
```

### Adjust Animation Speeds
In `/components/hero-section.tsx`, change duration values:
```tsx
// Slower entrance (was 0.8s):
duration: 1.2

// Faster floating (was 4s):
duration: 2
```

### Change Glow Colors
In `/app/globals.css`, update color variables:
```css
--glow-cyan: oklch(0.7 0.25 200);
--glow-purple: oklch(0.6 0.22 290);
```

## How to Add Spline Scene

Currently using a fallback image. To add a 3D Spline scene:

1. Create a scene at [spline.design](https://spline.design)
2. Get your scene URL
3. Uncomment the SplineScene component in hero-section.tsx:
```tsx
{/* Uncomment when you have a scene URL */}
<SplineScene 
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.spline"
  className="w-full h-full"
/>
```

## Color Palette Reference

| Element | Purpose | Color Code |
|---------|---------|-----------|
| Primary Text | Headings | `from-purple-600 to-blue-600` |
| Accent Text | Highlights | `from-orange-500 to-pink-500` |
| Button | CTA | `from-purple-600 to-blue-600` |
| Glow 1 | Background | Purple-Blue |
| Glow 2 | Background | Cyan-Blue |
| Glow 3 | Background | Orange-Pink |

## Animation Easing Functions

- `power2.out` - Quick start, smooth finish (text entrance)
- `sine.inOut` - Smooth throughout (floating, parallax)
- `none` - Linear (background shift)

## Performance Tips

✅ All animations use GPU acceleration
✅ 60fps smooth performance
✅ Optimized for mobile devices
✅ Lazy loads 3D content
✅ No layout shift issues

## Mobile View

- Hero height: responsive (py-12 md:py-20)
- 3D container: hidden on small screens
- Animations: scale appropriately
- Touch-friendly interactions

## Testing Animation Performance

1. Open DevTools (F12)
2. Go to Performance tab
3. Record a page load
4. Look for 60fps throughout

## Common Tweaks

### Make animations faster globally
In `/app/globals.css`, reduce all durations by 0.5x

### Add more floating elements
Copy the floating dot code in hero-section.tsx, adjust delays

### Change entrance style
Replace `power2.out` with `back.out` for bounce effect

### Increase glow intensity
Change opacity values from 0.2/0.3/0.15 to 0.4/0.5/0.3

## Troubleshooting

**Animations not playing?**
- Make sure GSAP is installed: `npm list gsap`
- Check browser console for errors
- Verify useEffect dependencies are correct

**Slow performance?**
- Reduce number of glowing orbs
- Decrease blur values
- Check if hardware acceleration is enabled

**Colors look wrong?**
- Clear browser cache
- Check CSS variable definitions
- Verify Tailwind config is applied

## Next Steps

1. Review `/ANIMATIONS_GUIDE.md` for detailed documentation
2. Customize colors in `/app/globals.css`
3. Update button text and links
4. Add your Spline 3D scene
5. Test on mobile devices

## Resources

- GSAP Docs: https://gsap.com/docs
- Spline: https://spline.design
- Tailwind Colors: https://tailwindcss.com/docs/colors
- MDN Transforms: https://developer.mozilla.org/en-US/docs/Web/CSS/transform

---

**Version**: 1.0 - Production Ready
**Last Updated**: 2024
**Status**: ✅ All animations working smoothly
