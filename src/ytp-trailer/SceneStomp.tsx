import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "./constants";
import { fast } from "./ease";

interface Props {
  text: string;
  fontFamily?: string;
  color?: string;
  scaleStart?: number;
}

export const SceneStomp: React.FC<Props> = ({ text, fontFamily, color = C.white, scaleStart = 2 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Aggressive scale down
  const scale = interpolate(frame, [0, fps * 0.3], [scaleStart, 1], {
    easing: fast,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fast fade in
  const opacity = interpolate(frame, [0, fps * 0.1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtle continuous push in after the stomp
  const continuousScale = interpolate(frame, [fps * 0.3, fps * 2], [1, 1.05], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: C.black }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 10%",
        }}
      >
        <span
          style={{
            fontFamily: fontFamily ?? "system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 140,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            color: color,
            opacity,
            transform: `scale(${scale * continuousScale})`,
            textAlign: "center",
          }}
        >
          {text}
        </span>
      </div>
    </AbsoluteFill>
  );
};
