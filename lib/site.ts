/**
 * Central site configuration.
 *
 * Everything marked PLACEHOLDER must be replaced before the site goes live.
 * These values are used across every page, so you only need to change them here.
 */
export const site = {
  name: "Premich Software",
  tagline: "Practical custom software for South African businesses",

  /** Public URL of the live site. Set NEXT_PUBLIC_SITE_URL in your hosting environment. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  contact: {
    /** PLACEHOLDER: replace with your real enquiries inbox. */
    email: "hello@example.co.za",
    /** PLACEHOLDER: shown to visitors. */
    phoneDisplay: "+27 00 000 0000",
    /** PLACEHOLDER: used for the tel: link, digits only with country code. */
    phoneHref: "+27000000000",
    /**
     * PLACEHOLDER: WhatsApp number in international format, digits only, no "+"
     * (for example 27821234567). Used to build the wa.me link.
     */
    whatsappNumber: "27000000000",
    /** Optional: a booking link (Calendly, Cal.com, Google Calendar, etc.). Leave empty to use the contact form. */
    bookingUrl: "",
  },

  location: "Johannesburg, South Africa",
} as const;

export const whatsappHref = (message = "Hi Premich Software, I'd like to chat about improving a process in my business.") =>
  `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

/** Where "Book a discovery call" buttons point. */
export const bookingHref = site.contact.bookingUrl || "/contact#enquiry";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
