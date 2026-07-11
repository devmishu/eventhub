"use client";
import { Link, Button } from "@heroui/react";
import { Calendar } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AppNavbar() {
  const pathname = usePathname();

  // একটিভ রুটের জন্য নিখুঁত টেক্সট কালার এবং বটম বর্ডার ক্লাস
  const getNavLinkClass = (path: string) => {
    const baseClass = "text-[14px] font-medium h-16 flex items-center transition-all duration-200 relative top-[1px]";
    const activeClass = "text-[#5820e4]";
    const inactiveClass = "text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent";
    
    return `${baseClass} ${pathname === path ? activeClass : inactiveClass}`;
  };

  return (
    <nav className="sticky top-0 z-40 w-full navbar-bg">
      <header className="flex h-16 items-center justify-between px-8 max-w-[1440px] mx-auto">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#5820e4] p-2 rounded-xl text-white flex items-center justify-center shadow-xs">
            <Calendar className="w-5 h-5" strokeWidth={2.5} />
          </div>
          <p className="font-bold text-xl text-zinc-900 tracking-tight">
            EventHub
          </p>
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 h-full">
          <li>
            <Link href="/" className={getNavLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/explore" className={getNavLinkClass("/explore")}>
              Explore Events
            </Link>
          </li>
          <li>
            <Link href="/about" className={getNavLinkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={getNavLinkClass("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            Login
          </Link>
          <Button 
            className="button-primary h-9 px-4 rounded-xl"
          >
            Create Event
          </Button>
        </div>

      </header>
    </nav>
  );
}