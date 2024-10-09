import React from "react";
import { Link } from 'react-router-dom';
import "./Managers.css"; // Import the styles
import windmill from "../assets/windmill-logo.png"
import manager from "../assets/manager.png"
import weather from "../assets/weather.png"
import topst from "../assets/100.png"
import eq from "../assets/eq.png"
const IndexPage = () => {
  return (
    <div>
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
          <button>Search</button>
        </div>
      </nav>

      <div className="container_manager">
        {/* Header Section */}
        <div className="header_manager">
          <div className="info_manager">
            <h1>Windmill Capital</h1>
            <p>SEBI Registration No: INH200007645</p>
            <p>
              We’re SEBI registered research analyst creating Thematic &
              Quantamental curated stock/ETF portfolios. Data analysis is...
            </p>
            <div className="strategies_manager">
              <span>Fundamental</span>
              <span>Sector Tracker</span>
              <span>+13 more strategies</span>
            </div>
          </div>
          <img src={windmill} alt="Windmill Capital Logo" />
        </div>

        {/* Main Content Section */}
        <div className="main-content_manager">
          {/* Managed by & Popular Smallcases */}
          <div className="manager-info_manager">
            <h2>Managed by</h2>
            <div className="manager-image_manager">
              <img src={manager} alt="Manager Image" />
              <div>
                <p>Windmill Capital</p>
                <p>6+ years experience</p>
                <p>
                  We build investment products and curated stock/ETF portfolios
                  to help our users achieve their financial goals. Our aim is to
                  be the one-stop-shop for all investing needs for a retail
                  investor.
                </p>
              </div>
            </div>
            <div className="popular_manager">
              Idea-based portfolios, backed by fundamental analysis & powered by
              data.
            </div>

            {/* Smallcases */}
            <div className="smallcases_manager">
              <h3>Popular smallcases by Windmill Capital</h3>

              <div className="smallcase_manager">
                <img src={weather} alt="All Weather Investing" />
                <div className="smallcase-info_manager">
                  <h4>All Weather Investing</h4>
                  <p>
                    One investment for all market conditions. Works for
                    everyone.
                  </p>
                </div>
                <div className="smallcase-stats_manager">
                  <p>Min. Amount: ₹ 3,127</p>
                  <p className="volatility_manager">Low Volatility</p>
                  <p>3Y CAGR: 13.96%</p>
                </div>
              </div>

              <div className="smallcase_manager">
                <img src={topst} alt="Top 100 Stocks" />
                <div className="smallcase-info_manager">
                  <h4>Top 100 Stocks</h4>
                  <p>
                    India’s most powerful companies in one portfolio. Solid
                    stability.
                  </p>
                </div>
                <div className="smallcase-stats_manager">
                  <p>Min. Amount: ₹ 2,757</p>
                  <p className="volatility_manager">Low Volatility</p>
                  <p>3Y CAGR: 15.74%</p>
                </div>
              </div>

              <div className="smallcase_manager">
                <img src={eq} alt="Top 100 Stocks" />
                <div className="smallcase-info_manager">
                  <h4>Equity & Gold</h4>
                  <p>
                    Create wealth with equities, stay protected with gold. The
                    sweet spot.
                  </p>
                </div>
                <div className="smallcase-stats_manager">
                  <p>Min. Amount: ₹ 2,757</p>
                  <p className="volatility_manager">Low Volatility</p>
                  <p>3Y CAGR: 15.74%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="subscribe_manager">
            <h3>Subscribe to Windmill Capital</h3>
            <p>
              For Windmill Capital, you need to subscribe to each fee-based
              smallcase separately.
            </p>
            <button>See all notifications</button>
            <button>See all benefits</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
