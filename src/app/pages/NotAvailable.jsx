import { Clock3, BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import './css/NotAvailable.css';

export default function NotAvailable() {
  return (
    <main className="coming-soon-page">
      <div className="coming-soon-content">
        <div className="coming-soon-icon">
          <BookOpen size={36} />
        </div>

        <span className="coming-soon-label">
          <span className="status-dot" />
          SOMETHING NEW IS COMING
        </span>

        <h1>
          The Blog Is
          <span> Coming Soon.</span>
        </h1>

        <p className="coming-soon-description">
          We're preparing a space where developers can share
          tutorials, development stories, useful tips, and
          experiences from building their projects.
        </p>

        <div className="coming-soon-status">
          <Clock3 size={18} />
          <span>Currently in development</span>
        </div>

        <Link to="/" className="coming-soon-button">
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <p className="coming-soon-footer">
          Good things take time. Stay tuned.
        </p>
      </div>
    </main>
  );
}