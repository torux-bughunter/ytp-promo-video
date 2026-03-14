import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { C, MOCK_PRODUCTS, DEMO_TITLES } from "./constants";
import { smooth, dramatic } from "./ease";

// Exact copy and structure from storefront/src/app/[locale]/(main)/page.tsx and components
const NAV_LINKS = [{ href: "/", label: "Home" }, { href: "/categories", label: "Shop" }, { href: "/sellers", label: "Sellers" }];
const QUICK_CATEGORIES = [
  { name: "Electronics" },
  { name: "Handmade" },
  { name: "Food & Drink" },
  { name: "Fashion" },
  { name: "Services" },
  { name: "Stationery" },
];
const HOW_STEPS = [
  { number: 1, title: "Discover Businesses", description: "Explore verified businesses launched by ambitious student entrepreneurs." },
  { number: 2, title: "Secure Commerce", description: "Shop with confidence using our secure payment and tracking systems." },
  { number: 3, title: "Empower Innovation", description: "Directly fund the education and future projects of the next generation." },
];
const TRUST_BADGES = [
  { title: "Parent Supervised", description: "All businesses are guardian-supervised" },
  { title: "Secure Checkout", description: "Safe and encrypted payments" },
  { title: "Tracking Included", description: "Track every order until delivery" },
];
const SELLERS_MOCK = [
  { name: "Lumière Co.", description: "Handcrafted candles and home fragrances by student makers.", rating: 4.9, reviewCount: 12 },
  { name: "CaseLab", description: "Custom phone cases and tech accessories designed by young creators.", rating: 5, reviewCount: 8 },
  { name: "BrewCraft", description: "Small-batch organic teas and coffee blends from aspiring entrepreneurs.", rating: 4.8, reviewCount: 15 },
  { name: "TechNest", description: "Arduino kits and maker supplies for the next generation of builders.", rating: 5, reviewCount: 6 },
];

const CONTAINER_MAX = 1280;
const CONTAINER_PX = 40;

