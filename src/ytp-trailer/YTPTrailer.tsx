import React from "react";
import { Series } from "remotion";
import { loadFont } from "@remotion/google-fonts/DMSans";
import { loadFont as loadPlayfair } from "@remotion/google-fonts/PlayfairDisplay";

import { SCRIPT } from "./constants";
import { SceneFastText } from "./SceneFastText";
import { SceneFastBrand } from "./SceneFastBrand";
import { SceneStorefrontMockup } from "./SceneStorefront";
import { SceneProductCards } from "./SceneProductCards";
import { SceneSellerDashboard } from "./SceneDashboard";
import { ScenePhoneMockup } from "./ScenePhone";
import { SceneEndCard } from "./SceneEnd";

const { fontFamily: sans } = loadFont("normal", {
  weights: ["200", "300", "400", "500", "800", "900"],
  subsets: ["latin"],
});
const { fontFamily: serif } = loadPlayfair("italic", {
  weights: ["400"],
  subsets: ["latin"],
});

export const YTPTrailer: React.FC = () => {
  return (
    <Series>
      {SCRIPT.map((scene, index) => {
        if (scene.type === "text") {
          return (
            <Series.Sequence key={index} durationInFrames={scene.frames}>
              <SceneFastText
                text={scene.text}
                fontFamily={sans}
                fontFamilySerif={serif}
                bg={"bg" in scene ? (scene.bg as string) : undefined}
              />
            </Series.Sequence>
          );
        }
        if (scene.type === "brand") {
          return (
            <Series.Sequence key={index} durationInFrames={scene.frames}>
              <SceneFastBrand fontFamily={sans} fontFamilySerif={serif} />
            </Series.Sequence>
          );
        }
        if (scene.type === "mockup_storefront") {
          return (
            <Series.Sequence key={index} durationInFrames={scene.frames}>
              <SceneStorefrontMockup fontFamily={sans} fontFamilySerif={serif} />
            </Series.Sequence>
          );
        }
        if (scene.type === "mockup_products") {
          return (
            <Series.Sequence key={index} durationInFrames={scene.frames}>
              <SceneProductCards fontFamily={sans} fontFamilySerif={serif} />
            </Series.Sequence>
          );
        }
        if (scene.type === "mockup_dashboard") {
          return (
            <Series.Sequence key={index} durationInFrames={scene.frames}>
              <SceneSellerDashboard fontFamily={sans} />
            </Series.Sequence>
          );
        }
        if (scene.type === "mockup_phone") {
          return (
            <Series.Sequence key={index} durationInFrames={scene.frames}>
              <ScenePhoneMockup fontFamily={sans} fontFamilySerif={serif} />
            </Series.Sequence>
          );
        }
        if (scene.type === "end") {
          return (
            <Series.Sequence key={index} durationInFrames={scene.frames}>
              <SceneEndCard fontFamily={sans} fontFamilySerif={serif} />
            </Series.Sequence>
          );
        }
        return null;
      })}
    </Series>
  );
};

export const YTP_TRAILER_DURATION_IN_FRAMES = SCRIPT.reduce(
  (acc, scene) => acc + scene.frames,
  0
);
