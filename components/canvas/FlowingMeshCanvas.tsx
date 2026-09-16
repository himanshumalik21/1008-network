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

    // 4 Distinct Pillar Wave Bands matching the 4 Pillars of 1008 Network
    // 01 Studio (Indigo), 02 Network (Cyan), 03 Capital (Emerald), 04 Playbook (Coral)
    const pillarBands = [
      {
        name: "Pillar 01 - Studio",
        color1: "rgba(99, 91, 255, 0.42)",    // Stripe Indigo
        color2: "rgba(124, 58, 237, 0.30)",   // Deep Violet
        highlight: "rgba(99, 91, 255, 0.8)",
        speed: 0.007,
        offset: 0,
        amplitude: 0.22,
        thickness: 0.36,
        startXRatio: 0.70,
        endXRatio: 0.88,
      },
      {
        name: "Pillar 02 - Network",
        color1: "rgba(0, 212, 178, 0.38)",    // Bright Cyan / Teal
        color2: "rgba(99, 91, 255, 0.28)",    // Cyan-Indigo Blend
        highlight: "rgba(0, 212, 178, 0.85)",
        speed: 0.011,
        offset: 1.4,
        amplitude: 0.19,
        thickness: 0.32,
        startXRatio: 0.62,
        endXRatio: 0.82,
      },
      {
        name: "Pillar 03 - Capital",
        color1: "rgba(16, 185, 129, 0.35)",   // Emerald Green
        color2: "rgba(0, 212, 178, 0.25)",    // Emerald-Cyan Blend
        highlight: "rgba(16, 185, 129, 0.8)",
        speed: 0.009,
        offset: 3.1,
        amplitude: 0.25,
        thickness: 0.40,
        startXRatio: 0.76,
        endXRatio: 0.94,
      },
      {
        name: "Pillar 04 - Playbook",
        color1: "rgba(255, 112, 67, 0.32)",   // Coral / Sunset Amber
        color2: "rgba(99, 91, 255, 0.22)",    // Coral-Indigo Harmony
        highlight: "rgba(255, 112, 67, 0.75)",
        speed: 0.005,
        offset: 4.6,
        amplitude: 0.17,
        thickness: 0.30,
        startXRatio: 0.58,
        endXRatio: 0.78,
      },
    ];

    // Synaptic Network Particles & Floating Nodes
    const particleCount = 38;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulseOffset: number;
      pulseSpeed: number;
    }> = [];

    const nodeColors = [
      "#635BFF", // Studio
      "#00D4B2", // Network
      "#10B981", // Capital
      "#FF7043", // Playbook
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: 0.45 + Math.random() * 0.55,
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0006,
        vy: (Math.random() - 0.5) * 0.0008,
        radius: 1.2 + Math.random() * 2.2,
        color: nodeColors[i % nodeColors.length],
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    // High-speed photons traveling along the bezier vectors
    const photons = [
      { bandIdx: 0, progress: 0.1, speed: 0.006, color: "#635BFF", size: 3.5 },
      { bandIdx: 1, progress: 0.4, speed: 0.008, color: "#00D4B2", size: 3.2 },
      { bandIdx: 2, progress: 0.7, speed: 0.007, color: "#10B981", size: 3.0 },
      { bandIdx: 3, progress: 0.2, speed: 0.005, color: "#FF7043", size: 3.2 },
      { bandIdx: 1, progress: 0.85, speed: 0.009, color: "#00D4B2", size: 2.8 },
    ];

    function render() {
      if (!ctx || !isVisible || width <= 1 || height <= 1) {
        animationFrameId = 0;
        return;
      }

      time += 1;
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Store calculated bezier curves for photon tracing
      const calculatedCurves: Array<{
        startX: number;
        startY: number;
        cp1x: number;
        cp1y: number;
        cp2x: number;
        cp2y: number;
        endX: number;
        endY: number;
      }> = [];

      // 1. Render Flowing Wave Ribbons for the 4 Pillars
      pillarBands.forEach((band) => {
        const t = time * band.speed + band.offset;
        const mouseMod = (mouseX - 0.5) * 0.25;
        const mouseVertMod = (mouseY - 0.5) * 0.15;

        ctx.save();
        ctx.beginPath();

        // Starting point at top
        const startX = width * (band.startXRatio + Math.sin(t * 0.75) * 0.06 + mouseMod);
        const startY = 0;
        ctx.moveTo(startX, startY);

        // Control points
        const cp1x = width * (0.92 + Math.sin(t * 1.1) * band.amplitude + mouseMod * 0.5);
        const cp1y = height * (0.24 + Math.cos(t * 0.85) * 0.07 + mouseVertMod);

        const cp2x = width * (0.48 + Math.cos(t * 1.25) * band.amplitude - mouseMod * 0.4);
        const cp2y = height * (0.64 + Math.sin(t * 1.15) * 0.09);

        const endX = width * (band.endXRatio + Math.sin(t * 0.9) * 0.1 + mouseMod * 0.3);
        const endY = height * 1.05;

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);

        // Save curve for particle transit
        calculatedCurves.push({ startX, startY, cp1x, cp1y, cp2x, cp2y, endX, endY });

        // Return path for ribbon volume
        const returnEndX = endX - width * band.thickness * 0.75;
        const returnEndY = endY;
        ctx.lineTo(returnEndX, returnEndY);

        const rcp2x = cp2x - width * band.thickness * 0.95;
        const rcp2y = cp2y - height * 0.04;

        const rcp1x = cp1x - width * band.thickness * 0.88;
        const rcp1y = cp1y - height * 0.03;

        const returnStartX = startX - width * band.thickness * 0.55;
        const returnStartY = startY;

        ctx.bezierCurveTo(rcp2x, rcp2y, rcp1x, rcp1y, returnStartX, returnStartY);
        ctx.closePath();

        // Gradient blend
        if (Number.isFinite(startX) && Number.isFinite(endX)) {
          const grad = ctx.createLinearGradient(startX, startY, endX, endY);
          grad.addColorStop(0, band.color1);
          grad.addColorStop(0.35, band.color2);
          grad.addColorStop(0.7, band.color1);
          grad.addColorStop(1, band.color2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // Subtle glowing crest line
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
        ctx.strokeStyle = band.highlight;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.restore();
      });

      // 2. Render Photons traveling along the Pillar vectors
      photons.forEach((ph) => {
        ph.progress = (ph.progress + ph.speed) % 1;
        const curve = calculatedCurves[ph.bandIdx];
        if (curve) {
          const t = ph.progress;
          // Cubic Bezier interpolation
          const cx =
            Math.pow(1 - t, 3) * curve.startX +
            3 * Math.pow(1 - t, 2) * t * curve.cp1x +
            3 * (1 - t) * Math.pow(t, 2) * curve.cp2x +
            Math.pow(t, 3) * curve.endX;

          const cy =
            Math.pow(1 - t, 3) * curve.startY +
            3 * Math.pow(1 - t, 2) * t * curve.cp1y +
            3 * (1 - t) * Math.pow(t, 2) * curve.cp2y +
            Math.pow(t, 3) * curve.endY;

          if (Number.isFinite(cx) && Number.isFinite(cy)) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(cx, cy, ph.size, 0, Math.PI * 2);
            ctx.fillStyle = ph.color;
            ctx.shadowColor = ph.color;
            ctx.shadowBlur = 10;
            ctx.fill();

            // Faint outer pulse ring
            ctx.beginPath();
            ctx.arc(cx, cy, ph.size * 2.2, 0, Math.PI * 2);
            ctx.strokeStyle = ph.color;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            ctx.restore();
          }
        }
      });

      // 3. Render Synaptic Floating Nodes & Interconnecting Lines
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0.40) p.vx *= -1;
        if (p.x > 0.98) p.vx *= -1;
        if (p.y < 0.05) p.vy *= -1;
        if (p.y > 0.95) p.vy *= -1;

        const px = p.x * width;
        const py = p.y * height;
        const pulse = 1 + Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.35;

        // Draw connections to nearby nodes
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const p2x = p2.x * width;
          const p2y = p2.y * height;
          const dist = Math.hypot(px - p2x, py - p2y);

          if (dist < 110 * dpr) {
            const alpha = Math.max(0, 1 - dist / (110 * dpr)) * 0.22;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(p2x, p2y);
            ctx.strokeStyle = `rgba(99, 91, 255, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw node
        if (Number.isFinite(px) && Number.isFinite(py)) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.5, p.radius * pulse), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    }

    // Initialize IntersectionObserver AFTER render function is defined
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
