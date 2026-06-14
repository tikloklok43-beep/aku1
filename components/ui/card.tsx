"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "clay" | "clay-pink" | "clay-peach" | "clay-lavender" | "hero" | "glass";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl overflow-hidden relative",
          {
            "clay-card": variant === "default",
            "bg-white/75 backdrop-blur-xl border border-white/60 shadow-clay": variant === "clay",
            "bg-gradient-to-br from-clay-pink/60 to-clay-rose/30 backdrop-blur-xl border border-white/60 shadow-clay-pink":
              variant === "clay-pink",
            "bg-gradient-to-br from-clay-peach/60 to-clay-cream/40 backdrop-blur-xl border border-white/60 shadow-clay-peach":
              variant === "clay-peach",
            "bg-gradient-to-br from-clay-lavender/70 to-clay-purple/20 backdrop-blur-xl border border-white/60 shadow-clay":
              variant === "clay-lavender",
            "bg-hero-gradient text-white overflow-hidden": variant === "hero",
            "bg-white/40 backdrop-blur-2xl border border-white/50 shadow-glossy": variant === "glass",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-5 pb-0", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-display font-semibold leading-tight", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm opacity-70 mt-1", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-5", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-5 pt-0 flex items-center", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
