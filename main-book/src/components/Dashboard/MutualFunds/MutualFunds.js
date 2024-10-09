import React from "react";
import "./MutualFunds.css";
import companyLogo from "../MutualFunds/asserts/pic.png";
// import motilal from "../src/asserts/grow.png";
// import quant from "../src/asserts/ppa.webp";
// import parag from "../src/asserts/grow.png";
// import icici from "../src/asserts/grow.png";
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={companyLogo} alt="logo" />
          <p>Fintech</p>
        </div>
        <div className="nav-links">
          <a href="#" className="explore">
            Explore
          </a>
          <a href="#">Investments</a>
          {/* <input type="text" placeholder="What are you looking for today?" /> */}
          <div className="nav-icons">
            <i className="bell-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </i>
            {/* <i className="wallet-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                />
              </svg>
            </i>
            <i className="cart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </i>
            <i className="profile-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </i> */}
          </div>
        </div>
      </nav>
      
      <div className="stocksandmutual">
        <p>Stocks</p>
        <p>Mutual Funds</p>
      </div>
      {/* Popular Funds Section */}
      <div className="explore_mutual">
        <section className="popular-funds">
          <div className="popular_fund_sec">
            <h2>Popular Funds</h2>
            <p>All Mutual Funds</p>
          </div>
          <div className="funds">
            <div className="fund-card">
              <img src={companyLogo} alt="logo" />
              <p>Motilal Oswal Midcap Fund Direct Growth</p>
              38.8% (3Y)
            </div>
            <div className="fund-card">
              <img src={companyLogo} alt="logo" />
              <p>Quant Small Cap Fund Direct Plan Growth </p>33.9% (3Y)
            </div>
            <div className="fund-card">
              <img src={companyLogo} alt="logo" />
              <p>Parag Parikh Flexi Cap Fund Direct Growth </p>19.3% (3Y)
            </div>
            <div className="fund-card">
              <img src={companyLogo} alt="logo" />
              <p>ICICI Prudential Bluechip Fund Direct Growth </p>20.8% (3Y)
            </div>
          </div>
          {/* <a href="#" className="view-all">All Mutual Funds</a> */}
        </section>
        <section className="new_mutal">
          <img src={companyLogo} alt="logo" />
          <h3>New to Mutual Funds?</h3>
          <p>Start exploring mutual funds to brgin your investment journey</p>
          <button className="btn">EXPLORE MUTUAL FUNDS</button>
        </section>
      </div>
      {/* Collections */}
      <section className="collections">
        <div className="collections_head">
          <h2>Collections</h2>

        </div>
        <div className="collections_list">
          <div className="groww_nifty">
            <div className="collection-items">
              <div className="collection-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                High return
              </div>
              <div className="collection-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                SIP with ₹500
              </div>
              <div className="collection-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                  />
                </svg>
                Tax Saving
              </div>
              <div className="collection-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
                Large Cap
              </div>
              <div className="collection-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
                Mid Cap
              </div>
              <div className="collection-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Small Cap
              </div>
            </div>
            <div className="watch_list">
              <h3>Watchlist</h3>
              <a href="#" className="view-all">
                View All
              </a>
            </div>
            <div className="funds_by_grow">
              <div className="fund-card">
                <img src={companyLogo} alt="logo" />
                <p>ICICI Prudential Bluechip Fund Direct Growth </p>20.8% (3Y)
              </div>
              <div className="fund-card">
                <img src={companyLogo} alt="logo" />
                <p>ICICI Prudential Bluechip Fund Direct Growth </p>20.8% (3Y)
              </div>
              <div className="fund-card">
                <img src={companyLogo} alt="logo" />
                <p>ICICI Prudential Bluechip Fund Direct Growth </p>20.8% (3Y)
              </div>
              <div className="fund-card">
                <img src={companyLogo} alt="logo" />
                <p>ICICI Prudential Bluechip Fund Direct Growth </p>20.8% (3Y)
              </div>
            </div>
          </div>
          <div className="wishlist_collection">
            <div className="wish_list">
              <h2>Watchlist</h2>
              <a href="#" className="view-all">
                View All
              </a>
            </div>
            <div className="fund_details">
              <div className="fu_nd_name">
                <p>Fund Name</p>
                <p>1D returns</p>
              </div>
              <div className="fund_returns">
                <p>Nippon India Small Cap Fund Direct Growth</p>
                <p>+0.43%</p>
              </div>
              <div className="fund_returns">
                <p>Aditya Birla Sun Life Digital India Fund Direct Growth</p>
                <p>-0.30%</p>
              </div>
              <div className="fund_returns">
                <p>ICICI Prudential Bluechip Fund Direct Growth</p>
                <p>+0.12%</p>
              </div>
              <div className="fund_returns">
                <p>ICICI Prudential Technology Direct Plan Growth</p>
                <p>-0.42%</p>
              </div>
              <div className="fund_returns">
                <p>Axis Small Cap Fund Direct Growth</p>
                <p>+0.51%</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Quick Access */}
      <section className="quick-access">
        <h2>Quick Access</h2>
        <div className="quick-access-items">
          <div className="quick-access-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            New Fund Offerings
          </div>
          <div className="quick-access-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
            Import Funds
          </div>
          <div className="quick-access-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
              />
            </svg>
            Compare Funds
          </div>
          <div className="quick-access-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
              />
            </svg>
            SIP Calculator
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-details">
          <div className="logo_groww">
            <img src={companyLogo} alt="logo" />
            <p>Finteck</p>
          </div>
          <div className="footer-address">
            Vaishnavi Tech Park, 3rd & 4th Floor, Sarjapur Main Road, Bellandur,
            Bengaluru - 560103
          </div>
          <div className="footer-contact">
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="footer-social-media">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-telegram-plane"></i>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Products</h3>
            <ul>
              <li>Stocks</li>
              <li>Futures & Options</li>
              <li>IPO</li>
              <li>Mutual Funds</li>
              <li>NFO</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Finteck</h3>
            <ul>
              <li>About Us</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Media & Press</li>
              <li>Careers</li>
              <li>Help and Support</li>
              <li>Trust and Safety</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>AMC Mutual Funds</li>
              <li>Calculators</li>
              <li>Glossary</li>
              <li>Open Demat Account</li>
              <li>Groww Digest</li>
              <li>Sitemap</li>
              <li>Income Tax Calculator</li>
            </ul>
          </div>
        </div>
        <div className="footer-apps">
          {/* <a href="#"><img src="app-store-logo.png" alt="App Store" /></a> */}
          {/* <a href="#"><img src="google-play-logo.png" alt="Google Play" /></a> */}
        </div>
      </footer>
    </div>
  );
}

export default App;
