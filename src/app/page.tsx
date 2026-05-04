import MenuSection from "./components/MenuSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 px-8 md:px-16 text-left flex flex-col justify-center min-h-[70vh] overflow-hidden">
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover  animate-zoom"
          style={{ backgroundImage: "url('/assets/latte-hero.jpeg')" }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0  z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-coffee-primary mb-4 leading-tight  animate-fade-left">
            Brewed with Passion,<br className="hidden sm:block" /> Served with Love.
          </h1>
          <p className="text-coffee-primary text-base sm:text-lg max-w-lg ">
            Welcome to Pi Cafe. Explore our carefully crafted menu and find your perfect cup today.
          </p>
        </div>
      </section>

      {/* The Star of the Show: The Menu */}
      <MenuSection />
      
    </div>
  );
}
