// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <a href="#about">About Me</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
