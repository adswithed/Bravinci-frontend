# Bravinci - Animations & Effects Guide

## Overview

The newly redesigned hero section features cutting-edge GSAP animations, vibrant gradient colors, and interactive effects that create a modern, lively user experience.

## Color Palette

### Primary Colors
- **Purple**: `oklch(0.35 0.15 280)` - Main brand color
- **Blue**: `oklch(0.45 0.18 180)` - Secondary accent
- **Cyan**: `oklch(0.7 0.25 200)` - Glow effects
- **Orange**: `oklch(0.65 0.2 40)` - Accent highlights
- **Pink**: `oklch(0.65 0.22 330)` - Secondary highlights

## GSAP Animations in Hero Section

### 1. **Staggered Entrance Animation**
When the page loads, elements appear in sequence with smooth transitions:
- **Title**: Fades in and slides up (0.8s)
- **Description**: Follows with slight delay (0.8s at +0.2s)
- **Buttons**: Appear next (0.8s at +0.4s)
- **Trust Section**: Final element (0.8s at +0.6s)
- **3D Container**: Scales in simultaneously (1s at +0.3s)

### 2. **Floating Animation**
The 3D container has a gentle floating motion:
- **Duration**: 4 seconds
- **Range**: -20px vertical movement
- **Easing**: `sine.inOut` for smooth oscillation
- **Repeat**: Infinite with yoyo effect

### 3. **Parallax Scrolling**
As users scroll, the 3D container moves at 30% of scroll speed:
- Creates depth and visual interest
- Smooth animation with 0.5s duration
- Automatic overwrite to prevent conflicts

### 4. **Background Gradient Animation**
The background gradient continuously shifts:
- **Duration**: 8 seconds
- **Effect**: 200% position shift for infinite animation
- **Blend**: Smooth gradient transitions

## CSS Animations

### Custom Keyframe Animations Added

```css
@keyframes float-slow {
  /* Floating motion with rotation */
  0%, 100%: translateY(0px) rotate(0deg)
  50%: translateY(-20px) rotate(2deg)
}

@keyframes glow-pulse {
  /* Pulsing glow effect */
  0%, 100%: opacity 0.3, blur(20px)
  50%: opacity 0.6, blur(30px)
}

@keyframes gradient-shift {
  /* Animated gradient position */
  0%, 100%: background-position 0% 50%
  50%: background-position 100% 50%
}

@keyframes bounce-slow {
  /* Slow bouncing motion */
  0%, 100%: translateY(0)
  50%: translateY(-10px)
}
```

### Utility Classes
- `.animate-float-slow` - Floating motion for accent elements
- `.animate-glow-pulse` - Pulsing glow for background orbs
- `.animate-gradient-shift` - Animated gradient backgrounds
- `.animate-bounce-slow` - Slow vertical bounce

## Interactive Elements

### Enhanced Spotlight Component
Located in `/components/ui/spotlight-enhanced.tsx`:
- **Dynamic sizing** - Customizable size prop
- **GSAP animation** - Scales and fades with easing
- **Color customization** - Fill color adjustable
- **Timing control** - Duration and delay parameters

### Gradient Button Component
Located in `/components/ui/gradient-button.tsx`:
- **Mouse tracking** - Gradient follows cursor
- **3D feel** - Hover scale and shadow effects
- **Multiple variants** - Primary, secondary, accent
- **Responsive sizes** - SM, MD, LG options

### Animated Background
Located in `/components/animated-background.tsx`:
- **Three orbiting elements** - Independent animation timings
- **Grid pattern** - Subtle background texture
- **Multiple variants** - Default, dark, vibrant options
- **GSAP timeline** - Synchronized animations

## Visual Elements

### Dynamic Glowing Orbs
Three animated orbs with different colors and timing:
1. **Purple-Blue Orb** (Top right) - 8s animation
2. **Cyan-Blue Orb** (Bottom left) - 10s animation with 1s delay
3. **Orange-Pink Orb** (Center-right) - 12s animation with 2s delay

### Floating Accent Dots
Small animated particles that float around the hero:
- Purple dot (top right)
- Cyan dot (bottom right, 1s delay)
- Orange dot (left side, 2s delay)

### Gradient Text Effects
Headlines use multiple gradient layers:
- **"Use Intelligence"** - Purple to cyan gradient
- **"Future"** - Orange to pink gradient
- **Accent tag** - Purple to blue gradient

## Performance Considerations

### Optimization Tips
1. **GSAP Performance**: Uses GPU acceleration for smooth 60fps animations
2. **Lazy Loading**: Spline component uses Suspense fallback
3. **Selective Animations**: Animations scale on mobile devices
4. **Transform-based**: All animations use transform property for efficiency

### Mobile Adaptations
- Floating animations may be reduced on smaller screens
- Hero height adjusts: `py-12 md:py-20`
- 3D container hidden on screens < 1024px
- Touch interactions optimized for mobile

## Usage Examples

### Using the Enhanced Spotlight
```tsx
import { SpotlightEnhanced } from '@/components/ui/spotlight-enhanced'

<SpotlightEnhanced 
  fill="oklch(0.35 0.15 280)"
  size={300}
  duration={4}
  delay={0}
/>
```

### Using the Gradient Button
```tsx
import { GradientButton } from '@/components/ui/gradient-button'

<GradientButton variant="primary" size="lg">
  Get Started
</GradientButton>
```

### Using Animated Background
```tsx
import { AnimatedBackground } from '@/components/animated-background'

<AnimatedBackground variant="vibrant" />
```

## Customization Guide

### Changing Animation Speeds
Edit in `/app/globals.css`:
```css
@keyframes float-slow {
  /* Change duration in animation-duration class */
  animation: float-slow 6s ease-in-out infinite;
  /* Modify to 4s for faster, 8s for slower */
}
```

### Adjusting Colors
Update CSS variables in `/app/globals.css`:
```css
:root {
  --primary: oklch(0.35 0.15 280); /* Purple */
  --secondary: oklch(0.45 0.18 180); /* Blue */
  --accent: oklch(0.65 0.2 40); /* Orange */
}
```

### Modifying GSAP Animations
Edit the `useEffect` hook in `/components/hero-section.tsx`:
```tsx
timeline.from(titleRef.current, {
  opacity: 0,
  y: 30, // Change from 30 to other value
  duration: 0.8, // Speed adjustment
  ease: 'power2.out', // Different easing functions
})
```

## Animation Easing Functions Used

- **power2.out** - Quick start, smooth finish
- **sine.inOut** - Smooth throughout
- **power4.out** - Dramatic entrance

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

All animations are fully GPU-accelerated and tested for smooth performance.

## Future Enhancements

Potential additions:
- SVG path animations
- 3D perspective transforms
- Advanced scroll-trigger effects
- WebGL background effects
- Intersection Observer for scroll animations
