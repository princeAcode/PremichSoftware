import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">404</p>
        <h1>We couldn’t find that page</h1>
        <p className="lead">The link may be out of date, or the page may have moved.</p>
        <div className="actions">
          <Link href="/" className="btn btn-primary">
            Back to the home page
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
