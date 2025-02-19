import React from 'react';
import { cn } from '../utils/tailwindClassesMerge';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  className,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      // Show all pages if the total number is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 3) {
        pages.push(1, '...');
      } else {
        for (let i = 1; i <= Math.min(3, totalPages); i++) {
          pages.push(i);
        }
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...', totalPages);
      } else {
        for (let i = totalPages - 2; i <= totalPages; i++) {
          if (!pages.includes(i)) pages.push(i);
        }
      }
    }
    return pages;
  };

  const handlePageChange = (page: number | string) => {
    if (typeof page === 'number' && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div
      className={cn('flex justify-center items-center space-x-1', className)}
    >
      {/* Previous Button */}
      <button
        className={`sm:px-3 px-2 py-1 text-sm ${
          currentPage === 1
            ? 'text-[#C4CADA] cursor-not-allowed'
            : 'text-[#4B5675]'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaLongArrowAltLeft />
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) =>
        typeof page === 'string' ? (
          <span
            key={index}
            className="sm:px-3 px-2 py-1 text-[#4B5675] text-sm"
          >
            {page}
          </span>
        ) : (
          <button
            key={index}
            className={`sm:px-3 px-2 py-1 text-sm rounded-md ${
              currentPage === page
                ? 'bg-[#F1F1F4] text-brand-secondary'
                : 'text-[#4B5675]'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        className={`sm:px-3 px-2 py-1 ${
          currentPage === totalPages
            ? 'text-[#C4CADA] cursor-not-allowed'
            : 'text-[#4B5675] text-sm'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaLongArrowAltRight />
      </button>
    </div>
  );
};

export default Pagination;
