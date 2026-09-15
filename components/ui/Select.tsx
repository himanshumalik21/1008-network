import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, hint, leftIcon, id, children, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]"
          >
            {label}
            {props.required && <span className="text-[#F4511E] ml-1">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-[#627D98] pointer-events-none z-10">
              {leftIcon}
            </div>
          )}
          <select
            id={selectId}
            ref={ref}
            className={cn(
              "w-full h-11 rounded-xl bg-white border border-[#E6E8EB] px-3.5 pr-10 text-sm text-[#0A2540] transition-colors appearance-none focus:border-[#635BFF] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#635BFF] disabled:opacity-50 shadow-xs cursor-pointer",
              leftIcon && "pl-10",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500",
              className
            )}
            {...props}
          >
            {children}
          </select>
          <ChevronDown className="absolute right-3.5 h-4 w-4 text-[#8898AA] pointer-events-none" />
        </div>
        {hint && !error && <p className="text-xs text-[#8898AA]">{hint}</p>}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
