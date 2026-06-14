"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-2xl bg-white/60 backdrop-blur-sm",
          "border border-clay-lavender/60 px-4 py-2.5 text-sm",
          "placeholder:text-purple-300 text-purple-900",
          "focus:outline-none focus:ring-2 focus:ring-clay-purple/40 focus:border-clay-purple/50",
          "transition-all duration-200",
          "shadow-clay-inset",
          "dark:bg-purple-950/30 dark:text-purple-100 dark:border-purple-800/40 dark:placeholder:text-purple-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
