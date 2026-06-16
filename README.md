# FBS Construction Inc — Website

Fast, SEO/AEO-optimized marketing site for **FBS Construction Inc**, a home-exterior contractor in Whitinsville, MA serving New England. Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

## Highlights

- ⚡ **Performance-first**: Next/Image with AVIF/WebP, optimized hero & gallery photos, font `display: swap`, minimal client JS, long-lived asset caching.
- 🔎 **SEO**: full metadata + Open Graph/Twitter cards, canonical URL, `sitemap.xml`, `robots.txt`, semantic HTML, descriptive alt text, keyword-rich copy.
- 🤖 **AEO (Answer Engine Optimization)**: rich **JSON-LD** structured data — `LocalBusiness`/`GeneralContractor`, `Service` catalog, `FAQPage`, `AggregateRating` + `Review`, `WebSite` — so Google, AI Overviews and assistants can cite the business.
- 🎨 **On-brand**: company logo + gold `#e1bb37` / olive `#5f5840` / charcoal palette pulled from the original site.
- 📱 Fully responsive with sticky mobile call/estimate bar.
- 📨 Working contact form (`/api/contact`) with honeypot anti-spam and optional Resend email delivery.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Images

Source photos live in `_raw_images/` (downloaded from the original site). They are compressed and converted to WebP into `public/images/` via:

```bash
npm run optimize-images
```

Edit the mapping in `scripts/optimize-images.mjs` to add/replace photos.

## Editing content

All business data (NAP, services, gallery, reviews, FAQs) is centralized in **`lib/site.ts`** — update it once and both the UI and the JSON-LD schema stay in sync.

## Contact form email (optional)

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` (and a verified `CONTACT_FROM_EMAIL`) to deliver estimate requests by email. Without it, submissions are logged to the server and the form still confirms success.

## Deploy

Optimized for **Vercel**: push to GitHub and import, or run `vercel`. Set `RESEND_API_KEY` in the Vercel project environment variables to enable form emails.
