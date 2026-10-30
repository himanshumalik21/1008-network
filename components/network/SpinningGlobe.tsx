"use client";

import React, { useEffect, useRef } from "react";

interface SpinningGlobeProps {
  className?: string;
  size?: number;
}

interface NetworkNode {
  lat: number;
  lon: number;
  color?: string;
}

// Key ecosystem hubs represented on the 1008 Network globe
const GLOBAL_HUBS: NetworkNode[] = [
  { lat: 12.97, lon: 77.59, color: "#00D4B2" },   // Bengaluru
  { lat: 19.07, lon: 72.87, color: "#635BFF" },   // Mumbai
  { lat: 28.61, lon: 77.20, color: "#00D4B2" },   // Delhi NCR
  { lat: 13.08, lon: 80.27, color: "#635BFF" },   // Chennai
  { lat: 17.38, lon: 78.48, color: "#00D4B2" },   // Hyderabad
  { lat: 1.35, lon: 103.82, color: "#635BFF" },   // Singapore
  { lat: 25.20, lon: 55.27, color: "#00D4B2" },   // Dubai
  { lat: 51.50, lon: -0.12, color: "#635BFF" },   // London
  { lat: 37.77, lon: -122.42, color: "#00D4B2" }, // San Francisco
  { lat: 35.68, lon: 139.69, color: "#635BFF" },  // Tokyo
];

