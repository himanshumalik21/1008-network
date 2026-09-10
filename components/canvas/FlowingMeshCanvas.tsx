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

    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) / rect.width;
      targetMouseY = (e.clientY - rect.top) / rect.height;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let time = 0;

    // Ribbons config with Stripe-caliber colors
    const ribbons = [
      {
        color1: "rgba(99, 91, 255, 0.45)",   // Stripe Indigo
        color2: "rgba(0, 212, 178, 0.35)",   // Teal/Cyan
        speed: 0.008,
        offset: 0,
        amplitude: 0.22,
        thickness: 0.38,
        freq: 1.8,
      },
      {
        color1: "rgba(255, 112, 67, 0.35)",   // Coral/Amber
        color2: "rgba(99, 91, 255, 0.40)",   // Indigo
        speed: 0.012,
        offset: 1.5,
        amplitude: 0.18,
        thickness: 0.32,
        freq: 2.2,
      },
      {
        color1: "rgba(0, 212, 178, 0.40)",   // Cyan
        color2: "rgba(122, 115, 255, 0.30)", // Soft Purple
        speed: 0.010,
        offset: 3.2,
        amplitude: 0.25,
        thickness: 0.42,
        freq: 1.5,
      },
      {
        color1: "rgba(122, 115, 255, 0.35)", // Purple
        color2: "rgba(255, 112, 67, 0.25)",  // Warm Sunset
        speed: 0.006,
        offset: 4.8,
        amplitude: 0.20,
        thickness: 0.35,
        freq: 2.0,
      },
    ];

    const render = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      time += 1;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render flowing wave ribbons with smooth multi-stop gradient blends
      ribbons.forEach((ribbon) => {
        const t = time * ribbon.speed + ribbon.offset;
        const mouseMod = (mouseX - 0.5) * 0.3;

        ctx.save();
        ctx.beginPath();

        // Starting point at top-right
        const startX = width * (0.65 + Math.sin(t * 0.7) * 0.08 + mouseMod);
        const startY = 0;
        ctx.moveTo(startX, startY);

        // Dynamic Bezier control points
        const cp1x = width * (0.95 + Math.sin(t * 1.1) * ribbon.amplitude);
        const cp1y = height * (0.25 + Math.cos(t * 0.9) * 0.08);

        const cp2x = width * (0.50 + Math.cos(t * 1.3) * ribbon.amplitude);
        const cp2y = height * (0.65 + Math.sin(t * 1.2) * 0.1);

        const endX = width * (0.85 + Math.sin(t * 0.8) * 0.12);
        const endY = height * 1.05;

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);

        // Return path for thickness
        const returnEndX = endX - width * ribbon.thickness * 0.8;
        const returnEndY = endY;
        ctx.lineTo(returnEndX, returnEndY);

        const rcp2x = cp2x - width * ribbon.thickness;
        const rcp2y = cp2y - height * 0.05;

        const rcp1x = cp1x - width * ribbon.thickness * 0.9;
        const rcp1y = cp1y - height * 0.04;

        const returnStartX = startX - width * ribbon.thickness * 0.6;
        const returnStartY = startY;

        ctx.bezierCurveTo(rcp2x, rcp2y, rcp1x, rcp1y, returnStartX, returnStartY);
        ctx.closePath();

        // Create linear gradient along wave path
        const grad = ctx.createLinearGradient(
          startX,
          startY,
          endX,
          endY
        );
        grad.addColorStop(0, ribbon.color1);
        grad.addColorStop(0.5, ribbon.color2);
        grad.addColorStop(1, ribbon.color1);

        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

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
