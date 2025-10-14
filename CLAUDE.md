# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tier 1 service business website template built with Next.js 15 App Router. Designed for skilled trades and local service businesses (plumbing, electrical, HVAC, etc.). Features 5 pages, mobile-first responsive design, light/dark theme, SEO optimization, and configuration-driven branding.

## Commands

### Development
```bash
npm run dev          # Start dev server with Turbopack
npm run typecheck    # Type check without building
npm run lint         # Run ESLint
npm run check        # Run both lint and typecheck (fast pre-commit check)
```

### Production
```bash
npm run build        # Production build
npm run start        # Start production server
```

## Architecture

### Configuration-Driven Design

**Single Source of Truth**: `config/business.ts`
- All branding, contact info, theme colors, logo paths, and business details
- Theme colors (`brandColor`, `accentColor`, `radius`) are injected as CSS variables in `app/layout.tsx:51-56`
- CSS variables: `--primary`, `--secondary`, `--radius` are applied via inline styles on `<body>`

**Content Modules**: `content/` directory
- `services.ts` - Service definitions with title, slug, features, pricing
- `faqs.ts` - FAQ items for homepage
- `testimonials.ts` - Customer testimonials
- `gallery.ts` - Image metadata for galleries

### Email System Architecture

**Provider Adapter Pattern**: `lib/mail/email-adapter.ts`
- Factory function `getEmailProvider()` selects provider based on `EMAIL_PROVIDER` env var
- Two implementations: Resend (`providers/resend.ts`) and SMTP (`providers/smtp.ts`)
- Contact form route: `app/api/contact/route.ts` handles POST requests with validation

**Spam Prevention**:
- Honeypot field `hp` (if filled, silently accept)
- Time-to-submit check `_ts` (reject if < 2 seconds)
- Both implemented in `app/api/contact/route.ts:10-17`

### Theming System

**Dark/Light Mode**: `next-themes` with class-based strategy
- Provider: `components/theme-provider.tsx`
- Toggle: `components/theme-toggle.tsx` (in header)
- Theme variables defined in `app/globals.css` for both light/dark

**Typography**:
- Sans-serif: Plus Jakarta Sans (weights 300-800)
- Monospace: JetBrains Mono
- Font variables: `--font-app-sans`, `--font-app-mono`

### Component Structure

**Layout Components**:
- `site-header.tsx` - Desktop/mobile navigation, logo, click-to-call CTA, theme toggle
- `site-footer.tsx` - 4-column footer with sitemap, contact, social, legal links

**UI Components** (`components/ui/`):
- shadcn/ui components (Radix primitives)
- Installed via `npx shadcn@latest add <component>`

**Feature Components**:
- `contact-form.tsx` - react-hook-form + Zod validation, handles API submission
- `service-area-map.tsx` - Dynamic Leaflet map wrapper (lazy loaded)
- `leaflet-map-inner.tsx` - Actual map implementation with polygon overlay
- `hero.tsx` - Homepage hero section

### Pages (App Router)

All pages in `app/` directory:
- `/` - Home (hero, services grid, testimonials, FAQs)
- `/about` - Company story, values, licenses
- `/services` - Service cards with features and pricing
- `/contact` - Contact form with click-to-call
- `/location` - Service area description with polygon map

### Validation & Forms

**Contact Form Schema**: `lib/schema/contact.ts`
- Zod schema with fields: name, email, phone, service, message, consent, hp (honeypot)
- Type exported: `ContactInput`

### Map Implementation

**Service Area Polygon Map**:
- Uses react-leaflet with dynamic import to avoid SSR issues
- Map polygon coordinates defined in page component (e.g., `app/location/page.tsx`)
- Shows service area boundaries on interactive map

## Key Patterns

### Branding/Rebranding Workflow
1. Edit `config/business.ts` for all business info, colors, logo paths
2. Replace logo files in `public/` (logo-light.svg, logo-dark.svg)
3. Theme colors automatically applied via CSS variables in layout
4. Update service content in `content/services.ts`

### Adding shadcn Components
```bash
npx shadcn@latest add <component-name>
```
Components are installed to `components/ui/`

### Environment Variables
See `.env.example`. Required vars:
- `NEXT_PUBLIC_SITE_URL` - Production URL (for metadata)
- `EMAIL_PROVIDER` - "resend" or "smtp"
- `RESEND_API_KEY` or SMTP credentials
- `CONTACT_RECIPIENT` - Email destination for form submissions
- `NEXT_PUBLIC_ENABLE_ANALYTICS` - Toggle Vercel Analytics

## Tech Stack Summary

- **Framework**: Next.js 15 (App Router, RSC-first, TypeScript)
- **Styling**: Tailwind CSS 4, shadcn/ui (Radix), tw-animate-css
- **Forms**: react-hook-form, @hookform/resolvers, zod
- **Theming**: next-themes
- **Email**: Resend or Nodemailer (SMTP)
- **Map**: react-leaflet + leaflet
- **Analytics**: @vercel/analytics
- **Icons**: lucide-react, @radix-ui/react-icons

## Directory Structure

```
app/              - Next.js App Router pages and API routes
components/       - React components (ui/ contains shadcn components)
config/           - Business configuration (single source of truth)
content/          - Content modules (services, FAQs, testimonials, gallery)
lib/              - Utilities, schemas, email adapters
public/           - Static assets (logos, images, OG image)
```

## Notes

- All components are Server Components by default; "use client" only where needed (forms, theme toggle, mobile nav, map)
- Map components use dynamic import with `ssr: false` to avoid hydration issues
- Contact form API route returns structured errors or success response
- CSS variables from business config allow instant rebranding without touching styles
