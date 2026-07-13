"use client";

import React, { useEffect, useState } from "react";
import { Pagination } from "@heroui/react";
import { useRouter } from "next/navigation";




interface PaginationWithSummaryProps {
  total: number;
}

export function PaginationWithSummary({
  total,
}: PaginationWithSummaryProps): React.JSX.Element {
  const [page, setPage] = useState<number>(1);
  const totalItems: number = total;
  const itemsPerPage: number = 8;
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);

  const router = useRouter();

  useEffect(() => {
    const sp = new URLSearchParams();

    if (page) {
      sp.set("page", page.toString());
    }
    if (itemsPerPage) {
      sp.set("itemsPerPage", itemsPerPage.toString());
    }

    const searchString: string = sp.toString();
    const path: string = searchString
      ? `?${searchString}`
      : window.location.pathname;

    router.push(path);
  }, [page, router]);

 
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (totalPages <= 0) return pages;

    pages.push(1);
    if (page > 3) {
      pages.push("ellipsis");
    }
    const start: number = Math.max(2, page - 1);
    const end: number = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) {
      pages.push("ellipsis");
    }
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    return pages;
  };

  const startItem: number =
    totalItems === 0 ? 0 : (page - 1) * itemsPerPage + 1;
  const endItem: number = Math.min(page * itemsPerPage, totalItems);

  return (
    <Pagination className="w-full">
      <Pagination.Summary>
        Showing {startItem}-{endItem} of {totalItems} results
      </Pagination.Summary>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous
            isDisabled={page === 1}
            onPress={() => setPage((p) => p - 1)}
          >
            <Pagination.PreviousIcon />
            <span>Previous</span>
          </Pagination.Previous>
        </Pagination.Item>
        {getPageNumbers().map((p, i) =>
          p === "ellipsis" ? (
            <Pagination.Item key={`ellipsis-${i}`}>
              <Pagination.Ellipsis />
            </Pagination.Item>
          ) : (
            <Pagination.Item key={p}>
              <Pagination.Link
                isActive={p === page}
                onPress={() => setPage(p as number)}
              >
                {p}
              </Pagination.Link>
            </Pagination.Item>
          ),
        )}
        <Pagination.Item>
          <Pagination.Next
            isDisabled={page === totalPages || totalPages === 0}
            onPress={() => setPage((p) => p + 1)}
          >
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
}
