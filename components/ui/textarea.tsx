"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-2xl bg-white/60 backdrop-blur-sm",
          "border border-clay-lavender/60 px-4 py-3 text-sm resize-none",
          "placeholder:text-purple-300 text-purple-900",
          "focus:outline-none focus:ring-2 focus:ring-clay-purple/40 focus:border-clay-purple/50",
          "transition-all duration-200 shadow-clay-inset",
          "dark:bg-purple-950/30 dark:text-purple-100 dark:border-purple-800/40 dark:placeholder:text-purple-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
