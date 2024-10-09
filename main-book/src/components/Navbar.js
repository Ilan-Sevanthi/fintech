

import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaUniversity, FaBuilding, FaRocket, FaBars } from 'react-icons/fa';
import './Navebar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <button className="menu-button" onClick={toggleSidebar}>
        <FaBars className="icon" />
      </button>
      {/* <Link className="navbar-item" to="/dashboard/stocks">
        <FaChartLine className="icon" /> Stocks (Groww)
      </Link>
      <Link className="navbar-item" to="/dashboard/mutual-funds">
        <FaUniversity className="icon" /> Mutual Funds (Groww)
      </Link>
      <Link className="navbar-item" to="/dashboard/real-estate">
        <FaBuilding className="icon" /> Real Estate (99 Acres)
      </Link>
      <Link className="navbar-item" to="/dashboard/startups">
        <FaRocket className="icon" /> Startups (Y Combinator)
      </Link> */}
    </div>
  );
};

export default Navbar;
