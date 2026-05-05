"use client";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import Link from "next/link";

const Footer = () => {
  const { lang, isRTL } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="bg-coffee-primary text-coffee-bg py-16 mt-auto">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 ${isRTL ? "text-right" : "text-left"}`}>
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-coffee-accent mb-3">
                Pi Cafe
              </h2>
              <p className="text-sm opacity-90 leading-relaxed max-w-xs">
                {t.description}
              </p>
            </div>
            
            <div className="flex space-x-4 rtl:space-x-reverse">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-secondary/20 flex items-center justify-center hover:bg-coffee-accent hover:text-coffee-primary transition-all duration-300 transform hover:-translate-y-1" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-secondary/20 flex items-center justify-center hover:bg-coffee-accent hover:text-coffee-primary transition-all duration-300 transform hover:-translate-y-1" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.977 6.981 1.28.058 1.688.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.981-6.977.058-1.28.072-1.688.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.977-6.981C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
              </a>
              {/* Twitter */}
              <a href="#" className="w-10 h-10 rounded-full bg-coffee-secondary/20 flex items-center justify-center hover:bg-coffee-accent hover:text-coffee-primary transition-all duration-300 transform hover:-translate-y-1" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-coffee-accent">
              {t.quickLinks}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm hover:text-coffee-accent transition-colors duration-200">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-sm hover:text-coffee-accent transition-colors duration-200">
                  {t.menu}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-coffee-accent transition-colors duration-200">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Opening Hours */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-coffee-accent">
              {t.openingHours}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-coffee-secondary mb-1">
                  {t.mondayFriday}
                </p>
                <p className="text-sm font-medium">8:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-coffee-secondary mb-1">
                  {t.saturdaySunday}
                </p>
                <p className="text-sm font-medium">9:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-coffee-secondary/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs opacity-70">
          <p>
            &copy; {new Date().getFullYear()} Pi Cafe. {t.rights}
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse">
            <a href="#" className="hover:text-coffee-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-coffee-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

