"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { site, whatsappHref } from "@/lib/site";

/**
 * Enquiry form, submitted to Netlify Forms.
 *
 * Netlify detects the form at build time from the static copy in public/__forms.html.
 * If you add, rename or remove a field here, update that file to match.
 */
const FORM_NAME = "enquiry";
const FORM_ENDPOINT = "/__forms.html";

export const businessTypes = [
  "Service business",
  "Trade or contractor",
  "Workshop",
  "Wholesaler or distributor",
  "Professional firm",
  "Retail",
  "Other",
];

type FieldName = "name" | "email" | "phone" | "businessType" | "process";
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const fieldLabels: Record<FieldName, string> = {
  name: "Your name",
  email: "Email address",
  phone: "Phone number",
  businessType: "Type of business",
  process: "What process would you like to improve?",
};

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const get = (key: string) => String(data.get(key) ?? "").trim();

  if (!get("name")) errors.name = "Please enter your name.";

  const email = get("email");
  if (!email) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address, like name@business.co.za.";

  const phone = get("phone");
  if (phone && !/^[+()\d\s-]{9,20}$/.test(phone)) errors.phone = "Please enter a valid phone number, or leave it blank.";

  if (!get("businessType")) errors.businessType = "Please choose the option closest to your business.";

  const process = get("process");
  if (!process) errors.process = "Please tell us a little about the process you’d like to improve.";
  else if (process.length < 15) errors.process = "Please add a bit more detail so we can prepare for our chat.";

  return errors;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  // Move focus to the result so keyboard and screen reader users hear what happened.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
    if (status === "error") summaryRef.current?.focus();
  }, [status]);

  // Each failed validation sets a new errors object, so this runs on every attempt.
  useEffect(() => {
    if (Object.keys(errors).length > 0) summaryRef.current?.focus();
  }, [errors]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span className="icon-badge">
          <Icon name="check" />
        </span>
        <h2 ref={successRef} tabIndex={-1}>
          Thanks, your enquiry is on its way
        </h2>
        <p className="form-intro">
          We’ll read through what you’ve shared and get back to you to arrange a time to talk. If it’s urgent, you’re
          welcome to{" "}
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            message us on WhatsApp
          </a>
          .
        </p>
        <button type="button" className="btn btn-secondary" onClick={() => setStatus("idle")}>
          Send another enquiry
        </button>
      </div>
    );
  }

  const errorEntries = Object.entries(errors) as [FieldName, string][];
  const describedBy = (field: FieldName, hint?: string) =>
    [hint, errors[field] ? `${field}-error` : undefined].filter(Boolean).join(" ") || undefined;

  const fieldError = (field: FieldName) =>
    errors[field] ? (
      <p id={`${field}-error`} className="field-error">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form name={FORM_NAME} method="POST" onSubmit={handleSubmit} noValidate aria-describedby="form-required-note">
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {errorEntries.length > 0 && (
        <div className="form-alert error" ref={summaryRef} tabIndex={-1} role="alert">
          <h3>Please check the following</h3>
          <ul>
            {errorEntries.map(([field, message]) => (
              <li key={field}>
                <a href={`#${field}`}>{fieldLabels[field]}</a>: {message}
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === "error" && (
        <div className="form-alert error" ref={summaryRef} tabIndex={-1} role="alert">
          <h3>Sorry, your enquiry didn’t send</h3>
          <p>
            Please try again in a moment, or contact us directly at{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or on{" "}
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            .
          </p>
        </div>
      )}

      <p id="form-required-note" className="visually-hidden">
        Fields marked optional can be left blank. All other fields are required.
      </p>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
          />
          {fieldError("name")}
        </div>

        <div className="field">
          <label htmlFor="businessName">
            Business name <span className="optional">(optional)</span>
          </label>
          <input id="businessName" name="businessName" type="text" autoComplete="organization" />
        </div>

        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
          />
          {fieldError("email")}
        </div>

        <div className="field">
          <label htmlFor="phone">
            Phone number <span className="optional">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={describedBy("phone")}
          />
          {fieldError("phone")}
        </div>

        <div className="field full">
          <label htmlFor="businessType">Type of business</label>
          <select
            id="businessType"
            name="businessType"
            required
            defaultValue=""
            aria-invalid={errors.businessType ? true : undefined}
            aria-describedby={describedBy("businessType")}
          >
            <option value="" disabled>
              Choose the closest match
            </option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {fieldError("businessType")}
        </div>

        <div className="field full">
          <label htmlFor="process">What process would you like to improve?</label>
          <p id="process-hint" className="hint">
            For example: “Quotes take hours to put together” or “Bookings come in on WhatsApp and get missed.”
          </p>
          <textarea
            id="process"
            name="process"
            required
            rows={6}
            aria-invalid={errors.process ? true : undefined}
            aria-describedby={describedBy("process", "process-hint")}
          />
          {fieldError("process")}
        </div>

        <fieldset className="field full">
          <legend>How would you like to start?</legend>
          <div className="choice-group">
            <label className="choice">
              <input type="radio" name="nextStep" value="Discovery call" defaultChecked />
              <span>
                Book a discovery call
                <small>We’ll email you to arrange a time that suits you.</small>
              </span>
            </label>
            <label className="choice">
              <input type="radio" name="nextStep" value="Reply by email" />
              <span>
                Reply by email first
                <small>Send your thoughts in writing before we chat.</small>
              </span>
            </label>
          </div>
        </fieldset>
      </div>

      <div className="form-footer">
        <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send enquiry"}
          {status !== "submitting" && <Icon name="arrow" size={20} />}
        </button>
        <p>We’ll only use your details to respond to your enquiry.</p>
      </div>
    </form>
  );
}
