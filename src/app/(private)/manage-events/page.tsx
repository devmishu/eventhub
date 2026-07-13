import { getMyEvents } from "@/lib/apis/events";
import { getUser } from "@/lib/core/session";
import { ManageEventsTable } from "../_components/ManageEventsTable";
import { deleteEvent } from "@/lib/actions/events";
import { EmptyState } from "@/components/shared/EmptyState";

export interface Event {
  _id?: string;
  title: string;
  imageUrl: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  priority: string;
  price: number;
  category: string;
  location: string;
  userId: string;
}

export default async function ManageEventPage() {
  const user = await getUser();

  // ডেটাবেজ বা API থেকে প্রোডাক্ট/ইভেন্ট ডেটা ফেচিং
  const myEvents: Event[] = (await getMyEvents(user?.id)) || [];

  const handleDeletEvent = async (eventId: string) => {
    "use server";
    // if (!eventId) return;
    await deleteEvent(eventId);
  };

  return (
    <section className="w-full bg-[#fbfbfe] py-12 min-h-[calc(100vh-80px)] flex flex-col justify-start">
      <div className="w-full max-w-360 mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="text-left mb-8">
          <h1 className="text-3xl font-black text-zinc-900 tracking-tight">
            Manage Events
          </h1>
          <p className="text-sm font-medium text-zinc-400 mt-1.5">
            View and manage your listed products and options.
          </p>
        </div>

        {/* কন্ডিশনাল রেন্ডারিং: ইভেন্ট চেক */}
        {myEvents.length === 0 ? (
          <EmptyState
            title="No Listed Events Yet"
            description="You haven't published any events under your account. Create one now to reach your attendees!"
            buttonText="Create Your First Event"
            buttonHref="/add-event" // আপনার প্রোজেক্ট অনুযায়ী পাথটি পরিবর্তন করুন
          />
        ) : (
          /* HeroUI v3 Table Component */
          <ManageEventsTable
            events={myEvents}
            onHandleDeletEvent={handleDeletEvent}
          />
        )}
      </div>
    </section>
  );
}
