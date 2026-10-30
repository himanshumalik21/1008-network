"use client";

import React, { useEffect, useRef } from "react";

interface CapitalTopographicWaveProps {
  className?: string;
  intensity?: "normal" | "subtle";
}

export function CapitalTopographicWave({
  className = "",
  intensity = "normal",
}: CapitalTopographicWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Handle high DPI
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Grid configuration for 3D topological terrain
    const cols = 32;
    const rows = 22;
    const spacingX = 26;
    const spacingZ = 22;

    // Signal packets flowing across ridges
    const packets = [
      { col: 4, row: 8, progress: 0, speed: 0.012, color: "#00D4B2" },
      { col: 12, row: 4, progress: 0.3, speed: 0.015, color: "#00A389" },
      { col: 18, row: 14, progress: 0.6, speed: 0.011, color: "#635BFF" },
      { col: 24, row: 10, progress: 0.2, speed: 0.014, color: "#00D4B2" },
      { col: 8, row: 16, progress: 0.8, speed: 0.013, color: "#10E7BA" },
    ];

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      time += 0.018;

      // Center and isometric projection parameters
      const originX = w * 0.52;
      const originY = h * 0.42;
      const angle = 0.52; // ~30 deg isometric angle
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      // Pre-compute 3D vertex positions with dynamic wave undulation
      const grid: { x: number; y: number; z: number; isoX: number; isoY: number; elevation: number }[][] = [];

      for (let r = 0; r < rows; r++) {
        grid[r] = [];
        for (let c = 0; c < cols; c++) {
          const rawX = (c - cols / 2) * spacingX;
          const rawZ = (r - rows / 2) * spacingZ;

          // Multi-frequency wave calculation (Slide 1 & Slide 14 aesthetic)
          const wave1 = Math.sin(c * 0.22 + time * 1.1) * 22;
          const wave2 = Math.cos(r * 0.28 + time * 0.85) * 18;
          const wave3 = Math.sin((c * 0.15 + r * 0.2) + time * 1.4) * 14;
          const diagonalRidge = Math.sin((c - r) * 0.25 + time * 0.9) * 16;

          // Combine with edge dampening so edges fade smoothly
          const edgeFactor = Math.sin((c / (cols - 1)) * Math.PI) * Math.sin((r / (rows - 1)) * Math.PI);
          const y = (wave1 + wave2 + wave3 + diagonalRidge) * edgeFactor * 1.25;

          // Isometric 3D Projection
          const isoX = originX + (rawX - rawZ) * cosA;
          const isoY = originY + (rawX + rawZ) * sinA * 0.58 - y;

          grid[r][c] = {
            x: rawX,
            y,
            z: rawZ,
            isoX,
            isoY,
            elevation: y,
          };
        }
      }

      // 1. Draw contour ribbon lines (Rows - flowing across the perspective)
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        const rowDepth = r / rows; // 0 (back) to 1 (front)
        
        // Gradient color along the row from Mint to Teal to Iris
        const lineGrad = ctx.createLinearGradient(0, 0, w, h);
        const alphaBase = (0.2 + rowDepth * 0.55) * (intensity === "subtle" ? 0.6 : 1.0);
        lineGrad.addColorStop(0, `rgba(0, 212, 178, ${alphaBase * 0.85})`);
        lineGrad.addColorStop(0.5, `rgba(0, 163, 137, ${alphaBase})`);
        lineGrad.addColorStop(1, `rgba(99, 91, 255, ${alphaBase * 0.9})`);

        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 1.0 + rowDepth * 1.3;

        for (let c = 0; c < cols; c++) {
          const pt = grid[r][c];
          if (c === 0) {
            ctx.moveTo(pt.isoX, pt.isoY);
          } else {
            // Smooth bezier through isometric points
            const prev = grid[r][c - 1];
            const midX = (prev.isoX + pt.isoX) / 2;
            const midY = (prev.isoY + pt.isoY) / 2;
            ctx.quadraticCurveTo(prev.isoX, prev.isoY, midX, midY);
          }
        }
        ctx.stroke();
      }

      // 2. Draw cross-connecting struts / isometric columns (Columns)
      for (let c = 0; c < cols; c += 2) {
        ctx.beginPath();
        const colAlpha = (0.12 + (c / cols) * 0.35) * (intensity === "subtle" ? 0.5 : 1.0);
        ctx.strokeStyle = `rgba(0, 212, 178, ${colAlpha * 0.6})`;
        ctx.lineWidth = 0.85;

        for (let r = 0; r < rows; r++) {
          const pt = grid[r][c];
          if (r === 0) {
            ctx.moveTo(pt.isoX, pt.isoY);
          } else {
            const prev = grid[r - 1][c];
            ctx.lineTo(pt.isoX, pt.isoY);
          }
        }
        ctx.stroke();
      }

      // 3. Draw Hexagonal / Diamond Nodes at elevated peaks (Slide 14 inspiration)
      for (let r = 2; r < rows - 2; r += 2) {
        for (let c = 2; c < cols - 2; c += 2) {
          const pt = grid[r][c];
          if (pt.elevation > 14) {
            const glowSize = Math.min(3.5, (pt.elevation - 14) * 0.18 + 1.5);
            ctx.beginPath();
            ctx.arc(pt.isoX, pt.isoY, glowSize, 0, Math.PI * 2);
            ctx.fillStyle = "#00D4B2";
            ctx.shadowColor = "#00D4B2";
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0; // reset
          }
        }
      }

      // 4. Draw Traveling Capital Signal Packets (Lively Flow)
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const targetCol = Math.floor(p.col + p.progress * (cols - 1 - p.col));
        const clampedCol = Math.min(cols - 1, Math.max(0, targetCol));
        const pt = grid[p.row]?.[clampedCol];

        if (pt) {
          ctx.beginPath();
          ctx.arc(pt.isoX, pt.isoY, 3.2, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Pulse halo ring
          ctx.beginPath();
          ctx.arc(pt.isoX, pt.isoY, 6.5, 0, Math.PI * 2);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.45;
          ctx.stroke();
          ctx.globalAlpha = 1.0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <div className={`relative w-full h-full overflow-hidden pointer-events-none select-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
        aria-hidden="true"
      />
    </div>
  );
}
