
import { useState } from 'react';
import { Link } from 'react-router';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

import './css/LoginPage.css';

export default function LoginPage({login}) {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    try {
      // This expects login() to be connected to your
      // actual authentication service.
      await login({ email, password });
    } catch (err) {
      setError(err.message || 'Unable to sign in. Please try again.');
    }
  }

  return (
    <main className="login-page">
      <section className="login-container">
        <Link to="/" className="login-brand">
          <div className="login-brand-logo">JB</div>
          <h1>
            Bor<span>ing.</span>
          </h1>
          <p>Build · Share · Grow</p>
        </Link>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-input">
            <Mail size={19} />
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              autoComplete="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label className="login-input">
            <Lock size={19} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              aria-label="Password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((previous) => !previous)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </label>

          {error && <p className="login-error" role="alert">{error}</p>}

          <div className="login-options">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button type="submit" className="login-submit">
            Sign In <span aria-hidden="true">→</span>
          </button>

          <Link to="/visitors" className="visitor-button">
            Continue as Visitor
          </Link>
        </form>

        <div className="login-divider">
          <span />
          <p>or continue with</p>
          <span />
        </div>

        <div className="login-socials">
          <button type="button" className="social-button" onClick={handleSubmit}>
            <FiGithub size={19} />
            GitHub
          </button>

          <button type="button" className="social-button">
            <span className="google-letter">G</span>
            Google
          </button>
        </div>
      </section>
    </main>
  );
}
