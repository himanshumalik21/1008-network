"use client";

import React, { useEffect, useRef } from "react";

interface FlowingMeshCanvasProps {
  className?: string;
}

export function FlowingMeshCanvas({ className }: FlowingMeshCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number = 0;
    let isVisible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = (canvas.width = Math.max(canvas.offsetWidth * dpr, 1));
    let height = (canvas.height = Math.max(canvas.offsetHeight * dpr, 1));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = Math.max(canvas.offsetWidth * dpr, 1);
      height = canvas.height = Math.max(canvas.offsetHeight * dpr, 1);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const mx = (e.clientX - rect.left) / rect.width;
        const my = (e.clientY - rect.top) / rect.height;
        targetMouseX = Math.max(0, Math.min(1, mx));
        targetMouseY = Math.max(0, Math.min(1, my));
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let time = 0;

    // 2 Clean, elegant silk wave ribbons combining the 4 Pillar hues
    // Wave 1: Studio (Indigo #635BFF) & Network (Cyan #00D4B2)
    // Wave 2: Capital (Emerald #10B981) & Playbook (Coral #FF7043)
    const waves = [
      {
        colorStops: [
          { pos: 0, color: "rgba(99, 91, 255, 0.18)" },
          { pos: 0.5, color: "rgba(0, 212, 178, 0.14)" },
          { pos: 1, color: "rgba(124, 58, 237, 0.08)" },
        ],
        edgeColor: "rgba(99, 91, 255, 0.45)",
        speed: 0.0035,
        offset: 0,
        startX: 0.72,
        endX: 0.88,
        thickness: 0.35,
        amp: 0.16,
      },
      {
        colorStops: [
          { pos: 0, color: "rgba(0, 212, 178, 0.14)" },
          { pos: 0.55, color: "rgba(16, 185, 129, 0.12)" },
          { pos: 1, color: "rgba(255, 112, 67, 0.10)" },
        ],
        edgeColor: "rgba(0, 212, 178, 0.40)",
        speed: 0.0045,
        offset: 2.5,
        startX: 0.60,
        endX: 0.80,
        thickness: 0.28,
        amp: 0.14,
      },
    ];

    // Minimal, neat constellation nodes (12 sparse nodes)
    const nodeCount = 12;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const nodeColors = [
      "rgba(99, 91, 255, 0.6)",  // Indigo
      "rgba(0, 212, 178, 0.6)",  // Cyan
      "rgba(16, 185, 129, 0.55)", // Emerald
      "rgba(255, 112, 67, 0.55)", // Coral
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: 0.50 + Math.random() * 0.48,
        y: 0.1 + Math.random() * 0.8,
        vx: (Math.random() - 0.5) * 0.0003,
        vy: (Math.random() - 0.5) * 0.0004,
        radius: 1.5 + Math.random() * 1.5,
        color: nodeColors[i % nodeColors.length],
      });
    }

    function render() {
      if (!ctx || !isVisible || width <= 1 || height <= 1) {
        animationFrameId = 0;
        return;
      }

      try {
        time += 1;
        mouseX += (targetMouseX - mouseX) * 0.03;
        mouseY += (targetMouseY - mouseY) * 0.03;

        ctx.clearRect(0, 0, width, height);

        const mouseModX = (mouseX - 0.5) * 0.12;
        const mouseModY = (mouseY - 0.5) * 0.08;

        // 1. Render Clean Silk Waves
        waves.forEach((w) => {
          const t = time * w.speed + w.offset;

          const startX = width * (w.startX + Math.sin(t * 0.8) * 0.04 + mouseModX);
          const startY = 0;

          const cp1x = width * (0.90 + Math.sin(t * 1.0) * w.amp + mouseModX * 0.4);
          const cp1y = height * (0.28 + Math.cos(t * 0.7) * 0.05 + mouseModY);

          const cp2x = width * (0.52 + Math.cos(t * 1.1) * w.amp - mouseModX * 0.3);
          const cp2y = height * (0.68 + Math.sin(t * 0.9) * 0.06);

          const endX = width * (w.endX + Math.sin(t * 0.75) * 0.06 + mouseModX * 0.2);
          const endY = height * 1.05;

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);

          const returnEndX = endX - width * w.thickness;
          const returnEndY = endY;
          ctx.lineTo(returnEndX, returnEndY);

          const rcp2x = cp2x - width * w.thickness * 0.95;
          const rcp2y = cp2y - height * 0.02;

          const rcp1x = cp1x - width * w.thickness * 0.90;
          const rcp1y = cp1y - height * 0.02;

          const returnStartX = startX - width * w.thickness * 0.75;
          const returnStartY = startY;

          ctx.bezierCurveTo(rcp2x, rcp2y, rcp1x, rcp1y, returnStartX, returnStartY);
          ctx.closePath();

          if (Number.isFinite(startX) && Number.isFinite(endX)) {
            const grad = ctx.createLinearGradient(startX, startY, endX, endY);
            w.colorStops.forEach((cs) => {
              grad.addColorStop(cs.pos, cs.color);
            });
            ctx.fillStyle = grad;
            ctx.fill();
          }

          // Subtle clean crest edge line
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
          ctx.strokeStyle = w.edgeColor;
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.restore();
        });

        // 2. Render Sparse Constellation Nodes & Connecting Fibers
        nodes.forEach((n, idx) => {
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0.45 || n.x > 0.96) n.vx *= -1;
          if (n.y < 0.08 || n.y > 0.92) n.vy *= -1;

          const nx = n.x * width;
          const ny = n.y * height;

          // Connect nearby nodes with faint hairline lines
          for (let j = idx + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const n2x = n2.x * width;
            const n2y = n2.y * height;
            const dist = Math.hypot(nx - n2x, ny - n2y);

            if (dist < 140 * dpr) {
              const alpha = Math.max(0, 1 - dist / (140 * dpr)) * 0.15;
              ctx.beginPath();
              ctx.moveTo(nx, ny);
              ctx.lineTo(n2x, n2y);
              ctx.strokeStyle = `rgba(99, 91, 255, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }

          // Draw node point
          if (Number.isFinite(nx) && Number.isFinite(ny)) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(nx, ny, n.radius, 0, Math.PI * 2);
            ctx.fillStyle = n.color;
            ctx.fill();
            ctx.restore();
          }
        });

        animationFrameId = requestAnimationFrame(render);
      } catch {
        // Silently capture any canvas rendering failure
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            render();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    render();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ pointerEvents: "none" }}
    />
  );
}
