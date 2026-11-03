"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  baseAngle: number;
  speed: number;
  radialDist: number; // distance offset from ring center radius
  zOffset: number; // vertical height offset
  size: number;
  baseAlpha: number;
  pulsePhase: number;
  pulseSpeed: number;
  colorType: number; // 0: Iris, 1: Electric Indigo, 2: Mint/Cyan, 3: Teal, 4: Deep Obsidian, 5: Warm Amber
}

export function VexonHaloBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Mouse tilt tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetMouseX = (e.clientX - halfW) / halfW; // -1 to 1
      targetMouseY = (e.clientY - halfH) / halfH; // -1 to 1
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Particle Palette (Optimized for light pearl background)
    // Jewel-toned iris, cyan/mint, deep obsidian, and subtle amber accents
    const palette = [
      { r: 99, g: 91, b: 255 }, // 0: 1008 Brand Iris
      { r: 79, g: 70, b: 229 }, // 1: Electric Indigo
      { r: 0, g: 212, b: 178 }, // 2: Mint / Cyan
      { r: 0, g: 163, b: 137 }, // 3: Deep Teal
      { r: 10, g: 37, b: 64 }, // 4: Obsidian Navy
      { r: 255, g: 107, b: 74 }, // 5: Sunset Coral Accent
    ];

    // Generate Particles
    const PARTICLE_COUNT = 3400;
    const particles: Particle[] = [];

    // Gaussian random helper for natural stardust dispersion
    const randomGaussian = () => {
      let u = 0;
      let v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // 75% core dense ring, 20% outer diffuse halo, 5% ambient floaters
      const tier = Math.random();
      let radialSpread = 0;
      if (tier < 0.75) {
        radialSpread = randomGaussian() * 32;
      } else if (tier < 0.95) {
        radialSpread = randomGaussian() * 75;
      } else {
        radialSpread = (Math.random() - 0.5) * 260;
      }

      // Color distribution: 40% Iris, 25% Mint, 15% Indigo, 10% Navy, 6% Teal, 4% Sunset Coral
      let colorType = 0;
      const colorRoll = Math.random();
      if (colorRoll < 0.4) colorType = 0;
      else if (colorRoll < 0.65) colorType = 2;
      else if (colorRoll < 0.8) colorType = 1;
      else if (colorRoll < 0.9) colorType = 4;
      else if (colorRoll < 0.96) colorType = 3;
      else colorType = 5;

      // Particle size between 0.75px and 2.6px
      const sizeRoll = Math.random();
      const size =
        sizeRoll > 0.96
          ? 2.2 + Math.random() * 0.8
          : sizeRoll > 0.85
          ? 1.5 + Math.random() * 0.6
          : 0.75 + Math.random() * 0.65;

      // Orbital speed: Keplerian-like (slightly faster inside)
      const baseSpeed = 0.00075 + Math.random() * 0.0006;
      const speed = radialSpread < 0 ? baseSpeed * 1.15 : baseSpeed * 0.9;

      particles.push({
        colorType,
        baseAngle: Math.random() * Math.PI * 2,
        speed,
        radialDist: radialSpread,
        zOffset: randomGaussian() * 24,
        size,
        baseAlpha: 0.28 + Math.random() * 0.52,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.03,
      });
    }

    const resize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Simulation loop
    let globalRotation = 0;

    const render = () => {
      if (!ctx) return;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Orbital Center and Dimensions
      // Center slightly above middle and slightly right of center to match Vexon perspective
      const cx = width * 0.52 + mouseX * 24;
      const cy = height * 0.42 + mouseY * 18;

      // Base ring radii (scaled by viewport width)
      const baseRx = Math.max(340, Math.min(width * 0.44, 680));
      // Elliptical pitch: 0.48 gives the inclined 3D planetary ring tilt of Vexon
      const baseRy = baseRx * (0.46 + mouseY * 0.04);

      if (!prefersReducedMotion) {
        globalRotation += 0.0007;
      }

      // Draw all particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.baseAngle += p.speed;
          p.pulsePhase += p.pulseSpeed;
        }

        const angle = p.baseAngle + globalRotation;
        const currentR = baseRx + p.radialDist;

        // 3D Elliptical Projection with Tilt
        const sinA = Math.sin(angle);
        const cosA = Math.cos(angle);

        // Tilt angle (slight counter-clockwise incline of ~12 degrees like Vexon)
        const tiltAngle = -0.18;
        const xRaw = currentR * cosA;
        const yRaw = currentR * (baseRy / baseRx) * sinA + p.zOffset;

        // Apply 2D rotation for the orbital tilt
        const x = cx + xRaw * Math.cos(tiltAngle) - yRaw * Math.sin(tiltAngle);
        const y = cy + xRaw * Math.sin(tiltAngle) + yRaw * Math.cos(tiltAngle);

        // 3D Depth Perception:
        // Front arc (sinA > 0) is closer to camera -> slightly bigger, crisper opacity
        // Back arc (sinA < 0) is farther -> slightly softer
        const depthFactor = 0.85 + sinA * 0.28;
        const particleSize = p.size * depthFactor;

        // Pulse shimmer
        const shimmer = 0.82 + Math.sin(p.pulsePhase) * 0.18;
        const alpha = Math.min(
          1,
          Math.max(0.08, p.baseAlpha * depthFactor * shimmer)
        );

        const col = palette[p.colorType];

        ctx.beginPath();
        ctx.arc(x, y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${alpha})`;
        ctx.fill();
      }

      // Draw 3 subtle focal star sparks at key positions along the arc
      const sparkPositions = [0.25, 1.45, 3.8];
      for (let s = 0; s < sparkPositions.length; s++) {
        const sparkAngle = sparkPositions[s] + globalRotation * 0.5;
        const sparkR = baseRx + Math.sin(sparkAngle * 3) * 12;
        const sxRaw = sparkR * Math.cos(sparkAngle);
        const syRaw = sparkR * (baseRy / baseRx) * Math.sin(sparkAngle);
        const tiltAngle = -0.18;
        const sx =
          cx + sxRaw * Math.cos(tiltAngle) - syRaw * Math.sin(tiltAngle);
        const sy =
          cy + sxRaw * Math.sin(tiltAngle) + syRaw * Math.cos(tiltAngle);

        // Core bright spark
        ctx.beginPath();
        ctx.arc(sx, sy, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 91, 255, 0.95)";
        ctx.fill();

        // Cross rays
        ctx.strokeStyle = "rgba(0, 212, 178, 0.65)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(sx - 7, sy);
        ctx.lineTo(sx + 7, sy);
        ctx.moveTo(sx, sy - 7);
        ctx.lineTo(sx, sy + 7);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause animation when page tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* 1. Pristine Pearl Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFCFF] via-[#F4F7FC] to-[#EDF2FA]" />

      {/* 2. Concentric Ethereal Aura Glows Behind the Ring Core */}
      {/* Center Void / Eclipse Core */}
      <div className="absolute top-[38%] left-[52%] -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] rounded-[100%] bg-gradient-to-tr from-[#635BFF]/10 via-[#00D4B2]/08 to-transparent blur-[110px] pointer-events-none" />

      {/* Outer Atmospheric Radiant Halos */}
      <div className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-[#635BFF]/10 via-[#4F46E5]/06 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-[15%] -right-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tl from-[#00D4B2]/12 via-[#00A68C]/08 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[18%] right-[20%] w-[450px] h-[350px] rounded-full bg-gradient-to-bl from-[#FF6B4A]/06 to-transparent blur-[120px] pointer-events-none" />

      {/* 3. High-Performance Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block transform-gpu"
      />

      {/* 4. Subtle Radial Vignette to focus contrast towards the content center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, transparent 40%, rgba(244, 247, 252, 0.45) 85%, rgba(237, 242, 250, 0.8) 100%)",
        }}
      />
    </div>
  );
}
