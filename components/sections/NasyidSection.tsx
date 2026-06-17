"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { Play, Pause, Music, ArrowRight, Heart, MoreHorizontal } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function NasyidSection() {
  const { getNasyids } = useLanguage();
  const nasyids = getNasyids();
  const [playing, setPlaying] = useState<string | null>(null);
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (id: string) => {
    setPlaying((prev) => (prev === id ? null : id));
  };

  const toggleLike = (id: string) => {
    const next = new Set(liked);
    next.has(id) ? next.delete(id) : next.add(id);
    setLiked(next);
  };

  useEffect(() => {
    if (!audioRef.current) return;

    if (!playing) {
      audioRef.current.pause();
      return;
    }

    const track = nasyids.find((t) => t.id === playing);
    if (!track) return;

    if (audioRef.current.src !== track.audioUrl) {
      audioRef.current.src = track.audioUrl;
    }

    // Play may be blocked by browser policies or fail due to network/CORS.
    // Catch to avoid unhandled rejection errors in Next dev overlay.
    audioRef.current
      .play()
      .catch(() => {
        // no-op: user gesture required by browser; UI state already updated via `playing`
      });
  }, [playing, nasyids]);

  return (
    <section id="nasyid">

      <audio ref={audioRef} className="hidden" preload="metadata" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex items-center justify-between mb-4"

      >
        <div>
          <h2 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-lg">
            Featured Nasyid 🎵
          </h2>
          <p className="text-xs text-purple-400 mt-0.5">My nasyid collection</p>
        </div>
        <button className="text-xs text-purple-500 hover:text-purple-700 flex items-center gap-1 transition-colors">
          View playlist <ArrowRight size={12} />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.72 }}
        className="clay-card rounded-3xl overflow-hidden"
      >
        {/* Header */}
        <div className="relative h-24 overflow-hidden bg-gradient-to-br from-clay-pink via-clay-rose to-clay-purple p-5 flex items-center gap-4">
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          <div className="relative w-14 h-14 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/50 flex items-center justify-center shadow-md">
            <span className="text-2xl">🎶</span>
          </div>
          <div className="relative">
            <h3 className="font-display font-semibold text-white text-base">Nur di Hati</h3>
            <p className="text-white/70 text-xs">Full Playlist • 4 tracks • 18 min</p>
          </div>
          {playing && (
            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-end gap-0.5">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [8, 16, 8] }}
                  transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15, ease: "easeInOut" }}
                  className="w-1 bg-white/70 rounded-full"
                  style={{ height: 8 }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Track list */}
        <div className="divide-y divide-clay-lavender/30">
          {nasyids.map((track, i) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75 + i * 0.08 }}
              className="flex items-center gap-3 px-4 py-3 hover:bg-clay-lavender/20 dark:hover:bg-purple-900/20 transition-colors group"
            >
              {/* Number / play */}
              <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                {playing === track.id ? (
                  <button
                    onClick={() => togglePlay(track.id)}
                    className="w-7 h-7 rounded-full bg-clay-purple text-white flex items-center justify-center shadow-sm"
                  >
                    <Pause size={11} fill="white" />
                  </button>
                ) : (
                  <span className="text-xs text-purple-400 font-mono group-hover:hidden">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                {playing !== track.id && (
                  <button
                    onClick={() => togglePlay(track.id)}
                    className="hidden group-hover:flex w-7 h-7 rounded-full bg-clay-purple text-white items-center justify-center shadow-sm"
                  >
                    <Play size={11} fill="white" />
                  </button>
                )}
              </div>

              {/* Cover */}
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-clay-pink/60 to-clay-rose/40 flex items-center justify-center text-lg flex-shrink-0 border border-white/50">
                {track.cover}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${playing === track.id ? "text-purple-600" : "text-purple-900 dark:text-purple-100"}`}>
                  {track.title}
                </p>
                <p className="text-xs text-purple-400 truncate">{track.artist}</p>
              </div>

              {/* Album */}
              <span className="text-xs text-purple-400 hidden sm:block truncate max-w-[80px]">{track.album}</span>

              {/* Like */}
              <button
                onClick={() => toggleLike(track.id)}
                className={`transition-colors ${liked.has(track.id) ? "text-pink-500" : "text-purple-300 hover:text-pink-400"}`}
              >
                <Heart size={13} fill={liked.has(track.id) ? "currentColor" : "none"} />
              </button>

              {/* Duration */}
              <span className="text-xs text-purple-400 font-mono w-8 text-right">{track.duration}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
