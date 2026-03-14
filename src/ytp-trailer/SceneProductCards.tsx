import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { C, MOCK_PRODUCTS, DEMO_TITLES } from "./constants";
import { smooth, dramatic } from "./ease";

const STARS = [5, 4.5, 5, 4, 5, 4.5];

export const SceneProductCards: React.FC<{
  fontFamily?: string;
  fontFamilySerif?: string;
}> = ({ fontFamily, fontFamilySerif }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = fontFamily ?? "system-ui, sans-serif";
  const fs = fontFamilySerif ?? "Georgia, serif";


  return (
    <AbsoluteFill style={{ backgroundColor: C.luxuryBg, perspective: 1600 }}>
      {/* Subtle radial accent */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "35%",
          width: 1100,
          height: 700,
          marginLeft: -550,
          marginTop: -350,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, rgba(0,166,81,0.04), transparent 55%)`,
          filter: "blur(60px)",
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.4,
        }}
      />

      {/* Product grid — 3x2 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0px",
          transformStyle: "preserve-3d",
          transform: `translateY(-100px)`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            width: "100%",
            maxWidth: 1400,
            transformStyle: "preserve-3d",
          }}
        >
          {MOCK_PRODUCTS.map((product, i) => {
            const start = fps * 0.25 + i * fps * 0.12;

            const opacity = interpolate(frame, [start, start + fps * 0.4], [0, 1], {
              easing: smooth,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const y = interpolate(frame, [start, start + fps * 0.6], [40, 0], {
              easing: dramatic,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const cardScale = interpolate(frame, [start, start + fps * 0.5], [0.96, 1], {
              easing: dramatic,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const float = Math.sin((frame + i * 20) * 0.02) * 2;

            const starCount = STARS[i] ?? 5;
            const fullStars = Math.floor(starCount);
            const hasHalf = starCount % 1 !== 0;

            return (
              <div
                key={i}
                style={{
                  opacity,
                  transform: `translateY(${y + float}px) scale(${cardScale})`,
                }}
              >
                <div
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.07)",
                    background: "#fff",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.03), 0 8px 32px rgba(0,0,0,0.02)",
                  }}
                >
                  {/* Image area */}
                  <div
                    style={{
                      height: 200,
                      background: product.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Pattern overlay for visual texture */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `radial-gradient(circle at ${30 + i * 15}% ${40 + i * 10}%, rgba(255,255,255,0.4), transparent 50%)`,
                      }}
                    />
                    <div
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 14,
                        background: "rgba(255,255,255,0.55)",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          background: "rgba(255,255,255,0.6)",
                        }}
                      />
                    </div>

                    {/* Badges */}
                    {i === 0 && (
                      <div
                        style={{
                          position: "absolute",
                          top: 10,
                          left: 10,
                          height: 20,
                          padding: "0 8px",
                          borderRadius: 10,
                          background: C.greenBright,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontFamily: f, fontSize: 8, color: "#fff", fontWeight: 600 }}>New</span>
                      </div>
                    )}
                    {i === 3 && (
                      <div
                        style={{
                          position: "absolute",
                          top: 10,
                          left: 10,
                          height: 20,
                          padding: "0 8px",
                          borderRadius: 10,
                          background: "#111",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontFamily: f, fontSize: 8, color: "#fff", fontWeight: 600 }}>Trending</span>
                      </div>
                    )}
                    {/* Wishlist heart */}
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        width: 28,
                        height: 28,
                        borderRadius: 14,
                        background: "rgba(255,255,255,0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                      }}
                    >
                      <span style={{ fontSize: 12, lineHeight: 1 }}>♡</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "14px 16px 16px" }}>
                    <div
                      style={{
                        fontFamily: f,
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#1a1a1a",
                        lineHeight: 1.3,
                        marginBottom: 3,
                      }}
                    >
                      {product.name}
                    </div>
                    <div
                      style={{
                        fontFamily: f,
                        fontSize: 10,
                        color: "#6b7280",
                        marginBottom: 6,
                      }}
                    >
                      by{" "}
                      <span style={{ color: C.greenBright }}>{product.seller}</span>
                    </div>

                    {/* Star rating */}
                    <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                      {Array.from({ length: 5 }).map((_, si) => (
                        <span
                          key={si}
                          style={{
                            fontSize: 10,
                            color: si < fullStars ? "#f59e0b" : si === fullStars && hasHalf ? "#f59e0b" : "#ddd",
                            opacity: si < fullStars || (si === fullStars && hasHalf) ? 1 : 0.4,
                          }}
                        >
                          ★
                        </span>
                      ))}
                      <span style={{ fontFamily: f, fontSize: 9, color: "#aaa", marginLeft: 4 }}>
                        ({Math.floor(10 + i * 7)})
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: f,
                          fontSize: 15,
                          fontWeight: 600,
                          color: "#1a1a1a",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {product.price}
                      </span>
                      <div
                        style={{
                          height: 28,
                          padding: "0 14px",
                          borderRadius: 14,
                          background: "#1a1a1a",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <span style={{ fontFamily: f, fontSize: 9, color: "#fff", fontWeight: 500 }}>
                          Add to Cart
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
                {DEMO_TITLES.products.text}
                <span style={{ fontFamily: fs, fontStyle: "italic", color: C.greenBright }}>
                  {DEMO_TITLES.products.italic}
                </span>
              </span>
            </div>
          </div>
        );
      })()}
    </AbsoluteFill>
  );
};
