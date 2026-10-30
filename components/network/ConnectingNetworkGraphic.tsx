"use client";

import React, { useEffect, useRef } from "react";

interface ConnectingNetworkGraphicProps {
  className?: string;
  size?: number;
}

interface OrbNode {
  ring: 1 | 2; // Which orbital ring
  baseAngle: number;
  speed: number;
  radiusOffset: number;
  color: string;
}

export function ConnectingNetworkGraphic({
  className = "",
  size = 340,
}: ConnectingNetworkGraphicProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2.5) : 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const outerR = size * 0.38;
    const ringRadius = outerR * 0.88;
    const ringMinor = outerR * 0.42;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Constellation nodes distributed across the two orbital pathways
    const nodes: OrbNode[] = [
      { ring: 1, baseAngle: 0.2, speed: 0.18, radiusOffset: 0, color: "#635BFF" },
      { ring: 1, baseAngle: 1.5, speed: 0.18, radiusOffset: 4, color: "#635BFF" },
      { ring: 1, baseAngle: 3.1, speed: 0.18, radiusOffset: -3, color: "#635BFF" },
      { ring: 1, baseAngle: 4.6, speed: 0.18, radiusOffset: 2, color: "#635BFF" },
      { ring: 2, baseAngle: 0.8, speed: -0.16, radiusOffset: 3, color: "#00D4B2" },
      { ring: 2, baseAngle: 2.2, speed: -0.16, radiusOffset: -2, color: "#00D4B2" },
      { ring: 2, baseAngle: 3.9, speed: -0.16, radiusOffset: 4, color: "#00D4B2" },
      { ring: 2, baseAngle: 5.3, speed: -0.16, radiusOffset: -4, color: "#00D4B2" },
    ];

    let animId: number;
    let isVisible = true;
    let time = 0;
    let lastTime = performance.now();

    const ringTilt1 = (32 * Math.PI) / 180;
    const ringTilt2 = (-32 * Math.PI) / 180;

    function render(now: number) {
      if (!isVisible || !ctx) return;

      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (!prefersReducedMotion) {
        // Slow motion time progression
        time += delta * 0.45;
      }

      ctx.clearRect(0, 0, size, size);



      // 2. Concentric Radar Track (Subtle dashed reference ring)
      ctx.beginPath();
      ctx.arc(cx, cy, outerR * 0.65, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 212, 178, 0.22)";
      ctx.lineWidth = 0.9;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      // 3. Ring 1 (Founders / Business Mandates - Iris #635BFF)
      const rot1 = time * 0.08;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ringTilt1 + Math.sin(time * 0.1) * 0.05);

      ctx.beginPath();
      ctx.ellipse(0, 0, ringRadius, ringMinor * Math.cos(rot1), 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(99, 91, 255, 0.35)";
      ctx.lineWidth = 1.3;
      ctx.stroke();
      ctx.restore();

      // 4. Ring 2 (Operators / Executive Talent - Mint #00D4B2)
      const rot2 = -time * 0.07;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ringTilt2 + Math.cos(time * 0.09) * 0.05);

      ctx.beginPath();
      ctx.ellipse(0, 0, ringRadius, ringMinor * Math.cos(rot2), 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 212, 178, 0.38)";
      ctx.lineWidth = 1.3;
      ctx.stroke();
      ctx.restore();

      // Calculate 2D Screen Positions of Constellation Nodes
      const calculatedNodes: { x: number; y: number; color: string; z: number }[] = [];

      nodes.forEach((n) => {
        const theta = n.baseAngle + time * n.speed;
        const rMaj = ringRadius + n.radiusOffset;
        const rMin = ringMinor + n.radiusOffset * 0.5;

        // Position on unrotated ellipse
        const x0 = rMaj * Math.cos(theta);
        const y0 = rMin * Math.sin(theta);
        const z0 = rMaj * Math.sin(theta);

        // Apply respective orbital tilt
        const tilt = n.ring === 1 ? ringTilt1 : ringTilt2;
        const rot = n.ring === 1 ? rot1 : rot2;

        const cosTilt = Math.cos(tilt);
        const sinTilt = Math.sin(tilt);

        const x1 = x0 * Math.cos(rot);
        const y1 = y0;

        const xScreen = cx + (x1 * cosTilt - y1 * sinTilt);
        const yScreen = cy + (x1 * sinTilt + y1 * cosTilt);

        calculatedNodes.push({
          x: xScreen,
          y: yScreen,
          color: n.color,
          z: z0,
        });
      });

      // Add central matching engine hub node
      calculatedNodes.push({
        x: cx,
        y: cy,
        color: "#00D4B2",
        z: 0,
      });

      // 5. Draw Dynamic Connecting Lines Between Nodes (Proximity Linking)
      const maxConnectDist = outerR * 0.72;
      for (let i = 0; i < calculatedNodes.length; i++) {
        const n1 = calculatedNodes[i];
        for (let j = i + 1; j < calculatedNodes.length; j++) {
          const n2 = calculatedNodes[j];
          const dist = Math.hypot(n2.x - n1.x, n2.y - n1.y);

          if (dist < maxConnectDist) {
            const strength = 1 - dist / maxConnectDist;
            const linkColor =
              n1.color === "#00D4B2" && n2.color === "#00D4B2"
                ? `rgba(0, 212, 178, ${0.35 * strength})`
                : n1.color === "#635BFF" && n2.color === "#635BFF"
                ? `rgba(99, 91, 255, ${0.32 * strength})`
                : `rgba(0, 163, 137, ${0.4 * strength})`; // Inter-orbit match line!

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = linkColor;
            ctx.lineWidth = 1.1;
            ctx.stroke();

            // 6. Traveling Matching Signal Pulses along active links
            if (strength > 0.45) {
              const pulsePos = (time * 0.6 + (i * 3 + j) * 0.2) % 1;
              const px = n1.x + (n2.x - n1.x) * pulsePos;
              const py = n1.y + (n2.y - n1.y) * pulsePos;

              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = (i + j) % 2 === 0 ? "rgba(0, 212, 178, 0.85)" : "rgba(99, 91, 255, 0.85)";
              ctx.fill();
            }
          }
        }
      }

      // 7. Central Matching Hub Pulse
      const centerPulse = Math.sin(time * 2) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 5 + centerPulse * 4, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 212, 178, ${0.4 - centerPulse * 0.25})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = "#00D4B2";
      ctx.fill();

      // 8. Draw Constellation Nodes with Glowing Halos
      calculatedNodes.forEach((node, idx) => {
        if (node.x === cx && node.y === cy) return; // Skip center already drawn

        const pulse = Math.sin(time * 2.5 + idx) * 0.5 + 0.5;

        // Outer halo
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4.5 + pulse * 2.5, 0, Math.PI * 2);
        ctx.strokeStyle =
          node.color === "#00D4B2"
            ? `rgba(0, 212, 178, ${0.35 + pulse * 0.2})`
            : `rgba(99, 91, 255, ${0.32 + pulse * 0.2})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Core bead
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !prefersReducedMotion) {
            lastTime = performance.now();
            animId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, [size]);

  return (
    <div
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Ambient Radial Gradient Halo */}
      <div
        className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#00D4B2]/10 via-[#635BFF]/08 to-transparent blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="relative z-10 block"
      />
    </div>
  );
}
