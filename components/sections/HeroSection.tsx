"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      id="dashboard"
      className="relative rounded-4xl overflow-hidden min-h-[220px] sm:min-h-[260px]"
      style={{
        background: "linear-gradient(135deg, #C4A8E8 0%, #B896E0 35%, #D4A8C8 70%, #E8C4D8 100%)",
      }}
    >
      {/* Blobs */}
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/10 blob" />
      <div className="absolute -bottom-8 right-20 w-36 h-36 rounded-full bg-white/10 blob" style={{ animationDelay: "2s" }} />
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-white/10 blob" style={{ animationDelay: "4s" }} />

      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between p-6 sm:p-8 h-full">
        {/* Text */}
        <div className="flex-1 max-w-sm sm:max-w-md">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="inline-flex items-center gap-1.5 bg-white/25 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
              <Sparkles size={11} />
              {t.portfolio}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 }}
            className="font-display font-bold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-2 whitespace-pre-line"
          >
            {t.welcomeToMy}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/80 text-sm sm:text-base leading-relaxed mb-5 max-w-xs"
          >
            {t.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <button className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold text-sm px-5 py-2.5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200">
              {t.exploreNow}
              <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring", damping: 15 }}
          className="hidden sm:flex items-center justify-center"
        >
          <div className="relative float-anim">
            {/* Main circle */}
            <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center shadow-lg overflow-hidden">
              <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-white/30 flex items-center justify-center overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/25/3e/16/253e169387468e6f9761d80929d1cb09.jpg"
                  alt="Foto profil Mia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 bg-white/90 rounded-2xl px-3 py-1.5 shadow-lg text-xs font-semibold text-purple-700 border border-white"
            >
              🎵 Nasyid
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-2 -left-4 bg-white/90 rounded-2xl px-3 py-1.5 shadow-lg text-xs font-semibold text-pink-600 border border-white"
            >
              📚 Books
            </motion.div>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-8 bg-white/90 rounded-2xl px-3 py-1.5 shadow-lg text-xs font-semibold text-amber-600 border border-white"
            >
              🏆 Awards
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
