"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const mono = "'JetBrains Mono', monospace";
const serif = "'Source Serif 4', Georgia, serif";

function WolfHead() {
  return (
    <div style={{ position: "absolute", bottom: 40, right: 48, zIndex: 1, opacity: 0.06, pointerEvents: "none" }}>
      <Image src="/wolfhead.png" alt="" width={500} height={500} style={{ display: "block" }} />
    </div>
  );
}

/* ─── 1. AURORA — flowing bands of color like northern lights ─── */
function Aurora() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <style>{`
        @keyframes aurora1 { 0% { transform: translateX(-30%) rotate(-8deg) scaleY(1); } 50% { transform: translateX(20%) rotate(4deg) scaleY(1.3); } 100% { transform: translateX(-30%) rotate(-8deg) scaleY(1); } }
        @keyframes aurora2 { 0% { transform: translateX(20%) rotate(6deg) scaleY(1.2); } 50% { transform: translateX(-25%) rotate(-5deg) scaleY(0.9); } 100% { transform: translateX(20%) rotate(6deg) scaleY(1.2); } }
        @keyframes aurora3 { 0% { transform: translateX(0%) rotate(-3deg); } 50% { transform: translateX(15%) rotate(7deg); } 100% { transform: translateX(0%) rotate(-3deg); } }
        @keyframes aurora4 { 0% { transform: translateX(10%) rotate(3deg) scaleY(1.1); } 50% { transform: translateX(-20%) rotate(-6deg) scaleY(0.85); } 100% { transform: translateX(10%) rotate(3deg) scaleY(1.1); } }
      `}</style>
      <div style={{ position: "absolute", width: "140%", height: 220, top: "10%", left: "-20%", background: "linear-gradient(90deg, transparent, rgba(230,57,70,0.25), rgba(255,107,107,0.2), rgba(230,57,70,0.15), transparent)", filter: "blur(50px)", animation: "aurora1 8s ease-in-out infinite", borderRadius: "50%" }} />
      <div style={{ position: "absolute", width: "140%", height: 180, top: "30%", left: "-10%", background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), rgba(139,92,246,0.18), rgba(99,102,241,0.12), transparent)", filter: "blur(55px)", animation: "aurora2 10s ease-in-out infinite", borderRadius: "50%" }} />
      <div style={{ position: "absolute", width: "140%", height: 200, top: "55%", left: "-20%", background: "linear-gradient(90deg, transparent, rgba(230,57,70,0.18), rgba(255,179,71,0.2), rgba(230,57,70,0.1), transparent)", filter: "blur(45px)", animation: "aurora3 12s ease-in-out infinite", borderRadius: "50%" }} />
      <div style={{ position: "absolute", width: "140%", height: 160, top: "75%", left: "-5%", background: "linear-gradient(90deg, transparent, rgba(45,147,108,0.15), rgba(99,102,241,0.12), transparent)", filter: "blur(50px)", animation: "aurora4 9s ease-in-out infinite", borderRadius: "50%" }} />
    </div>
  );
}

