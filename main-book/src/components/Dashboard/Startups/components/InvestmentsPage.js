// import React from "react";
// import { Link } from 'react-router-dom';
// import './InvestmentsPage.css'; // External CSS
// import trackon from "../assets/trackon.png"
// import dream from "../assets/dream.png"
// import equity from "../assets/Equity.png"
// import hun from "../assets/100.png"
// import weather from "../assets/weather.png"
// import qr from "../assets/qr.png"
// import cash from "../assets/getcash.png"
// import explore from "../assets/explore.png"



// const InvestmentsPage = () => {
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="logo">Bright Vision</div>
//         <ul className="nav-links">
//           <li><Link to="/discover" className="nav-button">Discover</Link></li>
//           <li>Watchlist</li>
//           <li>Create</li>
//           <li><Link to="/investments" className="nav-button">Investments</Link></li>
//           <li className="dropdown">
//             <button className="nav-button dropdown-toggle">More &#x25BC;</button>
//             <div className="dropdown-content">
//               <Link to="/loan" className="dropdown-link">Loan <span className="new-tag">NEW</span></Link>
//               <Link to="/loan-against-mf" className="dropdown-link">Loan Against Mutual Funds</Link>
//               <Link to="/Brightvision" className="dropdown-link">Find me a Bright Vision</Link>
//               <Link to="/subscriptions" className="dropdown-link">Subscriptions</Link>
//             </div>
//           </li>
//         </ul>
//         <div className="search-bar">
//           <input type="text" placeholder="Search Bright Vision, mutual fund, stock or manager" />
//           <button>Search</button>
//         </div>
//       </nav>
     

//       <div className="divider"></div>

//       {/* Overview Section */}
//       <div className="overview">
//         <div className="stats">
//           <div>
//             <h2>Overview</h2>
//           </div>
//           <div>
//             <p>Total Value</p>
//             <h3>₹1,50,000</h3>
//           </div>
//           <div>
//             <p>Invested</p>
//             <h3>₹1,00,000</h3>
//           </div>
//         </div>
//         <div className="track-container">
//           <img src={trackon} alt="Track Icon" />
//           <p>Track your Mutual Funds</p>
//           <button>Track now</button>
//         </div>
//       </div>

//       <div className="divider"></div>

//       {/* Dream Big Section */}
//       <div className="dream-big">
//         <img src={dream} alt="Dream Big Icon" />
//         <div>
//           <h2>Dream Big, Begin Small</h2>
//           <p>Kickstart your investing journey within ₹500</p>
//           <button>Explore now</button>
//         </div>
//       </div>

//       <div className="divider"></div>

//       {/* Insights Section */}
//       <div className="insights">
//         <h2>Ideal for getting started</h2>
//         <div className="container_inver">
//           <div className="item">
//             <img src={hun} alt="Top 100 Stocks" />
//             <h3>Top 100 Stocks</h3>
//             <p>India's most powerful companies in one portfolio. Solid stability.</p>
//             <p>Min. Amount: ₹2,758</p>
//             <p>3Y CAGR: 16.29%</p>
//           </div>
//           <div className="item">
//             <img src={equity} alt="Equity & Gold" />
//             <h3>Equity & Gold</h3>
//             <p>Create wealth with equities, stay protected with Gold.</p>
//             <p>Min. Amount: ₹401</p>
//             <p>3Y CAGR: 14.83%</p>
//           </div>
//           <div className="item">
//             <img src={weather} alt="All Weather Investing" />
//             <h3>All Weather Investing</h3>
//             <p>One investment for all market conditions. Works for everyone.</p>
//             <p>Min. Amount: ₹3,128</p>
//             <p>3Y CAGR: 13.39%</p>
//           </div>
//         </div>
//       </div>

//       {/* Investment Insights Section */}
//       <div className="insights-section">
//         <div className="insights-main">
//           <h2>Investment Insights</h2>

