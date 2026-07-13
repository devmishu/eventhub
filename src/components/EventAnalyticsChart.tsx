"use client";

import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Event {
  _id: { $oid: string };
  userId: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  date: string;
  priority: string;
  imageUrl: string;
  location: string;
  category: string;
}

interface EventAnalyticsChartProps {
  events: Event[];
}

export default function EventAnalyticsChart({
  events,
}: EventAnalyticsChartProps): React.JSX.Element {
  
  const chartData = useMemo(() => {
    if (!events || events.length === 0) return [];

    const categoryMap: Record<string, { count: number; totalPrice: number }> =
      {};

    events.forEach((event) => {
      const rawCat = event.category ? event.category.trim() : "Uncategorized";
      const formattedCat =
        rawCat.charAt(0).toUpperCase() + rawCat.slice(1).toLowerCase();

      if (!categoryMap[formattedCat]) {
        categoryMap[formattedCat] = { count: 0, totalPrice: 0 };
      }
      categoryMap[formattedCat].count += 1;
      categoryMap[formattedCat].totalPrice += Number(event.price) || 0;
    });

    return Object.keys(categoryMap).map((key) => ({
      name: key,
      eventsCount: categoryMap[key].count,
      avgPrice: Math.round(
        categoryMap[key].totalPrice / categoryMap[key].count,
      ),
    }));
  }, [events]);

  return (
    <section className="w-full bg-[#fbfbfe] py-8">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="w-full bg-white border border-zinc-100 rounded-[24px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5 text-left">
            <div>
              <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                Event Insights
              </h3>
              <p className="text-zinc-400 text-xs mt-0.5">
                Visual representation of all events across categories and
                prices.
              </p>
            </div>
          </div>

          {/* Chart Rendering Viewport */}
          <div className="w-full h-[320px] md:h-[360px] flex items-center justify-center">
            {chartData.length === 0 ? (
              <p className="text-zinc-400 text-sm font-medium">
                No event statistics data available.
              </p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#f4f4f5"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#a1a1aa"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis
                    stroke="#a1a1aa"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    dx={-5}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      borderRadius: "12px",
                      border: "1px solid #f4f4f5",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    }}
                    labelStyle={{
                      fontWeight: "bold",
                      color: "#18181b",
                      fontSize: "12px",
                    }}
                    itemStyle={{ fontSize: "12px" }}
                  />
                  <Bar
                    dataKey="eventsCount"
                    name="Total Events"
                    fill="#5820e4"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={45}
                  />
                  <Bar
                    dataKey="avgPrice"
                    name="Avg Price ($)"
                    fill="#a78bfa"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={45}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
