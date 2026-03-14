import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "./constants";
import { smooth, dramatic } from "./ease";

type BgType = "product_idea" | "store_setup" | "product_list" | "shipping" | "revenue" | "browse" | "trust";

// --- CONTEXTUAL BACKGROUND VISUALS ---

const BgProductIdea: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  // Blueprint isometric cube drawing itself
  const draw = interpolate(frame, [0, fps * 2], [0, 300], { easing: smooth, extrapolateRight: "clamp" });
  const o = interpolate(frame, [0, 20], [0, 0.12], { easing: smooth, extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, fps * 3], [0.95, 1.05], { easing: smooth });
  
  const rot = frame * 0.3;
  const floatY = Math.sin(frame * 0.05) * 15;

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: o, transform: `scale(${scale}) translateY(${floatY}px)`, zIndex: 0 }}>
      <svg width="800" height="800" viewBox="0 0 100 100" fill="none" stroke={C.textDark} strokeWidth="0.5" strokeLinejoin="round" style={{ transform: `rotate(${rot}deg)` }}>
        {/* Outer cube */}
        <path d="M50 15 L85 35 L85 75 L50 95 L15 75 L15 35 Z" strokeDasharray="300" strokeDashoffset={300 - draw} />
        <path d="M50 15 L50 55 L85 35 M50 55 L15 35 M50 55 L50 95" strokeDasharray="300" strokeDashoffset={300 - draw} />
        {/* Inner cube */}
        <path d="M50 30 L70 42 L70 66 L50 78 L30 66 L30 42 Z" strokeDasharray="300" strokeDashoffset={300 - draw} strokeWidth="0.2" />
        <path d="M50 30 L50 54 L70 42 M50 54 L30 42 M50 54 L50 78" strokeDasharray="300" strokeDashoffset={300 - draw} strokeWidth="0.2" />
        {/* Construction lines */}
        <line x1="50" y1="0" x2="50" y2="100" strokeDasharray="2 2" strokeWidth="0.1" />
        <line x1="0" y1="25" x2="100" y2="85" strokeDasharray="2 2" strokeWidth="0.1" />
        <line x1="0" y1="85" x2="100" y2="25" strokeDasharray="2 2" strokeWidth="0.1" />
      </svg>
    </div>
  );
};

const BgStoreSetup: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const draw = interpolate(frame, [0, fps * 1.2], [0, 600], { easing: smooth, extrapolateRight: "clamp" });
  const o = interpolate(frame, [0, 20], [0, 0.14], { easing: smooth, extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, fps * 3], [0.96, 1.02], { easing: smooth });

  // Launch animation
  const launchY = interpolate(frame, [fps * 1.2, fps * 2.2], [0, -800], { easing: dramatic });
  const shakeX = frame > fps * 1.0 && frame < fps * 1.5 ? Math.sin(frame * 3) * 4 : 0;
  const flameOp = interpolate(frame, [fps * 1.0, fps * 1.2], [0, 1], { extrapolateRight: "clamp" });

  // A stylized rocket launching upward — "launch it"
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: o, transform: `scale(${scale})`, zIndex: 0 }}>
      <div style={{ transform: `translateY(${launchY}px) translateX(${shakeX}px)` }}>
        <svg width="700" height="900" viewBox="0 0 70 90" fill="none" stroke={C.greenBright} strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Rocket body */}
          <path d="M35 10 C35 10 25 30 25 50 L25 65 L45 65 L45 50 C45 30 35 10 35 10Z" strokeDasharray="600" strokeDashoffset={600 - draw} />
          {/* Nose cone detail */}
          <path d="M30 38 Q35 22 40 38" strokeDasharray="600" strokeDashoffset={600 - draw} strokeWidth="0.4" />
          {/* Window */}
          <circle cx="35" cy="42" r="4" strokeDasharray="600" strokeDashoffset={600 - draw} />
          {/* Fins */}
          <path d="M25 55 L18 70 L25 65" strokeDasharray="600" strokeDashoffset={600 - draw} />
          <path d="M45 55 L52 70 L45 65" strokeDasharray="600" strokeDashoffset={600 - draw} />
          {/* Exhaust flames */}
          <path d="M30 65 L28 78 L32 72 L35 82 L38 72 L42 78 L40 65" strokeDasharray="600" strokeDashoffset={600 - draw} stroke={C.greenBright} strokeWidth="0.4" />
          {/* Animated Flames (appear before launch) */}
          <path d="M32 65 L30 85 L35 95 L40 85 L38 65" fill={C.greenBright} opacity={flameOp * (0.7 + Math.sin(frame * 2.5) * 0.3)} stroke="none" />
          {/* Smoke trail lines */}
          <line x1="33" y1="82" x2="33" y2="90" strokeDasharray="2 3" strokeDashoffset={600 - draw} strokeWidth="0.3" />
          <line x1="37" y1="82" x2="37" y2="90" strokeDasharray="2 3" strokeDashoffset={600 - draw} strokeWidth="0.3" />
          {/* Speed lines */}
          <line x1="20" y1="35" x2="10" y2="50" strokeDasharray="600" strokeDashoffset={600 - draw} strokeWidth="0.25" />
          <line x1="50" y1="35" x2="60" y2="50" strokeDasharray="600" strokeDashoffset={600 - draw} strokeWidth="0.25" />
          <line x1="18" y1="50" x2="8" y2="60" strokeDasharray="600" strokeDashoffset={600 - draw} strokeWidth="0.2" />
          <line x1="52" y1="50" x2="62" y2="60" strokeDasharray="600" strokeDashoffset={600 - draw} strokeWidth="0.2" />
        </svg>
      </div>
    </div>
  );
};

