import MenuSection from "./home/MenuSection";
import ReviewsSection from "./home/ReviewsSection";
import CoffeeBeansSection from "./home/CoffeeBeansSection";
import BestSellerSection from "./home/BestSellerSection";
import BranchLocationSection from "./home/BranchLocationSection";
import AboutSection from "./home/AboutSection";
import ContactSection from "./home/ContactSection";

import Hero from "./home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col  w-full overflow-x-hidden">
      <Hero />
      <MenuSection />
      <BranchLocationSection />
      <ReviewsSection />
      <CoffeeBeansSection />
      <BestSellerSection />
      <AboutSection />
      
      <ContactSection />
    </div>
  );
}
