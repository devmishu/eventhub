"use client";

import { Button } from "@heroui/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfe] py-12 md:py-20 w-full">
    
      <div className="w-full  mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          
          {/* Badge */}
          <span className="inline-block bg-indigo-50 text-[#5820e4] text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-md mb-6">
            Discover & Manage Events
          </span>

          {/* Main Heading */}
          <h1 className="max-w-100 lg:max-w-135 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 leading-[1.1] tracking-tight mb-6">
  Discover Amazing <span className="text-[#5820e4]">Events</span> Near You
</h1>

          {/* Subtitle Description */}
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            Find, create and manage events that bring people together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
            <Button
              
              
              className="button-primary h-12 px-6 rounded-xl font-semibold shadow-md transition-transform active:scale-95"
            >
              Explore Events
            </Button>
            
            <Button
              
              
              className="button-outline bg-white h-12 px-6 rounded-xl font-semibold shadow-xs transition-transform active:scale-95"
            >
              Create Event
            </Button>
          </div>

        </div>

        {/* Right Image & Stats Column */}
        <div className="md:col-span-5 relative flex flex-col items-center">
          
          {/* Main Hero Image Card */}
          <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-lg border border-zinc-100 z-10">
            <Image
              src="/images/hero-banner.jpg" 
              alt="Amazing Events Showcase"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Stats Badges Row */}
          <div className="flex gap-4 mt-6 w-full justify-between z-10">
            {/* Stat 1 */}
            <div className="flex-1 bg-white p-4 rounded-2xl border border-zinc-100 shadow-xs text-center">
              <h4 className="text-xl font-extrabold text-zinc-900">120+</h4>
              <p className="text-xs text-zinc-400 font-medium mt-1">Events</p>
            </div>

            {/* Stat 2 */}
            <div className="flex-1 bg-white p-4 rounded-2xl border border-zinc-100 shadow-xs text-center">
              <h4 className="text-xl font-extrabold text-zinc-900">50+</h4>
              <p className="text-xs text-zinc-400 font-medium mt-1">Organizers</p>
            </div>

            {/* Stat 3 */}
            <div className="flex-1 bg-white p-4 rounded-2xl border border-zinc-100 shadow-xs text-center">
              <h4 className="text-xl font-extrabold text-zinc-900">10K+</h4>
              <p className="text-xs text-zinc-400 font-medium mt-1">Attendees</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}