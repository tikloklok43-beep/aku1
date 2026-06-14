"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Bell, Moon, Sun, User } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/LanguageContext";

type Lang = "ind" | "ara";

interface HeaderProps {
  darkMode: boolean;
  toggleDark: () => void;
  language: Lang;
  setLanguage: (lang: Lang) => void;
}

export default function Header({ darkMode, toggleDark, language, setLanguage }: HeaderProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const { t } = useLanguage();

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
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLanguage("ind")}
            className={
              language === "ind"
                ? "h-9 px-3 rounded-2xl clay-card font-display text-[11px] font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#F5C6D9] shadow-clay hover:scale-[1.02] transition-transform"
                : "h-9 px-3 rounded-2xl clay-card font-display text-[11px] font-bold text-purple-900 dark:text-purple-100 hover:scale-[1.02] transition-transform"
            }
            aria-label="Bahasa Indonesia"
          >

            <span className="inline-flex items-center gap-2">
              <span className="inline-block w-6 h-6 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] overflow-hidden">
                <span className="block w-full h-1/2 bg-[#E11D48]" />
                <span className="block w-full h-1/2 bg-white" />
              </span>
              IND
            </span>
          </button>

          <button
            type="button"
            onClick={() => setLanguage("ara")}
            className={
              language === "ara"
                ? "h-9 px-3 rounded-2xl clay-card font-display text-[11px] font-bold text-white bg-gradient-to-r from-[#DC2626] to-[#075985] shadow-clay hover:scale-[1.02] transition-transform"
                : "h-9 px-3 rounded-2xl clay-card font-display text-[11px] font-bold text-purple-900 dark:text-purple-100 hover:scale-[1.02] transition-transform"
            }
            aria-label="Bahasa Arab"
          >

            <span className="inline-flex items-center gap-2">
              <span className="inline-block w-6 h-6 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] overflow-hidden">
                <span className="block w-full h-2/5 bg-[#DC2626]" />
                <span className="block w-full h-[60%] bg-[#075985]" />
              </span>
              ARA
            </span>
          </button>
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
