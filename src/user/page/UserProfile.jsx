
import { useState } from 'react';
import { UserRound, Mail, Save } from 'lucide-react';

import './css/UserPages.css';

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    username: 'johndoe',
    bio: 'Passionate about technology and always exploring new tools and systems.',
  });

  function updateField(event) {
    const { name, value } = event.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Profile updated in this demo.');
  }

  return (
    <section className="user-page">
      <div className="user-page-heading">
        <div>
          <h1>My Profile</h1>
          <p>Manage your personal information.</p>
        </div>
      </div>

      <div className="profile-layout">
        <aside className="profile-summary page-panel">
          <div className="profile-avatar">
            <UserRound size={48} />
          </div>

          <h2>{profile.name || 'Your Name'}</h2>
          <p className="profile-username">@{profile.username}</p>

          <span className="profile-role">User</span>

          <p className="profile-bio">{profile.bio}</p>

          <div className="profile-email">
            <Mail size={17} />
            <span>{profile.email}</span>
          </div>
        </aside>

        <form className="profile-form page-panel" onSubmit={handleSubmit}>
          <h2>Personal Information</h2>
          <p className="panel-description">
            Update your account details below.
          </p>

          <label className="form-field">
            Full Name
            <input
              name="name"
              value={profile.name}
              onChange={updateField}
              required
            />
          </label>

          <label className="form-field">
            Username
            <input
              name="username"
              value={profile.username}
              onChange={updateField}
              required
            />
          </label>

          <label className="form-field">
            Email Address
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={updateField}
              required
            />
          </label>

          <label className="form-field">
            About Me
            <textarea
              name="bio"
              rows={4}
              value={profile.bio}
              onChange={updateField}
            />
          </label>

          <button className="page-primary-button" type="submit">
            <Save size={17} />
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
}
