"use client";
import { useState } from "react";

const pillars = [
  { id: "strategy", label: "Strategy", tagline: "Define your market, your message, and your motion.", missing: "Without it, you're guessing where to aim.", icon: "◎", angle: 270 },
  { id: "architecture", label: "Architecture", tagline: "Design the system — CRM, tech stack, data model, workflows.", missing: "Without it, your tools fight each other.", icon: "⬡", angle: 330 },
  { id: "engineering", label: "Engineering", tagline: "Build it. Automations, integrations, AI agents, implementation.", missing: "Without it, the blueprint gathers dust.", icon: "⚙", angle: 30 },
  { id: "enablement", label: "Enablement", tagline: "Train the team. Playbooks, SOPs, adoption, change management.", missing: "Without it, your team ignores the system.", icon: "△", angle: 90 },
  { id: "operations", label: "Operations", tagline: "Run it daily. Campaigns, pipeline, sequences, execution.", missing: "Without it, nothing actually ships.", icon: "▶", angle: 150 },
  { id: "intelligence", label: "Intelligence", tagline: "Measure what matters. Attribution, forecasting, feedback loops.", missing: "Without it, you can't learn or improve.", icon: "◈", angle: 210 },
];

const assessmentQuestions = [
  { pillar: "Strategy", question: "Do you have a documented ICP and go-to-market plan that your team actually follows?" },
  { pillar: "Architecture", question: "Is your CRM and tech stack intentionally designed, or did it just... happen?" },
  { pillar: "Engineering", question: "Are your key workflows automated, or is your team doing manual work that a machine should handle?" },
  { pillar: "Enablement", question: "Does your team have playbooks and SOPs, or does everyone just figure it out?" },
  { pillar: "Operations", question: "Is someone actively managing campaigns, pipeline, and sequences every day?" },
  { pillar: "Intelligence", question: "Can you tell me right now which channel drives the most revenue and why?" },
];

const ratingOptions = [
  { label: "Not at all", value: 1, color: "#E63946" },
  { label: "Barely", value: 2, color: "#FF6B6B" },
  { label: "Somewhat", value: 3, color: "#FFB347" },
  { label: "Mostly", value: 4, color: "#88B04B" },
  { label: "Fully", value: 5, color: "#2D936C" },
];

