import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/reports">Reports</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
