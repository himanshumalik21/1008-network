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
  const baseStyles = "relative rounded-2xl border transition-all duration-300 overflow-hidden";

  const variantStyles = {
    default: "bg-surface-100/80 border-border backdrop-blur-sm shadow-xs",
    subtle: "bg-surface-200/50 border-border-subtle",
    glow: "bg-surface-100/90 border-border shadow-lg",
    interactive:
      "bg-surface-100/80 border-border hover:border-border-hover hover:bg-surface-200 hover:shadow-md cursor-pointer",
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
