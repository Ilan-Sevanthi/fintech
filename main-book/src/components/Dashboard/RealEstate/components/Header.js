import React from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <button className="menu-button" onClick={toggleSidebar}>
        <FaBars className="icon" />
      </button>
      <nav className="nav1">
        <ul>
          <li><a href="/#buyers">For Buyers</a></li>
          <li><a href="/#tenants">For Tenants</a></li>
          <li><a href="/#owners">For Owners</a></li>
          <li><a href="/#builders">For Dealers / Builders</a></li>
          <li><a href="/#insights">Insights</a></li>
        </ul>
      </nav>
      <button className="post-property-btn">Post Property</button>
    </div>
  );
};

export default Header;
