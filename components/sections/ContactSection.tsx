"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, MessageCircle, Phone, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="mb-4"
      >
        <h2 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-lg">
          Contact ✉️
        </h2>
        <p className="text-xs text-purple-400 mt-0.5">Let's connect and collaborate</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.88 }}
          className="lg:col-span-2 space-y-3"
        >
          {/* Info */}
          <div className="clay-card rounded-3xl p-5">
            <h3 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-sm mb-4">
              Get In Touch 💬
            </h3>
            <div className="space-y-3">
              {[
                { icon: Mail, label: "Email", value: "iski@gmail.com", color: "text-purple-500" },
                { icon: MapPin, label: "Location", value: "Jakarta, Indonesia", color: "text-pink-500" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-clay-lavender/50 dark:bg-purple-900/40 flex items-center justify-center flex-shrink-0">
                    <item.icon size={14} className={item.color} />
                  </div>
                  <div>
                    <p className="text-[10px] text-purple-400 uppercase tracking-wide">{item.label}</p>
                    <p className="text-xs font-medium text-purple-700 dark:text-purple-300">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="clay-card rounded-3xl p-5">
            <h3 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-sm mb-3">
              Follow Me 🌸
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: Github, label: "GitHub", color: "from-gray-600 to-gray-800" },
                { icon: MessageCircle, label: "Telegram", color: "from-blue-400 to-blue-600" },
                { icon: Phone, label: "WhatsApp", color: "from-green-400 to-green-600" },
              ].map((social) => (
                <motion.button
                  key={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-gradient-to-br ${social.color} text-white shadow-sm hover:shadow-md transition-shadow`}
                >
                  <social.icon size={16} />
                  <span className="text-[9px] font-medium">{social.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="lg:col-span-3 clay-card rounded-3xl p-5"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center gap-3 py-8"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-clay-mint/70 to-clay-sky/50 flex items-center justify-center shadow-clay">
                <CheckCircle size={28} className="text-emerald-500" />
              </div>
              <h3 className="font-display font-semibold text-purple-900 dark:text-purple-100">
                Message Sent! 🎉
              </h3>
              <p className="text-xs text-purple-400 text-center">
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </motion.div>
          ) : (
            <>
              <h3 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-sm mb-4">
                Send a Message 📨
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-semibold text-purple-500 uppercase tracking-wide mb-1.5 block">
                      Your Name
                    </label>
                    <Input
                      placeholder="Nama kamu..."
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold text-purple-500 uppercase tracking-wide mb-1.5 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-purple-500 uppercase tracking-wide mb-1.5 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tulis pesanmu di sini..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="min-h-[110px]"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-clay-purple to-clay-lilac text-white font-semibold text-sm py-2.5 rounded-2xl shadow-clay hover:shadow-clay-lg transition-all duration-200"
                >
                  <Send size={14} />
                  Send Message
                </motion.button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