function FlywheelView({ active, setActive }) {
  const size = 640;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 235;
  const nodeR = 72;

  // Calculate the angular size of a node from center perspective
  const nodeAngularSize = Math.atan2(nodeR, radius) * (180 / Math.PI);

  // Build clockwise arc arrows — start/end offset so arrows sit in the gap between nodes
  const arcs = pillars.map((p, i) => {
    const next = pillars[(i + 1) % 6];
    // Offset by enough degrees to clear the node circles
    const gapStart = p.angle + nodeAngularSize + 5;
    const gapEnd = next.angle - nodeAngularSize - 5;

    const a1 = gapStart * (Math.PI / 180);
    const a2 = gapEnd * (Math.PI / 180);
    const x1 = cx + radius * Math.cos(a1);
    const y1 = cy + radius * Math.sin(a1);
    const x2 = cx + radius * Math.cos(a2);
    const y2 = cy + radius * Math.sin(a2);

    // Midpoint for the chevron arrow
    const midAngle = ((gapStart + gapEnd) / 2 + (gapEnd < gapStart ? 180 : 0)) * (Math.PI / 180);
    const mx = cx + radius * Math.cos(midAngle);
    const my = cy + radius * Math.sin(midAngle);
    // Direction tangent (clockwise)
    const tangentAngle = midAngle + Math.PI / 2;
    const arrowSize = 10;

    return { x1, y1, x2, y2, mx, my, tangentAngle, arrowSize, id: `arc-${i}` };
  });

  return (
    <div style={{ position: "relative", width: size, height: size, margin: "0 auto" }}>
      <svg width={size} height={size} style={{ position: "absolute", top: 0, left: 0 }}>
        <defs>
          <marker id="arrowhead" markerWidth="12" markerHeight="10" refX="10" refY="5" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L12,5 L0,10 L3,5 Z" fill="#E63946" />
          </marker>
        </defs>

        {/* Clockwise arc arrows between nodes */}
        {arcs.map((a) => (
          <path
            key={a.id}
            d={`M ${Math.round(a.x1)} ${Math.round(a.y1)} A ${radius} ${radius} 0 0 1 ${Math.round(a.x2)} ${Math.round(a.y2)}`}
            fill="none"
            stroke="#E63946"
            strokeWidth="3.5"
            strokeDasharray="0"
            markerEnd="url(#arrowhead)"
            opacity="0.35"
          />
        ))}

        {/* Center text */}
        <text x={cx} y={cy - 18} textAnchor="middle" fill="#E63946" fontSize="22" fontFamily="'JetBrains Mono', monospace" letterSpacing="6" fontWeight="800">GTM</text>
        <text x={cx} y={cy + 6} textAnchor="middle" fill="rgba(0,0,0,0.3)" fontSize="12" fontFamily="'JetBrains Mono', monospace" letterSpacing="4" fontWeight="700">OPERATING</text>
        <text x={cx} y={cy + 24} textAnchor="middle" fill="rgba(0,0,0,0.3)" fontSize="12" fontFamily="'JetBrains Mono', monospace" letterSpacing="4" fontWeight="700">SYSTEM</text>
      </svg>

      {pillars.map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        const x = cx + radius * Math.cos(rad);
        const y = cy + radius * Math.sin(rad);
        const isActive = active === p.id;
        return (
          <button key={p.id} onClick={() => setActive(isActive ? null : p.id)}
            style={{
              position: "absolute",
              left: x - nodeR,
              top: y - nodeR,
              width: nodeR * 2,
              height: nodeR * 2,
              borderRadius: "50%",
              background: isActive ? "rgba(230,57,70,0.07)" : "#ffffff",
              border: isActive ? "4px solid #E63946" : "4px solid #d4d2ce",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              boxShadow: isActive ? "0 4px 24px rgba(230,57,70,0.2)" : "0 2px 10px rgba(0,0,0,0.06)",
              zIndex: isActive ? 10 : 2,
              padding: 0, fontFamily: "inherit",
            }}>
            <span style={{ fontSize: 34, lineHeight: 1, marginBottom: 6 }}>{p.icon}</span>
            <span style={{
              fontSize: 12, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 2,
              color: isActive ? "#E63946" : "#1a1a1f", fontWeight: 800, textTransform: "uppercase",
              transition: "color 0.3s",
            }}>{p.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function DetailCard({ pillar }) {
  if (!pillar) return (
    <div style={{ textAlign: "center", padding: "36px 24px", color: "#8a8a95",
      fontFamily: "'JetBrains Mono', monospace", fontSize: 14, letterSpacing: 1.5, minHeight: 110, fontWeight: 500 }}>
      ← Click a layer to explore →
    </div>
  );
  const p = pillars.find((x) => x.id === pillar);
  return (
    <div style={{ padding: "32px 36px", background: "#fff", border: "2px solid rgba(230,57,70,0.2)",
      borderRadius: 6, minHeight: 110, maxWidth: 680, margin: "0 auto",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)", animation: "fadeIn 0.3s ease" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
        <span style={{ fontSize: 28 }}>{p.icon}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 15, letterSpacing: 3,
          color: "#E63946", fontWeight: 800, textTransform: "uppercase" }}>GTM {p.label}</span>
      </div>
      <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 20, lineHeight: 1.6,
        color: "#1a1a1f", margin: "0 0 12px 0", fontWeight: 600 }}>{p.tagline}</p>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#C1272D",
        margin: 0, letterSpacing: 0.5, fontWeight: 500, opacity: 0.75 }}>{p.missing}</p>
    </div>
  );
}

