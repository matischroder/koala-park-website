import Link from "next/link";
import { WasherMark } from "./Icons";

/** After the window sign: "koala park" in script over LAUNDROMAT in caps. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <WasherMark className="size-10 shrink-0 transition-transform group-hover:-rotate-6" />
      <span className="leading-none">
        <span className={`block font-script text-[1.55rem] leading-[0.8] ${light ? "text-teal" : "text-teal-dark"}`}>koala park</span>
        <span className={`block text-[0.95rem] font-extrabold tracking-[0.2em] ${light ? "text-paper" : "text-ink"}`}>LAUNDROMAT</span>
      </span>
    </Link>
  );
}
