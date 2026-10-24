
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BookOpen } from 'lucide-react';

import './ProjectGuide.css';

export default function ProjectGuide() {
  const { search } = useLocation();

  const [readme, setReadme] = useState('');
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');

  const params = new URLSearchParams(search);
  const owner = params.get('owner');
  const repo = params.get('repo');
  const path = params.get('path') || 'README.md';
  const branch = params.get('branch') || 'main';

  const githubUrl =
    owner && repo
      ? `https://github.com/${owner}/${repo}`
      : 'https://github.com';

  useEffect(() => {
    const controller = new AbortController();

    async function loadReadme() {
      setReadme('');
      setErrorMessage('');

      if (!owner || !repo) {
        setStatus('invalid');
        return;
      }

      setStatus('loading');

      const url =
        `https://raw.githubusercontent.com/${encodeURIComponent(owner)}/` +
        `${encodeURIComponent(repo)}/` +
        `${encodeURIComponent(branch)}/` +
        path.split('/').map(encodeURIComponent).join('/');

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          setStatus(response.status === 404 ? 'missing' : 'error');
          setErrorMessage(
            `GitHub returned ${response.status} ${response.statusText}.`
          );
          return;
        }

        const markdown = await response.text();

        if (!markdown.trim()) {
          setStatus('missing');
          return;
        }

        setReadme(markdown);
        setStatus('success');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setStatus('error');
          setErrorMessage(error.message);
        }
      }
    }

    loadReadme();

    return () => controller.abort();
  }, [owner, repo, path, branch]);

  return (
    <main className="project-guide">
      <header className="guide-header">
        <div className="guide-brand">
          <BookOpen size={24} />
          <div>
            <h1>Project Guide</h1>
            <p>{repo || 'Documentation'}</p>
          </div>
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="guide-github-link"
        >
          View Repository
        </a>
      </header>

      <section className="guide-content">
        {status === 'loading' && (
          <p className="guide-message">
            Loading project documentation...
          </p>
        )}

        {status === 'success' && (
          <article className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {readme}
            </ReactMarkdown>
          </article>
        )}

        {status === 'missing' && (
          <div className="guide-empty">
            <BookOpen size={40} />
            <h2>No README available</h2>
            <p>
              Hindi mahanap ang README sa branch at path na tinukoy.
              Tingnan kung tama ang filename at branch.
            </p>
            <p>{errorMessage}</p>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              Open GitHub Repository
            </a>
          </div>
        )}

        {(status === 'error' || status === 'invalid') && (
          <div className="guide-empty">
            <h2>
              {status === 'invalid'
                ? 'Invalid project link'
                : 'Unable to load guide'}
            </h2>
            <p>
              {status === 'invalid'
                ? 'Kulang ang owner o repo sa URL.'
                : 'Hindi ma-load ang README. Tingnan ang internet connection at GitHub repository.'}
            </p>
            {errorMessage && <p>{errorMessage}</p>}
            <a href={githubUrl} target="_blank" rel="noreferrer">
              Check GitHub
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
