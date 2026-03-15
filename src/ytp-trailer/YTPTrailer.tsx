import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/DMSans";
import { loadFont as loadPlayfair } from "@remotion/google-fonts/PlayfairDisplay";

import { FPS, SCRIPT } from "./constants";

// Legacy audio trim: start playback this many frames into the file (0 = from start, e.g. for Prada Dem).
const LEGACY_AUDIO_TRIM_BEFORE_FRAMES = 0;
import { SceneFastText } from "./SceneFastText";
import { SceneFastBrand } from "./SceneFastBrand";
import { SceneStorefrontMockup } from "./SceneStorefront";
import { SceneProductCards } from "./SceneProductCards";
import { SceneSellerDashboard } from "./SceneDashboard";
import { ScenePhoneMockup } from "./ScenePhone";
import { SceneEndCard } from "./SceneEnd";

type AudioProfile = "legacy" | "licensed";

const { fontFamily: sans } = loadFont("normal", {
  weights: ["200", "300", "400", "500", "800", "900"],
  subsets: ["latin"],
});
const { fontFamily: serif } = loadPlayfair("italic", {
  weights: ["400"],
  subsets: ["latin"],
});

const AUDIO_PROFILE = "legacy" as AudioProfile;
const LEGACY_MUSIC_AUDIO = "Prada_Dem.mp3";
const LICENSED_MUSIC_AUDIO = "audio/ytp-main-theme.mp3";

const SFX = {
  introWhoosh: "audio/sfx/intro-whoosh.mp3",
  uiTap: "audio/sfx/ui-tap.mp3",
  transitionWhoosh: "audio/sfx/transition-whoosh.mp3",
  successChime: "audio/sfx/success-chime.mp3",
  cashRegister: "audio/sfx/cash-register.mp3",
  outroRise: "audio/sfx/outro-rise.mp3",
} as const;

export const YTPTrailer: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio
        src={staticFile(AUDIO_PROFILE === "licensed" ? LICENSED_MUSIC_AUDIO : LEGACY_MUSIC_AUDIO)}
        volume={AUDIO_PROFILE === "licensed" ? 0.8 : 1}
        {...(AUDIO_PROFILE === "legacy" ? { trimBefore: LEGACY_AUDIO_TRIM_BEFORE_FRAMES } : {})}
      />
      {AUDIO_PROFILE === "licensed" ? (
        <>
          <Series.Sequence from={0} durationInFrames={20}>
            <Audio src={staticFile(SFX.introWhoosh)} volume={0.35} />
          </Series.Sequence>
          <Series.Sequence from={174} durationInFrames={20}>
            <Audio src={staticFile(SFX.transitionWhoosh)} volume={0.25} />
          </Series.Sequence>
          <Series.Sequence from={318} durationInFrames={24}>
            <Audio src={staticFile(SFX.successChime)} volume={0.24} />
          </Series.Sequence>
          <Series.Sequence from={550} durationInFrames={16}>
            <Audio src={staticFile(SFX.uiTap)} volume={0.2} />
          </Series.Sequence>
          <Series.Sequence from={606} durationInFrames={24}>
            <Audio src={staticFile(SFX.cashRegister)} volume={0.22} />
          </Series.Sequence>
          <Series.Sequence from={887} durationInFrames={20}>
            <Audio src={staticFile(SFX.transitionWhoosh)} volume={0.25} />
          </Series.Sequence>
          <Series.Sequence from={973} durationInFrames={20}>
            <Audio src={staticFile(SFX.successChime)} volume={0.26} />
          </Series.Sequence>
          <Series.Sequence from={1075} durationInFrames={75}>
            <Audio src={staticFile(SFX.outroRise)} volume={0.22} />
          </Series.Sequence>
        </>
      ) : null}
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
    </AbsoluteFill>
  );
};

export const YTP_TRAILER_DURATION_IN_FRAMES = SCRIPT.reduce(
  (acc, scene) => acc + scene.frames,
  0
);
