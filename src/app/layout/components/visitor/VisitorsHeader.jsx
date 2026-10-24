import './css/VisitorsHeader.css';
import { NavLink } from 'react-router';

export default function VisitorsHeader({ title, logo}) {
  return (
    <header className='vistors-header'>
        <NavLink to="/" className='vistors-logo'>
            <img src={logo} alt="" />
            <h1>{title}</h1>
        </NavLink>
        <nav className='vistors-navigation'>
        <NavLink 
            to="home" 
            className={({ isActive }) => isActive ? 'active-link': 'none'}>
            home
          </NavLink>
          <NavLink 
            to="about" 
            className={({ isActive }) => isActive ? 'active-link': 'none'}>
            about
          </NavLink>
          <NavLink 
            to="tools" 
            className={({ isActive }) => isActive ? 'active-link': 'none'}>
            tools
          </NavLink>
          <NavLink 
            to="projects" 
            className={({ isActive }) => isActive ? 'active-link': 'none'}>
            projects
          </NavLink>
          <NavLink 
            to="blog" 
            className={({ isActive }) => isActive ? 'active-link': 'none'}>
            blog
          </NavLink>
        </nav>
    </header>
  )
}
