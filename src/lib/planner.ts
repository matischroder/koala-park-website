import { washers, washMinutes, type Temp, type Washer } from "@/content/pricing";

export type Plan = {
  loads: { washer: Washer; cycles: number; price: number }[];
  total: number;
  /** Minutes of washing if the machines are free (each size has `count` machines side by side). */
  minutes: number;
  capacity: number;
};

/**
 * Cheapest set of wash cycles that fits `baskets` baskets, using the laundromat's
 * published capacities and prices. Paying by card charges the hot rate.
 */
export function planWash(baskets: number, temp: Temp, card: boolean): Plan {
  const rate = (w: Washer) => w.prices[card ? "hot" : temp];
  const max = baskets + Math.max(...washers.map((w) => w.baskets));
  // best[b] = cheapest way to wash at least b baskets; ties go to fewer cycles.
  const best: { cost: number; cycles: number; pick: number }[] = Array.from({ length: max + 1 }, () => ({ cost: Infinity, cycles: Infinity, pick: -1 }));
  best[0] = { cost: 0, cycles: 0, pick: -1 };
  for (let b = 1; b <= max; b++) {
    washers.forEach((w, i) => {
      const prev = best[Math.max(0, b - w.baskets)];
      const cost = prev.cost + rate(w);
      const cycles = prev.cycles + 1;
      if (cost < best[b].cost || (cost === best[b].cost && cycles < best[b].cycles)) best[b] = { cost, cycles, pick: i };
    });
  }
  const counts = washers.map(() => 0);
  for (let b = baskets; b > 0; ) {
    const i = best[b].pick;
    counts[i]++;
    b = Math.max(0, b - washers[i].baskets);
  }
  const loads = washers
    .map((washer, i) => ({ washer, cycles: counts[i], price: counts[i] * rate(washer) }))
    .filter((l) => l.cycles > 0)
    .reverse();
  const rounds = Math.max(0, ...loads.map((l) => Math.ceil(l.cycles / l.washer.count)));
  return {
    loads,
    total: loads.reduce((s, l) => s + l.price, 0),
    minutes: rounds * washMinutes,
    capacity: loads.reduce((s, l) => s + l.cycles * l.washer.baskets, 0),
  };
}
