#!/bin/bash
# Run from: YoungTechPioneersMarketplace/advertising/promo-video
# Pushes this folder as its own repo to https://github.com/torux-bughunter/ytp-promo-video

set -e
cd "$(dirname "$0")"

# If no .git here, init and set up remote
if [ ! -d .git ]; then
  git init
  git add -A
  git commit -m "YTP promo video: Prada Dem audio, 122 BPM sync, Remotion trailer"
  git branch -M main
  git remote add origin https://github.com/torux-bughunter/ytp-promo-video.git
  git push -u origin main --force
else
  git add -A
  git diff --cached --quiet && echo "Nothing to commit." || git commit -m "YTP promo video: latest changes"
  git push origin main
fi

echo "Done. Check https://github.com/torux-bughunter/ytp-promo-video"
