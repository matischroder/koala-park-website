/** Business details, as published on the laundromat's current website (koalaparklaundromat.com). */
export const site = {
  name: "Koala Park Laundromat",
  address: { street: "17 Ikkina Road", suburb: "Burleigh Heads", state: "QLD", postcode: "4220", country: "AU" },
  phone: "0400 211 622",
  phoneIntl: "+61400211622",
  /** Julie's Drop and Go Laundry & Ironing Service, run from the lockers behind the laundromat. */
  dropAndGo: { name: "Julie's Drop and Go", phone: "0439 725 151", phoneIntl: "+61439725151" },
  /** Open every day of the year. 24h, Brisbane time. */
  opens: "05:30",
  closes: "22:00",
  lastWash: "21:30",
  lastWashIfDrying: "21:00",
  social: {
    facebook: "https://www.facebook.com/Koala-Park-Laundromat-Burleigh-Heads-Gold-Coast-325635914596532/",
    instagram: "https://www.instagram.com/burleighheadslaundromat",
  },
  /** Keep the concept out of search results while the current site is live. */
  isPreview: true,
};

export const fullAddress = `${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`;
export const telHref = `tel:${site.phoneIntl}`;
export const smsHref = `sms:${site.phoneIntl}`;
export const julieTel = `tel:${site.dropAndGo.phoneIntl}`;
export const julieSms = `sms:${site.dropAndGo.phoneIntl}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name} ${fullAddress}`)}`;

export function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  return vercel ? `https://${vercel}` : "http://localhost:3000";
}
