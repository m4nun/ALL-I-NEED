import React from "react";
import { AbsoluteFill } from "remotion";

const C = {
  bg: "#F8F6F1",
  grid: "#EAE6DE",
  black: "#111111",
  gray: "#4A4A4A",
  grayLight: "#8A8A8A",
  white: "#FFFFFF",
  border: "#D5D0C5",
};

const font = "'Inter', 'Helvetica Neue', Arial, sans-serif";

const IconEye: React.FC<{ color?: string; size?: number }> = ({
  color = C.white,
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconGrid: React.FC<{ color?: string; size?: number }> = ({
  color = C.white,
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const IconShuffle: React.FC<{ color?: string; size?: number }> = ({
  color = C.white,
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 3 21 3 21 8" />
    <line x1="4" y1="20" x2="21" y2="3" />
    <polyline points="21 16 21 21 16 21" />
    <line x1="15" y1="15" x2="21" y2="21" />
    <line x1="4" y1="4" x2="9" y2="9" />
  </svg>
);

const IconImage: React.FC<{ color?: string; size?: number }> = ({
  color = C.white,
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const IconUser: React.FC<{ color?: string; size?: number }> = ({
  color = C.white,
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconDatabase: React.FC<{ color?: string; size?: number }> = ({
  color = C.white,
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const IconServer: React.FC<{ color?: string; size?: number }> = ({
  color = C.white,
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const IconGlobe: React.FC<{ color?: string; size?: number }> = ({
  color = C.white,
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconCode: React.FC<{ color?: string; size?: number }> = ({
  color = C.white,
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

type NodeType = "black" | "gray";

const Node: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  type: NodeType;
  icon: React.ReactNode;
}> = ({ x, y, w, h, label, sub, type, icon }) => {
  const bg = type === "black" ? C.black : C.gray;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        backgroundColor: bg,
        borderRadius: 14,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      {icon}
      <span
        style={{
          color: C.white,
          fontSize: 12,
          fontWeight: 600,
          fontFamily: font,
          textAlign: "center",
          lineHeight: 1.3,
          maxWidth: w - 16,
        }}
      >
        {label}
      </span>
      {sub && (
        <span
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 9,
            fontFamily: font,
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: w - 16,
          }}
        >
          {sub}
        </span>
      )}
    </div>
  );
};

const CurvedArrow: React.FC<{
  d: string;
  dashed?: boolean;
  color?: string;
}> = ({ d, dashed = false, color = C.grayLight }) => (
  <svg
    style={{
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
    }}
  >
    <defs>
      <marker
        id="arrow"
        markerWidth="8"
        markerHeight="6"
        refX="7"
        refY="3"
        orient="auto"
      >
        <polygon points="0 0, 8 3, 0 6" fill={color} />
      </marker>
    </defs>
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeDasharray={dashed ? "6 4" : undefined}
      markerEnd="url(#arrow)"
    />
  </svg>
);

export const MnGalleryWorkflow: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.bg,
        fontFamily: font,
        overflow: "hidden",
      }}
    >
      {/* Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, ${C.grid} 1px, transparent 1px),
            linear-gradient(to bottom, ${C.grid} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.6,
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 44,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: C.black,
            margin: 0,
            letterSpacing: "-0.5px",
          }}
        >
          MN Gallery Workflow
        </h1>
        <p style={{ fontSize: 14, color: C.grayLight, margin: "8px 0 0 0" }}>
          From visitor to interactive gallery experience
        </p>
      </div>

      {/* ── VISITOR FLOW (TOP ROW) ── */}
      <div
        style={{
          position: "absolute",
          top: 150,
          left: 100,
          fontSize: 11,
          fontWeight: 700,
          color: C.grayLight,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        User Journey
      </div>

      <Node
        x={100}
        y={190}
        w={120}
        h={100}
        label="Visitor"
        sub="Lands on site"
        type="black"
        icon={<IconUser size={28} />}
      />

      <CurvedArrow d="M 220 240 L 285 240" />

      <Node
        x={295}
        y={190}
        w={130}
        h={100}
        label="Browse"
        sub="ME · TODAY? · SHINE! · TO US · ABOUT"
        type="gray"
        icon={<IconGrid size={28} />}
      />

      <CurvedArrow d="M 425 240 L 490 240" />

      <Node
        x={500}
        y={185}
        w={120}
        h={110}
        label="Shuffle"
        sub="Randomize layout"
        type="gray"
        icon={<IconShuffle size={28} />}
      />

      <CurvedArrow d="M 620 240 L 685 240" />

      <Node
        x={695}
        y={190}
        w={130}
        h={100}
        label="View Project"
        sub="Full-size artwork"
        type="gray"
        icon={<IconEye size={28} />}
      />

      <CurvedArrow d="M 825 240 L 890 240" />

      <Node
        x={900}
        y={190}
        w={120}
        h={100}
        label="About"
        sub="Artist contact"
        type="black"
        icon={<IconUser size={28} />}
      />

      {/* ── DATA FLOW (MIDDLE - vertical arrow down) ── */}
      <div
        style={{
          position: "absolute",
          top: 370,
          left: 100,
          fontSize: 11,
          fontWeight: 700,
          color: C.grayLight,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Data Layer
      </div>

      {/* Vertical arrow from Browse down to DB */}
      <CurvedArrow
        d="M 360 290 L 360 430"
        dashed
        color={C.border}
      />

      <Node
        x={260}
        y={440}
        w={150}
        h={100}
        label="Supabase"
        sub="Images + metadata"
        type="gray"
        icon={<IconDatabase size={28} />}
      />

      <CurvedArrow d="M 410 490 L 475 490" />

      <Node
        x={485}
        y={440}
        w={150}
        h={100}
        label="Category Filter"
        sub="ME · TODAY? · SHINE! · TO US · ABOUT"
        type="gray"
        icon={<IconGrid size={28} />}
      />

      {/* Arrow from DB up to Browse */}
      <CurvedArrow
        d="M 335 440 L 335 340"
        dashed
        color={C.border}
      />

      {/* ── INFRASTRUCTURE (BOTTOM ROW) ── */}
      <div
        style={{
          position: "absolute",
          top: 600,
          left: 100,
          fontSize: 11,
          fontWeight: 700,
          color: C.grayLight,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Infrastructure
      </div>

      <Node
        x={100}
        y={640}
        w={140}
        h={100}
        label="Vite + React"
        sub="Frontend build"
        type="gray"
        icon={<IconCode size={28} />}
      />

      <CurvedArrow d="M 240 690 L 305 690" />

      <Node
        x={315}
        y={640}
        w={120}
        h={100}
        label="Tailwind"
        sub="Stlying system"
        type="gray"
        icon={<IconCode size={28} />}
      />

      <CurvedArrow d="M 435 690 L 500 690" />

      <Node
        x={510}
        y={640}
        w={120}
        h={100}
        label="Vercel"
        sub="Hosting + CDN"
        type="gray"
        icon={<IconServer size={28} />}
      />

      <CurvedArrow d="M 630 690 L 695 690" />

      <Node
        x={705}
        y={640}
        w={140}
        h={100}
        label="Static Site"
        sub="Fast global delivery"
        type="gray"
        icon={<IconGlobe size={28} />}
      />

      <CurvedArrow d="M 845 690 L 900 690" dashed />

      <Node
        x={900}
        y={640}
        w={120}
        h={100}
        label="Visitor"
        sub="Any device"
        type="black"
        icon={<IconUser size={28} />}
      />

      {/* Vertical dashed connecting Data → Infra */}
      <CurvedArrow
        d="M 560 540 L 560 630"
        dashed
        color={C.border}
      />

      {/* ── Dashed container around the flow ── */}
      <div
        style={{
          position: "absolute",
          left: 70,
          top: 130,
          width: 1060,
          height: 660,
          border: `2px dashed ${C.border}`,
          borderRadius: 24,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
