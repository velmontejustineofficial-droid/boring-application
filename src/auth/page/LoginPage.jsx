
import { useState } from 'react';
import { Link } from 'react-router';
import { Mail } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { SiFigma } from 'react-icons/si';

import { loginWithGithub } from '../../app/service/GithubService';
import { loginWithFigma } from '../../app/service/FigmaService';

import './css/LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // async function handleEmail(event) {
  //   event.preventDefault();
  //   setError('');

  //   try {
  //     await loginWithEmail(email);
  //     // Ipakita ang mensaheng tingnan ang email.
  //   } catch (err) {
  //     setError(err.message || 'Unable to send login email.');
  //   }
  // }

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
      setError(err.message || 'Google login failed.');
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

        <form className="login-form" onSubmit={null}>
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

          {error && <p className="login-error" role="alert">{error}</p>}

          <button type="submit" className="login-submit">
            Send <span aria-hidden="true">→</span>
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
          <button type="button" className="social-button" onClick={handleGithub}>
            <FiGithub size={19} />
            GitHub
          </button>

          <button type="button" className="social-button" onClick={handleFigma}>
            <SiFigma size={19}/>
            Figma
          </button>
        </div>
      </section>
    </main>
  );
}
