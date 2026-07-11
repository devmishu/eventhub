"use client";

import Link from "next/link";
import CreateEventForm from "../../../components/CreateEventForm";

export default function AddEventPage() {
    return (
        <main className="min-h-screen bg-zinc-50/50 pt-8 px-4 md:px-8">
            {/* বড় ডিভাইসে ফর্ম লেআউটের সাথে সামঞ্জস্য রাখতে max-w-[1000px] করা হলো */}
            <div className="max-w-[700px] mx-auto">

                {/* Top Header Information */}
                <div className="mb-8 text-left">
                    {/* Breadcrumb text-xs (12px) স্ট্যান্ডার্ড */}
                    <div className="flex items-center gap-1.5  font-semibold text-zinc-400 mb-2.5 tracking-wide">
                        <Link href={'/'}>Home</Link>
                        <span className="text-zinc-300">&gt;</span>
                        <Link href={'/add-event'} style={{ color: "var(--primary)" }}>Create Event</Link>
                    </div>

                    {/* Main Title text-2xl থেকে md:text-3xl (30px) স্ট্যান্ডার্ড */}
                    <h1 className="text-2xl md:text-3xl font-bold text-zinc-950 tracking-tight">
                        Create Event
                    </h1>

                    {/* Subtitle text-sm (14px) স্ট্যান্ডার্ড */}
                    <p className=" font-medium text-zinc-500 mt-1.5 max-w-2xl">
                        Fill in the details below to create your event and reach a wider audience.
                    </p>
                </div>

                {/* Dynamic Form Render */}
                <CreateEventForm />

            </div>
        </main>
    );
}