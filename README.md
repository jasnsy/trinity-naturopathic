### Overview

Tier‑1 service business website template (Next.js App Router) designed for trades and services (plumbing, electrical, HVAC, cleaning, etc.). Includes 5 pages (Home, Services, About, Contact, Location), mobile‑first UI, basic SEO, click‑to‑call, contact form with email adapter, analytics, light/dark theme, configurable branding, and a service‑area polygon map.

### Tech Stack

- Next.js 15 (App Router, RSC first)
- TypeScript
- Tailwind CSS 4 + shadcn/ui (Radix primitives)
- next-themes (light/dark)
- react-hook-form + zod validation
- Email adapter: Resend (default) or SMTP (Nodemailer)
- react-leaflet + Leaflet (dynamic import) for map
- @vercel/analytics

### Structure

- `app/`: routes and pages (RSC by default)
- `components/`: UI and site components
- `content/`: editable content modules (`services.ts`, `faqs.ts`, etc.)
- `config/business.ts`: single source of truth for branding/company info
- `lib/`: schemas, mail adapters
- `public/`: assets (logos, og image, service photos)

### Quick Start

```bash
npm i
npm run dev
# open http://localhost:3000
```

Lightweight checks while editing:

```bash
npm run check # lint + typecheck (no full build)
```

Production:

```bash
npm run build && npm start
```

### Customize the Template

- Company & branding (single source): edit `config/business.ts`
  - `businessName`, `tagline`, `phone`, `email`, `address`, `serviceAreas`, `hours`
  - `logo.light`/`logo.dark` paths (place files in `public/`)
  - `theme.brandColor`, `theme.accentColor`, `theme.radius`
- Services: edit `content/services.ts`
  - Each service supports: `title`, `slug`, `summary`, `features[]`, `startingPrice?`, `image?`, `details?`
  - Place images under `public/photos/` (prefer WebP). Reference with `/photos/...`
- Location page: edit `app/location/page.tsx`
  - Replace city description paragraphs
  - Update `calgaryCommunities` and `nearbyAreas` arrays
  - Replace `calgaryPolygon` with your `[lat, lng]` pairs
- Assets
  - Replace `/public/logo-light.svg`, `/public/logo-dark.svg`, `/public/og-image.png`

For a guided retargeting workflow, fill `web/prompt.md` and follow the tasks inside.

### Styling Guide

- Tailwind CSS utility‑first classes only; avoid custom CSS where possible
- shadcn/ui components for consistency; prefer composition over overrides
- Theme colors inherit from CSS variables injected in `app/layout.tsx` using `business.theme`
- Dark theme: modern dark‑slate palette defined in `app/globals.css`
- Typography: Plus Jakarta Sans (sans), JetBrains Mono (mono) via `next/font`
- Responsive: mobile‑first, use `sm/ md/ lg` breakpoints; check header/footer spacing on small screens

### Forms & Email

- Contact forms use `react-hook-form` + Zod (`lib/schema/contact.ts`)
- Server route: `app/api/contact/route.ts`
- Email provider adapters:
  - Resend: `lib/mail/providers/resend.ts` (set `RESEND_API_KEY`)
  - SMTP: `lib/mail/providers/smtp.ts` (host/port/user/pass)

### Environment

Copy `.env.example` → `.env.local` and set values:

```
NEXT_PUBLIC_SITE_URL=https://your-domain
EMAIL_PROVIDER=resend # or smtp
RESEND_API_KEY=...
SMTP_HOST=...
SMTP_PORT=...
SMTP_USER=...
SMTP_PASS=...
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

### Accessibility

- Header mobile menu uses Radix Sheet with hidden title for a11y
- Buttons/links include `aria-label` where appropriate
- Color contrast suitable for light/dark themes

### Deployment

- Vercel recommended. HTTPS enforced via `vercel.json`
- Set env vars in Vercel project settings; re‑deploy

### Acceptance Checklist

- Header shows logo + Call button (desktop shows phone number, mobile shows “Call”)
- Footer 4‑column layout with social/contact links
- Home and Services reflect your content (images/details/pricing)
- Location page shows your description, communities, and polygon map
- Contact form sends email via chosen provider
- Brand colors and radius applied globally
# trinity-naturopathic
