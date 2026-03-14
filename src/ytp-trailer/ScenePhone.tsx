import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { C, MOCK_PRODUCTS, DEMO_TITLES } from "./constants";
import { smooth, dramatic } from "./ease";

export const ScenePhoneMockup: React.FC<{
  fontFamily?: string;
  fontFamilySerif?: string;
}> = ({ fontFamily, fontFamilySerif }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = fontFamily ?? "system-ui, sans-serif";
  const fs = fontFamilySerif ?? "Georgia, serif";

  const phoneOpacity = interpolate(frame, [0, fps * 0.5], [0, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const phoneScale = interpolate(frame, [0, fps * 0.8], [1.0, 1.22], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const phoneY = interpolate(frame, [0, fps * 0.8], [20, 5], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rotY = interpolate(frame, [0, fps * 1.0], [-18, 5], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rotX = interpolate(frame, [0, fps * 1.0], [12, 2], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const contentScroll = interpolate(frame, [fps * 0.5, fps * 2.5], [0, -260], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const t = frame / fps;
  const floatY = Math.sin(t * 0.8) * 6;
  const floatX = Math.cos(t * 0.5) * 3;

  const glowIntensity = interpolate(frame, [0, fps * 0.8], [0, 0.18], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: C.luxuryBg }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.4,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "52%",
          width: 500,
          height: 700,
          marginLeft: -250,
          marginTop: -350,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, rgba(0,166,81,0.06), transparent 55%)`,
          opacity: 0.8 + glowIntensity * 0.4,
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: 1800,
          transform: `translateY(4px)`,
        }}
      >
        {/* 3D Phone Container */}
        <div
          style={{
            opacity: phoneOpacity,
            transform: `translateY(${phoneY + floatY}px) translateX(${floatX + 320}px) scale(${phoneScale}) rotateY(${rotY}deg) rotateX(${rotX}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* iPhone outer frame - titanium edge */}
          <div
            style={{
              width: 390,
              height: 844,
              borderRadius: 52,
              position: "relative",
              transformStyle: "preserve-3d",
              background: "linear-gradient(135deg, #2a2a2e 0%, #1a1a1e 30%, #0e0e10 70%, #1c1c20 100%)",
              boxShadow: `
                0 60px 160px rgba(0,0,0,0.6),
                0 20px 60px rgba(0,0,0,0.4),
                inset 0 1px 0 rgba(255,255,255,0.08),
                inset 0 -1px 0 rgba(0,0,0,0.3),
                -4px 0 20px rgba(0,0,0,0.3),
                4px 0 20px rgba(0,0,0,0.3)
              `,
            }}
          >
            {/* Side highlight - left edge reflection */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 80,
                bottom: 80,
                width: 2,
                borderRadius: 1,
                background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.15), rgba(255,255,255,0.08), transparent)",
              }}
            />
            {/* Side highlight - right edge reflection */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 120,
                bottom: 120,
                width: 1,
                borderRadius: 1,
                background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.06), transparent)",
              }}
            />

            {/* Volume buttons - left side */}
            <div
              style={{
                position: "absolute",
                left: -2,
                top: 160,
                width: 3,
                height: 28,
                borderRadius: 1,
                background: "linear-gradient(180deg, #333, #222)",
                boxShadow: "-1px 0 3px rgba(0,0,0,0.4)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: -2,
                top: 200,
                width: 3,
                height: 28,
                borderRadius: 1,
                background: "linear-gradient(180deg, #333, #222)",
                boxShadow: "-1px 0 3px rgba(0,0,0,0.4)",
              }}
            />

            {/* Power button - right side */}
            <div
              style={{
                position: "absolute",
                right: -2,
                top: 180,
                width: 3,
                height: 48,
                borderRadius: 1,
                background: "linear-gradient(180deg, #333, #222)",
                boxShadow: "1px 0 3px rgba(0,0,0,0.4)",
              }}
            />

            {/* Inner bezel */}
            <div
              style={{
                position: "absolute",
                top: 4,
                left: 4,
                right: 4,
                bottom: 4,
                borderRadius: 48,
                background: "#000",
                overflow: "hidden",
              }}
            >
              {/* Screen */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 48,
                  overflow: "hidden",
                  background: "#f7f4ee",
                  position: "relative",
                }}
              >
                {/* Dynamic Island */}
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    left: "50%",
                    marginLeft: -60,
                    width: 120,
                    height: 34,
                    borderRadius: 20,
                    background: "#000",
                    zIndex: 10,
                  }}
                />

                {/* Status bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 54,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    padding: "0 28px 6px",
                    zIndex: 5,
                  }}
                >
                  <span style={{ fontFamily: f, fontSize: 13, fontWeight: 600, color: "#111" }}>9:41</span>
                  <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                    <div style={{ width: 14, height: 10, border: "1.5px solid #111", borderRadius: 2, position: "relative" }}>
                      <div style={{ position: "absolute", top: 1, left: 1, bottom: 1, right: 3, background: "#111", borderRadius: 0.5 }} />
                    </div>
                  </div>
                </div>

                {/* Scrollable content */}
                <div style={{ marginTop: 54, transform: `translateY(${contentScroll}px)` }}>
                  {/* Mobile hero */}
                  <div style={{ padding: "16px 24px 20px", textAlign: "center", background: "#f7f4ee" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 10 }}>
                      <div style={{ height: 0.5, width: 16, background: "rgba(15,122,70,0.3)" }} />
                      <span style={{ fontFamily: f, fontSize: 7, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(17,17,17,0.5)" }}>
                        Young founders. Real products.
                      </span>
                      <div style={{ height: 0.5, width: 16, background: "rgba(15,122,70,0.3)" }} />
                    </div>
                    <div style={{ fontFamily: f, fontSize: 28, fontWeight: 300, color: "#111", lineHeight: 0.9, letterSpacing: "-0.03em" }}>
                      Young Tech Pioneers
                    </div>
                    <div style={{ fontFamily: fs, fontStyle: "italic", fontSize: 36, color: "#0f7a46", lineHeight: 0.85, marginTop: 2 }}>
                      Marketplace
                    </div>
                    <p style={{ fontFamily: f, fontSize: 10, fontWeight: 300, color: "#5f646b", marginTop: 10, lineHeight: 1.5 }}>
                      Support youth-led brands and discover standout products.
                    </p>
                    <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 14 }}>
                      <div style={{ height: 32, padding: "0 18px", borderRadius: 16, background: "#111", display: "flex", alignItems: "center" }}>
                        <span style={{ fontFamily: f, fontSize: 10, fontWeight: 500, color: "#fff" }}>Start Shopping</span>
                      </div>
                      <div style={{ height: 32, padding: "0 18px", borderRadius: 16, border: "1px solid rgba(0,0,0,0.15)", display: "flex", alignItems: "center" }}>
                        <span style={{ fontFamily: f, fontSize: 10, fontWeight: 500, color: "#111" }}>Sell with YTP</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile search */}
                  <div style={{ padding: "0 20px 12px" }}>
                    <div
                      style={{
                        height: 36,
                        borderRadius: 10,
                        background: "rgba(0,0,0,0.03)",
                        border: "1px solid rgba(0,0,0,0.06)",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 12px",
                        gap: 6,
                      }}
                    >
                      <div style={{ width: 12, height: 12, borderRadius: "50%", border: "1px solid #bbb" }} />
                      <span style={{ fontFamily: f, fontSize: 11, color: "#aaa" }}>Search products...</span>
                    </div>
                  </div>

                  {/* Mobile categories */}
                  <div style={{ padding: "0 20px 14px" }}>
                    <div style={{ display: "flex", gap: 8, overflowX: "hidden" }}>
                      {["Electronics", "Handmade", "Fashion", "Food"].map((cat) => (
                        <div
                          key={cat}
                          style={{
                            height: 30,
                            padding: "0 12px",
                            borderRadius: 8,
                            border: "1px solid rgba(0,0,0,0.08)",
                            background: "#f6f6f4",
                            display: "flex",
                            alignItems: "center",
                            flexShrink: 0,
                          }}
                        >
                          <span style={{ fontFamily: f, fontSize: 10, fontWeight: 500, color: "#111" }}>{cat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile section header */}
                  <div style={{ padding: "8px 20px 10px" }}>
                    <div style={{ fontFamily: f, fontSize: 8, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.greenBright, marginBottom: 4 }}>
                      New this week
                    </div>
                    <div style={{ fontFamily: f, fontSize: 18, fontWeight: 400, color: "#111" }}>
                      New <span style={{ fontFamily: fs, fontStyle: "italic", color: "rgba(17,17,17,0.8)" }}>Arrivals</span>
                    </div>
                  </div>

                  {/* Mobile product list */}
                  <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {MOCK_PRODUCTS.slice(0, 4).map((p, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: 12,
                          padding: 10,
                          borderRadius: 14,
                          background: "#fff",
                          border: "1px solid rgba(0,0,0,0.06)",
                          boxShadow: "0 1px 6px rgba(0,0,0,0.02)",
                        }}
                      >
                        <div
                          style={{
                            width: 68,
                            height: 68,
                            borderRadius: 10,
                            background: p.color,
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(255,255,255,0.5)" }} />
                        </div>
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                          <span style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.3 }}>{p.name}</span>
                          <span style={{ fontFamily: f, fontSize: 9, color: "#6b7280", marginTop: 2 }}>by {p.seller}</span>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
                            <span style={{ fontFamily: f, fontSize: 13, fontWeight: 500, color: "#1a1a1a", fontVariantNumeric: "tabular-nums" }}>{p.price}</span>
                            <div style={{ height: 24, padding: "0 10px", borderRadius: 12, background: "#1a1a1a", display: "flex", alignItems: "center" }}>
                              <span style={{ fontFamily: f, fontSize: 8, color: "#fff", fontWeight: 500 }}>Add to Cart</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile featured businesses */}
                  <div style={{ padding: "18px 20px 8px" }}>
                    <div style={{ fontFamily: f, fontSize: 8, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.greenBright, marginBottom: 4 }}>
                      Founder spotlight
                    </div>
                    <div style={{ fontFamily: f, fontSize: 18, fontWeight: 400, color: "#111" }}>
                      Featured <span style={{ fontFamily: fs, fontStyle: "italic", color: "rgba(17,17,17,0.8)" }}>Businesses</span>
                    </div>
                  </div>
                  <div style={{ padding: "0 20px 30px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {["Lumiere Co.", "CaseLab", "BrewCraft", "TechNest"].map((name, i) => (
                      <div
                        key={name}
                        style={{
                          borderRadius: 12,
                          border: "1px solid rgba(0,0,0,0.06)",
                          background: "#fafafa",
                          padding: "14px 10px",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 16,
                            background: `hsl(${150 + i * 25}, 25%, 88%)`,
                            margin: "0 auto 6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span style={{ fontFamily: f, fontSize: 12, fontWeight: 600, color: "#555" }}>{name[0]}</span>
                        </div>
                        <div style={{ fontFamily: f, fontSize: 10, fontWeight: 600, color: "#1a1a1a" }}>{name}</div>
                        <div style={{ fontFamily: f, fontSize: 8, color: "#999", marginTop: 2 }}>{8 + i * 3} products</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Home indicator */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 8,
                    left: "50%",
                    marginLeft: -54,
                    width: 108,
                    height: 4,
                    borderRadius: 2,
                    background: "#000",
                    opacity: 0.2,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ── CINEMATIC TITLE ── */}
      {(() => {
        const titleOpacity = interpolate(frame, [fps * 0.2, fps * 0.6], [0, 1], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const titleY = interpolate(frame, [fps * 0.2, fps * 0.6], [20, 0], { easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const titleBlur = interpolate(frame, [fps * 0.2, fps * 0.5], [10, 0], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });

        return (
          <div style={{
            position: "absolute",
            top: "50%",
            left: 140,
            transform: `translateY(calc(-50% + ${titleY}px))`,
            opacity: titleOpacity,
            filter: `blur(${titleBlur}px)`,
            pointerEvents: "none",
            maxWidth: 800,
          }}>
            <span style={{ fontFamily: f, fontSize: 64, fontWeight: 300, color: C.textDark, letterSpacing: "-0.02em", lineHeight: 1.25, display: "block" }}>
              {DEMO_TITLES.phone.text}
              <span style={{ fontFamily: fs, fontStyle: "italic", color: C.greenBright }}>
                {DEMO_TITLES.phone.italic}
              </span>
            </span>
          </div>
        );
      })()}
    </AbsoluteFill>
  );
};
