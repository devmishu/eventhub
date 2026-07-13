"use client";

import React, { useState, FormEvent } from "react";
import { Button, Input } from "@heroui/react";
import { Mail, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function NewsletterSection(): React.JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!email) return;

    toast.success("Thank you for subscribing!");
    setIsSubscribed(true);
  };

  return (
    <section className="w-full bg-[#fbfbfe] py-8">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="w-full bg-zinc-50/60 border border-zinc-100 rounded-[24px] p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 opacity-90 shadow-sm"
              style={{ backgroundColor: "rgba(88, 32, 228, 0.08)" }}
            >
              <Mail
                className="w-5 h-5"
                style={{ color: "var(--primary)" }}
                strokeWidth={2}
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-bold text-zinc-900 tracking-tight leading-snug">
                Stay Updated
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm mt-0.5 max-w-sm sm:max-w-md leading-relaxed">
                {isSubscribed
                  ? "You have successfully subscribed to our newsletter."
                  : "Subscribe to our newsletter and never miss an amazing event."}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3 flex-1 lg:max-w-xl lg:justify-end"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={isSubscribed ? "Subscribed ✔" : email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              variant="bordered"
              radius="xl"
              className="w-full sm:max-w-[320px] bg-white rounded-xl"
              classNames={{
                inputWrapper: `border-zinc-200/85 hover:border-zinc-300 focus-within:!border-zinc-400 h-11 bg-white shadow-xs ${isSubscribed ? "bg-zinc-100/80 border-zinc-200 pointer-events-none" : ""}`,
                input: `${isSubscribed ? "text-emerald-600 font-bold" : "text-zinc-800"} placeholder:text-zinc-400 text-sm`,
              }}
              required
              disabled={isSubscribed} 
            />

            <Button
              type="submit"
              disabled={isSubscribed} 
              className={`w-full sm:w-auto h-11 px-6 rounded-xl font-semibold text-white shadow-sm transition-all text-sm flex-shrink-0 flex items-center justify-center gap-2 ${
                isSubscribed
                  ? "bg-zinc-400 border-transparent cursor-not-allowed opacity-70"
                  : "active:scale-95 cursor-pointer"
              }`}
              style={!isSubscribed ? { backgroundColor: "var(--primary)" } : {}}
            >
              {isSubscribed ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Subscribed</span>
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
