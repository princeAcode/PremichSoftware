# Premich Software website

Marketing website for Premich Software, a Johannesburg-based custom software business. Built with Next.js (App Router), TypeScript and plain CSS. Every page is statically generated.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run lint       # ESLint
npm run build      # production build (also type-checks)
npm run start      # serve the production build
```

## Project structure

```
app/
  layout.tsx         Root layout, fonts, site-wide SEO metadata and structured data
  page.tsx           Home
  services/page.tsx  Services
  about/page.tsx     About
  contact/page.tsx   Contact (enquiry form, WhatsApp, email, phone)
  globals.css        All styles (design tokens at the top)
  sitemap.ts, robots.ts, icon.svg, not-found.tsx
components/          Header, Footer, ContactForm, CtaBand, Icon, Logo
lib/site.ts          ← Contact details and placeholders (edit this first)
lib/services.ts      Service descriptions used on Home and Services
public/__forms.html  Hidden copy of the enquiry form for Netlify Forms detection
```

## Before you go live: replace these placeholders

All of these are in **`lib/site.ts`**:

| Setting | Current placeholder | What to put there |
| --- | --- | --- |
| `contact.email` | `hello@example.co.za` | Your enquiries email address |
| `contact.phoneDisplay` | `+27 00 000 0000` | Your phone number as visitors should see it |
| `contact.phoneHref` | `+27000000000` | The same number, digits only with `+27` |
| `contact.whatsappNumber` | `27000000000` | Your WhatsApp number, digits only, no `+` (e.g. `27821234567`) |
| `contact.bookingUrl` | empty | Optional: a Calendly or Cal.com link. If set, every "Book a discovery call" button goes there; if empty, they go to the contact form |

Also set this environment variable in your hosting dashboard:

- `NEXT_PUBLIC_SITE_URL`: your live domain, e.g. `https://www.yourdomain.co.za`. It's used for canonical URLs, the sitemap and social sharing metadata.

## Enquiry form (Netlify Forms)

The contact form submits to [Netlify Forms](https://docs.netlify.com/forms/setup/):

1. Deploy the repo to Netlify. It detects Next.js automatically, and `netlify.toml` sets the build command.
2. In the Netlify dashboard, go to **Forms** and make sure form detection is enabled. The `enquiry` form appears after the first deploy.
3. Under **Forms → Form notifications**, add an email notification so enquiries reach your inbox.

Submissions only work on a Netlify deployment. When you test locally, the form validates correctly but shows a "didn't send" message, which is expected.

If you add, rename or remove a form field in `components/ContactForm.tsx`, make the same change in `public/__forms.html`.
