"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const BranchLocationSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].branch;
  const [selectedBranchId, setSelectedBranchId] = useState(t.branches[0].id);

  const selectedBranch = t.branches.find((b: any) => b.id === selectedBranchId) || t.branches[0];


  return (
    <section className="py-16 w-full px-3 md:px-6 bg-white dark:bg-[#1a1412]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-coffee-primary dark:text-coffee-secondary mb-4">
            {t.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-coffee-bg/80">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Branch Selection Grid */}
        <div className="grid grid-cols-2 lg:flex lg:justify-center flex-wrap pb-8 mb-8 gap-3 md:gap-6">
          {t.branches.map((branch: any) => (
            <button
              key={branch.id}
              onClick={() => setSelectedBranchId(branch.id)}
              className={`text-sm md:text-base px-4 md:px-10 py-3 md:py-4 rounded-2xl md:rounded-full font-bold transition-all duration-300 ${
                selectedBranchId === branch.id
                  ? "bg-coffee-primary text-white shadow-xl scale-[1.02] ring-2 ring-coffee-primary/20"
                  : "bg-coffee-bg dark:bg-white/5 text-coffee-primary dark:text-coffee-secondary border border-coffee-primary/10 hover:bg-coffee-primary/10 hover:border-coffee-primary/30"
              }`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            key={`info-${selectedBranchId}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-coffee-bg dark:bg-black/40 p-6 rounded-2xl border border-coffee-secondary/20 shadow-xl ">
              <h3 className="text-2xl font-bold text-coffee-primary dark:text-coffee-secondary mb-6 flex items-center gap-2">
                <MapPin className="text-coffee-accent" /> {selectedBranch.name}
              </h3>

              <div className="space-y-6 text-coffee-text dark:text-coffee-bg/90">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-md">
                    <MapPin className="text-coffee-primary dark:text-coffee-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold mb-1">
                      {t.address}
                    </p>
                    <p className="text-sm text-coffee-primary dark:text-white/80 leading-relaxed">
                      {selectedBranch.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-md">
                    <Phone className="text-coffee-primary dark:text-coffee-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold mb-1">{t.phone}</p>
                    <p className="text-sm text-coffee-primary dark:text-white/80">
                      {selectedBranch.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-md">
                    <Clock className="text-coffee-primary dark:text-coffee-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold mb-1">
                      {t.openingHours}
                    </p>
                    <p className="text-sm text-green-600 dark:text-green/80">
                      {selectedBranch.openingHours}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div
            key={`map-${selectedBranchId}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10"
          >
            <iframe
              src={selectedBranch.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BranchLocationSection;
