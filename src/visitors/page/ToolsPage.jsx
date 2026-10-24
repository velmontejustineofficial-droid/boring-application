import Header from '../components/Header';

import EmptyToolCard from '../components/tools/EmptyToolCard.jsx';
import ToolCard from '../components/tools/ToolCard.jsx';

import { useToolsHooks } from '../hooks/ToolsHooks.js';
import { useNavigate } from 'react-router';

import './css/ToolsPage.css';


export default function ToolsPage() {
  const { allCategory, filteredTools, setSearch, search, activeCategory, setActiveCategory } = useToolsHooks();

  const navigate = useNavigate();

  // Handlers
  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handleCategoryChange = (value) =>{
    setActiveCategory(value);
  }
  const handleView = (tool) => {
    if (!tool.github) {
      alert('This tool does not have a GitHub repository.');
      return;
    }

    try {
      const githubUrl = new URL(tool.github);

      if (githubUrl.hostname !== 'github.com') {
        alert('Invalid GitHub repository URL.');
        return;
      }

      const parts = githubUrl.pathname.split('/').filter(Boolean);
      const owner = parts[0];
      const repo = parts[1]?.replace(/\.git$/, '');

      if (!owner || !repo) {
        alert('Invalid GitHub repository URL.');
        return;
      }

      const params = new URLSearchParams({
        owner,
        repo,
        path: tool.readmePath || 'README.md',
        branch: tool.branch || 'main',
      });

      navigate(`/project-guide?${params.toString()}`);
    } catch {
      alert('Please provide a valid GitHub repository URL.');
    }
  };

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
                  handleView={() => handleView(tool)}
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
