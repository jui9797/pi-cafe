"use client";

import { motion } from "framer-motion";
import {
  Send,
  Phone,
  MessageSquare,
  Mail,
  User,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const ContactSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <section className="py-16 w-full bg-white dark:bg-[#1a1412] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-coffee-primary/5 rounded-l-[100px] -z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-2 md:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-coffee-primary dark:text-coffee-secondary mb-4">
            {t.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-coffee-bg/80 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-coffee-bg/50 dark:bg-black/20 backdrop-blur-xl p-5 rounded-xl border border-coffee-secondary/20 shadow-xl"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <label className="block text-sm font-bold text-coffee-primary dark:text-coffee-secondary mb-2 px-1">
                  {t.formName}
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-primary/40 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white dark:bg-white/5 border border-coffee-primary/10 dark:border-white/10 rounded-xl py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-coffee-accent transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-bold text-coffee-primary dark:text-coffee-secondary mb-2 px-1">
                  {t.formEmail}
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-primary/40 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white dark:bg-white/5 border border-coffee-primary/10 dark:border-white/10 rounded-xl py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-coffee-accent transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-bold text-coffee-primary dark:text-coffee-secondary mb-2 px-1">
                  {t.formMessage}
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-coffee-primary/40 w-5 h-5" />
                  <textarea
                    rows={4}
                    placeholder="..."
                    className="w-full bg-white dark:bg-white/5 border border-coffee-primary/10 dark:border-white/10 rounded-xl py-3 pl-10 pr-4=3 focus:outline-none focus:ring-2 focus:ring-coffee-accent transition-all dark:text-white resize-none"
                  ></textarea>
                </div>
              </div>

              <button className="w-full py-3 bg-coffee-primary hover:bg-coffee-primary/90 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 group">
                {t.sendMessage}
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Quick Actions */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h3 className="text-xl font-bold text-coffee-primary dark:text-coffee-secondary">
                {lang === "en" ? "Quick Contact" : "تواصل سريع"}
              </h3>
              <p className="text-gray-600 dark:text-coffee-bg/80 text-sm">
                Prefer a direct conversation? We are just a tap away on your
                favorite platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.a
                href="https://wa.me/966505196434"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/20 transition-all group"
              >
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#25D366]/30">
                  <MessageCircle className="text-white w-8 h-8" />
                </div>
                <span className="font-semibold text-coffee-primary dark:text-coffee-secondary">
                  {t.whatsapp}
                </span>
              </motion.a>

              <motion.a
                href="tel:+966505196434"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-4 bg-coffee-accent/10 border border-coffee-accent/20 rounded-xl hover:bg-coffee-accent/20 transition-all group"
              >
                <div className="w-16 h-16 bg-coffee-accent rounded-full flex items-center justify-center mb-3 shadow-lg shadow-coffee-accent/30">
                  <Phone className="text-coffee-text w-8 h-8" />
                </div>
                <span className="font-semibold text-coffee-primary dark:text-coffee-secondary">
                  {t.call}
                </span>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-4 border-2 border-dashed border-coffee-primary/20 rounded-xl flex items-center gap-6"
            >
              <div className="w-12 h-12 bg-coffee-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-coffee-primary" />
              </div>
              <div>
                <p className="text-sm opacity-60 uppercase tracking-widest font-bold">
                  Email Us
                </p>
                <p className="text-sm font-bold text-coffee-primary dark:text-coffee-secondary">
                  hello@picafe.sa
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
