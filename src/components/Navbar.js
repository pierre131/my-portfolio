import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => document.body.classList.toggle('dark-mode');

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>☰</div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#about">👤 About</a>
        <a href="#projects">🚀 Projects</a>
        <a href="#contact">📬 Contact</a>
        <button
          onClick={toggleDarkMode}
          style={{
            border: 'none',
            background: '#e2e8f0',
            color: '#1e3a8a',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
          title="Toggle dark mode"
        >
          🌙
        </button>
      </div>
    </nav>
  );
}