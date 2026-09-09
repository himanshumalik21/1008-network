import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "cyan" | "danger";
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
      "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF]/40 disabled:opacity-50 disabled:pointer-events-none rounded-full active:scale-[0.98] select-none tracking-tight";

    const variantStyles = {
      primary:
        "bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold shadow-[0_2px_4px_rgba(45,35,66,0.15),0_7px_13px_-3px_rgba(45,35,66,0.2)] hover:shadow-[0_4px_8px_rgba(45,35,66,0.2),0_10px_20px_-3px_rgba(45,35,66,0.25)] border border-[#635BFF]",
      secondary:
        "bg-[#F6F9FC] hover:bg-[#E3E8EE] text-[#0A2540] border border-[#E6E8EB] hover:border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] font-semibold",
      outline:
        "bg-white hover:bg-[#F6F9FC] text-[#0A2540] border border-[#E6E8EB] hover:border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] font-medium",
      dark:
        "bg-[#0A2540] hover:bg-[#1E3A5F] text-white font-semibold shadow-[0_2px_6px_rgba(10,37,64,0.2)]",
      ghost:
        "bg-transparent text-[#425466] hover:text-[#0A2540] hover:bg-[#F6F9FC] font-medium",
      cyan:
        "bg-[#00D4B2] hover:bg-[#00B89A] text-[#0A2540] font-semibold shadow-[0_2px_4px_rgba(0,212,178,0.2)]",
      danger:
        "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 font-medium",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 h-8",
      md: "text-sm px-5 py-2.5 gap-2 h-10",
      lg: "text-base px-7 py-3.5 gap-2.5 h-12",
      icon: "h-10 w-10 p-0 rounded-full",
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
