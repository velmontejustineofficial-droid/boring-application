
import { useState } from 'react';
import { Link } from 'react-router';
import { Mail } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { SiFigma } from 'react-icons/si';

import { loginWithGithub } from '../../app/service/GithubService';
import { loginWithFigma } from '../../app/service/FigmaService';

import './css/HomePage.css';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  async function handleGithub() {
    setError('');

    try {
      await loginWithGithub();
    } catch (err) {
      setError(err.message || 'GitHub login failed.');
    }
  }

  async function handleFigma() {
    setError('');

    try {
      await loginWithFigma();
    } catch (err) {
      setError(err.message || 'Figma login failed.');
    }
  }

  function handleEmail(event) {
    event.preventDefault();
    setError(
      'Email login is not connected yet. Please use GitHub, Figma, or Visitor.'
    );
  }

  return (
    <main className="home-page">
      {/* LEFT: HERO */}
      <section className="home-hero">
        <Link to="/" className="home-brand">
          <span className="home-brand-logo">JB</span>
          <span>
            Boring<span className="home-brand-dot">.</span>
          </span>
        </Link>

        <div className="home-hero-content">
          <span className="home-eyebrow">
            BUILD <span /> SHARE <span /> GROW
          </span>

          <h1>
            Discover <span>Tools.</span>
            <br />
            Explore <span>Possibilities.</span>
          </h1>

          <p className="home-description">
            Explore web applications, developer tools, and Java desktop
            applications in one place. Discover useful systems and share
            your own creations with the community.
          </p>

        </div>
      </section>

      {/* RIGHT: LOGIN */}
      <section className="home-login-section">
        <div className="home-login-card">
          <div className="home-login-heading">
            <h2>Welcome back.</h2>
            <p>Sign in to explore and share your projects.</p>
          </div>

          <form className="home-login-form" onSubmit={handleEmail}>
            <label className="home-email-label" htmlFor="home-email">
              Email address
            </label>

            <div className="home-email-input">
              <Mail size={18} aria-hidden="true" />

              <input
                id="home-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            {error && (
              <p className="home-login-error" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="home-login-submit">
              Continue with Email <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className="home-login-divider">
            <span />
            <p>or continue with</p>
            <span />
          </div>

          <div className="home-social-buttons">
            <button
              type="button"
              className="home-social-button"
              onClick={handleGithub}
            >
              <FiGithub size={19} />
              GitHub
            </button>

            <button
              type="button"
              className="home-social-button"
              onClick={handleFigma}
            >
              <SiFigma size={19} />
              Figma
            </button>
          </div>

          <p className="home-login-terms">
            By continuing, you agree to use the platform responsibly.
          </p>
        </div>
      </section>
    </main>
  );
}
