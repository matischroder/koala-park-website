import Link from "next/link";
import { mapsUrl, telHref } from "@/content/site";
import { PhoneIcon } from "./Icons";

/** Thumb-reach actions on phones. */
export function MobileBar() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-paper/95 p-2 backdrop-blur-sm lg:hidden">
      <ul className="grid grid-cols-3 gap-2 text-sm font-bold">
        <li>
          <a href={telHref} className="flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-paper">
            <PhoneIcon />
            Call
          </a>
        </li>
        <li>
          <Link href="/#planner" className="flex h-12 items-center justify-center rounded-full bg-sun text-ink">
            Prices
          </Link>
        </li>
        <li>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center rounded-full ring-2 ring-ink ring-inset">
            Directions
          </a>
        </li>
      </ul>
    </nav>
  );
}
