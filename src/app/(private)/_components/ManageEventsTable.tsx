"use client";

import React from "react";
import { Table, Button, AlertDialog } from "@heroui/react";
import { Eye, Trash2, DollarSign } from "lucide-react";

interface ProductItem {
  _id?: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  price: number;
  priority: "high" | "medium" | "low" | string;
  date: string;
}

interface ManageEventsTableProps {
  events: ProductItem[];
  onHandleDeletEvent: (eventId: string) => Promise<void>;
}

export function ManageEventsTable({
  events,
  onHandleDeletEvent,
}: ManageEventsTableProps): React.JSX.Element {
  const handleView = (id: string) => {
    console.log("View clicked for ID:", id);
    // নেভিগেশন বা ডিটেইলস মডাল ওপেন করার লজিক
  };

  return (
    <Table className="bg-white rounded-[24px] border border-zinc-100/80 p-2 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.01)]">
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Manage Products Table"
          className="min-w-[900px]"
        >
          <Table.Header>
            <Table.Column
              isRowHeader
              className="bg-zinc-50/50 text-zinc-500 font-bold text-xs py-4 px-6 rounded-l-xl"
            >
              Item Details
            </Table.Column>
            <Table.Column className="bg-zinc-50/50 text-zinc-500 font-bold text-xs py-4 px-4">
              Priority
            </Table.Column>
            <Table.Column className="bg-zinc-50/50 text-zinc-500 font-bold text-xs py-4 px-4">
              Price
            </Table.Column>
            <Table.Column className="bg-zinc-50/50 text-zinc-500 font-bold text-xs py-4 px-4">
              Date Added
            </Table.Column>
            <Table.Column className="bg-zinc-50/50 text-zinc-500 font-bold text-xs py-4 px-6 rounded-r-xl text-right">
              Actions
            </Table.Column>
          </Table.Header>

          <Table.Body>
            {events.length === 0 ? (
              <Table.Row>
                <Table.Cell
                  colSpan={5}
                  className="text-center py-12 text-zinc-400 font-medium"
                >
                  No items found. Create some products to get started!
                </Table.Cell>
              </Table.Row>
            ) : (
              events.map((item) => {
                const productDate = new Date(item.date);
                const formattedDate = productDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });

                return (
                  <Table.Row
                    key={item._id}
                    className="border-b border-zinc-100/50 hover:bg-zinc-50/40 transition-colors duration-200 group"
                  >
                    {/* 1. Item Image & Info */}
                    <Table.Cell className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0 border border-zinc-100">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                            {item.title}
                          </span>
                          <span className="text-xs font-medium text-zinc-400 line-clamp-1 max-w-[300px] mt-0.5">
                            {item.shortDescription}
                          </span>
                        </div>
                      </div>
                    </Table.Cell>

                    {/* 2. Priority Status Pill */}
                    <Table.Cell className="py-4 px-4">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-md capitalize"
                          style={{
                            backgroundColor:
                              item.priority === "high"
                                ? "rgba(239, 68, 68, 0.06)"
                                : "rgba(88, 32, 228, 0.06)",
                            color:
                              item.priority === "high"
                                ? "#ef4444"
                                : "var(--primary)",
                          }}
                        >
                          {item.priority}
                        </span>
                      </div>
                    </Table.Cell>

                    {/* 3. Price Tag */}
                    <Table.Cell className="py-4 px-4">
                      <div className="flex items-center text-sm font-bold text-zinc-800">
                        <DollarSign className="w-3.5 h-3.5 stroke-[2.5] text-zinc-400" />
                        <span>{item.price}</span>
                      </div>
                    </Table.Cell>

                    {/* 4. Date */}
                    <Table.Cell className="py-4 px-4">
                      <span className="text-xs font-medium text-zinc-500">
                        {formattedDate}
                      </span>
                    </Table.Cell>

                    {/* 5. Action Buttons (View, Delete) */}
                    <Table.Cell className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* View Details Button (Theme Primary Color Outline) */}
                        <Button
                          isIconOnly
                          size="sm"
                          variant="bordered"
                          onClick={() => handleView(item._id)}
                          className="border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 rounded-xl cursor-pointer"
                        >
                          <Eye className="w-4 h-4 text-zinc-600" />
                        </Button>

                        {/* Delete Button */}

                        <AlertDialog>
                          <Button
                            isIconOnly
                            size="sm"
                            variant="flat"
                            className="bg-red-50 hover:bg-red-100 rounded-xl cursor-pointer transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                          <AlertDialog.Backdrop>
                            <AlertDialog.Container>
                              <AlertDialog.Dialog className="sm:max-w-[400px]">
                                <AlertDialog.CloseTrigger />
                                <AlertDialog.Header>
                                  <AlertDialog.Icon status="danger" />
                                  <AlertDialog.Heading>
                                    Delete project permanently?
                                  </AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  <p>
                                    This will permanently delete{" "}
                                    <strong>{item.title}</strong> and all of its
                                    data. This action cannot be undone.
                                  </p>
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    Cancel
                                  </Button>
                                  <Button
                                    onClick={() => onHandleDeletEvent(item._id)}
                                    slot="close"
                                    variant="danger"
                                  >
                                    Confirm Delete
                                  </Button>
                                </AlertDialog.Footer>
                              </AlertDialog.Dialog>
                            </AlertDialog.Container>
                          </AlertDialog.Backdrop>
                        </AlertDialog>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            )}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
