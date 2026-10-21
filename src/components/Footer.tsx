import { fullAddress, site, telHref } from "@/content/site";
import { hoursLine } from "@/lib/hours";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink pb-24 text-paper/75 lg:pb-0">
      <div aria-hidden="true" className="bunting rotate-180" />
      <div className="container-site flex flex-col gap-6 py-10 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo tone="light" />
          <p className="mt-4">
            {fullAddress} · {hoursLine}
          </p>
          <p className="mt-1">
            Call or text{" "}
            <a href={telHref} className="font-semibold text-paper">
              {site.phone}
            </a>
          </p>
        </div>
        <p className="max-w-xs text-xs leading-relaxed text-paper/70 sm:text-right">
          Website concept for {site.name}. Prices, hours, photos and reviews from the laundromat&apos;s current website.
        </p>
      </div>
    </footer>
  );
}
