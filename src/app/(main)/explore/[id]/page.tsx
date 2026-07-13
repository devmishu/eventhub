import { getSingleEvents } from "@/lib/apis/events";
import { ArrowLeft, MapPin, Calendar, Clock, Tag, User } from "lucide-react";
import Link from "next/link";

export interface SingleEventDetails {
  _id?: string;
  title: string;
  imageUrl: string;
  date: string;
  shortfullDescription: string;
  fullfullDescription: string;
  priority: string;
  price: number;
  category: string;
  location: string;
  userId: string;
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EventDetails({
  params,
}: PageProps): React.JSX.Element {
  const { id } = await params;
  const singleEvents: SingleEventDetails = await getSingleEvents(id);

 

  const singleEventData = {
    ...singleEvents,
    time: "4:00 PM",
    endTime: "10:00 PM",
    category: "Music",
    organizer: "EventHub Team",
  };

  

  const event = singleEventData;

  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleString("en-US", {
    month: "short",
  });
  const day = eventDate.getDate();

  return (
    <section className="w-full bg-[#fbfbfe] py-8">
      <div className="w-full max-w-[900px] mx-auto px-4 md:px-6">
        {/* 1. Back Button */}
        <div className="flex justify-start mb-6">
          <Link
            href={"/explore"}
            type="button"
            className="flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer group"
          >
            <ArrowLeft
              className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
              style={{ color: "var(--primary)" }}
            />
            <span>Back to Events</span>
          </Link>
        </div>

        {/* 2. Main Cover Image */}
        <div className="w-full aspect-[21/9] sm:h-[320px] rounded-[24px] overflow-hidden bg-zinc-100 shadow-xs mb-8">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3. Event Summary Hero Row (Badge, Titles, Register Button) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-zinc-100 mb-8">
          {/* Left Block: Date Badge & Title Texts */}
          <div className="flex items-start sm:items-center gap-5 w-full md:w-auto">
            {/* Compact Date Badge */}
            <div className="flex flex-col items-center justify-center min-w-[64px] h-[76px] rounded-2xl border border-zinc-100 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.02)] overflow-hidden flex-shrink-0">
              <div
                className="w-full text-center text-[11px] font-bold tracking-wider uppercase py-1 px-2 opacity-90"
                style={{
                  backgroundColor: "rgba(88, 32, 228, 0.06)",
                  color: "var(--primary)",
                }}
              >
                {month}
              </div>
              <div className="flex-1 flex items-center justify-center text-lg font-black text-zinc-800 px-2">
                {day}
              </div>
            </div>

            {/* Text details */}
            <div className="flex flex-col items-start text-left gap-1.5">
              <h1 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight leading-tight">
                {event.title}
              </h1>

              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{event.location}</span>
              </div>

              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                <span>
                  {event.date} • {event.time}
                </span>
              </div>

              <span
                className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md mt-0.5"
                style={{
                  backgroundColor: "rgba(88, 32, 228, 0.06)",
                  color: "var(--primary)",
                }}
              >
                {event.category}
              </span>
            </div>
          </div>
        </div>

        {/* 4. About This Event fullDescription Section */}
        <div className="text-left mb-8">
          <h2 className="text-base font-bold text-zinc-900 tracking-tight mb-3">
            About This Event
          </h2>
          <p className="text-sm font-medium text-zinc-500 leading-relaxed max-w-3xl">
            {event.fullDescription}
          </p>
        </div>

        {/* 5. Event Information Metadata List Grid */}
        <div className="text-left">
          <h2 className="text-base font-bold text-zinc-900 tracking-tight mb-4">
            Event Information
          </h2>

          <div className="flex flex-col gap-4 max-w-md">
            {/* Info Item: Date */}
            <div className="flex items-center text-sm">
              <div className="flex items-center gap-2.5 w-32 text-zinc-400 font-semibold flex-shrink-0">
                <Calendar className="w-4 h-4 stroke-[2]" />
                <span>Date</span>
              </div>
              <div className="text-zinc-800 font-bold">{event.date}</div>
            </div>

            {/* Info Item: Time */}
            <div className="flex items-center text-sm">
              <div className="flex items-center gap-2.5 w-32 text-zinc-400 font-semibold flex-shrink-0">
                <Clock className="w-4 h-4 stroke-[2]" />
                <span>Time</span>
              </div>
              <div className="text-zinc-800 font-bold">
                {event.time} - {event.endTime}
              </div>
            </div>

            {/* Info Item: Location */}
            <div className="flex items-center text-sm">
              <div className="flex items-center gap-2.5 w-32 text-zinc-400 font-semibold flex-shrink-0">
                <MapPin className="w-4 h-4 stroke-[2]" />
                <span>Location</span>
              </div>
              <div className="text-zinc-800 font-bold">{event.location}</div>
            </div>

            {/* Info Item: Category */}
            <div className="flex items-center text-sm">
              <div className="flex items-center gap-2.5 w-32 text-zinc-400 font-semibold flex-shrink-0">
                <Tag className="w-4 h-4 stroke-[2]" />
                <span>Category</span>
              </div>
              <div className="text-zinc-800 font-bold">{event.category}</div>
            </div>

            {/* Info Item: Organizer */}
            <div className="flex items-center text-sm">
              <div className="flex items-center gap-2.5 w-32 text-zinc-400 font-semibold flex-shrink-0">
                <User className="w-4 h-4 stroke-[2]" />
                <span>Organizer</span>
              </div>
              <div className="text-zinc-800 font-bold">{event.organizer}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
