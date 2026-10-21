import Image from "next/image";
import { cardNote, dryers, extras, washers, washMinutes } from "@/content/pricing";
import cardReader from "../../public/photos/card-reader.jpg";
import chalkboard from "../../public/photos/washers-chalkboard.jpg";

export function Prices() {
  return (
    <section id="prices" aria-labelledby="prices-title" className="defer-render py-16 sm:py-24">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-script text-3xl text-teal-dark">machines &amp; pricing</p>
            <h2 id="prices-title" className="mt-1 font-display text-4xl leading-none font-semibold sm:text-5xl">
              Wash and dry in under an hour.
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft">All wash cycles are {washMinutes} minutes. Coins or card on every machine.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[...washers].reverse().map((w) => (
            <article key={w.id} className={`flex flex-col rounded-3xl p-6 ring-2 ${w.kg === 27 ? "bg-teal text-ink ring-ink" : "bg-paper-2 ring-transparent"}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-4xl font-semibold">{w.kg}kg</h3>
                <span className="text-sm font-semibold">× {w.count} machines</span>
              </div>
              <p className="mt-1 font-semibold">
                {w.baskets} baskets per wash
              </p>
              {w.note && <p className="mt-1 text-sm">{w.note}</p>}
              <dl className="mt-auto grid grid-cols-3 gap-2 pt-6 text-center">
                {(["cold", "warm", "hot"] as const).map((t) => (
                  <div key={t} className={`rounded-xl py-2 ${w.kg === 27 ? "bg-paper/70" : "bg-paper"}`}>
                    <dt className="text-xs font-semibold tracking-wide uppercase">{t}</dt>
                    <dd className="font-display text-xl font-semibold tabular-nums">${w.prices[t]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="rounded-3xl bg-ink p-6 text-paper sm:p-8">
            <h3 className="font-display text-3xl font-semibold">Dryers</h3>
            <p className="mt-2 text-paper/80">
              {dryers.count} large ({dryers.kg}kg) super hot gas dryers.
            </p>
            <p className="mt-5 font-display text-4xl font-semibold text-sun">$1 / 5 min</p>
            <p className="mt-1 text-paper/80">or {dryers.card}</p>
            <ul className="mt-6 space-y-2 border-t border-paper/15 pt-5 text-sm text-paper/85">
              {extras.map((e) => (
                <li key={e}>{e}</li>
              ))}
              <li className="font-semibold text-paper">{cardNote}</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <Image src={chalkboard} alt="Washers under the chalkboard welcome sign" sizes="(min-width: 1024px) 340px, 92vw" placeholder="blur" className="h-full max-h-96 w-full object-cover lg:max-h-none" />
          </div>
          <div className="overflow-hidden rounded-3xl">
            <Image src={cardReader} alt="Card reader on a washer, taking Visa and Mastercard" sizes="(min-width: 1024px) 340px, 92vw" placeholder="blur" className="h-full max-h-96 w-full object-cover lg:max-h-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
