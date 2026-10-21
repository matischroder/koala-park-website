"use client";

import { useEffect, useState } from "react";
import { openStatus, type OpenStatus } from "@/lib/hours";

/** Live open/closed badge in Gold Coast time. Renders a placeholder until mounted so it's never stale. */
export function OpenNow({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(openStatus());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return <span className="inline-block h-5" aria-hidden="true" />;
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center gap-2 text-sm ${light ? "text-paper/85" : "text-ink-soft"}`}>
      <span className="relative flex size-2.5">
        {status.open && <span className="absolute inset-0 animate-ping rounded-full bg-teal/70" />}
        <span className={`relative size-2.5 rounded-full ${status.open ? "bg-teal" : "bg-coral"}`} />
      </span>
      <span className={`font-bold ${light ? "text-paper" : "text-ink"}`}>{status.label}</span>
      {status.detail && <span>· {status.detail}</span>}
    </span>
  );
}
