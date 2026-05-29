import React from "react";
import { Still, AbsoluteFill, Img, staticFile } from "remotion";
import { MnGalleryWorkflow } from "./Workflow";
import { MyComposition } from "./Composition";

const COLORS = {
  bg: "#F5F3EE",
  bgWhite: "#FFFFFF",
  textDark: "#111111",
  textGray: "#555555",
  textLight: "#8A8A8A",
  border: "#E5E2DC",
  cardBg: "#FAFAFA",
  imagePlaceholder: "#E8E5DF",
  imagePlaceholderDark: "#D5D1C9",
};

const fontFamily =
  "'Inter', 'Helvetica Neue', Arial, sans-serif";
const fontSerif =
  "'Playfair Display', Georgia, 'Times New Roman', serif";

/* ─── Browser Chrome ─── */
const BrowserChrome: React.FC<{ url?: string }> = ({
  url = "mngallery.vercel.app",
}) => (
  <div
    style={{
      height: 32,
      backgroundColor: "#F1F0ED",
      borderBottom: `1px solid ${COLORS.border}`,
      display: "flex",
      alignItems: "center",
      padding: "0 14px",
      gap: 8,
      flexShrink: 0,
    }}
  >
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "#FF5F56",
      }}
    />
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "#FFBD2E",
      }}
    />
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "#27C93F",
      }}
    />
    <span
      style={{
        marginLeft: 12,
        fontSize: 10,
        color: COLORS.textLight,
        fontFamily: "monospace",
      }}
    >
      {url}
    </span>
  </div>
);