const BgProductList: React.FC<{ frame: number; fps: number; f: string }> = ({ frame, fps, f }) => {
  // Floating price tags and image placeholders
  const tags = [
    { text: "$28", x: -350, y: -200, rot: -15, delay: 0 },
    { text: "$45", x: 400, y: 150, rot: 10, delay: 10 },
    { text: "$15", x: -300, y: 250, rot: 20, delay: 20 },
    { text: "$110", x: 300, y: -250, rot: -5, delay: 5 },
  ];
  
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      {tags.map((t, i) => {
        const o = interpolate(frame - t.delay, [0, 20], [0, 0.12], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const y = interpolate(frame - t.delay, [0, fps * 4], [t.y + 80, t.y - 80], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const floatY = Math.sin((frame - t.delay) * 0.05) * 20;
        const floatRot = Math.cos((frame - t.delay) * 0.03) * 5;

        return (
          <div key={i} style={{
            position: "absolute", left: "50%", top: "50%",
            marginLeft: t.x, marginTop: y + floatY,
            width: 180, height: 100, border: `4px solid ${C.textDark}`, borderRadius: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
            transform: `rotate(${t.rot + floatRot}deg)`, opacity: o,
            fontFamily: f, fontSize: 42, fontWeight: 300, color: C.textDark
          }}>
            <div style={{ position: "absolute", left: -14, top: "50%", marginTop: -8, width: 16, height: 16, borderRadius: 8, border: `4px solid ${C.textDark}`, background: C.luxuryBg }} />
            {t.text}
          </div>
        );
      })}
    </div>
  );
};

const BgShipping: React.FC<{ frame: number; fps: number; f: string }> = ({ frame, fps, f }) => {
  const o = interpolate(frame, [0, 20], [0, 0.12], { easing: smooth, extrapolateRight: "clamp" });
  
  // Continuous sweeping laser
  const laserProgress = (frame % (fps * 2)) / (fps * 2); // 0 to 1 every 2 seconds
  const laserY = -50 + Math.sin(laserProgress * Math.PI * 2) * 250 + 200; // Sweeps up and down
  const scale = interpolate(frame, [0, fps * 3], [0.95, 1.05], { easing: smooth });

  // Generate a nice looking barcode pattern
  const bars = [16, 8, 24, 8, 12, 32, 8, 16, 8, 48, 12, 8, 24, 16, 8, 32, 12, 8, 24, 16];

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", opacity: o, transform: `scale(${scale})`, zIndex: 0 }}>
      
      {/* Massive Barcode */}
      <div style={{ display: "flex", gap: 12, height: 400, position: "relative" }}>
        {bars.map((w, i) => (
          <div key={i} style={{ width: w * 1.5, height: "100%", background: C.textDark, borderRadius: 4 }} />
        ))}
        
        {/* Sweeping Laser Line */}
        <div style={{ 
          position: "absolute", left: -100, right: -100, top: laserY, 
          height: 6, background: C.greenBright, 
          boxShadow: `0 0 30px 10px rgba(0, 166, 81, 0.4), 0 0 10px 2px ${C.greenBright}` 
        }} />
      </div>

      {/* Automated Status Indicators */}
      <div style={{ display: "flex", gap: 60, marginTop: 60, fontFamily: f, fontSize: 24, fontWeight: 700, color: C.textDark, letterSpacing: "0.15em", textTransform: "uppercase" }}>
        {["Payment Cleared", "Label Printed", "Tracking Active"].map((text, i) => {
          // Stagger the appearance of each status
          const statusO = interpolate(frame, [fps * (0.3 + i * 0.3), fps * (0.5 + i * 0.3)], [0, 1], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const statusY = interpolate(frame, [fps * (0.3 + i * 0.3), fps * (0.5 + i * 0.3)], [10, 0], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 16, opacity: statusO, transform: `translateY(${statusY}px)` }}>
              <div style={{ width: 24, height: 24, borderRadius: 12, background: C.greenBright, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 10, height: 10, background: C.white, borderRadius: 5 }} />
              </div>
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const BgRevenue: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const o = interpolate(frame, [0, 20], [0, 0.15], { easing: smooth, extrapolateRight: "clamp" });
  const draw = interpolate(frame, [0, fps * 2], [0, 1000], { easing: smooth, extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, fps * 3], [0.95, 1.05], { easing: smooth });
  const floatY = Math.sin(frame * 0.04) * 12;

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: o, transform: `scale(${scale}) translateY(${floatY}px)`, zIndex: 0 }}>
      {/* Massive, elegant geometric diamond representing premium value/wealth */}
      <svg width="700" height="700" viewBox="0 0 100 100" fill="none" stroke={C.greenBright} strokeWidth="0.5" strokeLinejoin="round" strokeLinecap="round">
        {/* Outer Silhouette */}
        <path d="M 30 15 L 70 15 L 90 40 L 50 95 L 10 40 Z" strokeDasharray="1000" strokeDashoffset={1000 - draw} strokeWidth="0.8" />
        
        {/* Equator */}
        <path d="M 10 40 L 90 40" strokeDasharray="1000" strokeDashoffset={1000 - draw} />
        
        {/* Center Vertical */}
        <path d="M 50 15 L 50 95" strokeDasharray="1000" strokeDashoffset={1000 - draw} />
        
        {/* Top Inner V */}
        <path d="M 30 15 L 50 40 L 70 15" strokeDasharray="1000" strokeDashoffset={1000 - draw} />
        
        {/* Bottom Inner Diagonals */}
        <path d="M 30 40 L 50 95 M 70 40 L 50 95" strokeDasharray="1000" strokeDashoffset={1000 - draw} />
        
        {/* Top Outer Diagonals */}
        <path d="M 30 15 L 10 40 M 70 15 L 90 40" strokeDasharray="1000" strokeDashoffset={1000 - draw} />
      </svg>
      
      {/* Subtle glowing core */}
      <div style={{ position: "absolute", width: 300, height: 300, background: C.greenBright, filter: "blur(80px)", opacity: 0.15, borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
    </div>
  );
};

const BgBrowse: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  // Network graph representing the student community
  const o = interpolate(frame, [0, 20], [0, 0.12], { easing: smooth, extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, fps * 3], [0.9, 1.05], { easing: smooth });
  
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: o, transform: `scale(${scale})`, zIndex: 0 }}>
      <svg width="800" height="800" viewBox="0 0 100 100" fill="none" stroke={C.textDark} strokeWidth="0.5">
        <circle cx="20" cy="30" r="2" fill={C.textDark} />
        <circle cx="80" cy="20" r="3" fill={C.textDark} />
        <circle cx="70" cy="80" r="2.5" fill={C.textDark} />
        <circle cx="30" cy="70" r="2" fill={C.textDark} />
        {/* Central hub */}
        <circle cx="50" cy="50" r="4" fill={C.greenBright} stroke="none" />
        
        {/* Connections */}
        <line x1="20" y1="30" x2="50" y2="50" />
        <line x1="80" y1="20" x2="50" y2="50" />
        <line x1="70" y1="80" x2="50" y2="50" />
        <line x1="30" y1="70" x2="50" y2="50" />
        <line x1="20" y1="30" x2="30" y2="70" />
        <line x1="80" y1="20" x2="70" y2="80" />
      </svg>
    </div>
  );
};

