"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/LanguageContext";

const coverColors = [
  "from-clay-purple/70 to-clay-lilac/50",
  "from-clay-pink/70 to-clay-rose/50",
  "from-clay-peach/80 to-clay-cream/60",
];

export default function BooksSection() {
  const { t, getBooks } = useLanguage();
  const books = getBooks();
  
  return (
    <section id="books">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-between mb-4"
      >
        <div>
          <h2 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-lg">
            {t.recentBooks}
          </h2>
          <p className="text-xs text-purple-400 mt-0.5">{t.myLatestPublications}</p>
        </div>
        <button className="text-xs text-purple-500 hover:text-purple-700 flex items-center gap-1 transition-colors">
          {t.viewAll} <ArrowRight size={12} />
        </button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {books.map((book, i) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 + i * 0.1, type: "spring", damping: 20 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="clay-card rounded-3xl overflow-hidden group cursor-pointer"
          >
            {/* Book cover */}
            <div className={`relative h-32 bg-gradient-to-br ${coverColors[i]} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent" />
              {/* Book spine */}
              <div className="w-20 h-24 rounded-xl bg-white/30 backdrop-blur-sm border border-white/50 shadow-lg flex flex-col items-center justify-center gap-2 relative z-10 group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl">{book.cover}</span>
                <div className="w-12 h-0.5 bg-white/50 rounded-full" />
                <div className="w-8 h-0.5 bg-white/30 rounded-full" />
              </div>
              {/* Stars */}
              <div className="absolute top-3 right-3 flex gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={8} className="fill-white/60 text-white/60" />
                ))}
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-sm leading-tight">
                  {book.title}
                </h3>
                <Badge variant="purple" className="text-[10px] flex-shrink-0">{book.year}</Badge>
              </div>
              <p className="text-xs text-purple-500 leading-relaxed mb-3 line-clamp-2">
                {book.description}
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="lavender">{book.genre}</Badge>
                <button className="inline-flex items-center gap-1 text-xs text-purple-600 font-medium hover:text-purple-800 transition-colors group-hover:gap-1.5">
                  <BookOpen size={11} />
                  {t.readMore}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
