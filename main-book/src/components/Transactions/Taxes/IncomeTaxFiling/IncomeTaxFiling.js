import React, { Profiler } from "react";
import "./IncomeTaxFilling.css";
import profile_itfilling from '../../Taxes/IncomeTaxFiling/asserts/profile.png'
// import Profile from '../../../../../public/images/profile.png'
import { Link } from "react-router-dom";

const IncomeTaxFiling = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="ITF-page6-header">
    <div className="ITF-page5-header">
      <img src="IT-filling-logo.png" alt="Gov Logo" className="ITF-page5-logo" />
      <ul className="ITF-page5-nav">
        <li>Dashboard</li>
        <li>e-File</li>
        <li>Authorized Partners</li>
        <li>Services</li>
        <li>Pending Actions</li>
        <li>Grievances</li>
        <li>Help</li>
      </ul>
      <div className="ITF-page5-session-info">
        <span>Session Time 2:9:0</span>
      </div>
    </div>
    </header>
  );
};

const MainContent = () => {
  return (
    <main className="ITF-page1-main">
      <section className="ITF-page1-dashboard">
        <div className="ITF-page1-profile">
          <WelcomeBox />
          <Tools />
        </div>
        <Actions />
      </section>
    </main>
  );
};

const WelcomeBox = () => {
  return (
    <div className="ITF-page1-welcome-box">
      <h2>
        Welcome Back, <span>GURUKAR</span>
      </h2>
      <img src={profile_itfilling} alt="Profile" />
      <div className="ITF-page1-profile-info">
        <p>
          Contact Details: <a href="#">Update</a>
        </p>
        <p>
          Bank Account: <a href="#">Update</a>
        </p>
        <p>
          Your account is not secure with e-vault:{" "}
          <a href="#">Secure Account</a>
        </p>
      </div>
    </div>
  );
};

const Tools = () => {
  return (
    <div className="ITF-page1-tools">
      <div className="ITF-page1-income-tax-estimator">
        <h3>Income & Tax Estimator</h3>
      </div>
      <div className="ITF-page1-tax-calendar">
        <h3>Tax Calendar</h3>
      </div>
    </div>
  );
};

const Actions = () => {
  return (
    <div className="ITF-page1-actions">
      <div className="ITF-page1-file-return">
        <h3>File your return for the year ended on 31-Mar-2023</h3>
        <p>For Assessment Year 2023-24</p>
        <Link to="/Page2" className='ITF-link'>
          <button> File Now</button>
        </Link>
      </div>
      <div className="ITF-page1-tax-details">
        <h3>Tax Deposit</h3>
      </div>
      <div className="ITF-page1-recent-filed-returns">
        <h3>Recent Filed Returns</h3>
      </div>
      <div className="ITF-page1-recent-forms-filed">
        <h3>Recent Forms Filed</h3>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="ITF-page1-footer">
      <p>Income Tax Department, Government of India</p>
    </footer>
  );
};

export default IncomeTaxFiling;
