import MenuSection from "./components/MenuSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      
      {/* Micro-Hero Section */}
      <section className="w-full bg-coffee-primary/5 border-b border-coffee-secondary/20 py-16 px-4 text-center">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-coffee-primary mb-4 leading-tight">
          Brewed with Passion,<br className="hidden sm:block" /> Served with Love.
        </h1>
        <p className="text-coffee-text/80 text-base sm:text-lg max-w-lg mx-auto">
          Welcome to Pi Cafe. Explore our carefully crafted menu and find your perfect cup today.
        </p>
      </section>

      {/* The Star of the Show: The Menu */}
      <MenuSection />
      
    </div>
  );
}
