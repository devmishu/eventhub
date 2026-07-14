import EventAnalyticsChart from "@/components/EventAnalyticsChart";
import FAQSection from "@/components/FAQSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import NewsletterSection from "@/components/NewsletterSection";
import PopularCategories from "@/components/PopularCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import { getEvents } from "@/lib/apis/events";

type EventsDataType = Awaited<ReturnType<typeof getEvents>>;
type EventItemType = EventsDataType extends { result: infer T } ? T : never;

export default async function Home() {
  let eventsData: EventsDataType | null = null;

  try {
    const res = await getEvents(null);
    if (res) {
      eventsData = res;
    }
  } catch (error) {
    console.error(
      "Build-time fetch failed for Home Page, using fallback:",
      error,
    );
  }

  const totalCount =
    eventsData && "total" in eventsData ? (eventsData.total as number) : 0;

  const allEventsData =
    eventsData && "result" in eventsData
      ? (eventsData.result as EventItemType)
      : [];

  return (
    <div className="main-bg text-primary min-h-screen flex flex-col">
      <div className="w-full flex flex-col flex-1 items-center justify-center">
        <HeroSection totalEvents={totalCount} />
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
