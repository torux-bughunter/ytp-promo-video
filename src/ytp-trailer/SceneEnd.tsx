import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "./constants";
import { smooth } from "./ease";

export const SceneEndCard: React.FC<{
  fontFamily?: string;
  fontFamilySerif?: string;
}> = ({ fontFamily, fontFamilySerif }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const brandOpacity = interpolate(frame, [0, fps * 0.8], [0, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const brandScale = interpolate(frame, [0, fps * 1.2], [1.08, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const marketplaceOpacity = interpolate(frame, [fps * 0.3, fps * 1], [0, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lineWidth = interpolate(frame, [fps * 0.7, fps * 1.5], [0, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const urlOpacity = interpolate(frame, [fps * 1.2, fps * 2], [0, 0.85], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const breathe = 0.08 + 0.04 * Math.sin(interpolate(frame, [fps * 1.5, fps * 5], [0, Math.PI * 2], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));

  return (
    <AbsoluteFill style={{ backgroundColor: C.luxuryBg, perspective: 1200 }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "46%",
          width: 900,
          height: 600,
          marginLeft: -450,
          marginTop: -300,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${C.greenGlow}, transparent 60%)`,
          opacity: breathe,
          filter: "blur(90px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.35,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          transform: `scale(${brandScale})`,
        }}
      >
        <span
          style={{
            fontFamily: fontFamily ?? "system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 64,
            letterSpacing: "-0.03em",
            color: C.textDark,
            opacity: brandOpacity,
          }}
        >
          Young Tech Pioneers
        </span>
        <span
          style={{
            fontFamily: fontFamilySerif ?? "Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 86,
            letterSpacing: "-0.02em",
            color: C.greenBright,
            opacity: marketplaceOpacity,
            textShadow: `0 0 40px ${C.greenGlow}`,
          }}
        >
          Marketplace
        </span>
        <div
          style={{
            width: 100 * lineWidth,
            height: 1,
            marginTop: 28,
            background: `linear-gradient(90deg, transparent, ${C.greenBright}50, transparent)`,
            opacity: lineWidth,
          }}
        />
        <span
          style={{
            fontFamily: fontFamily ?? "system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 26,
            letterSpacing: "0.18em",
            color: C.textMutedDark,
            opacity: urlOpacity,
            marginTop: 28,
          }}
        >
          ytpmarketplace.com
        </span>
      </div>
    </AbsoluteFill>
  );
};
