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
  // Hot Drinks
  {
    id: 1,
    category: "Hot Drinks",
    name: "Cappuccino Latte",
    arName: "كابتشينو لاتيه",
    price: "14 SAR",
    rating: 4.8,
    reviews: 124,
    desc: "Smooth espresso with steamed milk and a light layer of foam.",
    image: "/assets/hot drinks/cappuccino Latte.jpeg",
  },
  {
    id: 2,
    category: "Hot Drinks",
    name: "Espresso",
    arName: "اسبريسو",
    price: "10 SAR",
    rating: 4.7,
    reviews: 98,
    desc: "Strong and bold classic espresso shot.",
    image: "/assets/hot drinks/Espresso.jpeg",
  },
  {
    id: 3,
    category: "Hot Drinks",
    name: "Today's Coffee HOT",
    arName: "قهوة اليوم حار",
    price: "12 SAR",
    rating: 4.5,
    reviews: 210,
    desc: "Our freshly brewed daily selection of premium coffee.",
    image: "/assets/hot drinks/Today's coffee HOT.jpeg",
  },
  {
    id: 4,
    category: "Hot Drinks",
    name: "Flat White / Cortado",
    arName: "فلات وايت / كورتادو",
    price: "15 SAR",
    rating: 4.5,
    reviews: 210,
    desc: "The perfect balance of espresso and velvety microfoam.",
    image: "/assets/hot drinks/Flat white-cortado.jpeg",
  },
  {
    id: 5,
    category: "Hot Drinks",
    name: "French Vanilla",
    arName: "فرنش فانيلا",
    price: "16 SAR",
    rating: 4.5,
    reviews: 210,
    desc: "Sweet and creamy vanilla-infused hot coffee.",
    image: "/assets/hot drinks/French vanilla.jpeg",
  },
  {
    id: 30,
    category: "Hot Drinks",
    name: "Cappuccino",
    arName: "كابتشينو",
    price: "14 SAR",
    rating: 4.8,
    reviews: 120,
    desc: "Classic Italian coffee with equal parts espresso, steamed milk, and foam.",
    image: "/assets/hot drinks/Cappuccino.jpeg",
  },
  {
    id: 31,
    category: "Hot Drinks",
    name: "Hot Chocolate",
    arName: "هوت شوكليت",
    price: "15 SAR",
    rating: 4.9,
    reviews: 85,
    desc: "Rich and creamy chocolate served hot.",
    image: "/assets/hot drinks/Hot chocolate.jpeg",
  },
  {
    id: 32,
    category: "Hot Drinks",
    name: "Pi Latte / Spanish Latte",
    arName: "بي لاتيه / سبانش لاتيه",
    price: "17 SAR",
    rating: 4.9,
    reviews: 150,
    desc: "Our signature latte with a sweet Spanish twist.",
    image: "/assets/hot drinks/Latte - pi latte- Spanish Latte.jpeg",
  },
  {
    id: 33,
    category: "Hot Drinks",
    name: "Hot Americano",
    arName: "أمريكانو حار",
    price: "12 SAR",
    rating: 4.6,
    reviews: 95,
    desc: "Espresso shots topped with hot water for a smooth finish.",
    image: "/assets/hot drinks/hot americano.jpeg",
  },

  // Cold Drinks
  {
    id: 6,
    category: "Cold Drinks",
    name: "Ice Latte",
    arName: "ايس لاتيه",
    price: "15 SAR",
    rating: 4.9,
    reviews: 342,
    desc: "Chilled espresso with fresh milk over ice.",
    image: "/assets/cold drinks/Ice Latte.jpeg",
  },
  {
    id: 7,
    category: "Cold Drinks",
    name: "Ice Matcha",
    arName: "ايس ماتشا",
    price: "18 SAR",
    rating: 4.8,
    reviews: 187,
    desc: "Premium green tea matcha with milk and ice.",
    image: "/assets/cold drinks/Ice Matcha.jpeg",
  },
  {
    id: 8,
    category: "Cold Drinks",
    name: "Ice Spanish Latte",
    arName: "ايس سبانش لاتيه",
    price: "17 SAR",
    rating: 4.8,
    reviews: 187,
    desc: "Sweetened condensed milk with espresso and cold milk.",
    image: "/assets/cold drinks/Ice Spanish Latte.jpeg",
  },
  {
    id: 9,
    category: "Cold Drinks",
    name: "Ice White Mocha",
    arName: "ايس وايت موكا",
    price: "18 SAR",
    rating: 4.8,
    reviews: 187,
    desc: "White chocolate and espresso with cold milk and ice.",
    image: "/assets/cold drinks/Ice White Mocha.jpeg",
  },
  {
    id: 10,
    category: "Cold Drinks",
    name: "Iced Americano",
    arName: "ايس أمريكانو",
    price: "12 SAR",
    rating: 4.8,
    reviews: 187,
    desc: "Refreshing iced version of the classic americano.",
    image: "/assets/cold drinks/Iced Americano.jpeg",
  },
  {
    id: 34,
    category: "Cold Drinks",
    name: "Affogato",
    arName: "أفوغاتو",
    price: "16 SAR",
    rating: 4.9,
    reviews: 110,
    desc: "Vanilla ice cream drowned in a shot of hot espresso.",
    image: "/assets/cold drinks/Affogato.jpeg",
  },
  {
    id: 35,
    category: "Cold Drinks",
    name: "Blueberry Mojito",
    arName: "موهيتو توت أزرق",
    price: "15 SAR",
    rating: 4.7,
    reviews: 95,
    desc: "Refreshing mint and lime mojito with blueberry flavor.",
    image: "/assets/cold drinks/Blueberry Mojito.jpeg",
  },
  {
    id: 36,
    category: "Cold Drinks",
    name: "Cold Brew",
    arName: "كولد برو",
    price: "16 SAR",
    rating: 4.8,
    reviews: 130,
    desc: "Smooth, cold-steeped coffee for a rich flavor.",
    image: "/assets/cold drinks/Cold Brew.jpeg",
  },
  {
    id: 37,
    category: "Cold Drinks",
    name: "Ice Drip Coffee",
    arName: "ايس دريب",
    price: "18 SAR",
    rating: 4.9,
    reviews: 75,
    desc: "Meticulously brewed iced filter coffee.",
    image: "/assets/cold drinks/Ice Drip Coffee.jpeg",
  },
  {
    id: 38,
    category: "Cold Drinks",
    name: "Ice Pistachio Latte",
    arName: "ايس بستاشيو لاتيه",
    price: "19 SAR",
    rating: 4.8,
    reviews: 145,
    desc: "Creamy pistachio flavor with espresso and cold milk.",
    image: "/assets/cold drinks/Ice Pistachio Latte.jpeg",
  },
  {
    id: 39,
    category: "Cold Drinks",
    name: "Iced Berries",
    arName: "ايس بيري",
    price: "15 SAR",
    rating: 4.6,
    reviews: 88,
    desc: "Refreshing iced mixed berry drink.",
    image: "/assets/cold drinks/Iced Berries.jpeg",
  },
  {
    id: 40,
    category: "Cold Drinks",
    name: "Orange Mojito",
    arName: "موهيتو برتقال",
    price: "15 SAR",
    rating: 4.5,
    reviews: 65,
    desc: "Citrusy orange mojito with fresh mint and lime.",
    image: "/assets/cold drinks/Orange Mojito.jpeg",
  },
  {
    id: 41,
    category: "Cold Drinks",
    name: "Raspberry Mojito",
    arName: "موهيتو توت أحمر",
    price: "15 SAR",
    rating: 4.7,
    reviews: 72,
    desc: "Sweet and tangy raspberry mojito.",
    image: "/assets/cold drinks/Raspberry Mojito.jpeg",
  },

  // Bakery
  {
    id: 11,
    category: "Bakery",
    name: "Almond Croissant",
    arName: "كرواسون لوز",
    price: "12 SAR",
    rating: 4.6,
    reviews: 156,
    desc: "Buttery croissant filled with almond cream and topped with sliced almonds.",
    image: "/assets/bakery/Almond croissant.jpeg",
  },
  {
    id: 12,
    category: "Bakery",
    name: "Chocolate Croissant",
    arName: "كرواسون شوكولاتة",
    price: "11 SAR",
    rating: 4.6,
    reviews: 156,
    desc: "Flaky pastry filled with rich dark chocolate.",
    image: "/assets/bakery/Chocolate croissant.jpeg",
  },
  {
    id: 13,
    category: "Bakery",
    name: "Feta Cheese Croissant",
    arName: "كرواسون جبنة فيتا",
    price: "10 SAR",
    rating: 4.6,
    reviews: 156,
    desc: "Savory croissant filled with tangy feta cheese.",
    image: "/assets/bakery/Feta cheese criossant.jpeg",
  },
  {
    id: 14,
    category: "Bakery",
    name: "Pecan Croissant",
    arName: "كرواسون بيكان",
    price: "12 SAR",
    rating: 4.6,
    reviews: 156,
    desc: "Delicious croissant with sweet pecan filling.",
    image: "/assets/bakery/Pecan croissant.jpeg",
  },
  {
    id: 15,
    category: "Bakery",
    name: "Zaatar Croissant",
    arName: "كرواسون زعتر",
    price: "9 SAR",
    rating: 4.7,
    reviews: 112,
    desc: "Classic flaky croissant with traditional zaatar herbs.",
    image: "/assets/bakery/Zaatar croissant.jpeg",
  },

  // Sweets
  {
    id: 16,
    category: "Sweets",
    name: "Brownies",
    arName: "براونيز",
    price: "12 SAR",
    rating: 4.9,
    reviews: 430,
    desc: "Rich and fudgy chocolate brownies.",
    image: "/assets/sweets/Brownies.jpeg",
  },
  {
    id: 17,
    category: "Sweets",
    name: "Cake Volcano",
    arName: "كيك فلكانو",
    price: "18 SAR",
    rating: 4.8,
    reviews: 275,
    desc: "Warm chocolate cake with a molten center.",
    image: "/assets/sweets/Cake volcano.jpeg",
  },
  {
    id: 18,
    category: "Sweets",
    name: "Cookies",
    arName: "كوكيز",
    price: "8 SAR",
    rating: 4.8,
    reviews: 275,
    desc: "Freshly baked cookies with chocolate chips.",
    image: "/assets/sweets/Cookies.jpeg",
  },
  {
    id: 19,
    category: "Sweets",
    name: "Crunchy Cheesecake",
    arName: "كرانشي تشيز كيك",
    price: "16 SAR",
    rating: 4.8,
    reviews: 275,
    desc: "Creamy cheesecake with a crunchy texture.",
    image: "/assets/sweets/Crunchy cheese cake.jpeg",
  },
  {
    id: 20,
    category: "Sweets",
    name: "Date Cake",
    arName: "كيكة التمر",
    price: "15 SAR",
    rating: 4.8,
    reviews: 275,
    desc: "Traditional moist cake made with premium dates.",
    image: "/assets/sweets/Date cake.jpeg",
  },
  {
    id: 42,
    category: "Sweets",
    name: "Pecan Bites",
    arName: "بيكان بايتس",
    price: "14 SAR",
    rating: 4.7,
    reviews: 120,
    desc: "Small bites of heaven with sweet pecans.",
    image: "/assets/sweets/Pecan bites.jpeg",
  },
  {
    id: 43,
    category: "Sweets",
    name: "Raffel Bites",
    arName: "رافل بايتس",
    price: "14 SAR",
    rating: 4.7,
    reviews: 110,
    desc: "Signature Raffel flavored sweet bites.",
    image: "/assets/sweets/Raffel bites.jpeg",
  },
  {
    id: 44,
    category: "Sweets",
    name: "Tiramisu",
    arName: "تيراميسو",
    price: "18 SAR",
    rating: 4.9,
    reviews: 195,
    desc: "Classic Italian dessert with coffee-soaked ladyfingers.",
    image: "/assets/sweets/Tramesio.jpeg",
  },

  // Drip coffee
  {
    id: 21,
    category: "Drip coffee",
    name: "Chemex",
    arName: "كيمكس",
    price: "22 SAR",
    rating: 4.9,
    reviews: 120,
    desc: "Hand-poured filter coffee highlighting subtle tasting notes.",
    image: "/assets/drip coffee/Chemex.jpeg",
  },
  {
    id: 22,
    category: "Drip coffee",
    name: "Ice drip / Ice V60",
    arName: "ايس دريب / ايس في 60",
    price: "18 SAR",
    rating: 4.8,
    reviews: 95,
    desc: "Smooth and clean cold filter coffee.",
    image: "/assets/drip coffee/Ice drip ice v60.jpeg",
  },
  {
    id: 23,
    category: "Drip coffee",
    name: "V60 Drip Coffee",
    arName: "في 60 دريب",
    price: "16 SAR",
    rating: 4.8,
    reviews: 95,
    desc: "Classic V60 pour-over coffee.",
    image: "/assets/drip coffee/V60 drip coffee.jpeg",
  },
  {
    id: 24,
    category: "Drip coffee",
    name: "V60 Hot and Chemex",
    arName: "في 60 حار وكيمكس",
    price: "18 SAR",
    rating: 4.8,
    reviews: 95,
    desc: "A special blend of V60 and Chemex brewing styles.",
    image: "/assets/drip coffee/V60 hot and chemex.jpeg",
  },

  // Sharing Boxes
  {
    id: 25,
    category: "Sharing Boxes",
    name: "Brownies & Coffee Day Box",
    arName: "بوكس براونيز وكوفي داي",
    price: "85 SAR",
    rating: 4.8,
    reviews: 215,
    desc: "A selection of brownies paired with our signature coffee.",
    image: "/assets/sharing boxes/Brownies and coffeday box.jpeg",
  },
  {
    id: 26,
    category: "Sharing Boxes",
    name: "Mix Box",
    arName: "مكس بوكس",
    price: "95 SAR",
    rating: 4.7,
    reviews: 150,
    desc: "Assortment of our best pastries and sweets in one box.",
    image: "/assets/sharing boxes/MIX BOX.jpeg",
  },
  {
    id: 27,
    category: "Sharing Boxes",
    name: "Pecan Bites & Coffee Day Box",
    arName: "بوكس بيكان بايتس وكوفي داي",
    price: "85 SAR",
    rating: 4.7,
    reviews: 150,
    desc: "Delicious pecan bites with coffee for the perfect gathering.",
    image: "/assets/sharing boxes/Pecan bites and coffe day box.jpeg",
  },
  {
    id: 28,
    category: "Sharing Boxes",
    name: "Pecan Bites Box",
    arName: "بوكس بيكان بايتس",
    price: "75 SAR",
    rating: 4.7,
    reviews: 150,
    desc: "A box full of our famous pecan bites.",
    image: "/assets/sharing boxes/Pican bites box.jpeg",
  },
  {
    id: 29,
    category: "Sharing Boxes",
    name: "Raffel & Coffee Day Box",
    arName: "بوكس رافل وكوفي داي",
    price: "85 SAR",
    rating: 4.7,
    reviews: 150,
    desc: "Sweet Raffel bites accompanied by our fresh coffee.",
    image: "/assets/sharing boxes/Raffel and coffe day box.jpeg",
  },
  {
    id: 45,
    category: "Sharing Boxes",
    name: "Raffel Bites Box",
    arName: "بوكس رافل بايتس",
    price: "75 SAR",
    rating: 4.7,
    reviews: 150,
    desc: "A sharing box dedicated to Raffel bite lovers.",
    image: "/assets/sharing boxes/Raffel bites box.jpeg",
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
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-extrabold text-coffee-primary">
          {t.title}
        </h2>
        <div className="w-20 h-1 bg-coffee-primary/20 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Sticky Tabs */}
      <div className="sticky top-4 z-40 bg-coffee-bg/95 backdrop-blur-md p-2.5 sm:p-4 border border-coffee-primary/10 rounded-2xl shadow-[0_4px_20px_rgba(111,78,55,0.08)]">
        <div className="grid grid-cols-2 min-[400px]:grid-cols-3 lg:grid-cols-6 gap-2.5">
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
                  className="w-full h-full"
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
                  className="w-full h-full"
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
                  className="w-full h-full"
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
                  className="w-full h-full"
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
                  className="w-full h-full"
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
                  className="w-full h-full"
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
                className={`flex justify-center items-center gap-1.5 lg:gap-2 px-2 py-2.5 rounded-xl text-[9px] min-[380px]:text-[10px] sm:text-xs lg:text-sm font-bold transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-coffee-primary text-white shadow-lg transform scale-[1.02]"
                    : "bg-white text-coffee-primary border border-coffee-primary/10 hover:border-coffee-primary/40 shadow-sm"
                }`}
              >
                <span className="w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center shrink-0">
                  {icon}
                </span>
                <span className="truncate">
                  {t.categories[cat as keyof typeof t.categories]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="w-full mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-1 lg:p-3"
          >
            {/* Image */}
            <div className="relative w-full h-36 md:h-52 lg:h-72 overflow-hidden p-2 rounded-lg">
              <Image
                src={item.image}
                alt={lang === "ar" ? item.arName : item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-lg"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500"></div>
            </div>

            {/* Content */}
            <div className="relative  h-36 lg:h-[188px]">
              {/* Title */}
              <h3 className="font-[family-name:var(--font-playfair)] text-[15px] lg:text-2xl font-bold text-coffee-primary mb-1 lg:mb-3">
                {lang === "ar" ? item.arName : item.name}
              </h3>

              {/* Rating + Price */}
              <div className="flex items-center justify-between mb-2 lg:mb-5">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-yellow-500"
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
                </div>

                <span className="text-coffee-primary font-bold text-sm lg:text-lg bg-coffee-bg px-3 py-1 rounded-full">
                  {item.price}
                </span>
              </div>

              {/* Buttons */}
              <div className="w-full flex items-center gap-3  absolute bottom-1">
                <button className="flex-1 py-2 lg:py-3 rounded-lg bg-coffee-primary text-white text-[10px] lg:text-[16px] font-medium hover:bg-[#4a3425] transition-all duration-300 shadow-md">
                  {t.viewDetails}
                </button>

                <button className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-red-50 hover:text-red-500 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
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
