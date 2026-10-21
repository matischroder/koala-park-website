import Image from "next/image";
import Link from "next/link";
import { fullAddress, mapsUrl, site } from "@/content/site";
import { formatTime, hoursLine } from "@/lib/hours";
import { washMinutes } from "@/content/pricing";
import { OpenNow } from "./OpenNow";
import interior from "../../public/photos/interior-bunting.jpg";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="bunting" />
      <div className="container-site grid items-center gap-10 pt-8 pb-14 sm:pt-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pt-14 lg:pb-20">
        <div className="animate-fade-up">
          <p className="font-script text-3xl text-teal-dark">our little laundromat by the sea</p>
          <h1 id="hero-title" className="mt-2 font-display text-[2.9rem] leading-[0.98] font-semibold tracking-tight text-balance sm:text-6xl lg:text-[4.3rem]">
            Six baskets of washing. <span className="text-teal-dark">{washMinutes}&nbsp;minutes.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Two massive 27kg washers — the biggest available to the public on the Gold Coast — plus six more, eight hot gas dryers
            and card readers on everything. Open {hoursLine} in Burleigh Heads.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#planner"
              className="inline-flex h-13 items-center justify-center rounded-full bg-ink px-7 font-bold text-paper transition-colors hover:bg-teal-dark"
            >
              Plan my wash
            </Link>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center rounded-full px-7 font-bold ring-2 ring-ink ring-inset transition-colors hover:bg-mint"
            >
              Directions
            </a>
          </div>
          <div className="mt-6 flex flex-col gap-1">
            <OpenNow />
            <span className="text-sm text-ink-soft">{fullAddress} · free parking</span>
          </div>
        </div>

        <div className="animate-fade-up relative [animation-delay:120ms]">
          <div className="overflow-hidden rounded-[2rem] ring-8 ring-mint">
            <Image
              src={interior}
              alt="Inside Koala Park Laundromat: bunting, washers along the wall and the long folding table"
              sizes="(min-width: 1024px) 560px, 92vw"
              preload
              placeholder="blur"
              className="aspect-[4/3] h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 rotate-[-4deg] rounded-2xl bg-sun px-5 py-3 shadow-lg sm:-left-6">
            <p className="font-display text-2xl leading-none font-bold">365 days</p>
            <p className="text-sm font-semibold">
              {formatTime(site.opens)} – {formatTime(site.closes)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
