
import { useState } from 'react';
import { Bell, Monitor, ShieldCheck, Save } from 'lucide-react';

import './css/UserPages.css';

export default function UserSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    systemUpdates: true,
    favoriteUpdates: false,
    compactCards: false,
  });

  function toggleSetting(name) {
    setSettings((current) => ({
      ...current,
      [name]: !current[name],
    }));
  }

  function handleSave() {
    alert('Settings saved in this demo.');
  }

  return (
    <section className="user-page">
      <div className="user-page-heading">
        <div>
          <h1>Settings</h1>
          <p>Customize your JustineBon experience.</p>
        </div>
      </div>

      <div className="settings-list">
        <section className="page-panel settings-section">
          <div className="settings-section-heading">
            <Bell size={22} />
            <div>
              <h2>Notifications</h2>
              <p>Choose which updates you want to receive.</p>
            </div>
          </div>

          <SettingToggle
            title="Email notifications"
            description="Receive important updates by email."
            checked={settings.emailNotifications}
            onChange={() => toggleSetting('emailNotifications')}
          />

          <SettingToggle
            title="System updates"
            description="Get notified when new systems are available."
            checked={settings.systemUpdates}
            onChange={() => toggleSetting('systemUpdates')}
          />

          <SettingToggle
            title="Favorite updates"
            description="Receive updates about your favorite systems."
            checked={settings.favoriteUpdates}
            onChange={() => toggleSetting('favoriteUpdates')}
          />
        </section>

        <section className="page-panel settings-section">
          <div className="settings-section-heading">
            <Monitor size={22} />
            <div>
              <h2>Appearance</h2>
              <p>Adjust how systems appear on your dashboard.</p>
            </div>
          </div>

          <SettingToggle
            title="Compact system cards"
            description="Use a more compact card layout."
            checked={settings.compactCards}
            onChange={() => toggleSetting('compactCards')}
          />
        </section>

        <section className="page-panel settings-section">
          <div className="settings-section-heading">
            <ShieldCheck size={22} />
            <div>
              <h2>Account & Security</h2>
              <p>Manage your account security preferences.</p>
            </div>
          </div>

          <div className="settings-security-note">
            Password changes and account security should be connected
            to your authentication backend.
          </div>
        </section>

        <button
          type="button"
          className="page-primary-button settings-save"
          onClick={handleSave}
        >
          <Save size={17} />
          Save Settings
        </button>
      </div>
    </section>
  );
}

function SettingToggle({ title, description, checked, onChange }) {
  return (
    <div className="setting-row">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        className={`setting-switch ${checked ? 'enabled' : ''}`}
        onClick={onChange}
      >
        <span />
      </button>
    </div>
  );
}
