import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "./constants";
import { smooth, dramatic } from "./ease";

interface Props {
  text: string;
  fontFamily?: string;
}

export const SceneQuestion: React.FC<Props> = ({ text, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(" ");

  const rotateX = interpolate(frame, [0, fps * 1.2], [8, 0], {
    easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: C.black, perspective: 1400 }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 14%",
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotateX}deg)`,
        }}
      >
        <p
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0 14px",
            margin: 0,
          }}
        >
          {words.map((word, i) => {
            const start = i * 2;
            const opacity = interpolate(frame, [start, start + fps * 0.4], [0, 1], {
              easing: smooth,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const y = interpolate(frame, [start, start + fps * 0.5], [12, 0], {
              easing: dramatic,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            return (
              <span
                key={i}
                style={{
                  fontFamily: fontFamily ?? "system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: 58,
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  color: C.white,
                  opacity,
                  transform: `translateY(${y}px)`,
                  display: "inline-block",
                }}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </AbsoluteFill>
  );
};
