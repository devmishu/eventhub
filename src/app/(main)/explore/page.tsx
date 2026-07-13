import React from "react";
import FilterBar from "@/components/FilterBar";
import { EventCard } from "@/components/cards/EventCard";
import { getEvents } from "@/lib/apis/events";
import { PaginationWithSummary } from "@/components/shared/PaginationWithSummary";

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

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

interface EvenntResponse {
  result: Event[];
}

export default async function ExplorePage({
  searchParams,
}: PageProps): Promise<React.JSX.Element> {
  const filters = await searchParams;

  const quaryString = new URLSearchParams(
    filters as Record<string, string>,
  ).toString();

  const eventsData: EvenntResponse = await getEvents(quaryString);
  const allEventsData: Event[] = eventsData.result;

 

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
          <FilterBar filters={filters} />
        </div>

        {/* Events */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allEventsData.map((event) => (
            <EventCard
              key={event._id}
              imageUrl={event.imageUrl}
              title={event.title}
              date={event.date}
              location={event.location}
              category={event.category}
              id={event._id}
              shortDescription={event.shortDescription}
              price={event.price}
            />
          ))}
        </div>

        <PaginationWithSummary
          total={eventsData?.total}
        />
      </div>
    </section>
  );
}
