import { useState } from 'react';
import '../css/Nav.css';
import profileImg from '../assets/image/image.png';

const Nav = ({ currentPage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'community', label: 'Community' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav>
      <div className="nav-logo" onClick={() => onNavigate('home')}>
        Quick<span>Serve</span>
      </div>
      <div className="menu-container">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
          <div className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMenuOpen(false);
                }}
                className={currentPage === item.id ? 'active' : ''}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <img src={profileImg} alt="profile" className="profile" />
    </nav>
  );
};

export default Nav;