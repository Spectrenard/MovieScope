"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function Pagination2({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) {
  const pages = [];
  const maxVisiblePages = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2">
      {pages.map((page) => (
        <Link
          key={page}
          href={`${baseUrl}?page=${page}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`px-4 py-2 rounded ${
            currentPage === page
              ? "bg-red-700 text-white"
              : "bg-white/10 text-gray-300 hover:bg-white/20"
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}
