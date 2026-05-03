import React from "react";

const Footer = () => {
  return (
    <footer className="bg-coffee-primary text-coffee-bg py-10 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          
          {/* Location */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-coffee-accent mb-4">Location</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              123 Coffee Street, Espresso Avenue<br />
              Dhaka, Bangladesh 1212
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-coffee-accent mb-4">Opening Hours</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Monday - Friday: 8:00 AM - 10:00 PM<br />
              Saturday - Sunday: 9:00 AM - 11:00 PM
            </p>
          </div>

        </div>
        
        <div className="mt-10 pt-6 border-t border-coffee-secondary/30 text-center text-xs opacity-70">
          &copy; {new Date().getFullYear()} Pi Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
