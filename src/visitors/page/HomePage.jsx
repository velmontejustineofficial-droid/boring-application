
import { useState } from 'react';
import { Link } from 'react-router';
import { LoaderCircle } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { SiFigma } from 'react-icons/si';

import { loginWithGithub } from '../../app/service/GithubService';
import { loginWithFigma } from '../../app/service/FigmaService';

import './css/HomePage.css';

export default function HomePage() {
  const [error, setError] = useState('');
  const [loadingProvider, setLoadingProvider] = useState('');

  async function handleGithub() {
    if (loadingProvider) return;

    setError('');
    setLoadingProvider('github');

    try {
      await loginWithGithub();
    } catch (err) {
      setError(err.message || 'GitHub login failed.');
      setLoadingProvider('');
    }
  }

  async function handleFigma() {
    if (loadingProvider) return;

    setError('');
    setLoadingProvider('figma');

    try {
      await loginWithFigma();
    } catch (err) {
      setError(err.message || 'Figma login failed.');
      setLoadingProvider('');
    }
  }

  return (
    <main className="home-page">
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

      <section className="home-login-section">
        <div className="home-login-card">
          <div className="home-login-heading">
            <h2>Welcome back.</h2>
            <p>Sign in to explore and share your projects.</p>
          </div>

          <div className="home-social-buttons">
            <button
              type="button"
              className="home-social-button"
              onClick={handleGithub}
              disabled={Boolean(loadingProvider)}
            >
              {loadingProvider === 'github' ? (
                <LoaderCircle className="login-spinner" size={19} />
              ) : (
                <FiGithub size={19} />
              )}

              {loadingProvider === 'github' ? 'Connecting...' : 'Continue with GitHub'}
            </button>

            <button
              type="button"
              className="home-social-button"
              onClick={handleFigma}
              disabled={Boolean(loadingProvider)}
            >
              {loadingProvider === 'figma' ? (
                <LoaderCircle className="login-spinner" size={19} />
              ) : (
                <SiFigma size={19} />
              )}

              {loadingProvider === 'figma' ? 'Connecting...' : 'Continue with Figma'}
            </button>
          </div>

          {error && (
            <p className="home-login-error" role="alert">
              {error}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
