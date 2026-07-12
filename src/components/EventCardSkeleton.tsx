"use client";

import React from "react";
import { Card, Skeleton } from "@heroui/react";

export function EventCardSkeleton(): React.JSX.Element {
  return (
    <Card className="w-full bg-white border border-zinc-100/80 rounded-[24px] p-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col !overflow-visible">
      {/* Image Area Skeleton */}
      <div className="relative w-full aspect-[4/3] flex-shrink-0 !overflow-visible">
        <Skeleton className="w-full h-52 rounded-[18px] bg-zinc-100" />

        {/* Floating Date Badge Skeleton */}
        <div className="absolute left-4 bottom-[-16px] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] rounded-xl py-1 px-2.5 flex flex-col items-center justify-center min-w-[52px] border border-zinc-100 z-30 h-[48px]">
          <Skeleton className="w-7 h-3 rounded-md" />
          <Skeleton className="w-5 h-4 rounded-md mt-1" />
        </div>
      </div>

      {/* Content Area Skeleton */}
      <div className="flex flex-col items-start px-2 pt-6 pb-1 text-left w-full mt-1 flex-1">
        {/* Title Skeleton */}
        <Skeleton className="w-3/4 h-5 rounded-lg mb-2" />

        {/* Short Description Skeleton (2 Lines) */}
        <div className="w-full mb-3 flex flex-col gap-1.5 min-h-[32px]">
          <Skeleton className="w-full h-3 rounded-md" />
          <Skeleton className="w-5/6 h-3 rounded-md" />
        </div>

        {/* Location & Price Row Skeleton */}
        <div className="flex items-center justify-between w-full gap-2 mb-4">
          <Skeleton className="w-1/3 h-3 rounded-md" />
          <Skeleton className="w-12 h-4 rounded-md" />
        </div>

        {/* Bottom Action Row Skeleton */}
        <div className="mt-auto flex justify-between items-center w-full gap-2">
          {/* Category Pill Skeleton */}
          <Skeleton className="w-16 h-6 rounded-md" />

          {/* Button Skeleton */}
          <Skeleton className="w-24 h-9 rounded-xl" />
        </div>
      </div>
    </Card>
  );
}
