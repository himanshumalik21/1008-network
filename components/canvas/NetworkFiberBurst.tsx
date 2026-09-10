"use client";

import React, { useEffect, useRef } from "react";

interface NetworkFiberBurstProps {
  className?: string;
}

export function NetworkFiberBurst({ className }: NetworkFiberBurstProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = (canvas.width = canvas.offsetWidth * dpr);
    let height = (canvas.height = canvas.offsetHeight * dpr);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * dpr;
      height = canvas.height = canvas.offsetHeight * dpr;
    };

    window.addEventListener("resize", handleResize, { passive: true });

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

    const lineCount = 120;
    const lines: Array<{
      angle: number;
      length: number;
      baseLength: number;
      speed: number;
      dotRadius: number;
      hueOffset: number;
      phase: number;
    }> = [];

    for (let i = 0; i < lineCount; i++) {
      // Fan spread from -Math.PI * 0.95 to -Math.PI * 0.05 (upward hemisphere)
      const angle = -Math.PI * 0.98 + (Math.PI * 0.96 * i) / (lineCount - 1);
      const baseLength = 0.35 + Math.random() * 0.55;
      lines.push({
        angle,
        length: baseLength,
        baseLength,
        speed: 0.015 + Math.random() * 0.02,
        dotRadius: 1.2 + Math.random() * 2.2,
        hueOffset: Math.random() * 20,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      const originX = width * 0.5;
      const originY = height * 1.02; // anchored at bottom center
      const maxRadius = Math.min(width, height) * 0.95;

      // Draw faint center glow
      const radialGlow = ctx.createRadialGradient(
        originX,
        originY,
        10,
        originX,
        originY,
        maxRadius * 0.8
      );
      radialGlow.addColorStop(0, "rgba(99, 91, 255, 0.22)");
      radialGlow.addColorStop(0.4, "rgba(0, 212, 178, 0.08)");
      radialGlow.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(originX, originY, maxRadius * 0.8, Math.PI, 0);
      ctx.fill();

      // Render each fiber ray with animated breathing length and tip node
      lines.forEach((l) => {
        const currentLength =
          maxRadius * (l.baseLength + Math.sin(time * l.speed + l.phase) * 0.06);

        const destX = originX + Math.cos(l.angle) * currentLength;
        const destY = originY + Math.sin(l.angle) * currentLength;

        // Fiber beam gradient
        const lineGrad = ctx.createLinearGradient(originX, originY, destX, destY);
        lineGrad.addColorStop(0, "rgba(99, 91, 255, 0.4)");
        lineGrad.addColorStop(0.6, "rgba(0, 212, 178, 0.5)");
        lineGrad.addColorStop(1, "rgba(99, 91, 255, 0.85)");

        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(destX, destY);
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 1.0;
        ctx.stroke();

        // Tip node circle
        ctx.beginPath();
        ctx.arc(destX, destY, l.dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#635BFF";
        ctx.shadowColor = "#00D4B2";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
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
