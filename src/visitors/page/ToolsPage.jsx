
import { useState } from 'react';
import { useNavigate } from 'react-router';
import './css/ToolsPage.css';

import Card from '../components/Card';

import PageHeader from '../../app/components/PageHeader';
import { BsTools } from 'react-icons/bs';
import { FiCode, FiSearch } from 'react-icons/fi';


const tools = [
  {
    id: 1,
    name: 'Email Service',
    link: "/test1",
    description: 'A useful tool for sending and managing emails.',
    category: 'Web Applications',
    icon: <FiCode />,
    type: 'Web',
    image: '/images/email-service.png',
  },
  {
    id: 2,
    name: 'JSON Formatter',
    link: "test2",
    description: 'Format and organize JSON data with ease.',
    category: 'Developer Tools',
    icon: <FiCode />,
    type: 'Developer',
    image: '/images/json-formatter.png',
  },
  {
    id: 3,
    name: 'Library test',
    link: "",
    description: 'Manage books, borrowing records, and library data.',
    category: 'Web Applications',
    icon: <FiCode />,
    type: 'Web',
    image: '/images/library-system.png',
  },
  {
    id: 4,
    name: 'Barangay Management System',
    link: "",
    description: 'A Java desktop application for managing barangay records.',
    category: 'Desktop Applications',
    icon: <FiCode />,
    type: 'Desktop',
    image: '/images/barangay-system.png',
  },
];


const categories = [
  'All Tools',
  'Web Applications',
  'Developer Tools',
  'Desktop Applications',
];

export default function ToolsPage() {
  const navigateTo = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Tools');

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === 'All Tools' ||
      tool.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="tools-page">
      <PageHeader
        title="Explore Tools"
        subtitle="Discover useful tools and applications for your everyday needs."
        icon={<BsTools />}
      />

      <section className="tools-container">
        <div className="tools-toolbar">

          <div className="tools-search">
            <FiSearch aria-hidden="true" />
            <input
              type="search"
              placeholder="Search tools..."
              aria-label="Search tools"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="tools-categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`category-button ${
                  activeCategory === category ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="tools-results">
          <p>
            Showing <strong>{filteredTools.length}</strong>{' '}
            {filteredTools.length === 1 ? 'tool' : 'tools'}
          </p>
        </div>

        <div className="tools-grid">
          {filteredTools.map((tool) => (
            <Card
              name={tool.name}
              description={tool.description}
              category={tool.category}
              icon={tool.icon}
              type={tool.type}
              image={tool.image}
              link={()=> navigateTo(tool.link)}
            />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="tools-empty">
            <BsTools />
            <h2>No tools found</h2>
            <p>Try another search term or select a different category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
