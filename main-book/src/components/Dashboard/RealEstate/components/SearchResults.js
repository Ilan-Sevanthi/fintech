import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // Import the Header component
import TabNav from './TabNav'; // Import the TabNav component
import './SearchResults.css'; // Ensure this file exists in the same directory

const SearchResults = ({ toggleSidebar }) => {
  const [sortOption, setSortOption] = useState('Relevance');
  const navigate = useNavigate();
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <><Header toggleSidebar={toggleSidebar} /> {/* Include Header */}
    <TabNav /> {/* Include TabNav */}
    <div className="search-results-page">
      {/* Sidebar for Filters */}
      <aside className="filters-sidebar">
        <div className="filter-section">
          <h4>Hide already seen</h4>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="filter-section">
          <h4>Verified properties</h4>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="filter-section">
          <h4>Budget</h4>
          <input type="range" min="0" max="100000000" step="10000" className="slider-range" />
          <div className="budget-inputs">
            <input type="number" placeholder="Min Budget" />
            <input type="number" placeholder="Max Budget" />
          </div>
        </div>
        <div className="filter-section">
          <h4>Type of property</h4>
          <button>+ Residential Land</button>
          <button>+ Independent House/Villa</button>
          <button>+ Residential Apartment</button>
        </div>
      </aside>

      {/* Main content for property listings */}
      <main className="property-listings">
        <div className="results-info">
          <h2>7315 results | Property in Coimbatore for Sale</h2>
          <div className="sort-section">
            <label htmlFor="sort-by">Sort by:</label>
            <select id="sort-by" value={sortOption} onChange={handleSortChange}>
              <option value="Relevance">Relevance</option>
              <option value="PriceLowToHigh">Price: Low to High</option>
              <option value="PriceHighToLow">Price: High to Low</option>
              <option value="NewestFirst">Newest First</option>
            </select>
          </div>
        </div>

        {/* Property card 1 */}
        <div className="property-card">
          <img src="/images/Property 1.png" alt="Property 1" />
          <div className="property-details">
            <h3>Pappampatti, Coimbatore</h3>
            <p>₹20 Lac | 5 acres | Plot/Land</p>
            <p>Highlights: Valarmathi school within 500m</p>
            <div className="badges">
              <span className="badge verified">Verified</span>
              <span className="badge new-launch">New Launch</span>
            </div>
            <button>View Number</button>
          </div>
        </div>

        {/* Property card 2 */}
        <div className="property-card">
          <img src="/images/property.png" alt="Property 2" />
          <div className="property-details">
            <h3>Bharati Ashraya, Thudiyalur</h3>
            <p>₹68 Lac | 20 acres | Plot/Land</p>
            <p>Highlights: Approved residential project</p>
            <div className="badges">
              <span className="badge ready-move">Ready to Move</span>
              <span className="badge verified">Verified</span>
            </div>
            <button>View Number</button>
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="page-button">1</button>
          <button className="page-button">2</button>
          <button className="page-button">3</button>
          <span>...</span>
          <button className="page-button">Next</button>
        </div>

        {/* Projects in High Demand Section */}
        <div className="high-demand-section">
          <h2>Projects in High Demand</h2>
          <div className="projects">
            <div className="project-card">
              <img src="/images/SkylineLuxuryApartments.png" alt="High Demand Project 1" />
              <h3>Skyline Luxury Apartments</h3>
              <p>₹1.2 Crore | 4 BHK</p>
              <p>Location: Avinashi Road, Coimbatore</p>
            </div>
            <div className="project-card">
              <img src="/images/Green Acres Villas.png" alt="High Demand Project 2" />
              <h3>Green Acres Villas</h3>
              <p>₹85 Lac | 3 BHK</p>
              <p>Location: Saravanampatti, Coimbatore</p>
            </div>
            <div className="project-card">
              <img src="/images/Prestige Lakeview Homes.png" alt="High Demand Project 3" />
              <h3>Prestige Lakeview Homes</h3>
              <p>₹75 Lac | 2 BHK</p>
              <p>Location: Race Course Road, Coimbatore</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
    
  );
};

export default SearchResults;
