import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "glow" | "interactive";
  gradientGlow?: boolean;
}

export function Card({
  className,
  variant = "default",
  gradientGlow = false,
  children,
  ...props
}: CardProps) {
  const baseStyles = "relative rounded-xl border transition-all duration-300 overflow-hidden";

  const variantStyles = {
    default: "bg-surface-100/60 border-white/[0.08] backdrop-blur-sm",
    subtle: "bg-surface-200/40 border-white/[0.05]",
    glow: "bg-surface-100/80 border-white/[0.1] shadow-[0_0_30px_rgba(0,0,0,0.5)]",
    interactive:
      "bg-surface-100/60 border-white/[0.08] hover:border-white/[0.18] hover:bg-surface-100/90 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer",
  };

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {gradientGlow && (
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/10 blur-3xl rounded-full" />
      )}
      {children}
    </div>
  );
}
