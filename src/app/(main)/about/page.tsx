import NewsletterSection from "@/components/NewsletterSection";
import AboutHero from "../_components/AboutHero";
import AboutValues from "../_components/AboutValues";
import AboutVision from "../_components/AboutVision";
import { getEvents } from "@/lib/apis/events";


type EventsDataType = Awaited<ReturnType<typeof getEvents>>;

export default async function AboutPage(): Promise<React.JSX.Element> {
 
  let eventsData: EventsDataType | null = null;

  try {
    const res = await getEvents(null);
    if (res) {
      eventsData = res;
    }
  } catch (error) {
    console.error("Build-time fetch failed for /about, using fallback:", error);
  }

  
  const totalCount =
    eventsData && "total" in eventsData ? (eventsData.total as number) : 0;

  return (
    <main className="min-h-screen bg-[#fbfbfe]">
      <AboutHero />
      <AboutVision totalEvents={totalCount} />
      <AboutValues />
      <NewsletterSection />
    </main>
  );
}
