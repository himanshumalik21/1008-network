import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      href,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 disabled:opacity-50 disabled:pointer-events-none rounded-lg active:scale-[0.98] select-none";

    const variantStyles = {
      primary:
        "bg-gradient-to-b from-amber-400 to-amber-500 text-black font-semibold shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:from-amber-300 hover:to-amber-400 border border-amber-300/40",
      secondary:
        "bg-surface-50/80 hover:bg-surface-50 text-foreground border border-white/[0.1] hover:border-white/[0.2] hover:text-white shadow-sm",
      outline:
        "bg-transparent text-muted hover:text-foreground border border-white/[0.12] hover:border-white/[0.25]",
      ghost:
        "bg-transparent text-muted hover:text-foreground hover:bg-white/[0.04]",
      cyan:
        "bg-gradient-to-b from-cyan-400 to-cyan-500 text-black font-semibold shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:from-cyan-300 hover:to-cyan-400 border border-cyan-300/40",
      danger:
        "bg-red-500/10 text-red-400 border border-red-500/25 hover:bg-red-500/20",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5 h-8",
      md: "text-sm px-4 py-2.5 gap-2 h-10",
      lg: "text-base px-6 py-3.5 gap-2.5 h-12",
      icon: "h-10 w-10 p-0",
    };

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
