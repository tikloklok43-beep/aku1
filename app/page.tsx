"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AnalyticsSection from "@/components/sections/AnalyticsSection";
import AboutSection from "@/components/sections/AboutSection";
import BooksSection from "@/components/sections/BooksSection";
import NasyidSection from "@/components/sections/NasyidSection";
import WebsetSection from "@/components/sections/WebsetSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import SettingsSection from "@/components/sections/SettingsSection";
import CtaBanner from "@/components/sections/CtaBanner";
import { useLanguage } from "@/lib/LanguageContext";

type Section =
  | "dashboard"
  | "about"
  | "books"
  | "nasyid"
  | "webset"
  | "penghargaan"
  | "contact"
  | "settings";

export default function Home() {
  const [active, setActive] = useState<Section>("dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Convert "id" to "ind" for Header compatibility
  const langForHeader = language === "id" ? "ind" : "ara";



  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const renderContent = () => {
    switch (active) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <HeroSection />
            <StatsSection />
            <AnalyticsSection />
            <BooksSection />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <NasyidSection />
              <WebsetSection />
            </div>
            <AchievementsSection />
            <CtaBanner />
          </div>
        );
      case "about":
        return (
          <div className="space-y-6">
            <AboutSection />
            <StatsSection />
            <CtaBanner />
          </div>
        );
      case "books":
        return (
          <div className="space-y-6">
            <BooksSection />
            <CtaBanner />
          </div>
        );
      case "nasyid":
        return (
          <div className="space-y-6">
            <NasyidSection />
            <CtaBanner />
          </div>
        );
      case "webset":
        return (
          <div className="space-y-6">
            <WebsetSection />
            <CtaBanner />
          </div>
        );
      case "penghargaan":
        return (
          <div className="space-y-6">
            <AchievementsSection />
            <CtaBanner />
          </div>
        );
      case "contact":
        return (
          <div className="space-y-6">
            <ContactSection />
          </div>
        );
      case "settings":
        return (
          <div className="space-y-6">
            <SettingsSection />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-clay-gradient dark:bg-none dark:bg-purple-950/95">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30 blob"
          style={{ background: "radial-gradient(circle, #C4A8E8 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20 blob"
          style={{ background: "radial-gradient(circle, #F5C6D9 0%, transparent 70%)", animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blob"
          style={{ background: "radial-gradient(circle, #FDDCCA 0%, transparent 70%)", animationDelay: "1.5s" }}
        />
      </div>

      {/* Sidebar */}
      <Sidebar activeSection={active} onNavigate={(id) => setActive(id as Section)} />

      {/* Main area */}
      <div className={`${language === "ar" ? "lg:pr-64 xl:pr-72" : "lg:pl-64 xl:pl-72"} flex flex-col min-h-screen relative z-10`}>
        <Header
          darkMode={darkMode}
          toggleDark={() => setDarkMode(!darkMode)}
          language={langForHeader}
          setLanguage={(lang) => setLanguage(lang === "ind" ? "id" : "ar")}
        />


        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 max-w-6xl w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="text-center py-4 px-6 text-xs text-purple-300 dark:text-purple-600">
          Made with 💜 by Muh Hidayat Iski · {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
