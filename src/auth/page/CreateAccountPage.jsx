import { useState } from 'react';
import { Link } from 'react-router';
import {
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  UserRound,
  ArrowRight,
  Layers3,
} from 'lucide-react';

import './css/AuthPages.css';

export default function CreateAccountPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleCreateAccount(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Connect your registration API here.
    console.log('Create account form submitted');
  }

  return (
    <main className="auth-page">
      <section className="auth-card auth-register-card">
        <Link to="/" className="auth-brand">
          JustineBon<span>.</span>
        </Link>

        <div className="auth-icon">
          <Layers3 size={28} />
        </div>

        <div className="auth-heading">
          <h1>Create your account</h1>
          <p>Join the community and share what you've built.</p>
        </div>

        <form className="auth-form" onSubmit={handleCreateAccount}>
          <div className="auth-field">
            <label htmlFor="register-name">Full name</label>

            <div className="auth-input-wrapper">
              <UserRound size={18} />

              <input
                id="register-name"
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                autoComplete="name"
                minLength={2}
                required
              />
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="register-email">Email address</label>

            <div className="auth-input-wrapper">
              <Mail size={18} />

              <input
                id="register-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="register-password">Password</label>

            <div className="auth-input-wrapper">
              <LockKeyhole size={18} />

              <input
                id="register-password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create a password"
                autoComplete="new-password"
                minLength={8}
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

            <span className="auth-field-hint">
              Use at least 8 characters.
            </span>
          </div>

          <div className="auth-field">
            <label htmlFor="register-confirm-password">
              Confirm password
            </label>

            <div className="auth-input-wrapper">
              <LockKeyhole size={18} />

              <input
                id="register-confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Enter your password again"
                autoComplete="new-password"
                minLength={8}
                required
              />

              <button
                type="button"
                className="auth-password-toggle"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                aria-label={
                  showConfirmPassword
                    ? 'Hide confirm password'
                    : 'Show confirm password'
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <label className="auth-checkbox auth-terms">
            <input type="checkbox" name="terms" required />
            <span>
              I agree to the community's terms and privacy policy.
            </span>
          </label>

          <button type="submit" className="auth-submit-button">
            Create Account
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="auth-divider">
          <span>ALREADY A MEMBER?</span>
        </div>

        <p className="auth-switch-text">
          Already have an account?{' '}
          <Link to="/login" className="auth-text-link">
            Sign in
          </Link>
        </p>

        <p className="auth-footer">
          One account to discover tools, publish projects, and connect.
        </p>
      </section>
    </main>
  );
}