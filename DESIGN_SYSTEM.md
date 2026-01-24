# Encouragement Ink Design System

A comprehensive guide to recreating the glassmorphic, psychology-inspired aesthetic of the Encouragement Ink website.

---

## 🎨 Design Philosophy

**"Midnight Ink"** - A sophisticated, dark glassmorphic design that feels both professional and approachable. The aesthetic combines:

- **Glassmorphism**: Frosted glass cards with subtle transparency
- **Noise Texture**: Grain overlay for a tactile, printed feel
- **Glitter Particles**: Subtle animated sparkles for magic and delight
- **Gradient Blurs**: Soft, ambient color pools that create depth
- **Warm-Cool Contrast**: Orange/pink warmth balanced with teal coolness

---

## 🎯 Color Palette

### Background
```css
--background: #0f1115;  /* "Midnight Ink" - Deep charcoal, almost black */
```

### Accent Gradients
```css
/* Primary CTA Gradient (warm, inviting) */
background: linear-gradient(to right, #fdba74, #f9a8d4, #5eead4);
/* Tailwind: from-orange-300 via-pink-300 to-teal-300 */

/* Text Gradient (for headlines) */
background: linear-gradient(to right, #fdba74, #f9a8d4, #5eead4);
/* Same as above, used with background-clip: text */
```

### Ambient Background Blurs
```css
/* Purple glow - top left */
background: rgba(88, 28, 135, 0.3);  /* purple-900/30 */

/* Teal glow - bottom right */  
background: rgba(19, 78, 74, 0.2);   /* teal-900/20 */

/* Pink glow - center */
background: rgba(131, 24, 67, 0.2);  /* pink-900/20 */
```

### Text Colors
```css
--text-primary: #f1f5f9;    /* slate-100 */
--text-secondary: #cbd5e1;  /* slate-300 */
--text-muted: #94a3b8;      /* slate-400 */
--text-subtle: #64748b;     /* slate-500 */
```

### Glass/Border Colors
```css
--glass-bg: rgba(255, 255, 255, 0.05);      /* white/5 */
--glass-border: rgba(255, 255, 255, 0.1);   /* white/10 */
--glass-hover: rgba(255, 255, 255, 0.1);    /* white/10 */
```

### Accent Colors
```css
/* Orange (For Individuals) */
--accent-orange: #fdba74;      /* orange-300 */
--accent-orange-bg: rgba(249, 115, 22, 0.2);  /* orange-500/20 */

/* Teal (For Clinicians) */
--accent-teal: #5eead4;        /* teal-300 */
--accent-teal-bg: rgba(20, 184, 166, 0.2);   /* teal-500/20 */

/* Pink (Highlights) */
--accent-pink: #f9a8d4;        /* pink-300 */
--accent-pink-bg: rgba(236, 72, 153, 0.1);   /* pink-500/10 */
```

---

## ✨ Typography

### Font Stack
```css
/* Body/UI */
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Headlines/Serif */
font-family: ui-serif, Georgia, Cambria, 'Times New Roman', serif;
/* Tailwind: font-serif */
```

### Text Styles
```css
/* Hero Headline */
.hero-headline {
  font-family: serif;
  font-size: 3rem;        /* text-5xl */
  font-weight: 500;       /* font-medium */
  line-height: 1.1;       /* leading-tight */
}
@media (min-width: 768px) {
  .hero-headline { font-size: 4.5rem; }  /* md:text-7xl */
}

/* Section Headlines */
.section-headline {
  font-family: serif;
  font-size: 2.25rem;     /* text-4xl */
}

/* Card Titles */
.card-title {
  font-family: serif;
  font-size: 1.875rem;    /* text-3xl */
}

/* Body Text */
.body-text {
  font-size: 1.125rem;    /* text-lg */
  line-height: 1.75;      /* leading-relaxed */
  color: #cbd5e1;         /* slate-300 */
}

/* Labels/Buttons */
.label {
  font-size: 0.75rem;     /* text-xs */
  font-weight: 700;       /* font-bold */
  letter-spacing: 0.1em;  /* tracking-widest */
  text-transform: uppercase;
}
```

---

## 🪟 Core Visual Effects

### 1. Noise Overlay (Texture)

Creates a subtle grain texture across the entire page for a tactile, printed feel.

```tsx
const NoiseOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-50 opacity-[0.07] mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
    }} 
  />
);
```

**Key properties:**
- `z-50`: Sits above everything
- `opacity-[0.07]`: Very subtle
- `mix-blend-overlay`: Blends with content below
- `pointer-events-none`: Doesn't block interactions

---

### 2. Background Gradient Blurs

Ambient color pools that create depth and atmosphere.

```tsx
const BackgroundGradients = () => (
  <div className="fixed inset-0 z-0">
    {/* Purple - Top Left */}
    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
    
    {/* Teal - Bottom Right */}
    <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-teal-900/20 rounded-full blur-[120px] mix-blend-screen" />
    
    {/* Pink - Center */}
    <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-pink-900/20 rounded-full blur-[100px] mix-blend-screen" />
  </div>
);
```

**Key properties:**
- `blur-[120px]`: Very large blur radius
- `mix-blend-screen`: Adds color additively
- `animate-pulse`: Subtle breathing animation (optional)
- Positioned partially off-screen for soft edges

