"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const BranchLocationSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].branch;
  const [isLocating, setIsLocating] = useState(false);
  const [distance, setDistance] = useState<string | null>(null);

  const branchCoords = { lat: 24.1507, lng: 47.3345 };

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) => {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleFindNearest = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const dist = calculateDistance(
            position.coords.latitude,
            position.coords.longitude,
            branchCoords.lat,
            branchCoords.lng,
          );
          setDistance(dist.toFixed(1) + " km");
          setIsLocating(false);
        },
        () => {
          setIsLocating(false);
          alert("Could not get your location.");
        },
      );
    } else {
      setIsLocating(false);
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <section className="py-16 w-full px-3 md:px-6 bg-white dark:bg-[#1a1412]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-coffee-primary dark:text-coffee-secondary mb-4">
            {t.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-coffee-bg/80">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-coffee-bg dark:bg-black/40 p-4 rounded-xl border border-coffee-secondary/20 shadow-xl ">
              <h3 className="text-xl font-bold text-coffee-primary dark:text-coffee-secondary mb-4 flex items-center gap-2">
                <MapPin className="text-coffee-accent" /> {t.locationName}
              </h3>

              <div className="space-y-4 text-coffee-text dark:text-coffee-bg/90">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-md">
                    <MapPin className="text-coffee-primary dark:text-coffee-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-bold">
                      {t.address}
                    </p>
                    <p className="text-xs text-gray-600 ">
                      4671 King Salman Bin Abdulaziz Rd, Al Andalus, Al-Kharj
                      16439, Saudi Arabia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-md">
                    <Phone className="text-coffee-primary dark:text-coffee-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-bold">{t.phone}</p>
                    <p className="text-xs text-gray-600">+966 50 519 6434</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-white/10 rounded-xl shadow-md">
                    <Clock className="text-coffee-primary dark:text-coffee-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-bold">
                      {t.openingHours}
                    </p>
                    <p className="text-xs text-gray-600">
                      {t.allDay} (6:00 AM - 1:00 AM)
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleFindNearest}
                disabled={isLocating}
                className="mt-4 w-full py-3 bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-text font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 disabled:opacity-50"
              >
                <Navigation className={isLocating ? "animate-spin" : ""} />
                {isLocating
                  ? "Locating..."
                  : distance
                    ? `${t.findNearest}: ${distance}`
                    : t.findNearest}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-xl overflow-hidden shadow-xl border-4 border-white dark:border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.40774233777!2d47.33230497526756!3d24.1507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e258f1234567891%3A0x1234567891234567!2sPi%20Cafe!5e0!3m2!1sen!2ssa!4v1714999999999!5m2!1sen!2ssa"
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
