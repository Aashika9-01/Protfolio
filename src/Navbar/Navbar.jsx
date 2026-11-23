import React, { useState } from 'react';
import './Navbar.css';
import menu from '../images/menu-1.jpg';

const Navbar = ({ theme, toggleTheme, activePage, setActivePage }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleNavClick = (page) => {
    if (setActivePage) {
      setActivePage(page);
    }
    setShowMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div 
        className="nav-logo" 
        onClick={() => handleNavClick('home')} 
        style={{ cursor: 'pointer' }}
      >
        <h2>
          Aashika<span>{"</>"}</span>
        </h2>
      </div>

      <div className='nav-menu'>
        <span
          className={`nav-menuListItem ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick('home')}
        >
          Home
        </span>
        <span
          className={`nav-menuListItem ${activePage === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
        >
          About Me
        </span>
        <span
          className={`nav-menuListItem ${activePage === 'projects' ? 'active' : ''}`}
          onClick={() => handleNavClick('projects')}
        >
          Projects
        </span>
        <span
          className={`nav-menuListItem ${activePage === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavClick('contact')}
        >
          Contact Me
        </span>
      </div>

      <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle Theme">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      <img 
        src={menu} 
        alt="Menu" 
        className='mobMenu' 
        onClick={() => setShowMenu(!showMenu)} 
      />

      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <span
          className={`ListItem ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick('home')}
        >
          Home
        </span>
        <span
          className={`ListItem ${activePage === 'about' ? 'active' : ''}`}
          onClick={() => handleNavClick('about')}
        >
          About Me
        </span>
        <span
          className={`ListItem ${activePage === 'projects' ? 'active' : ''}`}
          onClick={() => handleNavClick('projects')}
        >
          Projects
        </span>
        <span
          className={`ListItem ${activePage === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavClick('contact')}
        >
          Contact Me
        </span>
      </div>
    </nav>
  );
};

export default Navbar;