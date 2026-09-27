import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/services";
import { bookingHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Software Development Services",
  description:
    "Custom business software, workflow automation, booking and scheduling, customer portals, job tracking and invoicing, stock control, and PayFast, Yoco or Ozow payment integrations for South African businesses.",
  alternates: { canonical: "/services" },
};

const dependsOn = [
  "The systems you already use, and whether they can be connected",
  "How your team works day to day, in the office, on site or on the road",
  "How many people will use it, and what each of them needs to see",
  "What will make the biggest difference first, and what can wait",
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-intro" aria-labelledby="page-heading">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1 id="page-heading">Practical software for the way your business runs</h1>
          <p className="lead">
            We build and connect tools that take the admin out of your day, from the first customer enquiry through
            to the final invoice. Each project is shaped around your process rather than a one-size-fits-all package.
          </p>
          <nav aria-label="Services on this page">
            <ul className="service-index">
              {services.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`}>{service.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="container">
        {services.map((service) => (
          <section key={service.id} id={service.id} className="service" aria-labelledby={`${service.id}-heading`}>
            <div className="service-head">
              <span className="icon-badge">
                <Icon name={service.icon} />
              </span>
              <h2 id={`${service.id}-heading`}>{service.title}</h2>
              <p>{service.summary}</p>
            </div>
            <div className="service-detail">
              <div className="detail-box">
                <h3>This may help if</h3>
                <ul>
                  {service.signs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-box alt">
                <h3>It could include</h3>
                <ul>
                  {service.couldInclude.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="section section-alt" aria-labelledby="fit-heading">
        <div className="container split">
          <div>
            <p className="eyebrow">Finding the right fit</p>
            <h2 id="fit-heading">The right solution depends on your business</h2>
            <p className="lead">
              We don’t start with a product to sell you. We start with your process, then work out what will genuinely
              help.
            </p>
          </div>
          <div className="callout">
            <p>
              <strong>What we’ll look at together:</strong>
            </p>
            <ul className="checklist">
              {dependsOn.map((item) => (
                <li key={item}>
                  <Icon name="check" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Integrations with tools such as Sage, Xero, PayFast, Yoco and Ozow depend on what each provider allows and
              on your account setup. We’ll check what’s possible for your situation before recommending an approach.
            </p>
            <Link href={bookingHref} className="btn btn-primary">
              Book a discovery call
              <Icon name="arrow" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Not sure which of these you need?"
        text="That’s completely normal. Tell us what’s slowing your business down, and we’ll help you work out where to start."
      />
    </>
  );
}
