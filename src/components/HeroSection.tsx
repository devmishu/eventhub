"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface SlideItem {
  id: number;
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    badge: "Discover & Manage Events",
    title: (
      <>
        Discover Amazing <span className="text-[#5820e4]">Events</span> Near You
      </>
    ),
    subtitle:
      "Find, create and manage premium live events that bring passionate people together from all around the world.",
    image: "/images/sports.jpg",
  },
  {
    id: 2,
    badge: "Innovation & Future",
    title: (
      <>
        Tech Conferences & <span className="text-[#5820e4]">Hackathons</span>
      </>
    ),
    subtitle:
      "Connect with industry leaders, explore cutting-edge engineering tech stack, and build tomorrow's infrastructure.",
    image: "/images/hechaton.jpg",
  },
  {
    id: 3,
    badge: "Live & Loud",
    title: (
      <>
        Feel the Beat at Live <span className="text-[#5820e4]">Concerts</span>
      </>
    ),
    subtitle:
      "Experience unforgettable music festivals and high-energy stadium rock concerts featuring your favorite global artists.",
    image: "/images/music.jpg",
  },
];

export default function HeroSection({ totalEvents }: { totalEvents: number }): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const nextSlide = (): void => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  };

  const prevSlide = (): void => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length,
    );
  };

  const currentSlide = SLIDES[currentIndex];

  const textVariants: Variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <section className="relative overflow-hidden bg-[#fbfbfe] py-16 lg:py-24 w-full flex justify-center">
      {/* ─── NAVIGATION BUTTONS ─── */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-zinc-800 p-2.5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-zinc-100/80 transition-all active:scale-90 cursor-pointer hidden md:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-zinc-800 p-2.5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-zinc-100/80 transition-all active:scale-90 cursor-pointer hidden md:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* ─── MAIN ALIGNED CONTAINER ─── */}
      <div className="w-full max-w-[1440px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column (Expanded to 7 Columns for Typography) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left min-h-[340px] justify-center w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              {/* Badge */}
              <span className="inline-block bg-[#5820e4]/5 text-[#5820e4] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md mb-5">
                {currentSlide.badge}
              </span>

              {/* Main Heading - Adjusted for bold impact */}
              <h1 className="w-full text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 leading-[1.1] tracking-tight mb-5">
                {currentSlide.title}
              </h1>

              {/* Subtitle Description */}
              <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mb-8 leading-relaxed">
                {currentSlide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link href={"/explore"}>
              <button className="bg-[#5820e4] text-white h-11 px-5 rounded-xl font-bold text-xs shadow-md transition-transform active:scale-95 cursor-pointer">
                Explore Events
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image & Stats Column (5 Columns) */}
        <div className="lg:col-span-5 relative flex flex-col items-center w-full">
          {/* Main Hero Image Card */}
          <div className="relative w-full aspect-4/3 rounded-[32px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.02)] border border-zinc-100/50 z-10 bg-zinc-50">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={currentSlide.image}
                  alt="Event Showcase"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats Badges Row */}
          <div className="flex gap-4 mt-5 w-full justify-between z-10">
            <div className="flex-1 bg-white p-3.5 rounded-[20px] border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.005)] text-center">
              <h4 className="text-lg font-black text-zinc-900 tracking-tight">
                {totalEvents}+
              </h4>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-0.5">
                Events
              </p>
            </div>
            <div className="flex-1 bg-white p-3.5 rounded-[20px] border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.005)] text-center">
              <h4 className="text-lg font-black text-zinc-900 tracking-tight">
                50+
              </h4>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-0.5">
                Organizers
              </p>
            </div>
            <div className="flex-1 bg-white p-3.5 rounded-[20px] border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.005)] text-center">
              <h4 className="text-lg font-black text-zinc-900 tracking-tight">
                1000+
              </h4>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-0.5">
                Attendees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
