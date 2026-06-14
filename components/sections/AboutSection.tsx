"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, BookOpen, Music, Globe, Trophy } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  
  const highlights = [
    { icon: BookOpen, label: t.highlightAuthor, desc: t.highlightAuthorDesc, color: "from-clay-lavender/70 to-clay-purple/30", iconColor: "text-purple-500" },
    { icon: Music, label: t.highlightNasyidArtist, desc: t.highlightNasyidArtistDesc, color: "from-clay-pink/60 to-clay-rose/30", iconColor: "text-pink-500" },
    { icon: Globe, label: t.highlightWebDev, desc: t.highlightWebDevDesc, color: "from-clay-peach/70 to-clay-cream/50", iconColor: "text-amber-500" },
    { icon: Trophy, label: t.highlightAwardee, desc: t.highlightAwardeeDesc, color: "from-clay-mint/60 to-clay-sky/30", iconColor: "text-emerald-500" },
  ];
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="clay-card rounded-4xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Left – portrait */}
          <div className="lg:col-span-2 relative h-56 lg:h-auto overflow-hidden bg-gradient-to-br from-clay-purple/60 via-clay-lilac/50 to-clay-pink/40 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            {/* Blobs */}
            <div className="absolute w-40 h-40 rounded-full bg-white/10 -top-10 -left-10 blob" />
            <div className="absolute w-32 h-32 rounded-full bg-white/10 -bottom-8 -right-8 blob" style={{ animationDelay: "3s" }} />
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", damping: 15 }}
              className="relative z-10 float-anim"
            >
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-white/30 backdrop-blur-sm border-4 border-white/60 shadow-clay-lg flex items-center justify-center text-6xl lg:text-7xl">
                🌸
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/90 px-3 py-1 rounded-full shadow-md border border-white text-xs font-semibold text-purple-700 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.aboutOpenToCollab}
              </div>
            </motion.div>
          </div>

          {/* Right – info */}
          <div className="lg:col-span-3 p-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-clay-purple" />
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">{t.aboutTitle}</span>
              </div>
              <h2 className="font-display font-bold text-purple-900 dark:text-purple-100 text-2xl leading-tight mb-3">
                {t.aboutGreeting}
                <br />
                <span className="text-gradient-purple">{t.aboutSubtitle}</span>
              </h2>
              <p className="text-sm text-purple-600 dark:text-purple-300 leading-relaxed mb-3">
                {t.aboutDescription1}
              </p>
              <p className="text-sm text-purple-500 dark:text-purple-400 leading-relaxed mb-5 flex items-start gap-1.5">
                <Heart size={13} className="text-pink-400 mt-0.5 flex-shrink-0 fill-pink-400" />
                {t.aboutDescription2}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className={`flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-br ${item.color} border border-white/50`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-white/50 flex items-center justify-center flex-shrink-0">
                      <item.icon size={14} className={item.iconColor} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-purple-900 dark:text-purple-100">{item.label}</p>
                      <p className="text-[10px] text-purple-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
