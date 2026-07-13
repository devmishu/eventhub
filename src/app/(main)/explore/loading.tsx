import { EventCardSkeleton } from "@/components/EventCardSkeleton";
import React from "react";

export default function ExploreLoading(): React.JSX.Element {
  return (
    <div className="w-full min-h-screen bg-zinc-50/30">
    
      <main className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-6">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
          {Array.from({ length: 8 }).map((_, index) => (
            <EventCardSkeleton key={`explore-loading-${index}`} />
          ))}
        </div>
      </main>
    </div>
  );
}
