import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Custom Business Software in Johannesburg | Premich Software",
    template: "%s | Premich Software",
  },
  description:
    "Premich Software builds practical custom software for South African SMEs: booking, customer portals, job tracking, invoicing, stock control and system integrations.",
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f4c45",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "Custom software development for small and medium-sized businesses in Johannesburg and across South Africa.",
  url: site.url,
  email: site.contact.email,
  areaServed: { "@type": "Country", name: "South Africa" },
  knowsAbout: [
    "Custom business software",
    "Workflow automation",
    "Booking and scheduling systems",
    "Customer portals",
    "Inventory management",
    "Payment integrations",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
