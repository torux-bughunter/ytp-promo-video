import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "./constants";
import { smooth, dramatic } from "./ease";

export const SceneDropDate: React.FC<{ fontFamily?: string }> = ({
  fontFamily,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const labelOpacity = interpolate(frame, [0, fps * 0.5], [0, 0.5], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dateOpacity = interpolate(frame, [fps * 0.3, fps * 0.8], [0, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dateScale = interpolate(frame, [fps * 0.3, fps * 1.2], [1.06, 1], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subOpacity = interpolate(frame, [fps * 1, fps * 1.6], [0, 0.6], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subY = interpolate(frame, [fps * 1, fps * 1.6], [10, 0], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const glowOpacity = interpolate(
    frame,
    [fps * 0.5, fps * 1.5, fps * 3],
    [0, 0.35, 0.2],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const rotateX = interpolate(frame, [0, fps * 0.8], [6, 0], {
    easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: C.black, perspective: 1300 }}>
      {/* Breathing glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 700,
          height: 400,
          marginLeft: -350,
          marginTop: -200,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${C.greenGlow}, transparent 65%)`,
          opacity: glowOpacity,
          filter: "blur(80px)",
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
          gap: 16,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotateX}deg)`,
        }}
      >
        <span
          style={{
            fontFamily: fontFamily ?? "system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: C.greenBright,
            opacity: labelOpacity,
          }}
        >
          The marketplace drops
        </span>

        <span
          style={{
            fontFamily: fontFamily ?? "system-ui, sans-serif",
            fontWeight: 200,
            fontSize: 130,
            letterSpacing: "0.04em",
            color: C.white,
            opacity: dateOpacity,
            transform: `scale(${dateScale})`,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          March 21
        </span>

        <span
          style={{
            fontFamily: fontFamily ?? "system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 22,
            letterSpacing: "0.06em",
            color: C.textSoft,
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
          }}
        >
          Be the first to shop, sell, and discover.
        </span>
      </div>
    </AbsoluteFill>
  );
};
