// src/components/InfoSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InfoSection.css';

// Import images explicitly
import cbeImage from './images/cbe.png';
import chennaiImage from './images/chennai.png';
import bangImage from './images/bang.png';
import mumImage from './images/mum.png';
import cocImage from './images/coc.png';

// Array of cards with the imported images
const cards = [
  { title: 'Coimbatore', image: cbeImage },
  { title: 'Chennai', image: chennaiImage },
  { title: 'Bangalore', image: bangImage },
  { title: 'Mumbai', image: mumImage },
  { title: 'Cochin', image: cocImage }
];

const InfoSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    // Navigate to the SearchResults page with query based on card title
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
    <div className="info-section">
      {cards.map((card) => (
        <div key={card.title} className="info-card" onClick={() => handleCardClick(card.title)}>
          <img src={card.image} alt={card.title} />
          <div className="card-title">{card.title}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