const BgTrust: React.FC<{ frame: number; fps: number; f: string }> = ({ frame, fps, f }) => {
  const o = interpolate(frame, [0, 20], [0, 0.15], { easing: smooth, extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, fps * 3], [0.95, 1.05], { easing: smooth });
  
  // Shield drawing
  const drawShield = interpolate(frame, [0, fps * 1.2], [0, 300], { easing: smooth, extrapolateRight: "clamp" });
  const drawCheck = interpolate(frame, [fps * 0.8, fps * 1.5], [0, 100], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  
  // Expanding rings
  const ring1Scale = interpolate(frame, [fps * 1.2, fps * 2.5], [0.8, 2], { easing: smooth, extrapolateLeft: "clamp" });
  const ring1Opacity = interpolate(frame, [fps * 1.2, fps * 2.5], [0.5, 0], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  
  const ring2Scale = interpolate(frame, [fps * 1.5, fps * 2.8], [0.8, 2.5], { easing: smooth, extrapolateLeft: "clamp" });
  const ring2Opacity = interpolate(frame, [fps * 1.5, fps * 2.8], [0.3, 0], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: o, transform: `scale(${scale})`, zIndex: 0 }}>
      
      {/* Background Rings */}
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", border: `2px solid ${C.greenBright}`, transform: `scale(${ring1Scale})`, opacity: ring1Opacity }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", border: `1px solid ${C.greenBright}`, transform: `scale(${ring2Scale})`, opacity: ring2Opacity }} />

      {/* Central Badge */}
      <div style={{ position: "relative", width: 400, height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke={C.textDark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Outer Hexagon/Shield */}
          <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" strokeDasharray="300" strokeDashoffset={300 - drawShield} />
          {/* Inner Hexagon */}
          <path d="M50 12 L82 28 L82 72 L50 88 L18 72 L18 28 Z" strokeDasharray="300" strokeDashoffset={300 - drawShield} strokeWidth="1" stroke={C.textDark} opacity="0.5" />
          
          {/* Massive Checkmark */}
          <path d="M30 50 L45 65 L75 35" strokeDasharray="100" strokeDashoffset={100 - drawCheck} stroke={C.greenBright} strokeWidth="6" />
        </svg>
      </div>

      {/* Floating Verification Tags */}
      <div style={{ position: "absolute", inset: 0, fontFamily: f, fontSize: 18, fontWeight: 700, color: C.textDark, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {[
          { text: "STUDENT ID: VERIFIED", x: "15%", y: "25%", delay: 0.5 },
          { text: "INSTITUTION: CONFIRMED", x: "62%", y: "30%", delay: 0.8 },
          { text: "STATUS: APPROVED", x: "20%", y: "75%", delay: 1.1 },
          { text: "SECURE SELLER", x: "65%", y: "70%", delay: 1.4 },
        ].map((tag, i) => {
          const tagO = interpolate(frame, [fps * tag.delay, fps * (tag.delay + 0.3)], [0, 1], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const tagY = interpolate(frame, [fps * tag.delay, fps * (tag.delay + 0.3)], [20, 0], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{ 
              position: "absolute", left: tag.x, top: tag.y, 
              opacity: tagO, transform: `translateY(${tagY}px)`,
              display: "flex", alignItems: "center", gap: 12,
              background: C.white, padding: "12px 24px", borderRadius: 8,
              boxShadow: `0 10px 30px rgba(0,0,0,0.05), 0 0 0 1px rgba(0, 166, 81, 0.2)`
            }}>
              <div style={{ width: 10, height: 10, borderRadius: 5, background: C.greenBright, boxShadow: `0 0 10px ${C.greenBright}` }} />
              {tag.text}
            </div>
          );
        })}
      </div>

    </div>
  );
};

const BG_MAP: Record<BgType, React.FC<{ frame: number; fps: number; f: string }>> = {
  product_idea: BgProductIdea,
  store_setup: BgStoreSetup,
  product_list: BgProductList,
  shipping: BgShipping,
  revenue: BgRevenue,
  browse: BgBrowse,
  trust: BgTrust,
};

export const SceneFastText: React.FC<{
  text: string;
  fontFamily?: string;
  fontFamilySerif?: string;
  bg?: string;
}> = ({ text, fontFamily, fontFamilySerif, bg }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = fontFamily ?? "system-ui, sans-serif";

  const lines = text.split("\n");
  const totalChars = text.replace(/\n/g, "").length;
  const isShort = totalChars <= 12;
  const isMedium = totalChars <= 35;

  const fontSize = isShort ? 120 : isMedium ? 72 : 52;
  const fontWeight = isShort ? 200 : 300;

  const textOpacity = interpolate(frame, [0, 10], [0, 1], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const textY = interpolate(frame, [0, fps * 0.5], [20, 0], { easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const textScale = interpolate(frame, [0, fps * 3], [0.98, 1.02], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lineW = interpolate(frame, [fps * 0.15, fps * 0.7], [0, 72], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  
  // Subtle side accents
  const accentLeftOpacity = interpolate(frame, [fps * 0.3, fps * 0.6], [0, 0.15], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const accentRightOpacity = interpolate(frame, [fps * 0.4, fps * 0.7], [0, 0.1], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const dotOpacity = interpolate(frame, [fps * 0.2, fps * 0.5], [0, 0.4], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const BgComponent = bg && bg in BG_MAP ? BG_MAP[bg as BgType] : null;

  return (
    <AbsoluteFill style={{ backgroundColor: C.luxuryBg }}>
      {/* Base gradients and grid */}
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 80% 50% at 50% 48%, rgba(0,166,81,0.04), transparent 60%)` }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.018) 1px, transparent 1px)", backgroundSize: "48px 48px", opacity: 0.5 }} />

      {/* Contextual Background */}
      {BgComponent && <BgComponent frame={frame} fps={fps} f={f} />}

      {/* Accents */}
      <div style={{ position: "absolute", left: 100, top: "50%", width: 1, height: 200, marginTop: -100, background: `linear-gradient(180deg, transparent, ${C.greenBright}, transparent)`, opacity: accentLeftOpacity }} />
      <div style={{ position: "absolute", right: 100, top: "50%", width: 1, height: 160, marginTop: -80, background: `linear-gradient(180deg, transparent, rgba(17,17,17,0.2), transparent)`, opacity: accentRightOpacity }} />
      <div style={{ position: "absolute", top: 64, left: 80, width: 4, height: 4, borderRadius: 2, background: C.greenBright, opacity: dotOpacity }} />
      <div style={{ position: "absolute", bottom: 64, right: 80, width: 4, height: 4, borderRadius: 2, background: C.greenBright, opacity: dotOpacity }} />
      <div style={{ position: "absolute", top: 64, right: 80, width: 4, height: 4, borderRadius: 2, background: C.textDark, opacity: dotOpacity * 0.5 }} />
      <div style={{ position: "absolute", bottom: 64, left: 80, width: 4, height: 4, borderRadius: 2, background: C.textDark, opacity: dotOpacity * 0.5 }} />

      {/* Main Text */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 12%", opacity: textOpacity, transform: `translateY(${textY}px) scale(${textScale})`, zIndex: 2 }}>
        {lines.map((line, i) => {
          const lineDelay = i * 4;
          const lineOpacity = interpolate(frame, [lineDelay, lineDelay + 10], [0, 1], { easing: smooth, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const lineY = interpolate(frame, [lineDelay, lineDelay + fps * 0.4], [12, 0], { easing: dramatic, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <span key={i} style={{ fontFamily: f, fontWeight, fontSize, lineHeight: 1.15, letterSpacing: isShort ? "-0.04em" : "-0.03em", color: C.textDark, textAlign: "center", opacity: lineOpacity, transform: `translateY(${lineY}px)`, display: "block" }}>
              {line}
            </span>
          );
        })}
        <div style={{ width: lineW, height: 1, marginTop: 28, background: `linear-gradient(90deg, transparent, ${C.greenBright}80, transparent)`, opacity: lineW > 0 ? 0.8 : 0 }} />
      </div>
    </AbsoluteFill>
  );
};
