import React from 'react';
import './FindMeBrightvision.css';
import { Link } from 'react-router-dom';
import linechart from "../assets/line.png"

const FindMeBrightvision = () => {
  return (
    <div className="container_find_fm">
      <nav className="navbar">
        <div className="logo">Bright Vision</div>
        <ul className="nav-links">
          <li><Link to="/discover" className="nav-button">Discover</Link></li>
          <li>Watchlist</li>
          <li>Create</li>
          <li><Link to="/investments" className="nav-button">Investments</Link></li>
          {/* <li className="dropdown">
            <button className="nav-button dropdown-toggle">More &#x25BC;</button>
            <div className="dropdown-content">
              <Link to="/loan" className="dropdown-link">Loan <span className="new-tag">NEW</span></Link>
              <Link to="/loan-against-mf" className="dropdown-link">Loan Against Mutual Funds</Link>
              <Link to="/Brightvision" className="dropdown-link">Find me a Bright Vision</Link>
              <Link to="/subscriptions" className="dropdown-link">Subscriptions</Link>
            </div>
          </li> */}
        </ul>
        <div className="search-bar_startup">
          <input type="text" placeholder="Search Bright Vision, mutual fund, stock or manager" />
          {/* <button>Search</button> */}
        </div>
      </nav>
     

      {/* Main Content */}
      <div className="brightvision-container_fm">
        <div className="brightvision-header_fm">
          <h2>Find Your Bright Vision Investment</h2>
          <p>Explore investment opportunities tailored to your financial goals and preferences.</p>
          <button className="choice-btn_fm">Explore Options</button>
        </div>
        <div className="brightvision-content_fm">
          <div className="investment-options_fm">
            <h3>Top Investment Options</h3>
            <div className="options_fm">
              <div className="option-item_fm">
                <button className="btn high-growth_fm">High Growth</button>
                <span>12.3%</span>
              </div>
              <div className="option-item_fm">
                <button className="btn balanced_fm">Balanced</button>
                <span>7.8%</span>
              </div>
              <div className="option-item_fm">
                <button className="btn conservative_fm">Conservative</button>
                <span>5.4%</span>
              </div>
            </div>
            <p className="note_fm">Explore these options to find the best fit for your investment strategy.</p>
          </div>
          <div className="chart-section_fm">
            <h3>Performance Analysis</h3>
            <img src={linechart} alt="line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindMeBrightvision;