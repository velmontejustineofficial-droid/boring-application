import { useMemo, useState } from 'react';
import {
  Search,
  Wrench,
  Globe,
  Code2,
  BookOpen,
  ExternalLink,
  Eye,
  UserRound,
  CalendarDays,
  X,
  Layers3,
} from 'lucide-react';

import './css/ToolsPage.css';

const tools = [
  {
    id: 1,
    name: 'JSON Formatter',
    description:
      'Format, validate, and organize JSON data with a simple and easy-to-use interface.',
    category: 'Developer Tools',
    type: 'Web Tool',
    language: 'JavaScript',
    author: 'Alex Developer',
    date: 'Oct 18, 2026',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    demo: 'https://jsonformatter.org/',
    github: 'https://github.com/',
  },
  {
    id: 2,
    name: 'Email Service',
    description:
      'A web-based email tool designed to help users manage and organize email-related tasks.',
    category: 'Web Tools',
    type: 'Web Tool',
    language: 'PHP',
    author: 'Jamie Santos',
    date: 'Oct 17, 2026',
    technologies: ['PHP', 'MySQL', 'JavaScript'],
    demo: '',
    github: 'https://github.com/',
  },
  {
    id: 3,
    name: 'Java Utility Library',
    description:
      'A reusable Java library containing helper methods for common programming tasks.',
    category: 'Libraries',
    type: 'Java Library',
    language: 'Java',
    author: 'Chris Rivera',
    date: 'Oct 16, 2026',
    technologies: ['Java', 'Maven'],
    demo: '',
    github: 'https://github.com/',
  },
  {
    id: 4,
    name: 'Color Palette Generator',
    description:
      'Generate color combinations for websites, applications, and creative projects.',
    category: 'Design Tools',
    type: 'Web Tool',
    language: 'JavaScript',
    author: 'Taylor Dev',
    date: 'Oct 15, 2026',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    demo: '',
    github: 'https://github.com/',
  },
  {
    id: 5,
    name: 'File Organizer',
    description:
      'A desktop utility that helps organize files into folders based on their file types.',
    category: 'Desktop Tools',
    type: 'Desktop App',
    language: 'Java',
    author: 'Morgan Lee',
    date: 'Oct 14, 2026',
    technologies: ['Java', 'Swing'],
    demo: '',
    github: 'https://github.com/',
  },
  {
    id: 6,
    name: 'Password Generator',
    description:
      'Generate random passwords with customizable length and character options.',
    category: 'Developer Tools',
    type: 'Web Tool',
    language: 'JavaScript',
    author: 'Jordan Cruz',
    date: 'Oct 12, 2026',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    demo: '',
    github: 'https://github.com/',
  },
];

const categories = [
  'All Tools',
  'Web Tools',
  'Developer Tools',
  'Libraries',
  'Design Tools',
  'Desktop Tools',
];

