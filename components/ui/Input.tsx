import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, leftIcon, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full space-y-1.5 text-left flex flex-col justify-end">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold uppercase tracking-wider text-[#627D98] flex items-center min-h-[20px] leading-tight"
            title={label}
          >
            <span className="truncate">{label}</span>
            {props.required && <span className="text-[#F4511E] ml-1 shrink-0">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-[#627D98] pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full h-11 rounded-xl bg-white border border-[#E6E8EB] px-3.5 text-sm text-[#0A2540] placeholder:text-[#8898AA] transition-colors focus:border-[#635BFF] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#635BFF] disabled:opacity-50 shadow-xs",
              leftIcon && "pl-10",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500",
              className
            )}
            {...props}
          />
        </div>
        {hint && !error && <p className="text-xs text-[#8898AA]">{hint}</p>}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
