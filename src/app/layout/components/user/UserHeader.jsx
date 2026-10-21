
import { NavLink } from 'react-router';
import { Bell, UserRound } from 'lucide-react';

import './css/UserHeader.css';

export default function UserHeader() {
  return (
    <header className="user-header">
      <div className="user-header-brand">
        <h1>
          Boring<span>.</span>
        </h1>
      </div>

      <nav className="user-header-nav">
        <NavLink
          to="/notifications"
          className="user-header-link"
          aria-label="Notifications"
        >
          <Bell size={20} />
    
        </NavLink>

        <NavLink
          to="/user/profile"
          className="user-header-link"
          aria-label="Profile"
        >
          <UserRound size={20} />
          
        </NavLink>
      </nav>
    </header>
  );
}
