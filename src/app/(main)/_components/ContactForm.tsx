"use client";

import React, { useState, FormEvent } from "react";
import {
  Form,
  TextField,
  Label,
  Input,
  TextArea,
  FieldError,
  Button,
} from "@heroui/react";
import { Mail, Phone, MapPin, CheckCircle, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactForm(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());


   
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setLoading(false);
      setIsSent(true);
      (e.target as HTMLFormElement).reset();

      
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }, 1200);
  };

  return (
    <section className="w-full bg-[#fbfbfe] pb-20">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          {/* Left Side: Contact Information (4 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            <div className="bg-white border border-zinc-100 rounded-[24px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col gap-6 text-left">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                  Contact Information
                </h3>
                <p className="text-zinc-400 text-xs mt-1">
                  Reach out to us directly through any of these channels.
                </p>
              </div>

              <div className="flex flex-col gap-5 mt-2">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#5820e4]/5 text-[#5820e4] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      Email Us
                    </p>
                    <p className="text-sm font-semibold text-zinc-800 mt-0.5">
                      mishu@example.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#5820e4]/5 text-[#5820e4] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      Call Us
                    </p>
                    <p className="text-sm font-semibold text-zinc-800 mt-0.5">
                      +880 1234-56789
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#5820e4]/5 text-[#5820e4] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-zinc-800 mt-0.5">
                      Sylhet, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: HeroUI Form Component (7 Columns) */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white border border-zinc-100 rounded-[24px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.01)] w-full">
              <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
                {/* Name Field */}
                <TextField
                  isRequired
                  name="name"
                  type="text"
                  className="w-full"
                  isDisabled={loading || isSent}
                >
                  <Label className="text-xs font-bold text-zinc-800 mb-1.5 block text-left">
                    Full Name
                  </Label>
                  <Input
                    placeholder="John Doe"
                    className="w-full h-11 bg-white border border-zinc-200 rounded-xl px-3.5 text-sm font-medium text-zinc-800 placeholder:text-zinc-400 focus-within:outline-2 focus-within:outline-zinc-300 focus-within:border-transparent transition-all"
                  />
                  <FieldError className="text-xs text-red-500 font-medium mt-1 text-left" />
                </TextField>

                {/* Email Field */}
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  className="w-full"
                  isDisabled={loading || isSent}
                  validate={(value) => {
                    if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
                      return "Please enter a valid email address";
                    }
                    return null;
                  }}
                >
                  <Label className="text-xs font-bold text-zinc-800 mb-1.5 block text-left">
                    Email Address
                  </Label>
                  <Input
                    placeholder="you@example.com"
                    className="w-full h-11 bg-white border border-zinc-200 rounded-xl px-3.5 text-sm font-medium text-zinc-800 placeholder:text-zinc-400 focus-within:outline-2 focus-within:outline-zinc-300 focus-within:border-transparent transition-all"
                  />
                  <FieldError className="text-xs text-red-500 font-medium mt-1 text-left" />
                </TextField>

                {/* Message Field */}
                <TextField
                  isRequired
                  name="message"
                  className="w-full"
                  isDisabled={loading || isSent}
                >
                  <Label className="text-xs font-bold text-zinc-800 mb-1.5 block text-left">
                    Your Message
                  </Label>
                  <TextArea
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full bg-white border border-zinc-200 rounded-xl p-3.5 text-sm font-medium text-zinc-800 placeholder:text-zinc-400 focus-within:outline-2 focus-within:outline-zinc-300 focus-within:border-transparent transition-all resize-none"
                  />
                  <FieldError className="text-xs text-red-500 font-medium mt-1 text-left" />
                </TextField>

                {/* Submit Button */}
                <Button
                  type="submit"
                  isDisabled={loading || isSent}
                  className={`w-full h-11 rounded-xl text-white font-bold text-sm shadow-xs transition-all duration-300 active:scale-98 mt-2 cursor-pointer flex items-center justify-center gap-2 ${
                    isSent ? "bg-emerald-600 opacity-95 cursor-not-allowed" : ""
                  }`}
                  style={!isSent ? { backgroundColor: "var(--primary)" } : {}}
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : isSent ? (
                    <>
                      <CheckCircle className="w-4 h-4 animate-scale-up" />
                      <span>Message Sent</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
