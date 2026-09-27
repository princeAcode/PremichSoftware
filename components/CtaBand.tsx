import Link from "next/link";
import { Icon } from "@/components/Icon";
import { bookingHref } from "@/lib/site";

type CtaBandProps = {
  heading?: string;
  text?: string;
};

export function CtaBand({
  heading = "Tell us what’s slowing your business down",
  text = "Start with a no-obligation discovery call. Walk us through how the work gets done today, and we’ll give you an honest view of what could be simpler, even if the answer isn’t new software.",
}: CtaBandProps) {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="container cta-inner">
        <div>
          <h2 id="cta-heading">{heading}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link href={bookingHref} className="btn btn-light">
            Book a discovery call
            <Icon name="arrow" size={20} />
          </Link>
          <Link href="/contact#enquiry" className="btn btn-outline-light">
            Send an enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