export function SpinningGlobe({ className = "", size = 360 }: SpinningGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // High-DPI canvas scaling for Retina / 4K displays
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2.5) : 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const R = size * 0.38; // Radius leaves ample buffer so globe is 100% complete and never cut off

    // Axial tilt constants: Earth-like 23.5° roll tilt and 16° pitch angle (looking slightly down)
    const alpha = (16 * Math.PI) / 180; // Pitch angle
    const beta = (-23.5 * Math.PI) / 180; // Axial roll tilt

    let animId: number;
    let isVisible = true;
    let lastTime = performance.now();
    let currentAngle = 0;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 3D coordinate rotation and orthographic projection
    function project(
      latRad: number,
      lonRad: number,
      rotAngle: number
    ): { x: number; y: number; z: number } {
      const cosLat = Math.cos(latRad);
      const sinLat = Math.sin(latRad);
      const totalLon = lonRad + rotAngle;

      // Unrotated sphere coordinates (z > 0 towards viewer)
      const x0 = R * cosLat * Math.sin(totalLon);
      const y0 = R * sinLat;
      const z0 = R * cosLat * Math.cos(totalLon);

      // Pitch rotation around X-axis (elevation view)
      const x1 = x0;
      const y1 = y0 * Math.cos(alpha) - z0 * Math.sin(alpha);
      const z1 = y0 * Math.sin(alpha) + z0 * Math.cos(alpha);

      // Roll rotation around Z-axis (axial tilt)
      const x2 = x1 * Math.cos(beta) - y1 * Math.sin(beta);
      const y2 = x1 * Math.sin(beta) + y1 * Math.cos(beta);
      const z2 = z1;

      return {
        x: cx + x2,
        y: cy - y2,
        z: z2,
      };
    }

    const latitudes = [-60, -40, -20, 0, 20, 40, 60];
    const meridiansCount = 12;

    function renderFrame(now: number) {
      if (!isVisible || !ctx) return;

      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (!prefersReducedMotion) {
        // Slow majestic rotation: 1 full 360° revolution every ~45 seconds
        currentAngle += (2 * Math.PI * delta) / 45;
      }

      ctx.clearRect(0, 0, size, size);

      // 1. Draw Polar Axis Line (Tilted across North & South poles)
      const southPole = project(-Math.PI / 2 * 1.15, 0, currentAngle);
      const northPole = project(Math.PI / 2 * 1.15, 0, currentAngle);

      ctx.beginPath();
      ctx.moveTo(southPole.x, southPole.y);
      ctx.lineTo(northPole.x, northPole.y);
      ctx.strokeStyle = "rgba(99, 91, 255, 0.22)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([3, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Small polar caps
      [southPole, northPole].forEach((pole) => {
        ctx.beginPath();
        ctx.arc(pole.x, pole.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 91, 255, 0.4)";
        ctx.fill();
      });

      // 2. Back Longitude Meridians (z < 0)
      ctx.lineWidth = 0.9;
      for (let m = 0; m < meridiansCount; m++) {
        const lon = (m * Math.PI) / (meridiansCount / 2);
        let drawing = false;

        for (let step = 0; step <= 50; step++) {
          const lat = -Math.PI / 2 + (step * Math.PI) / 50;
          const pt = project(lat, lon, currentAngle);

          if (pt.z <= 0) {
            if (!drawing) {
              ctx.beginPath();
              ctx.moveTo(pt.x, pt.y);
              drawing = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            if (drawing) {
              ctx.strokeStyle = "rgba(10, 37, 64, 0.08)";
              ctx.stroke();
              drawing = false;
            }
          }
        }
        if (drawing) {
          ctx.strokeStyle = "rgba(10, 37, 64, 0.08)";
          ctx.stroke();
        }
      }

      // 3. Back Latitude Rings (z < 0)
      latitudes.forEach((latDeg) => {
        const lat = (latDeg * Math.PI) / 180;
        const isEquator = latDeg === 0;
        let drawing = false;

        for (let step = 0; step <= 80; step++) {
          const lon = (step * 2 * Math.PI) / 80;
          const pt = project(lat, lon, currentAngle);

          if (pt.z <= 0) {
            if (!drawing) {
              ctx.beginPath();
              ctx.moveTo(pt.x, pt.y);
              drawing = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            if (drawing) {
              ctx.strokeStyle = isEquator
                ? "rgba(0, 212, 178, 0.16)"
                : "rgba(99, 91, 255, 0.09)";
              ctx.lineWidth = isEquator ? 1.2 : 0.8;
              ctx.stroke();
              drawing = false;
            }
          }
        }
        if (drawing) {
          ctx.strokeStyle = isEquator
            ? "rgba(0, 212, 178, 0.16)"
            : "rgba(99, 91, 255, 0.09)";
          ctx.lineWidth = isEquator ? 1.2 : 0.8;
          ctx.stroke();
        }
      });

      // 4. Outer Sphere Rim Circle (Continuous complete circle in vector space)
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(99, 91, 255, 0.35)";
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // Subtle atmospheric inner glow
      const rimGrad = ctx.createRadialGradient(cx, cy, R * 0.82, cx, cy, R);
      rimGrad.addColorStop(0, "rgba(99, 91, 255, 0)");
      rimGrad.addColorStop(1, "rgba(99, 91, 255, 0.06)");
      ctx.fillStyle = rimGrad;
      ctx.fill();

      // 5. Front Latitude Rings (z > 0)
      latitudes.forEach((latDeg) => {
        const lat = (latDeg * Math.PI) / 180;
        const isEquator = latDeg === 0;
        let drawing = false;

        for (let step = 0; step <= 80; step++) {
          const lon = (step * 2 * Math.PI) / 80;
          const pt = project(lat, lon, currentAngle);

          if (pt.z > 0) {
            if (!drawing) {
              ctx.beginPath();
              ctx.moveTo(pt.x, pt.y);
              drawing = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            if (drawing) {
              ctx.strokeStyle = isEquator
                ? "rgba(0, 212, 178, 0.45)"
                : "rgba(99, 91, 255, 0.28)";
              ctx.lineWidth = isEquator ? 1.6 : 1.1;
              ctx.stroke();
              drawing = false;
            }
          }
        }
        if (drawing) {
          ctx.strokeStyle = isEquator
            ? "rgba(0, 212, 178, 0.45)"
            : "rgba(99, 91, 255, 0.28)";
          ctx.lineWidth = isEquator ? 1.6 : 1.1;
          ctx.stroke();
        }
      });

      // 6. Front Longitude Meridians (z > 0)
      ctx.lineWidth = 1.1;
      for (let m = 0; m < meridiansCount; m++) {
        const lon = (m * Math.PI) / (meridiansCount / 2);
        let drawing = false;

        for (let step = 0; step <= 50; step++) {
          const lat = -Math.PI / 2 + (step * Math.PI) / 50;
          const pt = project(lat, lon, currentAngle);

          if (pt.z > 0) {
            if (!drawing) {
              ctx.beginPath();
              ctx.moveTo(pt.x, pt.y);
              drawing = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            if (drawing) {
              ctx.strokeStyle = "rgba(10, 37, 64, 0.28)";
              ctx.stroke();
              drawing = false;
            }
          }
        }
        if (drawing) {
          ctx.strokeStyle = "rgba(10, 37, 64, 0.28)";
          ctx.stroke();
        }
      }

      // 7. Rotating Network Nodes (Global Talent Hubs)
      GLOBAL_HUBS.forEach((hub, idx) => {
        const latRad = (hub.lat * Math.PI) / 180;
        const lonRad = (hub.lon * Math.PI) / 180;
        const pt = project(latRad, lonRad, currentAngle);

        // Only render when on the front hemisphere facing viewer
        if (pt.z > 0) {
          const depthAlpha = Math.min(1, pt.z / (R * 0.7));
          const pulse = Math.sin((now / 1000) * 3 + idx * 0.8) * 0.5 + 0.5;

          // Outer pulse ring
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 4 + pulse * 3.5, 0, Math.PI * 2);
          ctx.strokeStyle =
            hub.color === "#00D4B2"
              ? `rgba(0, 212, 178, ${0.35 * depthAlpha})`
              : `rgba(99, 91, 255, ${0.35 * depthAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Core node dot
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2.8, 0, Math.PI * 2);
          ctx.fillStyle =
            hub.color === "#00D4B2"
              ? `rgba(0, 212, 178, ${0.85 * depthAlpha})`
              : `rgba(99, 91, 255, ${0.85 * depthAlpha})`;
          ctx.fill();
        }
      });

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(renderFrame);
      }
    }

    // IntersectionObserver to pause rendering when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !prefersReducedMotion) {
            lastTime = performance.now();
            animId = requestAnimationFrame(renderFrame);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    animId = requestAnimationFrame(renderFrame);

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
        className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#635BFF]/10 via-[#00D4B2]/08 to-transparent blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      {/* 3D Wireframe Canvas */}
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="relative z-10 block"
      />
    </div>
  );
}
