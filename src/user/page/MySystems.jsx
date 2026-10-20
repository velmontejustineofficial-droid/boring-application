
import { useState } from 'react';
import {
  Search,
  Mail,
  BookOpen,
  Monitor,
  Globe,
  Code2,
  FileCode,
  ExternalLink,
  BookOpenText,
  Plus,
  Pencil,
  Trash2,
  X,
  Save,
} from 'lucide-react';

import './css/UserPages.css';

const initialSystems = [
  {
    id: 1,
    name: 'Email Service',
    description: 'A simple and reliable email service.',
    category: 'Web App',
    language: 'PHP',
    icon: 'Mail',
    github:
      'https://github.com/velmontejustineofficial-droid/boring-application/',
    readmePath: 'README.md',
    branch: 'main',
  },
  {
    id: 2,
    name: 'Library System',
    description: 'Manage books, members, and borrowing records.',
    category: 'Web App',
    language: 'JavaScript',
    icon: 'BookOpen',
    github: '',
    readmePath: 'README.md',
    branch: 'main',
  },
];

const categories = [
  'All',
  'Web App',
  'Desktop App',
  'Tools',
  'Library',
];

const iconOptions = {
  Mail,
  BookOpen,
  Monitor,
  Globe,
  Code2,
  FileCode,
};

const emptyProject = {
  name: '',
  description: '',
  category: 'Web App',
  language: 'JavaScript',
  icon: 'Code2',
  github: '',
  readmePath: 'README.md',
  branch: 'main',
};

function getGitHubRepository(value) {
  try {
    const url = new URL(value);

    if (
      url.protocol !== 'https:' ||
      url.hostname !== 'github.com'
    ) {
      return null;
    }

    const parts = url.pathname.split('/').filter(Boolean);

    if (parts.length < 2) return null;

    return {
      owner: parts[0],
      repo: parts[1].replace(/\.git$/, ''),
    };
  } catch {
    return null;
  }
}

