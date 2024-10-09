
import React from 'react';
import { Link } from 'react-router-dom';
import './Startups.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      
      <nav className="navbar">
        <div className="logo">Bright Vision</div>
        <ul className="nav-links">
          <li><Link to="/discover" className="nav-button">Discover</Link></li>
          <li>Watchlist</li>
          <li>Create</li>
          <li><Link to="/investments" className="nav-button">Investments</Link></li>
          <li className="dropdown-startup">
      <button className="nav-button-dropdown-toggle-startup">More &#x25BC;</button>
      <div className="dropdown-content-startup">
        <Link to="/loan" className="dropdown-link-startup">
          Loan <span className="new-tag-startup">NEW</span>
        </Link>
        <Link to="/loan-against-mf" className="dropdown-link-startup">Loan Against Mutual Funds</Link>
        <Link to="/Brightvision" className="dropdown-link-startup">Find me a Bright Vision</Link>
        <Link to="/subscriptions" className="dropdown-link-startup">Subscriptions</Link>
      </div>
    </li>
        </ul>
        {/* <div className="search-bar_startup">
          <input type="text" className='bar-input' placeholder="Search Bright Vision, mutual fund, stock or manager" />
          <button>Search</button>
        </div> */}
      </nav>

      <div className="container_startup">
        {/* Sidebar Filters */}
        <aside className="sidebar_startup">
          <div className="filter_startup">
            <h3>Subscription Type</h3>
            <label><input type="checkbox" defaultChecked /> Show all</label><br />
            <label><input type="checkbox" /> Free access</label><br />
            <label><input type="checkbox" /> Fee based</label>
          </div>
          <div className="filter_startup">
            <h3>Investment Amount</h3>
            <label><input type="radio" name="amount" defaultChecked /> Any</label><br />
            <label><input type="radio" name="amount" /> Under ₹ 5,000</label><br />
            <label><input type="radio" name="amount" /> Under ₹ 25,000</label><br />
            <label><input type="radio" name="amount" /> Under ₹ 50,000</label>
          </div>
          <div className="filter_startup">
            <h3>Volatility</h3>
            <label><input type="radio" name="volatility" defaultChecked /> Low</label><br />
            <label><input type="radio" name="volatility" /> Medium</label><br />
            <label><input type="radio" name="volatility" /> High</label>
          </div>
          <div className="filter_startup">
            <h3>Launch Date</h3>
            <label><input type="checkbox" /> Include new smallcases</label>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content_startup">
          <div className="investment-card_startup">
            <div className="investment-details">
              
              <h3>All Weather Investing <span className="free-access">Free Access</span></h3>
              <p>One investment for all market conditions. Works for everyone</p>
              <p>by Windmill Capital</p>
            </div>
            <div className="investment-stats">
              <p>Min. Amount: ₹ 3,126</p>
              <p>3Y CAGR: 13.96%</p>
              <p><span className="low-volatility">Low Volatility</span></p>
            </div>
          </div>

          <div className="investment-card_startup">
            <div className="investment-details">
              <h3>Top 100 Stocks <span className="free-access">Free Access</span></h3>
              <p>India's most powerful companies in one portfolio. Solid stability</p>
              <p>by Windmill Capital</p>
            </div>
            <div className="investment-stats">
              <p>Min. Amount: ₹ 2,753</p>
              <p>3Y CAGR: 17.33%</p>
              <p><span className="medium-volatility">Med. Volatility</span></p>
            </div>
          </div>

          <div className="investment-card_startup">
            <div className="investment-details">
              <h3>Equity & Gold <span className="free-access">Free Access</span></h3>
              <p>Create wealth with equities, stay protected with Gold. The sweet spot</p>
              <p>by Windmill Capital</p>
            </div>
            <div className="investment-stats">
              <p>Min. Amount: ₹ 401</p>
              <p>3Y CAGR: 15.55%</p>
              <p><span className="low-volatility">Low Volatility</span></p>
            </div>
          </div>

          <div className="investment-card_startup">
            <div className="investment-details">
              <h3>CANSLIM-esque</h3>
              <p>Efficiently managed growing companies experiencing positive momentum</p>
              <p>by Windmill Capital</p>
            </div>
            <div className="investment-stats">
              <p>Min. Amount: ₹ 1,13,114</p>
              <p>3Y CAGR: 31.13%</p>
              <p><span className="high-volatility">High Volatility</span></p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;