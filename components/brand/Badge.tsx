import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "amber" | "cyan" | "emerald" | "slate" | "outline";
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
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/25",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    slate: "bg-white/[0.04] text-muted border-white/[0.08]",
    outline: "bg-transparent text-foreground border-white/[0.15]",
  };

  const dotColors = {
    amber: "bg-amber-400",
    cyan: "bg-cyan-400",
    emerald: "bg-emerald-400",
    slate: "bg-muted",
    outline: "bg-white",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 font-mono",
    md: "text-xs px-2.5 py-1 font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-all duration-200 tracking-tight select-none",
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
