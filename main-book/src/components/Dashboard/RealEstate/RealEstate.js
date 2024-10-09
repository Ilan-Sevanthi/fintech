import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header'; // Path to Header
import TabNav from './components/TabNav'; // Path to TabNav
import SearchSection from './components/SearchSection'; // Path to SearchSection
import InfoSection from './components/InfoSection'; // Path to InfoSection
import './realEstate.css'; // Ensure this file exists in the same directory

const RealEstate = ({ toggleSidebar }) => {
  const [activeTab, setActiveTab] = useState('Buy');
  const navigate = useNavigate();

  // Function to handle card clicks and navigate to SearchResults
  const handleCardClick = (title) => {
    const queryMap = {
      'Coimbatore': 'coimbatore',
      'Chennai': 'chennai',
      'Bangalore': 'bangalore',
      'Mumbai': 'mumbai',
      'Cochin': 'cochin'
    };

    const query = queryMap[title] || 'search';
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="RealEstate">
      <Header toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar to Header */}
      <TabNav setActiveTab={setActiveTab} />
      <SearchSection activeTab={activeTab} />
      <InfoSection onCardClick={handleCardClick} /> {/* Pass handleCardClick to InfoSection */}
    </div>
  );
};

export default RealEstate;
