# Trailer audio sources (licensed-safe)

## License references

- Mixkit license: https://mixkit.co/license/
- Pixabay content license: https://pixabay.com/service/license-summary/

## Recommended main music (pick 1)

- Mixkit electronic collection (good for startup/tech ads): https://mixkit.co/free-stock-music/electronic/
- Pixabay "Upbeat Technology": https://pixabay.com/music/upbeat-upbeat-technology-413665/
- Pixabay "Tech Talk": https://pixabay.com/music/upbeat-tech-talk-309888/

Save your chosen track as:

- `public/audio/ytp-main-theme.mp3`

## Recommended SFX categories

- Whoosh transitions: https://mixkit.co/free-sound-effects/whoosh/
- UI click/tap sounds: https://mixkit.co/free-sound-effects/click/
- Cash register / money cues: https://mixkit.co/free-sound-effects/cash-register/
- Extra transition SFX: https://pixabay.com/sound-effects/search/whoosh/
- Extra UI SFX: https://pixabay.com/sound-effects/search/click/
- Extra success chimes: https://pixabay.com/sound-effects/search/chime/

Save selected files as:

- `public/audio/sfx/intro-whoosh.mp3`
- `public/audio/sfx/ui-tap.mp3`
- `public/audio/sfx/transition-whoosh.mp3`
- `public/audio/sfx/success-chime.mp3`
- `public/audio/sfx/cash-register.mp3`
- `public/audio/sfx/outro-rise.mp3`

## Enable in code

In `src/ytp-trailer/YTPTrailer.tsx`, set:

- `const AUDIO_PROFILE: AudioProfile = "licensed";`

