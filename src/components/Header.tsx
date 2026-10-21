"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { site, telHref } from "@/content/site";
import { PhoneIcon } from "./Icons";
import { Logo } from "./Logo";
import { OpenNow } from "./OpenNow";

export const nav = [
  { label: "Prices", href: "/#prices" },
  { label: "Load planner", href: "/#planner" },
  { label: "Drop & Go", href: "/#drop-and-go" },
  { label: "While you wait", href: "/#while-you-wait" },
  { label: "Find us", href: "/#visit" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[0.95rem] font-medium">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-ink-soft transition-colors hover:text-ink">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={telHref}
              className="hidden h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-paper transition-colors hover:bg-teal-dark sm:inline-flex"
            >
              <PhoneIcon />
              {site.phone}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold ring-1 ring-ink/20 ring-inset lg:hidden"
            >
              <span aria-hidden="true" className="flex w-4 flex-col gap-[3px]">
                <span className="h-0.5 bg-current" />
                <span className="h-0.5 bg-current" />
              </span>
              Menu
            </button>
          </div>
        </div>
      </header>
      {open && <SiteMenu onClose={close} />}
    </>
  );
}

/** Full-screen menu, rendered outside <header> so the sticky, blurred header can't clip it. */
function SiteMenu({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.querySelector<HTMLElement>("button, a")?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && ref.current) {
        const els = ref.current.querySelectorAll<HTMLElement>("a[href], button");
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const mq = window.matchMedia("(min-width: 64rem)");
    const onWide = () => mq.matches && onClose();
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
      prev?.focus();
    };
  }, [onClose]);

  return (
    <div
      id="site-menu"
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="animate-fade-up fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink text-paper lg:hidden"
    >
      <div className="container-site flex h-[4.5rem] shrink-0 items-center justify-between">
        <Logo tone="light" />
        <button type="button" onClick={onClose} className="h-11 rounded-full px-5 text-sm font-semibold ring-1 ring-paper/30 ring-inset">
          Close
        </button>
      </div>
      <nav aria-label="Mobile" className="container-site flex flex-1 flex-col pb-10">
        <ul className="mt-6 border-t border-paper/15">
          {nav.map((n) => (
            <li key={n.href} className="border-b border-paper/15">
              <Link href={n.href} onClick={onClose} className="block py-4 font-display text-4xl font-semibold hover:text-sun">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <a href={telHref} className="mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-sun text-base font-bold text-ink">
          <PhoneIcon />
          Call or text · {site.phone}
        </a>
        <div className="mt-6">
          <OpenNow tone="light" />
        </div>
      </nav>
    </div>
  );
}
