"use client";

import React from "react";
import {
    Button,
    Card,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function CreateEventForm() {
    

   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    // আপনার ফর্মের ডেটা স্ট্রাকচার অনুযায়ী টাইপ কাস্টিং ফিক্স করা হলো
    const data = Object.fromEntries(formData.entries()) as Record<
      "title" | "shortDescription" | "fullDescription" | "price" | "date" | "priority" | "imageUrl", 
      string
    >;

    console.log("form data:",data);
  };

    return (
        // বড় ডিভাইসের জন্য উইডথ max-w-[1000px] বা max-w-5xl এ সেট করা
        <Form className="w-full max-w-[1500px] mx-auto mt-6" onSubmit={onSubmit}>
            <Card className="  flex flex-col gap-8">

                {/* সেকশন ১: Event Information */}
                <div className="w-full flex flex-col gap-5">
                    <div>
                        <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                            Event Information
                        </h3>
                        <p className="text-xs text-zinc-400 mt-0.5">
                            Provide primary information about your event.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 mt-2">
                        {/* Title */}
                        <TextField isRequired name="title">
                            <Label className="text-xs font-bold text-zinc-700 mb-1.5 block">Event Title</Label>
                            <Input
                                placeholder="Enter event title"
                                className="w-full h-11 bg-white border border-zinc-200 rounded-xl px-3.5 text-sm font-medium text-zinc-800 placeholder:text-zinc-400 focus-within:border-zinc-400 transition-all shadow-xs"
                            />
                        </TextField>

                        {/* Short Description */}
                        <TextField isRequired name="shortDescription">
                            <Label className="text-xs font-bold text-zinc-700 mb-1.5 block">Short Description</Label>
                            <Input
                                placeholder="Write a short summary about your event"
                                className="w-full h-11 bg-white border border-zinc-200 rounded-xl px-3.5 text-sm font-medium text-zinc-800 placeholder:text-zinc-400 focus-within:border-zinc-400 transition-all shadow-xs"
                            />
                        </TextField>

                        {/* Full Description */}
                        <TextField isRequired name="fullDescription">
                            <Label className="text-xs font-bold text-zinc-700 mb-1.5 block">Full Description</Label>
                            <TextArea
                                placeholder="Provide more details about your event, agenda, speakers, etc."
                                className="w-full min-h-[140px] bg-white border border-zinc-200 rounded-xl p-3.5 text-sm font-medium text-zinc-800 placeholder:text-zinc-400 focus-within:border-zinc-400 transition-all shadow-xs"
                            />
                        </TextField>
                    </div>
                </div>

                {/* সেকশন ২: Event Details */}
                <div className="w-full flex flex-col gap-5 pt-4 border-t border-zinc-100">
                    <div className="flex items-center gap-2">
                        <CalendarDays className="w-5 h-5" style={{ color: "var(--primary)" }} />
                        <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                            Event Details
                        </h3>
                    </div>

                    <div className="flex flex-col gap-5 mt-2">
                        {/* row containing: price, date, priority */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {/* Price */}
                            <TextField isRequired name="price" type="number">
                                <Label className="text-xs font-bold text-zinc-700 mb-1.5 block">Price ($)</Label>
                                <Input
                                    placeholder="0.00"
                                    className="w-full h-11 bg-white border border-zinc-200 rounded-xl px-3.5 text-sm font-medium text-zinc-800 placeholder:text-zinc-400 focus-within:border-zinc-400 transition-all shadow-xs"
                                />
                            </TextField>

                            {/* Date */}
                            <TextField isRequired name="date" type="date">
                                <Label className="text-xs font-bold text-zinc-700 mb-1.5 block">Event Date</Label>
                                <Input
                                    className="w-full h-11 bg-white border border-zinc-200 rounded-xl px-3.5 text-sm font-medium text-zinc-800 focus-within:border-zinc-400 transition-all shadow-xs"
                                />
                            </TextField>

                            {/* Priority */}
                            <div className="w-full">
                                <label className="text-xs font-bold text-zinc-700 mb-1.5 block">Priority</label>
                                <select
                                    name="priority"
                                    className="w-full h-11 bg-white border border-zinc-200 rounded-xl px-3.5 text-sm font-medium text-zinc-800 focus:outline-none focus:border-zinc-400 border border-zinc-200 transition-all cursor-pointer appearance-none shadow-xs"
                                    defaultValue="medium"
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                        </div>

                        {/* Optional Image URL */}
                        <TextField name="imageUrl" type="url">
                            <Label className="text-xs font-bold text-zinc-700 mb-1.5 block">Optional Image URL</Label>
                            <Input
                                placeholder="https://example.com/image.jpg"
                                className="w-full h-11 bg-white border border-zinc-200 rounded-xl px-3.5 text-sm font-medium text-zinc-800 placeholder:text-zinc-400 focus-within:border-zinc-400 transition-all shadow-xs"
                            />
                        </TextField>
                    </div>
                </div>

                {/* Buttons (Cancel, Submit) */}
                <div className="flex items-center justify-end gap-3 mt-6 pb-12">
                    <Button
                        type="reset"
                        variant="outline"
                        className="h-11 px-6 rounded-xl font-bold text-zinc-500 hover:bg-zinc-50 border border-zinc-200 text-sm cursor-pointer transition-colors shadow-xs"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        className="h-11 px-6 rounded-xl font-bold text-white text-sm flex items-center gap-1.5 cursor-pointer shadow-xs transition-transform active:scale-98"
                        style={{ backgroundColor: "var(--primary)" }}
                    >
                        <span>Create Event</span>
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>

            </Card>
        </Form>
    );
}