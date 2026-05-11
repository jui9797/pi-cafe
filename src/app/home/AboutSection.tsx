"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Users, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const AboutSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section className="py-16 w-full bg-coffee-bg dark:bg-[#2a1f1a] overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[350px] lg:h-[400px]  rounded-xl overflow-hidden">
              <Image
                src="/assets/piCafe.png"
                alt="Pi Cafe Interior"
                fill
                quality={100}
                priority
                sizes="100vw, 50vw"
                className="object-contain object-center transition-transform duration-700 hover:scale-105 rounded-xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-coffee-accent/20 rounded-full blur-3xl z-0 " />
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-coffee-primary/10 rounded-full blur-3xl z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-coffee-accent font-bold tracking-widest uppercase text-xs lg:text-sm">
              {t.subtitle}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-coffee-primary dark:text-coffee-secondary leading-tight">
              {t.storyTitle}
            </h2>
            <p className="text-sm text-gray-600 dark:text-coffee-bg/80 leading-relaxed">
              {t.storyText}
            </p>
            <div className="flex gap-4 pt-2">
              <div className="text-center">
                <p className="text-xl font-bold text-coffee-primary dark:text-coffee-secondary">
                  5+
                </p>
                <p className="text-xs uppercase tracking-wider opacity-60">
                  Years of Excellence
                </p>
              </div>
              <div className="text-center border-l border-coffee-primary/20 pl-8">
                <p className="text-xl font-bold text-coffee-primary dark:text-coffee-secondary">
                  10k+
                </p>
                <p className="text-xs uppercase tracking-wider opacity-60">
                  Happy Customers
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mb-5 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 bg-white/40 dark:bg-black/20 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl group hover:bg-coffee-primary transition-colors duration-500"
          >
            <div className="w-10 h-10 bg-coffee-primary group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-colors shadow-lg">
              <Target className="text-white group-hover:text-coffee-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-coffee-primary dark:text-coffee-secondary group-hover:text-white">
              {t.missionTitle}
            </h3>
            <p className="text-gray-600 text-sm dark:text-coffee-bg/80 group-hover:text-white/90 ">
              {t.missionText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-5 bg-white/40 dark:bg-black/20 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl group hover:bg-coffee-accent transition-colors duration-500"
          >
            <div className="w-10 h-10 bg-coffee-accent group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-colors shadow-lg">
              <Eye className="text-coffee-text group-hover:text-coffee-accent w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-coffee-primary dark:text-coffee-secondary group-hover:text-coffee-text">
              {t.visionTitle}
            </h3>
            <p className="text-gray-600 text-sm dark:text-coffee-bg/80 group-hover:text-coffee-text/90 ">
              {t.visionText}
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-coffee-primary dark:text-coffee-secondary mb-4">
              {t.teamTitle}
            </h2>
            <p className="text-sm text-gray-600 dark:text-coffee-bg/80 max-w-2xl mx-auto">
              {t.teamSubtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((member, index) => (
            <motion.div
              key={member}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-[300px] lg:h-[350px] rounded-xl overflow-hidden shadow-xl mb-2">
                <Image
                  src="/images/new-sections/master_barista.png"
                  alt="Barista"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-4 mb-4">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 cursor-pointer">
                      <Award className="text-white w-5 h-5" />
                    </div>
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 cursor-pointer">
                      <Users className="text-white w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-coffee-primary dark:text-coffee-secondary text-center">
                {lang === "en"
                  ? `Barista Master ${member}`
                  : `خبير الباريستا ${member}`}
              </h4>
              <p className="text-center text-coffee-accent font-medium uppercase tracking-widest text-xs">
                Certified Coffee Expert
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
