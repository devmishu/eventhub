"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// স্লাইড ডেটা (এখানে আপনার পছন্দমতো ডাটা ও ইমেজ পাথ বসিয়ে নিন)
const SLIDES = [
  {
    id: 1,
    badge: "Discover & Manage Events",
    title: (
      <>
        Discover Amazing <span className="text-[#5820e4]">Events</span> Near You
      </>
    ),
    subtitle:
      "Find, create and manage events that bring people together from all around the world.",
    image: "/images/hero-banner.jpg",
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
      "Connect with industry experts, learn cutting-edge tech, and build the future.",
    image: "/images/tech-event.jpg",
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
      "Experience unforgettable music festivals and concerts by your favorite artists.",
    image: "/images/music-event.jpg",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // অ্যানিমেশন ডিরেকশন ট্র্যাক করার জন্য (বামে নাকি ডানে যাচ্ছে)
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length,
    );
  };

  const currentSlide = SLIDES[currentIndex];

  // টেক্সট অ্যানিমেশন ভ্যারিয়েন্ট
  const textVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 30 : -30 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -30 : 30 }),
  };

  return (
    <section className="relative overflow-hidden bg-[#fbfbfe] py-12 md:py-20 w-full">
      {/* ─── LEFT ARROW BUTTON ─── */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-zinc-800 p-3 rounded-full shadow-md border border-zinc-200/50 transition-all active:scale-90"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* ─── RIGHT ARROW BUTTON ─── */}
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-zinc-800 p-3 rounded-full shadow-md border border-zinc-200/50 transition-all active:scale-90"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Main Grid Content */}
      <div className="w-full mx-auto px-12 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <div className="md:col-span-7 flex flex-col items-start text-left min-h-[320px] justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              {/* Badge */}
              <span className="inline-block bg-indigo-50 text-[#5820e4] text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-md mb-6">
                {currentSlide.badge}
              </span>

              {/* Main Heading */}
              <h1 className="max-w-100 lg:max-w-135 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 leading-[1.1] tracking-tight mb-6">
                {currentSlide.title}
              </h1>

              {/* Subtitle Description */}
              <p className="text-zinc-500 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                {currentSlide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
            <Button className="button-primary h-12 px-6 rounded-xl font-semibold shadow-md transition-transform active:scale-95">
              Explore Events
            </Button>
            <Button className="button-outline bg-white h-12 px-6 rounded-xl font-semibold shadow-xs transition-transform active:scale-95">
              Create Event
            </Button>
          </div>
        </div>

        {/* Right Image & Stats Column */}
        <div className="md:col-span-5 relative flex flex-col items-center w-full">
          {/* Main Hero Image Card */}
          <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-lg border border-zinc-100 z-10 bg-zinc-50">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={currentSlide.image}
                  alt="Amazing Events Showcase"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats Badges Row */}
          <div className="flex gap-4 mt-6 w-full justify-between z-10">
            <div className="flex-1 bg-white p-4 rounded-2xl border border-zinc-100 shadow-xs text-center">
              <h4 className="text-xl font-extrabold text-zinc-900">120+</h4>
              <p className="text-xs text-zinc-400 font-medium mt-1">Events</p>
            </div>
            <div className="flex-1 bg-white p-4 rounded-2xl border border-zinc-100 shadow-xs text-center">
              <h4 className="text-xl font-extrabold text-zinc-900">50+</h4>
              <p className="text-xs text-zinc-400 font-medium mt-1">
                Organizers
              </p>
            </div>
            <div className="flex-1 bg-white p-4 rounded-2xl border border-zinc-100 shadow-xs text-center">
              <h4 className="text-xl font-extrabold text-zinc-900">10K+</h4>
              <p className="text-xs text-zinc-400 font-medium mt-1">
                Attendees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
