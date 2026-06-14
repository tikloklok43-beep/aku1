"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  User,
  BookOpen,
  Music,
  Globe,
  Trophy,
  Mail,
  Settings,
  Crown,
  Zap,
  X,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

const navItems = [
  // Requested order
  { id: "dashboard", label: "dashboard", icon: LayoutDashboard, href: "#dashboard" },
  { id: "about", label: "about", icon: User, href: "#about" },
  { id: "books", label: "books", icon: BookOpen, href: "#books" },
  { id: "nasyid", label: "nasyid", icon: Music, href: "#nasyid" },
  { id: "webset", label: "webset", icon: Globe, href: "#webset" },
  { id: "penghargaan", label: "penghargaan", icon: Trophy, href: "#penghargaan" },
  { id: "contact", label: "contact", icon: Mail, href: "#contact" },
  { id: "settings", label: "settings", icon: Settings, href: "#settings" },
];

// Get sidebar position based on language direction
function getSidebarPosition(isRTL: boolean) {
  return isRTL ? "right-0" : "left-0";
}

function getSidebarAnimation(isRTL: boolean) {
  return isRTL ? { x: 280 } : { x: -280 };
}


interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const sidebarPos = getSidebarPosition(isRTL);
  const sidebarAnim = getSidebarAnimation(isRTL);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Profile */}
      <div className="p-6 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-3"
        >
          {/* Avatar */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full shadow-clay-lg border-3 border-white/80 overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/25/3e/16/253e169387468e6f9761d80929d1cb09.jpg"
                alt="Foto profil Mia"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white shadow-sm" />
          </div>

          {/* Greeting */}
          <div className="text-center">
            <h2 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-base">
              Hi, Muh Hidayat Iski! 👋
            </h2>
            <p className="text-xs text-purple-400 mt-0.5">Creative Portfolio</p>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mx-4 h-px bg-gradient-to-r from-transparent via-clay-purple/30 to-transparent mb-3" />

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              onClick={() => {
                onNavigate(item.id);
                setMobileOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200 group",
                isActive
                  ? "bg-gradient-to-r from-clay-purple/90 to-clay-lilac/70 text-white shadow-clay"
                  : "text-purple-700 hover:bg-clay-lavender/45 dark:text-purple-300 dark:hover:bg-purple-900/25"
              )}

            >
              <div
                className={cn(
                  "w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-clay-lavender/50 text-purple-500 group-hover:bg-clay-purple/20 group-hover:text-purple-700"
                )}
              >
                <Icon size={15} />
              </div>
              <span className="font-body">{(t as any)[item.label]}</span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-white/70"
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Upgrade Card (removed per request) */}

    </div>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        className={cn(
          "lg:hidden fixed top-4 z-50 w-10 h-10 clay-card rounded-2xl flex items-center justify-center text-purple-700 shadow-clay",
          isRTL ? "right-4" : "left-4"
        )}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={sidebarAnim}
            animate={{ x: 0 }}
            exit={sidebarAnim}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={cn(
              "lg:hidden fixed top-0 h-full w-72 z-50 bg-gradient-to-b from-clay-cream to-clay-beige dark:from-purple-950 dark:to-purple-950/80 border-r border-clay-lavender/50 overflow-hidden",
              sidebarPos
            )}
          >
            <SidebarContent />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ ...sidebarAnim, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, type: "spring", damping: 25 }}
        className={cn(
          "hidden lg:flex flex-col w-64 xl:w-72 h-screen fixed top-0 z-30 bg-gradient-to-b from-[#F8F0FF] to-[#F5EFE6] dark:from-purple-950 dark:to-purple-950/90 border-r border-clay-lavender/40 dark:border-purple-800/30 overflow-hidden",
          sidebarPos
        )}
      >
        <SidebarContent />
      </motion.aside>
    </>
  );
}
