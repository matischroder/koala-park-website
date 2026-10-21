"use client";

import { useId, useMemo, useState } from "react";
import { cardNote, dryers, washMinutes, type Temp } from "@/content/pricing";
import { planWash } from "@/lib/planner";
import { WasherMark } from "./Icons";

const temps: { id: Temp; label: string }[] = [
  { id: "cold", label: "Cold" },
  { id: "warm", label: "Warm" },
  { id: "hot", label: "Hot" },
];

/** Baskets in → cheapest mix of washers out, using the laundromat's own prices. */
export function Planner() {
  const [baskets, setBaskets] = useState(4);
  const [temp, setTemp] = useState<Temp>("cold");
  const [card, setCard] = useState(false);
  const plan = useMemo(() => planWash(baskets, temp, card), [baskets, temp, card]);
  const id = useId();

  return (
    <section id="planner" aria-labelledby="planner-title" className="terrazzo border-y-2 border-ink py-16 sm:py-20">
      <div className="container-site">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-paper p-6 ring-2 ring-ink sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div>
            <p className="font-script text-3xl text-teal-dark">how much will it cost?</p>
            <h2 id="planner-title" className="mt-1 font-display text-4xl leading-none font-semibold sm:text-5xl">
              Load planner
            </h2>
            <p className="mt-4 text-ink-soft">
              Tell us how many baskets you&apos;ve got and we&apos;ll work out the cheapest mix of machines. One basket = one level
              oval laundry basket.
            </p>

            <div className="mt-8">
              <label htmlFor={`${id}-baskets`} className="flex items-baseline justify-between font-bold">
                <span>Baskets of washing</span>
                <span className="font-display text-4xl tabular-nums">{baskets}</span>
              </label>
              <input
                id={`${id}-baskets`}
                type="range"
                min={1}
                max={24}
                value={baskets}
                onChange={(e) => setBaskets(Number(e.target.value))}
                className="mt-3 w-full accent-teal-dark"
              />
              <div className="mt-1 flex justify-between text-xs text-ink-soft" aria-hidden="true">
                <span>1</span>
                <span>12</span>
                <span>24</span>
              </div>
            </div>

            <fieldset className="mt-6">
              <legend className="font-bold">Wash temperature</legend>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {temps.map((t) => (
                  <label key={t.id} className="cursor-pointer">
                    <input type="radio" name={`${id}-temp`} value={t.id} checked={temp === t.id} onChange={() => setTemp(t.id)} className="peer sr-only" />
                    <span className="flex h-12 items-center justify-center rounded-full font-bold ring-2 ring-ink/20 ring-inset transition-colors peer-checked:bg-ink peer-checked:text-paper peer-checked:ring-ink peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-teal-dark">
                      {t.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="mt-5 flex cursor-pointer items-center gap-3">
              <input type="checkbox" checked={card} onChange={(e) => setCard(e.target.checked)} className="size-5 accent-teal-dark" />
              <span className="font-semibold">I&apos;m paying by card</span>
            </label>
            <p className="mt-1 pl-8 text-sm text-ink-soft">{cardNote}</p>
          </div>

          <div className="flex flex-col rounded-3xl bg-ink p-6 text-paper sm:p-8" aria-live="polite">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">Your cheapest wash</p>
            <ul className="mt-5 space-y-3">
              {plan.loads.map((l) => (
                <li key={l.washer.id} className="flex items-center gap-4">
                  <WasherMark className="size-11 shrink-0" spinning />
                  <div className="flex-1">
                    <p className="font-bold">
                      {l.cycles} × {l.washer.kg}kg washer
                    </p>
                    <p className="text-sm text-paper/75">
                      {l.washer.baskets} baskets each · ${l.price / l.cycles} a {card ? "card" : temp} wash
                    </p>
                  </div>
                  <span className="font-display text-2xl tabular-nums">${l.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-end justify-between gap-4 border-t border-paper/20 pt-5">
              <div>
                <p className="text-sm text-paper/75">Washing total</p>
                <p className="text-sm text-paper/75">
                  ~{plan.minutes} min if machines are free · room for {plan.capacity} baskets
                </p>
              </div>
              <p className="font-display text-5xl font-semibold text-sun tabular-nums">${plan.total}</p>
            </div>
            <p className="mt-auto pt-6 text-sm leading-relaxed text-paper/75">
              Then dry: {dryers.count} gas dryers ({dryers.kg}kg) at {dryers.coin}, or {dryers.card}. Every wash cycle is {washMinutes} minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
