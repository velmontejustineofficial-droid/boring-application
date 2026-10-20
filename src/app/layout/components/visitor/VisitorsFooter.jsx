import './css/VisitorsFooter.css';
import { NavLink } from 'react-router';
import { FaServicestack, FaEnvelope, FaFileContract, FaShieldAlt } from 'react-icons/fa';

export default function VisitorsFooter() {
  const quickLinks = [
    { name: "Services", href: "/services", icon: <FaServicestack /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  const handlePdfClick = (url) => {
    window.open(url, '_blank');
  };
  const legalRights = [
    { 
      name: "Privacy Policy", 
      href: "/privacy", 
      pdfUrl: "https://example.com/privacy.pdf",
      icon: <FaShieldAlt /> 
    },
    { 
      name: "Terms of Service", 
      href: "/terms", 
      pdfUrl: "https://example.com/terms.pdf",
      icon: <FaFileContract /> 
    },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Column 1: Brand / About */}
        <div className="footer-col">
          <h3 className='app-title'>Boring Tools</h3>
          <p>Discover and explore a collection of useful tools, web applications, desktop software, and creative projects. 
            Built for anyone looking for helpful resources, new ideas, and practical solutions.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className='quick-links-item'>
            {quickLinks.map((link, index)=> (
              <li key={index}>
                <NavLink to={link.href } className="link-with-icon">
                  {link.icon}
                  <span>{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Email: support@example.com</p>
          <p>Phone: +63 900 000 0000</p>
        </div>


        {/* Bottom Bar for Copyright */}
        <div className="footer-col">
          <p className='legal-rights'>&copy; {new Date().getFullYear()} BoringTools. All rights reserved.</p>
          <div className="legal-links">
            {legalRights.map((item, index) => (
              <span key={index}>
                  <NavLink 
                    to={item.href} 
                    className="link-with-icon"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePdfClick(item.pdfUrl);
                    }}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}