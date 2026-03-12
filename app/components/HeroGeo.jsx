"use client";

import { useEffect, useRef } from "react";

function IsometricGrid({ w, h, ctx, t }) {
  const cols = 18; const rows = 14;
  const spacingX = w / (cols - 1);
  const spacingY = h / (rows - 1);
  const points = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const offsetX = (r % 2) * (spacingX * 0.5);
      const x = c * spacingX + offsetX;
      const y = r * spacingY;
      const wave = Math.sin(c * 0.4 + t * 0.015) * 8 + Math.cos(r * 0.3 + t * 0.01) * 6;
      points.push({ x, y: y + wave, r, c });
    }
  }
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const q = points[j];
      const dx = p.x - q.x; const dy = p.y - q.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < spacingX * 1.3) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / (spacingX * 1.3))})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
  points.forEach((p) => {
    const pulse = 1.5 + Math.sin(p.c * 0.5 + p.r * 0.3 + t * 0.02) * 0.8;
    ctx.beginPath(); ctx.arc(p.x, p.y, pulse, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${0.15 + Math.sin(p.c * 0.3 + t * 0.01) * 0.08})`;
    ctx.fill();
  });
}

function WireframeCubes({ w, h, ctx, t }) {
  const cx = w / 2; const cy = h / 2;
  const cubes = [
    { size: 160, speed: 0.003, offsetX: 0, offsetY: 0, alpha: 0.2 },
    { size: 240, speed: -0.002, offsetX: 0, offsetY: 0, alpha: 0.12 },
    { size: 100, speed: 0.005, offsetX: -200, offsetY: -80, alpha: 0.15 },
    { size: 80, speed: -0.004, offsetX: 250, offsetY: 100, alpha: 0.1 },
    { size: 120, speed: 0.0035, offsetX: -300, offsetY: 120, alpha: 0.08 },
    { size: 60, speed: -0.006, offsetX: 350, offsetY: -130, alpha: 0.12 },
  ];
  const project = (x, y, z, s, ox, oy) => {
    const perspective = 500;
    const scale = perspective / (perspective + z);
    return { x: cx + ox + x * scale * s, y: cy + oy + y * scale * s };
  };
  const rotateY = (x, y, z, angle) => ({ x: x * Math.cos(angle) + z * Math.sin(angle), y, z: -x * Math.sin(angle) + z * Math.cos(angle) });
  const rotateX = (x, y, z, angle) => ({ x, y: y * Math.cos(angle) - z * Math.sin(angle), z: y * Math.sin(angle) + z * Math.cos(angle) });
  const vertices = [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];
  const edges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];

  cubes.forEach((cube) => {
    const angleY = t * cube.speed;
    const angleX = t * cube.speed * 0.7;
    const projected = vertices.map(([vx,vy,vz]) => {
      let r = rotateY(vx, vy, vz, angleY);
      r = rotateX(r.x, r.y, r.z, angleX);
      return project(r.x, r.y, r.z, cube.size, cube.offsetX, cube.offsetY);
    });
    edges.forEach(([a,b]) => {
      ctx.beginPath();
      ctx.moveTo(projected[a].x, projected[a].y);
      ctx.lineTo(projected[b].x, projected[b].y);
      ctx.strokeStyle = `rgba(255,255,255,${cube.alpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
    projected.forEach((p) => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${cube.alpha + 0.05})`;
      ctx.fill();
    });
  });
}

export default function HeroGeo() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const w = canvas.width = parent.clientWidth;
    const h = canvas.height = parent.clientHeight;
    const ctx = canvas.getContext("2d");
    let t = 0;
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      IsometricGrid({ w, h, ctx, t });
      WireframeCubes({ w, h, ctx, t });
      t++;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
    </div>
  );
}
