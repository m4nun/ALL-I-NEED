import React from "react";
import { Still, AbsoluteFill, Img, staticFile } from "remotion";
import { AskhereWorkflow } from "./Workflow";

const COLORS = {
  bg: "#F2EFE9",
  bgWhite: "#FFFFFF",
  textDark: "#1A1A1A",
  textGray: "#6B6B6B",
  textLight: "#9B9B9B",
  border: "#E8E4DE",
  buttonBorder: "#1A1A1A",
  chatBg: "#F7F7F7",
  bubbleUser: "#1A1A1A",
  bubbleAssistant: "#FFFFFF",
};

const fontFamily = "'Inter', 'Helvetica Neue', Arial, sans-serif";

// --- Navigation ---
const Navbar: React.FC = () => (
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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          fontSize: 24,
          fontWeight: 600,
          color: COLORS.textDark,
          letterSpacing: "-0.5px",
          fontFamily,
        }}
      >
        Askhere
      </span>
      <span
        style={{
          fontSize: 11,
          color: COLORS.textLight,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginTop: 2,
          fontFamily,
        }}
      >
        Askhere for classrooms
      </span>
    </div>
    <div style={{ display: "flex", gap: 40 }}>
      {["Home", "About", "Contact"].map((item) => (
        <span
          key={item}
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: COLORS.textDark,
            fontFamily,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

// --- Laptop Screen Content ---
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
    {/* Browser Chrome */}
    <div
      style={{
        height: 32,
        backgroundColor: "#F5F5F5",
        borderBottom: `1px solid ${COLORS.border}`,
        display: "flex",
        alignItems: "center",
        padding: "0 14px",
        gap: 8,
        flexShrink: 0,
      }}
    >
      <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FF5F56" }} />
      <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
      <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#27C93F" }} />
      <span style={{ marginLeft: 12, fontSize: 11, color: COLORS.textLight, fontFamily: "monospace" }}>
        askhere.fun
      </span>
    </div>

    {/* Askhere Header */}
    <div
      style={{
        height: 56,
        borderBottom: `1px solid ${COLORS.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: 18, fontWeight: 600, color: COLORS.textDark }}>Askhere</span>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ padding: "6px 16px", border: `1px solid ${COLORS.border}`, borderRadius: 6, fontSize: 13 }}>
          Account
        </div>
        <div style={{ padding: "6px 16px", backgroundColor: COLORS.textDark, color: "#FFF", borderRadius: 6, fontSize: 13 }}>
          Dashboard
        </div>
      </div>
    </div>

    {/* Hero Section */}
    <div style={{ padding: "36px 40px", flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
      <span
        style={{
          fontSize: 10,
          fontWeight: 600,
          color: COLORS.textLight,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Askhere for classrooms
      </span>
      <h1
        style={{
          fontSize: 28,
          fontWeight: 500,
          color: COLORS.textDark,
          lineHeight: 1.2,
          margin: 0,
          maxWidth: 380,
        }}
      >
          Turn your syllabus into a 24/7 student Q&A assistant.
      </h1>
      <p style={{ fontSize: 13, color: COLORS.textGray, lineHeight: 1.5, margin: 0, maxWidth: 360 }}>
        Upload your syllabus, readings, and notes. Share one link. Let students get instant answers from your course materials.
      </p>

      {/* Chat Preview Widget */}
      <div
        style={{
          marginTop: 12,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 14,
          padding: 16,
          backgroundColor: COLORS.chatBg,
          maxWidth: 400,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#E8E4DE" }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.textDark }}>Physics 101</div>
            <div style={{ fontSize: 10, color: "#27C93F" }}>Ready to answer</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              alignSelf: "flex-start",
              backgroundColor: COLORS.bubbleAssistant,
              padding: "10px 14px",
              borderRadius: 12,
              border: `1px solid ${COLORS.border}`,
              fontSize: 12,
              color: COLORS.textDark,
              maxWidth: "80%",
            }}
          >
            When is the lab report due?
          </div>
          <div
            style={{
              alignSelf: "flex-end",
              backgroundColor: COLORS.bubbleUser,
              color: "#FFF",
              padding: "10px 14px",
              borderRadius: 12,
              fontSize: 12,
              maxWidth: "85%",
            }}
          >
            According to the syllabus, the lab report is due next Friday at 11:59 PM.
          </div>
          <div
            style={{
              alignSelf: "flex-start",
              backgroundColor: COLORS.bubbleAssistant,
              padding: "10px 14px",
              borderRadius: 12,
              border: `1px solid ${COLORS.border}`,
              fontSize: 12,
              color: COLORS.textDark,
              maxWidth: "80%",
            }}
          >
            What readings for Week 4?
          </div>
        </div>
        <div
          style={{
            marginTop: 12,
            height: 32,
            backgroundColor: COLORS.bgWhite,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 16,
          }}
        />
      </div>
    </div>
  </div>
);

// --- Phone Screen Content ---
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
        backgroundColor: COLORS.bgWhite,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 4,
        flexShrink: 0,
      }}
    >
      <div style={{ width: 60, height: 18, backgroundColor: "#1A1A1A", borderRadius: 10 }} />
    </div>

    {/* Chat Header */}
    <div
      style={{
        height: 44,
        borderBottom: `1px solid ${COLORS.border}`,
        display: "flex",
        alignItems: "center",
        padding: "0 14px",
        gap: 10,
        flexShrink: 0,
      }}
    >
      <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#E8E4DE" }} />
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.textDark }}>Physics 101</div>
        <div style={{ fontSize: 9, color: "#27C93F" }}>Ready to answer</div>
      </div>
    </div>

    {/* Messages */}
    <div
      style={{
        flex: 1,
        padding: 14,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        backgroundColor: COLORS.chatBg,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          alignSelf: "flex-start",
          maxWidth: "85%",
          backgroundColor: COLORS.bubbleAssistant,
          borderRadius: 12,
          border: `1px solid ${COLORS.border}`,
          padding: 10,
        }}
      >
        <div style={{ fontSize: 11, color: COLORS.textDark, lineHeight: 1.4 }}>
          Hi! I'm your class assistant for Physics 101. Ask me anything about the syllabus, assignments, or course materials.
        </div>
      </div>
      <div
        style={{
          alignSelf: "flex-end",
          maxWidth: "80%",
          backgroundColor: COLORS.bubbleUser,
          color: "#FFF",
          borderRadius: 12,
          padding: 10,
          fontSize: 11,
        }}
      >
        When is the lab report due?
      </div>
      <div
        style={{
          alignSelf: "flex-start",
          maxWidth: "90%",
          backgroundColor: COLORS.bubbleAssistant,
          borderRadius: 12,
          border: `1px solid ${COLORS.border}`,
          padding: 10,
        }}
      >
        <div style={{ fontSize: 11, color: COLORS.textDark, lineHeight: 1.4 }}>
          According to the syllabus, the lab report is due next Friday at 11:59 PM.
        </div>
        <div style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: 2, backgroundColor: "#E8E4DE" }} />
          <span style={{ fontSize: 10, color: COLORS.textGray }}>Syllabus.pdf</span>
        </div>
      </div>
      <div
        style={{
          alignSelf: "flex-end",
          maxWidth: "80%",
          backgroundColor: COLORS.bubbleUser,
          color: "#FFF",
          borderRadius: 12,
          padding: 10,
          fontSize: 11,
        }}
      >
        What readings for Week 4?
      </div>
      <div
        style={{
          alignSelf: "flex-start",
          maxWidth: "85%",
          backgroundColor: COLORS.bubbleAssistant,
          borderRadius: 12,
          border: `1px solid ${COLORS.border}`,
          padding: 10,
        }}
      >
        <div style={{ fontSize: 11, color: COLORS.textDark, lineHeight: 1.4 }}>
          Checking the class materials...
        </div>
        <div style={{ marginTop: 6, height: 6, width: "70%", backgroundColor: "#E8E4DE", borderRadius: 3 }} />
        <div style={{ marginTop: 4, height: 6, width: "50%", backgroundColor: "#E8E4DE", borderRadius: 3 }} />
      </div>
    </div>

    {/* Input */}
    <div
      style={{
        height: 44,
        borderTop: `1px solid ${COLORS.border}`,
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        gap: 8,
        flexShrink: 0,
      }}
    >
      <div style={{ flex: 1, height: 28, backgroundColor: COLORS.chatBg, borderRadius: 14, border: `1px solid ${COLORS.border}` }} />
      <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: COLORS.textDark }} />
    </div>
  </div>
);

// --- Device Frames ---
const LaptopMockup: React.FC<{ x: number; y: number }> = ({ x, y }) => {
  const width = 740;
  const height = 500;
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
          boxShadow: "0 30px 60px rgba(0,0,0,0.12), 0 10px 20px rgba(0,0,0,0.08)",
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
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
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

const PhoneMockup: React.FC<{ x: number; y: number }> = ({ x, y }) => {
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
        boxShadow: "0 20px 40px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.1)",
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

// --- Main Composition ---
const AskhereMockup: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        fontFamily,
        overflow: "hidden",
      }}
    >
      <Navbar />

      {/* Left Content */}
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 240,
          width: 480,
          display: "flex",
          flexDirection: "column",
          gap: 22,
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
          Askhere for classrooms
        </span>

        <h1
          style={{
            fontSize: 46,
            fontWeight: 500,
            color: COLORS.textDark,
            lineHeight: 1.15,
            margin: 0,
            letterSpacing: "-1px",
          }}
        >
        Turn your syllabus into a 24/7 student Q&A assistant.
        </h1>

        <p
          style={{
            fontSize: 16,
            color: COLORS.textGray,
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 400,
          }}
        >
          Upload your syllabus, readings, and notes. Share one link. Let students get instant answers from your course materials — no student accounts required.
        </p>

        <div style={{ marginTop: 12 }}>
          <div
            style={{
              display: "inline-block",
              padding: "14px 36px",
              border: `1.5px solid ${COLORS.buttonBorder}`,
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 500,
              color: COLORS.textDark,
              cursor: "pointer",
            }}
          >
            Get Started
          </div>
        </div>
      </div>

      {/* Devices */}
      <LaptopMockup x={660} y={160} />
      <PhoneMockup x={1320} y={420} />
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => (
  <>
    <Still
      id="AskhereMockup"
      component={AskhereMockup}
      width={1800}
      height={1200}
    />
    <Still
      id="AskhereWorkflow"
      component={AskhereWorkflow}
      width={1200}
      height={800}
    />
  </>
);
