type P = { className?: string };

export function PhoneIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" strokeLinejoin="round" />
    </svg>
  );
}

export function ChatIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 5h16v11H9l-5 4z" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

/** A front-loader: the site's mark. */
export function WasherMark({ className = "size-9", spinning = false }: P & { spinning?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="4" y="2" width="32" height="36" rx="6" fill="var(--color-teal)" />
      <circle cx="11" cy="8" r="1.8" fill="var(--color-coral)" />
      <circle cx="16.5" cy="8" r="1.8" fill="var(--color-sun)" />
      <circle cx="20" cy="23" r="10" fill="var(--color-paper)" />
      <g className={spinning ? "animate-drum origin-[20px_23px]" : undefined}>
        <circle cx="20" cy="23" r="7" fill="var(--color-ink)" />
        <path d="M14 24.5c2.5-2 4.5 1.8 6 0s3.6-1.8 6 0" stroke="var(--color-teal)" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