export default function MySystems() {
  const [systems, setSystems] = useState(initialSystems);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyProject);
  const [formError, setFormError] = useState('');

  const filteredSystems = systems.filter((system) => {
    const query = search.toLowerCase();

    const matchesSearch =
      system.name.toLowerCase().includes(query) ||
      system.description.toLowerCase().includes(query) ||
      system.language.toLowerCase().includes(query);

    const matchesCategory =
      category === 'All' || system.category === category;

    return matchesSearch && matchesCategory;
  });

  function openCreateForm() {
    setEditingId(null);
    setForm({ ...emptyProject });
    setFormError('');
    setShowForm(true);
  }

  function openEditForm(system) {
    setEditingId(system.id);
    setForm({
      name: system.name,
      description: system.description,
      category: system.category,
      language: system.language,
      icon: system.icon,
      github: system.github || '',
      readmePath: system.readmePath || 'README.md',
      branch: system.branch || 'main',
    });
    setFormError('');
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    setEditingId(null);
    setFormError('');
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormError('');

    const name = form.name.trim();
    const description = form.description.trim();

    if (!name || !description || !form.language.trim()) {
      setFormError('Please complete all required fields.');
      return;
    }

    if (
      form.github.trim() &&
      !getGitHubRepository(form.github.trim())
    ) {
      setFormError(
        'Enter a valid GitHub repository URL, such as https://github.com/owner/repository.'
      );
      return;
    }

    const project = {
      ...form,
      id: editingId ?? Date.now(),
      name,
      description,
      language: form.language.trim(),
      github: form.github.trim().replace(/\/+$/, ''),
      readmePath: form.readmePath.trim() || 'README.md',
      branch: form.branch.trim() || 'main',
    };

    if (editingId !== null) {
      setSystems((current) =>
        current.map((item) =>
          item.id === editingId ? project : item
        )
      );
    } else {
      setSystems((current) => [project, ...current]);
    }

    closeForm();
  }

  function deleteProject(system) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${system.name}"?`
    );

    if (!confirmed) return;

    setSystems((current) =>
      current.filter((item) => item.id !== system.id)
    );
  }

  function openProjectGuide(system) {
    const repository = getGitHubRepository(system.github || '');

    if (!repository) {
      window.alert(
        'Add a valid GitHub repository URL to this project first.'
      );
      return;
    }

    const url = new URL('/user/project-guide', window.location.origin);

    url.searchParams.set('owner', repository.owner);
    url.searchParams.set('repo', repository.repo);
    url.searchParams.set('path', system.readmePath || 'README.md');
    url.searchParams.set('branch', system.branch || 'main');

    window.open(url.toString(), '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="user-page">
      <div className="user-page-heading">
        <div>
          <h1>My Systems</h1>
          <p>
            Explore and manage your web apps, desktop applications,
            tools, and libraries.
          </p>
        </div>

        <button
          type="button"
          className="page-primary-button"
          onClick={openCreateForm}
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      <div className="systems-toolbar">
        <div className="page-search">
          <Search size={19} />
          <input
            type="search"
            placeholder="Search systems..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="category-filters">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`filter-button ${
                category === item ? 'active' : ''
              }`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="systems-result-count">
        Showing {filteredSystems.length} of {systems.length} projects
      </p>

      <div className="page-system-grid">
        {filteredSystems.map((system) => {
          const Icon = iconOptions[system.icon] || Code2;

          return (
            <article className="page-system-card" key={system.id}>
              <div className="project-card-top">
                <div className="page-system-icon">
                  <Icon size={25} />
                </div>

                <div className="project-card-actions">
                  <button
                    type="button"
                    className="icon-action"
                    title={`Edit ${system.name}`}
                    aria-label={`Edit ${system.name}`}
                    onClick={() => openEditForm(system)}
                  >
                    <Pencil size={17} />
                  </button>

                  <button
                    type="button"
                    className="icon-action delete-action"
                    title={`Delete ${system.name}`}
                    aria-label={`Delete ${system.name}`}
                    onClick={() => deleteProject(system)}
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>

              <span className="page-system-category">
                {system.category}
              </span>

              <h2>{system.name}</h2>
              <p>{system.description}</p>

              <div className="project-tags">
                <span>{system.language}</span>
              </div>

              <div className="project-card-buttons">
                <button
                  type="button"
                  className="guide-button"
                  onClick={() => openProjectGuide(system)}
                >
                  <BookOpenText size={17} />
                  Project Guide
                </button>

                {system.github && (
                  <a
                    className="project-github-link"
                    href={system.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${system.name} on GitHub`}
                    title="Open GitHub repository"
                  >
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {filteredSystems.length === 0 && (
        <div className="page-empty-state">
          <Search size={32} />
          <h2>No systems found</h2>
          <p>Try another search term or category.</p>
        </div>
      )}

      {showForm && (
        <div
          className="project-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeForm();
          }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-form-title"
          >
            <div className="project-modal-header">
              <div>
                <h2 id="project-form-title">
                  {editingId !== null ? 'Edit Project' : 'Create Project'}
                </h2>
                <p>
                  Enter your project details and GitHub documentation.
                </p>
              </div>

              <button
                type="button"
                className="icon-action"
                onClick={closeForm}
                aria-label="Close form"
              >
                <X size={20} />
              </button>
            </div>

            <form className="project-form" onSubmit={handleSubmit}>
              <label className="form-field">
                Project Name *
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Library Management System"
                  required
                  maxLength={100}
                />
              </label>

              <label className="form-field">
                Description *
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="What does your project do?"
                  rows={3}
                  required
                  maxLength={500}
                />
              </label>

              <div className="project-form-row">
                <label className="form-field">
                  Category *
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                  >
                    {categories.filter((item) => item !== 'All').map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="form-field">
                  Language *
                  <input
                    name="language"
                    value={form.language}
                    onChange={handleChange}
                    placeholder="e.g. Java"
                    required
                    maxLength={60}
                  />
                </label>
              </div>

              <label className="form-field">
                Card Icon
                <select
                  name="icon"
                  value={form.icon}
                  onChange={handleChange}
                >
                  {Object.keys(iconOptions).map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="form-field">
                GitHub Repository URL
                <input
                  type="url"
                  name="github"
                  value={form.github}
                  onChange={handleChange}
                  placeholder="https://github.com/owner/repository"
                />
              </label>

              <div className="project-form-row">
                <label className="form-field">
                  README File Path
                  <input
                    name="readmePath"
                    value={form.readmePath}
                    onChange={handleChange}
                    placeholder="README.md"
                  />
                </label>

                <label className="form-field">
                  GitHub Branch
                  <input
                    name="branch"
                    value={form.branch}
                    onChange={handleChange}
                    placeholder="main"
                  />
                </label>
              </div>

              {formError && (
                <p className="project-form-error" role="alert">
                  {formError}
                </p>
              )}

              <div className="project-form-actions">
                <button
                  type="button"
                  className="filter-button"
                  onClick={closeForm}
                >
                  Cancel
                </button>

                <button type="submit" className="page-primary-button">
                  <Save size={17} />
                  {editingId !== null ? 'Save Changes' : 'Create Project'}
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </section>
  );
}
