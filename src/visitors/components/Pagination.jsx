
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import './Pagination.css';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        '...',
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="pagination-btn pagination-arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={18} />
        <span>Previous</span>
      </button>

      <div className="pagination-pages">
        {getPages().map((page, index) =>
          page === '...' ? (
            <span className="pagination-dots" key={`dots-${index}`}>
              <MoreHorizontal size={20} />
            </span>
          ) : (
            <button
              key={page}
              className={`pagination-btn pagination-number ${
                currentPage === page ? 'active' : ''
              }`}
              onClick={() => onPageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        className="pagination-btn pagination-arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <span>Next</span>
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}
