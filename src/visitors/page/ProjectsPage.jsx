
import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  CheckCircle2,
  Code2,
  Construction,
  FolderKanban,
  Rocket,
  Wrench,
} from 'lucide-react';

import { Link } from 'react-router';

import './css/ProjectsPage.css';

const plannedFeatures = [
  {
    icon: FolderKanban,
    title: 'Community Projects',
    description:
      'Explore projects published by community members.',
    status: 'In development',
    progress: 65,
  },
  {
    icon: Code2,
    title: 'Project Details',
    description:
      'View descriptions, technologies, source code, and live demos.',
    status: 'Planned',
    progress: 30,
  },
  {
    icon: Wrench,
    title: 'Search and Filters',
    description:
      'Find projects by category, programming language, and technology.',
    status: 'Planned',
    progress: 15,
  },
];

export default function ProjectsPage() {
  return (
    <main className="projects-page projects-under-development">
      <div className="projects-development-container">
        {/* STATUS */}
        <div className="projects-development-status">
          <span className="projects-development-status-dot" />
          UNDER DEVELOPMENT
        </div>

        {/* HERO */}
        <section className="projects-development-hero">
          <div className="projects-development-copy">
            <span className="projects-eyebrow">
              COMMUNITY SHOWCASE
            </span>

            <h1>
              Great projects.
              <br />
              <span>Coming soon.</span>
            </h1>

            <p>
              We're building a place where developers can share
              their applications, showcase their tools, and discover
              projects created by the community.
            </p>

            <div className="projects-development-actions">
              <Link
                to="/"
                className="projects-development-primary"
              >
                <ArrowLeft size={17} />
                Back to Home
              </Link>

              <Link
                to="/"
                className="projects-development-secondary"
              >
                Explore Website
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* VISUAL */}
          <div
            className="projects-development-visual"
            aria-hidden="true"
          >
            <div className="projects-development-orbit orbit-one" />
            <div className="projects-development-orbit orbit-two" />

            <div className="projects-development-glow" />

            <div className="projects-development-icon">
              <Blocks size={58} strokeWidth={1.4} />
            </div>

            <div className="projects-development-floating floating-one">
              <Code2 size={18} />
              <span>Build</span>
            </div>

            <div className="projects-development-floating floating-two">
              <Rocket size={18} />
              <span>Launch</span>
            </div>

            <div className="projects-development-floating floating-three">
              <CheckCircle2 size={18} />
              <span>Share</span>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="projects-development-features">
          <div className="projects-development-section-heading">
            <div>
              <span className="projects-eyebrow">
                WHAT'S COMING
              </span>

              <h2>We're building something useful.</h2>

              <p>
                Here's a preview of the features planned for this page.
              </p>
            </div>
          </div>

          <div className="projects-development-grid">
            {plannedFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="projects-development-card"
                  key={feature.title}
                >
                  <div className="projects-development-card-top">
                    <div className="projects-development-card-icon">
                      <Icon size={23} />
                    </div>

                    <span className="projects-development-card-status">
                      {feature.status}
                    </span>
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <div className="projects-development-progress-info">
                    <span>Development progress</span>
                    <strong>{feature.progress}%</strong>
                  </div>

                  <div
                    className="projects-development-progress-track"
                    role="progressbar"
                    aria-label={`${feature.title} development progress`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={feature.progress}
                  >
                    <span
                      style={{ width: `${feature.progress}%` }}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="projects-development-footer">
          <div className="projects-development-footer-icon">
            <Construction size={20} />
          </div>

          <div>
            <h3>This page is still being developed.</h3>
            <p>
              Features and progress indicators are illustrative
              previews, not a live development tracker.
            </p>
          </div>

          <span className="projects-development-footer-label">
            <span />
            IN PROGRESS
          </span>
        </footer>
      </div>
    </main>
  );
}
