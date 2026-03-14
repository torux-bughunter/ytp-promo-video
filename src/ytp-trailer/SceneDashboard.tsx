import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C, DASHBOARD_ROWS, DEMO_TITLES } from "./constants";
import { smooth, dramatic } from "./ease";

export const SceneSellerDashboard: React.FC<{ fontFamily?: string }> = ({
  fontFamily,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const ff = fontFamily ?? "system-ui, sans-serif";

  const panelOpacity = interpolate(frame, [0, fps * 0.4], [0, 1], {
    easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const panelY = interpolate(frame, [0, fps * 0.8], [60, 0], {
    easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const panelScale = interpolate(frame, [0, fps * 0.8], [1.1, 1.25], {
    easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  const rotateX = interpolate(frame, [0, fps * 1], [9, 0], {
    easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const rotateY = interpolate(frame, [0, fps * 0.8], [-4, 0], {
    easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ backgroundColor: C.luxuryBg, perspective: 1600 }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
        backgroundSize: "44px 44px", opacity: 0.4,
      }} />
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        width: 1100, height: 600, marginLeft: -550, marginTop: -300,
        borderRadius: "50%",
        background: `radial-gradient(ellipse, rgba(0,166,81,0.06), transparent 55%)`,
        filter: "blur(80px)",
      }} />

      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: panelOpacity,
        transformStyle: "preserve-3d",
        transform: `translateY(${panelY - 80}px) scale(${panelScale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}>
        <div style={{
          width: 1100, borderRadius: 20,
          background: C.white,
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.02)",
          overflow: "hidden",
          transform: "translateZ(0)",
        }}>
          <div style={{ display: "flex", height: 600 }}>
            <div style={{
              width: 220, borderRight: "1px solid rgba(0,0,0,0.06)",
              padding: "32px 20px", display: "flex", flexDirection: "column", gap: 8,
              background: "#fafafa",
            }}>
              <span style={{ fontFamily: ff, fontSize: 14, fontWeight: 500, color: C.textDark, marginBottom: 20 }}>Vendor Panel</span>
              {["Dashboard", "Orders", "Products", "Analytics", "Settings"].map((item, i) => {
                const isActive = i === 1;
                const itemOpacity = interpolate(frame, [fps * 0.6 + i * 3, fps * 0.9 + i * 3], [0, 1], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
                return (
                  <div key={item} style={{ padding: "10px 14px", borderRadius: 8, background: isActive ? "rgba(0,166,81,0.08)" : "transparent", opacity: itemOpacity }}>
                    <span style={{ fontFamily: ff, fontSize: 12, fontWeight: isActive ? 500 : 300, color: isActive ? C.greenBright : C.textMutedDark }}>{item}</span>
                  </div>
                );
              })}
            </div>
            <div style={{ flex: 1, padding: "32px 36px", background: C.white }}>
              <div style={{ display: "flex", gap: 20, marginBottom: 32 }}>
                {[
                  { label: "Total Revenue", value: "$2,847.50" },
                  { label: "Orders This Week", value: "23" },
                  { label: "Conversion Rate", value: "4.2%" },
                ].map((stat, i) => {
                  const sOpacity = interpolate(frame, [fps * 0.8 + i * 4, fps * 1.2 + i * 4], [0, 1], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
                  return (
                    <div key={i} style={{
                      flex: 1, padding: "20px 24px", borderRadius: 12,
                      background: "#fafafa",
                      border: "1px solid rgba(0,0,0,0.05)",
                      opacity: sOpacity,
                    }}>
                      <span style={{ fontFamily: ff, fontSize: 11, color: C.textMutedDark, display: "block", marginBottom: 6 }}>{stat.label}</span>
                      <span style={{ fontFamily: ff, fontSize: 24, fontWeight: 300, color: C.textDark, fontVariantNumeric: "tabular-nums" }}>{stat.value}</span>
                    </div>
                  );
                })}
              </div>
              <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 100px 100px", padding: "12px 20px", background: "#fafafa", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  {["Order", "Product", "Status", "Amount"].map((h) => (
                    <span key={h} style={{ fontFamily: ff, fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMutedDark }}>{h}</span>
                  ))}
                </div>
                {DASHBOARD_ROWS.map((row, i) => {
                  const rowOpacity = interpolate(frame, [fps * 1.2 + i * 4, fps * 1.5 + i * 4], [0, 1], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
                  const statusColor = row.status === "Shipped" ? C.greenBright : row.status === "Delivered" ? C.textMutedDark : "#f59e0b";
                  return (
                    <div key={i} style={{
                      display: "grid", gridTemplateColumns: "80px 1fr 100px 100px",
                      padding: "14px 20px",
                      borderBottom: i < DASHBOARD_ROWS.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
                      opacity: rowOpacity,
                    }}>
                      <span style={{ fontFamily: ff, fontSize: 12, color: C.textMutedDark, fontVariantNumeric: "tabular-nums" }}>{row.id}</span>
                      <span style={{ fontFamily: ff, fontSize: 12, color: C.textDark, fontWeight: 400 }}>{row.product}</span>
                      <span style={{ fontFamily: ff, fontSize: 11, color: statusColor, fontWeight: 500 }}>{row.status}</span>
                      <span style={{ fontFamily: ff, fontSize: 12, color: C.textDark, fontVariantNumeric: "tabular-nums" }}>{row.amount}</span>
                    </div>
                  );
                })}
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
              <span style={{ fontFamily: ff, fontSize: 52, fontWeight: 300, color: C.textDark, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                {DEMO_TITLES.dashboard.text}
                <span style={{ fontStyle: "italic", color: C.greenBright }}>
                  {DEMO_TITLES.dashboard.italic}
                </span>
              </span>
            </div>
          </div>
        );
      })()}
    </AbsoluteFill>
  );
};
