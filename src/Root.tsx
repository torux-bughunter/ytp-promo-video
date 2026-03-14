import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { YTPTrailer, YTP_TRAILER_DURATION_IN_FRAMES } from "./ytp-trailer/YTPTrailer";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        width={1920}
        height={1080}
        durationInFrames={30 * 5}
        fps={30}
      />
      <Composition
        id="YTPTrailer"
        component={YTPTrailer}
        width={1920}
        height={1080}
        durationInFrames={YTP_TRAILER_DURATION_IN_FRAMES}
        fps={30}
      />
    </>
  );
};
