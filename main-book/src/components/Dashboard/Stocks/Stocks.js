import React from "react";
import { Link } from "react-router-dom";
import "./Stocks.css";
import img from "./asserts/GSTK539309.webp"
import { useNavigate } from "react-router-dom";
import companyLogo from "./asserts/pic.png";
import FundDetails from "./FundDetails";
import thirtytwo from "./asserts/GSTK532432.webp";
import eightdt from "./asserts/GSTK532822.webp";
import fifty from "./asserts/Screenshot_2024-09-09_094850-removebg-preview.png";
import seventeen from "./asserts/Screenshot_2024-09-09_094917-removebg-preview.png";
import zerofour from "./asserts/Screenshot_2024-09-09_094904-removebg-preview copy.png";
import threeseven from "./asserts/Screenshot_2024-09-09_094937-removebg-preview.png";
import five2 from "./asserts/Screenshot_2024-09-09_094952-removebg-preview.png";
import five7 from "./asserts/GSTK543257.webp";
import twotwo from "./asserts/GSTK532822.webp";
// import companyLogo from "./asserts/pic.png";
import MBG1 from "./asserts/MBG1.webp";
import MBG2 from "./asserts/MBG2.webp";
import MBG3 from "./asserts/MBG3.webp";
import MBG4 from "./asserts/MBG4.webp";
 
import PT1 from "./asserts/PT1.png";
import PT2 from "./asserts/PT2.png";
import PT3 from "./asserts/PT3.png";
import PT4 from "./asserts/PT4.png";
import PT5 from "./asserts/PT5.png";

import STL1 from "./asserts/STL1.webp";


import ST4 from "./asserts/ST4.webp";

import topbymarketcap from "./asserts/topbymarketcap.jpg";

// import FundDetails from "./FundDetails"; // Importing the second page

