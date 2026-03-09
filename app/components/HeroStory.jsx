"use client";

import { useState, useEffect } from "react";

const mono = "var(--font-outfit), sans-serif";
const serif = "var(--font-outfit), sans-serif";

const blocks = [
  { id: "marketing", label: "Marketing", icon: "📣", messX: 6, messY: 8, messRot: -6, fixX: 12, fixY: 25, friction: "No attribution", fix: "Full attribution" },
  { id: "sales", label: "Sales", icon: "🤝", messX: 74, messY: 5, messRot: 4, fixX: 12, fixY: 50, friction: "Flying blind", fix: "Pipeline visibility" },
  { id: "crm", label: "CRM", icon: "🗄️", messX: 38, messY: 52, messRot: -3, fixX: 50, fixY: 50, friction: "Half-empty", fix: "Auto-synced" },
  { id: "content", label: "Content", icon: "✏️", messX: 3, messY: 72, messRot: 8, fixX: 12, fixY: 75, friction: "Sitting unused", fix: "Fueling pipeline" },
  { id: "data", label: "Data", icon: "📊", messX: 82, messY: 58, messRot: -5, fixX: 88, fixY: 25, friction: "Spreadsheet chaos", fix: "Real-time dashboards" },
  { id: "sequences", label: "Sequences", icon: "✉️", messX: 58, messY: 15, messRot: 7, fixX: 88, fixY: 50, friction: "Manual follow-ups", fix: "Automated" },
  { id: "reporting", label: "Reporting", icon: "📈", messX: 25, messY: 82, messRot: -8, fixX: 88, fixY: 75, friction: "Nobody reads them", fix: "Actionable insights" },
];

const clutter = [
  { label: "Old spreadsheet", icon: "📋", x: 22, y: 15, rot: -8 },
  { label: "Sticky note", icon: "🟨", x: 88, y: 28, rot: 12 },
  { label: "Forgotten deck", icon: "📑", x: 50, y: 5, rot: -4 },
  { label: "Rogue email list", icon: "📧", x: 15, y: 42, rot: 6 },
  { label: "Dead lead list", icon: "💀", x: 68, y: 72, rot: -10 },
  { label: "Duplicate contacts", icon: "👥", x: 45, y: 35, rot: 15 },
  { label: "Broken integration", icon: "🔌", x: 78, y: 42, rot: -6 },
  { label: "Manual CSV export", icon: "📤", x: 58, y: 82, rot: 8 },
  { label: "Mystery pipeline", icon: "❓", x: 32, y: 65, rot: -12 },
  { label: "Vanity metrics", icon: "🎭", x: 8, y: 55, rot: 5 },
  { label: "No follow-up", icon: "😶", x: 65, y: 38, rot: -3 },
  { label: "Outdated website", icon: "🕸️", x: 90, y: 82, rot: 9 },
];

const flowConnections = [
  { from: { x: 12, y: 25 }, to: { x: 12, y: 50 } },
  { from: { x: 12, y: 50 }, to: { x: 12, y: 75 } },
  { from: { x: 12, y: 25 }, to: { x: 50, y: 50 } },
  { from: { x: 12, y: 50 }, to: { x: 50, y: 50 } },
  { from: { x: 12, y: 75 }, to: { x: 50, y: 50 } },
  { from: { x: 50, y: 50 }, to: { x: 88, y: 25 } },
  { from: { x: 50, y: 50 }, to: { x: 88, y: 50 } },
  { from: { x: 50, y: 50 }, to: { x: 88, y: 75 } },
  { from: { x: 88, y: 25 }, to: { x: 88, y: 50 } },
  { from: { x: 88, y: 50 }, to: { x: 88, y: 75 } },
];

function Block({ block, phase }) {
  const isMess = phase === "mess";
  const x = isMess ? block.messX : block.fixX;
  const y = isMess ? block.messY : block.fixY;
  const rot = isMess ? block.messRot : 0;
  const isCenter = block.id === "crm";
  return (
    <div className="story-block" style={{
      position: "absolute", left: `${x}%`, top: `${y}%`,
      transform: `translate(-50%, -50%) rotate(${rot}deg)`,
      transition: "all 2s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: isCenter && !isMess ? 5 : 2,
    }}>
      <div style={{
        background: "#fff",
        border: isMess ? "2px solid #e2e0dc" : (isCenter ? "3px solid #1a1a1f" : "2px solid rgba(45,147,108,0.3)"),
        borderRadius: isCenter && !isMess ? 16 : 12,
        padding: isCenter && !isMess ? "18px 24px" : "14px 18px",
        boxShadow: isMess ? "0 2px 6px rgba(0,0,0,0.03)" : (isCenter ? "0 8px 30px rgba(0,0,0,0.1)" : "0 4px 16px rgba(45,147,108,0.08)"),
        textAlign: "center", minWidth: isCenter && !isMess ? 140 : 110,
        transition: "all 1.6s ease",
      }}>
        <div style={{ fontSize: isCenter && !isMess ? 28 : 24, marginBottom: 6 }}>{block.icon}</div>
        <div style={{ fontFamily: mono, fontSize: isCenter && !isMess ? 12 : 10, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "#1a1a1f", marginBottom: 6 }}>{block.label}</div>
        <div style={{ fontFamily: mono, fontSize: 8, fontWeight: 700, letterSpacing: 0.8, padding: "3px 8px", borderRadius: 10, background: isMess ? "rgba(230,57,70,0.08)" : "rgba(45,147,108,0.08)", color: "#fff", transition: "all 1s ease 1s", whiteSpace: "nowrap" }}>
          {isMess ? `⚠ ${block.friction}` : `✓ ${block.fix}`}
        </div>
      </div>
      {!isMess && block.fixX === 12 && block.fixY === 25 && (
        <div className="col-label" style={{ position: "absolute", top: -28, left: "50%", transform: "translateX(-50%)", fontFamily: mono, fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: "#8a8a95", fontWeight: 700, whiteSpace: "nowrap" }}>Inputs</div>
      )}
      {!isMess && block.id === "crm" && (
        <div className="col-label" style={{ position: "absolute", top: -28, left: "50%", transform: "translateX(-50%)", fontFamily: mono, fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: "#8a8a95", fontWeight: 700, whiteSpace: "nowrap" }}>Hub</div>
      )}
      {!isMess && block.fixX === 88 && block.fixY === 25 && (
        <div className="col-label" style={{ position: "absolute", top: -28, left: "50%", transform: "translateX(-50%)", fontFamily: mono, fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: "#8a8a95", fontWeight: 700, whiteSpace: "nowrap" }}>Outputs</div>
      )}
    </div>
  );
}

