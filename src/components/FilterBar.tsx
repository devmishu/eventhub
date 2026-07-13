"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@heroui/react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface FilterBarProps {
  filters: Record<string, string | string[] | undefined>;
}

export default function FilterBar({
  filters,
}: FilterBarProps): React.JSX.Element {
  const router = useRouter();

 
  const [searchQuery, setSearchQuery] = useState<string>(
    (filters?.search as string) || "",
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    (filters?.category as string) || "All Categories",
  );
  const [selectedLocation, setSelectedLocation] = useState<string>(
    (filters?.location as string) || "All Locations",
  );
  const [selectedSort, setSelectedSort] = useState<string>(
    (filters?.sortBy as string) || "Newest",
  );

  useEffect(() => {
    const sp = new URLSearchParams();

    if (searchQuery) sp.set("search", searchQuery);
    else sp.delete("search");

    if (selectedCategory && selectedCategory !== "All Categories")
      sp.set("category", selectedCategory);
    else sp.delete("category");

    if (selectedLocation && selectedLocation !== "All Locations")
      sp.set("location", selectedLocation);
    else sp.delete("location");

    if (selectedSort && selectedSort !== "Newest")
      sp.set("sortBy", selectedSort);
    else sp.delete("sortBy");

    const searchString = sp.toString();
    const path = searchString ? `?${searchString}` : window.location.pathname;

    router.push(path, { scroll: false });
  }, [searchQuery, selectedCategory, selectedLocation, selectedSort, router]);


  const selectClassName =
    "w-full bg-white rounded-xl border border-zinc-200/85 hover:border-zinc-300 focus:border-zinc-400 focus:outline-hidden h-11 pl-4 pr-10 text-zinc-800 font-bold text-sm shadow-xs transition-all appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2371717a%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[position:right_16px_center] bg-no-repeat";

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-6">
      {/* Container Layout */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 w-full">
        {/* Left Side: Search Input Field */}
        <div className="w-full lg:max-w-[400px]">
          <Input
            type="text"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events..."
            variant="bordered"
            radius="xl"
            className="w-full bg-white rounded-xl"
            endContent={
              <Search
                className="w-4 h-4 flex-shrink-0 cursor-pointer"
                style={{ color: "var(--primary)" }}
              />
            }
            classNames={{
              inputWrapper:
                "border-zinc-200/85 hover:border-zinc-300 focus-within:!border-zinc-400 h-11 bg-white shadow-xs",
              input:
                "text-zinc-800 placeholder:text-zinc-500 font-medium text-sm",
            }}
          />
        </div>

        {/* Right Side: Filters Group with Native HTML Select elements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto lg:flex-1 lg:max-w-[700px] lg:justify-end">
          {/* 1. Category HTML Select Filter */}
          <div className="w-full flex flex-col gap-1.5 items-start">
            <label className="text-xs font-bold text-zinc-400 pl-1">
              Category
            </label>
            <div className="relative w-full">
              <select
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={selectClassName}
              >
                <option value="All Categories">All Categories</option>
                <option value="music">Music</option>
                <option value="workshop">Workshop</option>
                <option value="sports">Sports</option>
                <option value="art">Art</option>
                <option value="food">Food</option>
              </select>
            </div>
          </div>

         

          {/* 2. Location HTML Select Filter */}
          <div className="w-full flex flex-col gap-1.5 items-start">
            <label className="text-xs font-bold text-zinc-400 pl-1">
              Location
            </label>
            <div className="relative w-full">
              <select
                name="location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className={selectClassName}
              >
                <option value="All Locations">All Locations</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="rajshahi">Rajshahi</option>
                <option value="chattogram">Chattogram</option>
                <option value="barishal">Barishal</option>
              </select>
            </div>
          </div>

          {/* 3. Sort By HTML Select Filter */}
          <div className="w-full flex flex-col gap-1.5 items-start">
            <label className="text-xs font-bold text-zinc-400 pl-1">
              Sort By
            </label>
            <div className="relative w-full">
              <select
                name="sortBy"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className={selectClassName}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="PriceLowToHigh">Price: Low to High</option>
                <option value="PriceHighToLow">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
