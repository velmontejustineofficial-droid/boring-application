
import {
  ArrowRight,
  Bell,
  Blocks,
  CheckCircle2,
  Code2,
  Construction,
  FolderKanban,
  LayoutDashboard,
  Settings,
  UserRound,
  Wrench,
} from 'lucide-react';

import { Link } from 'react-router';

import './css/UserPageTest.css';

const dashboardCards = [
  {
    title: 'My Projects',
    description: 'Manage and showcase your personal projects.',
    icon: FolderKanban,
    status: 'Coming soon',
    number: '01',
  },
  {
    title: 'My Tools',
    description: 'Organize the tools and applications you create.',
    icon: Wrench,
    status: 'In development',
    number: '02',
  },
  {
    title: 'My Profile',
    description: 'Customize your public profile and information.',
    icon: UserRound,
    status: 'Planned',
    number: '03',
  },
];

const developmentItems = [
  {
    title: 'User Dashboard',
    description: 'Dashboard layout and navigation.',
    progress: 75,
    status: 'In progress',
  },
  {
    title: 'Project Management',
    description: 'Create, edit, and manage your projects.',
    progress: 35,
    status: 'In progress',
  },
  {
    title: 'Tools Management',
    description: 'Manage your published tools.',
    progress: 15,
    status: 'Planning',
  },
];

export default function UserPageTest() {
  return (
    <main className="user-test-page">
      {/* HEADER */}
      <header className="user-test-header">
        <Link to="/" className="user-test-brand">
          <span className="user-test-brand-icon">B</span>
          <span>
            Boring<span className="user-test-brand-dot">.</span>
          </span>
        </Link>

        <div className="user-test-header-right">
          <span className="user-test-status">
            <span className="user-test-status-dot" />
            Development mode
          </span>

          <button
            type="button"
            className="user-test-icon-button"
            aria-label="Notifications"
            title="Notifications coming soon"
          >
            <Bell size={19} />
          </button>

          <div className="user-test-avatar" aria-label="User profile">
            <UserRound size={19} />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="user-test-content">
        <div className="user-test-breadcrumb">
          <LayoutDashboard size={15} />
          <span>Dashboard</span>
          <span className="user-test-breadcrumb-separator">/</span>
          <span>Currently developing</span>
        </div>

        {/* WELCOME */}
        <section className="user-test-welcome">
          <div className="user-test-welcome-content">
            <span className="user-test-eyebrow">
              <Construction size={15} />
              WORK IN PROGRESS
            </span>

            <h1>
              Your workspace,
              <br />
              <span>under construction.</span>
            </h1>

            <p>
              Welcome to your personal workspace. The dashboard is
              currently being developed, and new features will be
              available here soon.
            </p>

            <div className="user-test-welcome-actions">
              <Link to="/visitors" className="user-test-primary-button">
                Explore public projects
                <ArrowRight size={17} />
              </Link>

              <span className="user-test-build-label">
                <Code2 size={15} />
                Building something useful
              </span>
            </div>
          </div>

          <div className="user-test-welcome-art" aria-hidden="true">
            <div className="user-test-art-orbit user-test-art-orbit-one" />
            <div className="user-test-art-orbit user-test-art-orbit-two" />

            <div className="user-test-art-center">
              <Blocks size={52} strokeWidth={1.3} />
            </div>

            <div className="user-test-floating-card user-test-floating-top">
              <CheckCircle2 size={17} />
              <span>Building UI</span>
            </div>

            <div className="user-test-floating-card user-test-floating-bottom">
              <Code2 size={17} />
              <span>New features</span>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="user-test-section">
          <div className="user-test-section-heading">
            <div>
              <span className="user-test-section-label">YOUR WORKSPACE</span>
              <h2>Dashboard overview</h2>
              <p>These areas will help you manage your work.</p>
            </div>

            <span className="user-test-preview-label">UI PREVIEW</span>
          </div>

          <div className="user-test-overview-grid">
            {dashboardCards.map((card) => {
              const Icon = card.icon;

              return (
                <article className="user-test-overview-card" key={card.title}>
                  <div className="user-test-card-top">
                    <div className="user-test-card-icon">
                      <Icon size={22} />
                    </div>

                    <span className="user-test-card-number">
                      {card.number}
                    </span>
                  </div>

                  <h3>{card.title}</h3>
                  <p>{card.description}</p>

                  <div className="user-test-card-bottom">
                    <span className="user-test-coming-status">
                      <span />
                      {card.status}
                    </span>

                    <ArrowRight size={17} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* DEVELOPMENT PROGRESS */}
        <section className="user-test-section">
          <div className="user-test-section-heading">
            <div>
              <span className="user-test-section-label">DEVELOPMENT</span>
              <h2>What we're working on</h2>
              <p>A preview of the features planned for this workspace.</p>
            </div>
          </div>

          <div className="user-test-progress-panel">
            {developmentItems.map((item, index) => (
              <article className="user-test-progress-item" key={item.title}>
                <div className="user-test-progress-icon">
                  {index === 0 ? (
                    <LayoutDashboard size={20} />
                  ) : index === 1 ? (
                    <FolderKanban size={20} />
                  ) : (
                    <Wrench size={20} />
                  )}
                </div>

                <div className="user-test-progress-main">
                  <div className="user-test-progress-title">
                    <h3>{item.title}</h3>
                    <span>{item.status}</span>
                  </div>

                  <p>{item.description}</p>

                  <div
                    className="user-test-progress-track"
                    role="progressbar"
                    aria-label={`${item.title} development progress`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={item.progress}
                  >
                    <span style={{ width: `${item.progress}%` }} />
                  </div>
                </div>

                <strong className="user-test-progress-percent">
                  {item.progress}%
                </strong>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER NOTICE */}
        <footer className="user-test-footer">
          <div className="user-test-footer-icon">
            <Settings size={18} />
          </div>

          <div>
            <h3>This page is currently in development.</h3>
            <p>
              The information shown here is sample UI content.
              Dashboard features and progress values are placeholders.
            </p>
          </div>

          <span className="user-test-footer-badge">PREVIEW</span>
        </footer>
      </div>
    </main>
  );
}
