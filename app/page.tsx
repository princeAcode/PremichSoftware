import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/services";
import { bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Custom Business Software in Johannesburg | Premich Software" },
  description:
    "Practical custom software for South African small and medium-sized businesses. Replace spreadsheets, WhatsApp threads and paper forms with simple tools built around how you work.",
  alternates: { canonical: "/" },
};

const signs = [
  {
    title: "Spreadsheets that only one person understands",
    text: "Quotes, stock and schedules live in files that get copied, overwritten and emailed around.",
  },
  {
    title: "Work arriving through WhatsApp",
    text: "Bookings, orders and questions get lost in chats, and nobody is quite sure what's been handled.",
  },
  {
    title: "Paper forms and job cards",
    text: "Details are written down, then typed up again later, with plenty of room for mistakes.",
  },
  {
    title: "Apps that don't talk to each other",
    text: "Your website, accounts and day-to-day tools each hold part of the picture, never the whole thing.",
  },
];

const steps = [
  {
    title: "Understand the workflow",
    text: "We start by learning how the work really gets done today: who does what, where information comes from, and where time or money leaks out.",
  },
  {
    title: "Agree on a practical solution",
    text: "We suggest the simplest thing that will make a real difference, in plain language, with a clear scope. Sometimes that's a small tool, not a big system.",
  },
  {
    title: "Build and improve it",
    text: "We build in stages you can see and try, with your team's feedback shaping each step. Once it's live, it can keep improving as your business changes.",
  },
];

const audiences = [
  {
    title: "Service businesses",
    text: "Salons, clinics, cleaning companies and other teams that run on appointments, staff schedules and repeat customers.",
  },
  {
    title: "Trades and contractors",
    text: "Electricians, plumbers, installers and builders juggling quotes, job cards, site visits and follow-up invoices.",
  },
  {
    title: "Workshops",
    text: "Mechanical, fabrication and repair workshops that need to track jobs, parts and customer approvals.",
  },
  {
    title: "Wholesalers and distributors",
    text: "Businesses managing stock across shelves, warehouses or branches, with orders coming in from many directions.",
  },
  {
    title: "Professional firms",
    text: "Accountants, consultants, agencies and practices that want a smoother way to manage clients, documents and requests.",
  },
];

export default function HomePage() {
  const overview = services.slice(0, 6);

  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Custom software · Johannesburg</p>
            <h1 id="hero-heading">
              Make everyday business work <em>simpler</em>.
            </h1>
            <p className="lead">
              Premich Software builds practical tools for South African small and medium-sized businesses, replacing
              scattered spreadsheets, WhatsApp threads and paper forms with software that fits the way your team
              already works.
            </p>
            <div className="actions">
              <Link href={bookingHref} className="btn btn-primary">
                Book a discovery call
                <Icon name="arrow" size={20} />
              </Link>
              <Link href="/contact#enquiry" className="btn btn-secondary">
                Tell us about your workflow
              </Link>
            </div>
            <p className="hero-note">No jargon, no obligation. Just an honest conversation about what’s slowing you down.</p>
          </div>

          <figure className="flow-card" aria-label="From scattered tools to one clear workflow">
            <p className="flow-label">Today</p>
            <ul className="flow-scatter">
              <li>Quotes in a spreadsheet</li>
              <li>Bookings on WhatsApp</li>
              <li>Paper job cards</li>
              <li>Stock counted by hand</li>
              <li>Invoices in another app</li>
            </ul>
            <div className="flow-arrow">
              <Icon name="arrow" size={28} />
            </div>
            <div className="flow-result">
              <p className="flow-label">With a workflow built for you</p>
              <ol className="flow-steps">
                <li>
                  <span aria-hidden="true">1</span> Enquiry captured once
                </li>
                <li>
                  <span aria-hidden="true">2</span> Quote, job and stock kept in step
                </li>
                <li>
                  <span aria-hidden="true">3</span> Invoice and payment follow on
                </li>
              </ol>
            </div>
          </figure>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="problem-heading">
        <div className="container split">
          <div>
            <p className="eyebrow">The problem</p>
            <h2 id="problem-heading">Growing businesses outgrow their workarounds</h2>
            <p className="lead">
              What worked with five customers starts to creak with fifty. Information ends up in too many places, the
              same details get captured twice, and small mistakes turn into unhappy customers.
            </p>
            <p className="lead">
              We help you bring that work together into simple, reliable tools, so your team spends less time on admin
              and more time serving customers.
            </p>
          </div>
          <ul className="signs" aria-label="Common signs">
            {signs.map((sign) => (
              <li key={sign.title}>
                <span className="dot" aria-hidden="true" />
                <div>
                  <strong>{sign.title}</strong>
                  <p>{sign.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we build</p>
            <h2 id="services-heading">Tools that fit your business, not the other way round</h2>
            <p>
              Every business is different, so we don’t sell a fixed product. These are the kinds of things we can
              discuss and build around your needs.
            </p>
          </div>
          <ul className="card-grid three">
            {overview.map((service) => (
              <li key={service.id} className="card card-link">
                <span className="icon-badge">
                  <Icon name={service.icon} />
                </span>
                <h3>
                  <Link href={`/services#${service.id}`}>{service.title}</Link>
                </h3>
                <p>{service.summary}</p>
                <span className="card-more" aria-hidden="true">
                  Learn more <Icon name="arrow" size={18} />
                </span>
              </li>
            ))}
          </ul>
          <div className="section-foot">
            <Link href="/services" className="text-link">
              See all services, including website and payment integrations <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How we work</p>
            <h2 id="process-heading">Three simple steps, one conversation at a time</h2>
            <p>You’ll deal directly with the person building your software, from the first call onwards.</p>
          </div>
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.title} className="step">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="audience-heading">
        <div className="container split">
          <div>
            <p className="eyebrow">Who we help</p>
            <h2 id="audience-heading">Built for busy South African SMEs</h2>
            <p className="lead">
              You don’t need to be technical to work with us. If you can explain how your business runs, we can help
              make it run more smoothly.
            </p>
            <Link href="/contact#enquiry" className="text-link">
              Tell us what’s slowing your business down <Icon name="arrow" size={18} />
            </Link>
          </div>
          <ul className="audience">
            {audiences.map((audience) => (
              <li key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
