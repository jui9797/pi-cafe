"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { lang, setLang } = useLanguage();
  const t = translations[lang].navbar;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${isHome ? 'absolute top-0 bg-transparent' : 'sticky top-0 bg-coffee-bg/90 backdrop-blur-md border-b border-coffee-secondary/20 shadow-sm'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-coffee-primary">
          Pi Cafe
        </Link>

        {/* Desktop Menu & Right Actions */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-6">
            <Link href="/demo2" className="text-sm font-medium text-coffee-primary hover:text-coffee-accent transition-colors">
              {t.demo2}
            </Link>
            <Link href="/demo2" className="text-sm font-medium text-coffee-primary hover:text-coffee-accent transition-colors">
              {t.demo3}
            </Link>
          </div>

          {/* Language Switcher (Always Visible) */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-medium text-coffee-primary bg-white/20 px-3 py-1.5 rounded-lg border border-coffee-primary/20 hover:bg-white/30 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m8.716 2.247c0 1.526-.033 3.041-.1 4.547" />
              </svg>
              <span className="text-xs sm:text-sm">{lang === "en" ? "EN" : "AR"}</span>
            </button>
            <div className="absolute top-full right-0  hidden group-hover:block bg-white shadow-xl border border-gray-100 rounded-xl overflow-hidden z-50 min-w-[120px] animate-in fade-in slide-in-from-top-1">
              <button 
                onClick={() => setLang("en")}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-coffee-bg transition-colors ${lang === "en" ? "font-bold text-coffee-primary" : "text-gray-600"}`}
              >
                English
              </button>
              <button 
                onClick={() => setLang("ar")}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-coffee-bg transition-colors ${lang === "ar" ? "font-bold text-coffee-primary" : "text-gray-600"}`}
              >
                العربية
              </button>
            </div>
          </div>
          
          {/* Desktop CTA Button */}
          <button className="hidden md:block bg-coffee-primary text-white px-5 py-2 rounded-xl font-medium text-sm hover:bg-coffee-primary/90 transition-all shadow-sm hover:shadow-md">
            {t.orderNow}
          </button>

          {/* Mobile Hamburger Icon */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-coffee-primary hover:bg-coffee-primary/10 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-4 bg-coffee-bg/95 backdrop-blur-md border-t border-coffee-secondary/10">
          <Link 
            href="/demo2" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-coffee-primary hover:bg-coffee-primary/10 transition-colors"
          >
            {t.demo2}
          </Link>
          <Link 
            href="/demo2" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-coffee-primary hover:bg-coffee-primary/10 transition-colors"
          >
            {t.demo3}
          </Link>
          <div className="pt-2">
            <button className="w-full bg-coffee-primary text-white px-4 py-3 rounded-xl font-bold text-base hover:bg-coffee-primary/90 transition-all shadow-md">
              {t.orderNow}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
