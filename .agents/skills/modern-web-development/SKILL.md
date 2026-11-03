---
name: modern-web-development
description: >-
  Elite frontend web development and UI/UX standards skill. Use this skill whenever
  designing, building, or refining web components, landing pages, hero sections,
  navbars, footers, CTAs, animations, or styling in React, Next.js, and Tailwind CSS.
  Encapsulates standards from Scrolltide, Refero, 21st.dev, Framer Motion, and UI/UX Pro Max.
---

# Modern Web Development & UI/UX Standards

This skill codifies industry-leading web development standards inspired by **Scrolltide**, **Refero.design**, **21st.dev**, **Framer Motion**, and **Get Layers** architectural practices. Apply these patterns across all components, hero sections, navigation bars, footers, CTAs, 3D visual elements, and micro-interactions.

---

## 1. Scrolltide: Scroll-Driven Motion & Scrubbing

Scroll-driven animations transform static web pages into fluid, cinematic experiences.

### Core Principles
- **Velocity & Direction Awareness**: Animations should react to scroll speed and direction, avoiding disorienting sudden jumps.
- **Sticky Stacking Cards**: Cards that lock into viewport position, scaling down slightly (`scale: 0.95 -> 1`) with progressive opacity and blur as subsequent cards stack on top.
- **Scrubbed Kinetic Typography**: Text reveals that wipe left-to-right or fill gradient masks driven by `useScroll` scroll progress.
- **Smooth Parallax Offsets**: Ambient background elements move at 0.2x speed, middle graphics at 0.5x, and foreground cards at 1.0x to generate authentic spatial depth.

### Implementation Pattern (Framer Motion + Next.js)
```tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollStackedSection({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-20 w-full rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-2xl backdrop-blur-xl"
      >
        {children}
      </motion.div>
    </div>
  );
}
```

---

## 2. Navbar Gallery: Floating Islands & Fluid Pill Navs

Modern navigation bars prioritize unobtrusiveness, clear hierarchy, and delightful micro-interactions.

### Signature Layout Archetypes
1. **Floating Glass Island**: Centered floating capsule (`rounded-full max-w-4xl border border-white/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg`).
2. **Dynamic Sliding Indicator Pill**: A shared animated background pill (`layoutId="active-pill"`) that slides smoothly beneath hovered or active navigation tabs.
3. **Mega-Menu Grid Dropdowns**: Two-column to four-column flyouts with category icons, descriptive two-line summaries, and featured resource callouts.
4. **Micro-Action CTAs**: Buttons inside navbars should feature subtle border-beams or gradient glows rather than aggressive full-width solids.

### Key Rules
- Always use `backdrop-blur-md` or `backdrop-blur-lg` to prevent text clashes with page content scrolling underneath.
- Mobile drawers must lock body scroll (`overflow: hidden`), provide a solid backdrop tap-to-dismiss, and animate children with staggered entrance (`staggerChildren: 0.05`).

---

## 3. Footer Design: High-Conversion Mega Footers

Footers are the structural anchor and final conversion touchpoint of high-trust digital products.

### Architectural Blueprint
- **Commanding Top Border / Gradient Divider**:
  ```tsx
  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
  ```
- **Categorized Multi-Column Sitemap**: 3–5 logical columns (Product, Solutions, Network, Resources, Legal) with high-contrast headers and subtle hover transitions (`text-slate-500 hover:text-slate-900 transition-colors`).
- **Live System Status Indicator**: Real-time operational indicator (`w-2 h-2 rounded-full bg-emerald-500 animate-pulse` + "All systems operational").
- **Newsletter / Community Capture**: Inline input box with instant validation, clear privacy statement, and tactile submit button.
- **Compliance & Legal Strip**: DPDP Act / GDPR compliance notice, copyright, terms, privacy, and social media iconography with animated hover lift.
- **Ambient Bottom Watermark**: Subtle, oversized brand mark or typography in the bottom background (`opacity-[0.03] select-none pointer-events-none`).

---

## 4. CTA Gallery: Bento Boxes & Magnetic Spotlights

CTAs must balance unmistakable visual pull with genuine credibility.

### Best-in-Class Patterns
- **Bento Grid CTA**: Asymmetric multi-card layout combining the primary conversion action with live social proof cards, recent milestone metrics, and risk-reversal guarantees.
- **Spotlight Hover Cards**: Radial gradient spotlight following cursor coordinates (`radial-gradient(400px circle at ${mouse.x}px ${mouse.y}px, rgba(99,91,255,0.08), transparent)`).
- **Dual-Intent Conversion Split**:
  - **Primary**: High-contrast, glowing action ("Submit Venture" or "Post Requirement →").
  - **Secondary**: Frictionless exploration ("Explore Portfolio", "Read FAQ", or "View Vetted Talent").
- **Embedded Social Proof**: Real founder/investor avatar stacks with "+1,200 active members" badge directly beneath the CTA buttons.

---

## 5. Refero: SaaS & Product Design Discipline

Extracted from the top 1% SaaS products featured on Refero.design.

### Strict Design System Rules
- **8pt Grid Consistency**: Margins, paddings, and gaps strictly adhere to multiples of 4px and 8px (`gap-2`, `gap-4`, `gap-6`, `p-6`, `p-8`, `p-10`).
- **No Generic "Lorem Ipsum"**: Always write authentic, domain-accurate copy reflecting real business models, unit economics, and operational metrics.
- **Micro-Badges & Source Chips**: Every data point must display context (e.g., "Verified MSME Mandate", "IIT-M Incubated", "₹14 Cr Domestic Sales").
- **Nested Border Radius Formula**:
  $$\text{Radius}_{\text{inner}} = \text{Radius}_{\text{outer}} - \text{Padding}$$
  Never let inner elements have a larger border-radius than their enclosing container.

