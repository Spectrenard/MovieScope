"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`/top-rated?page=${page}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`px-4 py-2 rounded ${
            currentPage === page
              ? "bg-red-600 text-white"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}
