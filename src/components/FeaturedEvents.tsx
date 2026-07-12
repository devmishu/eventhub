import React from "react";
import { ArrowRight, Calendar, Users2, Ticket, MapPin } from "lucide-react";
import { EventCard } from "./cards/EventCard";
import { getEvents, getFeaturedEvents } from "@/lib/apis/events";
import Link from "next/link";

// ১. টাইপ সেফটির জন্য ইন্টারফেস ডিফাইন (ভবিষ্যতে API রেসপন্সও এই টাইপ ফলো করবে)
export interface Event {
  _id?: string;
  title: string;
  imageUrl: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  priority: string;
  price: number;
}

interface StatItem {
  value: number;
  label: string;
  icon: React.ComponentType<any>;
  bgVar: string;
  colorVar: string;
}

export default async function FeaturedEvents(): React.JSX.Element {
  const events = await getEvents();
  const featuredEvents = await getFeaturedEvents();

  // নিচের ৪টি স্ট্যাটাস কাউন্টারের ডেটা
  const stats: StatItem[] = [
    {
      value: events.length,
      label: "Total Events",
      icon: Calendar,
      bgVar: "var(--cat-music-bg)",
      colorVar: "var(--cat-music-text)",
    },
    {
      value: 80,
      label: "Organizers",
      icon: Users2,
      bgVar: "var(--cat-sports-bg)",
      colorVar: "var(--cat-sports-text)",
    },
    {
      value: 10,
      label: "Attendees",
      icon: Ticket,
      bgVar: "var(--cat-workshop-bg)",
      colorVar: "var(--cat-workshop-text)",
    },
    {
      value: 15,
      label: "Cities",
      icon: MapPin,
      bgVar: "var(--cat-art-bg)",
      colorVar: "var(--cat-art-text)",
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfe] py-12 md:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header Row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
            Featured Events
          </h2>
          <Link
            href="/explore"
            className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: "var(--primary)" }}
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Events Responsive Grid (৪টি কলাম, কোনো ফিক্সড উইডথ ছাড়া) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {featuredEvents.map((event) => (
            <EventCard
              key={event._id}
              imageUrl={event.imageUrl}
              title={event.title}
              date={event.date}
            />
          ))}
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-zinc-100">
          {stats.map((stat: StatItem, index: number) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="flex items-center gap-4 px-2">
                {/* Soft Glowing Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: stat.bgVar }}
                >
                  <IconComponent
                    className="w-5 h-5"
                    style={{ color: stat.colorVar }}
                    strokeWidth={2}
                  />
                </div>
                {/* Stats Text */}
                <div className="flex flex-col text-left">
                  <span className="text-xl md:text-2xl font-extrabold text-zinc-900 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-zinc-400 mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
