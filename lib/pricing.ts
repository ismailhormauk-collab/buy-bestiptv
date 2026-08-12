export type PricingPlan = {
  id: string;
  duration: string;
  months: number;
  price: number;
  currency: string;
  perMonth: string;
  popular?: boolean;
  description: string;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "1-month",
    duration: "1 Month",
    months: 1,
    price: 20,
    currency: "€",
    perMonth: "€20.00 / month",
    description: "Try the full player experience with no long-term commitment.",
    features: [
      "Full IPTV player software license",
      "M3U & Xtream playlist import",
      "EPG guide support",
      "1 device connection",
      "Setup assistance included",
      "Standard email & chat support",
    ],
  },
  {
    id: "3-months",
    duration: "3 Months",
    months: 3,
    price: 35,
    currency: "€",
    perMonth: "≈ €11.67 / month",
    description: "A balanced plan for viewers who want lower monthly cost.",
    features: [
      "Full IPTV player software license",
      "M3U & Xtream playlist import",
      "EPG guide support",
      "1 device connection",
      "Priority setup assistance",
      "Priority chat support",
    ],
  },
  {
    id: "6-months",
    duration: "6 Months",
    months: 6,
    price: 45,
    currency: "€",
    perMonth: "≈ €7.50 / month",
    popular: true,
    description: "Our most popular plan — the best balance of value and flexibility.",
    features: [
      "Full IPTV player software license",
      "M3U & Xtream playlist import",
      "EPG guide support",
      "1 device connection",
      "Priority setup assistance",
      "Priority chat & WhatsApp support",
      "Playlist backup assistance",
    ],
  },
  {
    id: "12-months",
    duration: "12 Months",
    months: 12,
    price: 65,
    currency: "€",
    perMonth: "≈ €5.42 / month",
    description: "Best long-term value for committed streaming setups.",
    features: [
      "Full IPTV player software license",
      "M3U & Xtream playlist import",
      "EPG guide support",
      "1 device connection",
      "Priority setup assistance",
      "Priority chat & WhatsApp support",
      "Playlist backup assistance",
      "Annual configuration check-up",
    ],
  },
];