/* ─── Laptop Screen: CSS-drawn mngallery landing page ─── */
const LaptopScreen: React.FC = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: COLORS.bgWhite,
      display: "flex",
      flexDirection: "column",
      fontFamily,
      overflow: "hidden",
    }}
  >
    <BrowserChrome />

    {/* Top Navigation */}
    <div
      style={{
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: COLORS.textDark,
          letterSpacing: "4px",
          fontFamily,
        }}
      >
        BURAPAT
      </span>
      {/* Shuffle icon center */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.textDark}
          strokeWidth="1.5"
        >
          <polyline points="16 3 21 3 21 8" />
          <line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" />
          <line x1="15" y1="15" x2="21" y2="21" />
          <line x1="4" y1="4" x2="9" y2="9" />
        </svg>
      </div>
      {/* Hamburger */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div
          style={{
            width: 18,
            height: 1.5,
            backgroundColor: COLORS.textDark,
          }}
        />
        <div
          style={{
            width: 18,
            height: 1.5,
            backgroundColor: COLORS.textDark,
          }}
        />
      </div>
    </div>

    {/* Hero Section */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 10,
        flexShrink: 0,
      }}
    >
      <h1
        style={{
          fontSize: 36,
          fontWeight: 400,
          color: COLORS.textDark,
          margin: 0,
          lineHeight: 1.1,
          fontFamily: fontSerif,
          letterSpacing: "-0.5px",
        }}
      >
        Burapat
      </h1>
      <span
        style={{
          fontSize: 10,
          fontWeight: 600,
          color: COLORS.textLight,
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginTop: 2,
          fontFamily,
        }}
      >
        MANUN
      </span>
    </div>

    {/* Category Pills */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 10,
        padding: "0 32px",
        marginBottom: 12,
        flexShrink: 0,
      }}
    >
      {["ME", "TODAY?", "SHINE!", "TO US", "ABOUT"].map(
        (cat, i) => (
          <span
            key={cat}
            style={{
              fontSize: 10,
              fontWeight: 500,
              color:
                i === 0
                  ? COLORS.textDark
                  : COLORS.textGray,
              padding: "5px 12px",
              borderRadius: 16,
              border:
                i === 0
                  ? `1px solid ${COLORS.textDark}`
                  : `1px solid ${COLORS.border}`,
              fontFamily,
              cursor: "default",
            }}
          >
            {cat}
          </span>
        ),
      )}
    </div>

    {/* Masonry Grid of Projects */}
    <div
      style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 10,
        padding: "0 32px 20px",
        overflow: "hidden",
      }}
    >
      {[
        { name: "Echoes", date: "2025", h: 1 },
        { name: "Silence", date: "2024", h: 1.3 },
        { name: "Wander", date: "2025", h: 0.9 },
        { name: "Light", date: "2024", h: 1.2 },
        { name: "Void", date: "2025", h: 1.1 },
        { name: "Bloom", date: "2024", h: 1.3 },
        { name: "Trace", date: "2025", h: 0.8 },
        { name: "Drift", date: "2024", h: 1 },
      ].map((project) => (
        <div
          key={project.name}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {/* Image placehoder */}
          <div
            style={{
              flex: project.h,
              backgroundColor: COLORS.imagePlaceholder,
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              minHeight: 60,
            }}
          >
            {/* Diagonal lines to suggest image */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke={COLORS.imagePlaceholderDark}
              strokeWidth="1"
              opacity={0.4}
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
              />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          {/* Label */}
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: COLORS.textDark,
              fontFamily,
            }}
          >
            {project.name}
          </span>
          <span
            style={{
              fontSize: 8,
              color: COLORS.textLight,
              fontFamily,
              marginTop: -4,
            }}
          >
            {project.date}
          </span>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Phone Screen: CSS-drawn mngallery mobile ─── */
const PhoneScreen: React.FC = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: COLORS.bgWhite,
      display: "flex",
      flexDirection: "column",
      fontFamily,
      overflow: "hidden",
    }}
  >
    {/* Status Bar */}
    <div
      style={{
        height: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 4,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 60,
          height: 18,
          backgroundColor: COLORS.textDark,
          borderRadius: 10,
        }}
      />
    </div>

    {/* Header */}
    <div
      style={{
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: COLORS.textDark,
          letterSpacing: "3px",
        }}
      >
        BURAPAT
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <div
          style={{
            width: 14,
            height: 1.2,
            backgroundColor: COLORS.textDark,
          }}
        />
        <div
          style={{
            width: 14,
            height: 1.2,
            backgroundColor: COLORS.textDark,
          }}
        />
      </div>
    </div>

    {/* Hero */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 12,
        paddingBottom: 8,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontSize: 22,
          fontWeight: 400,
          color: COLORS.textDark,
          fontFamily: fontSerif,
        }}
      >
        Burapat
      </span>
      <span
        style={{
          fontSize: 7,
          fontWeight: 600,
          color: COLORS.textLight,
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginTop: 1,
        }}
      >
        MANUN
      </span>
    </div>

    {/* Category scroll row */}
    <div
      style={{
        display: "flex",
        gap: 6,
        padding: "0 16px 10px",
        flexShrink: 0,
      }}
    >
      {["ME", "TODAY?", "SHINE!", "TO US"].map(
        (cat, i) => (
          <span
            key={cat}
            style={{
              fontSize: 8,
              padding: "3px 8px",
              borderRadius: 12,
              color:
                i === 0
                  ? COLORS.textDark
                  : COLORS.textGray,
              border:
                i === 0
                  ? `1px solid ${COLORS.textDark}`
                  : `1px solid ${COLORS.border}`,
            }}
          >
            {cat}
          </span>
        ),
      )}
    </div>

    {/* Image grid */}
    <div
      style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 6,
        padding: "0 16px 16px",
        overflow: "hidden",
      }}
    >
      {[
        { h: 100, name: "Echoes", date: "2025" },
        { h: 130, name: "Silence", date: "2024" },
        { h: 120, name: "Wander", date: "2025" },
        { h: 90, name: "Light", date: "2024" },
        { h: 110, name: "Void", date: "2025" },
        { h: 100, name: "Bloom", date: "2024" },
      ].map((p) => (
        <div
          key={p.name}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <div
            style={{
              height: p.h,
              backgroundColor: COLORS.imagePlaceholder,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={COLORS.imagePlaceholderDark}
              strokeWidth="1"
              opacity={0.4}
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
              />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 8,
              fontWeight: 600,
              color: COLORS.textDark,
            }}
          >
            {p.name}
          </span>
          <span
            style={{
              fontSize: 7,
              color: COLORS.textLight,
              marginTop: -3,
            }}
          >
            {p.date}
          </span>
        </div>
      ))}
    </div>

    {/* Bottom nav */}
    <div
      style={{
        height: 36,
        borderTop: `1px solid ${COLORS.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0 12px",
        flexShrink: 0,
      }}
    >
      {["ME", "TODAY?", "SHINE!", "ABOUT"].map(
        (item) => (
          <span
            key={item}
            style={{
              fontSize: 8,
              fontWeight: 600,
              color: COLORS.textGray,
            }}
          >
            {item}
          </span>
        ),
      )}
    </div>
  </div>
);

/* ─── Device Frames ─── */
const LaptopMockup: React.FC<{ x: number; y: number }> = ({
  x,
  y,
}) => {
  const width = 760;
  const height = 520;
  const borderRadius = 14;
  const bezel = 10;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: width + bezel * 2,
        height: height + bezel * 2 + 32,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: width + bezel * 2,
          height: height + bezel * 2,
          backgroundColor: "#1A1A1A",
          borderRadius: borderRadius + 4,
          padding: bezel,
          boxShadow:
            "0 30px 60px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: COLORS.bgWhite,
            borderRadius: borderRadius - 4,
            overflow: "hidden",
          }}
        >
          <LaptopScreen />
        </div>
      </div>
      <div
        style={{
          width: width * 0.8,
          height: 12,
          backgroundColor: "#D1CFC9",
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
        }}
      />
      <div
        style={{
          width: width * 0.92,
          height: 5,
          backgroundColor: "#C4C2BC",
          borderBottomLeftRadius: 3,
          borderBottomRightRadius: 3,
          marginTop: -1,
        }}
      />
    </div>
  );
};

const PhoneMockup: React.FC<{ x: number; y: number }> = ({
  x,
  y,
}) => {
  const width = 200;
  const height = 400;
  const borderRadius = 26;
  const bezel = 8;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: width + bezel * 2,
        height: height + bezel * 2,
        backgroundColor: "#1A1A1A",
        borderRadius: borderRadius + 6,
        padding: bezel,
        boxShadow:
          "0 20px 40px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: bezel + 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 72,
          height: 18,
          backgroundColor: "#1A1A1A",
          borderRadius: 10,
          zIndex: 2,
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: COLORS.bgWhite,
          borderRadius: borderRadius - 4,
          overflow: "hidden",
        }}
      >
        <PhoneScreen />
      </div>
    </div>
  );
};

/* ─── CSS Device Mockup Composition ─── */
const MnGalleryDeviceMockup: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        fontFamily,
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 100px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: COLORS.textDark,
              letterSpacing: "5px",
            }}
          >
            BURAPAT
          </span>
          <span
            style={{
              fontSize: 10,
              color: COLORS.textLight,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginTop: 2,
            }}
          >
            MN Gallery
          </span>
        </div>
        <div style={{ display: "flex", gap: 36 }}>
          {["Work", "About", "Contact"].map((item) => (
            <span
              key={item}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: COLORS.textDark,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Left Content */}
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 220,
          width: 420,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: COLORS.textLight,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Creative Portfolio Gallery
        </span>

        <h1
          style={{
            fontSize: 52,
            fontWeight: 400,
            color: COLORS.textDark,
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: "-1px",
            fontFamily: fontSerif,
          }}
        >
          Burapat
        </h1>

        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: COLORS.textLight,
            letterSpacing: "4px",
            marginTop: -12,
          }}
        >
          MANUN
        </span>

        <p
          style={{
            fontSize: 15,
            color: COLORS.textGray,
            lineHeight: 1.5,
            margin: 0,
            maxWidth: 340,
          }}
        >
          A creative portfolio gallery by Burapat Manun
          — browse projects across categories with
          smooth shuffle interactions.
        </p>

        <div style={{ marginTop: 12 }}>
          <div
            style={{
              display: "inline-block",
              padding: "14px 36px",
              border: `1.5px solid ${COLORS.textDark}`,
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 500,
              color: COLORS.textDark,
            }}
          >
            View Gallery
          </div>
        </div>
      </div>

      {/* Devices */}
      <LaptopMockup x={600} y={150} />
      <PhoneMockup x={1280} y={420} />
    </AbsoluteFill>
  );
};

/* ══════════════════════════════════════════════════════════════ */
/* REAL SCREENSHOT MOCKUP                                          */
/* ══════════════════════════════════════════════════════════════ */

const MnGalleryRealMockup: React.FC = () => {
  const laptopW = 640;
  const laptopH = 490;
  const bezel = 10;
  const screenRadius = 10;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F8F7F5",
        fontFamily,
        overflow: "hidden",
      }}
    >
      {/* Dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(#D8D5CF 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
        }}
      />

      {/* Left: Laptop frame with full landing page screenshot */}
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 190,
          width: laptopW + bezel * 2,
          height: laptopH + bezel * 2 + 28,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: laptopW + bezel * 2,
            height: laptopH + bezel * 2,
            backgroundColor: "#111",
            borderRadius: screenRadius + 6,
            padding: bezel,
            boxShadow:
              "0 24px 50px rgba(0,0,0,0.12)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#FFF",
              borderRadius: screenRadius,
              overflow: "hidden",
            }}
          >
            <BrowserChrome url="mngallerywebsite.vercel.app" />
            <div
              style={{
                flex: 1,
                height: laptopH - 32,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Img
                src={staticFile("landing-page.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: laptopW * 0.8,
            height: 10,
            backgroundColor: "#D1CFC9",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        />
        <div
          style={{
            width: laptopW * 0.92,
            height: 4,
            backgroundColor: "#C4C2BC",
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
            marginTop: -1,
          }}
        />
      </div>

      {/* Right: Phone frame with viewport screenshot */}
      <div
        style={{
          position: "absolute",
          left: 820,
          top: 420,
          height: 440,
          backgroundColor: "#111",
          borderRadius: 32,
          padding: 9,
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.15)",
        }}
      >
        {/* Notch */}
        <div
          style={{
            position: "absolute",
            top: 9 + 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 72,
            height: 18,
            backgroundColor: "#111",
            borderRadius: 10,
            zIndex: 2,
          }}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#FFF",
            borderRadius: 22,
            overflow: "hidden",
          }}
        >
          <Img
            src={staticFile("landing-viewport.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
        </div>
      </div>

      {/* Left text panel */}
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 38,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          zIndex: 5,
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: COLORS.textLight,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Real Screenshots
        </span>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: COLORS.textDark,
            margin: 0,
            letterSpacing: "-0.5px",
            fontFamily: fontSerif,
          }}
        >
          MN Gallery
        </h1>
        <p
          style={{
            fontSize: 13,
            color: COLORS.textGray,
            margin: "4px 0 0 0",
            maxWidth: 280,
            lineHeight: 1.4,
          }}
        >
          Browse projects across categories with
          smooth shuffle interactions.
        </p>
      </div>

      {/* Built with badges */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 100,
          display: "flex",
          gap: 10,
          zIndex: 5,
        }}
      >
        {[
          "Vite + React",
          "Tailwind CSS",
          "Supabase",
          "Vercel",
        ].map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: COLORS.textGray,
              padding: "5px 12px",
              borderRadius: 20,
              border: `1px solid ${COLORS.border}`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Subtle frame border */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "20px solid #F8F7F5",
          pointerEvents: "none",
          zIndex: 100,
        }}
      />
    </AbsoluteFill>
  );
};

/* ══════════════════════════════════════════════════════════════ */
/* ROOT EXPORT                                                     */
/* ══════════════════════════════════════════════════════════════ */

export const RemotionRoot: React.FC = () => (
  <>
    <Still
      id="MinimalMVP"
      component={MyComposition}
      width={1920}
      height={1080}
    />
    <Still
      id="MnGalleryMockup"
      component={MnGalleryDeviceMockup}
      width={1800}
      height={1200}
    />
    <Still
      id="MnGalleryRealMockup"
      component={MnGalleryRealMockup}
      width={1280}
      height={1080}
    />
    <Still
      id="MnGalleryWorkflow"
      component={MnGalleryWorkflow}
      width={1200}
      height={800}
    />
  </>
);
