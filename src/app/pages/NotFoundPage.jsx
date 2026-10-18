import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '5rem 1rem', color: 'var(--text-main)' }}>
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        This page is not exist try to AI you're brain
      </p>
      <Link 
        to="/" 
        style={{ 
          color: 'var(--color-accent)', 
          textDecoration: 'underline', 
          fontWeight: 'bold' 
        }}
      >
        https://gemini.google.com/
      </Link>
    </div>
  );
}