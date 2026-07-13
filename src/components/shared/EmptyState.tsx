"use client";
import Link from "next/link";

interface EmptyStateProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function EmptyState({
  title = "No Events Found",
  description = "You haven't created any events yet. Start by creating your first amazing event!",
  buttonText = "Create Event",
  buttonHref = "/events/create",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 bg-white rounded-3xl border border-zinc-200/60 shadow-xs max-w-xl mx-auto my-6">
     
      <div className="w-16 h-16 bg-indigo-50 text-[#5820e4] flex items-center justify-center rounded-2xl mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
      </div>

     
      <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-sm font-medium text-zinc-400 max-w-sm mb-6 leading-relaxed">
        {description}
      </p>

     

      <Link href={buttonHref}>
        <button className="bg-[#5820e4] text-white h-11 px-6 rounded-xl font-semibold shadow-md transition-transform active:scale-95 hover:opacity-90">
          {buttonText}
        </button>
      </Link>
    </div>
  );
}
