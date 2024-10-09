import React from "react";
import { useParams } from "react-router-dom";
import "./Stocks.css";
import companyLogo from "./asserts/pic.png";
import homeimg from "./asserts/NXT SCREEN.jpg";
function FundDetails() {
  const { fundName } = useParams(); // Get the fund name from the URL

  return (
    <div className="stack-body">
      <nav className="navbar">
        <div className="Stack-navbar-left">
          <img src={companyLogo} alt="Groww Logo" className="Stack-logo" />
          <a href="#" className="Stack-nav-link active">
            Explore
          </a>
          <a href="#" className="Stack-nav-link">
            Investments
          </a>
        </div>
        {/* <div className="Stack-search-bar">
          <input type="text" placeholder="What are you looking for today?" />
        </div> */}
        <div className="Stack-navbar-right">
          <i className="Stack-icon bell-icon"></i>
          <i className="Stack-icon wallet-icon"></i>
          <i className="Stack-icon cart-icon"></i>
          
          <div className="Stack-profile">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="Stack-profile-pic"
            />
          </div>
        </div>
      </nav>
      <div className="">
        <img src={homeimg} alt="Groww Logo" className="Stack-FundDetails-img" />
      </div>

      {/* Footer */}
      <footer className="Stack-footer">
        <div className="Stack-footer-details">
          <div className="Stack-logo_groww">
            <img src={companyLogo} alt="logo" />
          </div>
          <div className="Stack-footer-address">
            Vaishnavi Tech Park, 3rd & 4th Floor, Sarjapur Main Road, Bellandur,
            Bengaluru - 560103
          </div>
          <div className="Stack-footer-contact">
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="Stack-footer-social-media">
          <i className="Stack-fab fa-facebook-f"></i>
          <i className="Stack-fab fa-twitter"></i>
          <i className="Stack-fab fa-youtube"></i>
          <i className="Stack-fab fa-instagram"></i>
          <i className="Stack-fab fa-linkedin-in"></i>
          <i className="Stack-fab fa-telegram-plane"></i>
        </div>
        <div className="Stack-footer-links">
          <div className="Stack-footer-column">
            <h3>Products</h3>
            <ul>
              <li>Stocks</li>
              <li>Futures & Options</li>
              <li>IPO</li>
              <li>Mutual Funds</li>
              <li>NFO</li>
            </ul>
          </div>
          <div className="Stack-footer-column">
            <h3>Groww</h3>
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
          <div className="Stack-footer-column">
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
        <div className="Stack-footer-apps">
          {/* <a href="#"><img src="app-store-logo.png" alt="App Store" /></a> */}
          {/* <a href="#"><img src="google-play-logo.png" alt="Google Play" /></a> */}
        </div>
      </footer>
    </div>
  );
}

export default FundDetails;
