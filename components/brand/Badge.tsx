import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "indigo" | "amber" | "cyan" | "emerald" | "slate" | "outline";
  size?: "sm" | "md";
  pulse?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "slate",
  size = "md",
  pulse = false,
  className,
  icon,
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF] font-semibold",
    indigo: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF] font-semibold",
    amber: "bg-[#FFF4ED] text-[#F4511E] border-[#FFE0D2] font-semibold",
    cyan: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA] font-semibold",
    emerald: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0] font-semibold",
    slate: "bg-[#F6F9FC] text-[#425466] border-[#E6E8EB] font-medium",
    outline: "bg-white text-[#0A2540] border-[#E6E8EB] shadow-xs font-medium",
  };

  const dotColors = {
    primary: "bg-[#635BFF]",
    indigo: "bg-[#635BFF]",
    amber: "bg-[#FF7043]",
    cyan: "bg-[#00D4B2]",
    emerald: "bg-[#10B981]",
    slate: "bg-[#8898AA]",
    outline: "bg-[#0A2540]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-sans tracking-tight",
    md: "text-xs px-3 py-1 font-sans tracking-tight",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-all duration-200 select-none shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              dotColors[variant]
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              dotColors[variant]
            )}
          />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
