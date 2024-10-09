// src/components/SearchSection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchSection.css';

const SearchSection = ({ activeTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (activeTab === 'Buy') {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    } else {
      // Handle other tabs if needed
      console.log('Search functionality for this tab is not implemented.');
    }
  };

  const getPlaceholder = () => {
    switch (activeTab) {
      case 'Buy':
        return 'Search "Flats for sale in sector 77 Noida"';
      case 'Rent':
        return 'Search "Flats for rent in sector 77 Noida"';
      case 'New Launch':
        return 'Search "New projects in Noida"';
      case 'PG / Co-living':
        return 'Search "PG and co-living spaces"';
      case 'Commercial':
        return 'Search "Commercial properties"';
      case 'Plots/Land':
        return 'Search "Plots and land"';
      case 'Projects':
        return 'Search "Ongoing projects"';
      default:
        return 'Search...';
    }
  };

  return (
    <div className="search-section">
      <input
        type="text"
        className="search-bar"
        placeholder={getPlaceholder()}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchSection;
