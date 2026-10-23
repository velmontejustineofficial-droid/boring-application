import { useState } from 'react';

import Header from '../components/Header';
import Pagination from '../components/Pagination.jsx';

import EmptyToolCard from '../components/tools/EmptyToolCard.jsx';
import ToolCard from '../components/tools/ToolCard.jsx';

import { useToolsHooks } from '../hooks/ToolsHooks.js';

import './css/ToolsPage.css';


export default function ToolsPage() {
  const { allCategory, filteredTools, setSearch, search, activeCategory, setActiveCategory } = useToolsHooks();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);


  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
  const safeCurrentPage = Math.min(
    currentPage,
    Math.max(totalPages, 1)
  );

  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const currentTools = filteredTools.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handlers
  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value) =>{
    setActiveCategory(value);
    setCurrentPage(1);
  }

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <main className="tools-page">
      <Header
        allCategory={allCategory}
        onHandleCategories={handleCategoryChange}
        activeCategory={activeCategory}

        searchTerm={search}
        onSearchChange={handleSearchChange}

        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />

      <section className="tools-results">
          {filteredTools.length > 0 ? (
          <>
            <div className="tools-grid">
              {filteredTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  category={tool.category}
                  type={tool.type}
                  name={tool.name}
                  description={tool.description}
                  technologies={tool.technologies}
                  author={tool.author}
                  date={tool.date}
                  demo={tool.demo}
                  github={tool.github}
                />
              ))}
            </div>

            <Pagination
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />

            <p className="tools-pagination-info">
              Showing {startIndex + 1}–
              {Math.min(startIndex + currentTools.length, filteredTools.length)}{' '}
              of {filteredTools.length} tools
            </p>
          </>
        ) : (
          <EmptyToolCard
            setSearch={setSearch}
            setActiveCategory={setActiveCategory}
          />
        )}
      </section>
    </main>
  );
}
