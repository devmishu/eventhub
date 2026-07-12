"use client";

import React from "react";
import { Input, Select, ListBox, Form } from "@heroui/react";
import { Search } from "lucide-react";

export default function FilterBar(): React.JSX.Element {
  // আপনার ফর্ম হ্যান্ডলিং লজিক
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    console.log("Filters applied:", data);
  };

  return (
    <Form className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-6" onSubmit={onSubmit}>
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end w-full">
        
        {/* 1. Search Events Input Field */}
        <div className="lg:col-span-4 w-full">
          <Input
            type="text"
            name="search"
            placeholder="Search events..."
            variant="bordered"
            radius="xl"
            className="w-full bg-white rounded-xl"
            endContent={
              <Search 
                className="w-4 h-4 flex-shrink-0 cursor-pointer" 
                style={{ color: "var(--primary)" }} 
              />
            }
            classNames={{
              inputWrapper: "border-zinc-200/85 hover:border-zinc-300 focus-within:!border-zinc-400 h-11 bg-white shadow-xs",
              input: "text-zinc-800 placeholder:text-zinc-500 font-medium text-sm",
            }}
          />
        </div>

        {/* 2. Category Select Filter */}
        <div className="lg:col-span-2.5 w-full flex flex-col gap-1.5 items-start">
          <label className="text-xs font-bold text-zinc-400">Category</label>
          <Select
            name="category"
            placeholder="All Categories"
            variant="bordered"
            radius="xl"
            className="w-full bg-white rounded-xl"
            classNames={{
              trigger: "border-zinc-200/85 hover:border-zinc-300 focus-within:!border-zinc-400 h-11 bg-white shadow-xs",
              value: "text-zinc-800 font-bold text-sm text-left",
            }}
          >
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="all" textValue="All Categories">All Categories</ListBox.Item>
                <ListBox.Item id="music" textValue="Music">Music</ListBox.Item>
                <ListBox.Item id="tech" textValue="Tech">Tech</ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* 3. Location Select Filter */}
        <div className="lg:col-span-2.5 w-full flex flex-col gap-1.5 items-start">
          <label className="text-xs font-bold text-zinc-400">Location</label>
          <Select
            name="location"
            placeholder="All Locations"
            variant="bordered"
            radius="xl"
            className="w-full bg-white rounded-xl"
            classNames={{
              trigger: "border-zinc-200/85 hover:border-zinc-300 focus-within:!border-zinc-400 h-11 bg-white shadow-xs",
              value: "text-zinc-800 font-bold text-sm text-left",
            }}
          >
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="all" textValue="All Locations">All Locations</ListBox.Item>
                <ListBox.Item id="dhaka" textValue="Dhaka">Dhaka</ListBox.Item>
                <ListBox.Item id="sylhet" textValue="Sylhet">Sylhet</ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* 4. Sort By Select Filter */}
        <div className="lg:col-span-2.5 w-full flex flex-col gap-1.5 items-start">
          <label className="text-xs font-bold text-zinc-400">Sort By</label>
          <Select
            name="sortBy"
            placeholder="Newest"
            variant="bordered"
            radius="xl"
            className="w-full bg-white rounded-xl"
            classNames={{
              trigger: "border-zinc-200/85 hover:border-zinc-300 focus-within:!border-zinc-400 h-11 bg-white shadow-xs",
              value: "text-zinc-800 font-bold text-sm text-left",
            }}
          >
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="newest" textValue="Newest">Newest</ListBox.Item>
                <ListBox.Item id="oldest" textValue="Oldest">Oldest</ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

      </div>
    </Form>
  );
}