---

## 6. Superhero: Hero Section Masterclass

The hero section decides whether a user stays or bounces within 3 seconds.

### The 5-Element Formula
1. **Eyebrow Badge**: Shimmering pill badge with pulsing status dot (`variant="cyan"` or `variant="indigo"`).
2. **Commanding Value Headline**: Clamp-scaled typography (`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540]`). Highlight high-conviction keywords with gradient text accents.
3. **Concise Sub-Headline**: Exactly 1 to 2 sentences explaining who it is for, how it works, and the distinct advantage.
4. **Dual CTA Cluster**: Primary high-intent button + Secondary exploratory link, with keyboard focus rings and active tap physics.
5. **Hero Visual Showcase**:
   - Live interactive 3D canvas (e.g., `SpinningGlobe`, `ConnectingNetworkGraphic`).
   - Angled dashboard preview card with layered glass shadows.
   - Live data ticker strip / logo marquee immediately beneath the fold.

---

## 7. 3D Icons & Spatial Graphics

Static 2D icons often feel flat on modern luxury landing pages.

### Design Standards
- **Authentic Lighting & Gloss**: Three-point rim lighting matching the brand palette (e.g., Teal `#00D4B2`, Iris `#635BFF`, Navy `#0A2540`).
- **Continuous Ambient Floating**: Sub-pixel vertical levitation using sine-wave oscillation:
  ```css
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(1deg); }
  }
  ```
- **Retina Scaling**: Canvas-based 3D assets must adapt to `Math.min(window.devicePixelRatio, 2.5)` to prevent pixelation on modern high-DPI displays.
- **Resource Optimization**: Auto-pause rendering loops when elements are offscreen using `IntersectionObserver` to preserve battery and GPU cycles.

---

## 8. Framer Motion: Physics & Micro-Interactions

### Golden Rules
- **Physics-Based Springs**: Prefer `type: "spring"` with natural parameters (`stiffness: 260, damping: 20`) over mechanical linear easings.
- **Orchestrated Staggers**:
  ```tsx
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };
  ```
- **Layout Animations**: Use `layout` on parent elements and `layoutId` on sliding indicator tabs for instant, butter-smooth layout transitions without reflow jank.
- **Micro-Gestures**: Every interactive card must have tactile `whileHover={{ y: -3, scale: 1.01 }}` and `whileTap={{ scale: 0.98 }}` states.

---

## 9. UI/UX Pro Max: Contrast, Layout & Accessibility

### The Flawless Polish Checklist
- **Contrast Ratios**: Body text must maintain &ge; 4.5:1 against backgrounds; large titles &ge; 3.0:1 (WCAG AA/AAA).
- **Touch Target Dimensions**: Interactive elements must provide at least 44x44px clickable area on mobile screens.
- **Zero CLS (Cumulative Layout Shift)**: Always specify fixed aspect ratios, explicit width/height, or skeleton loaders to avoid layout jumping.
- **Focus Rings**: Never remove `outline: none` without providing an enhanced visible replacement (`focus-visible:ring-2 focus-visible:ring-[#00D4B2] focus-visible:outline-hidden`).
- **Horizontal Overflow Hygiene**: Keep carousels flush by placing `overflow-hidden` on the outer viewport and `-mx-2.5` on the inner flex track.

---

## 10. 21st.dev & MagicUI Component Catalog

Incorporate modern animated primitives into every production interface:
- **Border Beam**: Animated luminous beam traveling around container borders.
- **Shimmer Button**: Sleek button with an animated gradient sheen reflecting across its surface.
- **Number Ticker**: Animated counter that counts up to final metrics upon entering the viewport.
- **Marquee**: Infinite smooth scrolling ticker for trust badges, enterprise logos, or testimonials.
- **Spotlight Grid**: Interactive cards with cursor-following radial radiance.

---

## 11. Get Layers: Depth & Z-Index Architecture

Avoid flat, unstructured layouts by strictly adhering to a 7-tier elevation architecture:

| Elevation Level | Z-Index | Purpose & Visual Role |
| :--- | :--- | :--- |
| **0. Canvas** | `z-0` | Signature micro-dots, grid patterns, neutral base backgrounds. |
| **1. Ambient Radiance** | `z-0` (pointer-events-none) | Atmospheric radial gradient blur halos (`blur-[140px]`). |
| **2. Content Canvas** | `z-10` | Enclosing container cards, bento boxes, grid sections. |
| **3. Interactive Cards** | `z-10` (hover: `z-20`) | Feature cards, testimonials, mandates, candidate profiles. |
| **4. Floating Accents** | `z-20` | Dynamic 3D graphics, floating badge pills, orbital nodes. |
| **5. Sticky Navigation** | `z-40` / `z-50` | Glassmorphic floating navbars, action bars, sticky filters. |
| **6. Overlays & Modals** | `z-50` / `z-60` | Fullscreen mobile drawers, dialogue backdrops, dialogs. |
| **7. System Toasts** | `z-70` | Ephemeral notifications, alerts, and tooltips. |

---

## Quick Reference Commands & Verifications
- Typecheck: `npx tsc --noEmit`
- Build check: `npm run build`
- Lint check: `npm run lint`