/* ─── 2. LAVA BLOBS — big bold morphing color shapes ─── */
function LavaBlobs() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <style>{`
        @keyframes blob1 { 0%,100% { transform: translate(0,0) scale(1) rotate(0deg); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; } 25% { transform: translate(60px,-40px) scale(1.1) rotate(90deg); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; } 50% { transform: translate(-30px,60px) scale(0.95) rotate(180deg); border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; } 75% { transform: translate(40px,30px) scale(1.05) rotate(270deg); border-radius: 50% 40% 60% 50% / 40% 70% 30% 60%; } }
        @keyframes blob2 { 0%,100% { transform: translate(0,0) scale(1) rotate(0deg); border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%; } 33% { transform: translate(-80px,50px) scale(1.15) rotate(120deg); border-radius: 40% 60% 50% 50% / 60% 40% 60% 40%; } 66% { transform: translate(50px,-60px) scale(0.9) rotate(240deg); border-radius: 50% 50% 40% 60% / 40% 50% 60% 50%; } }
        @keyframes blob3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,50px) scale(1.1); } }
      `}</style>
      <div style={{ position: "absolute", width: 450, height: 450, top: "-10%", right: "-5%", background: "linear-gradient(135deg, rgba(230,57,70,0.3), rgba(255,107,107,0.2))", filter: "blur(40px)", animation: "blob1 15s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 400, height: 400, bottom: "-5%", left: "-5%", background: "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.2))", filter: "blur(45px)", animation: "blob2 18s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 350, height: 350, top: "35%", left: "30%", background: "linear-gradient(135deg, rgba(255,179,71,0.2), rgba(230,57,70,0.15))", filter: "blur(40px)", animation: "blob3 12s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 280, height: 280, top: "15%", left: "10%", background: "linear-gradient(135deg, rgba(45,147,108,0.18), rgba(99,102,241,0.12))", filter: "blur(35px)", animation: "blob1 20s ease-in-out infinite reverse" }} />
      <div style={{ position: "absolute", width: 200, height: 200, bottom: "20%", right: "15%", background: "linear-gradient(135deg, rgba(230,57,70,0.2), rgba(255,179,71,0.15))", filter: "blur(30px)", animation: "blob2 14s ease-in-out infinite reverse" }} />
    </div>
  );
}

/* ─── 3. FLOATING SHAPES — colorful geometric shapes drifting ─── */
function FloatingShapes() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const w = canvas.width = parent.clientWidth;
    const h = canvas.height = parent.clientHeight;
    const ctx = canvas.getContext("2d");
    const colors = ["rgba(230,57,70,0.15)", "rgba(99,102,241,0.12)", "rgba(255,179,71,0.14)", "rgba(45,147,108,0.12)", "rgba(139,92,246,0.1)", "rgba(230,57,70,0.1)"];
    const shapes = Array.from({ length: 25 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 60 + 30,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 0.8,
      type: Math.floor(Math.random() * 3),
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      shapes.forEach((s) => {
        s.x += s.vx; s.y += s.vy; s.rotation += s.rotSpeed;
        if (s.x < -80) s.x = w + 80;
        if (s.x > w + 80) s.x = -80;
        if (s.y < -80) s.y = h + 80;
        if (s.y > h + 80) s.y = -80;
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate((s.rotation * Math.PI) / 180);
        ctx.fillStyle = s.color;
        if (s.type === 0) {
          ctx.beginPath(); ctx.arc(0, 0, s.size / 2, 0, Math.PI * 2); ctx.fill();
        } else if (s.type === 1) {
          ctx.fillRect(-s.size / 2, -s.size / 2, s.size, s.size);
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -s.size / 2);
          ctx.lineTo(s.size / 2, s.size / 2);
          ctx.lineTo(-s.size / 2, s.size / 2);
          ctx.closePath(); ctx.fill();
        }
        ctx.restore();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0 }} />;
}

/* ─── 4. COLOR RIBBONS — flowing curves of color ─── */
function ColorRibbons() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const w = canvas.width = parent.clientWidth;
    const h = canvas.height = parent.clientHeight;
    const ctx = canvas.getContext("2d");
    let t = 0;
    const ribbons = [
      { color: "rgba(230,57,70,0.18)", yBase: 0.2, amp: 80, freq: 0.003, speed: 0.008, width: 120 },
      { color: "rgba(99,102,241,0.14)", yBase: 0.4, amp: 100, freq: 0.0025, speed: 0.006, width: 100 },
      { color: "rgba(255,179,71,0.16)", yBase: 0.6, amp: 70, freq: 0.004, speed: 0.01, width: 90 },
      { color: "rgba(45,147,108,0.12)", yBase: 0.8, amp: 90, freq: 0.0035, speed: 0.007, width: 110 },
      { color: "rgba(139,92,246,0.1)", yBase: 0.35, amp: 60, freq: 0.005, speed: 0.012, width: 80 },
    ];
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ribbons.forEach((r) => {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 4) {
          const y = h * r.yBase + Math.sin(x * r.freq + t * r.speed) * r.amp + Math.sin(x * r.freq * 2.3 + t * r.speed * 1.5) * (r.amp * 0.4);
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        for (let x = w; x >= 0; x -= 4) {
          const y = h * r.yBase + Math.sin(x * r.freq + t * r.speed) * r.amp + Math.sin(x * r.freq * 2.3 + t * r.speed * 1.5) * (r.amp * 0.4) + r.width;
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = r.color;
        ctx.fill();
      });
      t++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0 }} />;
}

