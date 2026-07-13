"use client";

import React from "react";
import { ShieldCheck, Target, Zap } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const ValueCard = ({ icon, title, desc }: ValueCardProps) => (
  <div className="flex flex-col items-start text-left bg-zinc-50/50 border border-zinc-100 p-6 rounded-[24px]">
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-xs"
      style={{ backgroundColor: "rgba(88, 32, 228, 0.06)" }}
    >
      {icon}
    </div>
    <h4 className="text-sm font-bold text-zinc-900 tracking-tight">{title}</h4>
    <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">{desc}</p>
  </div>
);

export default function AboutValues(): React.JSX.Element {
  return (
    <section className="w-full bg-[#fbfbfe] py-12 pb-20">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
            Why Choose EventHub
          </h2>
          <p className="text-zinc-400 text-xs font-medium mt-0.5">
            The core principles that drive our product.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard
            icon={<Zap className="w-4 h-4 text-[#5820e4]" />}
            title="Blazing Fast Execution"
            desc="Experience seamless navigation and zero-latency performance when discovering new activities."
          />
          <ValueCard
            icon={<ShieldCheck className="w-4 h-4 text-[#5820e4]" />}
            title="Trusted Security"
            desc="Your ticket bookings, credentials, and data privacy are guarded by modern security standard protocols."
          />
          <ValueCard
            icon={<Target className="w-4 h-4 text-[#5820e4]" />}
            title="Targeted Verification"
            desc="Every single listed event undergoes quick screening to ensure premium user experiences."
          />
        </div>
      </div>
    </section>
  );
}