export const SceneStorefrontMockup: React.FC<{
  fontFamily?: string;
  fontFamilySerif?: string;
}> = ({ fontFamily, fontFamilySerif }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = fontFamily ?? "system-ui, sans-serif";
  const fs = fontFamilySerif ?? "Georgia, serif";

  const browserOpacity = interpolate(frame, [0, fps * 0.5], [0, 1], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const browserY = interpolate(frame, [0, fps * 0.8], [20, -85], { easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const browserScale = interpolate(frame, [0, fps * 0.8], [0.98, 0.96], { easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const rotX = interpolate(frame, [0, fps * 0.9], [6, 0], { easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const rotY = interpolate(frame, [0, fps * 0.9], [8, 0], { easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const slowPan = interpolate(frame, [fps * 0.6, fps * 2.5], [0, -950], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: C.luxuryBg, perspective: 2000 }}>
      <div style={{ position: "absolute", left: "50%", top: "50%", width: 1200, height: 700, marginLeft: -600, marginTop: -350, borderRadius: "50%", background: `radial-gradient(ellipse, rgba(0,166,81,0.08), transparent 60%)`, filter: "blur(80px)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.4 }} />

      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: browserOpacity, transformStyle: "preserve-3d", transform: `translateY(${browserY}px) scale(${browserScale}) rotateX(${rotX}deg) rotateY(${rotY}deg)` }}>
        <div style={{ width: 1380, height: 848, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 32px 80px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)", background: "#ffffff", position: "relative" }}>
          {/* Chrome bar */}
          <div style={{ height: 38, background: "#f5f5f5", borderBottom: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", padding: "0 14px", gap: 7 }}>
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
            <div style={{ flex: 1, marginLeft: 60, marginRight: 100, height: 24, borderRadius: 6, background: "#e8e8e8", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", border: "1.2px solid #999" }} />
              <span style={{ fontFamily: f, fontSize: 11, color: "#888" }}>ytpmarketplace.com</span>
            </div>
          </div>

          <div style={{ position: "relative", height: 810, overflow: "hidden" }}>
            <div style={{ transform: `translateY(${slowPan}px)` }}>
              {/* ── HEADER (Navbar) - matches storefront Navbar.tsx scrolled state ── */}
              <header style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", padding: `0 ${CONTAINER_PX}px`, maxWidth: CONTAINER_MAX, margin: "0 auto", borderBottom: "1px solid rgba(0,0,0,0.05)", background: "rgba(255,255,255,0.9)" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontFamily: f, fontSize: 15, fontWeight: 600, color: "#111", letterSpacing: "-0.02em" }}>Young Tech Pioneers</span>
                  <span style={{ fontFamily: f, fontSize: 11, color: "#60636b", marginLeft: 6, fontWeight: 400 }}>Marketplace</span>
                </div>
                <nav style={{ display: "flex", alignItems: "center", gap: 40 }}>
                  {NAV_LINKS.map((link) => (
                    <span key={link.href} style={{ fontFamily: f, fontSize: 13, fontWeight: 300, color: "rgba(17,17,17,0.8)" }}>{link.label}</span>
                  ))}
                </nav>
                <div style={{ display: "flex", alignItems: "center", gap: 16, borderLeft: "1px solid rgba(0,0,0,0.1)", paddingLeft: 20 }}>
                  <div style={{ width: 180, height: 28, borderRadius: 8, background: "#f5f5f5", display: "flex", alignItems: "center", padding: "0 10px" }}>
                    <span style={{ fontFamily: f, fontSize: 11, color: "#999" }}>Search...</span>
                  </div>
                  <div style={{ height: 32, padding: "0 18px", borderRadius: 16, background: "#111", display: "flex", alignItems: "center" }}>
                    <span style={{ fontFamily: f, fontSize: 11, color: "#fff", fontWeight: 300, letterSpacing: "0.02em" }}>Browse businesses</span>
                  </div>
                </div>
              </header>

              {/* ── YTPHeroSection - exact copy from page + YTPHeroSection.tsx ── */}
              <section style={{ position: "relative", overflow: "hidden", background: "#f7f4ee" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,122,70,0.06) 0%, transparent 50%), linear-gradient(to left, rgba(0,0,0,0.04) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.038) 1px, transparent 1px)", backgroundSize: "56px 56px", opacity: 0.08 }} />
                <div style={{ maxWidth: 1024, margin: "0 auto", padding: "48px 32px 56px", textAlign: "center" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
                    <span style={{ width: 24, height: 1, background: "rgba(15,122,70,0.4)" }} />
                    <span style={{ fontFamily: f, fontSize: 10, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(17,17,17,0.65)" }}>Young founders. Real products.</span>
                    <span style={{ width: 24, height: 1, background: "rgba(15,122,70,0.4)" }} />
                  </div>
                  <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px 16px" }}>
                      {["Young", "Tech", "Pioneers"].map((word) => (
                        <span key={word} style={{ fontFamily: f, fontSize: 56, fontWeight: 300, lineHeight: 0.86, letterSpacing: "-0.035em", color: "#111111" }}>{word}</span>
                      ))}
                    </div>
                    <span style={{ display: "block", marginTop: 8, fontFamily: fs, fontStyle: "italic", fontSize: 72, lineHeight: 0.76, letterSpacing: "-0.02em", color: "#0f7a46" }}>Marketplace</span>
                  </h1>
                  <p style={{ marginTop: 28, maxWidth: 576, marginLeft: "auto", marginRight: "auto", fontFamily: f, fontSize: 16, fontWeight: 300, lineHeight: 1.6, color: "#5f646b" }}>
                    Support youth-led brands, discover standout products, and check out with confidence.
                  </p>
                  <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
                    <div style={{ minHeight: 48, padding: "0 32px", borderRadius: 24, background: "#111111", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 35px -18px rgba(0,0,0,0.65)" }}>
                      <span style={{ fontFamily: f, fontSize: 13, fontWeight: 500, color: "#fff", letterSpacing: "0.02em" }}>Start Shopping</span>
                    </div>
                    <div style={{ minHeight: 48, padding: "0 32px", borderRadius: 24, border: "1px solid rgba(0,0,0,0.2)", background: "rgba(255,255,255,0.7)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: f, fontSize: 13, fontWeight: 500, color: "#111111", letterSpacing: "0.02em" }}>Meet the Founders</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Quick categories - page.tsx quickCategories ── */}
              <section style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: "#ffffff", padding: "16px 0 20px" }}>
                <div style={{ maxWidth: CONTAINER_MAX, margin: "0 auto", padding: `0 ${CONTAINER_PX}px` }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
                    {QUICK_CATEGORIES.map((cat) => (
                      <div key={cat.name} style={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.1)", background: "#f6f6f4", padding: "14px 12px" }}>
                        <p style={{ fontFamily: f, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#60636b" }}>Category</p>
                        <p style={{ marginTop: 6, fontFamily: f, fontSize: 13, fontWeight: 500, color: "#111111" }}>{cat.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── New Arrivals - exact from page.tsx ── */}
              <section style={{ position: "relative", padding: "40px 0 48px", borderTop: "1px solid rgba(0,0,0,0.05)", background: "#fafafa" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 100% 0%, rgba(0,166,81,0.03), transparent 50%)", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 1, maxWidth: CONTAINER_MAX, margin: "0 auto", padding: `0 ${CONTAINER_PX}px` }}>
                  <div style={{ marginBottom: 28, display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "flex-end" }}>
                    <div>
                      <p style={{ marginBottom: 16, fontFamily: f, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00A651" }}>New this week</p>
                      <h2 style={{ fontFamily: f, fontSize: 36, fontWeight: 400, color: "#111111", lineHeight: 1.2 }}>New <span style={{ fontStyle: "italic", color: "rgba(17,17,17,0.8)" }}>Arrivals</span></h2>
                      <p style={{ marginTop: 16, maxWidth: 560, fontFamily: f, fontSize: 14, fontWeight: 300, color: "#60636b", lineHeight: 1.5 }}>Latest drops from makers building the next generation of products.</p>
                    </div>
                    <div style={{ minHeight: 48, padding: "0 32px", borderRadius: 24, border: "1px solid rgba(0,0,0,0.1)", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
                      <span style={{ fontFamily: f, fontSize: 13, fontWeight: 500, color: "#111111" }}>Shop all</span>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                    {MOCK_PRODUCTS.slice(0, 4).map((product, i) => (
                      <div key={i} style={{ display: "flex", flexDirection: "column", overflow: "hidden", borderRadius: 16, border: "1px solid rgba(0,0,0,0.1)", background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
                        <div style={{ position: "relative", height: 260, overflow: "hidden", background: "#fff" }}>
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: product.color }}>
                            <div style={{ width: 80, height: 80, borderRadius: 12, background: "rgba(255,255,255,0.6)", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }} />
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", padding: 20, flex: 1 }}>
                          <h3 style={{ fontFamily: f, fontSize: 14, fontWeight: 600, lineHeight: 1.35, color: "#1a1a1a", marginBottom: 8 }}>{product.name}</h3>
                          <div style={{ fontFamily: f, fontSize: 11, color: "#6b7280" }}>by {product.seller}</div>
                          <div style={{ marginTop: "auto", paddingTop: 20 }}>
                            <div style={{ marginBottom: 12 }}>
                              <span style={{ fontFamily: f, fontSize: 18, fontWeight: 500, fontVariantNumeric: "tabular-nums", color: "#1a1a1a" }}>{product.price}</span>
                            </div>
                            <div style={{ width: "100%", minHeight: 44, borderRadius: 22, padding: "12px 16px", background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
                              <span style={{ fontFamily: f, fontSize: 11, fontWeight: 500, color: "#fff" }}>Add to Cart</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Featured Businesses - exact from page.tsx ── */}
              <section style={{ position: "relative", padding: "40px 0 48px" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 0% 0%, rgba(64,224,208,0.03), transparent 50%)", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 1, maxWidth: CONTAINER_MAX, margin: "0 auto", padding: `0 ${CONTAINER_PX}px` }}>
                  <div style={{ marginBottom: 28, display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "flex-end" }}>
                    <div>
                      <p style={{ marginBottom: 16, fontFamily: f, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00A651" }}>Founder spotlight</p>
                      <h2 style={{ fontFamily: f, fontSize: 36, fontWeight: 400, color: "#111111" }}>Featured <span style={{ fontStyle: "italic", color: "rgba(17,17,17,0.8)" }}>Businesses</span></h2>
                      <p style={{ marginTop: 16, maxWidth: 560, fontFamily: f, fontSize: 14, fontWeight: 300, color: "#60636b", lineHeight: 1.5 }}>Independent student-run brands with real products and real momentum.</p>
                    </div>
                    <div style={{ minHeight: 48, padding: "0 32px", borderRadius: 24, border: "1px solid rgba(0,0,0,0.1)", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
                      <span style={{ fontFamily: f, fontSize: 13, fontWeight: 500, color: "#111111" }}>View all businesses</span>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                    {SELLERS_MOCK.map((seller, i) => (
                      <div key={seller.name} style={{ display: "block", borderRadius: 16, border: "1px solid rgba(0,0,0,0.1)", background: "#fff", padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                          <div style={{ width: 44, height: 44, borderRadius: 22, flexShrink: 0, overflow: "hidden", border: "1px solid rgba(0,0,0,0.1)", background: `hsl(${160 + i * 25}, 25%, 90%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ fontFamily: f, fontSize: 16, fontWeight: 600, color: "#555" }}>{seller.name[0]}</span>
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <h3 style={{ fontFamily: f, fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>{seller.name}</h3>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                              <span style={{ fontFamily: f, fontSize: 10, color: "#f59e0b" }}>★★★★★</span>
                              <span style={{ fontFamily: f, fontSize: 10, fontVariantNumeric: "tabular-nums", color: "#6b7280" }}>({seller.reviewCount})</span>
                            </div>
                          </div>
                        </div>
                        <p style={{ height: 40, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", fontFamily: f, fontSize: 12, lineHeight: 1.5, color: "#6b7280" }}>{seller.description}</p>
                        <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ fontFamily: f, fontSize: 11, fontWeight: 500, color: "#1a1a1a", letterSpacing: "0.05em" }}>Visit Store</span>
                          <span style={{ fontSize: 12, color: "#9ca3af" }}>→</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── How It Works - HowItWorksSteps.tsx + page ── */}
              <section style={{ padding: "40px 0 48px", borderTop: "1px solid rgba(0,0,0,0.05)", background: "#ffffff" }}>
                <div style={{ maxWidth: CONTAINER_MAX, margin: "0 auto", padding: `0 ${CONTAINER_PX}px` }}>
                  <div style={{ marginBottom: 28, textAlign: "center" }}>
                    <p style={{ marginBottom: 16, fontFamily: f, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00A651" }}>Elegant simplicity</p>
                    <h2 style={{ fontFamily: f, fontSize: 36, fontWeight: 400, color: "#111111" }}>How It <span style={{ fontStyle: "italic", color: "rgba(17,17,17,0.8)" }}>Works</span></h2>
                    <p style={{ marginTop: 16, maxWidth: 560, marginLeft: "auto", marginRight: "auto", fontFamily: f, fontSize: 14, fontWeight: 300, color: "#60636b", lineHeight: 1.5 }}>A frictionless path from discovery to checkout, designed for trust.</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                    {HOW_STEPS.map((step, idx) => (
                      <div key={step.number} style={{ borderRadius: 16, border: "1px solid rgba(0,0,0,0.1)", padding: 32, background: idx === 0 ? "#fff" : idx === 1 ? "#f9f9f7" : "#f5f5f2" }}>
                        <div style={{ width: 56, height: 56, marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 28, border: "1px solid rgba(0,0,0,0.1)", background: "#fff" }}>
                          <span style={{ fontSize: 20, color: "#111" }}>{step.number === 1 ? "◆" : step.number === 2 ? "◇" : "▲"}</span>
                        </div>
                        <span style={{ display: "inline-block", marginBottom: 16, padding: "4px 12px", borderRadius: 20, border: "1px solid rgba(0,166,81,0.25)", background: "rgba(0,166,81,0.1)", fontFamily: f, fontSize: 10, fontWeight: 500, color: "#00A651", letterSpacing: "0.08em" }}>Step 0{step.number}</span>
                        <h3 style={{ marginBottom: 12, marginTop: 8, fontFamily: f, fontSize: 18, fontWeight: 500, color: "#111111" }}>{step.title}</h3>
                        <p style={{ fontFamily: f, fontSize: 12, lineHeight: 1.5, color: "#60636b" }}>{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Why Shop With Us - TrustBadgesRow.tsx + page ── */}
              <section style={{ padding: "40px 0 48px", background: "#fafafa", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                <div style={{ maxWidth: CONTAINER_MAX, margin: "0 auto", padding: `0 ${CONTAINER_PX}px` }}>
                  <div style={{ marginBottom: 28, textAlign: "center" }}>
                    <p style={{ marginBottom: 16, fontFamily: f, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00A651" }}>Trust architecture</p>
                    <h2 style={{ fontFamily: f, fontSize: 36, fontWeight: 400, color: "#111111" }}>Why Shop With <span style={{ fontStyle: "italic", color: "rgba(17,17,17,0.8)" }}>Us</span></h2>
                    <p style={{ marginTop: 16, maxWidth: 560, marginLeft: "auto", marginRight: "auto", fontFamily: f, fontSize: 14, fontWeight: 300, color: "#60636b", lineHeight: 1.5 }}>Premium standards, transparent fulfillment, and genuine youth-led impact.</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                    {TRUST_BADGES.map((badge, idx) => (
                      <div key={badge.title} style={{ display: "flex", alignItems: "center", gap: 16, borderRadius: 16, border: "1px solid rgba(0,0,0,0.1)", padding: 24, background: idx === 0 ? "#fff" : idx === 1 ? "#f9f9f7" : "#f5f5f2" }}>
                        <div style={{ width: 56, height: 56, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 28, border: "1px solid rgba(0,0,0,0.1)", background: "#fff" }}>
                          <span style={{ fontSize: 18, color: "#111" }}>●</span>
                        </div>
                        <div>
                          <h3 style={{ marginBottom: 4, fontFamily: f, fontSize: 14, fontWeight: 500, color: "#111111" }}>{badge.title}</h3>
                          <p style={{ fontFamily: f, fontSize: 12, color: "#60636b", lineHeight: 1.4 }}>{badge.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── CTA Section - exact from page.tsx ── */}
              <section style={{ position: "relative", padding: "48px 0 64px", overflow: "hidden", borderTop: "1px solid rgba(0,0,0,0.05)", background: "#ffffff" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,166,81,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 1, maxWidth: 896, margin: "0 auto", padding: "0 16px", textAlign: "center" }}>
                  <h2 style={{ fontFamily: f, fontSize: 48, fontWeight: 400, lineHeight: 1, color: "#111111" }}>Ready to <span style={{ fontFamily: fs, fontStyle: "italic", color: "#00A651" }}>launch?</span></h2>
                  <div style={{ marginTop: 48, marginBottom: 48, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
                    {["Verified Products", "Student Sellers", "Non-Profit Mission"].map((t) => (
                      <div key={t} style={{ padding: "10px 24px", borderRadius: 20, border: "1px solid rgba(0,0,0,0.05)", background: "#f5f5f5", fontFamily: f, fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(17,17,17,0.7)" }}>{t}</div>
                    ))}
                  </div>
                  <p style={{ marginBottom: 56, maxWidth: 560, marginLeft: "auto", marginRight: "auto", fontFamily: f, fontSize: 18, fontWeight: 300, color: "#60636b", lineHeight: 1.5 }}>Support the next generation of business leaders and innovators.</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
                    <div style={{ minHeight: 48, padding: "0 40px", borderRadius: 24, background: "#111111", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}>
                      <span style={{ fontFamily: f, fontSize: 14, fontWeight: 500, color: "#fff" }}>Explore Businesses</span>
                    </div>
                    <div style={{ minHeight: 48, padding: "0 40px", borderRadius: 24, border: "1px solid #00A651", background: "#00A651", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 30px rgba(0,166,81,0.2)" }}>
                      <span style={{ fontFamily: f, fontSize: 14, fontWeight: 500, color: "#fff" }}>Browse Products</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", left: "50%", top: "calc(50% + 440px)", width: 1380, height: 160, marginLeft: -690, background: "linear-gradient(180deg, rgba(0,0,0,0.02), transparent)", opacity: 0.06, filter: "blur(4px)", transform: "scaleY(-1)" }} />

      {/* ── CINEMATIC TITLE ── */}
      {(() => {
        const titleOpacity = interpolate(frame, [fps * 0.2, fps * 0.6], [0, 1], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const titleY = interpolate(frame, [fps * 0.2, fps * 0.6], [20, 0], { easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const titleBlur = interpolate(frame, [fps * 0.2, fps * 0.5], [10, 0], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });

        return (
          <div style={{
            position: "absolute",
            bottom: 60,
            left: 0,
            right: 0,
            textAlign: "center",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            filter: `blur(${titleBlur}px)`,
            pointerEvents: "none",
            padding: "0 40px",
          }}>
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>
              <span style={{ fontFamily: f, fontSize: 52, fontWeight: 300, color: C.textDark, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                {DEMO_TITLES.storefront.text}
                <span style={{ fontFamily: fs, fontStyle: "italic", color: C.greenBright }}>
                  {DEMO_TITLES.storefront.italic}
                </span>
              </span>
            </div>
          </div>
        );
      })()}
    </AbsoluteFill>
  );
};
