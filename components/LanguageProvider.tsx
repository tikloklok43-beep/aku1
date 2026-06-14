"use client";

import { LanguageProvider as LangProvider } from "@/lib/LanguageContext";
import { ReactNode } from "react";

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}