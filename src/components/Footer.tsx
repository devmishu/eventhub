"use client";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa6";
import { BsEnvelopeFill, BsTelephoneFill, BsGeoAltFill } from "react-icons/bs";
import { Calendar } from "lucide-react";

export function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-zinc-100/80 pt-16 pb-8">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 pb-12 border-b border-zinc-100">
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col items-start text-left gap-4">
            <div className="flex items-center gap-2">
              <div
                className="p-2 rounded-xl flex items-center justify-center text-white shadow-xs"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <Calendar className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-black text-zinc-900 tracking-tight">
                EventHub
              </span>
            </div>
            <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-[280px]">
              Discover premium digital tools, mechanical gear, and premium web
              platforms engineered for optimal workflows.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col items-start text-left gap-4">
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 w-full">
              <li>
                <Link
                  href="/"
                  className="text-zinc-500 text-sm font-medium transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/explore"
                  className="text-zinc-500 text-sm font-medium transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  Explore Events
                </Link>
              </li>
              <li>
                <Link
                  href="/add-event"
                  className="text-zinc-500 text-sm font-medium transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  Create Event
                </Link>
              </li>
              <li>
                <Link
                  href="/manage-events"
                  className="text-zinc-500 text-sm font-medium transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  Manage Events
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-500 text-sm font-medium transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-500 text-sm font-medium transition-colors duration-200"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--primary)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="flex flex-col items-start text-left gap-4">
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-3 w-full">
              <li className="flex items-center gap-2.5 text-zinc-500 text-sm font-medium">
                <BsEnvelopeFill className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                <span>mishu@example.com</span>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-500 text-sm font-medium">
                <BsTelephoneFill className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                <span>+880 1234-56789</span>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-500 text-sm font-medium">
                <BsGeoAltFill className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                <span>Sylhet, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Links & Platform Status */}
          <div className="flex flex-col items-start text-left gap-4">
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">
              Connect With Me
            </h4>
            <ul className="flex items-center gap-5">
              <li>
                <a href="https://github.com/devmishu" target="_blanck">
                  <FaGithub className="w-4 h-4 text-zinc-600 transition-colors" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mishudeb" target="_blanck">
                  <FaLinkedinIn className="w-4 h-4 text-zinc-600 transition-colors" />
                </a>
              </li>
              <li>
                <a href="https://mishudebnath.vercel.app/" target="_blanck">
                  <FaGlobe className="w-4 h-4 text-zinc-600 transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full">
          <p className="text-xs font-medium text-zinc-400">
            &copy; {currentYear} ToolVerse. All rights reserved. Developed by
            Mishu Debnath.
          </p>
        </div>
      </div>
    </footer>
  );
}
