"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${isHome ? 'absolute top-0 bg-transparent' : 'sticky top-0 bg-coffee-bg/90 backdrop-blur-md border-b border-coffee-secondary/20 shadow-sm'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className={`font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight ${isHome ? 'text-coffee-primary' : 'text-coffee-primary'}`}>
          Pi Cafe
        </Link>

        <div className="flex gap-4">
          <Link href="/demo2" className={`font-medium ${isHome ? 'text-coffee-primary' : ''}`}>
            Demo 2
          </Link>
          <Link href="/demo2" className={`font-medium ${isHome ? 'text-coffee-primary' : ''}`}>
            Demo 3
          </Link>
        </div>
        
        {/* CTA Button */}
        <button className="bg-coffee-primary text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-coffee-primary/90 transition-colors shadow-sm">
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
