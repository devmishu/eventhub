"use client";

import React from "react";
import { Accordion } from "@heroui/react";
import {
  Calendar,
  PlusCircle,
  Undo2,
  ShieldCheck,
  Globe,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqItems = [
  {
    content:
      "Simply browse our featured events, click on 'View Details', and proceed to checkout. You'll need to provide your details to secure your ticket.",
    icon: <Calendar className="w-4 h-4" />,
    title: "How do I book tickets for an event?",
  },
  {
    content:
      "Yes, you can easily create and manage your own events. Navigate to the dashboard, click on 'Create Event', and fill in the required details.",
    icon: <PlusCircle className="w-4 h-4" />,
    title: "Can I host my own event here?",
  },
  {
    content:
      "Refund policies depend entirely on the event organizer's terms. Please check the specific event description page before requesting a refund.",
    icon: <Undo2 className="w-4 h-4" />,
    title: "How do I request a refund?",
  },
  {
    content:
      "We ensure top-tier security. All payments are processed through industry-standard secure gateway partners with full encryption layers.",
    icon: <ShieldCheck className="w-4 h-4" />,
    title: "Is my payment information securely processed?",
  },
  {
    content:
      "Yes, our platform supports worldwide ticketing. You can purchase tickets and join global or virtual events from anywhere.",
    icon: <Globe className="w-4 h-4" />,
    title: "Do you support international bookings?",
  },
];

export default function FAQSection(): React.JSX.Element {
  return (
    <section className="w-full bg-[#fbfbfe] py-16 pb-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Section Heading (4 Columns) */}
          <div className="lg:col-span-4 text-left flex flex-col gap-2 lg:sticky lg:top-24">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#5820e4] bg-[#5820e4]/10 px-3 py-1 rounded-full w-fit">
              Support Center
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight leading-tight mt-2">
              Frequently Asked <br />
              <span className="text-[#5820e4]">Questions</span>
            </h2>
            <p className="text-zinc-400 text-xs mt-1 max-w-sm leading-relaxed">
              Can't find the answer you're looking for? Reach out to our
              dedicated support team anytime.
            </p>
          </div>

          {/* Right Side: Accordion Component (8 Columns) */}
          <div className="lg:col-span-8 w-full">
            <Accordion className="w-full flex flex-col gap-4">
              {faqItems.map((item, index) => (
                <Accordion.Item
                  key={index}
                  className="bg-white border border-zinc-100 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300"
                >
                  <Accordion.Heading>
                    <Accordion.Trigger className="w-full flex items-center justify-between px-5 py-4 text-sm font-bold text-zinc-900 tracking-tight text-left hover:bg-zinc-50/50 transition-colors focus:outline-none cursor-pointer">
                      <div className="flex items-center">
                        {item.icon ? (
                          <span className="mr-3.5 w-8 h-8 rounded-xl flex items-center justify-center bg-[#5820e4]/5 text-[#5820e4] shrink-0">
                            {item.icon}
                          </span>
                        ) : (
                          <span className="mr-3.5 w-8 h-8 rounded-xl flex items-center justify-center bg-[#5820e4]/5 text-[#5820e4] shrink-0">
                            <HelpCircle className="w-4 h-4" />
                          </span>
                        )}
                        <span>{item.title}</span>
                      </div>

                      <Accordion.Indicator className="text-zinc-400 group-data-[open=true]:rotate-180 group-data-[open=true]:text-[#5820e4] transition-transform duration-300 shrink-0 ml-4">
                        <ChevronDown className="w-4 h-4" />
                      </Accordion.Indicator>
                    </Accordion.Trigger>
                  </Accordion.Heading>

                  <Accordion.Panel>
                    <Accordion.Body className="px-5 pb-5 pt-1 text-zinc-500 text-xs sm:text-sm leading-relaxed text-left pl-[58px]">
                      {item.content}
                    </Accordion.Body>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
