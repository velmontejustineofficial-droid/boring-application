
import { useState } from 'react';
import { useOutletContext } from "react-router";
import { Mail, Save } from 'lucide-react';
import './css/UserPages.css';

import useAuth from '../../app/service/AuthSevice';

export default function UserProfile() {
  const { user } = useOutletContext();
  const { logout } = useAuth();

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
            <img src={user.user_metadata.avatar_url} alt="" />
          </div>

          <h2>{user.user_metadata.name}</h2>
          <p className="profile-username">@{user.user_metadata.preferred_username}</p>

          <span className="profile-role">User</span>

          <p className="profile-bio">{profile.bio}</p>

          <div className="profile-email">
            <Mail size={17} />
            <span>{user.email}</span>
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
              value={profile.bio + user.token}
              onChange={updateField}
            />
          </label>

          <button className="page-primary-button" type="submit">
            <Save size={17} />
            Save Changes
          </button>
        </form>
        <a href="/visitors">
          visit other project
        </a>
        <button onClick={
          ()=>{
              logout();
          }
        }>lag out</button>
      </div>
    </section>
  );
}
