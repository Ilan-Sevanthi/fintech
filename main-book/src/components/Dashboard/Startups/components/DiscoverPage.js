import React from 'react';
import './DiscoverPage.css';
import { Link } from 'react-router-dom';
const DiscoverPage = () => {
    return (
        <div className="homepage">
           {/* Navigation Bar */}
      {/* <nav className="navbar">
        <div className="logo">Bright Vision</div>
        <ul className="nav-links">
          <li><Link to="/discover" className="nav-button">Discover</Link></li>
          <li>Watchlist</li>
          <li>Create</li>
          <li><Link to="/investments" className="nav-button">Investments</Link></li>
          <li className="dropdown">
            <button className="nav-button dropdown-toggle">More &#x25BC;</button>
            <div className="dropdown-content">
              <Link to="/loan" className="dropdown-link">Loan <span className="new-tag">NEW</span></Link>
              <Link to="/loan-against-mf" className="dropdown-link">Loan Against Mutual Funds</Link>
              <Link to="/Brightvision" className="dropdown-link">Find me a Bright Vision</Link>
              <Link to="/subscriptions" className="dropdown-link">Subscriptions</Link>
            </div>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search Bright Vision, mutual fund, stock or manager" />
          <button>Search</button>
        </div>
      </nav> */}
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

  <div className="search-bar_startup">
    <input type="text" placeholder="Search Bright Vision, mutual fund, stock or manager" />
    {/* <button>Search</button> */}
  </div>
</nav>


            <div className="container_discover">
                <aside className="sidebar_discover">
                    <div className="filters_discover">
                        <h3>Filters</h3>
                        <button>Clear All</button>
                        <h3>Investment Strategy</h3>
                        <label><input type="checkbox" /> Asset Allocation</label>
                        <label><input type="checkbox" /> Corporate Governance</label>
                        <label><input type="checkbox" /> Dividend</label>
                        <label><input type="checkbox" /> ESG</label>
                        <label><input type="checkbox" /> Factor Investing</label>
                        <label><input type="checkbox" /> Fundamental</label>
                        <label><input type="checkbox" /> Goal Based</label>
                        <label><input type="checkbox" /> Growth</label>
                        <label><input type="checkbox" /> Momentum</label>
                        <label><input type="checkbox" /> Quality</label>
                        <label><input type="checkbox" /> Quantamental</label>
                        <label><input type="checkbox" /> Quantitative</label>
                        <label><input type="checkbox" /> Sector Tracker</label>
                        <label><input type="checkbox" /> Technical</label>
                    </div>
                </aside>

                <div className="content_discover">
                    <div className="content-header_discover">
                        <div className="tabs">
                        <Link to="/collections" style={{ color: '#1a73e8' }}>Collections</Link>
                            <Link to="/all-smallcases">All smallcases</Link>
                            {/* Updated to use Link for Managers page */}
                            <Link to="/managers">Managers</Link>
                        </div>
                       
                    </div>

                    <div className="cards_discover">
                        <div className="card-discover">
                            <div className="card-header">
                                <h2>Windmill Capital</h2>

                            </div>
                            <div className="card-content">
                                <p>Manages 58 smallcases<br />We’re SEBI registered research analyst creating Thematic & Quantamental curated stock/ETF portfolios...</p><br/>
                                <div className="tags_discover">
                                    <span className="tag_discover">Fundamental</span>
                                    <span className="tag_discover">Sector Tracker</span>
                                    <span className="tag_discover">+13 more strategies</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-discover">
                            <div className="card-header">
                                <h2>WeekendInvesting</h2>

                            </div>
                            <div className="card-content">
                                <p>Momentum Investing has been synonymous with WeekendInvesting since 2016...</p><br/>
                                <div className="tags
                                _discover">
                                    
                                    <span className="tag_discover">Quantitave</span>
                                    <span className="tag_discover">+2 strategies</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-discover">
                            <div className="card-header">
                                <h2>Niveshaay</h2>

                            </div>

                            <div className="card-content">
                                <p>Niveshaay is a SEBI Registered Investment Advisory Firm with a Dedicated Research Team...</p><br/>
                                <div className="tags_discover">
                                    <span className="tag_discover">Growth</span>
                                    <span className="tag_discover">Thematic</span>
                                    <span className="tag_discover">+6 more strategies</span>
                                </div>
                            </div>
                        </div>

                        <div className="card-discover">
                            <div className="card-header">
                                <h2>wright reasearch</h2>

                            </div>

                            <div className="card-content">
                                <p>wright research is a SEBI Registered Investment Advisory Firm with a Dedicated Research Team...</p><br/>
                                <div className="tags_discover">
                                    <span className="tag_discover">Growth</span>
                                    <span className="tag_discover">Thematic</span>
                                    <span className="tag_discover">+6 more strategies</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-discover">
                            <div className="card-header">
                                <h2>Green Portfolio</h2>

                            </div>
                            <div className="card-content">
                                <p>Manages 6 smallcases<br />We are an Investment Management Firm Focused on Fundamental Investing...</p><br/>
                                <div className="tags_discover">
                                    <span className="tag_discover">Fundamental</span>
                                    <span className="tag_discover">Quantitative</span>
                                    <span className="tag_discover">+5 more strategies</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-discover">
                            <div className="card-header">
                                <h2>Sanjiv Bhasin</h2>

                            </div>
                            <div className="card-content">
                                <p>Manages 4 smallcases<br />Value-driven and long-term oriented investment strategies focused on India's growth...</p><br/>
                                <div className="tags_discover">
                                    <span className="tag_discover">Value</span>
                                    <span className="tag_discover">Long-Term</span>
                                    <span className="tag_discover">+3 more strategies</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DiscoverPage;
