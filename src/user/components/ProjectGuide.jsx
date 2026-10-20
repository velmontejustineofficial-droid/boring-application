
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BookOpen } from 'lucide-react';

import './css/ProjectGuide.css';

export default function ProjectGuide() {
  const [readme, setReadme] = useState('');
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const owner = params.get('owner');
    const repo = params.get('repo');
    const path = params.get('path') || 'README.md';
    const branch = params.get('branch') || 'main';

    if (!owner || !repo) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus('invalid');
      return;
    }

    const url =
      `https://raw.githubusercontent.com/` +
      `${encodeURIComponent(owner)}/` +
      `${encodeURIComponent(repo)}/` +
      `${encodeURIComponent(branch)}/` +
      path.split('/').map(encodeURIComponent).join('/');

    const controller = new AbortController();

    async function loadReadme() {
      try {
        setStatus('loading');

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          setStatus(response.status === 404 ? 'missing' : 'error');
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
        }
      }
    }

    loadReadme();

    return () => controller.abort();
  }, []);

  const params = new URLSearchParams(window.location.search);
  const owner = params.get('owner');
  const repo = params.get('repo');

  const githubUrl =
    owner && repo
      ? `https://github.com/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`
      : 'https://github.com';

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
          {/* <BsGithub size={18} /> */}

          View Repository
        </a>
      </header>

      <section className="guide-content">
        {status === 'loading' && (
          <p className="guide-message">Loading project documentation...</p>
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
              This project does not have a README at the specified path
              and branch. You can check the repository for other
              documentation files.
            </p>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              Open GitHub Repository
            </a>
          </div>
        )}

        {(status === 'error' || status === 'invalid') && (
          <div className="guide-empty">
            {/* <AlertCircle size={40} /> */}
            <h2>
              {status === 'invalid'
                ? 'Invalid project link'
                : 'Unable to load guide'}
            </h2>
            <p>
              Check the GitHub repository, branch, README path, and
              internet connection. The repository may also be private.
            </p>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              Check GitHub
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
