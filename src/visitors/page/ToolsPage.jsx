import Header from '../components/Header';

import EmptyToolCard from '../components/tools/EmptyToolCard.jsx';
import ToolCard from '../components/tools/ToolCard.jsx';

import { useToolsHooks } from '../hooks/ToolsHooks.js';

import './css/ToolsPage.css';


export default function ToolsPage() {
  const { allCategory, filteredTools, setSearch, search, activeCategory, setActiveCategory } = useToolsHooks();

  // Handlers
  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handleCategoryChange = (value) =>{
    setActiveCategory(value);
  }

  return (
    <main className="tools-page">
      <Header
        allCategory={allCategory}
        onHandleCategories={handleCategoryChange}
        activeCategory={activeCategory}

        searchTerm={search}
        onSearchChange={handleSearchChange}
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
