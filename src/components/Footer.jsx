import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/Logo.png" alt="Logo" />
          <p>© 2025 PhiGrid Elite EdTech, Inc.</p>
          <p>All rights reserved.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Webinars</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">Mission</a></li>
            <li><a href="/about">Team</a></li>
            <li><a href="/about">Careers</a></li>
            <li><a href="/about">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
