export type Plan = {
  id: string;                       // kebab-case key
  displayName: string;              // what shows on the site
  price: {                          // money block => easier math/formatting
    amount: number | "custom";
    currency: "USD";
    cadence: "month";
  };
  tagline: string;                  // quick benefit hook
  target: string;                   // who it's for
  highlights: string[];             // 5–8 scannable bullets
  isPopular?: boolean;              // for "recommended" badge
};

export const plans: Plan[] = [
  {
    id: "bit",
    displayName: "bit",
    price: { amount: 2999, currency: "USD", cadence: "month" },
    tagline: "get an mvp moving",
    target: "solo founders & seed-stage startups",
    highlights: [
      "160 hours of access to a consulting engineer",
      "pre-defined engineering scope (full-stack, back-end, front-end, infrastructure, design, etc.)",
      "weekly demos, feedback loops, and day-to-day responsive communication",
      "documentation hand-off on completion",
      "agile engineering practices",
    ],
  },
  {
    id: "byte",
    displayName: "byte",
    price: { amount: 4999, currency: "USD", cadence: "month" },
    tagline: "accelerate & harden",
    target: "funded scale-ups with live users",
    highlights: [
      "320 hours of access to 2 consulting engineers",
      "pre-defined engineering scope (full-stack, back-end, front-end, infrastructure, design, etc.)",
      "weekly demos, feedback loops, and day-to-day responsive communication",
      "documentation hand-off on completion",
      "agile engineering practices",
    ],
    isPopular: true,
  },
  {
    id: "block",
    displayName: "block",
    price: { amount: 9999, currency: "USD", cadence: "month" },
    tagline: "ship & scale with confidence",
    target: "mid-market / enterprise teams",
    highlights: [
      "640 hours of access to a team of consulting engineers",
      "pre-defined engineering scope (full-stack, back-end, front-end, infrastructure, design, etc.)",
      "weekly demos, feedback loops, and day-to-day responsive communication",
      "documentation hand-off on completion",
      "agile engineering practices",
      "on-call engineering support",
    ],
  },
  {
    id: "custom",
    displayName: "bespoke",
    price: { amount: "custom", currency: "USD", cadence: "month" },
    tagline: "your vision, our canvas",
    target: "complex or regulated orgs",
    highlights: [
      "build-your-own-team of consulting engineers",
      "pre-defined engineering scope (full-stack, back-end, front-end, infrastructure, design, etc.)",
      "weekly demos, feedback loops, and day-to-day responsive communication",
      "documentation hand-off on completion",
      "agile engineering practices",
      "on-call engineering support",
    ],
  },
];

// Helper function to format price
export const formatPrice = (plan: Plan): string => {
  if (plan.price.amount === "custom") {
    return "custom";
  }

  // Amount is already in USD, no need to divide by 100
  return `$${plan.price.amount.toLocaleString()}`;
}; 