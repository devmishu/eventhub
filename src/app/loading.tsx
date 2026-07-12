import React from "react";
import { Skeleton } from "@heroui/react";

export default function GlobalRootLoading(): React.JSX.Element {
  return (
    <div className="w-full min-h-[70vh] max-w-[1440px] mx-auto px-6 md:px-12 py-10 flex flex-col gap-6 animate-in fade-in duration-200">
      {/* 1. Header / Title Placeholder */}
      <div className="flex flex-col gap-2">
        <Skeleton className="w-48 h-8 rounded-xl bg-zinc-100" />
        <Skeleton className="w-32 h-4 rounded-md bg-zinc-100/80" />
      </div>

      {/* 2. Top Bar / Filter Placeholder */}
      <div className="w-full h-14 rounded-2xl bg-zinc-50 border border-zinc-100/80 p-3 flex items-center justify-between gap-4 mt-2">
        <Skeleton className="w-1/3 h-7 rounded-xl bg-zinc-100" />
        <div className="flex gap-2">
          <Skeleton className="w-20 h-7 rounded-lg bg-zinc-100" />
          <Skeleton className="w-20 h-7 rounded-lg bg-zinc-100" />
        </div>
      </div>

      {/* 3. Universal Content Layout Grid Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {/* Left/Main Content Block */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Skeleton className="w-full h-48 rounded-[24px] bg-zinc-100" />
          <div className="space-y-2.5">
            <Skeleton className="w-full h-4 rounded-md bg-zinc-100" />
            <Skeleton className="w-full h-4 rounded-md bg-zinc-100" />
            <Skeleton className="w-4/5 h-4 rounded-md bg-zinc-100" />
          </div>
        </div>

        {/* Right Sidebar Block */}
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full h-32 rounded-[24px] bg-zinc-100" />
          <Skeleton className="w-full h-40 rounded-[24px] bg-zinc-100" />
        </div>
      </div>
    </div>
  );
}