function AssessmentForm() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState("questions");
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [sending, setSending] = useState(false);

  const answered = Object.keys(answers).length;
  const total = assessmentQuestions.length;
  const avgScore = answered > 0 ? Object.values(answers).reduce((a, b) => a + b, 0) / answered : 0;

  const getVerdict = () => {
    if (avgScore <= 2) return { text: "Your GTM system has critical gaps. Let\u2019s talk.", color: "#E63946" };
    if (avgScore <= 3.5) return { text: "You\u2019ve got pieces, but the system isn\u2019t connected. There\u2019s upside here.", color: "#FFB347" };
    return { text: "Solid foundation. Let\u2019s find the leverage points.", color: "#2D936C" };
  };

  const buildScoreSummary = () => assessmentQuestions.map((q, i) => {
    const val = answers[i] || 0;
    return `${q.pillar}: ${val}/5 (${ratingOptions[val - 1]?.label || "N/A"})`;
  }).join("\n");

  const handleCapture = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("https://formspree.io/f/xreybelw", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `GTM Assessment: ${formData.name} (${avgScore.toFixed(1)}/5)`,
          name: formData.name, email: formData.email, company: formData.company,
          gtm_score: avgScore.toFixed(1), scores: buildScoreSummary(), source: "GTM Assessment",
        }),
      });
    } catch (err) {}
    setSending(false);
    setStep("done");
    setTimeout(() => { window.open("https://calendly.com/chris-revenuewolf/30min", "_blank"); }, 1500);
  };

  const inputStyle = {
    width: "100%", padding: "14px 18px", fontFamily: "'Source Serif 4', Georgia, serif",
    fontSize: 16, color: "#1a1a1f", background: "#fff", border: "2px solid #e2e0dc",
    borderRadius: 4, outline: "none", transition: "all 0.25s", boxSizing: "border-box",
  };
  const labelStyle = {
    display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
    letterSpacing: 2, textTransform: "uppercase", color: "#8a8a95", marginBottom: 8, fontWeight: 600,
  };
  const btnPrimary = {
    fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: 3,
    textTransform: "uppercase", background: "#E63946", border: "none", color: "#fff",
    padding: "16px 40px", cursor: "pointer", borderRadius: 3, fontWeight: 800,
  };
  const btnGhost = {
    fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 2.5,
    textTransform: "uppercase", background: "none", border: "2px solid #e2e0dc",
    color: "#8a8a95", padding: "12px 28px", cursor: "pointer", borderRadius: 3, fontWeight: 700, marginRight: 12,
  };

  if (step === "done") return (
    <div style={{ textAlign: "center", padding: "56px 24px", animation: "fadeIn 0.4s ease" }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: 4, color: "#8a8a95", marginBottom: 18, textTransform: "uppercase", fontWeight: 700 }}>You're All Set</div>
      <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 20, color: "#1a1a1f", maxWidth: 440, margin: "16px auto 0", lineHeight: 1.5, fontWeight: 600 }}>
        Your results have been sent and Calendly should be opening now.
        If it didn't open, <a href="https://calendly.com/chris-revenuewolf/30min" target="_blank" rel="noopener noreferrer" style={{ color: "#E63946", textDecoration: "underline" }}>click here to book your call</a>.
      </p>
    </div>
  );

  if (step === "capture") return (
    <div style={{ animation: "fadeIn 0.4s ease" }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: 4, color: "#E63946", textTransform: "uppercase", marginBottom: 16, fontWeight: 700 }}>One Last Step</div>
        <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 18, color: "#4a4a55", maxWidth: 420, margin: "0 auto", lineHeight: 1.6 }}>
          Tell us who you are so we can come prepared with ideas specific to your gaps.
        </p>
      </div>
      <form onSubmit={handleCapture} style={{ maxWidth: 420, margin: "0 auto" }}>
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Name</label>
          <input style={inputStyle} type="text" required placeholder="Your name" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Email</label>
          <input style={inputStyle} type="email" required placeholder="you@company.com" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Company</label>
          <input style={inputStyle} type="text" placeholder="Your company" value={formData.company} onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))} />
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28 }}>
          <button type="button" style={btnGhost} onClick={() => setStep("results")}>Back</button>
          <button type="submit" style={{ ...btnPrimary, opacity: sending ? 0.5 : 1 }} disabled={sending}>{sending ? "Sending..." : "Submit & Book a Call →"}</button>
        </div>
      </form>
    </div>
  );

  if (step === "results") {
    const verdict = getVerdict();
    return (
      <div style={{ textAlign: "center", padding: "56px 24px" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: 4, color: "#8a8a95", marginBottom: 18, textTransform: "uppercase", fontWeight: 700 }}>Your GTM Score</div>
        <div style={{ fontSize: 72, fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, lineHeight: 1, marginBottom: 18, color: verdict.color }}>
          {avgScore.toFixed(1)}<span style={{ fontSize: 28, color: "#8a8a95" }}>/5</span>
        </div>
        <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 20, color: "#1a1a1f", maxWidth: 440, margin: "0 auto 36px", lineHeight: 1.5, fontWeight: 600 }}>{verdict.text}</p>
        <div style={{ maxWidth: 440, margin: "0 auto 36px" }}>
          {assessmentQuestions.map((q, i) => {
            const val = answers[i] || 0;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 2, color: "#8a8a95", width: 110, textAlign: "right", textTransform: "uppercase", fontWeight: 600 }}>{q.pillar}</span>
                <div style={{ flex: 1, height: 8, background: "#e2e0dc", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ width: `${(val / 5) * 100}%`, height: "100%", background: ratingOptions[val - 1]?.color || "#333", borderRadius: 4, transition: "width 0.5s ease" }} />
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, width: 24, textAlign: "right", fontWeight: 700, color: ratingOptions[val - 1]?.color || "#555" }}>{val}</span>
              </div>
            );
          })}
        </div>
        <div>
          <button style={btnGhost} onClick={() => { setStep("questions"); setAnswers({}); }}>Retake</button>
          <button style={btnPrimary} onClick={() => setStep("capture")}>Let's Fix This →</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 36 }}>
        <span style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: 2.5, color: "#8a8a95", textTransform: "uppercase", marginBottom: 10, fontWeight: 600 }}>{answered} of {total} answered</span>
        <div style={{ height: 3, background: "#e2e0dc", borderRadius: 2 }}>
          <div style={{ height: "100%", width: `${(answered / total) * 100}%`, background: "#E63946", borderRadius: 2, transition: "width 0.4s ease" }} />
        </div>
      </div>
      {assessmentQuestions.map((q, qi) => (
        <div key={qi} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: qi < total - 1 ? "2px solid #e2e0dc" : "none" }}>
          <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: 2.5, color: "#E63946", fontWeight: 700, textTransform: "uppercase", minWidth: 110, paddingTop: 3 }}>{q.pillar}</span>
            <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 18, color: "#1a1a1f", margin: 0, lineHeight: 1.5, fontWeight: 500 }}>{q.question}</p>
          </div>
          <div style={{ display: "flex", gap: 8, marginLeft: 124 }}>
            {ratingOptions.map((opt) => (
              <button key={opt.value} onClick={() => setAnswers((prev) => ({ ...prev, [qi]: opt.value }))}
                style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: 1.2, padding: "9px 16px",
                  borderRadius: 3, cursor: "pointer", transition: "all 0.25s", textTransform: "uppercase",
                  border: answers[qi] === opt.value ? `2px solid ${opt.color}` : "2px solid #e2e0dc",
                  background: answers[qi] === opt.value ? `${opt.color}15` : "#fff",
                  color: answers[qi] === opt.value ? opt.color : "#8a8a95",
                  fontWeight: answers[qi] === opt.value ? 700 : 600,
                }}>
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ))}
      {answered === total && (
        <div style={{ textAlign: "center", paddingTop: 12, animation: "fadeIn 0.4s ease" }}>
          <button style={btnPrimary} onClick={() => setStep("results")}>See My Score →</button>
        </div>
      )}
    </div>
  );
}

