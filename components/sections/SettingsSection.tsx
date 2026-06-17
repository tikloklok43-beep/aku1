"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, Lock, Palette, User, ChevronRight, X as XIcon } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

type ProfileData = {
  name: string;
  email: string;
  bio: string;
  visibility: "public" | "private";
  dark: boolean;
  lang: "id" | "ar";
  emailNotif: boolean;
  pushNotif: boolean;
  twoFactor: boolean;
};

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

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    name: "Iski",
    email: "iski@gmail.com",
    bio: "",
    visibility: "public",
    dark: false,
    lang: "id",
    emailNotif: true,
    pushNotif: false,
    twoFactor: false,
  });

  useEffect(() => {
    setProfile((p) => ({
      ...p,
      dark: Boolean(toggles.dark),
      emailNotif: Boolean(toggles.emailNotif),
      pushNotif: Boolean(toggles.pushNotif),
      twoFactor: Boolean(toggles["2fa"]),
    }));
  }, [toggles.dark, toggles.emailNotif, toggles.pushNotif, toggles["2fa"]]);

  const dirty = useMemo(() => {
    return (
      profile.name !== "Iski" ||
      profile.email !== "iski@gmail.com" ||
      profile.bio !== "" ||
      profile.visibility !== "public"
    );
  }, [profile]);

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
            <h3 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-sm">Iski</h3>
            <p className="text-xs text-purple-400">iski@gmail.com</p>
          </div>
          <button
            onClick={() => setIsEditOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-600 bg-clay-lavender/50 px-3 py-1.5 rounded-xl hover:bg-clay-lavender/80 transition-colors"
            aria-haspopup="dialog"
          >
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

      {/* Edit Profile Modal */}
    <AnimatePresence>
      {isEditOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
        >
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsEditOpen(false)}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative z-10 mx-auto mt-16 w-full max-w-lg"
            role="dialog"
            aria-modal="true"
          >
            <div className="clay-card rounded-3xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-sm">
                    {t.editProfile}
                  </h3>
                  <p className="text-xs text-purple-400 mt-0.5">Edit semua menu setting (demo)</p>
                </div>
                <button
                  onClick={() => setIsEditOpen(false)}
                  className="w-9 h-9 rounded-2xl clay-card flex items-center justify-center text-purple-500 hover:text-purple-700 transition-colors"
                  aria-label="Close"
                >
                  <XIcon size={16} />
                </button>
              </div>

              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Simpan demo: dianggap tersimpan di state lokal
                  setIsEditOpen(false);
                }}
              >
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-xs font-medium text-purple-700 dark:text-purple-200">
                    Name
                    <input
                      value={profile.name}
                      onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
                      className="mt-1 w-full h-9 rounded-2xl clay-card px-3 text-xs"
                    />
                  </label>

                  <label className="text-xs font-medium text-purple-700 dark:text-purple-200">
                    Email
                    <input
                      value={profile.email}
                      onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                      className="mt-1 w-full h-9 rounded-2xl clay-card px-3 text-xs"
                    />
                  </label>

                  <label className="text-xs font-medium text-purple-700 dark:text-purple-200">
                    Bio
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile((p) => ({ ...p, bio: e.target.value }))}
                      className="mt-1 w-full min-h-20 rounded-2xl clay-card px-3 py-2 text-xs"
                    />
                  </label>

                  <label className="text-xs font-medium text-purple-700 dark:text-purple-200">
                    Profile Visibility
                    <select
                      value={profile.visibility}
                      onChange={(e) => setProfile((p) => ({ ...p, visibility: e.target.value as ProfileData["visibility"] }))}
                      className="mt-1 w-full h-9 rounded-2xl clay-card px-3 text-xs"
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                  </label>

                  <label className="flex items-center justify-between gap-4 text-xs font-medium text-purple-700 dark:text-purple-200">
                    Dark Mode
                    <input
                      type="checkbox"
                      checked={toggles.dark}
                      onChange={() => flip("dark")}
                    />
                  </label>

                  <label className="flex items-center justify-between gap-4 text-xs font-medium text-purple-700 dark:text-purple-200">
                    Email Notifications
                    <input
                      type="checkbox"
                      checked={toggles.emailNotif}
                      onChange={() => flip("emailNotif")}
                    />
                  </label>

                  <label className="flex items-center justify-between gap-4 text-xs font-medium text-purple-700 dark:text-purple-200">
                    Push Notifications
                    <input
                      type="checkbox"
                      checked={toggles.pushNotif}
                      onChange={() => flip("pushNotif")}
                    />
                  </label>

                  <label className="flex items-center justify-between gap-4 text-xs font-medium text-purple-700 dark:text-purple-200">
                    Two-Factor Auth
                    <input
                      type="checkbox"
                      checked={toggles["2fa"]}
                      onChange={() => flip("2fa")}
                    />
                  </label>
                </div>

                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsEditOpen(false)}
                    className="h-9 px-4 rounded-2xl clay-card text-xs text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!dirty}
                    className={`h-9 px-4 rounded-2xl shadow-clay text-xs font-semibold transition-colors ${
                      dirty
                        ? "bg-gradient-to-r from-clay-purple to-clay-lilac text-white hover:scale-[1.02]"
                        : "bg-purple-200 dark:bg-purple-800 text-purple-400 cursor-not-allowed"
                    }`}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    </section>
  );
}

