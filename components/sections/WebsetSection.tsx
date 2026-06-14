"use client";

import { motion } from "framer-motion";
import { Globe, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/LanguageContext";

const projectColors = [
  { bg: "from-clay-purple/50 to-clay-lilac/30", iconBg: "bg-purple-100", emoji: "📚" },
  { bg: "from-clay-pink/50 to-clay-rose/30", iconBg: "bg-pink-100", emoji: "🎵" },
  { bg: "from-clay-peach/60 to-clay-cream/40", iconBg: "bg-amber-100", emoji: "📖" },
  { bg: "from-clay-mint/50 to-clay-sky/30", iconBg: "bg-emerald-100", emoji: "💌" },
];

export default function WebsetSection() {
  const { getProjects } = useLanguage();
  const projects = getProjects();
  
  return (
    <section id="webset">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="flex items-center justify-between mb-4"
      >
        <div>
          <h2 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-lg">
            My Webset Projects 🌐
          </h2>
          <p className="text-xs text-purple-400 mt-0.5">Websites & web applications</p>
        </div>
        <button className="text-xs text-purple-500 hover:text-purple-700 flex items-center gap-1 transition-colors">
          All projects <ArrowRight size={12} />
        </button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => {
          const colors = projectColors[i % projectColors.length];
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78 + i * 0.1, type: "spring", damping: 20 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="clay-card rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Image area */}
              <div className={`relative h-28 bg-gradient-to-br ${colors.bg} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="w-16 h-16 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 flex items-center justify-center text-3xl shadow-md relative z-10"
                >
                  {colors.emoji}
                </motion.div>
                {/* Visit badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex items-center gap-1 bg-white/90 text-purple-700 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
                    <Globe size={10} />
                    Visit
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-sm">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    className="text-purple-400 hover:text-purple-600 transition-colors flex-shrink-0 mt-0.5"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>
                <p className="text-xs text-purple-500 leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="lavender" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
