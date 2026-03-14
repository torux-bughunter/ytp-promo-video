import { AbsoluteFill, Sequence, staticFile, Video } from "remotion";

export const MyComposition = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Sequence from={0}>
        <Video src={staticFile("video.mp4")} />
      </Sequence>
      <Sequence from={10} durationInFrames={60}>
        <div style={{
          position: 'absolute',
          top: 50,
          left: 50,
          color: 'white',
          fontSize: 80,
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          textShadow: '0 0 10px black'
        }}>
          EDITED WITH REMOTION
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
