import React from 'react';
import '../Styling/Header.css';
import LanguageSelector from './LanguageButtons';

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/FAQ">FAQ</a>
          </li>
          <LanguageSelector/>
        </ul>
      </nav>
      <div className="logo">
        <img src="./mslogo.png" alt="Meester Stoffeerders Logo" />
      </div>
    </header>
  );
};

export default Header;
