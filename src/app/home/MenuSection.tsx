"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const MENU_CATEGORIES = [
  "Bakery",
  "Drip coffee",
  "Hot Drinks",
  "Cold Drinks",
  "Sweets",
  "Sharing Boxes",
];

const MENU_ITEMS = [
  {
    id: 1,
    category: "Hot Drinks",
    name: "Cappuccino Latte",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 124,
    desc: "Smooth espresso with steamed milk and a light layer of foam.",
    image: "/assets/hot drinks/cappuccino Latte.jpeg",
  },
  {
    id: 2,
    category: "Hot Drinks",
    name: "Espresso",
    price: "$ 4.00",
    rating: 4.7,
    reviews: 98,
    desc: "Equal parts espresso, steamed milk, and rich milk foam.",
    image: "/assets/hot drinks/Espresso.jpeg",
  },
  {
    id: 3,
    category: "Hot Drinks",
    name: "Today s coffee HOT",
    price: "$ 4.00",
    rating: 4.5,
    reviews: 210,
    desc: "Classic espresso diluted with hot water for a rich, robust flavor.",
    image: "/assets/hot drinks/Today's coffee HOT.jpeg",
  },
  {
    id: 4,
    category: "Hot Drinks",
    name: "Flat white-cortado",
    price: "$ 4.00",
    rating: 4.5,
    reviews: 210,
    desc: "Classic espresso diluted with hot water for a rich, robust flavor.",
    image: "/assets/hot drinks/Flat white-cortado.jpeg",
  },
  {
    id: 5,
    category: "Hot Drinks",
    name: "French vanilla",
    price: "$ 4.00",
    rating: 4.5,
    reviews: 210,
    desc: "Classic espresso diluted with hot water for a rich, robust flavor.",
    image: "/assets/hot drinks/French vanilla.jpeg",
  },

  {
    id: 6,
    category: "Cold Drinks",
    name: "Ice Latte",
    price: "$ 4.00",
    rating: 4.9,
    reviews: 342,
    desc: "Espresso combined with vanilla-flavored syrup, milk and caramel drizzle.",
    image: "/assets/cold drinks/Ice Latte.jpeg",
  },
  {
    id: 7,
    category: "Cold Drinks",
    name: "Ice Matcha",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 187,
    desc: "Slow-steeped, small-batch cold coffee for a super smooth taste.",
    image: "/assets/cold drinks/Ice Matcha.jpeg",
  },
  {
    id: 8,
    category: "Cold Drinks",
    name: "Ice Spanish Latte",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 187,
    desc: "Slow-steeped, small-batch cold coffee for a super smooth taste.",
    image: "/assets/cold drinks/Ice Spanish Latte.jpeg",
  },
  {
    id: 9,
    category: "Cold Drinks",
    name: "Ice White Mocha",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 187,
    desc: "Slow-steeped, small-batch cold coffee for a super smooth taste.",
    image: "/assets/cold drinks/Ice White Mocha.jpeg",
  },
  {
    id: 10,
    category: "Cold Drinks",
    name: "Iced Americano",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 187,
    desc: "Slow-steeped, small-batch cold coffee for a super smooth taste.",
    image: "/assets/cold drinks/Iced Americano.jpeg",
  },

  {
    id: 11,
    category: "Bakery",
    name: "Brownies",
    price: "$ 4.00",
    rating: 4.6,
    reviews: 156,
    desc: "Flaky, buttery, and baked fresh daily.",
    image: "/assets/bakery/Brownies.jpeg",
  },
  {
    id: 12,
    category: "Bakery",
    name: "Cake Volcano",
    price: "$ 4.00",
    rating: 4.6,
    reviews: 156,
    desc: "Flaky, buttery, and baked fresh daily.",
    image: "/assets/bakery/Cake volcano.jpeg",
  },
  {
    id: 13,
    category: "Bakery",
    name: "Crunchy cheese cake",
    price: "$ 4.00",
    rating: 4.6,
    reviews: 156,
    desc: "Flaky, buttery, and baked fresh daily.",
    image: "/assets/bakery/Crunchy cheese cake.jpeg",
  },
  {
    id: 14,
    category: "Bakery",
    name: "Date cake",
    price: "$ 4.00",
    rating: 4.6,
    reviews: 156,
    desc: "Flaky, buttery, and baked fresh daily.",
    image: "/assets/bakery/Date cake.jpeg",
  },
  {
    id: 15,
    category: "Bakery",
    name: "Feta cheese",
    price: "$ 4.00",
    rating: 4.7,
    reviews: 112,
    desc: "Soft muffin loaded with wild blueberries and a crumb topping.",
    image: "/assets/bakery/Feta cheese.jpeg",
  },

  {
    id: 16,
    category: "Sweets",
    name: "Brownes",
    price: "$ 4.00",
    rating: 4.9,
    reviews: 430,
    desc: "Rich chocolate cake with a molten, gooey center.",
    image: "/assets/sweets/Brownes.jpeg",
  },
  {
    id: 17,
    category: "Sweets",
    name: "Cookies",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 275,
    desc: "Classic New York style cheesecake with a graham cracker crust.",
    image: "/assets/sweets/Cookies.jpeg",
  },
  {
    id: 18,
    category: "Sweets",
    name: "Crunchy Cheese cake",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 275,
    desc: "Classic New York style cheesecake with a graham cracker crust.",
    image: "/assets/sweets/Crunchy Cheese cake.jpeg",
  },
  {
    id: 19,
    category: "Sweets",
    name: "Pecan bites",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 275,
    desc: "Classic New York style cheesecake with a graham cracker crust.",
    image: "/assets/sweets/Pecan bites.jpeg",
  },
  {
    id: 20,
    category: "Sweets",
    name: "Raffel bites",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 275,
    desc: "Classic New York style cheesecake with a graham cracker crust.",
    image: "/assets/sweets/Raffel bites.jpeg",
  },
  {
    id: 21,
    category: "Drip coffee",
    name: "V60 Pour Over",
    price: "$ 4.00",
    rating: 4.9,
    reviews: 120,
    desc: "Hand-poured filter coffee highlighting subtle tasting notes.",
    image: "/assets/drip coffee/drip1.jpeg",
  },
  {
    id: 22,
    category: "Drip coffee",
    name: "Chemex",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 95,
    desc: "Smooth and clean cup of coffee made with the Chemex brewer.",
    image: "/assets/drip coffee/drip2.jpeg",
  },
  {
    id: 23,
    category: "Drip coffee",
    name: "Chemex",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 95,
    desc: "Smooth and clean cup of coffee made with the Chemex brewer.",
    image: "/assets/drip coffee/drip3.jpeg",
  },
  {
    id: 24,
    category: "Drip coffee",
    name: "Chemex",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 95,
    desc: "Smooth and clean cup of coffee made with the Chemex brewer.",
    image: "/assets/drip coffee/drip4.jpeg",
  },
  {
    id: 25,
    category: "Drip coffee",
    name: "Chemex",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 95,
    desc: "Smooth and clean cup of coffee made with the Chemex brewer.",
    image: "/assets/drip coffee/drip5.jpeg",
  },
  {
    id: 26,
    category: "Sharing Boxes",
    name: "Pastry Box (6 pcs)",
    price: "$ 4.00",
    rating: 4.8,
    reviews: 215,
    desc: "A selection of our best daily fresh pastries perfect for sharing.",
    image:
      "/assets/sharing boxes/WhatsApp Image 2026-05-03 at 11.38.05 AM (1).jpeg",
  },
  {
    id: 27,
    category: "Sharing Boxes",
    name: "Mini Sandwich Box",
    price: "$ 4.00",
    rating: 4.7,
    reviews: 150,
    desc: "Assortment of mini sandwiches for your gatherings.",
    image:
      "/assets/sharing boxes/WhatsApp Image 2026-05-03 at 11.38.06 AM (2).jpeg",
  },
  {
    id: 28,
    category: "Sharing Boxes",
    name: "Mini Sandwich Box",
    price: "$ 4.00",
    rating: 4.7,
    reviews: 150,
    desc: "Assortment of mini sandwiches for your gatherings.",
    image:
      "/assets/sharing boxes/WhatsApp Image 2026-05-03 at 11.38.06 AM (3).jpeg",
  },
  {
    id: 29,
    category: "Sharing Boxes",
    name: "Mini Sandwich Box",
    price: "$ 4.00",
    rating: 4.7,
    reviews: 150,
    desc: "Assortment of mini sandwiches for your gatherings.",
    image:
      "/assets/sharing boxes/WhatsApp Image 2026-05-03 at 11.38.06 AM.jpeg",
  },
  {
    id: 30,
    category: "Sharing Boxes",
    name: "Mini Sandwich Box",
    price: "$ 4.00",
    rating: 4.7,
    reviews: 150,
    desc: "Assortment of mini sandwiches for your gatherings.",
    image:
      "/assets/sharing boxes/WhatsApp Image 2026-05-03 at 11.38.07 AM (1).jpeg",
  },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("Bakery");
  const { lang } = useLanguage();
  const t = translations[lang].menu;

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeTab,
  );

  return (
    <section className="py-8 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 min-h-[500px]">
      {/* Search & Header */}
      <div className="sticky top-0 z-50 text-center mb-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-coffee-primary ">
          {t.title}
        </h2>
      </div>

      {/* Sticky Tabs */}
      <div className="sticky top-[40px] z-40 bg-coffee-bg p-4  sm:mx-0 sm:px-0 border-2 border-coffee-primary/50 rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 no-scrollbar gap-3 pb-2">
          {MENU_CATEGORIES.map((cat) => {
            let icon = null;
            if (cat === "Hot Drinks") {
              icon = (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 shrink-0"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              );
            } else if (cat === "Cold Drinks") {
              icon = (
                <svg
                  
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 shrink-0"
                >
                  <path d="M7 7h10l-1 13H8L7 7z" />
                  <path d="M12 2v5" />
                  <circle cx="10" cy="13" r="1" />
                  <circle cx="14" cy="15" r="1" />
                </svg>
              );
            } else if (cat === "Bakery") {
              icon = (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 shrink-0"
                >
                  <path d="M6 18V9a6 6 0 0 1 12 0v9" />
                  <path d="M4 18h16a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2z" />
                  <path d="M10 18v-4" />
                  <path d="M14 18v-4" />
                </svg>
              );
            } else if (cat === "Sweets") {
              icon = (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 shrink-0"
                >
                  <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                  <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2 1 2 1" />
                  <path d="M2 21h20" />
                  <path d="M12 11v-4" />
                  <path d="M12 3v.01" />
                </svg>
              );
            } else if (cat === "Drip coffee") {
              icon = (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 shrink-0"
                >
                  <polygon points="6 2 18 2 15 11 9 11 6 2" />
                  <path d="M9 11v3a3 3 0 0 0 6 0v-3" />
                  <line x1="12" y1="14" x2="12" y2="22" />
                  <line x1="8" y1="22" x2="16" y2="22" />
                </svg>
              );
            } else if (cat === "Sharing Boxes") {
              icon = (
                <svg
                  
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 shrink-0"
                >
                  <path d="M3 9l4-4h10l4 4" />
                  <rect x="3" y="9" width="18" height="10" rx="2" />
                  <path d="M15 3l4 6" />
                  <path d="M13 3l4 6" />
                </svg>
              );
            }

            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap flex justify-center items-center gap-1 lg:gap-2 px-4 py-2 rounded-xl text-[10px] lg:text-sm font-medium transition-all  ${
                  activeTab === cat
                    ? "bg-coffee-primary text-white shadow-md transform scale-105"
                    : "bg-white text-coffee-text border border-coffee-secondary/30 hover:border-coffee-primary"
                }`}
              >
                {icon}
                {t.categories[cat as keyof typeof t.categories]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white/80 backdrop-blur-lg rounded-xl p-4 shadow-[0_8px_30px_rgb(111,78,55,0.12)] hover:shadow-[0_8px_30px_rgb(111,78,55,0.25)] border border-white/50 hover:border-coffee-secondary/30 transition-all duration-500 flex flex-col hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative w-full h-56 rounded-xl overflow-hidden mb-5">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow px-2">
              <div className="flex justify-between items-start mb-2 gap-2">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-coffee-primary leading-tight">
                  {item.name}
                </h3>
                <span className="text-coffee-primary font-bold text-lg whitespace-nowrap bg-coffee-bg px-3 py-1 rounded-full shadow-sm">
                  {item.price}
                </span>
              </div>

              <div className="flex items-center gap-1.5 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-500 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  {item.rating}
                </span>
                <span className="text-xs text-gray-400">({item.reviews})</span>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow line-clamp-2">
                {item.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 mt-auto">
                <button className="flex-grow py-3 bg-coffee-primary text-white font-medium rounded-xl hover:bg-[#4A3425] transition-colors flex justify-center items-center gap-2 shadow-md hover:shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  {t.addToCart}
                </button>
                <button
                  className="p-3 bg-gray-100 text-gray-500 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm"
                  title="Add to Favorites"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
