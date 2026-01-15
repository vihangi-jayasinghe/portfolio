import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
        </div>
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('skills')}>Skills</a>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
        <div className="header-actions">
          <button 
            className="theme-toggle" 
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
