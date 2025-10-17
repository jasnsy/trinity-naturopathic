# Trinity Naturopathic

Website for Trinity Naturopathic, a specialized naturopathic clinic in Fort McMurray, Alberta, focusing on integrative mental health care and holistic wellness.

## About Trinity Naturopathic

Trinity Naturopathic provides comprehensive naturopathic medicine services with a focus on mental health and neurological conditions. Our clinic serves Fort McMurray and the Regional Municipality of Wood Buffalo, offering evidence-based natural therapies including BHRT, Walsh Protocol, Hair Tissue Mineral Analysis, Bioscan SRT, Clinical Nutrition, and Genetic Testing.

## Contact Information

- **Address**: 167 Peterson Lane, Fort McMurray, AB T9H 3G3
- **Phone**: (587) 644-6656
- **Fax**: (587) 701-5263
- **Email**: info@trinitynaturopathic.com

### Clinic Hours

- **Monday - Wednesday**: 10:00 AM - 6:00 PM
- **Thursday**: 10:00 AM - 5:00 PM
- **Friday**: 11:00 AM - 5:00 PM
- **Saturday**: 10:00 AM - 4:00 PM

*Hours vary depending on practitioner availability. Office hours may change on stat holidays - please contact us to confirm.*

## Services Offered

- Naturopathic Medicine
- Bio-Identical Hormone Replacement Therapy (BHRT)
- Walsh Protocol
- Hair Tissue Mineral Analysis
- Bioscan SRT
- Clinical Nutrition
- Genetic Testing
- Health & Wellness Courses
- Weight Loss Bootcamp

## Conditions We Treat

Specializing in mental health and neurological conditions including:
- Mood Disorders (Depression, Bipolar)
- Anxiety Disorders
- ADHD and ADD
- OCD
- PTSD and Trauma
- Eating Disorders
- Autism Spectrum Disorders
- Personality Disorders
- Substance Use Disorders
- Sleep Disorders
- Neurological Conditions

## Tech Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui (Radix primitives)
- **Theme**: next-themes (light/dark mode support)
- **Forms**: react-hook-form + Zod validation
- **Email**: Resend or SMTP (Nodemailer)
- **Maps**: react-leaflet + Leaflet
- **Analytics**: Vercel Analytics

## Project Structure

```
app/              - Next.js App Router pages and API routes
components/       - React components (ui/ contains shadcn components)
config/           - Business configuration (business.ts)
content/          - Content modules (services, symptoms, FAQs, testimonials)
lib/              - Utilities, schemas, email adapters
public/           - Static assets (logos, images, OG image)
```

## Development

### Prerequisites

- Node.js 18+ and npm

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Development Commands

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Type check without building
npm run check        # Run both lint and typecheck (fast pre-commit check)
```

## Configuration

### Business Information

All business details are centralized in `config/business.ts`:
- Business name, tagline, contact info
- Address and service areas
- Operating hours
- Social media links
- Theme colors (brand, accent, radius)
- Logo paths

### Content Management

- **Services**: Edit `content/services.ts`
- **Conditions/Symptoms**: Edit `content/symptoms.ts`
- **FAQs**: Edit `content/faqs.ts`
- **Testimonials**: Edit `content/testimonials.ts`

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://trinitynaturopathic.com
EMAIL_PROVIDER=resend # or smtp
RESEND_API_KEY=your_resend_api_key
CONTACT_RECIPIENT=info@trinitynaturopathic.com
NEXT_PUBLIC_ENABLE_ANALYTICS=true

# If using SMTP
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

## Key Features

### SEO Optimization

- Page-level metadata with OpenGraph and Twitter Cards
- Structured data (JSON-LD) with MedicalBusiness schema
- Dynamic robots.txt and sitemap.xml
- Keyword-optimized descriptions
- Proper heading hierarchy

### Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation
- Accessible color contrast

### Email Contact System

- Server-side form validation
- Spam prevention (honeypot + time-to-submit)
- Provider adapter pattern (Resend or SMTP)
- Type-safe email handling

### Dark Mode Support

- System preference detection
- Manual theme toggle
- Properly inverted logos for light/dark themes
- Optimized color palette for both themes

## Social Media

- **Facebook**: https://www.facebook.com/TrinityNaturopathic/
- **Instagram**: https://www.instagram.com/trinitynaturopathic
- **LinkedIn**: https://www.linkedin.com/company/trinitynaturopathic/

## Deployment

Recommended deployment platform: **Vercel**

1. Push to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy

HTTPS is enforced via `vercel.json` configuration.

## License

Proprietary - Trinity Naturopathic © 2025
