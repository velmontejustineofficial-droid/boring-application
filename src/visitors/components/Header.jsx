
import { Search, SlidersHorizontal, FolderOpen } from 'lucide-react';
import './Header.css';

export default function Header({
    allCategory,
    onHandleCategories,
    activeCategory,

  searchTerm = '',
  onSearchChange,
  itemsPerPage = 6,
  onItemsPerPageChange,
}) {
    
  return (
    <header className="tools-header">
      <div className="tools-header-top">
        <div className="tools-header-title">
          <span className="tools-header-label">COMMUNITY</span>
          <h1>
            Explore Tools<span>.</span>
          </h1>
          <p>Discover useful tools and applications.</p>
        </div>
      </div>

      <div className="tools-header-controls">
        {/* Search */}
        <div className="tools-search">
          <Search size={19} />

          <input
            type="search"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search tools"
          />
        </div>

        {/* Category filter */}
        <div className="tools-filter">
          <FolderOpen size={18} />

          <select value={activeCategory} onChange={(e) => onHandleCategories(e.target.value)} aria-label="Filter by category">
            <option value="All Tools">All Tools</option>
            {allCategory.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Items per page */}
        <div className="tools-filter">
          <SlidersHorizontal size={18} />

        <select
        value={itemsPerPage}
        onChange={(e) =>
            onItemsPerPageChange?.(Number(e.target.value))
        }
        aria-label="Number of tools per page"
        >
        {['6 Per Page', '12 Per Page', '18 Per Page', '24 Per Page'].map((page) => {
            const value = Number.parseInt(page, 10);
            return (
            <option key={value} value={value}>
                {page}
            </option>
            );
        })}
        </select>
        </div>
      </div>
    </header>
  );
}
