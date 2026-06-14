"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function CtaBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="relative rounded-4xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #9B6CD8 0%, #C4A8E8 40%, #E8C4D8 70%, #F5C6D9 100%)",
      }}
    >
      {/* Blobs */}
      <div className="absolute -top-12 -left-12 w-52 h-52 rounded-full bg-white/10 blob" />
      <div className="absolute -bottom-10 right-24 w-40 h-40 rounded-full bg-white/10 blob" style={{ animationDelay: "2s" }} />
      <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-white/10 blob" style={{ animationDelay: "4s" }} />
      {/* Glossy */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-7 sm:p-10">
        {/* Left */}
        <div className="flex items-center gap-5">
          {/* Mascot */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/25 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center text-4xl sm:text-5xl shadow-lg flex-shrink-0"
          >
            ⭐
          </motion.div>
          <div>
            {/* Stars */}
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, type: "spring" }}
                >
                  <Star size={12} className="fill-yellow-200 text-yellow-200" />
                </motion.div>
              ))}
            </div>
            <h3 className="font-display font-bold text-white text-xl sm:text-2xl lg:text-3xl leading-tight">
              Discover More
              <br />
              About Me ✨
            </h3>
            <p className="text-white/75 text-sm mt-1.5 max-w-xs">
              Jelajahi semua karya, pencapaian, dan perjalanan kreatif saya secara lengkap.
            </p>
          </div>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex-shrink-0 inline-flex items-center gap-2.5 bg-white text-purple-700 font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-200"
        >
          View Portfolio
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
