"use client";

import { useState } from "react";
import { signOut, useSession } from "@/lib/auth-client";
import { Button, Avatar, Dropdown } from "@heroui/react";
import { Calendar, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AppNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = useSession();
  const user = session?.user;

  // লগআউট হ্যান্ডলার ফাংশন
  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
    router.push("/login");
  };

  // বেস নেভিগেশন লিংক যা সবার জন্য দৃশ্যমান
  const baseLinks = [
    { name: "Home", path: "/" },
    { name: "Explore Events", path: "/explore" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // ইউজার লগইন থাকলে অতিরিক্ত মেনু লিংক যুক্ত হবে, ড্রপডাউন থাকবে না
  const navLinks = user
    ? [
        ...baseLinks,
        { name: "Create Event", path: "/add-event" },
        { name: "Manage Events", path: "/manage-events" },
      ]
    : baseLinks;

  // ডেস্কটপ মেনু স্টাইল
  const getNavLinkClass = (path: string) => {
    const baseClass =
      "text-[15px] font-semibold h-16 flex items-center transition-all duration-200 relative tracking-wide cursor-pointer";
    return `${baseClass} ${pathname === path ? "text-[var(--primary)] font-bold" : "text-zinc-500 hover:text-zinc-900"}`;
  };

  // মোবাইল মেনু স্টাইল
  const getMobileNavLinkClass = (path: string) => {
    const baseClass =
      "w-full py-3 px-4 rounded-xl text-base font-bold transition-all duration-200 block text-left";
    return `${baseClass} ${
      pathname === path
        ? "bg-[rgba(88,32,228,0.05)] text-[var(--primary)]"
        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full navbar-bg bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <header className="flex h-16 items-center justify-between px-6 md:px-8 max-w-[1440px] mx-auto relative">
        {/* Left Section: Mobile Menu Toggle & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1.5 rounded-lg border border-zinc-100 bg-zinc-50 hover:bg-zinc-100 lg:hidden text-zinc-600 cursor-pointer transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <Link href="/" className="flex items-center gap-2">
            <div
              className="p-2 rounded-xl text-white flex items-center justify-center shadow-xs"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <Calendar className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black text-zinc-900 tracking-tight">
              EventHub
            </span>
          </Link>
        </div>

        {/* Center Section: Desktop Navigation Links (কন্ডিশনাল ইভেন্ট মেনুসহ) */}
        <ul className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className={getNavLinkClass(link.path)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section: Auth & Profile Avatar Only */}
        <div className="flex items-center gap-4">
          {isPending ? (
            <div className="w-9 h-9 bg-zinc-100 animate-pulse rounded-full" />
          ) : user ? (
            <>
              <button className="outline-hidden cursor-pointer active:scale-95 transition-transform rounded-full ring-2 ring-zinc-100 hover:ring-[var(--primary)] p-0.5">
                <Avatar className="w-8 h-8 text-sm font-bold">
                  <Avatar.Image
                    alt={user?.name || "User Avatar"}
                    src={
                      user?.image ||
                      "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                    }
                  />
                  <Avatar.Fallback>
                    {user?.name?.substring(0, 2).toUpperCase() || "US"}
                  </Avatar.Fallback>
                </Avatar>
              </button>

              <Button
                variant="ghost"
                onClick={handleSignOut}
                className="hidden lg:flex bg-red-50 hover:bg-red-100 text-red-600 h-9 px-4 rounded-xl font-bold text-sm  items-center gap-1.5 cursor-pointer transition-colors border border-red-100"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-bold transition-colors hover:opacity-80"
                style={{ color: "var(--primary)" }}
              >
                Login
              </Link>
              <Link href={"/register"}>
                <Button className="h-9 px-4 rounded-xl font-bold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 text-sm cursor-pointer transition-colors">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Responsive Mobile Navigation Box */}
      {isMenuOpen && (
        <div className=" absolute top-16 left-0 w-full bg-white border-b border-zinc-100 shadow-lg lg:hidden p-4 flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={getMobileNavLinkClass(link.path)}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* মোবাইল স্ক্রিনে লগআউট অপশন একদম নিচে যুক্ত করা হলো */}
          {user && (
            <button
              onClick={handleSignOut}
              className="w-full mt-2 py-3 px-4 rounded-xl text-base font-bold text-red-600 hover:bg-red-50/60 text-left transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
