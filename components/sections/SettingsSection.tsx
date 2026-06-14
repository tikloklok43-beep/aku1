"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Moon, Globe, Lock, Palette, User, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function SettingsSection() {
  const { t } = useLanguage();
  
  const settingGroups = [
    {
      title: t.appearance,
      icon: Palette,
      items: [
        { label: t.darkMode, desc: t.darkModeDesc, type: "toggle", key: "dark" },
        { label: t.settingsLanguage, desc: t.settingsLanguageDesc, type: "select", key: "lang" },
      ],
    },
    {
      title: t.notifications,
      icon: Bell,
      items: [
        { label: t.emailNotifications, desc: t.emailNotificationsDesc, type: "toggle", key: "emailNotif" },
        { label: t.pushNotifications, desc: t.pushNotificationsDesc, type: "toggle", key: "pushNotif" },
      ],
    },
    {
      title: t.privacySecurity,
      icon: Lock,
      items: [
        { label: t.profileVisibility, desc: t.profileVisibilityDesc, type: "select", key: "visibility" },
        { label: t.twoFactorAuth, desc: t.twoFactorAuthDesc, type: "toggle", key: "2fa" },
      ],
    },
  ];
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    dark: false,
    emailNotif: true,
    pushNotif: false,
    "2fa": false,
  });

  const flip = (key: string) => setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section id="settings">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.88 }}
        className="mb-4"
      >
        <h2 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-lg">
          {t.settingsTitle}
        </h2>
        <p className="text-xs text-purple-400 mt-0.5">{t.settingsSubtitle}</p>
      </motion.div>

      <div className="space-y-4">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="clay-card rounded-3xl p-5 flex items-center gap-4"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clay-purple to-clay-rose shadow-clay flex items-center justify-center text-2xl flex-shrink-0">
            🌸
          </div>
          <div className="flex-1">
            <h3 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-sm">Mia</h3>
            <p className="text-xs text-purple-400">mia@example.com</p>
          </div>
          <button className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-600 bg-clay-lavender/50 px-3 py-1.5 rounded-xl hover:bg-clay-lavender/80 transition-colors">
            <User size={11} />
            {t.editProfile}
          </button>
        </motion.div>

        {settingGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.92 + gi * 0.08 }}
            className="clay-card rounded-3xl overflow-hidden"
          >
            {/* Group header */}
            <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-clay-lavender/30 dark:border-purple-800/30">
              <div className="w-7 h-7 rounded-xl bg-clay-lavender/60 dark:bg-purple-900/40 flex items-center justify-center">
                <group.icon size={13} className="text-purple-500" />
              </div>
              <span className="text-sm font-semibold text-purple-800 dark:text-purple-200">{group.title}</span>
            </div>

            {/* Items */}
            <div className="divide-y divide-clay-lavender/20 dark:divide-purple-800/20">
              {group.items.map((item) => (
                <div key={item.key} className="flex items-center justify-between px-5 py-3.5 hover:bg-clay-lavender/10 dark:hover:bg-purple-900/20 transition-colors">
                  <div>
                    <p className="text-sm font-medium text-purple-800 dark:text-purple-200">{item.label}</p>
                    <p className="text-xs text-purple-400">{item.desc}</p>
                  </div>
                  {item.type === "toggle" ? (
                    <button
                      onClick={() => flip(item.key)}
                      className={`relative w-10 h-5.5 rounded-full transition-colors duration-200 flex-shrink-0 ${
                        toggles[item.key]
                          ? "bg-gradient-to-r from-clay-purple to-clay-lilac"
                          : "bg-purple-200 dark:bg-purple-800"
                      }`}
                      style={{ height: "22px", width: "40px" }}
                    >
                      <motion.div
                        animate={{ x: toggles[item.key] ? 18 : 2 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="absolute top-0.5 w-4.5 h-4.5 rounded-full bg-white shadow-sm"
                        style={{ width: "18px", height: "18px" }}
                      />
                    </button>
                  ) : (
                    <button className="flex items-center gap-1 text-xs text-purple-400 hover:text-purple-600 transition-colors">
                      {item.desc}
                      <ChevronRight size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
