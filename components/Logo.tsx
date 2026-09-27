/** Wordmark: a simple "flow" mark (three steps joining into one) plus the name. */
export function Logo() {
  return (
    <span className="logo">
      <svg className="logo-mark" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect width="32" height="32" rx="8" fill="var(--brand)" />
        <path
          d="M8 10h6a4 4 0 0 1 4 4v0a4 4 0 0 0 4 4h2M8 16h5M8 22h6a4 4 0 0 0 4-4"
          fill="none"
          stroke="var(--on-brand)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="18" r="2.4" fill="var(--accent)" />
      </svg>
      <span className="logo-text">
        Premich<span className="logo-soft"> Software</span>
      </span>
    </span>
  );
}
