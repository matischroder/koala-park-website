import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { site, siteUrl } from "@/content/site";
import { washMinutes } from "@/content/pricing";
import { hoursLine } from "@/lib/hours";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], axes: ["SOFT", "opsz"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["600"], display: "swap" });

const title = `Koala Park Laundromat | Burleigh Heads Laundromat, Open ${hoursLine}`;
const description =
  `Laundromat at 17 Ikkina Road, Burleigh Heads. Open ${hoursLine}. Two 27kg washers (6 baskets in ${washMinutes} minutes), gas dryers, card payments, free parking, plus a drop-and-go laundry & ironing service with 24/7 lockers.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_AU", siteName: site.name, title, description, url: "/" },
  robots: site.isPreview ? { index: false, follow: false } : { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#17233d" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${jakarta.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
