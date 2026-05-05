"use client";

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
  image: string;
}

const coffeeBeans: CoffeeBean[] = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    origin: "Ethiopia",
    roastLevel: "Light",
    recommended: "Pour Over, Cold Brew",
    description: "Floral, jasmine, bergamot & blueberry notes.",
    image: "/assets/coffee-beans.png",
  },
  {
    id: "2",
    name: "Colombian Supremo",
    origin: "Colombia",
    roastLevel: "Medium",
    recommended: "Espresso, Aeropress",
    description: "Smooth, balanced with chocolate, caramel & apple hints.",
    image: "/assets/coffee-beans.png",
  },
  {
    id: "3",
    name: "Sumatra Mandheling",
    origin: "Indonesia",
    roastLevel: "Dark",
    recommended: "French Press, Espresso",
    description: "Earthy, full-bodied with sweet syrupy finish.",
    image: "/assets/coffee-beans.png",
  },
  {
    id: "4",
    name: "Brazilian Santos",
    origin: "Brazil",
    roastLevel: "Medium",
    recommended: "Drip, Espresso",
    description: "Nutty, chocolatey with creamy smooth body.",
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

  return (
    <section className="relative w-full my-10 py-5 lg:py-10 px-4 md:px-10 bg-[#6F4E37] overflow-hidden flex justify-center">
      {/* Background Images */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat  bg-left opacity-30 pointer-events-none hidden sm:block"
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

      <div className="relative z-10 max-w-6xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] font-bold text-[#FFF8F0] mb-4">
            {t.title}
          </h2>
          <p className="text-[#E5D3C8] max-w-2xl mx-auto text-sm">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coffeeBeans.map((bean) => (
            <div
              key={bean.id}
              className="bg-[#FFF8F0] dark:bg-[#2a1f1a] rounded-xl p-4 shadow-xl border border-[#C4A484]/30 flex flex-col transition-transform duration-300 hover:-translate-y-2 group"
            >
              {/* Image Container */}
              <div className="w-full h-40 mb-6 overflow-hidden rounded-xl bg-[#6F4E37]/5 flex items-center justify-center relative">
                <Image
                  src={bean.image}
                  alt={bean.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                />
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-[family-name:var(--font-playfair)] font-bold text-[#6F4E37] dark:text-[#C4A484] group-hover:text-[#FFB703] transition-colors">
                  {bean.name}
                </h3>
              </div>

              <div className="mb-2">
                <RoastBadge level={bean.roastLevel} />
              </div>

              <div className="flex flex-col gap-3 flex-grow">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#C4A484]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    {t.origin}:
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {bean.origin}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#C4A484] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      {t.recommended}:
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {bean.recommended}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-[#C4A484]/40">
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  {bean.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
