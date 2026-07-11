"use client";

import React from "react";
import { 
  Music, 
  Laptop, 
  PencilLine, 
  Bike, 
  Palette, 
  Utensils, 
  LayoutGrid,
  LucideIcon 
} from "lucide-react";
import { Link } from "@heroui/react";

interface CategoryItem {
  name: string;
  icon: LucideIcon;
  bgVar: string;
  colorVar: string;
  href: string;
}

export default function PopularCategories(): React.JSX.Element {
  const categories: CategoryItem[] = [
    {
      name: "Music",
      icon: Music,
      bgVar: "var(--cat-music-bg)",
      colorVar: "var(--cat-music-text)",
      href: "/explore?category=Music",
    },
    {
      name: "Tech",
      icon: Laptop,
      bgVar: "var(--cat-tech-bg)",
      colorVar: "var(--cat-tech-text)",
      href: "/explore?category=Tech",
    },
    {
      name: "Workshop",
      icon: PencilLine,
      bgVar: "var(--cat-workshop-bg)",
      colorVar: "var(--cat-workshop-text)",
      href: "/explore?category=Workshop",
    },
    {
      name: "Sports",
      icon: Bike,
      bgVar: "var(--cat-sports-bg)",
      colorVar: "var(--cat-sports-text)",
      href: "/explore?category=Sports",
    },
    {
      name: "Art",
      icon: Palette,
      bgVar: "var(--cat-art-bg)",
      colorVar: "var(--cat-art-text)",
      href: "/explore?category=Art",
    },
    {
      name: "Food",
      icon: Utensils,
      bgVar: "var(--cat-food-bg)",
      colorVar: "var(--cat-food-text)",
      href: "/explore?category=Food",
    },
    {
      name: "View All",
      icon: LayoutGrid,
      bgVar: "var(--cat-all-bg)",
      colorVar: "var(--cat-all-text)",
      href: "/explore",
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfe] py-10">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        
        <h2 className="text-2xl font-bold text-zinc-900 tracking-tight mb-8">
          Popular Categories
        </h2>

        {/* উইডথ ছাড়া শুধুমাত্র গ্রিড গ্যাপ দিয়ে কার্ড কন্ট্রোল করা হয়েছে */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category: CategoryItem, index: number) => {
            const IconComponent = category.icon;
            
            return (
              <Link
                key={index}
                href={category.href}
                className="flex flex-col items-center justify-center p-6 bg-white border border-zinc-100/80 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:border-zinc-200 transition-all duration-300 group cursor-pointer text-center w-full"
              >
                {/* Icon Wrapper */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-105 duration-300 flex-shrink-0"
                  style={{ backgroundColor: category.bgVar }}
                >
                  <IconComponent 
                    className="w-5 h-5" 
                    style={{ color: category.colorVar }}
                    strokeWidth={2} 
                  />
                </div>

                {/* Category Name */}
                <span className="text-sm font-semibold text-zinc-800 group-hover:text-zinc-950 transition-colors line-clamp-1">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}