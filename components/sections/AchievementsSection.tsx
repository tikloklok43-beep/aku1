"use client";

import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const colorMap: Record<string, { card: string; border: string; badge: string }> = {
  "clay-purple": {
    card: "from-clay-lavender/70 to-clay-purple/30",
    border: "border-clay-lavender/60",
    badge: "bg-purple-100 text-purple-700",
  },
  "clay-pink": {
    card: "from-clay-pink/60 to-clay-rose/30",
    border: "border-clay-pink/50",
    badge: "bg-pink-100 text-pink-700",
  },
  "clay-peach": {
    card: "from-clay-peach/70 to-clay-cream/50",
    border: "border-clay-peach/50",
    badge: "bg-amber-100 text-amber-700",
  },
  "clay-lavender": {
    card: "from-clay-lavender/80 to-clay-sky/30",
    border: "border-clay-lavender/60",
    badge: "bg-blue-100 text-blue-700",
  },
};

export default function AchievementsSection() {
  const { getAchievements } = useLanguage();
  const achievements = getAchievements();
  
  return (
    <section id="penghargaan">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-between mb-4"
      >
        <div>
          <h2 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-lg">
            Penghargaan 🏆
          </h2>
          <p className="text-xs text-purple-400 mt-0.5">Awards & recognition</p>
        </div>
        <button className="text-xs text-purple-500 hover:text-purple-700 flex items-center gap-1 transition-colors">
          View all <ArrowRight size={12} />
        </button>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[26px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-clay-purple/40 via-clay-pink/30 to-transparent hidden sm:block" />

        <div className="space-y-4">
          {achievements.map((award, i) => {
            const colors = colorMap[award.color] || colorMap["clay-purple"];
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85 + i * 0.1, type: "spring", damping: 20 }}
                className="flex gap-4"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                    className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-white/80 to-clay-lavender/50 border border-clay-lavender/60 shadow-clay flex items-center justify-center text-xl flex-shrink-0 z-10"
                  >
                    {award.icon}
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className={`flex-1 rounded-3xl bg-gradient-to-br ${colors.card} border ${colors.border} p-4 shadow-clay relative overflow-hidden`}
                >
                  {/* Glossy */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-3xl" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      {/* Mobile icon */}
                      <div className="sm:hidden w-9 h-9 rounded-xl bg-white/50 flex items-center justify-center text-base flex-shrink-0">
                        {award.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-sm">
                          {award.title}
                        </h3>
                        <p className="text-xs text-purple-500 mt-0.5">{award.organization}</p>
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${colors.badge}`}>
                        {award.year}
                      </span>
                    </div>
                    <p className="text-xs text-purple-600 dark:text-purple-300 leading-relaxed mt-2">
                      {award.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