//           <div className="insights-item">
//             <img src={equity} alt="Equity & Gold" />
//             <div>
//               <h3>Equity & Gold</h3>
//               <p>Create wealth with equities, stay protected with Gold.</p>
//             </div>
//             <div>
//               <p>
//                 <i className="fas fa-crown"></i> <strong>Popular</strong>
//                 <br />
//                 Viewed over 40K times in the last month
//               </p>
//             </div>
//             <button>View smallcase</button>
//           </div>

//           <div className="insights-item">
//             <img src={weather} alt="All Weather Investing" />
//             <div>
//               <h3>All Weather Investing</h3>
//               <p>One investment for all market conditions. Works for everyone.</p>
//             </div>
//             <div>
//               <p>
//                 <i className="fas fa-crown"></i> <strong>Trending</strong>
//                 <br />
//                 Watchlisted by over 10K investors
//               </p>
//             </div>
//             <button>View smallcase</button>
//           </div>

//           <div className="insights-item">
//             <img src={hun} alt="Top 100 Stocks" />
//             <div>
//               <h3>Top 100 Stocks</h3>
//               <p>India's most powerful companies in one portfolio. Solid stability.</p>
//             </div>
//             <div>
//               <p>
//                 <i className="fas fa-crown"></i> <strong>Emerging</strong>
//                 <br />
//                 Over 3K investors started SIP last month
//               </p>
//             </div>
//             <button>View smallcase</button>
//           </div>

//           <div className="insights-item">
//             <img src={equity} alt="Equity & Debt" />
//             <div>
//               <h3>Equity & Debt</h3>
//               <p>A unique 2-in-1 portfolio of equity & debt suitable for low-risk wealth creation.</p>
//             </div>
//             <div>
//               <p>
//                 <i className="fas fa-crown"></i> <strong>Recently launched</strong>
//                 <br />
//                 Viewed over 40K times in the last month
//               </p>
//             </div>
//             <button>View smallcase</button>
//           </div>
//         </div>

//         <div className="insights-sidebar">
//           <div className="sidebar-item">
//             <img src={explore} alt="Explore More" />
//             <p>Explore more smallcases</p>
//             <button>Go to discover</button>
//           </div>
//           <div className="sidebar-item">
//             <img src={cash} alt="Get Cash" />
//             <p>Get cash against mutual funds!</p>
//             <button>Learn more</button>
//           </div>
//         </div>
//       </div>

//       {/* QR Section */}
//       <div className="qr-section">
//         <img src={qr} alt="QR Code" />
//         <p>
//           Enjoy more features on smallcase app 🛍
//           <br />
//           Download the app to explore a fun new personalized experience
//         </p>
//       </div>
//     </div>
//   );
// };

// export default InvestmentsPage;


import React from "react";
import { Link } from 'react-router-dom';
import './InvestmentsPage.css'; // External CSS
import trackon from "../assets/trackon.png";
import dream from "../assets/dream.png";
import equity from "../assets/Equity.png";
import hun from "../assets/100.png";
import weather from "../assets/weather.png";
import qr from "../assets/qr.png";
import cash from "../assets/getcash.png";
import explore from "../assets/explore.png";

