import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "./constants";
import { smooth, dramatic } from "./ease";

export const SceneFastBrand: React.FC<{
  fontFamily?: string;
  fontFamilySerif?: string;
}> = ({ fontFamily, fontFamilySerif }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const eyebrowOpacity = interpolate(frame, [0, fps * 0.4], [0, 0.8], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const eyebrowY = interpolate(frame, [0, fps * 0.5], [12, 0], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleOpacity = interpolate(frame, [fps * 0.15, fps * 0.6], [0, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [fps * 0.15, fps * 0.7], [30, 0], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleSpacing = interpolate(frame, [fps * 0.15, fps * 1], [-0.06, -0.035], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const marketplaceOpacity = interpolate(frame, [fps * 0.3, fps * 0.8], [0, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const marketplaceY = interpolate(frame, [fps * 0.3, fps * 0.9], [24, 0], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lineWidth = interpolate(frame, [fps * 0.5, fps * 1.0], [0, 80], {
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
          background: `radial-gradient(ellipse 70% 45% at 50% 50%, rgba(0,166,81,0.06), transparent 55%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          opacity: 0.4,
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
          gap: 0,
        }}
      >
        <span
          style={{
            fontFamily: fontFamily ?? "system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: C.textMutedDark,
            opacity: eyebrowOpacity,
            transform: `translateY(${eyebrowY}px)`,
            marginBottom: 24,
          }}
        >
          Introducing
        </span>
        <span
          style={{
            fontFamily: fontFamily ?? "system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 82,
            lineHeight: 1,
            letterSpacing: `${titleSpacing}em`,
            color: C.textDark,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Young Tech Pioneers
        </span>
        <span
          style={{
            fontFamily: fontFamilySerif ?? "Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 100,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: C.greenBright,
            opacity: marketplaceOpacity,
            transform: `translateY(${marketplaceY}px)`,
            marginTop: 4,
            textShadow: `0 0 56px ${C.greenGlow}`,
          }}
        >
          Marketplace
        </span>
        <div
          style={{
            width: lineWidth,
            height: 1,
            marginTop: 32,
            background: `linear-gradient(90deg, transparent, ${C.greenBright}50, transparent)`,
            opacity: lineWidth > 0 ? 0.9 : 0,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
