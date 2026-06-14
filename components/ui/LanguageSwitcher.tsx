"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-clay-purple/10 hover:bg-clay-purple/20 transition-colors text-sm font-medium"
      aria-label={t.switchLanguage}
    >
      <Languages size={16} />
      <span>{language === "id" ? "العربية" : "Indonesia"}</span>
    </button>
  );
}