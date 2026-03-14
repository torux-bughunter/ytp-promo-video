import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "./constants";
import { smooth, dramatic } from "./ease";

export const SceneMarketplace: React.FC<{ fontFamily?: string }> = ({
  fontFamily,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, fps * 0.7], [0, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, fps * 1.2], [0.88, 1], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rotateY = interpolate(frame, [0, fps * 1.2], [6, 0], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const glowIntensity = interpolate(frame, [fps * 0.3, fps * 1, fps * 2.5], [0, 60, 20], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const underlineWidth = interpolate(frame, [fps * 0.8, fps * 1.8], [0, 1], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: C.black, perspective: 1200 }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          transformStyle: "preserve-3d",
        }}
      >
        <span
          style={{
            fontFamily: fontFamily ?? "Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 190,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: C.greenBright,
            opacity,
            transform: `scale(${scale}) rotateY(${rotateY}deg)`,
            transformStyle: "preserve-3d",
            textShadow: `0 0 ${glowIntensity}px ${C.greenGlow}`,
          }}
        >
          Marketplace
        </span>

        <div
          style={{
            width: 500 * underlineWidth,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${C.greenBright}60, transparent)`,
            opacity: underlineWidth,
            transform: `rotateY(${rotateY * 0.5}deg)`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
