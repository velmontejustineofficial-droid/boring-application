
import { useMemo, useState } from 'react';
import {
  Search,
  Globe,
  Monitor,
  Code2,
  BookOpen,
  ExternalLink,
  Eye,
  Layers3,
  X,
  CalendarDays,
  UserRound,
  Tag,
} from 'lucide-react';

import './css/ProjectsPage.css';

// Sample projects from different community members.
// Replace this array with projects fetched from your backend.
const projects = [
  {
    id: 1,
    name: 'Library Management System',
    description:
      'A system for managing books, members, borrowing transactions, and library records.',
    category: 'Web App',
    language: 'JavaScript',
    author: 'Alex Developer',
    date: '2026-10-18',
    technologies: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/',
    demo: '',
    icon: BookOpen,
    featured: true,
  },
  {
    id: 2,
    name: 'Barangay Management System',
    description:
      'A desktop application for organizing residents, documents, and barangay records.',
    category: 'Desktop App',
    language: 'Java',
    author: 'Jamie Santos',
    date: '2026-10-15',
    technologies: ['Java', 'Swing', 'SQLite'],
    github: 'https://github.com/',
    demo: '',
    icon: Monitor,
    featured: false,
  },
  {
    id: 3,
    name: 'Email Service',
    description:
      'A web-based email service project with a clean interface and useful email features.',
    category: 'Web App',
    language: 'PHP',
    author: 'Morgan Lee',
    date: '2026-10-12',
    technologies: ['PHP', 'MySQL', 'JavaScript'],
    github: 'https://github.com/',
    demo: '',
    icon: Globe,
    featured: false,
  },
  {
    id: 4,
    name: 'JSON Formatter',
    description:
      'A simple developer utility for formatting and inspecting JSON data.',
    category: 'Developer Tools',
    language: 'JavaScript',
    author: 'Taylor Dev',
    date: '2026-10-10',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/',
    demo: '',
    icon: Code2,
    featured: false,
  },
  {
    id: 5,
    name: 'Java Utility Library',
    description:
      'Reusable Java helper classes designed to simplify common development tasks.',
    category: 'Library',
    language: 'Java',
    author: 'Chris Rivera',
    date: '2026-10-08',
    technologies: ['Java', 'Maven'],
    github: 'https://github.com/',
    demo: '',
    icon: Layers3,
    featured: false,
  },
  {
    id: 6,
    name: 'Weather Dashboard',
    description:
      'A responsive weather dashboard that presents weather information in an easy-to-read layout.',
    category: 'Web App',
    language: 'JavaScript',
    author: 'Jordan Cruz',
    date: '2026-10-05',
    technologies: ['React', 'API', 'CSS'],
    github: 'https://github.com/',
    demo: '',
    icon: Globe,
    featured: false,
  },
];

const categories = [
  'All Projects',
  'Web App',
  'Desktop App',
  'Developer Tools',
  'Library',
];

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesSearch = [
        project.name,
        project.description,
        project.author,
        project.language,
        ...project.technologies,
      ]
        .join(' ')
        .toLowerCase()
        .includes(query);

      const matchesCategory =
        category === 'All Projects' ||
        project.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="projects-page">
      <header className="projects-page-heading">
        <div>
          <span className="projects-eyebrow">
            COMMUNITY SHOWCASE
          </span>

          <h1>
            Explore <span>Projects.</span>
          </h1>

          <p>
            Discover applications, tools, and libraries shared
            by developers in the community.
          </p>
        </div>

        <div className="projects-total">
          <Layers3 size={20} />
          <div>
            <strong>{filteredProjects.length}</strong>
            <span>Projects found</span>
          </div>
        </div>
      </header>

      <div className="projects-toolbar">
        <label className="projects-search">
          <Search size={19} />

          <input
            type="search"
            placeholder="Search projects, developers, technologies..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {search && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setSearch('')}
            >
              <X size={16} />
            </button>
          )}
        </label>

        <div className="projects-filters">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item ? 'active' : ''
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-results-heading">
        <div>
          <h2>Community Projects</h2>
          <p>Discover what other developers are building.</p>
        </div>

        <span>{filteredProjects.length} results</span>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="community-project-grid">
          {filteredProjects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                className="community-project-card"
                key={project.id}
              >
                <div className="community-project-cover">
                  <div className="community-project-cover-icon">
                    <Icon size={32} />
                  </div>

                  {project.featured && (
                    <span className="community-featured">
                      Featured
                    </span>
                  )}

                  <span className="community-project-category">
                    {project.category}
                  </span>
                </div>

                <div className="community-project-body">
                  <div className="community-project-language">
                    <Code2 size={14} />
                    {project.language}
                  </div>

                  <h3>{project.name}</h3>

                  <p className="community-project-description">
                    {project.description}
                  </p>

                  <div className="community-project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="community-project-author">
                    <div className="community-author-avatar">
                      <UserRound size={17} />
                    </div>

                    <div>
                      <span>Shared by</span>
                      <strong>{project.author}</strong>
                    </div>

                    <time dateTime={project.date}>
                      {new Date(
                        `${project.date}T12:00:00`
                      ).toLocaleDateString('en', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>

                  <div className="community-project-actions">
                    <button
                      type="button"
                      className="projects-details-button"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye size={16} />
                      Details
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-link-button"
                        aria-label={`GitHub for ${project.name}`}
                        title="GitHub repository"
                      >
                        {/* <Github size={17} /> */}
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-link-button"
                        aria-label={`Live demo for ${project.name}`}
                        title="Live demo"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="projects-empty-state">
          <Search size={34} />
          <h2>No projects found</h2>
          <p>Try a different keyword or category.</p>

          <button
            type="button"
            onClick={() => {
              setSearch('');
              setCategory('All Projects');
            }}
          >
            Clear filters
          </button>
        </div>
      )}

      {selectedProject && (
        <div
          className="projects-modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <article
            className="projects-details-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="projects-modal-title"
          >
            <div className="projects-modal-heading">
              <div>
                <span className="projects-eyebrow">
                  PROJECT DETAILS
                </span>
                <h2 id="projects-modal-title">
                  {selectedProject.name}
                </h2>
              </div>

              <button
                type="button"
                className="projects-modal-close"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
            </div>

            <p className="projects-modal-description">
              {selectedProject.description}
            </p>

            <div className="projects-modal-meta">
              <div>
                <UserRound size={17} />
                <span>{selectedProject.author}</span>
              </div>

              <div>
                <Tag size={17} />
                <span>{selectedProject.category}</span>
              </div>

              <div>
                <Code2 size={17} />
                <span>{selectedProject.language}</span>
              </div>

              <div>
                <CalendarDays size={17} />
                <span>{selectedProject.date}</span>
              </div>
            </div>

            <h3>Technologies used</h3>

            <div className="projects-modal-technologies">
              {selectedProject.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="projects-modal-actions">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="projects-primary-button"
                >
                  {/* <Github size={17} /> */}
                  View Source Code
                  <ExternalLink size={15} />
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="projects-secondary-button"
                >
                  <Globe size={17} />
                  Live Demo
                </a>
              )}

              {!selectedProject.github &&
                !selectedProject.demo && (
                  <p className="projects-no-links">
                    No source code or live demo has been provided.
                  </p>
                )}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
