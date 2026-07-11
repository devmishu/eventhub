"use client";

import { signOut, useSession,  } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Calendar, LogOut, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AppNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } = useSession();
  const user = session?.user;

  console.log("user:",user);

  // লগআউট হ্যান্ডলার ফাংশন
  const handleSignOut = async () => {
    signOut();
    router.push('/login')
  };

  // একটিভ রুটের জন্য নিখুঁত টেক্সট কালার এবং বটম বর্ডার ক্লাস
  const getNavLinkClass = (path: string) => {
    const baseClass = "text-[14px] font-medium h-16 flex items-center transition-all duration-200 relative top-[1px]";
    const activeClass = "text-[#5820e4]";
    const inactiveClass = "text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent";
    
    return `${baseClass} ${pathname === path ? activeClass : inactiveClass}`;
  };

  return (
    <nav className="sticky top-0 z-40 w-full navbar-bg bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <header className="flex h-16 items-center justify-between px-8 max-w-360 mx-auto">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl text-white flex items-center justify-center shadow-xs" style={{ backgroundColor: "var(--primary)" }}>
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

        {/* Right: Auth Dynamic Buttons */}
        <div className="flex items-center gap-4">
          {isPending ? (
            <div className="w-20 h-8 bg-zinc-100 animate-pulse rounded-xl" />
          ) : user ? (
            // ইউজার লগইন থাকলে দেখাবে: Create Event এবং Logout (Redis BG সহ)
            <>
              <Link href="/">
              <Button 
                className="h-9 px-4 rounded-xl font-bold text-white flex items-center gap-1.5 text-xs sm:text-sm cursor-pointer shadow-xs transition-transform active:scale-98"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <Plus className="w-4 h-4" />
                <span>Create Event</span>
              </Button>
              </Link>
              
              <Button
                variant="ghost"
                onClick={handleSignOut}
                className="bg-red-50 hover:bg-red-100 text-red-600 h-9 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer transition-colors border border-red-100"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </>
          ) : (
            // ইউজার লগইন না থাকলে দেখাবে: Login (Theme Color) এবং Register
            <>
              <Link 
                href="/login" 
                className="text-sm font-bold transition-colors hover:opacity-80"
                style={{ color: "var(--primary)" }}
              >
                Login
              </Link>
              <Link href={'/register'}>
              <Button 
                className="h-9 px-4 rounded-xl font-bold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 text-sm cursor-pointer transition-colors"
              >
                Register
              </Button>
              </Link>
            </>
          )}
        </div>

      </header>
    </nav>
  );
}