function ClutterItem({ item, phase }) {
  const isMess = phase === "mess";
  return (
    <div className="clutter-item" style={{
      position: "absolute", left: `${item.x}%`, top: `${item.y}%`,
      transform: `translate(-50%, -50%) rotate(${item.rot}deg) scale(${isMess ? 1 : 0})`,
      opacity: isMess ? 1 : 0, transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: 1, pointerEvents: "none",
    }}>
      <div style={{ background: "rgba(255,255,255,0.85)", border: "1.5px dashed #d4d2ce", borderRadius: 8, padding: "8px 12px", textAlign: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.03)" }}>
        <div style={{ fontSize: 16, marginBottom: 2 }}>{item.icon}</div>
        <div style={{ fontFamily: mono, fontSize: 7, fontWeight: 600, color: "#aaa", letterSpacing: 0.5, whiteSpace: "nowrap" }}>{item.label}</div>
      </div>
    </div>
  );
}

function FlowLines({ phase }) {
  const isFix = phase === "fix";
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}>
      <defs>
        <marker id="flowArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 L1.5,3 Z" fill="rgba(45,147,108,0.4)" />
        </marker>
      </defs>
      {flowConnections.map((conn, i) => (
        <line key={i} x1={`${conn.from.x}%`} y1={`${conn.from.y}%`} x2={`${conn.to.x}%`} y2={`${conn.to.y}%`}
          stroke="rgba(45,147,108,0.2)" strokeWidth={2} markerEnd="url(#flowArrow)"
          style={{ opacity: isFix ? 1 : 0, transition: `opacity 0.8s ease ${1 + i * 0.12}s` }} />
      ))}
    </svg>
  );
}

function PhaseLabel({ phase }) {
  const isMess = phase === "mess";
  return (
    <div style={{ position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
      <div className="phase-label" style={{
        fontFamily: mono, fontSize: 16, fontWeight: 800, letterSpacing: 4,
        textTransform: "uppercase", padding: "12px 32px", borderRadius: 24,
        background: isMess ? "#E63946" : "#2D936C", color: "#fff", border: "none",
        transition: "all 0.8s ease",
      }}>
        {isMess ? "⚡ Before RevenueWolf" : "✦ After RevenueWolf"}
      </div>
    </div>
  );
}

export default function HeroStory() {
  const [phase, setPhase] = useState("mess");
  useEffect(() => {
    let t1, t2;
    const cycle = () => {
      setPhase("mess");
      t1 = setTimeout(() => setPhase("fix"), 4500);
      t2 = setTimeout(() => cycle(), 10000);
    };
    cycle();
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section style={{ background: "#F8F7F5", width: "100%", padding: "80px 24px 60px" }}>
      <style>{`
        
        * { box-sizing: border-box; } body { margin: 0; }
        @media (max-width: 768px) {
          .story-container { height: 320px !important; }
          .story-inner { transform: scale(0.5); transform-origin: top left; width: 200%; height: 200%; }
          .phase-label { font-size: 11px !important; padding: 8px 18px !important; letter-spacing: 2px !important; }
          .story-stats { gap: 12px !important; flex-wrap: wrap !important; padding: 8px 12px !important; }
          .story-stats > div { flex: 1 1 40% !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="story-container" style={{
          position: "relative", width: "100%", height: 560,
          background: "#fff", borderRadius: 16, border: "1.5px solid #e8e6e2",
          boxShadow: "0 4px 24px rgba(0,0,0,0.04)", overflow: "hidden",
        }}>
          <PhaseLabel phase={phase} />
          <div className="story-inner" style={{ position: "absolute", inset: 0 }}>
            <FlowLines phase={phase} />
            {clutter.map((item, i) => (<ClutterItem key={i} item={item} phase={phase} />))}
            {blocks.map((block) => (<Block key={block.id} block={block} phase={phase} />))}
          </div>

          <div className="story-stats" style={{
            position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 24px",
            background: phase === "mess" ? "rgba(230,57,70,0.02)" : "rgba(45,147,108,0.02)",
            borderTop: "1px solid #e8e6e2", display: "flex", justifyContent: "center", gap: 40,
            transition: "all 1s ease", flexWrap: "wrap",
          }}>
            {[
              { label: "Tools connected", mess: "2 of 7", fix: "7 of 7" },
              { label: "Manual tasks / week", mess: "40+", fix: "3" },
              { label: "Lead response time", mess: "48 hrs", fix: "< 5 min" },
              { label: "Pipeline visibility", mess: "Low", fix: "Real-time" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", color: "#8a8a95", fontWeight: 700, marginBottom: 3 }}>{stat.label}</div>
                <div style={{ fontFamily: mono, fontSize: 16, fontWeight: 800, color: phase === "mess" ? "#E63946" : "#2D936C", transition: "all 0.8s ease 0.6s" }}>
                  {phase === "mess" ? stat.mess : stat.fix}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
