import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, site, whatsappHref } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Practical custom software for small and medium-sized businesses in Johannesburg and across South
            Africa.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer-heading">Pages</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer-heading">Get in touch</h2>
          <ul>
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>
              <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phoneDisplay}</a>
            </li>
            <li>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                WhatsApp us<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <p>
          © {year} {site.name}. Based in {site.location}.
        </p>
      </div>
    </footer>
  );
}
