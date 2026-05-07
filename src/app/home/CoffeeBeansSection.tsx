"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

interface CoffeeBean {
  id: string;
  name: string;
  origin: string;
  roastLevel: "Light" | "Medium" | "Dark";
  recommended: string;
  description: string;
  altitude?: string;
  process?: string;
  image: string;
}

const coffeeBeans: CoffeeBean[] = [
  {
    id: "1",
    name: "Ethiopia - Guji",
    origin: "Ethiopia",
    roastLevel: "Light",
    recommended: "Pour Over, V60",
    description: "Sweet, caramel, fruity with jasmine notes.",
    altitude: "2100 - 2300m",
    process: "Natural",
    image: "/assets/coffee-beans.png",
  },
  {
    id: "2",
    name: "Colombia - Rio Mandalina",
    origin: "Colombia",
    roastLevel: "Medium",
    recommended: "Espresso, Aeropress",
    description: "Dark chocolate and brown sugar notes.",
    altitude: "1600 - 1800m",
    process: "Washed",
    image: "/assets/coffee-beans.png",
  },
  {
    id: "3",
    name: "Uganda - Busgisu",
    origin: "Uganda",
    roastLevel: "Light",
    recommended: "Cold Brew, Pour Over",
    description: "Fruity with blueberry and vanilla notes.",
    altitude: "2200m",
    process: "Natural",
    image: "/assets/coffee-beans.png",
  },
  {
    id: "4",
    name: "Guatemala - San Marcos",
    origin: "Guatemala",
    roastLevel: "Medium",
    recommended: "Drip Coffee, V60",
    description: "Black cherry, juicy and well balanced.",
    altitude: "1600 - 2200m",
    process: "Washed",
    image: "/assets/coffee-beans.png",
  },
  {
    id: "5",
    name: "El Salvador - Santa Maria",
    origin: "El Salvador",
    roastLevel: "Medium",
    recommended: "Espresso, Chemex",
    description: "Black cherry, fruity with medium body.",
    image: "/assets/coffee-beans.png",
  },
  {
    id: "6",
    name: "Panama Geisha - Teresa",
    origin: "Panama",
    roastLevel: "Light",
    recommended: "V60, Syphon",
    description: "Dried fruits, caramel and melon notes.",
    image: "/assets/coffee-beans.png",
  },
  {
    id: "7",
    name: "Costa Rica - La Amada",
    origin: "Costa Rica",
    roastLevel: "Medium",
    recommended: "Pour Over, Drip",
    description: "Balanced body & acidity with red apple notes.",
    process: "Honey",
    image: "/assets/coffee-beans.png",
  },
  {
    id: "8",
    name: "Yemen - Haraz Udaini",
    origin: "Yemen",
    roastLevel: "Dark",
    recommended: "Espresso, Arabic Coffee",
    description: "Vanilla, tropical fruit and raisin notes.",
    process: "Anaerobic",
    image: "/assets/coffee-beans.png",
  },
  {
    id: "9",
    name: "Brazil - Fazenda",
    origin: "Brazil",
    roastLevel: "Medium",
    recommended: "Espresso, French Press",
    description: "Chocolate and peanut flavor profile.",
    altitude: "1200m",
    process: "Natural",
    image: "/assets/coffee-beans.png",
  },
];

const RoastBadge = ({ level }: { level: CoffeeBean["roastLevel"] }) => {
  const { lang } = useLanguage();
  const t = translations[lang].beans;

  let bgColor = "";
  let textColor = "";

  switch (level) {
    case "Light":
      bgColor = "bg-[#D4A373]";
      textColor = "text-white";
      break;
    case "Medium":
      bgColor = "bg-[#8B5A2B]";
      textColor = "text-white";
      break;
    case "Dark":
      bgColor = "bg-[#3E2723]";
      textColor = "text-white";
      break;
  }

  return (
    <span
      className={`px-3 py-1 text-xs font-bold rounded-full ${bgColor} ${textColor}`}
    >
      {level} {t.roast}
    </span>
  );
};

export default function CoffeeBeansSection() {
  const { lang } = useLanguage();
  const t = translations[lang].beans;

  const [showAll, setShowAll] = useState(false);

  const displayedBeans = showAll ? coffeeBeans : coffeeBeans.slice(0, 3);

  return (
    <section className="relative w-full my-10 py-5 lg:py-10 px-4 md:px-10 bg-[#6F4E37] overflow-hidden flex justify-center">
      {/* Background Images */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left opacity-30 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: "url('/assets/image-left.png')",
          backgroundSize: "cover",
        }}
      ></div>

      <div
        className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-right opacity-30 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: "url('/assets/image-right.png')",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] font-bold text-[#FFF8F0] mb-4">
            {t.title}
          </h2>

          <p className="text-[#E5D3C8] max-w-2xl mx-auto text-sm">
            {t.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBeans.map((bean) => (
            <div
              key={bean.id}
              className="bg-[#FFF8F0] dark:bg-[#2a1f1a] rounded-xl p-4 shadow-xl border border-[#C4A484]/30 flex flex-col transition-transform duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="w-full h-40 mb-4 overflow-hidden rounded-xl bg-[#6F4E37]/5 flex items-center justify-center relative">
                <Image
                  src={bean.image}
                  alt={bean.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                />
              </div>

              {/* Title */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-[family-name:var(--font-playfair)] font-bold text-[#6F4E37] dark:text-[#C4A484] group-hover:text-[#FFB703] transition-colors">
                  {bean.name}
                </h3>
              </div>

              {/* Roast Badge */}
              <div className="mb-2">
                <RoastBadge level={bean.roastLevel} />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-3 flex-grow text-sm">
                <div>
                  <span className="font-semibold text-[#6F4E37]">
                    {t.origin}:{" "}
                  </span>
                  <span>{bean.origin}</span>
                </div>

                {bean.altitude && (
                  <div>
                    <span className="font-semibold text-[#6F4E37]">
                      {t.altitude}:{" "}
                    </span>
                    <span>{bean.altitude}</span>
                  </div>
                )}

                {bean.process && (
                  <div>
                    <span className="font-semibold text-[#6F4E37]">
                      {t.process}:{" "}
                    </span>
                    <span>{bean.process}</span>
                  </div>
                )}

                <div>
                  <span className="font-semibold text-[#6F4E37]">
                    {t.recommended}:{" "}
                  </span>
                  <span>{bean.recommended}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-2 pt-2 border-t border-[#C4A484]/40">
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  {bean.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Buttons */}
        <div className="flex justify-center mt-10">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-[#FFF8F0] text-[#6F4E37] font-semibold rounded-full hover:bg-[#C4A484] hover:text-white transition-all duration-300 shadow-lg"
            >
              {t.exploreMore}
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 bg-[#FFF8F0] text-[#6F4E37] font-semibold rounded-full hover:bg-[#C4A484] hover:text-white transition-all duration-300 shadow-lg"
            >
              {t.exploreLess}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
