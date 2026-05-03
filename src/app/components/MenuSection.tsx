"use client";

import React, { useState } from "react";
import Image from "next/image";

// Mock Data based on typical Cafe menus
const MENU_CATEGORIES = ["Hot Coffee", "Cold Drinks", "Bakery", "Sweets"];

const MENU_ITEMS = [
  { id: 1, category: "Hot Coffee", name: "Cafe Latte", price: "৳ 150", desc: "Smooth espresso with steamed milk and a light layer of foam.", image: "/assets/WhatsApp Image 2026-05-03 at 11.38.03 AM.jpeg" },
  { id: 2, category: "Hot Coffee", name: "Cappuccino", price: "৳ 180", desc: "Equal parts espresso, steamed milk, and rich milk foam.", image: "/assets/WhatsApp Image 2026-05-03 at 11.38.03 AM (1).jpeg" },
  { id: 3, category: "Hot Coffee", name: "Americano", price: "৳ 120", desc: "Classic espresso diluted with hot water for a rich, robust flavor.", image: "/assets/WhatsApp Image 2026-05-03 at 11.38.05 AM.jpeg" },
  { id: 4, category: "Cold Drinks", name: "Iced Caramel Macchiato", price: "৳ 220", desc: "Espresso combined with vanilla-flavored syrup, milk and caramel drizzle.", image: "/assets/WhatsApp Image 2026-05-03 at 11.38.06 AM.jpeg" },
  { id: 5, category: "Cold Drinks", name: "Cold Brew", price: "৳ 200", desc: "Slow-steeped, small-batch cold coffee for a super smooth taste.", image: "/assets/WhatsApp Image 2026-05-03 at 11.38.07 AM.jpeg" },
  { id: 6, category: "Bakery", name: "Butter Croissant", price: "৳ 130", desc: "Flaky, buttery, and baked fresh daily.", image: "/assets/WhatsApp Image 2026-05-03 at 11.38.08 AM.jpeg" },
  { id: 7, category: "Bakery", name: "Blueberry Muffin", price: "৳ 150", desc: "Soft muffin loaded with wild blueberries and a crumb topping.", image: "/assets/WhatsApp Image 2026-05-03 at 11.38.09 AM.jpeg" },
  { id: 8, category: "Sweets", name: "Chocolate Lava Cake", price: "৳ 250", desc: "Rich chocolate cake with a molten, gooey center.", image: "/assets/WhatsApp Image 2026-05-03 at 11.38.10 AM.jpeg" },
  { id: 9, category: "Sweets", name: "Cheesecake", price: "৳ 220", desc: "Classic New York style cheesecake with a graham cracker crust.", image: "/assets/WhatsApp Image 2026-05-03 at 11.38.11 AM.jpeg" },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("Hot Coffee");

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section className="py-8 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 min-h-[500px]">
      
      {/* Search & Header */}
      <div className="flex justify-between items-end mb-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-coffee-primary">Our Menu</h2>
      </div>

      {/* Sticky Tabs */}
      <div className="sticky top-[64px] z-40 bg-coffee-bg pt-2 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2 border-b border-coffee-secondary/20">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === cat
                  ? "bg-coffee-primary text-white shadow-md transform scale-105"
                  : "bg-white text-coffee-text border border-coffee-secondary/30 hover:border-coffee-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-coffee-secondary/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative w-full h-48 sm:h-56 bg-coffee-secondary/20 overflow-hidden">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Optional Favorite Badge */}
              <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white text-coffee-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3 gap-2">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-coffee-primary leading-tight">
                  {item.name}
                </h3>
                <span className="text-coffee-accent font-black text-lg whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              
              <p className="text-sm text-coffee-text/70 leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>

              {/* Action Button */}
              <button className="w-full py-2.5 bg-coffee-primary/10 text-coffee-primary font-semibold rounded-xl hover:bg-coffee-primary hover:text-white transition-colors flex justify-center items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
