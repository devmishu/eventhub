import EventAnalyticsChart from "@/components/EventAnalyticsChart";
import FAQSection from "@/components/FAQSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import NewsletterSection from "@/components/NewsletterSection";
import PopularCategories from "@/components/PopularCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import { getEvents } from "@/lib/apis/events";

export default async function Home() {
  const eventsData = await getEvents(null);
  const allEventsData = eventsData?.result || [];

  return (
    <div className="main-bg text-primary min-h-screen flex flex-col">
      <div className="w-full flex flex-col flex-1 items-center justify-center">
        
        <HeroSection totalEvents={eventsData.total} />
        <PopularCategories />
        <HowItWorks />
        <FeaturedEvents />
        <WhyChooseUs />
        <EventAnalyticsChart events={allEventsData} />
        <FAQSection />
        <NewsletterSection />
      </div>
    </div>
  );
}
