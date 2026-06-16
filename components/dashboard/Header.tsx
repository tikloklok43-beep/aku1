"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Bell, Moon, Sun, User } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/LanguageContext";

type Lang = "ind" | "ara";

function TranslateIcon({ className }: { className?: string }) {
  return (
    <img
      src="https://cdn.phototourl.com/free/2026-06-15-4adf0d4c-35a0-4f50-9281-412c894c1747.png"
      alt="Translate"
      className={className}
      loading="lazy"
      draggable={false}
    />
  );
}

function LanguageNotice({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded-lg bg-white/90 dark:bg-purple-950/90 border border-white/60 dark:border-purple-800/40 text-[10px] font-bold text-purple-900 dark:text-purple-100 shadow-lg whitespace-nowrap"
      role="status"
      aria-live="polite"
    >
      {text}
    </motion.div>
  );
}

interface HeaderProps {
  darkMode: boolean;
  toggleDark: () => void;
  language: Lang;
  setLanguage: (lang: Lang) => void;
}

export default function Header({ darkMode, toggleDark, language, setLanguage }: HeaderProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const { t } = useLanguage();
  const [langNotice, setLangNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!langNotice) return;
    const id = window.setTimeout(() => setLangNotice(null), 1200);
    return () => window.clearTimeout(id);
  }, [langNotice]);

  const handleSetLanguage = (next: Lang) => {
    // Selalu update state & notifikasi sesuai target language
    setLanguage(next);
    setLangNotice(next === "ara" ? "Arabic" : "indo");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-4 clay-card rounded-none border-b border-clay-lavender/40 dark:border-purple-800/30 bg-white/80 dark:bg-purple-950/80 backdrop-blur-xl"
    >
      {/* Title */}
      <div className="pl-10 lg:pl-0">
        <h1 className="font-display font-semibold text-lg sm:text-xl text-purple-900 dark:text-purple-100">
          {t.dashboard}
        </h1>
        <p className="text-xs text-purple-400 hidden sm:block">
          {t.welcomeBack}
        </p>

      </div>

      {/* Search + actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search bar */}
        <motion.div
          animate={{ width: searchFocused ? 220 : 150 }}
          transition={{ type: "spring", damping: 20 }}
          className="hidden sm:block overflow-hidden"
        >
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none"
            />
            <Input
              placeholder="Search..."
              className="pl-8 h-9 text-xs rounded-2xl"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </motion.div>

        {/* Language toggle */}
        <div className="flex sm:flex items-center gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => handleSetLanguage(language === "ind" ? "ara" : "ind")}
              className={
                language === "ind"
                  ? "h-9 px-3 rounded-2xl clay-card font-display text-[11px] font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#F5C6D9] shadow-clay hover:scale-[1.02] transition-transform"
                  : "h-9 px-3 rounded-2xl clay-card font-display text-[11px] font-bold text-white bg-gradient-to-r from-[#DC2626] to-[#075985] shadow-clay hover:scale-[1.02] transition-transform"
              }
              aria-label="Switch language"
            >
              <span className="inline-flex items-center gap-2">
                <TranslateIcon className="w-6 h-6" />
              </span>
            </button>

            <AnimatePresence>
              {langNotice ? <LanguageNotice text={langNotice} /> : null}
            </AnimatePresence>
          </div>
        </div>

        {/* Dark mode */}
        <button
          onClick={toggleDark}
          className="w-9 h-9 rounded-2xl clay-card flex items-center justify-center text-purple-500 hover:text-purple-700 transition-colors"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>


        {/* Notifications */}
        <div className="relative">
          <button className="w-9 h-9 rounded-2xl clay-card flex items-center justify-center text-purple-500 hover:text-purple-700 transition-colors">
            <Bell size={16} />
          </button>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-clay-rose rounded-full border border-white animate-pulse" />
        </div>

        {/* Avatar */}
        <button className="w-9 h-9 rounded-2xl bg-gradient-to-br from-clay-purple to-clay-rose shadow-clay flex items-center justify-center text-white">
          <User size={15} />
        </button>
      </div>
    </motion.header>
  );
}
