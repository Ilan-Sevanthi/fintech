// import React, { useState } from "react";
import "./viewPortfolio.css"; // Import your styles
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "./Screenshot_2024-09-12_095542-removebg-preview.png"
import img2 from "./Screenshot 2024-09-12 095509.jpg"
import {
  // faBell,
  // faCalendarAlt,
  // faEdit,
  // faWallet,
  // faCog,
  // faSignOutAlt,
  faChartLine,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="search-box1">
        <input
          type="text"
          placeholder="Search"
          className="search-input1"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      {/* Main Body */}
      <div className="bodyy">

        {/* Page Content */}
        <div className="page">
          {/* Cards Section */}
          <div className="container">
            <div className="cards">
              <div className="card total-value">
                <div className="Text">
                  <span className="card-title">Total Value</span>
                  <div className="cards-icon1">
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                </div>
                <div className="value-section">
                  <span className="value">₹ 10,00,000</span>
                  <span className="change positive">+11.01%</span>
                </div>
              </div>
            </div>

            <div className="cards">
              <div className="card investments">
                <div className="Text">
                  <span className="card-title">Investments</span>
                  <div className="cards-icon2">
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                </div>
                <div className="value-section">
                  <span className="value">₹ 8,00,000</span>
                  <span className="change negative">-11.01%</span>
                </div>
              </div>
            </div>

            <div className="cards">
              <div className="card daily-change">
                <div className="Text">
                  <span className="card-title">Daily Change</span>
                  <div className="cards-icon3">
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                </div>
                <div className="value-section">
                  <span className="value">₹ 10,00,000</span>
                  <span className="change positive">+7.01%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Section */}
          <div className="tab-container">
            <div className="tabs">
              <Link className="navbar-item" to="/dashboard/stocks">
                <button className="tab">Stocks</button>
              </Link>
              <Link className="navbar-item" to="/dashboard/mutual-funds">
                <button className="tab">Mutual Funds</button>
              </Link>
              <Link className="navbar-item" to="/dashboard/startups">
                <button className="tab">Startups</button>
              </Link>
              <Link className="navbar-item" to="/dashboard/real-estate">
                <button className="tab">Real Estate</button>
              </Link>
            </div>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
          </div>

          {/* Diversification and Asset Growth */}
          <div className="DA-container">
            <div className="Diversification-chart-container">
              <h3>Diversification</h3>
              {/* Add chart code here */}
              <div className="legend">
                <img
                  src={img1}
                  alt=""
                />
                <ul>
                  <li>
                    <span style={{ backgroundColor: "#FF7043" }}></span>Stocks
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#9CCC65" }}></span>Mutual
                    Funds
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#FFEB3B" }}></span>Startups
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#42A5F5" }}></span>Real
                    Estate
                  </li>
                </ul>
              </div>
            </div>

            <div className="Asset-chart-container">
              <h3>Asset Growth</h3>
              {/* Add chart code here */}
              <img
                src={img2}
                alt="asset growth"
                style={{ height: "300px", width: "500px" }}
              />
            </div>
          </div>

          {/* Top Gainers and Watchlists */}
          <div className="Top-Gainers-and-Watchlists">
            <div className="T-card">
              <div className="card-header">
                <h3>Top Gainers</h3>
                <a href="#">View All</a>
              </div>
              <ul className="list">
                <li>
                  1 ITC{" "}
                  <span className="trend positive">
                    9 <i className="arrow up"></i>
                  </span>
                </li>
                <li>
                  2 Tata Motor DVR{" "}
                  <span className="trend positive">
                    7 <i className="arrow up"></i>
                  </span>
                </li>
                <li>
                  3 Tata Motor{" "}
                  <span className="trend positive">
                    6 <i className="arrow up"></i>
                  </span>
                </li>
                <li>
                  4 Dr. Reddy's Labs{" "}
                  <span className="trend positive">
                    5 <i className="arrow up"></i>
                  </span>
                </li>
                <li>
                  5 TCS{" "}
                  <span className="trend positive">
                    3 <i className="arrow up"></i>
                  </span>
                </li>
              </ul>
            </div>

            <div className="W-card">
              <div className="card-header">
                <h3>Watchlists</h3>
                <a href="#">View All</a>
              </div>
              <ul className="list">
                <li>
                  Bandhan Nifty 50 Index{" "}
                  <span className="trend positive">
                    29.36% <i className="arrow up"></i>
                  </span>
                </li>
                <li>
                  SBI Nifty Index{" "}
                  <span className="trend negative">
                    -2.1% <i className="arrow down"></i>
                  </span>
                </li>
                <li>
                  Bandhan Nifty 50 Index{" "}
                  <span className="trend positive">
                    29.36% <i className="arrow up"></i>
                  </span>
                </li>
                <li>
                  UTI Nifty{" "}
                  <span className="trend negative">
                    -2.1% <i className="arrow down"></i>
                  </span>
                </li>
                <li>
                  Aditya Birla Sun Life{" "}
                  <span className="trend positive">
                    29.36% <i className="arrow up"></i>
                  </span>
                </li>
                <li>
                  SBI Nifty Index{" "}
                  <span className="trend negative">
                    -2.1% <i className="arrow down"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