function Stocks() {
  const navigate = useNavigate();

  // Define the handleCardClick function
  const handleCardClick = (fundName) => {
    // Navigate to the fund details page with the selected fund name
    navigate(`/fund-details/${fundName}`);
  };
  return (
    <div className="Stack-App">
      {/* Navbar */}
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
          <input className=".Stack-search-bar1" type="text" placeholder="What are you looking for today?" />
        </div> */}
        <div className="Stack-navbar-right">
          <i className="Stack-icon bell-icon"></i>
          <i className="Stack-icon wallet-icon"></i>
          <i className="Stack-icon cart-icon"></i>
          <div className="Stack-profile">
            <img
              src={thirtytwo}
              alt="Profile"
              className="Stack-profile-pic"
            />
          </div>
        </div>
      </nav>

      <div className="Stack-stocksandmutual">
        
      </div>

      {/* Popular Funds Section */}
      <div className="Stack-explore_mutual">
        <div>
          <section className="Stack-popular-funds">
            <div className="Stack-popular_fund_sec">
              <h2>INDEX</h2>
              <p>All Indices</p>
            </div>

            <div className="Stack-funds">
              <div
                className="Stack-fund-card"
                onClick={() => handleCardClick("NIFTY 50")}
              >
                <h4>NIFTY 50</h4>
                <p>24,900.00 47.85 (0.19%)</p>
              </div>

              <div
                className="Stack-fund-card"
                onClick={() => handleCardClick("BANKNIFTY")}
              >
                <h4>BANKNIFTY</h4>
                <p>81,382.13 18.20 (0.22%)</p>
              </div>

              <div
                className="Stack-fund-card"
                onClick={() => handleCardClick("FINNIFTY 50")}
              >
                <h4>FINNIFTY 50</h4>
                <p>23,594.30 64.55 (0.19%)</p>
              </div>
            </div>
          </section>

          {/* Most Bought on Groww */}
          <section className="Stack-Most-Bought-on-Groww">
            <div className="Stack-ost-Bought-on-Groww-h1">
              <h2>Most Bought on Groww</h2>
            </div>
            <div className="Stack-Most-Bought-on-Groww-div">
              <div className="Stack-MBG-fund-card">
                <img className="Stack-MBG-imgs" src= {img} />
                <h4>Rama Steel Tubes </h4>
                <p>₹14.86</p>
                -1.66 (10.05%)
              </div>

              <div className="Stack-MBG-fund-card">
                <img className="Stack-MBG-imgs" src={MBG2} />
                <h4>Vodafone Idea </h4>
                <p>₹13.23</p>
                -1.12 (0.90%)
              </div>

              <div className="Stack-MBG-fund-card">
                <img className="Stack-MBG-imgs" src={MBG3} />
                <h4>IRFC</h4>
                <p>₹104.85</p>
                -1.66 (10.05%)
              </div>

              <div className="Stack-MBG-fund-card">
                <img className="Stack-MBG-imgs" src={MBG4} />
                <h4>Premier Energies </h4>
                <p>₹1,137.00</p>
                -1.66 (10.05%)
              </div>
            </div>
          </section>
        </div>
        <div className="Stack-watch_list">
          <div className="Stack-watch-list-header">
            <h2>All Watchlists</h2>
            <p className="Stack-view-all">
              <a href="#">View All</a>
            </p>
          </div>
          <div className="Stack-fund_details">
            <div className="Stack-fu_nd_name">
              <p>Fund Name</p>
              <p>1D returns</p>
            </div>
            <div className="Stack-fund_returns">
              <p>Nippon India Small Cap Fund Direct Growth</p>
              <p>+0.43%</p>
            </div>
            <div className="Stack-fund_returns">
              <p>Aditya Birla Sun Life Digital India Fund Direct Growth</p>
              <p>-0.30%</p>
            </div>
            <div className="Stack-fund_returns">
              <p>ICICI Prudential Bluechip Fund Direct Growth</p>
              <p>+0.12%</p>
            </div>
            <div className="Stack-fund_returns">
              <p>ICICI Prudential Technology Direct Plan Growth</p>
              <p>-0.42%</p>
            </div>
            <div className="Stack-fund_returns">
              <p>Axis Small Cap Fund Direct Growth</p>
              <p>+0.51%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products & Tools */}
      <section className="Stack-PT-Collections">
        <h2>Products & Tools</h2>
        <div className="Stack-P-T">
          <div>
            <div className="Stack-PT-Image-Container">
              <img
                className="Stack-P-T-images"
                src={fifty}
              ></img>
            </div>
            <h3 className="Stack-P-T-h3">F&Q</h3>
          </div>
          <div>
            <div className="Stack-PT-Image-Container">
              <img
                className="Stack-P-T-images"
                src={zerofour}
              ></img>
            </div>
            <h3 className="Stack-P-T-h3">Events</h3>
          </div>
          <div>
            <div className="Stack-PT-Image-Container">
              <img
                className="Stack-P-T-images"
                src={seventeen}
              ></img>
            </div>
            <h3 className="Stack-P-T-h3">Intraday</h3>
          </div>
          <div>
            <div className="Stack-PT-Image-Container">
              <img
                className="Stack-P-T-images"
                src={threeseven}
              ></img>
            </div>
            <h3 className="Stack-P-T-h3">IPO</h3>
          </div>
          <div>
            <div className="Stack-PT-Image-Container">
              <img
                className="Stack-P-T-images"
                src={five2}
              ></img>
            </div>
            <h3 className="Stack-P-T-h3">Screener</h3>
          </div>
        </div>
      </section>

      {/* Top Gainers */}
      <section className="Stack-Top-Gainerss-div">
        <h2>Top Gainers</h2>
        <div className="Stack-TG-buttons">
          <button className="Stack-TG-btn">Large</button>
          <button className="Stack-TG-btn">Mid</button>
          <button className="Stack-TG-btn">Small</button>
        </div>

        <section className="Stack-Top-Gainers-Groww">
        <div className="Stack-Top-Gainers">
            <img className="Stack-img1" src={MBG1} />
            <h4>Godrej Consumer </h4>
            <p>₹1492.86</p>
            48.66 (10.05%)
          </div>

          <div className="Stack-Top-Gainers">
            <img className="Stack-img1" src={MBG3} />
            <h4>Hindustan Unilever </h4>
            <p>₹13.23</p>
            -1.12 (0.90%)
          </div>

          <div className="Stack-Top-Gainers">
            <img className="Stack-img1" src={MBG1} />
            <h4>United Spirits </h4>
            <p>₹104.85</p>
            -1.66 (10.05%)
          </div>

          <div className="Stack-Top-Gainers">
            <img className="Stack-img1" src={ST4} />
            <h4>Dabur India</h4>
            <p>₹1,137.00</p>
            -1.66 (10.05%)
          </div>
        </section>
      </section>

      {/* ETFs by Groww */}

      <section className="Stack-ETFs">
        <div>
          <h2>ETFs by Groww</h2>
        </div>
        <div className="Stack-ETFs-Container">
          <img className="Stack-img1" src={MBG1} />
          <h4>Groww Nifty EV & New Age Automotive ETF</h4>
          <p>₹ 33.32 0.55(10.05%)</p>
        </div>
      </section>

      {/* Stocks In News */}
      <section className="Stack-Stocks-section">
        <div>
          <h2>Stocks In News</h2>
        </div>
        <div className="Stack-Stocks-Section-Container">
        <div className="Stack-Stocks-Container">
            <img className="Stack-img1" src={MBG2} />
            <h4>Divi's Laboratories</h4>
            <p>₹ 5347.35</p>
            48.66 (10.05%)
          </div>

          <div className="Stack-Stocks-Container">
            <div>
              <img className="Stack-img1" src={MBG4} />
            </div>
            <h4>Havells India</h4>
            <p>₹ 1935.00</p>
            -1.12 (0.90%)
          </div>

          <div className="Stack-Stocks-Container">
            <img className="Stack-img1" src={MBG1} />
            <h4>JIO Financial Services</h4>
            <p>₹ 350.00</p>
            -1.66 (10.05%)
          </div>

          <div className="Stack-Stocks-Container">
            <img className="Stack-img1" src={ST4} />
            <h4>Bosch</h4>
            <p>₹ 33589.60</p>
            -1.66 (10.05%)
          </div>
        </div>
      </section>

      {/* Top Losers */}
      <section className="Stack-Top-loserss">
        <h2>Top Losers</h2>
        <div className="Stack-TL-buttons">
          <button className="Stack-TL-btn">Large</button>
          <button className="Stack-TL-btn">Mid</button>
          <button className="Stack-TL-btn">Small</button>
        </div>

        <section className="Stack-Top-losers-Groww">
        <div className="Stack-Top-losers">
            <img className="Stack-img1" src={STL1} />
            <h4>Godrej Consumer </h4>
            <p>₹1492.86</p>
            48.66 (10.05%)
          </div>

          <div className="Stack-Top-losers">
            <img className="Stack-img1" src={ST4} />
            <h4>Hindustan Unilever </h4>
            <p>₹13.23</p>
            -1.12 (0.90%)
          </div>

          <div className="Stack-Top-losers">
            <img className="Stack-img1" src={STL1} />
            <h4>United Spirits </h4>
            <p>₹104.85</p>
            -1.66 (10.05%)
          </div>

          <div className="Stack-Top-losers">
            <img className="Stack-img1" src={ST4}/>
            <h4>Dabur India</h4>
            <p>₹1,137.00</p>
            -1.66 (10.05%)
          </div>
        </section>
      </section>

      {/* Top Sectors */}
      <section className="Stack-Top-Sectors">
        <h2>Top Sectors</h2>
        <div className="Stack-Top-Sectors-buttons">
          <button className="Stack-TS-btn">Banking | 41</button>
          <button className="Stack-TS-btn">Energy | 99</button>
          <button className="Stack-TS-btn">Healthcare | 41</button>
          <button className="Stack-TS-btn">FMCG | 41</button>
          <button className="Stack-TS-btn">Automobile | 41</button>
          <div className="Stack-Top-Sectors-buttons2">
            <button className="Stack-TS-btn"> Tele-Communication | 47</button>
            <button className="Stack-TS-btn">
              Mediua & Entertainment | 105
            </button>
          </div>
        </div>
      </section>

      {/* Top by market cap */}

      <section>
        <div className="Stack-Top-by-Market-Cap-container">
          <h2>Top by Market Cap</h2>
          <div className="Stack-Top-by-Market-Cap-img">
            <img src={topbymarketcap} alt="" />
          </div>
        </div>
      </section>

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
export default Stocks;
