"use client";

import React, { useEffect, useRef } from "react";

interface InteractiveNetworkGlobeProps {
  className?: string;
}

export function InteractiveNetworkGlobe({ className }: InteractiveNetworkGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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

    // Generate 3D point cloud on sphere
    const pointCount = 700;
    const points: Array<{
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
    }> = [];

    const radius = 180;

    for (let i = 0; i < pointCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / pointCount);
      const theta = Math.sqrt(pointCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      points.push({ x, y, z, baseX: x, baseY: y, baseZ: z });
    }

    // Key Hotspot Hubs (e.g. Delhi NCR, Bengaluru, Mumbai, Pune, Hyderabad, London, SF)
    const hubs = [
      { lat: 28.6, lon: 77.2, label: "Delhi NCR", color: "#635BFF" },
      { lat: 12.9, lon: 77.5, label: "Bengaluru", color: "#00D4B2" },
      { lat: 19.0, lon: 72.8, label: "Mumbai", color: "#FF7043" },
      { lat: 17.3, lon: 78.4, label: "Hyderabad", color: "#635BFF" },
      { lat: 18.5, lon: 73.8, label: "Pune", color: "#00D4B2" },
      { lat: 51.5, lon: -0.1, label: "London", color: "#635BFF" },
      { lat: 37.7, lon: -122.4, label: "San Francisco", color: "#00D4B2" },
    ];

    let rotationY = 0;
    let rotationX = 0.3;

    // Animated Arcs
    const arcs = [
      { from: 0, to: 1, progress: 0, speed: 0.008, color: "#635BFF" },
      { from: 1, to: 2, progress: 0.3, speed: 0.009, color: "#00D4B2" },
      { from: 2, to: 0, progress: 0.6, speed: 0.007, color: "#FF7043" },
      { from: 0, to: 5, progress: 0.2, speed: 0.006, color: "#635BFF" },
      { from: 1, to: 6, progress: 0.5, speed: 0.007, color: "#00D4B2" },
    ];

    const latLonToVector3 = (lat: number, lon: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return {
        x: -(r * Math.sin(phi) * Math.cos(theta)),
        y: r * Math.cos(phi),
        z: r * Math.sin(phi) * Math.sin(theta),
      };
    };

    let animationFrameId: number;

    const render = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      rotationY += 0.004;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = 400;

      // Transform and project sphere points
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      // Render faint sphere halo
      const halo = ctx.createRadialGradient(cx, cy, radius * 0.4, cx, cy, radius * 1.2);
      halo.addColorStop(0, "rgba(99, 91, 255, 0.06)");
      halo.addColorStop(0.7, "rgba(0, 212, 178, 0.04)");
      halo.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.2, 0, Math.PI * 2);
      ctx.fill();

      // Render point cloud
      points.forEach((p) => {
        // Rotate Y
        let x1 = p.baseX * cosY - p.baseZ * sinY;
        let z1 = p.baseZ * cosY + p.baseX * sinY;

        // Rotate X
        let y1 = p.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.baseY * sinX;

        // Only draw visible hemisphere & soft back points
        const scale = fov / (fov + z2);
        const projX = cx + x1 * scale;
        const projY = cy + y1 * scale;

        const alpha = Math.max(0.1, (z2 + radius) / (radius * 2));
        const size = Math.max(0.8, 1.6 * scale);

        ctx.beginPath();
        ctx.arc(projX, projY, size, 0, Math.PI * 2);
        ctx.fillStyle = z2 > 0 ? `rgba(99, 91, 255, ${alpha * 0.7})` : `rgba(148, 163, 184, ${alpha * 0.25})`;
        ctx.fill();
      });

      // Project Hubs
      const projectedHubs = hubs.map((h) => {
        const v = latLonToVector3(h.lat, h.lon, radius);
        let x1 = v.x * cosY - v.z * sinY;
        let z1 = v.z * cosY + v.x * sinY;
        let y1 = v.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + v.y * sinX;

        const scale = fov / (fov + z2);
        return {
          x: cx + x1 * scale,
          y: cy + y1 * scale,
          z: z2,
          visible: z2 > -40,
          color: h.color,
          label: h.label,
        };
      });

      // Draw Arcs
      arcs.forEach((arc) => {
        arc.progress = (arc.progress + arc.speed) % 1;
        const h1 = projectedHubs[arc.from];
        const h2 = projectedHubs[arc.to];

        if (h1 && h2 && (h1.visible || h2.visible)) {
          ctx.beginPath();
          ctx.moveTo(h1.x, h1.y);

          const midX = (h1.x + h2.x) / 2;
          const midY = (h1.y + h2.y) / 2 - 40; // curve upward

          ctx.quadraticCurveTo(midX, midY, h2.x, h2.y);
          ctx.strokeStyle = `rgba(99, 91, 255, 0.35)`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Animated particle moving along the arc
          const t = arc.progress;
          const px = (1 - t) * (1 - t) * h1.x + 2 * (1 - t) * t * midX + t * t * h2.x;
          const py = (1 - t) * (1 - t) * h1.y + 2 * (1 - t) * t * midY + t * t * h2.y;

          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fillStyle = arc.color;
          ctx.shadowColor = arc.color;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw Hub Pins
      projectedHubs.forEach((h) => {
        if (h.visible) {
          ctx.beginPath();
          ctx.arc(h.x, h.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = h.color;
          ctx.fill();

          // Outer pulse ring
          ctx.beginPath();
          ctx.arc(h.x, h.y, 7, 0, Math.PI * 2);
          ctx.strokeStyle = h.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
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
