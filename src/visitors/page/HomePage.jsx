
import './css/HomePage.css';
import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigateTo = useNavigate();

  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Discover <span>Tools.</span>
          <br />
          Explore <span>Possibilities.</span>
        </h1>

        <p className="hero-description">
          Explore web applications, developer tools,
          and Java desktop applications in one place.
        </p>
    
        <button className="hero-button" onClick={()=> navigateTo('/tools')}>
          Explore Tools
        </button>
      </div>

      {/* Right side: Visual */}
      <div className="hero-visual">
        <div className="hero-card">
          <h2>Explore Our Systems</h2>
          <p>Web Applications</p>
          <p>Developer Tools</p>
          <p>Java Desktop Apps</p>
        </div>
      </div>

    </section>
  );
}
