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
    window.addEventListener("orientationchange", handleResize, { passive: true });

    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    const handlePointerMove = (e: MouseEvent | TouchEvent | PointerEvent) => {
      if (!isVisible || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const clientX = "touches" in e && e.touches.length > 0 ? e.touches[0].clientX : (e as MouseEvent).clientX;
        const clientY = "touches" in e && e.touches.length > 0 ? e.touches[0].clientY : (e as MouseEvent).clientY;
        if (clientX !== undefined && clientY !== undefined) {
          const mx = (clientX - rect.left) / rect.width;
          const my = (clientY - rect.top) / rect.height;
          targetMouseX = Math.max(0, Math.min(1, mx));
          targetMouseY = Math.max(0, Math.min(1, my));
        }
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });

    let time = 0;

    // Full-canvas framing silk waves:
    // Wave 1: Right-side primary sweep (Studio Indigo #635BFF -> Network Cyan #00D4B2)
    // Wave 2: Right-side secondary sweep (Cyan #00D4B2 -> Capital Emerald #10B981 -> Coral #FF7043)
    // Wave 3: Left-side subtle atmospheric flow (Indigo #635BFF -> Coral #FF7043)
    const waves = [
      {
        colorStops: [
          { pos: 0, color: "rgba(99, 91, 255, 0.22)" },
          { pos: 0.5, color: "rgba(0, 212, 178, 0.18)" },
          { pos: 1, color: "rgba(124, 58, 237, 0.12)" },
        ],
        edgeColor: "rgba(99, 91, 255, 0.60)",
        speed: 0.0035,
        offset: 0,
        startX: 0.82,
        cp1x: 0.95,
        cp1y: 0.30,
        cp2x: 0.72,
        cp2y: 0.75,
        endX: 0.92,
        thickness: 0.32,
        amp: 0.12,
      },
      {
        colorStops: [
          { pos: 0, color: "rgba(0, 212, 178, 0.18)" },
          { pos: 0.55, color: "rgba(16, 185, 129, 0.16)" },
          { pos: 1, color: "rgba(255, 112, 67, 0.12)" },
        ],
        edgeColor: "rgba(0, 212, 178, 0.50)",
        speed: 0.0045,
        offset: 2.2,
        startX: 0.70,
        cp1x: 0.86,
        cp1y: 0.36,
        cp2x: 0.64,
        cp2y: 0.82,
        endX: 0.80,
        thickness: 0.26,
        amp: 0.10,
      },
      {
        colorStops: [
          { pos: 0, color: "rgba(99, 91, 255, 0.14)" },
          { pos: 0.6, color: "rgba(255, 112, 67, 0.10)" },
          { pos: 1, color: "rgba(0, 212, 178, 0.08)" },
        ],
        edgeColor: "rgba(99, 91, 255, 0.35)",
        speed: 0.0028,
        offset: 4.0,
        startX: 0.18,
        cp1x: 0.08,
        cp1y: 0.35,
        cp2x: 0.24,
        cp2y: 0.78,
        endX: 0.12,
        thickness: 0.22,
        amp: 0.08,
      },
    ];

    // Constellation nodes distributed across peripheries (14 sparse nodes)
    const nodeCount = 14;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const nodeColors = [
      "rgba(99, 91, 255, 0.70)",  // Indigo
      "rgba(0, 212, 178, 0.70)",  // Cyan
      "rgba(16, 185, 129, 0.65)", // Emerald
      "rgba(255, 112, 67, 0.65)", // Coral
    ];

    for (let i = 0; i < nodeCount; i++) {
      // Half on left side, half on right side to frame the center
      const isRight = i % 2 === 0;
      const xRange = isRight ? 0.68 + Math.random() * 0.30 : 0.02 + Math.random() * 0.28;
      nodes.push({
        x: xRange,
        y: 0.05 + Math.random() * 0.90,
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

        const mouseModX = (mouseX - 0.5) * 0.10;
        const mouseModY = (mouseY - 0.5) * 0.06;

        // 1. Render Silk Wave Ribbons Framing the Viewport
        waves.forEach((w) => {
          const t = time * w.speed + w.offset;

          const startX = width * (w.startX + Math.sin(t * 0.8) * 0.03 + mouseModX);
          const startY = 0;

          const cp1x = width * (w.cp1x + Math.sin(t * 1.0) * w.amp + mouseModX * 0.3);
          const cp1y = height * (w.cp1y + Math.cos(t * 0.7) * 0.04 + mouseModY);

          const cp2x = width * (w.cp2x + Math.cos(t * 1.1) * w.amp - mouseModX * 0.2);
          const cp2y = height * (w.cp2y + Math.sin(t * 0.9) * 0.04);

          const endX = width * (w.endX + Math.sin(t * 0.75) * 0.04 + mouseModX * 0.15);
          const endY = height * 1.15; // Extends past bottom to touch and cross footer line

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);

          const returnEndX = endX - width * w.thickness;
          const returnEndY = endY;
          ctx.lineTo(returnEndX, returnEndY);

          const rcp2x = cp2x - width * w.thickness * 0.92;
          const rcp2y = cp2y - height * 0.02;

          const rcp1x = cp1x - width * w.thickness * 0.88;
          const rcp1y = cp1y - height * 0.02;

          const returnStartX = startX - width * w.thickness * 0.70;
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
          ctx.lineWidth = 1.2;
          ctx.stroke();

          ctx.restore();
        });

        // 2. Render Constellation Nodes & Delicate Proximity Connections
        nodes.forEach((n, idx) => {
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0.01 || n.x > 0.99) n.vx *= -1;
          if (n.y < 0.04 || n.y > 0.96) n.vy *= -1;

          const nx = n.x * width;
          const ny = n.y * height;

          for (let j = idx + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const n2x = n2.x * width;
            const n2y = n2.y * height;
            const dist = Math.hypot(nx - n2x, ny - n2y);

            if (dist < 150 * dpr) {
              const alpha = Math.max(0, 1 - dist / (150 * dpr)) * 0.18;
              ctx.beginPath();
              ctx.moveTo(nx, ny);
              ctx.lineTo(n2x, n2y);
              ctx.strokeStyle = `rgba(99, 91, 255, ${alpha})`;
              ctx.lineWidth = 0.65;
              ctx.stroke();
            }
          }

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
      window.removeEventListener("orientationchange", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
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
