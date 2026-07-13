"use client";

import React from "react";
import { ShieldCheck, Zap, BarChart3, Users2 } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs(): React.JSX.Element {
  const features: FeatureItem[] = [
    {
      title: "Bank-Grade Encryption",
      description:
        "Your digital ticket purchases are completely secure with industry standard verified transaction layers.",
      icon: <ShieldCheck className="w-4 h-4" />,
    },
    {
      title: "Instant Ticket Issuance",
      description:
        "No queues or long waiting delays. Receive your premium ticket dashboard pass immediately on payment.",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      title: "Real-Time Insights",
      description:
        "Powerful built-in analytics dashboard tools tailored specifically for event hosts to keep track of attendance data.",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      title: "Verified Communities",
      description:
        "Connect directly with trusted organizers and vibrant local crowds without messy third-party complications.",
      icon: <Users2 className="w-4 h-4" />,
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfe] py-16">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Editorial Introduction Headers (5 Columns) */}
          <div className="lg:col-span-5 text-left flex flex-col gap-2 lg:sticky lg:top-24">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5820e4] bg-[#5820e4]/10 px-3 py-1 rounded-full w-fit">
              Core Core Values
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight leading-tight mt-2">
              Why Organizers and <br />
              Attendees Trust <span className="text-[#5820e4]">EventHub</span>
            </h2>
            <p className="text-zinc-400 text-xs mt-1 max-w-sm leading-relaxed">
              We design and continuously implement infrastructure optimization
              layers to deliver an absolute premium environment for event
              discovery.
            </p>
          </div>

          {/* Right Side: Features List 2x2 Grid Layout (7 Columns) */}
          <div className="lg:col-span-7 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-100 rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col text-left transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
              >
                {/* Icon Circle wrapper */}
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#5820e4]/5 text-[#5820e4] shrink-0 mb-4">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-zinc-900 tracking-tight mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