---

### 3. Glassmorphism Card

The signature frosted glass effect.

```tsx
const GlassCard = ({ children, className = "" }) => (
  <div className={`
    relative 
    backdrop-blur-xl 
    bg-white/5 
    border border-white/10 
    rounded-3xl 
    shadow-xl 
    overflow-hidden 
    ${className}
  `}>
    {/* Inner gradient highlight */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[inherit]" />
    {children}
  </div>
);
```

**Key properties:**
- `backdrop-blur-xl`: Heavy blur for glass effect
- `bg-white/5`: Slight white tint
- `border-white/10`: Subtle light border
- `rounded-3xl`: Large border radius (1.5rem)
- Inner gradient adds depth/reflection

---

### 4. Glitter Particle Effect

Animated sparkles that appear and fade.

```tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const Glitter = () => {
  const [particles] = useState(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }))
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};
```

**Key properties:**
- Random positioning within container
- `shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]`: Glow effect
- Framer Motion for smooth fade in/out animation
- `pointer-events-none`: Non-interactive

---

### 5. Shiny Button with Shimmer

Gradient button with animated shine sweep.

```tsx
const ShinyButton = ({ text, primary = false, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`
      relative px-8 py-3 rounded-full font-bold text-sm 
      tracking-widest uppercase transition-all overflow-hidden group
      ${primary 
        ? "bg-gradient-to-r from-orange-300 via-pink-300 to-teal-300 text-slate-900 shadow-[0_0_20px_rgba(255,192,203,0.5)]" 
        : "bg-transparent border border-white/30 text-white hover:bg-white/10"
      }
    `}
  >
    <span className="relative z-10 flex items-center gap-2">
      {text}
    </span>
    {/* Shimmer sweep effect */}
    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0" />
  </motion.button>
);
```

**Tailwind config for shimmer animation:**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    }
  }
}
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.0.0",
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.500.0"
  },
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "vite": "^7.0.0"
  }
}
```

---

## ⚙️ Tailwind CSS v4 Configuration

### postcss.config.js
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}
```

### index.css (Entry point)
```css
@import "tailwindcss";

@theme {
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}
```

### tailwind.config.js (Optional, for animations)
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
```

---

## 🏗️ Page Structure Template

```tsx
const PageLayout = ({ children }) => (
  <div className="min-h-screen bg-[#0f1115] text-slate-100 font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">
    <NoiseOverlay />
    <BackgroundGradients />
    <Navigation />
    
    <main className="relative z-10">
      {children}
    </main>
    
    <Footer />
  </div>
);
```

---

## 🧩 Common Patterns

### Section Container
```html
<section className="relative z-10 py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <!-- Content -->
  </div>
</section>
```

### Page Header
```tsx
<div className="pt-32 pb-12 px-6 text-center">
  <motion.h1 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-4xl md:text-6xl font-serif mb-4"
  >
    Page Title
  </motion.h1>
  <p className="text-xl text-slate-300 max-w-2xl mx-auto">
    Subtitle text here
  </p>
</div>
```

### Card Grid
```html
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <GlassCard className="p-8">
    <!-- Card content -->
  </GlassCard>
</div>
```

### Hover States
```css
/* Cards */
hover:bg-white/10 transition-colors duration-500

/* Text links */
hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]

/* Buttons */
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

---

## 🎭 Animation Guidelines

### Page Load Animations (Framer Motion)
```tsx
// Fade up
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2 }}

// Scale in
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8 }}
```

### Staggered Children
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
```

### Parallax Scroll
```tsx
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

<motion.div style={{ y }}>
  <!-- Content moves slower than scroll -->
</motion.div>
```

---

## 📝 Quick Reference Checklist

To transform another website to match this aesthetic:

- [ ] Set background to `#0f1115`
- [ ] Add noise overlay component
- [ ] Add ambient gradient blurs (purple, teal, pink)
- [ ] Replace cards with glassmorphic style
- [ ] Use serif font for headlines
- [ ] Add gradient text for emphasis
- [ ] Implement shimmer buttons
- [ ] Add Framer Motion for micro-interactions
- [ ] Use the orange/teal accent color pairing
- [ ] Apply `selection:bg-pink-500` for text selection
- [ ] Ensure `overflow-x-hidden` on body
- [ ] Use `rounded-3xl` for major containers
- [ ] Add glitter effect to feature cards

---

## 📁 File Structure

```
src/
├── App.tsx                 # Router setup
├── main.tsx               # Entry point
├── index.css              # Tailwind imports
├── assets/
│   └── logo.png
├── components/
│   └── shared.tsx         # All shared components
│       ├── NoiseOverlay
│       ├── Glitter
│       ├── GlassCard
│       ├── ShinyButton
│       ├── BackgroundGradients
│       ├── Navigation
│       ├── Footer
│       └── PageLayout
└── pages/
    ├── HomePage.tsx
    ├── ToolsPage.tsx
    ├── ForIndividualsPage.tsx
    ├── ForTherapistsPage.tsx
    └── AboutPage.tsx
```

---

*Created for Encouragement Ink - January 2026*
