import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "./constants";
import { cinematic, smooth } from "./ease";

export const SceneLightLine: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lineWidth = interpolate(frame, [fps * 0.3, fps * 1.4], [0, 1], {
    easing: cinematic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const lineOpacity = interpolate(frame, [fps * 0.2, fps * 0.8], [0, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const glowOpacity = interpolate(frame, [fps * 0.6, fps * 1.6], [0, 0.35], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rotateX = interpolate(frame, [fps * 0.2, fps * 1.8], [8, 0], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: C.black, perspective: 1200 }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 600,
          height: 200,
          marginLeft: -300,
          marginTop: -100,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${C.greenGlow}, transparent 70%)`,
          opacity: glowOpacity,
          filter: "blur(50px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 400 * lineWidth,
          marginLeft: -200 * lineWidth,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${C.greenBright}, ${C.white}, ${C.greenBright}, transparent)`,
          opacity: lineOpacity,
          transform: `rotateX(${rotateX}deg)`,
          transformStyle: "preserve-3d",
        }}
      />
    </AbsoluteFill>
  );
};
