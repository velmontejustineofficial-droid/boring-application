
import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import { Mail, LogOut, UserRound } from 'lucide-react';

import './css/ProfilePage.css';
import { logoutSupabase } from '../../app/service/SupabaseService';

export default function UserProfile() {
  const { user } = useOutletContext();
  const navigate = useNavigate();

  const metadata = user?.user_metadata ?? {};

  const displayName =
    metadata.full_name ||
    metadata.name ||
    metadata.user_name ||
    metadata.preferred_username ||
    'User';

  const displayUsername =
    metadata.preferred_username ||
    metadata.user_name ||
    metadata.user_name ||
    user?.email?.split('@')[0] ||
    'user';

  const avatarUrl = metadata.avatar_url || metadata.picture || '';

  const [profile, setProfile] = useState(() => ({
    name: displayName,
    username: displayUsername,
    email: user?.email || '',
    bio: metadata.bio
  }));

  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState('');

  function updateField(event) {
    const { name, value } = event.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleLogout() {
    setIsLoggingOut(true);
    setLogoutError('');

    try {
      await logoutSupabase();
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Logout failed:', error);
      setLogoutError(error.message || 'Unable to log out. Please try again.');
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <section className="user-page">
      <div className="user-page-heading">
        <div>
          <h1>My Profile</h1>
          <p>your personal information and account.</p>
        </div>
      </div>

      {logoutError && (
        <div className="profile-error" role="alert">
          {logoutError}
        </div>
      )}

      <div className="profile-layout">
        <aside className="profile-summary page-panel">
          <div className="profile-avatar">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={`${displayName}'s avatar`}
                referrerPolicy="no-referrer"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <UserRound size={42} aria-hidden="true" />
            )}
          </div>

          <h2>{displayName}</h2>

          <p className="profile-username">
            @{displayUsername}
          </p>

          <span className="profile-role">User</span>

          <p className="profile-bio">{profile.bio}</p>

          <div className="profile-email">
            <Mail size={17} />
            <span>{user?.email || 'No email available'}</span>
          </div>

          <div className="profile-actions">
            <button
              className="profile-logout-button"
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
            >
              <LogOut size={16} />
              {isLoggingOut ? 'Logging out...' : 'Log Out'}
            </button>
          </div>
        </aside>

        <div
          className="profile-form page-panel"
        >
          <h2>Personal Information</h2>

          <p className="panel-description">
            Update your profile details below.
          </p>

          <label className="form-field">
            Full Name
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={updateField}
              autoComplete="name"
              required
              disabled
            />
          </label>

          <label className="form-field">
            Username
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={updateField}
              autoComplete="username"
              required
              disabled
            />
          </label>

          <label className="form-field">
            Email Address
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={updateField}
              autoComplete="email"
              disabled
            />
          </label>
        </div>
      </div>
    </section>
  );
}
