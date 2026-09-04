# 1008 (`1008.network`) — Venture Studio, Partner Network & Knowledge Hub

> **You bring the ambition. We build the business with you.**

1008 is a modern, high-conviction venture-building partner and talent syndicate designed for experienced Indian corporate leaders, domain experts, and entrepreneurs.

Headquartered in **Delhi NCR** with an active footprint across **Bengaluru, Mumbai, Pune, Hyderabad, and Chennai**.

---

## 🏛️ The 4 Core Pillars

1. **BUILD WITH 1008 (Venture Studio / Execution Partner):**
   - 180-Day Build & Handover Framework.
   - Hands-on temporary venture-building partner providing full-stack engineering, product design, legal/ESOP structuring, and seed readiness.
   - **Skin in the Game:** Partnering for shared equity upside, not hourly consulting retainers.

2. **1008 NETWORK (The 60-Day Matchmaking Hub):**
   - Curated co-founder matching for domain founders with missing CTOs, GTM leads, and operational heads.
   - **60-Day Active Lifecycle:** All listings auto-expire in 60 days to prevent stale or unresponsive ads.

3. **1008 KNOWLEDGE HUB (Tactical Resources):**
   - Actionable operational playbooks (cap tables, ESOPs under Indian law, B2B sales cycles in Bharat, unit economics), book summaries, and masterclasses.

4. **1008 CAPITAL (Seed Syndicate Deal Board):**
   - Curated seed deal cards showcasing vetted 1008-built and network ventures for accredited angels and family offices.

---

## ⚡ Tech Stack & Architecture

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript (Strict Mode)
- **Styling & Design System:** Tailwind CSS with custom Obsidian Dark palette (`#090A0C`), slate borders, and electric amber/gold accents (`#F59E0B`)
- **Icons & UI:** Lucide React, Framer Motion
- **Database Architecture:** Prisma ORM schema ready for PostgreSQL (`DATABASE_URL`) + resilient zero-config server action data fallback for instant local and cloud execution
- **SEO & Performance:** Server-Side Rendering (SSR), Schema.org JSON-LD, Dynamic XML Sitemap (`/sitemap.xml`), Dynamic Robots (`/robots.txt`), OpenGraph meta tags

---

## 🚀 Quick Start (Local Development)

### 1. Clone & Install Dependencies
```bash
cd /Users/hm/Documents/GitHub/1008-network
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Typecheck for Production
```bash
npm run build
```

---

## 📂 Project Structure

```
1008-network/
├── app/
│   ├── layout.tsx                # Global layout, Schema.org JSON-LD, Fonts, Nav & Footer
│   ├── page.tsx                  # High-converting Homepage with 4-pillar showcase & interactive previews
│   ├── studio/page.tsx           # 180-Day Studio model, comparison matrix & intake modal
│   ├── build/page.tsx            # Fast alias redirect to /studio
│   ├── network/                  # 60-Day Partner Network Board
│   │   ├── page.tsx              # Interactive search & multi-facet filters (Role, Sector, City)
│   │   ├── [id]/page.tsx         # Opportunity details & direct connect flow
│   │   └── post/page.tsx         # Multi-step "Post an Opportunity" form
│   ├── knowledge/                # Operational Knowledge Hub & Media
│   │   ├── page.tsx              # Directory (Playbooks, Books, Masterclasses, Podcasts)
│   │   └── [slug]/page.tsx       # Formatted reader with takeaways & actionable checklist
│   ├── capital/page.tsx          # Seed Syndicate deal board with metrics & EOI modal
│   ├── readiness/page.tsx        # 8-question Venture Readiness Diagnostic tool
│   ├── manifesto/page.tsx        # The 1008 Philosophy & operating principles
│   ├── about/page.tsx            # Mission, pan-India hubs & curation standard
│   ├── contact/page.tsx          # Direct contact & office hours booking
│   ├── terms/page.tsx            # Legal terms & syndicate disclaimers
│   ├── privacy/page.tsx          # Privacy policy
│   ├── sitemap.ts                # Dynamic XML Sitemap
│   └── robots.ts                 # Dynamic Robots.txt
├── components/
│   ├── brand/Logo.tsx            # Isolated Typographic & Sacred Geometry glyph <Logo />
│   ├── brand/Badge.tsx           # Linear-style status pill badges
│   ├── layout/Navbar.tsx         # Sticky header with mobile drawer
│   ├── layout/Footer.tsx         # Rich footer with pan-India hubs & newsletter
│   ├── home/                     # Homepage components (Hero, Bento, Timeline, Persona, FAQ)
│   ├── studio/                   # Studio application multi-step modal
│   ├── network/                  # Opportunity cards, filters, and partner connect modal
│   ├── capital/                  # Deal cards and EOI submission modal
│   ├── readiness/                # Interactive Readiness quiz diagnostic
│   └── ui/                       # Reusable UI primitives (Button, Card, Input, Textarea, Modal)
├── data/                         # Initial high-signal curated datasets
├── lib/                          # Server actions, TypeScript interfaces, and utilities
├── prisma/schema.prisma          # PostgreSQL schema for database persistence
└── tailwind.config.ts            # Custom design tokens
```

---

## 🚢 Direct Deployment to GitHub & Vercel

### To Push to GitHub:
```bash
git init
git add .
git commit -m "feat: initial production-ready 1008 venture platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/1008-network.git
git push -u origin main
```

### To Deploy on Vercel:
1. Import repository on [Vercel](https://vercel.com).
2. Framework Preset: **Next.js**.
3. (Optional) Set `DATABASE_URL` in environment variables if connecting to PostgreSQL (Supabase / Neon / AWS RDS).
4. Click **Deploy**.

---

## 📬 Contact
- **Primary Domain:** `https://1008.network`
- **Primary Inbound:** `join@1008.network`
- **Headquarters:** Delhi NCR, India (Serving Pan-India)
