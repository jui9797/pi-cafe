import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-coffee-bg/90 backdrop-blur-md border-b border-coffee-secondary/20 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-coffee-primary tracking-tight">
          Pi Cafe
        </Link>

        <Link href="/demo2" className="">
          Demo 2
        </Link>
        <Link href="/demo2" className="">
          Demo 3
        </Link>
        
        {/* CTA Button */}
        <button className="bg-coffee-primary text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-coffee-primary/90 transition-colors shadow-sm">
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
