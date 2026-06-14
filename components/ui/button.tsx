"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "clay" | "clay-pink" | "clay-peach";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 select-none cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-purple/50",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "active:scale-[0.97]",
          {
            // Variants
            "bg-gradient-to-br from-clay-purple to-clay-lilac text-white shadow-clay hover:shadow-clay-lg hover:scale-[1.02]":
              variant === "primary",
            "bg-white/70 text-purple-700 border border-clay-lavender shadow-glossy hover:bg-white/90":
              variant === "secondary",
            "border-2 border-clay-purple/40 text-purple-700 hover:bg-clay-lavender/30":
              variant === "outline",
            "text-purple-600 hover:bg-clay-lavender/40": variant === "ghost",
            "bg-gradient-to-br from-clay-lavender/80 to-clay-purple/30 text-purple-800 border border-white/60 shadow-clay hover:shadow-clay-lg":
              variant === "clay",
            "bg-gradient-to-br from-clay-pink/80 to-clay-rose/40 text-pink-800 border border-white/60 shadow-clay-pink hover:shadow-clay-lg":
              variant === "clay-pink",
            "bg-gradient-to-br from-clay-peach/80 to-clay-cream/60 text-amber-800 border border-white/60 shadow-clay-peach":
              variant === "clay-peach",

            // Sizes
            "text-xs px-3 py-1.5 rounded-xl": size === "sm",
            "text-sm px-4 py-2 rounded-2xl": size === "md",
            "text-base px-6 py-2.5 rounded-2xl": size === "lg",
            "text-base px-8 py-3.5 rounded-3xl": size === "xl",
            "w-9 h-9 rounded-2xl p-0": size === "icon",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
