"use client";

import { motion } from "framer-motion";
import { BookOpen, Music, Globe, Trophy, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const stats = [
  {
    id: 1,
    title: "Buku Diterbitkan",
    value: 5,
    growth: 33,
    icon: BookOpen,
    emoji: "📚",
    bg: "from-clay-lavender/80 to-clay-purple/40",
    iconBg: "bg-purple-100 dark:bg-purple-900/40",
    iconColor: "text-purple-600",
    textColor: "text-purple-900 dark:text-purple-100",
    subColor: "text-purple-500",
    border: "border-clay-lavender/60",
    perc: "33%",
  },
  {
    id: 2,
    title: "Koleksi Nasyid",
    value: 4,
    growth: 18,
    icon: Music,
    emoji: "🎵",
    bg: "from-clay-pink/60 to-clay-rose/30",
    iconBg: "bg-pink-100 dark:bg-pink-900/40",
    iconColor: "text-pink-600",
    textColor: "text-pink-900 dark:text-pink-100",
    subColor: "text-pink-500",
    border: "border-clay-pink/60",
    perc: "18%",
  },
  {
    id: 3,
    title: "Proyek Web",
    value: 6,
    growth: 50,
    icon: Globe,
    emoji: "🌐",
    bg: "from-clay-peach/70 to-clay-cream/60",
    iconBg: "bg-amber-100 dark:bg-amber-900/40",
    iconColor: "text-amber-600",
    textColor: "text-amber-900 dark:text-amber-100",
    subColor: "text-amber-500",
    border: "border-clay-peach/60",
    perc: "50%",
  },
  {
    id: 4,
    title: "Penghargaan Diterima",
    value: 9,
    growth: 12,
    icon: Trophy,
    emoji: "🏆",
    bg: "from-clay-mint/60 to-clay-sky/30",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
    iconColor: "text-emerald-600",
    textColor: "text-emerald-900 dark:text-emerald-100",
    subColor: "text-emerald-500",
    border: "border-clay-mint/60",
    perc: "12%",
  },
];


export default function StatsSection() {
  const { t } = useLanguage();
  
  const statTitles = [
    t.bukuDiterbitkan,
    t.koleksiNasyid,
    t.proyekWeb,
    t.penghargaanDiterima,
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, type: "spring", damping: 20 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${stat.bg} border ${stat.border} backdrop-blur-sm p-4 sm:p-5 shadow-clay`}
          >
            {/* Glossy top */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none rounded-3xl" />

            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-10 h-10 rounded-2xl ${stat.iconBg} flex items-center justify-center mb-3 shadow-sm`}>
                <Icon size={18} className={stat.iconColor} />
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-2">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  className={`font-display font-bold text-3xl sm:text-4xl ${stat.textColor} leading-none mb-1`}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + i * 0.1 }}
                  className="text-[11px] font-semibold text-purple-500 dark:text-purple-200 bg-white/20 dark:bg-white/10 px-2 py-1 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
                >
                  {stat.perc}
                </motion.div>
              </div>

              {/* Title */}
              <p className={`text-xs sm:text-sm font-medium ${stat.subColor} leading-tight mb-2`}>
                {statTitles[i]}
              </p>

              {/* Growth (keep as extra signal) */}
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-0.5 bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold px-2 py-0.5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                  <TrendingUp size={10} />
                  +{stat.growth}%
                </div>
                <span className={`text-xs ${stat.subColor} opacity-60`}>{t.signal}</span>
              </div>

            </div>

            {/* Decorative emoji */}
            <div className="absolute -bottom-2 -right-2 text-3xl opacity-15 select-none rotate-12">
              {stat.emoji}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
