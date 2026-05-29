import React from "react";
import { AbsoluteFill } from "remotion";

const C = {
  bg: "#FAF8F3",
  grid: "#EBE7DE",
  black: "#1A1A1A",
  gray: "#5C5C5C",
  grayLight: "#8A8A8A",
  orange: "#E06C00",
  white: "#FFFFFF",
  border: "#D5D0C5",
};

const font = "'Inter', 'Helvetica Neue', Arial, sans-serif";

/* ─── Icon helpers ─── */
const IconPlus: React.FC<{ color?: string; size?: number }> = ({ color = C.white, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconUpload: React.FC<{ color?: string; size?: number }> = ({ color = C.white, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const IconBrain: React.FC<{ color?: string; size?: number }> = ({ color = C.white, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const IconLink: React.FC<{ color?: string; size?: number }> = ({ color = C.white, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const IconStudent: React.FC<{ color?: string; size?: number }> = ({ color = C.white, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconChat: React.FC<{ color?: string; size?: number }> = ({ color = C.white, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconSearch: React.FC<{ color?: string; size?: number }> = ({ color = C.white, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconFileCheck: React.FC<{ color?: string; size?: number }> = ({ color = C.white, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="9 15 12 18 17 10" />
  </svg>
);

/* ─── Node Component ─── */
type NodeType = "black" | "gray" | "orange";

const Node: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  type: NodeType;
  icon: React.ReactNode;
}> = ({ x, y, w, h, label, type, icon }) => {
  const bg = type === "black" ? C.black : type === "orange" ? C.orange : C.gray;
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
        gap: 10,
        boxShadow: type === "orange" ? "0 12px 30px rgba(224,108,0,0.25)" : "0 8px 20px rgba(0,0,0,0.08)",
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
          maxWidth: w - 20,
        }}
      >
        {label}
      </span>
    </div>
  );
};

/* ─── Arrow ─── */
const Arrow: React.FC<{
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  dashed?: boolean;
  color?: string;
}> = ({ fromX, fromY, toX, toY, dashed = false, color = C.grayLight }) => {
  const dx = toX - fromX;
  const dy = toY - fromY;
  const len = Math.sqrt(dx * dx + dy * dy);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

  return (
    <div
      style={{
        position: "absolute",
        left: fromX,
        top: fromY,
        width: len,
        height: 2,
        backgroundColor: color,
        borderRadius: 1,
        transformOrigin: "0 50%",
        transform: `rotate(${angle}deg)`,
        borderTop: dashed ? `2px dashed ${color}` : undefined,
        background: dashed ? "transparent" : color,
      }}
    />
  );
};

/* ─── Curved Arrow (via SVG) ─── */
const CurvedArrow: React.FC<{
  d: string;
  dashed?: boolean;
  color?: string;
}> = ({ d, dashed = false, color = C.grayLight }) => (
  <svg
    style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", pointerEvents: "none" }}
  >
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill={color} />
      </marker>
    </defs>
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeDasharray={dashed ? "6 4" : undefined}
      markerEnd="url(#arrowhead)"
    />
  </svg>
);

/* ─── Main Workflow Diagram ─── */
export const AskhereWorkflow: React.FC = () => {
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
          top: 50,
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
          Askhere Workflow
        </h1>
        <p style={{ fontSize: 14, color: C.grayLight, margin: "8px 0 0 0" }}>
          From syllabus upload to sourced student answers
        </p>
      </div>

      {/* ── TEACHER ROW ── */}
      <div
        style={{
          position: "absolute",
          top: 160,
          left: 100,
          fontSize: 11,
          fontWeight: 700,
          color: C.grayLight,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Teacher
      </div>

      {/* Teacher start */}
      <Node x={100} y={200} w={120} h={100} label="Teacher" type="black" icon={<IconStudent size={28} />} />

      {/* Arrow 1 */}
      <CurvedArrow d="M 220 250 L 290 250" />

      {/* Create class */}
      <Node x={300} y={200} w={120} h={100} label="Create Class" type="gray" icon={<IconPlus size={28} />} />

      {/* Arrow 2 */}
      <CurvedArrow d="M 420 250 L 490 250" />

      {/* Upload materials */}
      <Node x={500} y={200} w={140} h={100} label="Upload Materials" type="gray" icon={<IconUpload size={28} />} />

      {/* Arrow 3 */}
      <CurvedArrow d="M 640 250 L 710 250" />

      {/* Askhere System (orange) */}
      <Node x={720} y={190} w={140} h={120} label="Askhere AI" type="orange" icon={<IconBrain size={32} />} />

      {/* Arrow 4 - down to embeddings */}
      <CurvedArrow d="M 790 310 L 790 370" dashed />

      {/* Generate embeddings */}
      <Node x={720} y={380} w={140} h={100} label="Embed & Index" type="gray" icon={<IconFileCheck size={28} />} />

      {/* Arrow 5 - right to share link */}
      <CurvedArrow d="M 860 430 L 930 430" />

      {/* Share link */}
      <Node x={940} y={380} w={140} h={100} label="Share Link" type="gray" icon={<IconLink size={28} />} />

      {/* ── STUDENT ROW ── */}
      <div
        style={{
          position: "absolute",
          top: 540,
          left: 100,
          fontSize: 11,
          fontWeight: 700,
          color: C.grayLight,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Student
      </div>

      {/* Arrow from share link down */}
      <CurvedArrow d="M 1010 480 L 1010 580" dashed color={C.border} />

      {/* Student opens link */}
      <Node x={940} y={580} w={140} h={100} label="Open Link" type="gray" icon={<IconStudent size={28} />} />

      {/* Arrow left */}
      <CurvedArrow d="M 940 630 L 870 630" />

      {/* Ask question */}
      <Node x={720} y={580} w={140} h={100} label="Ask Question" type="gray" icon={<IconChat size={28} />} />

      {/* Arrow left */}
      <CurvedArrow d="M 720 630 L 650 630" />

      {/* Vector search */}
      <Node x={500} y={580} w={140} h={100} label="Vector Search" type="gray" icon={<IconSearch size={28} />} />

      {/* Arrow left */}
      <CurvedArrow d="M 500 630 L 430 630" />

      {/* Sourced answer */}
      <Node x={300} y={580} w={120} h={100} label="Answer + Source" type="gray" icon={<IconFileCheck size={28} />} />

      {/* Arrow left */}
      <CurvedArrow d="M 300 630 L 230 630" />

      {/* Student receives */}
      <Node x={100} y={580} w={120} h={100} label="Student" type="black" icon={<IconStudent size={28} />} />

      {/* ── Center return arrow (from AI up top to vector search) ── */}
      <CurvedArrow d="M 790 480 L 790 520" dashed color={C.orange} />
      <CurvedArrow d="M 790 520 L 570 520 L 570 580" dashed color={C.orange} />

      {/* ── Dashed container around the flow ── */}
      <div
        style={{
          position: "absolute",
          left: 70,
          top: 140,
          width: 1060,
          height: 580,
          border: `2px dashed ${C.border}`,
          borderRadius: 24,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
