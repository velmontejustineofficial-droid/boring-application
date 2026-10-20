import { useState } from 'react';
import { Link } from 'react-router';
import {
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  ArrowRight,
  Layers3,
} from 'lucide-react';

import './css/AuthPages.css';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(event) {
    event.preventDefault();

    // Connect your authentication API here.
    console.log('Login form submitted');
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <Link to="/" className="auth-brand">
          JustineBon<span>.</span>
        </Link>

        <div className="auth-icon">
          <Layers3 size={28} />
        </div>

        <div className="auth-heading">
          <h1>Welcome back</h1>
          <p>Sign in to explore your workspace and community.</p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="auth-field">
            <label htmlFor="login-email">Email address</label>

            <div className="auth-input-wrapper">
              <Mail size={18} />

              <input
                id="login-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="auth-field">
            <div className="auth-label-row">
              <label htmlFor="login-password">Password</label>

              <Link to="/forgot-password" className="auth-text-link">
                Forgot password?
              </Link>
            </div>

            <div className="auth-input-wrapper">
              <LockKeyhole size={18} />

              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="auth-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? 'Hide password' : 'Show password'
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <label className="auth-checkbox">
            <input type="checkbox" name="remember" />
            <span>Remember me</span>
          </label>

          <button type="submit" className="auth-submit-button">
            Sign In
            <ArrowRight size={18} />
          </button>
          <div className="auth-visitor-link">
            <Link to="/visitors">← Continue as Visitor</Link>
          </div>
        </form>

        <div className="auth-divider">
          <span>NEW TO JUSTINEBON?</span>
        </div>

        <p className="auth-switch-text">
          Don't have an account?{' '}
          <Link to="/create-account" className="auth-text-link">
            Create account
          </Link>
        </p>

        <p className="auth-footer">
          Discover tools, share projects, and connect with creators.
        </p>
      </section>
    </main>
  );
}