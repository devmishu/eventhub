"use client";
import { Button } from "@heroui/react";
import { MoveLeft, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 px-4">
      <div className="text-center max-w-md">
        
        {/* Icon */}
        <div className="inline-flex p-4 rounded-full bg-indigo-50 text-[#5820e4] mb-6">
          <AlertCircle className="w-12 h-12" />
        </div>

        {/* 404 Heading */}
        <h1 className="text-7xl font-extrabold text-zinc-900 tracking-tight mb-2">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-bold text-zinc-800 mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-zinc-500 mb-8 text-sm sm:text-base leading-relaxed">
          Sorry, the page you are looking for doesn't exist or has been moved to another URL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link href="/">
          <Button
            
            className="w-full sm:w-auto bg-[#5820e4] hover:bg-[#4717c1] text-white px-6 h-11 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200"
          >
            <MoveLeft className="w-4 h-4" />
            Back to Home
          </Button>
          </Link>

          <Link href={"/explore"}>
          <Button
            
            variant="bordered"
            className="w-full sm:w-auto border border-zinc-200 text-zinc-700 hover:bg-zinc-100 px-6 h-11 rounded-xl font-medium transition-all duration-200"
          >
            Explore Events
          </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}