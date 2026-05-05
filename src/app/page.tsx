

import MenuSection from "./home/MenuSection";
import ReviewsSection from "./home/ReviewsSection";
import CoffeeBeansSection from "./home/CoffeeBeansSection";

import Hero from "./home/Hero";

export default function Home() {
  

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Hero/>
      <MenuSection />
      <ReviewsSection />
      <CoffeeBeansSection />
    </div>
  );
}
