"use client";

import React, { useState } from "react";
import { Factory, CheckCircle2, ShieldCheck, Cpu, Zap, Activity } from "lucide-react";

export function IndustrialBlueprintGraphic() {
  const [activePin, setActivePin] = useState<number | null>(0);

  const pins = [
    {
      id: 0,
      x: "22%",
      y: "32%",
      label: "Site & Land Corridor",
      status: "Zoning Approved",
      color: "#059669",
      detail: "1.5 Acre Plot in Dedicated State Industrial Corridor",
    },
    {
      id: 1,
      x: "52%",
      y: "44%",
      label: "OEM Machinery Bay",
      status: "Die Calibrated",
      color: "#635BFF",
      detail: "3x Custom CNC Milling & Extrusion Line Procured",
    },
    {
      id: 2,
      x: "78%",
      y: "28%",
      label: "Clearances & Permits",
      status: "SPCB & Fire Cleared",
      color: "#00D4B2",
      detail: "State Pollution, Factory Inspector & GST Compliance",
    },
    {
      id: 3,
      x: "82%",
      y: "72%",
      label: "Dispatch & Freight Bay",
      status: "3PL Integrated",
      color: "#FF7043",
      detail: "National Logistics Hub Integration & Loading Dock",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E6E8EB] p-4 sm:p-5 relative overflow-hidden font-sans select-none shadow-xs">
      {/* Background CAD Technical Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
      
      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E6E8EB]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-pulse" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A2540]">
            Plant Commissioning CAD // Telemetry
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#635BFF] bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF] font-bold">
          LIVE STATUS
        </span>
      </div>

      {/* Isometric Floorplan Graphic Container */}
      <div className="relative z-10 my-4 h-48 sm:h-52 w-full rounded-xl bg-white border border-[#E6E8EB] p-3 flex items-center justify-center overflow-hidden shadow-2xs">
        {/* Subtle Floorplan SVG Outlines */}
        <svg className="w-full h-full text-[#CBD5E1]" viewBox="0 0 400 200" fill="none" stroke="currentColor">
          {/* Outer Boundary */}
          <rect x="20" y="20" width="360" height="160" rx="8" strokeWidth="1.5" strokeDasharray="4 4" fill="#F8FAFC" />
          
          {/* Main Assembly Hall */}
          <rect x="40" y="40" width="160" height="120" rx="4" strokeWidth="1.5" fill="#FFFFFF" />
          <line x1="40" y1="100" x2="200" y2="100" strokeWidth="1" strokeDasharray="2 2" />
          
          {/* Machinery Section */}
          <rect x="220" y="40" width="140" height="60" rx="4" strokeWidth="1.5" fill="#FFFFFF" />
          
          {/* Loading & Dispatch Zone */}
          <rect x="220" y="110" width="140" height="50" rx="4" strokeWidth="1.5" fill="#FFFFFF" />
          
          {/* Connecting Conveyor Flow Line */}
          <path d="M 120 70 L 220 70 L 290 70 L 290 110" stroke="#635BFF" strokeWidth="2" strokeDasharray="6 6" />
        </svg>

        {/* Interactive Floorplan Pins */}
        {pins.map((pin) => {
          const isActive = activePin === pin.id;
          return (
            <button
              key={pin.id}
              type="button"
              onClick={() => setActivePin(pin.id)}
              style={{ left: pin.x, top: pin.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group focus:outline-none"
            >
              <span className="relative flex h-6 w-6 items-center justify-center">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-40"
                  style={{ backgroundColor: pin.color }}
                />
                <span
                  className="relative inline-flex rounded-full h-4 w-4 border-2 border-white shadow-xs items-center justify-center text-[8px] font-bold text-white transition-transform group-hover:scale-125"
                  style={{ backgroundColor: pin.color }}
                >
                  ✓
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Telemetry Panel based on Active Pin */}
      <div className="relative z-10 p-3 rounded-xl bg-white border border-[#E6E8EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-2xs">
        {activePin !== null && (
          <>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: pins[activePin].color }}
                />
                <span className="text-xs font-bold text-[#0A2540]">
                  {pins[activePin].label}
                </span>
                <span className="text-[10px] font-mono text-[#059669] font-bold bg-[#ECFDF5] px-1.5 py-0.2 rounded border border-[#A7F3D0]">
                  {pins[activePin].status}
                </span>
              </div>
              <p className="text-[11px] text-[#425466]">
                {pins[activePin].detail}
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#627D98] shrink-0 font-semibold">
              PIN 0{activePin + 1} / 04
            </span>
          </>
        )}
      </div>
    </div>
  );
}
