"use client";

import React from "react";

export default function ContactHero(): React.JSX.Element {
  return (
    <section className="w-full bg-[#fbfbfe] pt-16 pb-8">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Badge */}
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#5820e4] bg-[#5820e4]/10 px-3 py-1 rounded-full mb-4">
          Get In Touch
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight max-w-2xl">
          We'd Love to Hear <span className="text-[#5820e4]">From You</span>
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-500 text-sm md:text-base mt-4 max-w-lg leading-relaxed">
          Have a question about events, ticketing, or partnerships? Drop us a
          message and our team will get back to you shortly.
        </p>
      </div>
    </section>
  );
}
