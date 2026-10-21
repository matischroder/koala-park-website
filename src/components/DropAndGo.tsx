import Image from "next/image";
import { businessCustomers, dropAndGoPrices, lockerSteps, serviceArea } from "@/content/pricing";
import { julieSms, julieTel, site } from "@/content/site";
import { ChatIcon, PhoneIcon } from "./Icons";
import locker from "../../public/photos/locker.jpg";

export function DropAndGo() {
  return (
    <section id="drop-and-go" aria-labelledby="dropgo-title" className="defer-render py-16 sm:py-24">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-script text-3xl text-teal-dark">don&apos;t have time?</p>
            <h2 id="dropgo-title" className="mt-1 font-display text-4xl leading-none font-semibold sm:text-5xl">
              {site.dropAndGo.name} laundry &amp; ironing.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Laundry lockers behind the laundromat are open 24 hours, 365 days. Drive right up, drop off whenever suits you and
              pick up when it&apos;s done — they light up after dark.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={julieSms} className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-coral-dark px-6 font-bold text-paper hover:bg-ink">
                <ChatIcon />
                Text Julie · {site.dropAndGo.phone}
              </a>
              <a href={julieTel} className="inline-flex h-13 items-center justify-center gap-2 rounded-full px-6 font-bold ring-2 ring-ink ring-inset hover:bg-mint">
                <PhoneIcon />
                Call Julie
              </a>
            </div>

            <ol className="mt-10 space-y-5">
              {lockerSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-ink font-display text-xl font-bold text-paper">{i + 1}</span>
                  <div>
                    <h3 className="font-bold">{s.title}</h3>
                    <p className="mt-1 leading-relaxed text-ink-soft">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="rounded-[2rem] bg-paper-2 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <Image src={locker} alt="A numbered laundry locker with a combination lock" sizes="80px" placeholder="blur" className="size-20 rounded-2xl object-cover" />
                <h3 className="font-display text-3xl font-semibold">Price list</h3>
              </div>
              {dropAndGoPrices.map((g) => (
                <div key={g.title} className="mt-7">
                  <h4 className="border-b-2 border-ink pb-1 text-sm font-extrabold tracking-[0.14em] uppercase">{g.title}</h4>
                  <ul>
                    {g.lines.map((l) => (
                      <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3">
                        <span>
                          <span className="font-semibold">{l.name}</span>
                          {l.note && <span className="block text-sm text-ink-soft">{l.note}</span>}
                        </span>
                        <span className="shrink-0 font-display text-xl font-semibold tabular-nums">{l.price}</span>
                      </li>
                    ))}
                  </ul>
                  {g.note && <p className="mt-2 text-sm text-ink-soft">{g.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl p-6 ring-2 ring-ink/10">
            <h3 className="font-bold">Businesses welcome</h3>
            <p className="mt-2 text-ink-soft">Commercial enquiries from {businessCustomers} and more.</p>
          </div>
          <div className="rounded-3xl p-6 ring-2 ring-ink/10">
            <h3 className="font-bold">Areas we cover</h3>
            <p className="mt-2 text-ink-soft">{serviceArea.join(" · ")} and beyond.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
