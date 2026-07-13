"use client";

import React from "react";
import { CalendarRange, Ticket, Sparkles } from "lucide-react";

interface StepItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function HowItWorks(): React.JSX.Element {
  const steps: StepItem[] = [
    {
      id: "01",
      title: "Explore Amazing Events",
      description:
        "Discover verified local and global events tailored exactly to your personal interests and passion categories.",
      icon: <CalendarRange className="w-5 h-5" />,
    },
    {
      id: "02",
      title: "Get Your Secure Ticket",
      description:
        "Purchase tickets instantly through our premium and encrypted single-click checkout processing flow.",
      icon: <Ticket className="w-5 h-5" />,
    },
    {
      id: "03",
      title: "Attend & Make Memories",
      description:
        "Receive your clean digital pass instantly, show it at the venue gates, and immerse yourself completely.",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfe] py-16">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#5820e4] bg-[#5820e4]/10 px-3 py-1 rounded-full">
            Seamless Process
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight mt-2">
            How <span className="text-[#5820e4]">EventHub</span> Works
          </h2>
          <p className="text-zinc-400 text-xs max-w-md mt-1 leading-relaxed">
            Get from discovering unforgettable live experiences to scanning your
            gate ticket pass in three straightforward actions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="bg-white border border-zinc-100 rounded-[24px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col text-left relative group transition-all duration-300 hover:border-zinc-200"
            >
              {/* Step Number Top-Right */}
              <span className="absolute top-6 right-6 text-3xl font-black text-zinc-100/80 tracking-tight select-none group-hover:text-[#5820e4]/10 transition-colors">
                {step.id}
              </span>

              {/* Icon Container */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#5820e4]/5 text-[#5820e4] shrink-0 mb-6 transition-all duration-300 group-hover:bg-[#5820e4] group-hover:text-white">
                {step.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-zinc-900 tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
