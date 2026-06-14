"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "purple" | "pink" | "peach" | "mint" | "lavender";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "purple", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
          {
            "bg-clay-purple/20 text-purple-700 border border-clay-purple/30": variant === "purple",
            "bg-clay-pink/30 text-pink-700 border border-clay-pink/40": variant === "pink",
            "bg-clay-peach/40 text-amber-700 border border-clay-peach/50": variant === "peach",
            "bg-clay-mint/40 text-emerald-700 border border-clay-mint/50": variant === "mint",
            "bg-clay-lavender/50 text-purple-600 border border-clay-lavender/60": variant === "lavender",
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
