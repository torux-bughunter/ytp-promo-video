import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "./constants";
import { smooth, dramatic } from "./ease";

const LINE_1 = "A curated marketplace";
const LINE_2 = "built entirely by student founders.";

export const SceneWhatItIs: React.FC<{ fontFamily?: string }> = ({
  fontFamily,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1Opacity = interpolate(frame, [0, fps * 0.5], [0, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const line1Y = interpolate(frame, [0, fps * 0.7], [16, 0], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const line2Opacity = interpolate(frame, [fps * 0.4, fps * 0.9], [0, 1], {
    easing: smooth,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const line2Y = interpolate(frame, [fps * 0.4, fps * 1.1], [16, 0], {
    easing: dramatic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rotateX = interpolate(frame, [0, fps * 1], [7, 0], {
    easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp",
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
          gap: 6,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotateX}deg)`,
        }}
      >
        <span
          style={{
            fontFamily: fontFamily ?? "system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 42,
            lineHeight: 1.4,
            color: C.textSoft,
            opacity: line1Opacity,
            transform: `translateY(${line1Y}px)`,
          }}
        >
          {LINE_1}
        </span>
        <span
          style={{
            fontFamily: fontFamily ?? "system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 42,
            lineHeight: 1.4,
            color: C.white,
            opacity: line2Opacity,
            transform: `translateY(${line2Y}px)`,
          }}
        >
          {LINE_2}
        </span>
      </div>
    </AbsoluteFill>
  );
};