const InvestmentsPage = () => {
  return (
    <div>
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
     
      <div className="investmentPage-divider"></div>

      {/* Overview Section */}
      <div className="investmentPage-overview">
        <div className="investmentPage-stats">
          <div>
            <h2>Overview</h2>
          </div>
          <div>
            <h3>Total Value</h3>
            <h3>₹1,50,000</h3>
          </div>
          <div>
            <h3>Invested</h3>
            <h3>₹1,00,000</h3>
          </div>
        </div>
        <div className="investmentPage-track-container">
          <img src={trackon} alt="Track Icon" />
          <p>Track your Mutual Funds</p>
          <button>Track now</button>
        </div>
      </div>

      <div className="investmentPage-divider"></div>

      {/* Dream Big Section */}
      <div className="investmentPage-dream-big">
        <img src={dream} alt="Dream Big Icon" />
        <div>
          <h2>Dream Big, Begin Small</h2>
          <p>Kickstart your investing journey within ₹500</p><br/>
          <button>Explore now</button>
        </div>
      </div>

      <div className="investmentPage-divider"></div>

      {/* Insights Section */}
      <div className="investmentPage-insights">
        <h2>Ideal for getting started</h2>
        <div className="investmentPage-container_inver">
          <div className="investmentPage-item">
            <img src={hun} alt="Top 100 Stocks" />
            <h3>Top 100 Stocks</h3>
            <p>India's most powerful companies in one portfolio. Solid stability.</p>
            <p>Min. Amount: ₹2,758</p>
            <p>3Y CAGR: 16.29%</p>
          </div>
          <div className="investmentPage-item">
            <img src={equity} alt="Equity & Gold" />
            <h3>Equity & Gold</h3>
            <p>Create wealth with equities, stay protected with Gold.</p>
            <p>Min. Amount: ₹401</p>
            <p>3Y CAGR: 14.83%</p>
          </div>
          <div className="investmentPage-item">
            <img src={weather} alt="All Weather Investing" />
            <h3>All Weather Investing</h3>
            <p>One investment for all market conditions. Works for everyone.</p>
            <p>Min. Amount: ₹3,128</p>
            <p>3Y CAGR: 13.39%</p>
          </div>
        </div>
      </div>

      {/* Investment Insights Section */}
      <div className="investmentPage-insights-section">
        <div className="investmentPage-insights-main">
          <h2>Investment Insights</h2>

          <div className="investmentPage-insights-item">
            <img src={equity} alt="Equity & Gold" />
            <div>
              <h3>Equity & Gold</h3>
              <p>Create wealth with equities, stay protected with Gold.</p>
            </div>
            <div>
              <p>
                <i className="fas fa-crown"></i> <strong>Popular</strong>
                <br />
                Viewed over 40K times in the last month
              </p>
            </div>
            <button>View smallcase</button>
          </div>

          <div className="investmentPage-insights-item">
            <img src={weather} alt="All Weather Investing" />
            <div>
              <h3>All Weather Investing</h3>
              <p>One investment for all market conditions. Works for everyone.</p>
            </div>
            <div>
              <p>
                <i className="fas fa-crown"></i> <strong>Trending</strong>
                <br />
                Watchlisted by over 10K investors
              </p>
            </div>
            <button>View smallcase</button>
          </div>

          <div className="investmentPage-insights-item">
            <img src={hun} alt="Top 100 Stocks" />
            <div>
              <h3>Top 100 Stocks</h3>
              <p>India's most powerful companies in one portfolio. Solid stability.</p>
            </div>
            <div>
              <p>
                <i className="fas fa-crown"></i> <strong>Emerging</strong>
                <br />
                Over 3K investors started SIP last month
              </p>
            </div>
            <button>View smallcase</button>
          </div>

          <div className="investmentPage-insights-item">
            <img src={equity} alt="Equity & Debt" />
            <div>
              <h3>Equity & Debt</h3>
              <p>A unique 2-in-1 portfolio of equity & debt suitable for low-risk wealth creation.</p>
            </div>
            <div>
              <p>
                <i className="fas fa-crown"></i> <strong>Recently launched</strong>
                <br />
                Viewed over 40K times in the last month
              </p>
            </div>
            <button>View smallcase</button>
          </div>
        </div>

        <br/><div className="investmentPage-insights-sidebar">
          <div className="investmentPage-sidebar-item">
            <img src={explore} alt="Explore More" />
            <p>Explore more smallcases</p>
            <button>Go to discover</button>
          </div>
          <div className="investmentPage-sidebar-item">
            <img src={cash} alt="Get Cash" />
            <p>Get cash against mutual funds!</p>
            <button>Learn more</button>
          </div>
        </div>
      </div>

      {/* QR Section */}
      <div className="investmentPage-qr-section">
        <img src={qr} alt="QR Code" />
        <p>
          Enjoy more features on smallcase app 🛍
          <br />
          Download the app to explore a fun new personalized experience
        </p>
      </div>
    </div>
  );
};

export default InvestmentsPage;
