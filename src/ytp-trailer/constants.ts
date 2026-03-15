export const FPS = 30;

export const C = {
  black: "#000000",
  dark: "#080808",
  white: "#ffffff",
  offwhite: "#f7f4ee",
  green: "#0f7a46",
  greenBright: "#00A651",
  greenGlow: "rgba(0, 166, 81, 0.25)",
  textMuted: "rgba(255,255,255,0.45)",
  textSoft: "rgba(255,255,255,0.7)",
  cardBorder: "rgba(0,0,0,0.06)",
  cardBg: "rgba(255,255,255,0.95)",
  luxurySurface: "#f0faf4",
  surfaceMuted: "#6b7280",
  ivoryBg: "#f7f4ee",
  luxuryBg: "#faf8f5",
  luxuryWarm: "#f5f2ed",
  textDark: "#1a1a1a",
  textMutedDark: "rgba(17,17,17,0.55)",
  textSoftDark: "rgba(17,17,17,0.72)",
  shadowLuxury: "0 4px 24px rgba(0, 0, 0, 0.04)",
  shadowLuxuryMd: "0 8px 32px rgba(0, 0, 0, 0.06)",
  shadowLuxuryLg: "0 16px 48px rgba(0, 0, 0, 0.08)",
  shadowLuxuryGreen: "0 8px 32px rgba(0, 166, 81, 0.12)",
} as const;

// Prada Dem — 122 BPM. At 30fps: 1 beat = 15 frames, 1 bar = 60. All scene durations beat-aligned.
export const SCRIPT = [
  { type: "text", text: "What if", frames: 45 }, // 3 beats
  { type: "text", text: "you didn't have to wait\nto start selling?", frames: 45 }, // 3 beats
  { type: "brand", frames: 75 }, // 5 beats
  { type: "text", text: "Have a product?\nHave a business idea?", frames: 75, bg: "product_idea" as const }, // 5 beats
  { type: "text", text: "This is where you\nlaunch it.", frames: 45, bg: "store_setup" as const }, // 3 beats
  { type: "mockup_dashboard", frames: 75 }, // 5 beats
  { type: "text", text: "Set up your store in minutes.\nAdd products, set prices, go live.", frames: 45, bg: "product_list" as const }, // 3 beats
  { type: "text", text: "We handle payments, shipping labels,\nand tracking — so you can focus on\nwhat you're building.", frames: 75, bg: "shipping" as const }, // 5 beats
  { type: "text", text: "Keep more of what you earn.\nOur fees are built to help you grow,\nnot hold you back.", frames: 75, bg: "revenue" as const }, // 5 beats
  { type: "text", text: "Give your customers a premium\nshopping experience.", frames: 45 }, // 3 beats
  { type: "mockup_storefront", frames: 75 }, // 5 beats
  { type: "text", text: "Showcase your products alongside\nthe best student brands.", frames: 75, bg: "browse" as const }, // 5 beats
  { type: "mockup_products", frames: 75 }, // 5 beats
  { type: "mockup_phone", frames: 60 }, // 4 beats
  { type: "text", text: "A 100% nonprofit initiative\ndedicated to empowering\nyouth-led businesses.", frames: 60 }, // 4 beats
  { type: "text", text: "Start building your empire today.", frames: 60 }, // 4 beats
  { type: "text", text: "Launching March 21.", frames: 45 }, // 3 beats
  { type: "end", frames: 75 }, // 5 beats
] as const;

export const MOCK_PRODUCTS = [
  { name: "Handcrafted Candle Set", seller: "Lumière Co.", price: "$28.00", color: "#e8ddd0" },
  { name: "Custom Phone Case", seller: "CaseLab", price: "$19.99", color: "#d4e4d9" },
  { name: "Organic Tea Blend", seller: "BrewCraft", price: "$15.00", color: "#dde3d5" },
  { name: "Arduino Starter Kit", seller: "TechNest", price: "$42.00", color: "#d8dce8" },
  { name: "Eco Tote Bag", seller: "GreenThread", price: "$24.00", color: "#e2ddd4" },
  { name: "3D Printed Planter", seller: "FormLab", price: "$18.50", color: "#d9e5de" },
] as const;

export const DASHBOARD_ROWS = [
  { id: "#1247", product: "Handcrafted Candle Set", status: "Shipped", amount: "$28.00" },
  { id: "#1246", product: "Custom Phone Case", status: "Processing", amount: "$19.99" },
  { id: "#1245", product: "Organic Tea Blend", status: "Delivered", amount: "$15.00" },
  { id: "#1244", product: "Arduino Starter Kit", status: "Shipped", amount: "$42.00" },
  { id: "#1243", product: "Eco Tote Bag", status: "Processing", amount: "$24.00" },
] as const;

export const DEMO_TITLES = {
  storefront: {
    text: "A premium storefront designed to elevate ",
    italic: "your brand.",
  },
  products: {
    text: "Put your products in front of a community that values ",
    italic: "student founders.",
  },
  dashboard: {
    text: "Your entire business at a glance — orders, revenue, and analytics built for ",
    italic: "student sellers.",
  },
  phone: {
    text: "Secure checkout and tracked delivery for ",
    italic: "every order.",
  },
} as const;
