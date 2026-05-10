"use client";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function Hero() {
    const { lang } = useLanguage();
    const t = translations[lang].hero;
    return(
        <>
           
      <section className="relative w-full pt-5 pb-5 lg:pt-32 lg:pb-24 px-4 md:px-16 text-start flex flex-col justify-center h-[45vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        {/* Animated Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-right lg:bg-center animate-zoom"
          style={{ backgroundImage: "url('/assets/latte-hero.jpeg')" }}
        ></div>

        {/* Overlay */}
        <div className=" absolute inset-0  z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-3xl lg:text-6xl font-bold text-coffee-primary mb-4 leading-tight  animate-fade-left">
            {t.title}
          </h1>
          <p className="text-coffee-primary text-sm max-w-lg hidden md:flex">
            {t.subtitle}
          </p>
        </div>
      </section>
        </>
    )
}