"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const BestSellerSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].bestSellers;

  const bestSellers = [
    {
      id: 1,
      name: lang === "en" ? "Signature Pi Latte" : "بي لاتيه المميز",
      price: "24 SAR",
      image: "/images/new-sections/best_seller_coffee.png",
      badge: t.bestSeller,
      icon: <Star className="w-4 h-4" />,
    },
    {
      id: 2,
      name: lang === "en" ? "Golden Croissant" : "كرواسون ذهبي",
      price: "18 SAR",
      image: "/images/new-sections/best_seller_pastry.png",
      badge: t.trending,
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      id: 3,
      name: lang === "en" ? "Spanish Latte" : "سبانش لاتيه",
      price: "26 SAR",
      image: "/images/new-sections/best_seller_coffee.png", // Reuse for demo
      badge: t.bestSeller,
      icon: <Star className="w-4 h-4" />,
    },
  ];

  return (
    <section className="py-10 w-full px-4 md:px-8 bg-coffee-bg dark:bg-[#2a1f1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-coffee-primary dark:text-coffee-secondary mb-2">
            {t.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-coffee-bg/80 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bestSellers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 dark:border-white/10 shadow-xl"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="flex items-center gap-1 bg-coffee-accent text-coffee-text px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {item.icon}
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-coffee-primary dark:text-coffee-secondary">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-coffee-accent">
                    {item.price}
                  </span>
                </div>
                <button className="w-full py-3 bg-coffee-primary hover:bg-coffee-primary/90 text-white rounded-xl font-bold transition-all duration-300 shadow-lg active:scale-95">
                  {translations[lang].menu.addToCart}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