export default function ToolsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Tools');
  const [selectedTool, setSelectedTool] = useState(null);

  const filteredTools = useMemo(() => {
    const query = search.toLowerCase().trim();

    return tools.filter((tool) => {
      const matchesCategory =
        activeCategory === 'All Tools' ||
        tool.category === activeCategory;

      const searchableText = [
        tool.name,
        tool.description,
        tool.author,
        tool.language,
        tool.category,
        ...tool.technologies,
      ]
        .join(' ')
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [search, activeCategory]);

  return (
    <main className="tools-page">
      <section className="tools-page-header">
        <div className="tools-page-heading">
          <span className="tools-eyebrow">
            <Wrench size={15} />
            COMMUNITY RESOURCES
          </span>

          <h1>
            Community <span>Tools</span>
          </h1>

          <p>
            Discover useful tools, libraries, and utilities created
            and shared by our community.
          </p>
        </div>

        <div className="tools-page-count">
          <Layers3 size={22} />
          <div>
            <strong>{filteredTools.length}</strong>
            <span>
              {filteredTools.length === 1 ? 'Tool found' : 'Tools found'}
            </span>
          </div>
        </div>
      </section>

      <section className="tools-toolbar">
        <div className="tools-search">
          <Search size={19} />

          <input
            type="search"
            placeholder="Search tools, languages, or creators..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search community tools"
          />

          {search && (
            <button
              type="button"
              className="tools-clear-search"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="tools-categories">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                activeCategory === category ? 'active' : ''
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="tools-results">
        <div className="tools-results-heading">
          <h2>Explore Tools</h2>
          <span>
            Shared by community creators
          </span>
        </div>

        {filteredTools.length > 0 ? (
          <div className="tools-grid">
            {filteredTools.map((tool) => (
              <article className="community-tool-card" key={tool.id}>
                <div className="community-tool-card-top">
                  <div className="community-tool-icon">
                    {tool.category === 'Libraries' ? (
                      <BookOpen size={23} />
                    ) : tool.category === 'Desktop Tools' ? (
                      <Layers3 size={23} />
                    ) : tool.category === 'Developer Tools' ? (
                      <Code2 size={23} />
                    ) : (
                      <Globe size={23} />
                    )}
                  </div>

                  <span className="community-tool-type">
                    {tool.type}
                  </span>
                </div>

                <div className="community-tool-content">
                  <span className="community-tool-category">
                    {tool.category}
                  </span>

                  <h3>{tool.name}</h3>

                  <p>{tool.description}</p>

                  <div className="community-tool-tags">
                    {tool.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="community-tool-author">
                  <div className="community-tool-avatar">
                    <UserRound size={16} />
                  </div>

                  <div className="community-tool-author-info">
                    <span>Created by</span>
                    <strong>{tool.author}</strong>
                  </div>

                  <div className="community-tool-date">
                    <CalendarDays size={13} />
                    <span>{tool.date}</span>
                  </div>
                </div>

                <div className="community-tool-actions">
                  <button
                    type="button"
                    className="tool-details-button"
                    onClick={() => setSelectedTool(tool)}
                  >
                    <Eye size={16} />
                    Details
                  </button>

                  {tool.demo && (
                    <a
                      className="tool-demo-button"
                      href={tool.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${tool.name} demo`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {tool.github && (
                    <a
                      className="tool-github-button"
                      href={tool.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${tool.name} source code`}
                    >
                      {/* <Github size={17} /> */}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="tools-empty-state">
            <Search size={32} />
            <h3>No tools found</h3>
            <p>
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch('');
                setActiveCategory('All Tools');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {selectedTool && (
        <div
          className="tool-modal-overlay"
          onClick={() => setSelectedTool(null)}
        >
          <section
            className="tool-details-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tool-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="tool-modal-header">
              <div className="community-tool-icon">
                <Wrench size={23} />
              </div>

              <button
                type="button"
                className="tool-modal-close"
                onClick={() => setSelectedTool(null)}
                aria-label="Close tool details"
              >
                <X size={21} />
              </button>
            </div>

            <span className="community-tool-category">
              {selectedTool.category}
            </span>

            <h2 id="tool-modal-title">{selectedTool.name}</h2>
            <p className="tool-modal-description">
              {selectedTool.description}
            </p>

            <div className="tool-modal-information">
              <div>
                <span>Creator</span>
                <strong>{selectedTool.author}</strong>
              </div>

              <div>
                <span>Tool Type</span>
                <strong>{selectedTool.type}</strong>
              </div>

              <div>
                <span>Language</span>
                <strong>{selectedTool.language}</strong>
              </div>

              <div>
                <span>Date Shared</span>
                <strong>{selectedTool.date}</strong>
              </div>
            </div>

            <h3 className="tool-modal-subheading">Technologies</h3>

            <div className="community-tool-tags">
              {selectedTool.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="tool-modal-actions">
              {selectedTool.demo && (
                <a
                  href={selectedTool.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tool-modal-link primary"
                >
                  <Globe size={17} />
                  Open Tool
                </a>
              )}

              {selectedTool.github && (
                <a
                  href={selectedTool.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tool-modal-link"
                >
                  {/* <Github size={17} /> */}
                  Source Code
                </a>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
