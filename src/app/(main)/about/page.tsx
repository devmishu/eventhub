import NewsletterSection from "@/components/NewsletterSection";
import AboutHero from "../_components/AboutHero";
import AboutValues from "../_components/AboutValues";
import AboutVision from "../_components/AboutVision";
import { getEvents } from "@/lib/apis/events";

export default async  function AboutPage(): React.JSX.Element {
  const eventsData = await getEvents(null);

  return (
    <main className="min-h-screen bg-[#fbfbfe]">
      
      <AboutHero />
      <AboutVision totalEvents={eventsData.total}/>
      <AboutValues />
      <NewsletterSection/>
    </main>
  );
}
