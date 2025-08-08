## Service Company Template Retargeting Prompt

Use this prompt to transform the existing Next.js template to any service-based business (e.g., HVAC, electrical, landscaping, cleaning). Fill the form below, then follow the Tasks. All branding lives in one place and pages are wired to read from it.

### Fill This Form

Provide precise, final values. Use valid hex for colors.

```yaml
business:
  name: "{{BUSINESS_NAME}}"
  tagline: "{{SHORT_TAGLINE}}"
  phone: "+1 (000) 000-0000"
  email: "{{INFO_OR_BOOKING_EMAIL}}"
  bookingUrl: "{{OPTIONAL_CALENDLY_OR_URL}}" # optional
  address:
    line1: "{{STREET}}"
    city: "{{CITY}}"
    state: "{{STATE_OR_PROVINCE}}"
    postalCode: "{{ZIP_OR_POSTAL}}"
    country: "{{COUNTRY_CODE}}" # e.g., CA, US
  serviceAreas: ["{{PRIMARY_CITY}}", "{{NEARBY_CITY_1}}", "{{NEARBY_CITY_2}}"]
  hours:
    - day: "Mon-Fri"; open: "8:00"; close: "18:00"
    - day: "Sat"; open: "9:00"; close: "14:00"
  licenseNumber: "{{OPTIONAL}}"
  insuranceCarrier: "{{OPTIONAL}}"
  googleMapsPlaceId: "{{OPTIONAL_PLACE_ID}}"
  logo:
    light: "/logo-light.svg"   # place file in web/public
    dark: "/logo-dark.svg"     # place file in web/public
    alt: "{{ACCESSIBLE_ALT_TEXT}}"
  social:
    facebook: "{{URL_OR_EMPTY}}"
    instagram: "{{URL_OR_EMPTY}}"
    youtube: "{{URL_OR_EMPTY}}"
    linkedin: "{{URL_OR_EMPTY}}"
    tiktok: "{{URL_OR_EMPTY}}"
  theme:
    brandColor: "#0ea5e9"   # primary
    accentColor: "#f59e0b"  # secondary
    radius: 0.5              # rem

services:
  - title: "{{SERVICE_TITLE}}"
    slug: "{{kebab-slug}}"
    summary: "{{ONE_LINE_SUMMARY}}"
    features: ["{{feature 1}}", "{{feature 2}}", "{{feature 3}}"]
    startingPrice: "{{$XYZ}}"
    image: "/photos/{{image.webp}}" # place under web/public/photos
    details: "{{2-3 sentences with key differentiators}}"
  # add more services as needed

location:
  cityName: "{{CITY_DISPLAY_NAME}}"
  description: |
    {{500+ words about the city, culture, events, climate, and issues relevant to your trade.}}
  polygon: # latitude, longitude pairs outlining your service area
    - [lat, lng]
    - [lat, lng]
    - [lat, lng]
  communities: ["{{Neighbourhood 1}}", "{{Neighbourhood 2}}", "{{...}}"]
  nearbyAreas: ["{{Nearby Town 1}}", "{{Nearby Town 2}}", "{{...}}"]

env:
  NEXT_PUBLIC_SITE_URL: "https://{{your-domain}}"
  EMAIL_PROVIDER: "resend" # or "smtp"
  RESEND_API_KEY: "{{if using Resend}}"
  SMTP_HOST: "{{if using SMTP}}"
  SMTP_PORT: "{{if using SMTP}}"
  SMTP_USER: "{{if using SMTP}}"
  SMTP_PASS: "{{if using SMTP}}"
  NEXT_PUBLIC_ENABLE_ANALYTICS: "true"
```

### Tasks (What to Change and Where)

- Branding single-source-of-truth: edit `web/config/business.ts` to match all fields under `business` above. The site header, footer, CTA button, click‑to‑call, colors, and social links will update automatically.

- Services: edit `web/content/services.ts` to replace the `services` array with your entries from the form. Each service supports:

  - `title`, `slug`, `summary`, `features`, `startingPrice?`, `image?`, `details?`
  - Place images in `web/public/photos/` and reference with leading slash, e.g., `/photos/drain-cleaning.webp`.

- Location page:

  - Update city description, communities, and nearby areas in `web/app/location/page.tsx`:
    - Replace the long description paragraphs with your `location.description` content.
    - Replace the `calgaryCommunities` and `nearbyAreas` arrays with your lists.
  - Update service area outline polygon:
    - Replace the `calgaryPolygon` array with your `location.polygon` coordinates as `[lat, lng]` pairs.
    - You can draw and export polygon coordinates via `geojson.io` or Google My Maps (export KML → convert to coordinates). Keep 10–30 points for performance.
  - The map component `web/components/service-area-map.tsx` will render your polygon via the `points` prop; no changes needed there.

- Assets:

  - Replace logos in `web/public/logo-light.svg` and `web/public/logo-dark.svg`. Keep the same file names to avoid code changes.
  - Replace OG image at `web/public/og-image.png` for social sharing.

- Colors & radius:

  - Set `theme.brandColor` and `theme.accentColor` in `web/config/business.ts` with hex values. Border radius is controlled via `theme.radius`.

- Environment variables:
  - Copy `.env.example` to `.env.local` in `web/` and fill the `env` block values. Choose `EMAIL_PROVIDER` and set its keys.

### Optional Content Modules

- FAQs: `web/content/faqs.ts`
- Testimonials: `web/content/testimonials.ts`
- Gallery: `web/content/gallery.ts`

### Commands

- Install deps (first time):
  - `cd web && npm i`
- Run dev server:
  - `npm run dev`
- Quick checks during edits (no heavy build):
  - `npm run check` (lint + typecheck)
- Production build (on demand):
  - `npm run build && npm start`

### Acceptance Criteria

- Header shows correct logo, business name (sr-only), navigation, and a Call button with the phone number on desktop and “Call” on mobile.
- Footer displays 4-column layout with consistent spacing and populated contact/social links.
- Home and Services pages reflect updated services (images, summaries, features, details, starting prices).
- Location page renders the updated description, community lists, nearby areas, and the polygon outline over the map.
- Contact form sends email via configured provider; click‑to‑call uses the new phone number.
- Colors and border radius match the new brand.

### Notes

- Use WebP for images where possible and keep hero/gallery images under 200–300 kB each.
- For polygons, prefer a simplified shape that cleanly encompasses your actual service area.