export default function GTMFramework() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ background: "#F8F7F5", fontFamily: "'Source Serif 4', Georgia, serif", color: "#1a1a1f", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; }
        body { margin: 0; }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: 5, color: "#E63946", textTransform: "uppercase", marginBottom: 24, fontWeight: 700 }}>The Framework</div>
          <h2 style={{ fontSize: 44, fontWeight: 800, margin: "0 0 20px 0", lineHeight: 1.1, letterSpacing: -0.5 }}>The GTM Operating System</h2>
          <p style={{ fontSize: 20, lineHeight: 1.6, color: "#8a8a95", maxWidth: 560, margin: "0 auto" }}>Six layers. One system. Most B2B companies are running on three or fewer. Here's what the full machine looks like.</p>
        </div>

        <div style={{ marginBottom: 40 }}>
          <FlywheelView active={active} setActive={setActive} />
        </div>

        <div style={{ marginBottom: 72 }}>
          <DetailCard pillar={active} />
        </div>

        <div style={{ textAlign: "center", padding: "48px 0", borderTop: "2px solid #e2e0dc", borderBottom: "2px solid #e2e0dc", marginBottom: 72 }}>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 22, fontStyle: "italic", color: "#4a4a55", lineHeight: 1.7, maxWidth: 600, margin: "0 auto", fontWeight: 600 }}>
            Strategy without engineering is a slideshow.<br />
            Engineering without intelligence is a guess.<br />
            <span style={{ color: "#E63946" }}>The system works when all six layers work together.</span>
          </p>
        </div>

        <div style={{ marginBottom: 72 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: 5, color: "#E63946", textTransform: "uppercase", marginBottom: 24, fontWeight: 700 }}>Find Your Gaps</div>
            <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 14px 0", lineHeight: 1.2 }}>How Complete Is Your GTM System?</h2>
            <p style={{ fontSize: 18, color: "#8a8a95", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>Six questions. Sixty seconds. Find out which layers are working and which ones are costing you revenue.</p>
          </div>
          <AssessmentForm />
        </div>

        <div style={{ textAlign: "center", paddingTop: 36, borderTop: "2px solid #e2e0dc", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 4, color: "#8a8a95", textTransform: "uppercase", fontWeight: 600 }}>
          RevenueWolf — The GTM Operating System
        </div>
      </div>
    </div>
  );
}
