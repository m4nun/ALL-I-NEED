import React from "react";
import { AbsoluteFill, Img } from "remotion";

// Import screenshots directly to bypass staticFile path resolution issues
import askhereLandingPageImg from "../public/askhere-landing-page.png";
import mngalleryLandingPageImg from "../public/landing-page.png";
import dashboardImg from "../public/dashboard.png";

const C = {
  bg: "#EAE7E2", // Soft beige-grey canvas background
  bgWhite: "#FCFAF7", // Premium soft white-beige watercolor paper card background
  textDark: "#1E1C19", // Deep near-black for high contrast
  textGray: "#5E5952", // Warm grey for readable description text
  textLight: "#8A847C", // Light neutral for uppercase labels and borders
  accent: "#8B7E6D", // Elegant bronze/brown accent
  cardBorder: "#E2DDD5",
  greenDot: "#27C93F",
};

const fontFamilyLora = "'Lora', Georgia, 'Times New Roman', serif";
const fontFamilyInter = "'Inter', 'Helvetica Neue', Arial, sans-serif";

interface CardProps {
  imageSrc: string;
  imageName: string;
  number: string;
  left: number;
}

const MVPWebsiteCard: React.FC<CardProps> = ({
  imageSrc,
  imageName,
  number,
  left,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: left,
        top: 230, // Centered vertically (1080 - 620) / 2
        width: 620,
        height: 620,
        backgroundColor: C.bgWhite,
        border: `1px solid ${C.cardBorder}`,
        borderRadius: 8,
        padding: "44px",
        boxShadow: "0 35px 80px rgba(27, 26, 24, 0.05), 0 10px 30px rgba(27, 26, 24, 0.03)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        boxSizing: "border-box",
        opacity: 0.65, // Faded background panels to highlight the phone mockup
      }}
    >
      {/* ── Background Typography Layer (Directly matching profileref.jpg) ── */}
      {/* 1. Giant Faded Number on the right */}
      <span
        style={{
          position: "absolute",
          right: 20,
          bottom: -50,
          fontSize: 270,
          fontWeight: 800,
          fontFamily: fontFamilyInter,
          color: "#F3EFE9",
          userSelect: "none",
          lineHeight: 1,
          zIndex: 1,
        }}
      >
        {number}
      </span>

      {/* 2. Vertical Faded 'POST' Lettering Column on the left */}
      <div
        style={{
          position: "absolute",
          left: 40,
          top: 44,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          opacity: 0.16,
          zIndex: 1,
        }}
      >
        {["POST", "POST", "POST"].map((t, i) => (
          <span
            key={i}
            style={{
              fontSize: 72,
              fontWeight: 800,
              fontFamily: fontFamilyInter,
              color: C.accent,
              letterSpacing: "4px",
              lineHeight: 1.1,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* ── Foreground Mockup Content Layer (zIndex: 2) ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        {/* Sleek Browser Frame Mockup */}
        <div
          style={{
            width: "100%",
            height: 360, // Scaled up browser preview
            borderRadius: 8,
            backgroundColor: "#FFFFFF",
            border: "1px solid #E4E0D7",
            boxShadow: "0 28px 55px rgba(27, 26, 24, 0.12), 0 8px 20px rgba(27, 26, 24, 0.04)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Browser Chrome */}
          <div
            style={{
              height: 26,
              backgroundColor: "#F5F3EE",
              borderBottom: "1px solid #E4E0D7",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              gap: 6,
              flexShrink: 0,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#FF5F56" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#27C93F" }} />
          </div>

          {/* Website Image */}
          <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <Img
              src={imageSrc}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </div>
        </div>

        {/* Minimal Description and Title */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.accent,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Step {number} Mockup
            </span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: C.textDark,
                fontFamily: fontFamilyInter,
                marginTop: 3,
              }}
            >
              {imageName === "askhere-landing-page.png"
                ? "AskHere Landing Page"
                : imageName === "landing-page.png"
                ? "MNGallery Landing Page"
                : "Workspace Dashboard"}
            </span>
          </div>
          <div style={{ display: "flex", gap: 3 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: C.accent }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: C.accent, opacity: 0.3 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Custom Instagram SVG Icons ─── */
const InstaHeart: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF3B30" stroke="#FF3B30" strokeWidth="1">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const InstaComment: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const InstaShare: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const InstaBookmark: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const InstaHome: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const InstaSearch: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const InstaPlus: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const InstaReels: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M2 10h20" />
    <path d="M6 2v8" />
    <path d="M18 2v8" />
    <path d="M12 10v12" />
  </svg>
);

const SmartPhoneMockup: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: 210, // Perfectly aligned on top of Card 1 and Card 2
        top: 150,
        width: 380,
        height: 760,
        transform: "rotate(-10deg)",
        transformOrigin: "center center",
        boxSizing: "border-box",
        zIndex: 10,
      }}
    >
      {/* Deep, Soft Blurred 3D Shadow (casting onto background cards) */}
      <div
        style={{
          position: "absolute",
          left: 25,
          top: 35,
          width: "96%",
          height: "96%",
          borderRadius: 48,
          backgroundColor: "rgba(27, 26, 24, 0.35)",
          filter: "blur(36px)",
          zIndex: -1,
        }}
      />

      {/* Titanium Outer Rim */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 48,
          border: "4.5px solid #2C2A27",
          backgroundColor: "#0C0B0A",
          padding: 10,
          boxSizing: "border-box",
          boxShadow: "inset 0 0 4px rgba(255,255,255,0.15)",
        }}
      >
        {/* Inner Screen Container */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 38,
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#FFFFFF",
            border: "1px solid #1C1B1A",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* 1. Phone Status Bar Background Spacer */}
          <div style={{ height: 44, width: "100%", flexShrink: 0, position: "relative", zIndex: 90 }} />

          {/* 2. Instagram Header Bar */}
          <div
            style={{
              height: 48,
              width: "100%",
              borderBottom: "1px solid #F0ECE4",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 16px",
              boxSizing: "border-box",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: fontFamilyLora,
                fontSize: 20,
                fontWeight: 700,
                color: "#1E1C19",
                letterSpacing: "-0.5px",
              }}
            >
              Instagram
            </span>
            <div style={{ display: "flex", gap: 16 }}>
              {/* Message Icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E1C19" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
          </div>

          {/* 3. Instagram Post Header */}
          <div
            style={{
              height: 52,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 14px",
              boxSizing: "border-box",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {/* Profile Avatar */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: "#E2DDD5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #D2CDC4",
                }}
              >
                {/* Minimal Person Icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7A7266" strokeWidth="2.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#1E1C19",
                    fontFamily: fontFamilyInter,
                  }}
                >
                  minimal_mvp
                </span>
                <span
                  style={{
                    fontSize: 9,
                    color: "#8A847C",
                    fontFamily: fontFamilyInter,
                    marginTop: 1,
                  }}
                >
                  Production Grade / $0 Hosting
                </span>
              </div>
            </div>
            {/* More Options dots */}
            <span style={{ fontSize: 18, color: "#7A7266", fontWeight: 700, cursor: "pointer" }}>•••</span>
          </div>

          {/* 4. Instagram Post Cover (The Beige Card styled like YOUR POST COVER) */}
          <div
            style={{
              width: "100%",
              aspectRatio: "1/1",
              backgroundColor: "#EBE5DA", // Premium warm beige
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              borderTop: "1px solid #E2DDD5",
              borderBottom: "1px solid #E2DDD5",
              boxSizing: "border-box",
              flexShrink: 0,
            }}
          >
            {/* Soft inner texture lines */}
            <div
              style={{
                position: "absolute",
                inset: 12,
                border: "1px dashed rgba(110, 103, 90, 0.15)",
                pointerEvents: "none",
              }}
            />

            {/* "Minimal MVP" Cover Text in high-end thin serif font */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: fontFamilyLora,
                  fontSize: 44,
                  fontWeight: 300,
                  color: "#5E5950", // Dark bronze-grey
                  letterSpacing: "8px",
                  textTransform: "uppercase",
                  textAlign: "center",
                  lineHeight: 1.35,
                }}
              >
                MINIMAL
                <br />
                MVP
              </span>
            </div>
          </div>

          {/* 5. Instagram Footer Actions */}
          <div
            style={{
              height: 38,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 14px",
              boxSizing: "border-box",
              marginTop: 6,
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", gap: 14 }}>
              <InstaHeart />
              <InstaComment />
              <InstaShare />
            </div>
            <InstaBookmark />
          </div>

          {/* 6. Instagram Text Caption details */}
          <div
            style={{
              padding: "0 14px",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              boxSizing: "border-box",
              fontFamily: fontFamilyInter,
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, color: "#1E1C19" }}>10,980 likes</span>
            <div style={{ fontSize: 11, color: "#1E1C19", lineHeight: 1.4 }}>
              <strong style={{ fontWeight: 700, marginRight: 6 }}>minimal_mvp</strong>
              Create the MVP with minimal cost and production grade. Use state-of-the-art tech.
            </div>
            <span style={{ fontSize: 10, color: "#8A847C", marginTop: 2 }}>View all 138 comments</span>
          </div>

          {/* 7. Instagram App Tab Navigation Bar (fixed bottom) */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 56,
              borderTop: "1px solid #F0ECE4",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              backgroundColor: "#FFFFFF",
              paddingBottom: 10,
              boxSizing: "border-box",
              zIndex: 95,
            }}
          >
            <InstaHome />
            <InstaSearch />
            <InstaPlus />
            <InstaReels />
            {/* Miniature Avatar circle */}
            <div style={{ width: 23, height: 23, borderRadius: "50%", backgroundColor: "#7A7266", border: "1px solid #7A7266" }} />
          </div>

          {/* Screen Gloss Reflection Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%, rgba(0,0,0,0.04) 100%)",
              pointerEvents: "none",
              zIndex: 100,
            }}
          />

          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: "50%",
              transform: "translateX(-50%)",
              width: 105,
              height: 26,
              borderRadius: 13,
              backgroundColor: "#000000",
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 10px",
              boxSizing: "border-box",
            }}
          >
            {/* Small camera sensor reflection */}
            <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#1A1A1A", marginLeft: 2 }} />
            <div style={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: "#1F2332", marginRight: 2 }} />
          </div>

          {/* Phone Status Bar Row */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 24px",
              zIndex: 90,
              pointerEvents: "none",
            }}
          >
            {/* Time */}
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#1A1A1A",
                fontFamily: fontFamilyInter,
              }}
            >
              09:41
            </span>

            {/* Status Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              {/* Cellular Signal Bars */}
              <svg width="15" height="10" viewBox="0 0 17 11" fill="#1A1A1A">
                <rect x="0" y="8" width="2.5" height="3" rx="0.5" />
                <rect x="4" y="6" width="2.5" height="5" rx="0.5" />
                <rect x="8" y="4" width="2.5" height="7" rx="0.5" />
                <rect x="12" y="1" width="2.5" height="10" rx="0.5" />
              </svg>
              {/* Wifi */}
              <svg width="13" height="10" viewBox="0 0 15 11" fill="#1A1A1A">
                <path d="M7.5 11C8.2 11 8.8 10.4 8.8 9.7C8.8 9 8.2 8.4 7.5 8.4C6.8 8.4 6.2 9 6.2 9.7C6.2 10.4 6.8 11 7.5 11ZM11.6 6.8C12.4 6 12.4 4.7 11.6 3.9C9.3 1.6 5.7 1.6 3.4 3.9C2.6 4.7 2.6 6 3.4 6.8L4.6 5.6C4.4 5.4 4.4 5.1 4.6 4.9C6.2 3.3 8.8 3.3 10.4 4.9C10.6 5.1 10.6 5.4 10.4 5.6L11.6 6.8ZM13.8 4.6L15 3.4C10.9 -0.7 4.1 -0.7 0 3.4L1.2 4.6C4.7 1.1 10.3 1.1 13.8 4.6Z" />
              </svg>
              {/* Battery */}
              <div style={{ width: 20, height: 10, border: "1px solid #1A1A1A", borderRadius: 3, padding: 1.5, position: "relative", boxSizing: "border-box" }}>
                <div style={{ width: "100%", height: "100%", backgroundColor: "#1A1A1A", borderRadius: 1.2 }} />
                <div style={{ width: 1.2, height: 3.5, backgroundColor: "#1A1A1A", position: "absolute", right: -3, top: "50%", transform: "translateY(-50%)", borderTopRightRadius: 1, borderBottomRightRadius: 1 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MyComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.bg,
        overflow: "hidden",
        fontFamily: fontFamilyInter,
        boxSizing: "border-box",
      }}
    >
      {/* 1. Subtle Radial Gradient Vignette for Studio Lighting */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 35% 45%, rgba(255, 255, 255, 0.45) 0%, rgba(27, 26, 24, 0.05) 100%)",
          zIndex: 1,
        }}
      />

      {/* 2. Premium Tactile Dot Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(#CEC9BE 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
          zIndex: 2,
        }}
      />

      {/* 4. Horizontal Card Track (Project Screenshots) - Aligned Straight & Horizontally Centered */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <MVPWebsiteCard
          imageSrc={askhereLandingPageImg}
          imageName="askhere-landing-page.png"
          number="01"
          left={120}
        />
        <MVPWebsiteCard
          imageSrc={mngalleryLandingPageImg}
          imageName="landing-page.png"
          number="02"
          left={650}
        />
        <MVPWebsiteCard
          imageSrc={dashboardImg}
          imageName="dashboard.png"
          number="03"
          left={1180}
        />
      </div>

      {/* 5. Tilted Foreground Smartphone Mockup (Visually on top of Card 1 and Card 2) */}
      <SmartPhoneMockup />

      {/* 6. Premium Editorial Footer (Title & Tagline on the Bottom Right - Aligned with Card 3) */}
      <div
        style={{
          position: "absolute",
          left: 1180, // Perfectly aligned with Card 3's left edge
          top: 865, // Placed below the card track (cards end at 850)
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {/* Exclusive Badges */}
        <div style={{ display: "flex", gap: 10 }}>
          <span
            style={{
              backgroundColor: C.textDark,
              color: C.bgWhite,
              borderRadius: 30,
              padding: "5px 14px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontFamily: fontFamilyInter,
              boxShadow: "0 10px 25px rgba(27, 26, 24, 0.08)",
              display: "inline-block",
            }}
          >
            Fastwork Exclusive
          </span>
          <span
            style={{
              backgroundColor: C.accent,
              color: C.bgWhite,
              borderRadius: 30,
              padding: "5px 14px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontFamily: fontFamilyInter,
              boxShadow: "0 10px 25px rgba(27, 26, 24, 0.08)",
              display: "inline-block",
            }}
          >
            For Startups & SMEs
          </span>
        </div>

        {/* Gig Name */}
        <h1
          style={{
            fontSize: 58,
            fontWeight: 500,
            color: C.textDark,
            fontFamily: fontFamilyLora,
            margin: "2px 0 0 0",
            letterSpacing: "-1px",
            lineHeight: 1.1,
          }}
        >
          Minimal MVP.
        </h1>

        {/* Tagline / Value Proposition / Elaborated Hero Text */}
        <p
          style={{
            fontSize: 18,
            color: C.textGray,
            fontFamily: fontFamilyInter,
            margin: "4px 0 0 0",
            fontWeight: 400,
            maxWidth: 540,
            lineHeight: 1.4,
          }}
        >
          We create <strong style={{ color: C.textDark, fontWeight: 600 }}>production-grade MVPs</strong> with <strong style={{ color: C.textDark, fontWeight: 600 }}>minimal cost</strong>. Launch your product in weeks.
        </p>
      </div>

      {/* 7. Top-Right Trust Badges Header Menu */}
      <div
        style={{
          position: "absolute",
          right: 120, // Symmetrically aligned with Card 3's right edge
          top: 105,
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          gap: 20,
          fontSize: 13,
          fontWeight: 600,
          color: C.accent,
          fontFamily: fontFamilyInter,
          letterSpacing: "0.5px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: C.greenDot, fontSize: 16 }}>✓</span> Premium Next.js Code
        </div>
        <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: C.accent }} />
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: C.greenDot, fontSize: 16 }}>✓</span> $0/mo Infrastructure
        </div>
        <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: C.accent }} />
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: C.greenDot, fontSize: 16 }}>✓</span> Production-Grade Build
        </div>
      </div>

      {/* 6. Subtle Vignette Border Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "24px solid #EAE7E2",
          pointerEvents: "none",
          zIndex: 100,
        }}
      />
    </AbsoluteFill>
  );
};