/* ─── 5. GRADIENT WAVE MESH — topographic color contours ─── */
function GradientWaveMesh() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const w = canvas.width = parent.clientWidth;
    const h = canvas.height = parent.clientHeight;
    const ctx = canvas.getContext("2d");
    let t = 0;
    const colors = [
      "rgba(230,57,70,0.2)",
      "rgba(99,102,241,0.15)",
      "rgba(255,179,71,0.18)",
      "rgba(45,147,108,0.15)",
      "rgba(139,92,246,0.12)",
      "rgba(230,57,70,0.1)",
    ];
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let c = 0; c < colors.length; c++) {
        ctx.beginPath();
        const baseY = h * 0.15 + c * (h * 0.13);
        for (let x = 0; x <= w; x += 3) {
          const y = baseY
            + Math.sin(x * 0.004 + t * 0.01 + c * 1.2) * 35
            + Math.sin(x * 0.007 + t * 0.015 + c * 0.8) * 20
            + Math.cos(x * 0.002 + t * 0.005 + c * 2) * 25;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fillStyle = colors[c];
        ctx.fill();
      }
      t++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0 }} />;
}

/* ─── 6. BONUS: LAVA + RIBBONS ─── */
function LavaPlusRibbons() {
  return (<><LavaBlobs /><ColorRibbons /></>);
}

const options = [
  { name: "Aurora", Component: Aurora },
  { name: "Lava Blobs", Component: LavaBlobs },
  { name: "Shapes", Component: FloatingShapes },
  { name: "Ribbons", Component: ColorRibbons },
  { name: "Wave Mesh", Component: GradientWaveMesh },
  { name: "Lava + Ribbons", Component: LavaPlusRibbons },
];

export default function HeroBackgrounds() {
  const [active, setActive] = useState(0);
  const Bg = options[active].Component;

  return (
    <div style={{ background: "#F8F7F5", minHeight: "100vh", fontFamily: serif }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap');
        * { box-sizing: border-box; } body { margin: 0; }
      `}</style>

      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(248,247,245,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e2e0dc", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
        {options.map((opt, i) => (
          <button key={opt.name} onClick={() => setActive(i)} style={{
            fontFamily: mono, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase",
            padding: "8px 18px", borderRadius: 4, cursor: "pointer", fontWeight: 700,
            border: active === i ? "2px solid #E63946" : "2px solid #d4d2ce",
            background: active === i ? "rgba(230,57,70,0.08)" : "#fff",
            color: active === i ? "#E63946" : "#8a8a95",
            transition: "all 0.2s",
          }}>{opt.name}</button>
        ))}
      </div>

      <div style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
        <Bg />
        <WolfHead />
        <div style={{
          position: "relative", zIndex: 2, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", minHeight: "100vh",
          textAlign: "center", padding: "80px 32px 40px",
        }}>
          <h1 style={{
            fontFamily: serif, fontSize: 52, fontWeight: 800, color: "#1a1a1f",
            lineHeight: 1.12, margin: "0 0 20px 0", maxWidth: 700, letterSpacing: -0.5,
          }}>
            Full-service marketing and sales support — <span style={{ color: "#E63946" }}>without the full-service price tag.</span>
          </h1>
          <p style={{ fontFamily: serif, fontSize: 20, color: "#8a8a95", maxWidth: 480, lineHeight: 1.55, margin: "0 0 28px 0" }}>
            From first touch to lifetime value.
          </p>
          <button style={{
            fontFamily: mono, fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
            background: "#E63946", border: "none", color: "#fff", padding: "16px 40px",
            borderRadius: 30, fontWeight: 700, cursor: "pointer",
          }}>Start a conversation →</button>
        </div>
      </div>
    </div>
  );
}
