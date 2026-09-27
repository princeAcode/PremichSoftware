import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Premich Software is a Johannesburg-based software development business led by a full-stack Java developer with over 10 years of experience, building practical software around real business workflows.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Direct communication",
    text: "You speak to the developer doing the work, not a chain of account managers. Questions get straight answers, in plain language.",
  },
  {
    title: "Practical problem-solving",
    text: "We look for the simplest fix that makes a real difference. If a spreadsheet tweak or an existing app will do the job, we’ll say so.",
  },
  {
    title: "Built around real workflows",
    text: "Software should follow how your business actually runs. We spend time understanding the day-to-day before writing any code.",
  },
  {
    title: "Honest scope and expectations",
    text: "We agree on what will be built, in stages you can see and try, so there are no surprises about what you’re getting.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-intro" aria-labelledby="page-heading">
        <div className="container">
          <p className="eyebrow">About Premich Software</p>
          <h1 id="page-heading">Experienced software development, with a practical focus</h1>
          <p className="lead">
            We help small and medium-sized businesses in Johannesburg and across South Africa replace clumsy workarounds
            with software that makes everyday work simpler.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="story-heading">
        <div className="container about-grid">
          <div className="prose">
            <h2 id="story-heading">Who we are</h2>
            <p>
              Premich Software is led by a full-stack Java developer with over 10 years of experience building software,
              from the systems that run behind the scenes to the screens people use every day.
            </p>
            <p>
              That experience is put to work for businesses that don’t have their own IT department. Many of the owners
              and managers we speak to know exactly where their process is costing them time or causing mistakes. They
              just need someone who can listen, understand the work, and build something sensible to fix it.
            </p>
            <p>
              That’s what we do. We keep things practical, explain decisions in plain language, and build software
              around the way your team already works, so it gets used rather than avoided.
            </p>
          </div>

          <aside className="fact-panel" aria-labelledby="facts-heading">
            <h2 id="facts-heading">At a glance</h2>
            <dl>
              <div>
                <dt>Experience</dt>
                <dd>Full-stack Java development, 10+ years</dd>
              </div>
              <div>
                <dt>Who we work with</dt>
                <dd>Small and medium-sized South African businesses</dd>
              </div>
              <div>
                <dt>Where</dt>
                <dd>Johannesburg-based, working with clients across South Africa</dd>
              </div>
              <div>
                <dt>What we build</dt>
                <dd>Custom business software, integrations and workflow tools</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="principles-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How we approach the work</p>
            <h2 id="principles-heading">What you can expect working with us</h2>
          </div>
          <ul className="principles">
            {principles.map((principle) => (
              <li key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        heading="Let’s talk about how your business runs"
        text="Book a discovery call and walk us through a process that’s causing headaches. We’ll listen first, then share practical ideas."
      />
    </>
  );
}
