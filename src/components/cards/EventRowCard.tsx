import React from "react";
import { Card, Button } from "@heroui/react";
import { DollarSign, Layers } from "lucide-react";

// নতুন ডেটা স্ট্রাকচার অনুযায়ী প্রপস ইন্টারফেস আপগ্রেড করা হলো
interface ProductRowCardProps {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  price: number;
  priority: "high" | "medium" | "low" | string;
  date: string;
}

export function EventRowCard({
  _id,
  title,
  shortDescription,
  fullDescription,
  imageUrl,
  price,
  priority,
  date,
}: ProductRowCardProps): React.JSX.Element {
  
  // ডেট থেকে Month এবং Day আলাদা করার লজিক (যেমন: "2026-01-15" -> JAN, 15)
  const eventDate = new Date(date);
  const month = eventDate.toLocaleString("en-US", { month: "SHORT" }).toUpperCase();
  const day = eventDate.getDate().toString().padStart(2, "0");

  return (
    <Card
      className="w-full bg-white border border-zinc-100 rounded-[24px] p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.04)] transition-all duration-300 group"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 w-full">

        {/* Left Section: Image, Date Badge and Details Info */}
        <div className="flex flex-col min-[480px]:flex-row items-start min-[480px]:items-center gap-4 flex-1 w-full">

          {/* 1. Product Image Wrapper */}
          <div className="w-full min-[480px]:w-[140px] aspect-[4/3] min-[480px]:h-[95px] rounded-[18px] overflow-hidden bg-zinc-50 flex-shrink-0">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* 2. Dynamic Date Badge */}
          <div className="flex flex-col items-center justify-center min-w-[56px] h-[68px] rounded-xl border border-zinc-100 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.02)] overflow-hidden flex-shrink-0">
            <div
              className="w-full text-center text-[10px] font-bold tracking-wider uppercase py-1 px-2 opacity-90"
              style={{
                backgroundColor: "rgba(88, 32, 228, 0.06)",
                color: "var(--primary)"
              }}
            >
              {month || "JAN"}
            </div>
            <div className="flex-1 flex items-center justify-center text-base font-black text-zinc-800 px-2">
              {day || "01"}
            </div>
          </div>

          {/* 3. Text Descriptions Content */}
          <div className="flex flex-col items-start text-left gap-1.5 flex-1">
            <h3 className="text-base font-bold text-zinc-900 tracking-tight leading-tight group-hover:text-zinc-950 transition-colors">
              {title}
            </h3>

            {/* Short Description Row */}
            <p className="text-zinc-500 text-xs font-medium line-clamp-1 max-w-[500px]">
              {shortDescription}
            </p>

            {/* Price & Priority Row */}
            <div className="flex flex-wrap items-center gap-3 text-zinc-400 text-xs font-medium mt-0.5">
              <div className="flex items-center gap-0.5 text-zinc-700 font-bold">
                <DollarSign className="w-3.5 h-3.5 flex-shrink-0 stroke-[2.5]" />
                <span>{price}</span>
              </div>
              <span className="text-zinc-200">•</span>
              <div className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 flex-shrink-0 stroke-[2]" />
                <span className="capitalize">Priority: {priority}</span>
              </div>
            </div>

            {/* Priority Pill */}
            <span
              className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md mt-1 capitalize"
              style={{
                backgroundColor: priority === "high" ? "rgba(239, 68, 68, 0.08)" : "rgba(88, 32, 228, 0.06)",
                color: priority === "high" ? "#ef4444" : "var(--primary)"
              }}
            >
              {priority}
            </span>
          </div>

        </div>

        {/* Right Section: Action Button */}
        <div className="w-full sm:w-auto flex justify-end flex-shrink-0">
          <Button
            variant="bordered"
            className="w-full sm:w-auto h-10 px-5 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 rounded-xl text-xs font-bold text-zinc-700 shadow-2xs transition-all cursor-pointer"
          >
            View Details
          </Button>
        </div>

      </div>
    </Card>
  );
}