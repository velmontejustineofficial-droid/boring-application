
import {
  Code2,
  Globe,
  Monitor,
  BookOpen,
  Rocket,
  Target,
  Heart,
  ArrowRight,
} from 'lucide-react';

import './css/AboutPage.css';

const features = [
  {
    icon: Globe,
    title: 'Web Applications',
    description:
      'Explore useful web applications built with different frameworks, languages, and technologies.',
  },
  {
    icon: Monitor,
    title: 'Desktop Applications',
    description:
      'Discover Java desktop applications designed to solve practical problems.',
  },
  {
    icon: Code2,
    title: 'Developer Tools',
    description:
      'Find helpful tools, utilities, and resources that make development easier.',
  },
  {
    icon: BookOpen,
    title: 'Libraries & Resources',
    description:
      'Explore reusable libraries, code examples, and project documentation.',
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <span className="about-eyebrow">
          <Code2 size={16} />
          ABOUT JUSTINEBON
        </span>

        <h1>
          Discover. Explore.
          <span> Build Something Great.</span>
        </h1>

        <p className="about-hero-description">
          JustineBon is a platform for showcasing applications,
          developer tools, and software projects in one place.
          Explore projects, learn how they work, and discover
          resources that inspire your next idea.
        </p>

        <a href="#about-mission" className="about-primary-button">
          Discover Our Purpose
          <ArrowRight size={18} />
        </a>

        <div className="about-hero-decoration" aria-hidden="true">
          <div className="about-code-window">
            <div className="about-window-dots">
              <span />
              <span />
              <span />
            </div>
            <Code2 size={68} strokeWidth={1.5} />
            <div className="about-code-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-introduction" id="about-mission">
        <div className="about-section-label">OUR PURPOSE</div>

        <h2>
          One place for
          <span> software and ideas.</span>
        </h2>

        <p>
          Software projects are more than just code. They are
          solutions, learning experiences, and ideas that can help
          others. JustineBon brings different projects together
          so visitors can discover what each one offers and explore
          its documentation or source code.
        </p>
      </section>

      {/* Features */}
      <section className="about-features">
        <div className="about-section-heading">
          <div>
            <div className="about-section-label">WHAT YOU CAN EXPLORE</div>
            <h2>Built for curious minds.</h2>
          </div>

          <p>
            From ready-to-use applications to reusable code,
            explore different kinds of software projects.
          </p>
        </div>

        <div className="about-feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="about-feature-card" key={feature.title}>
                <div className="about-feature-icon">
                  <Icon size={25} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <article className="about-value-card">
          <div className="about-value-icon">
            <Target size={24} />
          </div>

          <div>
            <h3>Our Goal</h3>
            <p>
              Make software projects easier to discover, understand,
              and explore through clear descriptions and documentation.
            </p>
          </div>
        </article>

        <article className="about-value-card">
          <div className="about-value-icon">
            <Heart size={24} />
          </div>

          <div>
            <h3>Our Approach</h3>
            <p>
              Focus on practical applications, useful resources,
              thoughtful design, and continuous improvement.
            </p>
          </div>
        </article>

        <article className="about-value-card">
          <div className="about-value-icon">
            <Rocket size={24} />
          </div>

          <div>
            <h3>Our Vision</h3>
            <p>
              Build a growing collection of projects that encourages
              exploration, learning, and new ideas.
            </p>
          </div>
        </article>
      </section>

      {/* Call to action */}
      <section className="about-cta">
        <div>
          <span className="about-section-label">START EXPLORING</span>
          <h2>Find your next useful tool.</h2>
          <p>
            Browse the available projects and discover something
            that fits your needs.
          </p>
        </div>

        <a href="/visitors/projects" className="about-primary-button">
          Explore Systems
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}
