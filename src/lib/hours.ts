import { site } from "@/content/site";

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** "17:00" → "5pm", "05:30" → "5.30am" (the laundromat writes times with a dot). */
export function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return m ? `${hour}.${String(m).padStart(2, "0")}${suffix}` : `${hour}${suffix}`;
}

export function brisbaneMinutes(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Brisbane", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(date);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0);
  return get("hour") * 60 + get("minute");
}

export type OpenStatus = { open: boolean; label: string; detail: string };

/** Open 365 days, so it's only ever "open until 10pm" or "opens at 5.30am". */
export function openStatus(date = new Date()): OpenStatus {
  const now = brisbaneMinutes(date);
  if (now >= toMinutes(site.opens) && now < toMinutes(site.closes)) {
    const lastWash = now >= toMinutes(site.lastWashIfDrying) ? ` · last wash ${formatTime(site.lastWash)}` : "";
    return { open: true, label: "Open now", detail: `until ${formatTime(site.closes)}${lastWash}` };
  }
  return { open: false, label: "Closed now", detail: `Opens ${now < toMinutes(site.opens) ? "today" : "tomorrow"} ${formatTime(site.opens)}` };
}

export const hoursLine = `${formatTime(site.opens)} – ${formatTime(site.closes)}, 365 days`;
