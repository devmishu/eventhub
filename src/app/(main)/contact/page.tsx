import NewsletterSection from "@/components/NewsletterSection";
import ContactForm from "../_components/ContactForm";
import ContactHero from "../_components/ContactHero";

export default function ContactPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#fbfbfe]">
      <ContactHero />
      <ContactForm />
      <NewsletterSection />
    </main>
  );
}
