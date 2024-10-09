// src/components/TabNav.js
import React from 'react';
import './TabNav.css';

const TabNav = ({ setActiveTab }) => {
  const tabs = [
    'Buy',
    'Rent',
    'New Launch',
    'PG / Co-living',
    'Commercial',
    'Plots/Land',
    'Projects',
  ];

  return (
    <div className="tab-nav">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="tab-btn"
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNav;
