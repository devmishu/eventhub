import React from "react";
import { Button, Card } from "@heroui/react";
import { MapPin } from "lucide-react";

interface EventCardProps {
  imageUrl: string;
  title: string;
  date:string;
}

export function EventCard({
  imageUrl,
  title,
  date,
}: EventCardProps): React.JSX.Element {
  const eventDate = new Date(date);

  const month = eventDate.toLocaleString("en-US", {
    month: "short",
  });

  const day = eventDate.getDate();

  return (
    <Card className="w-full bg-white border border-zinc-100/80 rounded-[24px] p-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.06)] transition-all duration-300 group flex flex-col !overflow-visible">
      {/* Image and Floating Date Container */}
      <div className="relative w-full aspect-[4/3] flex-shrink-0 !overflow-visible">
        {/* Actual Image Box */}
        {/* <div className="w-full h-full rounded-[18px] overflow-hidden bg-zinc-100">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div> */}
        <div className="relative w-full h-52 flex-shrink-0 overflow-visible">
          <div className="w-full h-full rounded-[18px] overflow-hidden bg-zinc-100">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Floating Date Badge */}
        <div className="absolute left-4 bottom-[-16px] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] rounded-xl py-1 px-2.5 flex flex-col items-center justify-center min-w-[52px] border border-zinc-100 z-30">
          <span
            className="text-[10px] font-bold tracking-wider uppercase leading-none block pt-0.5"
            style={{ color: "var(--primary)" }}
          >
            {month}
          </span>

          <span className="text-base font-black text-zinc-800 leading-none mt-1 pb-0.5 block">
            {day}
          </span>
        </div>
      </div>

      {/* Card Content Section */}
      <div className="flex flex-col items-start px-2 pt-6 pb-1 text-left w-full mt-1 flex-1">
        {/* Event Title */}
        <h3 className="text-base font-bold text-zinc-900 tracking-tight leading-snug line-clamp-1 mb-2 group-hover:text-zinc-950 transition-colors">
          {title}
        </h3>

        {/* Location Row */}
        <div className="flex items-center gap-1 text-zinc-400 text-xs font-medium w-full line-clamp-1 mb-4">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0 stroke-[2]" />
          {/* <span>{location}</span> */}
        </div>

        {/* Category Pill and Action Button Fixed Layout Row */}
        <div className="mt-auto flex justify-between items-center w-full gap-2">
          {/* Dynamic Category Pill Badge */}
          <div
            className="inline-block text-xs font-bold px-2.5 py-1 rounded-md"
            style={{
              backgroundColor: "rgba(88, 32, 228, 0.06)",
              color: "var(--primary)",
            }}
          >
            {/* {category} */}
          </div>

          {/* Upgraded Button with Theme Color Variable */}
          <Button
            variant="solid"
            className="h-9 px-4 rounded-xl text-xs font-bold text-white shadow-sm transition-all duration-200 opacity-90 hover:opacity-100 cursor-pointer"
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
}
