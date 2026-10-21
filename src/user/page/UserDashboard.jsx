
import {
  Box,
  UsersRound,
  Clock3,
  Star,
  Mail,
  BookOpen,
  Monitor,
  Globe,
  Code2,
  FileCode,
  ExternalLink,
  Heart,
} from 'lucide-react';

import './css/UserDashboard.css';

const statistics = [
  {
    title: 'Total Systems',
    value: 12,
    icon: Box,
    color: 'green',
  },
  {
    title: 'Your Favorites',
    value: 5,
    icon: UsersRound,
    color: 'blue',
  },
  {
    title: 'Recently Used',
    value: 3,
    icon: Clock3,
    color: 'purple',
  },
  {
    title: 'Available Tools',
    value: 8,
    icon: Star,
    color: 'yellow',
  },
];

const systems = [
  {
    name: 'Email Service',
    description: 'Send and receive emails with a simple and reliable interface.',
    category: 'Web App',
    language: 'PHP',
    icon: Mail,
    color: 'blue',
  },
  {
    name: 'Library System',
    description: 'Manage books, members and borrowing records.',
    category: 'Web App',
    language: 'JavaScript',
    icon: BookOpen,
    color: 'green',
  },
  {
    name: 'Barangay Management System',
    description: 'Desktop application for managing barangay records and residents.',
    category: 'Desktop App',
    language: 'Java',
    icon: Monitor,
    color: 'purple',
  },
  {
    name: 'Weather App',
    description: 'Get real-time weather information for any location.',
    category: 'Web App',
    language: 'JavaScript',
    icon: Globe,
    color: 'blue',
  },
  {
    name: 'PHP Tools',
    description: 'Collection of useful PHP tools and utilities.',
    category: 'Tools',
    language: 'PHP',
    icon: Code2,
    color: 'purple',
  },
  {
    name: 'Java Utilities',
    description: 'Useful Java libraries and examples for everyday tasks.',
    category: 'Library',
    language: 'Java',
    icon: FileCode,
    color: 'blue',
  },
];

export default function UserDashboard() {

  
  return (
    <div className="user-dashboard">
      <section className="dashboard-welcome">
        <div>
          <h1>
            Welcome back, <span>John Doe!</span> 👋
          </h1>

          <p>
            Explore the systems and tools available. You can view,
            try, and manage your favorite tools here.
          </p>
        </div>

        <Code2 className="welcome-icon" size={76} />
      </section>

      <section className="dashboard-statistics">
        {statistics.map((item) => {
          const Icon = item.icon;

          return (
            <article className="stat-card" key={item.title}>
              <div className={`stat-icon ${item.color}`}>
                <Icon size={24} />
              </div>

              <h2>{item.value}</h2>
              <p>{item.title}</p>
            </article>
          );
        })}
      </section>

      <section className="featured-systems">
        <div className="section-heading">
          <h2>New Upload Featured Systems</h2>

          <a href="/user/systems" className="view-all-link">
            View All <span>→</span>
          </a>
        </div>

        <div className="systems-grid">
          {systems.map((system) => {
            const Icon = system.icon;

            return (
              <article className="system-card" key={system.name}>
                <div className={`system-icon ${system.color}`}>
                  <Icon size={25} />
                </div>

                <h3>{system.name}</h3>
                <p className="system-description">
                  {system.description}
                </p>

                <div className="system-tags">
                  <span className={`system-tag ${system.color}`}>
                    {system.category}
                  </span>

                  <span className="system-tag">
                    {system.language}
                  </span>
                </div>

                <div className="system-card-actions">
                  <a
                    href={`/user/systems/${encodeURIComponent(
                      system.name.toLowerCase().replaceAll(' ', '-')
                    )}`}
                    className="system-open-button"
                  >
                    Open <ExternalLink size={15} />
                  </a>

                  <button
                    type="button"
                    className="system-favorite-button"
                    aria-label={`Add ${system.name} to favorites`}
                    title="Add to favorites"
                  >
                    <Heart size={20} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
