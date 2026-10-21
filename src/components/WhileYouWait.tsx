"use client";

import { useEffect, useRef, useState } from "react";
import { washMinutes } from "@/content/pricing";
import { whileYouWait } from "@/content/extras";

const TOTAL = washMinutes * 60;
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

/** A 24-minute wash timer, with the laundromat's own list of things to do nearby. */
export function WhileYouWait() {
  const [endsAt, setEndsAt] = useState<number | null>(null);
  const [left, setLeft] = useState(TOTAL);
  const notified = useRef(false);

  useEffect(() => {
    if (endsAt === null) return;
    const tick = () => {
      const s = Math.max(0, Math.round((endsAt - Date.now()) / 1000));
      setLeft(s);
      if (s === 0 && !notified.current) {
        notified.current = true;
        navigator.vibrate?.([200, 100, 200]);
        if ("Notification" in window && Notification.permission === "granted") new Notification("Your wash is done! 🧺");
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endsAt]);

  const start = () => {
    notified.current = false;
    if ("Notification" in window && Notification.permission === "default") void Notification.requestPermission();
    setEndsAt(Date.now() + TOTAL * 1000);
  };
  const reset = () => {
    setEndsAt(null);
    setLeft(TOTAL);
  };
  const running = endsAt !== null && left > 0;
  const done = endsAt !== null && left === 0;
  const progress = 1 - left / TOTAL;

  return (
    <section id="while-you-wait" aria-labelledby="wait-title" className="defer-render bg-mint py-16 sm:py-24">
      <div className="container-site grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16">
        <div className="flex flex-col items-center rounded-[2rem] bg-paper p-8 text-center ring-2 ring-ink lg:sticky lg:top-24 lg:self-start">
          <p className="font-script text-3xl text-teal-dark">wash timer</p>
          <div className="relative mt-4 grid size-56 place-items-center">
            <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90" aria-hidden="true">
              <circle cx="50" cy="50" r="44" fill="none" stroke="var(--color-paper-2)" strokeWidth="8" />
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="var(--color-teal)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 44}
                strokeDashoffset={2 * Math.PI * 44 * (1 - progress)}
                className="transition-[stroke-dashoffset] duration-1000 ease-linear"
              />
            </svg>
            <div role="timer" aria-live="off" className="font-display text-6xl font-semibold tabular-nums">
              {done ? "Done!" : fmt(left)}
            </div>
          </div>
          <p className="mt-4 text-sm text-ink-soft" aria-live="polite">
            {done ? "Your wash is done — time for the dryer." : running ? "Washing… go and enjoy Burleigh." : "Every wash cycle takes 24 minutes."}
          </p>
          <div className="mt-5 flex gap-2">
            {!running && (
              <button type="button" onClick={start} className="h-12 rounded-full bg-ink px-6 font-bold text-paper hover:bg-teal-dark">
                {done ? "Start another" : "Start 24-min timer"}
              </button>
            )}
            {endsAt !== null && (
              <button type="button" onClick={reset} className="h-12 rounded-full px-6 font-bold ring-2 ring-ink ring-inset">
                Reset
              </button>
            )}
          </div>
        </div>

        <div>
          <h2 id="wait-title" className="font-display text-4xl leading-none font-semibold sm:text-5xl">
            Things to do while your laundry washes.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            We&apos;re in the Koala Park shopping strip, just off the Gold Coast Highway — a short stroll from the creek, the
            National Park and the beach.
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2">
            {whileYouWait.map((t, i) => (
              <li key={t.title} className="flex gap-4 rounded-2xl bg-paper p-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sun font-display font-bold">{i + 1}</span>
                <div>
                  <h3 className="font-bold">{t.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
