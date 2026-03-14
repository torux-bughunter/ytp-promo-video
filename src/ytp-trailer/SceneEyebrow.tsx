import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "./constants";
import { smooth, dramatic } from "./ease";

const TITLE_WORDS = ["Young", "Tech", "Pioneers"];

export const SceneBrandReveal: React.FC<{
  fontFamily?: string;
  fontFamilySerif?: string;
}> = ({ fontFamily, fontFamilySerif }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Same timing for everything — Young Tech Pioneers AND Marketplace appear together
  const opacity = interpolate(frame, [0, fps * 0.6], [0, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, fps * 0.9], [28, 0], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const letterSpacing = interpolate(frame, [0, fps * 1.8], [0.06, -0.035], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [0, fps * 2], [1.06, 1], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rotateX = interpolate(frame, [0, fps * 1.5], [14, 0], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const underlineWidth = interpolate(frame, [fps * 1.2, fps * 2.2], [0, 1], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: C.black }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${C.green}08, transparent)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: 1400,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            opacity,
            transform: `translateY(${y}px) scale(${scale}) rotateX(${rotateX}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Young Tech Pioneers — one line, same timing */}
          <div style={{ display: "flex", gap: 28 }}>
            {TITLE_WORDS.map((word) => (
              <span
                key={word}
                style={{
                  fontFamily: fontFamily ?? "system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: 130,
                  lineHeight: 1,
                  letterSpacing: `${letterSpacing}em`,
                  color: C.white,
                  display: "inline-block",
                }}
              >
                {word}
              </span>
            ))}
          </div>

          {/* Marketplace — same time as above */}
          <span
            style={{
              fontFamily: fontFamilySerif ?? "Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 150,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: C.greenBright,
              textShadow: `0 0 50px ${C.greenGlow}`,
            }}
          >
            Marketplace
          </span>

          <div
            style={{
              width: 480 * underlineWidth,
              height: 1,
              marginTop: 16,
              background: `linear-gradient(90deg, transparent, ${C.greenBright}60, transparent)`,
              opacity: underlineWidth,
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
