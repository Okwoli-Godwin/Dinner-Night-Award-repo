"use client"

import { useState } from "react"

export default function Pagination() {
  const [pages,] = useState(["1", "2", "3", "...", "8", "9", "10"])
  const [currentPage, setCurrentPage] = useState("1")

  const handlePrevious = () => {
    const currentIndex = pages.indexOf(currentPage)
    if (currentIndex > 0 && currentPage !== "...") {
      setCurrentPage(pages[currentIndex - 1])
    }
  }

  const handleNext = () => {
    const currentIndex = pages.indexOf(currentPage)
    if (currentIndex < pages.length - 1 && currentPage !== "...") {
      setCurrentPage(pages[currentIndex + 1])
    }
  }

  const handlePageClick = (page: string) => {
    if (page !== "...") {
      setCurrentPage(page)
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
        <button onClick={handlePrevious} className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">
          Previous
        </button>

        <div className="flex items-center gap-2">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(page)}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentPage === page ? "bg-gray-900 text-white" : "hover:bg-gray-50"
              }`}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
        </div>

        <div className="hidden sm:block">Page {currentPage} of 10</div>

        <button onClick={handleNext} className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  )
}

