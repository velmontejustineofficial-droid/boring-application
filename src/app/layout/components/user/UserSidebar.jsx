
import { NavLink } from 'react-router';
import {
  LayoutDashboard,
  Grid2X2,
  UserRound,
  Settings,
  Code2
} from 'lucide-react';

import './css/UserSidebar.css';

const sidebarLinks = [
  {
    name: 'Dashboard',
    path: '/user/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'My Systems',
    path: '/user/systems',
    icon: Grid2X2,
  },
  {
    name: 'Profile',
    path: '/user/profile',
    icon: UserRound,
  },
  {
    name: 'Settings',
    path: '/user/settings',
    icon: Settings,
  },
];

export default function UserSidebar() {
  return (
    <aside className="user-sidebar">
      <nav className="user-sidebar-nav" aria-label="User navigation">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={({ isActive }) =>
                `user-sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={22} strokeWidth={2} />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="user-sidebar-info">
        <Code2 size={22} />

        <h3>Build. Share. Grow.</h3>

        <p>
          Explore and use the systems
          that make life easier.
        </p>
      </div>
    </aside>
  );
}
