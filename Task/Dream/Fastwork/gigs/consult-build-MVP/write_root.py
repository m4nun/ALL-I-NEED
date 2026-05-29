import os

root_tsx = """import React from "react";
import { Still, AbsoluteFill, Img, staticFile } from "remotion";

const COLORS = {
  bg: "#F2F2F2",
  bgWhite: "#FFFFFF",
  textDark: "#1A1A1A",
  textGray: "#6B6B6B",
  textLight: "#9B9B9B",
  border: "#E8E8E8",
  navBg: "#F2F2F2",
};

const fontFamily = "'Inter', 'Helvetica Neue', Arial, sans-serif";

const Navbar = () => (
  <div style={{
    position: "absolute", top: 0, left: 0, right: 0, height: 70,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 60px", zIndex: 10, backgroundColor: COLORS.navBg,
  }}>
    <span style={{ fontSize: 14, fontWeight: 500, color: COLORS.textDark, letterSpacing: "3px", fontFamily, textTransform: "uppercase" }}>
      BURAPAT
    </span>
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.textDark} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ width: 20, height: 1.5, backgroundColor: COLORS.textDark }} />
        <div style={{ width: 20, height: 1.5, backgroundColor: COLORS.textDark }} />
        <div style={{ width: 20, height: 1.5, backgroundColor: COLORS.textDark }} />
      </div>
    </div>
  </div>
);

const LaptopScreen = () => (
  <div style={{ width: "100%", height: "100%", backgroundColor: COLORS.bg, display: "flex", flexDirection: "column", fontFamily, overflow: "hidden", alignItems: "center" }}>
    <div style={{ height: 28, backgroundColor: "#F5F5F5", borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", padding: "0 14px", gap: 8, flexShrink: 0, width: "100%" }}>
      <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FF5F56" }} />
      <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
      <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#27C93F" }} />
      <span style={{ marginLeft: 12, fontSize: 11, color: COLORS.textLight, fontFamily: "monospace" }}>mngallerywebsite.vercel.app</span>
    </div>
    <div style={{ height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", flexShrink: 0, width: "100%" }}>
      <span style={{ fontSize: 13, fontWeight: 500, color: COLORS.textDark, letterSpacing: "3px", textTransform: "uppercase" }}>BURAPAT</span>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.textDark} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 3 21 3 21 8" />
          <line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" />
          <line x1="15" y1="15" x2="21" y2="21" />
          <line x1="4" y1="4" x2="9" y2="9" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <div style={{ width: 18, height: 1.5, backgroundColor: COLORS.textDark }} />
          <div style={{ width: 18, height: 1.5, backgroundColor: COLORS.textDark }} />
          <div style={{ width: 18, height: 1.5, backgroundColor: COLORS.textDark }} />
        </div>
      </div>
    </div>
    <div style={{ textAlign: "center", padding: "20px 0", flexShrink: 0 }}>
      <h1 style={{ fontSize: 32, fontWeight: 400, color: COLORS.textDark, margin: 0, fontFamily, letterSpacing: "-0.5px" }}>Burapat</h1>
      <p style={{ fontSize: 11, color: COLORS.textGray, margin: "6px 0 0 0", letterSpacing: "2px", textTransform: "uppercase" }}>MANUN</p>
    </div>
    <div style={{ flex: 1, padding: "0 24px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, overflow: "hidden", width: "100%" }}>
      <div style={{ gridRow: "span 2", backgroundColor: "#D0D0D0", borderRadius: 4, position: "relative", minHeight: 180 }}>
        <div style={{ position: "absolute", bottom: 10, left: 10 }}>
          <div style={{ fontSize: 11, color: COLORS.textDark, fontWeight: 500 }}>On trip.</div>
          <div style={{ fontSize: 9, color: COLORS.textGray, marginTop: 2 }}>Jan 15, 2026</div>
        </div>
      </div>
      <div style={{ backgroundColor: "#E0E0E0", borderRadius: 4, minHeight: 100, position: "relative" }}>
        <div style={{ position: "absolute", bottom: 8, left: 8 }}>
          <div style={{ fontSize: 10, color: COLORS.textDark }}>Wondering</div>
        </div>
      </div>
      <div style={{ backgroundColor: "#C8C8C8", borderRadius: 4, minHeight: 120, position: "relative" }}>
        <div style={{ position: "absolute", bottom: 8, left: 8 }}>
          <div style={{ fontSize: 10, color: COLORS.textDark }}>Meteor</div>
        </div>
      </div>
      <div style={{ backgroundColor: "#D8D8D8", borderRadius: 4, minHeight: 90, position: "relative" }}>
        <div style={{ position: "absolute", bottom: 8, left: 8 }}>
          <div style={{ fontSize: 10, color: COLORS.textDark }}>Prague</div>
        </div>
      </div>
      <div style={{ backgroundColor: "#E8E8E8", borderRadius: 4, minHeight: 110, position: "relative" }}>
        <div style={{ position: "absolute", bottom: 8, left: 8 }}>
          <div style={{ fontSize: 10, color: COLORS.textDark }}>Isn't</div>
        </div>
      </div>
    </div>
  </div>
);

const PhoneScreen = () => (
  <div style={{ width: "100%", height: "100%", backgroundColor: COLORS.bg, display: "flex", flexDirection: "column", fontFamily, overflow: "hidden", alignItems: "center" }}>
    <div style={{ height: 28, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 4, flexShrink: 0, width: "100%" }}>
      <div style={{ width: 60, height: 18, backgroundColor: "#1A1A1A", borderRadius: 10 }} />
    </div>
    <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", flexShrink: 0, width: "100%" }}>
      <span style={{ fontSize: 12, fontWeight: 500, color: COLORS.textDark, letterSpacing: "2px", textTransform: "uppercase" }}>BURAPAT</span>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.textDark} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 3 21 3 21 8" />
          <line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" />
          <line x1="15" y1="15" x2="21" y2="21" />
          <line x1="4" y1="4" x2="9" y2="9" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <div style={{ width: 16, height: 1.5, backgroundColor: COLORS.textDark }} />
          <div style={{ width: 16, height: 1.5, backgroundColor: COLORS.textDark }} />
          <div style={{ width: 16, height: 1.5, backgroundColor: COLORS.textDark }} />
        </div>
      </div>
    </div>
    <div style={{ textAlign: "center", padding: "12px 0", flexShrink: 0 }}>
      <h1 style={{ fontSize: 24, fontWeight: 400, color: COLORS.textDark, margin: 0, fontFamily }}>Burapat</h1>
      <p style={{ fontSize: 10, color: COLORS.textGray, margin: "4px 0 0 0", letterSpacing: "2px", textTransform: "uppercase" }}>MANUN</p>
    </div>
    <div style={{ flex: 1, padding: "0 12px 12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, overflow: "hidden", width: "100%" }}>
      <div style={{ gridRow: "span 2", backgroundColor: "#D0D0D0", borderRadius: 4, position: "relative", minHeight: 140 }}>
        <div style={{ position: "absolute", bottom: 8, left: 8 }}>
          <div style={{ fontSize: 9, color: COLORS.textDark, fontWeight: 500 }}>On trip.</div>
        </div>
      </div>
      <div style={{ backgroundColor: "#E0E0E0", borderRadius: 4, minHeight: 70, position: "relative" }}>
        <div style={{ position: "absolute", bottom: 6, left: 6 }}>
          <div style={{ fontSize: 8, color: COLORS.textDark }}>Wondering</div>
        </div>
      </div>
      <div style={{ backgroundColor: "#C8C8C8", borderRadius: 4, minHeight: 80, position: "relative" }}>
        <div style={{ position: "absolute", bottom: 6, left: 6 }}>
          <div style={{ fontSize: 8, color: COLORS.textDark }}>Meteor</div>
        </div>
      </div>
      <div style={{ backgroundColor: "#D8D8D8", borderRadius: 4, minHeight: 60, position: "relative" }}>
        <div style={{ position: "absolute", bottom: 6, left: 6 }}>
          <div style={{ fontSize: 8, color: COLORS.textDark }}>Prague</div>
        </div>
      </div>
      <div style={{ backgroundColor: "#E8E8E8", borderRadius: 4, minHeight: 75, position: "relative" }}>
        <div style={{ position: "absolute", bottom: 6, left: 6 }}>
          <div style={{ fontSize: 8, color: COLORS.textDark }}>Isn't</div>
        </div>
      </div>
    </div>
  </div>
);

const LaptopMockup = ({ x, y }) => {
  const width = 720;
  const height = 480;
  const borderRadius = 14;
  const bezel = 10;
  return (
    <div style={{ position: "absolute", left: x, top: y, width: width + bezel * 2, height: height + bezel * 2 + 32, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: width + bezel * 2, height: height + bezel * 2, backgroundColor: "#1A1A1A", borderRadius: borderRadius + 4, padding: bezel, boxShadow: "0 30px 60px rgba(0,0,0,0.12), 0 10px 20px rgba(0,0,0,0.08)" }}>
        <div style={{ width: "100%", height: "100%", backgroundColor: COLORS.bgWhite, borderRadius: borderRadius - 4, overflow: "hidden" }}>
          <LaptopScreen />
        </div>
      </div>
      <div style={{ width: width * 0.8, height: 12, backgroundColor: "#D1CFC9", borderBottomLeftRadius: 6, borderBottomRightRadius: 6, boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }} />
      <div style={{ width: width * 0.92, height: 5, backgroundColor: "#C4C2BC", borderBottomLeftRadius: 3, borderBottomRightRadius: 3, marginTop: -1 }} />
    </div>
  );
};

const PhoneMockup = ({ x, y }) => {
  const width = 190;
  const height = 380;
  const borderRadius = 26;
  const bezel = 8;
  return (
    <div style={{ position: "absolute", left: x, top: y, width: width + bezel * 2, height: height + bezel * 2, backgroundColor: "#1A1A1A", borderRadius: borderRadius + 6, padding: bezel, boxShadow: "0 20px 40px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.1)" }}>
      <div style={{ position: "absolute", top: bezel + 8, left: "50%", transform: "translateX(-50%)", width: 72, height: 18, backgroundColor: "#1A1A1A", borderRadius: 10, zIndex: 2 }} />
      <div style={{ width: "100%", height: "100%", backgroundColor: COLORS.bgWhite, borderRadius: borderRadius - 4, overflow: "hidden" }}>
        <PhoneScreen />
      </div>
    </div>
  );
};

const MngalleryMockup = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily, overflow: "hidden" }}>
      <Navbar />
      <div style={{ position: "absolute", left: 80, top: 200, width: 440, display: "flex", flexDirection: "column", gap: 20 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: COLORS.textLight, letterSpacing: "2px", textTransform: "uppercase" }}>
          MN GALLERY
        </span>
        <h1 style={{ fontSize: 44, fontWeight: 400, color: COLORS.textDark, lineHeight: 1.15, margin: 0, letterSpacing: "-1px" }}>
          A modern gallery for creative projects.
        </h1>
        <p style={{ fontSize: 15, color: COLORS.textGray, lineHeight: 1.6, margin: 0, maxWidth: 360 }}>
          Browse, shuffle, and discover art by category. Built with React, Supabase, and Tailwind CSS.
        </p>
        <div style={{ marginTop: 8 }}>
          <div style={{ display: "inline-block", padding: "12px 32px", border: `1.5px solid ${COLORS.textDark}`, borderRadius: 4, fontSize: 13, fontWeight: 500, color: COLORS.textDark, cursor: "pointer" }}>
            View Gallery
          </div>
        </div>
      </div>
      <LaptopMockup x={640} y={140} />
      <PhoneMockup x={1280} y={400} />
    </AbsoluteFill>
  );
};

export const RemotionRoot = () => (
  <>
    <Still id="MngalleryMockup" component={MngalleryMockup} width={1800} height={1200} />
  </>
);
"""

with open("mngallery-mockup/src/Root.tsx", "w") as f:
    f.write(root_tsx)

print("Written Root.tsx")
