import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">
            <img src="/images/Logo.png" alt="Logo" />
          </a>
        </div>
        
        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          {/* Close icon inside mobile nav */}
          <li className="nav-close" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </li>
          <li><a href="/">Home</a></li>
          <li><a href="/about/">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact" className="contact-btn">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;