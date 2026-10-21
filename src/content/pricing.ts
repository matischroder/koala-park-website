/**
 * Machines, prices and the Drop and Go price list, transcribed from
 * koalaparklaundromat.com (Machines & Pricing, Laundry Services pages).
 */

export type Temp = "cold" | "warm" | "hot";

export type Washer = {
  id: string;
  kg: number;
  baskets: number;
  count: number;
  prices: Record<Temp, number>;
  note?: string;
};

/** All wash cycles are 24 minutes. Smallest first. */
export const washers: Washer[] = [
  { id: "9kg", kg: 9, baskets: 2, count: 2, prices: { cold: 7, warm: 8, hot: 9 } },
  { id: "14kg", kg: 14, baskets: 3, count: 2, prices: { cold: 10, warm: 11, hot: 12 } },
  { id: "18kg", kg: 18, baskets: 4, count: 2, prices: { cold: 13, warm: 14, hot: 15 }, note: "Ideal for doonas, blankets & curtains" },
  { id: "27kg", kg: 27, baskets: 6, count: 2, prices: { cold: 18, warm: 19, hot: 20 }, note: "Fits 4 queen doonas · the biggest washers available to the public on the Gold Coast" },
];

export const washMinutes = 24;

export const dryers = {
  count: 8,
  kg: 14,
  coin: "$1 for 5 minutes",
  card: "$5 for 25 minutes by card",
};

export const extras = [
  "Eco-friendly washing powder & fabric softener sachets — $2 each",
  "Change machine — turns notes into $1 coins",
  "Card readers on every machine: Visa, Mastercard, Eftpos, Apple Pay & PayWave",
];

export const cardNote = "If paying by card, washers charge the hot water rate.";

export type PriceLine = { name: string; price: string; note?: string };

export const dropAndGoPrices: { title: string; lines: PriceLine[]; note?: string }[] = [
  {
    title: "Laundry",
    note: "Prices are per one level oval basket and include detergent.",
    lines: [
      { name: "Wash or dry (only)", price: "$10" },
      { name: "Wash and dry", price: "$20", note: "first basket, then $15 each" },
      { name: "Dry and fold", price: "$20", note: "first basket, then $15 each" },
      { name: "Wash, dry & fold", price: "$30", note: "first basket, then $25 each" },
    ],
  },
  {
    title: "Doonas & large items",
    note: "Washed, dried & folded — detergent included.",
    lines: [
      { name: "Single doona", price: "$20" },
      { name: "Double, queen or king doona", price: "$30" },
      { name: "Feather doona (all sizes)", price: "$45" },
      { name: "Other large items", price: "$45", note: "large blankets, mattress toppers etc." },
    ],
  },
  {
    title: "Ironing",
    lines: [{ name: "Per garment", price: "$3", note: "shirts, pants, t-shirts, uniform items etc." }],
  },
];

export const lockerSteps = [
  {
    title: "Drop off 24/7",
    body: "Place your laundry in a locker, note the locker number and jumble the lock's combination. Text Julie your name, locker number, email (for the invoice) and the service you need.",
  },
  { title: "Pre-pay", body: "You'll receive an invoice by email. Once payment is received, your order is actioned." },
  { title: "Pick up 24/7", body: "When it's done you'll get a text with the locker number and the code to open the lock." },
];

export const serviceArea = [
  "Burleigh Heads", "West Burleigh", "Burleigh Waters", "Palm Beach", "Elanora", "Tugun", "Currumbin", "Robina",
  "Tallebudgera", "Reedy Creek", "Mudgeeraba", "Varsity Lakes", "Miami", "Mermaid Waters", "Mermaid Beach",
  "Surfers Paradise", "Merrimac",
];

export const businessCustomers =
  "cafes, restaurants, gyms, hair salons, day spas, physios, chiros, massage therapists, bakeries, local sports teams, Airbnbs, Stayz and motels";
