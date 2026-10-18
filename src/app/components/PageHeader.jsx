import './css/PageHeader.css';

export default function PageHeader({ title, subtitle, icon }) {
  return (
    <div className="page-header-container">
      <div className="page-header-title-wrapper">
        {icon && <span className="header-icon">{icon}</span>}
        <h1>{title}</h1>
      </div>
      {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
    </div>
  );
}