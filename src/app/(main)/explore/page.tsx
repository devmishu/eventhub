import React from "react";
import FilterBar from "@/components/FilterBar";
import { EventCard } from "@/components/cards/EventCard";
import { getEvents } from "@/lib/apis/events";

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

export default async function ExplorePage(): Promise<React.JSX.Element> {
  const eventsData: Event[] = await getEvents();

  return (
    <section className="w-full bg-[#fbfbfe] py-12">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-3xl font-black tracking-tight text-zinc-900">
            Explore Events
          </h1>

          <p className="mt-1.5 text-sm font-medium text-zinc-400">
            Find events that interest you
          </p>
        </div>

        {/* Filter */}
        <div className="-mx-6 md:-mx-12">
          <FilterBar />
        </div>

        {/* Events */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {eventsData.map((event) => (
            <EventCard
              key={event._id}
              imageUrl={event.imageUrl}
              title={event.title}
              date={event.date}
              location={event.location}
              category={event.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
