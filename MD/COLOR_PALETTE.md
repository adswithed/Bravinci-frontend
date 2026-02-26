# Bravinci Color Palette Guide

## Primary Colors

### Primary Brand Color
- **Color**: Purple/Blue gradient
- **RGB**: oklch(0.35 0.15 280)
- **Usage**: Main brand color for headings, buttons, and key elements
- **Gradient Pairs**: Purple-600 to Blue-600

### Secondary Brand Color
- **Color**: Orange (#E17000)
- **Hex**: #E17000
- **RGB**: Orange-600/Orange-500
- **Usage**: Accent color for highlights, secondary buttons, and emphasis
- **Gradient Pairs**: Orange-600 to Orange-500

## Color Palette Structure

### Text & Foreground
- **Foreground**: oklch(0.18 0.07 245) - Dark blue/purple for text
- **Primary Foreground**: White (oklch(0.98 0 0))
- **Secondary Foreground**: White (oklch(0.98 0 0))

### Background
- **Main Background**: oklch(0.99 0 220) - Almost white
- **Card Background**: Pure white (oklch(1 0 0))
- **Dark Overlay**: Blue-950 to Purple-950 for dark sections

### Gradients Used in Hero Section

#### Title Gradients
1. **"Use Intelligence"**: Purple-700 → Blue-600 → Purple-500
2. **"Future"**: Orange-600 → Orange-500

#### Button Gradients
1. **Primary CTA**: Purple-700 → Blue-600
2. **Secondary Button**: Orange border with orange-50 hover state

#### Background Gradients
1. **Section Background**: Blue-50 → Purple-50 → White
2. **Glowing Orbs**: 
   - Purple-500 to Blue-500
   - Blue-500 to Purple-600
   - Orange-500 to Orange-400

#### Floating Elements
1. **Small dots**: 
   - Purple-600 to Blue-600 (purple dot)
   - Blue-600 to Purple-600 (cyan dot)
   - Orange-600 to Orange-500 (orange dot)

## Removed Colors

- ✗ Cyan-400, Cyan-500 (standalone)
- ✗ Pink-500, Pink-400 (standalone)
- ✗ Green-600, Emerald-600, Green-50, Blue-50, Cyan-50 (greenish tones)

## New Color Strategy

### Solid Colors Removed
All solid colors have been replaced with sleek gradients to create:
- More visual depth
- Better brand consistency
- More modern, polished appearance
- Smoother transitions between design elements

### Gradient Approach
- **Primary Gradients**: Purple to Blue (for main elements)
- **Secondary Gradients**: Orange shades (for accents)
- **Combined Gradients**: Purple/Blue + Orange (for hybrid elements)

## Implementation

All color values are defined in `/app/globals.css`:
```css
:root {
  --primary: oklch(0.35 0.15 280);
  --secondary: #E17000;
  --accent: #E17000;
  --glow-purple: oklch(0.6 0.22 290);
  --glow-orange: #E17000;
  --glow-blue: oklch(0.65 0.2 280);
}
```

## Usage Examples

### Text with Gradient
```jsx
<span className="bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text text-transparent">
  Gradient Text
</span>
```

### Button with Gradient
```jsx
<Button className="bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700">
  Primary Action
</Button>
```

### Glowing Background Element
```jsx
<div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20" />
```

## Customization

To change colors globally:
1. Update `/app/globals.css` `:root` section
2. Colors automatically propagate to all gradient uses
3. Test in different sections to ensure consistency

## Accessibility

- All text colors meet WCAG AA contrast requirements
- Gradients maintain readability with solid text
- Opacity levels preserved for visual hierarchy
