"use client";

import React from "react";
import Link from "next/link";

export default function AboutHero(): React.JSX.Element {
  return (
    <section className="w-full bg-[#fbfbfe] pt-16 pb-12">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Badge */}
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#5820e4] bg-[#5820e4]/10 px-3 py-1 rounded-full mb-4">
          Our Story
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight max-w-3xl">
          Connecting People Through{" "}
          <span className="text-[#5820e4]">Unforgettable</span> Experiences
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-500 text-sm md:text-base mt-4 max-w-xl leading-relaxed">
          EventHub is a premium platform designed to bridge the gap between
          passion and execution, helping you discover and manage world-class
          events effortlessly.
        </p>

        {/* CTA Button */}
        <Link href="/explore">
          <button
            className="h-11 px-6 rounded-xl font-semibold text-white shadow-md transition-transform active:scale-95 text-sm cursor-pointer mt-6"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Explore Events
          </button>
        </Link>
      </div>
    </section>
  );
}
