"use client";

import React from "react";
import { Link } from "@heroui/react";
import { ArrowRight, Calendar, Users2, Ticket, MapPin } from "lucide-react";
import { EventCard } from "./cards/EventCard";


// ১. টাইপ সেফটির জন্য ইন্টারফেস ডিফাইন (ভবিষ্যতে API রেসপন্সও এই টাইপ ফলো করবে)
interface EventData {
  id: string; // API থেকে ডেটা আসলে ইউনিক আইডির প্রয়োজন হবে
  imageSrc: string;
  title: string;
  location: string;
  category: string;
  date: {
    month: string;
    day: string;
  };
}

interface StatItem {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  bgVar: string;
  colorVar: string;
}

export default function FeaturedEvents(): React.JSX.Element {
  
  // ২. ডামি ডেটা (আপাতত হার্ডকোডেড, পরে এটি API থেকে আসবে)
  const events: EventData[] = [
  {
    id: "ev-1",
    imageSrc: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=cover",
    title: "Music Festival 2024",
    location: "Central Park, Dhaka",
    category: "Music",
    date: { month: "JUN", day: "15" },
  },
  {
    id: "ev-2",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=cover",
    title: "Tech Conference 2024",
    location: "ICCB, Dhaka",
    category: "Tech",
    date: { month: "JUN", day: "22" },
  },
  {
    id: "ev-3",
    imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=cover",
    title: "UI/UX Design Workshop",
    location: "Banani, Dhaka",
    category: "Workshop",
    date: { month: "JUN", day: "29" },
  },
  {
    id: "ev-4",
    imageSrc: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=cover",
    title: "Football Championship",
    location: "Mirpur Stadium, Dhaka",
    category: "Sports",
    date: { month: "JUL", day: "06" },
  },
];

  // নিচের ৪টি স্ট্যাটাস কাউন্টারের ডেটা
  const stats: StatItem[] = [
    {
      value: "120+",
      label: "Total Events",
      icon: Calendar,
      bgVar: "var(--cat-music-bg)",
      colorVar: "var(--cat-music-text)",
    },
    {
      value: "80+",
      label: "Organizers",
      icon: Users2,
      bgVar: "var(--cat-sports-bg)",
      colorVar: "var(--cat-sports-text)",
    },
    {
      value: "10K+",
      label: "Attendees",
      icon: Ticket,
      bgVar: "var(--cat-workshop-bg)",
      colorVar: "var(--cat-workshop-text)",
    },
    {
      value: "15+",
      label: "Cities",
      icon: MapPin,
      bgVar: "var(--cat-art-bg)",
      colorVar: "var(--cat-art-text)",
    },
  ];

  /* 
    ===========================================================================
    💡 HOW TO HANDLE API DATA WITH TYPE SAFETY (ভবিষ্যতের জন্য গাইডলাইন)
    ===========================================================================
    যখন আপনি backend বা API থেকে fetch করবেন (যেমন useEffect বা Next.js Server Component-এ):

    ১. Fetch করার সময় জেনেরিক টাইপ ব্যবহার করবেন:
       const response = await fetch('https://api.example.com/events');
       const data: EventData[] = await response.json(); // এখানে টাইপ কাস্ট করে দেবেন

    ২. যদি State ব্যবহার করেন:
       const [events, setEvents] = useState<EventData[]>([]); 
       
    ৩. API এর ডেটা আর্কিটেকচার যদি এই `EventData` ইন্টারফেসের সাথে হুবহু না মিলে, 
       তবে ডেটা সেট করার আগে একটি .map() চালিয়ে ম্যাপ করে নেবেন। যেমন:
       
       const formattedData = apiResponse.map((item: any) => ({
          id: item._id,
          imageSrc: item.cover_image,
          title: item.event_name,
          location: item.venue,
          category: item.tags[0],
          date: {
             month: new Date(item.date).toLocaleString('en-US', { month: 'short' }),
             day: new Date(item.date).getDate().toString()
          }
       }));
    ===========================================================================
  */

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
          {events.map((event: EventData) => (
            <EventCard
              key={event.id} // টাইপ সেফ কি (Key)
              imageSrc={event.imageSrc}
              title={event.title}
              location={event.location}
              category={event.category}
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
                  <IconComponent className="w-5 h-5" style={{ color: stat.colorVar }} strokeWidth={2} />
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