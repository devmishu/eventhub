"use client";

import React from "react";

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => (
  <div className="bg-white border border-zinc-100 rounded-[24px] p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-shadow">
    <h3 className="text-3xl font-black text-zinc-900 tracking-tight">
      {number}
    </h3>
    <p className="text-xs font-semibold text-zinc-400 mt-1 uppercase tracking-wider">
      {label}
    </p>
  </div>
);

export default function AboutVision({ totalEvents }): React.JSX.Element {
  return (
    <section className="w-full bg-[#fbfbfe] py-12">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
              Our Mission & Vision
            </h2>
            <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
              We believe that gatherings shape culture, spark innovation, and
              create lifelong memories. Our mission is to provide an intuitive
              ecosystem where organizers can build seamlessly, and attendees can
              find community.
            </p>
            <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
              With clean, functional UI and modern tools, we strive to bring
              visual elegance and maximum performance to the event management
              landscape.
            </p>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <StatCard number={`${totalEvents}+`} label="Events Hosted" />
            <StatCard number="50+" label="Organizers" />
            <StatCard number="1000+" label="Attendees" />
            <StatCard number="15+" label="Cities" />
          </div>
        </div>
      </div>
    </section>
  );
}
