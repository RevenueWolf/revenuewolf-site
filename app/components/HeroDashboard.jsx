"use client";

import { useState, useEffect } from "react";

const mono = "'JetBrains Mono', monospace";

function Card({ label, dot, children }) {
  return (
    <div style={{
      background: "#ffffff", borderRadius: 12, padding: 20,
      border: "1px solid #e8e6e2", boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
      overflow: "hidden", aspectRatio: "1.15 / 1",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: dot, boxShadow: `0 0 6px ${dot}35` }} />
        <span style={{ fontSize: 14, fontFamily: mono, fontWeight: 800, color: "#1a1a1f", letterSpacing: 2.5, textTransform: "uppercase" }}>{label}</span>
      </div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}

function KPIs() {
  const [v, setV] = useState({ pipeline: 842, leads: 312, meetings: 14, winRate: 34 });
  useEffect(() => {
    const t = setInterval(() => setV((p) => ({
      pipeline: p.pipeline >= 1400 ? 842 : p.pipeline + Math.floor(Math.random() * 25 + 10),
      leads: p.leads >= 500 ? 312 : p.leads + Math.floor(Math.random() * 5 + 1),
      meetings: p.meetings >= 32 ? 14 : p.meetings + 1,
      winRate: p.winRate >= 52 ? 34 : Math.round((p.winRate + Math.random() * 1.2) * 10) / 10,
    })), 2800);
    return () => clearInterval(t);
  }, []);
  const items = [
    { label: "Pipeline", val: `$${v.pipeline}k`, up: "+18%" },
    { label: "New Leads", val: v.leads, up: "+24%" },
    { label: "Meetings", val: v.meetings, up: "+31%" },
    { label: "Win Rate", val: `${v.winRate}%`, up: "+6%" },
  ];
  return (
    <Card label="Key Metrics" dot="#E63946">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {items.map((k) => (
          <div key={k.label} style={{ background: "#F8F7F5", borderRadius: 8, padding: "10px 12px" }}>
            <div style={{ fontSize: 8, fontFamily: mono, letterSpacing: 1.5, color: "#8a8a95", textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>{k.label}</div>
            <div style={{ fontSize: 20, fontFamily: mono, fontWeight: 800, color: "#1a1a1f", transition: "all 0.4s" }}>{k.val}</div>
            <div style={{ fontSize: 9, fontFamily: mono, fontWeight: 700, color: "#2D936C", marginTop: 2 }}>▲ {k.up}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function PipelineCard() {
  const stages = ["Qualified", "Proposal", "Negotiation", "Won"];
  const deals = [{ n: "Acme Mfg", v: "$48k" }, { n: "Delta Supply", v: "$32k" }, { n: "Summit Dist.", v: "$67k" }, { n: "Orion Parts", v: "$25k" }];
  const [pos, setPos] = useState(deals.map(() => 0));
  useEffect(() => {
    const t = setInterval(() => setPos((p) => { const n = [...p]; const i = Math.floor(Math.random() * n.length); n[i] = n[i] < 3 ? n[i] + 1 : 0; return n; }), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <Card label="Pipeline" dot="#2D936C">
      <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
        {stages.map((s, i) => <div key={s} style={{ flex: 1, textAlign: "center", fontSize: 8, fontFamily: mono, letterSpacing: 1, color: i === 3 ? "#2D936C" : "#8a8a95", textTransform: "uppercase", fontWeight: 700 }}>{s}</div>)}
      </div>
      {deals.map((d, di) => (
        <div key={di} style={{ display: "flex", gap: 6, marginBottom: 5 }}>
          {stages.map((_, si) => (
            <div key={si} style={{ flex: 1, minHeight: 28 }}>
              {pos[di] === si && (
                <div style={{ background: si === 3 ? "rgba(45,147,108,0.08)" : "#F8F7F5", border: si === 3 ? "1.5px solid rgba(45,147,108,0.2)" : "1.5px solid #e8e6e2", borderRadius: 5, padding: "4px 6px", animation: "fadeIn 0.3s ease" }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: si === 3 ? "#2D936C" : "#1a1a1f", fontFamily: mono }}>{d.n}</div>
                  <div style={{ fontSize: 8, color: "#8a8a95", fontFamily: mono }}>{d.v}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </Card>
  );
}

function Enrichment() {
  const data = [
    { co: "Rayfield Inc.", name: "Sarah Chen", score: 92 },
    { co: "Nova Systems", name: "Mike Torres", score: 87 },
    { co: "Titan Group", name: "James Ward", score: 95 },
    { co: "Apex MRO", name: "Dana Lee", score: 84 },
    { co: "ClearPath", name: "Rob Finch", score: 91 },
  ];
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(data.map(() => 0));
  useEffect(() => {
    const t = setInterval(() => setRows((v) => { if (v >= data.length) { setTimeout(() => { setRows(0); setCols(data.map(() => 0)); }, 1500); return v; } return v + 1; }), 900);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => setCols((p) => { const n = [...p]; for (let i = 0; i < rows; i++) { if (n[i] < 2) { n[i]++; break; } } return n; }), 350);
    return () => clearInterval(t);
  }, [rows]);
  return (
    <Card label="Lead Enrichment" dot="#FF6B6B">
      <div style={{ display: "flex", gap: 6, marginBottom: 6, paddingBottom: 5, borderBottom: "1px solid #e8e6e2" }}>
        {["Company", "Contact", "Score"].map((h) => <div key={h} style={{ flex: h === "Company" ? 1.3 : 1, fontSize: 8, fontFamily: mono, letterSpacing: 1, color: "#8a8a95", textTransform: "uppercase", fontWeight: 700 }}>{h}</div>)}
      </div>
      {data.slice(0, Math.min(rows, 5)).map((c, i) => (
        <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4, animation: "fadeIn 0.3s ease" }}>
          <div style={{ flex: 1.3, fontSize: 9, fontFamily: mono, fontWeight: 600, color: "#1a1a1f" }}>{c.co}</div>
          <div style={{ flex: 1, fontSize: 9, fontFamily: mono, color: cols[i] >= 1 ? "#1a1a1f" : "#e2e0dc", transition: "color 0.3s" }}>{cols[i] >= 1 ? c.name : "████████"}</div>
          <div style={{ flex: 1, fontSize: 9, fontFamily: mono, fontWeight: 800, color: cols[i] >= 2 ? (c.score >= 90 ? "#2D936C" : "#FFB347") : "#e2e0dc", transition: "color 0.3s" }}>{cols[i] >= 2 ? c.score : "•••"}</div>
        </div>
      ))}
    </Card>
  );
}

function Sequence() {
  const steps = [
    { icon: "→", label: "Email sent", detail: "Personalized intro", color: "#8a8a95" },
    { icon: "👁", label: "Opened", detail: "2 min ago", color: "#FFB347" },
    { icon: "🔗", label: "Link clicked", detail: "Case study viewed", color: "#E63946" },
    { icon: "💬", label: "Replied", detail: "\"Let's talk\"", color: "#2D936C" },
    { icon: "✓", label: "Meeting booked", detail: "Thursday 2 PM", color: "#2D936C" },
  ];
  const [step, setStep] = useState(0);
  useEffect(() => { const t = setInterval(() => setStep((s) => (s + 1) % (steps.length + 2)), 2000); return () => clearInterval(t); }, []);
  return (
    <Card label="Email Sequences" dot="#FFB347">
      {steps.map((e, i) => {
        const vis = i < step; const cur = i === step - 1;
        return (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10, opacity: vis ? 1 : 0.15, transition: "opacity 0.4s" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 22 }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: vis ? `${e.color}15` : "#f0efed", border: `2px solid ${vis ? e.color : "#e2e0dc"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, transition: "all 0.3s", transform: cur ? "scale(1.15)" : "scale(1)" }}>{e.icon}</div>
              {i < steps.length - 1 && <div style={{ width: 1.5, height: 12, background: vis ? e.color : "#e2e0dc", opacity: 0.3 }} />}
            </div>
            <div>
              <div style={{ fontSize: 10, fontFamily: mono, fontWeight: 700, color: vis ? "#1a1a1f" : "#ccc" }}>{e.label}</div>
              <div style={{ fontSize: 9, fontFamily: mono, color: vis ? "#8a8a95" : "#ddd" }}>{e.detail}</div>
            </div>
          </div>
        );
      })}
    </Card>
  );
}

function Revenue() {
  const [pts, setPts] = useState(() => Array.from({ length: 14 }, (_, i) => 10 + i * 3 + Math.sin(i * 0.6) * 6));
  useEffect(() => { const t = setInterval(() => setPts((p) => [...p.slice(1), Math.min(58, Math.max(15, p[p.length - 1] + Math.random() * 7 - 2))]), 1800); return () => clearInterval(t); }, []);
  const w = 220, h = 60;
  const d = pts.map((y, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * w} ${h - y}`).join(" ");
  return (
    <Card label="Revenue" dot="#6366f1">
      <div style={{ display: "flex", gap: 24, marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 8, fontFamily: mono, letterSpacing: 1.2, color: "#8a8a95", textTransform: "uppercase", fontWeight: 700, marginBottom: 3 }}>MRR</div>
          <div style={{ fontSize: 22, fontFamily: mono, fontWeight: 800, color: "#1a1a1f" }}>$127k</div>
          <div style={{ fontSize: 9, fontFamily: mono, fontWeight: 700, color: "#2D936C" }}>▲ 22% MoM</div>
        </div>
        <div>
          <div style={{ fontSize: 8, fontFamily: mono, letterSpacing: 1.2, color: "#8a8a95", textTransform: "uppercase", fontWeight: 700, marginBottom: 3 }}>ARR</div>
          <div style={{ fontSize: 22, fontFamily: mono, fontWeight: 800, color: "#1a1a1f" }}>$1.52M</div>
          <div style={{ fontSize: 9, fontFamily: mono, fontWeight: 700, color: "#2D936C" }}>▲ 14% QoQ</div>
        </div>
      </div>
      <svg width={w} height={h} style={{ display: "block", maxWidth: "100%" }}>
        <defs><linearGradient id="rg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E63946" stopOpacity="0.1" /><stop offset="100%" stopColor="#E63946" stopOpacity="0" /></linearGradient></defs>
        <path d={`${d} L ${w} ${h} L 0 ${h} Z`} fill="url(#rg2)" />
        <path d={d} fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={w} cy={h - pts[pts.length - 1]} r="3.5" fill="#E63946" />
      </svg>
    </Card>
  );
}

function Activity() {
  const events = [
    { icon: "🎯", text: "New MQL: Bridgeport Mfg" }, { icon: "📞", text: "Call completed — Atlas Steel" },
    { icon: "✉️", text: "Proposal opened (3x) — Chen" }, { icon: "🤝", text: "Deal won: Summit — $67k" },
    { icon: "📊", text: "Weekly report generated" }, { icon: "🚀", text: "Q2 Outbound launched" },
    { icon: "🎯", text: "Lead scored 95: Titan" }, { icon: "✉️", text: "Reply: Nova Systems" },
  ];
  const times = ["Just now", "12m ago", "28m ago", "1h ago", "2h ago", "3h ago", "4h ago", "5h ago"];
  const [vis, setVis] = useState(0);
  useEffect(() => { const t = setInterval(() => setVis((v) => v >= events.length ? 0 : v + 1), 1600); return () => clearInterval(t); }, []);
  return (
    <Card label="Live Activity" dot="#2D936C">
      {events.slice(0, Math.min(vis, 6)).map((e, i) => (
        <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8, animation: i === vis - 1 ? "fadeIn 0.4s ease" : "none" }}>
          <span style={{ fontSize: 12, lineHeight: "18px" }}>{e.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, fontFamily: mono, fontWeight: 600, color: "#1a1a1f", lineHeight: 1.3 }}>{e.text}</div>
            <div style={{ fontSize: 8, fontFamily: mono, color: "#8a8a95" }}>{times[i]}</div>
          </div>
        </div>
      ))}
    </Card>
  );
}

function Channels() {
  const ch = [{ n: "Outbound Email", p: 35, c: "#E63946" }, { n: "LinkedIn", p: 24, c: "#6366f1" }, { n: "Inbound / SEO", p: 22, c: "#2D936C" }, { n: "Referrals", p: 12, c: "#FFB347" }, { n: "Events", p: 7, c: "#8a8a95" }];
  const [filled, setFilled] = useState(false);
  useEffect(() => { setTimeout(() => setFilled(true), 500); const t = setInterval(() => { setFilled(false); setTimeout(() => setFilled(true), 500); }, 8000); return () => clearInterval(t); }, []);
  return (
    <Card label="Channel Attribution" dot="#6366f1">
      {ch.map((c) => (
        <div key={c.n} style={{ marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <span style={{ fontSize: 10, fontFamily: mono, fontWeight: 600, color: "#1a1a1f" }}>{c.n}</span>
            <span style={{ fontSize: 10, fontFamily: mono, fontWeight: 800, color: c.c }}>{c.p}%</span>
          </div>
          <div style={{ height: 6, background: "#f0efed", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ width: filled ? `${c.p}%` : "0%", height: "100%", background: c.c, borderRadius: 3, transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)" }} />
          </div>
        </div>
      ))}
    </Card>
  );
}

function Automations() {
  const workflows = [
    { name: "Quote Follow-up", runs: 142 },
    { name: "Lead Scoring", runs: 891 },
    { name: "New MQL Alert", runs: 67 },
    { name: "Re-engagement", runs: 234 },
    { name: "Onboarding Seq.", runs: 53 },
  ];
  const [counts, setCounts] = useState(workflows.map((w) => w.runs));
  useEffect(() => { const t = setInterval(() => setCounts((p) => p.map((c) => c + Math.floor(Math.random() * 3 + 1))), 3000); return () => clearInterval(t); }, []);
  return (
    <Card label="Automations" dot="#E63946">
      {workflows.map((w, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, paddingBottom: 10, borderBottom: i < workflows.length - 1 ? "1px solid #f0efed" : "none" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2D936C", animation: "pulse 2s infinite", animationDelay: `${i * 0.3}s` }} />
          <span style={{ flex: 1, fontSize: 10, fontFamily: mono, fontWeight: 700, color: "#1a1a1f" }}>{w.name}</span>
          <span style={{ fontSize: 9, fontFamily: mono, fontWeight: 600, color: "#8a8a95", transition: "all 0.4s" }}>{counts[i]} runs</span>
        </div>
      ))}
    </Card>
  );
}

function Team() {
  const reps = [
    { name: "Jordan M.", quota: 88, deals: 12 },
    { name: "Taylor K.", quota: 72, deals: 9 },
    { name: "Casey R.", quota: 95, deals: 15 },
    { name: "Morgan S.", quota: 64, deals: 7 },
  ];
  const [quotas, setQuotas] = useState(reps.map((r) => r.quota));
  useEffect(() => {
    const t = setInterval(() => setQuotas((p) => p.map((q, i) => {
      const next = q + Math.random() * 3;
      return next > 110 ? reps[i].quota : Math.round(next * 10) / 10;
    })), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <Card label="Team Performance" dot="#6366f1">
      {reps.map((r, i) => (
        <div key={i} style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <span style={{ fontSize: 10, fontFamily: mono, fontWeight: 700, color: "#1a1a1f" }}>{r.name}</span>
            <span style={{ fontSize: 10, fontFamily: mono, fontWeight: 800, color: quotas[i] >= 80 ? "#2D936C" : "#FFB347" }}>{quotas[i].toFixed(0)}%</span>
          </div>
          <div style={{ height: 6, background: "#f0efed", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ width: `${Math.min(quotas[i], 100)}%`, height: "100%", background: quotas[i] >= 80 ? "#2D936C" : "#FFB347", borderRadius: 3, transition: "width 0.8s ease" }} />
          </div>
          <div style={{ fontSize: 8, fontFamily: mono, color: "#8a8a95", marginTop: 3 }}>{r.deals} deals closed</div>
        </div>
      ))}
    </Card>
  );
}

export default function HeroDashboard() {
  return (
    <section style={{ background: "#1a1a1f", width: "100%", padding: "80px 24px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: 5, color: "#E63946", textTransform: "uppercase", marginBottom: 20, fontWeight: 700 }}>Your Revenue Engine</div>
          <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 40, fontWeight: 800, margin: "0 0 16px 0", lineHeight: 1.15, color: "#ffffff", letterSpacing: -0.5 }}>We track everything so you don&apos;t have to.</h2>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 19, lineHeight: 1.6, color: "#8a8a95", maxWidth: 540, margin: "0 auto" }}>Pipeline. Leads. Sequences. Revenue. Attribution. Team performance. All running, all connected, all visible — in real time.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          <KPIs />
          <PipelineCard />
          <Enrichment />
          <Sequence />
          <Revenue />
          <Activity />
                  </div>
      </div>
    </section>
  );
}
