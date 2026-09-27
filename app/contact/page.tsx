import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us: Book a Discovery Call",
  description:
    "Tell Premich Software what’s slowing your business down. Book a discovery call or send an enquiry about custom software for your South African business.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-intro" aria-labelledby="page-heading">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 id="page-heading">Tell us what’s slowing your business down</h1>
          <p className="lead">
            Share a little about your business and the process you’d like to improve. We’ll get back to you to arrange a
            discovery call, with no obligation and no hard sell.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Enquiry form and contact details">
        <div className="container contact-grid">
          <div className="form-panel" id="enquiry">
            <h2>Send an enquiry</h2>
            <p className="form-intro">
              A few sentences is plenty. You don’t need to know what the solution is. That’s what the call is for.
            </p>
            <ContactForm />
          </div>

          <aside className="contact-aside" aria-label="Other ways to reach us">
            <ul className="contact-methods">
              <li>
                <a className="contact-method" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                  <span className="icon-badge">
                    <Icon name="whatsapp" />
                  </span>
                  <span>
                    <strong>WhatsApp</strong>
                    <span className="value">
                      Send us a message<span className="visually-hidden"> (opens in a new tab)</span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a className="contact-method" href={`mailto:${site.contact.email}`}>
                  <span className="icon-badge">
                    <Icon name="mail" />
                  </span>
                  <span>
                    <strong>Email</strong>
                    <span className="value">{site.contact.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a className="contact-method" href={`tel:${site.contact.phoneHref}`}>
                  <span className="icon-badge">
                    <Icon name="phone" />
                  </span>
                  <span>
                    <strong>Phone</strong>
                    <span className="value">{site.contact.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <div className="contact-method">
                  <span className="icon-badge">
                    <Icon name="pin" />
                  </span>
                  <span>
                    <strong>Where we work</strong>
                    <span className="value">Johannesburg-based, working with businesses across South Africa</span>
                  </span>
                </div>
              </li>
            </ul>

            <div className="aside-box">
              <h2>What happens next</h2>
              <ol>
                <li>
                  <strong>We read your enquiry</strong> and may ask a question or two by email.
                </li>
                <li>
                  <strong>We set up a discovery call</strong> at a time that suits you, online or by phone.
                </li>
                <li>
                  <strong>You get practical next steps</strong>: what we’d suggest, and what it would involve.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
