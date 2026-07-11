import FeaturedEvents from "@/components/FeaturedEvents";
import HeroSection from "@/components/HeroSection";
import PopularCategories from "@/components/PopularCategories";

export default function Home() {
  return (
    <div className="main-bg text-primary min-h-screen flex flex-col">
      {/* আপনার হোম পেজের সেকশনগুলো (যেমন: Hero, Featured Events) এখানে একটার পর একটা বসবে */}
      <div className=" app-container flex flex-col flex-1 items-center justify-center">
        <HeroSection/>
        <PopularCategories/>
        <FeaturedEvents/>

      </div>
    </div>
  );
}