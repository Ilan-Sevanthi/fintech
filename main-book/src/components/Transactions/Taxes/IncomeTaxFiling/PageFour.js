import React from 'react';
import './PageFour.css';
import { Link } from 'react-router-dom';

const PageFour = () => {
  return (
    <div>
      <div className="ITF-page4-header">
        <img src="IT-filling-logo.png" alt="Gov Logo" className="ITF-page4-logo" />
        <ul className="ITF-page4-nav">
          <li>Dashboard</li>
          <li>e-File</li>
          <li>Authorized Partners</li>
          <li>Services</li>
          <li>Pending Actions</li>
          <li>Grievances</li>
          <li>Help</li>
        </ul>
        <div className="ITF-page4-session-info">
          <span>Filing Returns for A.Y. 2023-24</span>
        </div>
      </div>

      <div className="ITF-page4-container">
        <div className="ITF-page4-status-container">
          <h2>Income Tax Returns</h2>
          <p>You need to choose an ITR Form to proceed</p>
          <p className="ITF-page4-help-text">Help me decide which ITR Form to file</p>

          <div className="ITF-page4-summary-link">
            <a href="#">Show Summary Immovable Property Sale Transaction Data</a>
          </div>

          <form id="page4-itr-form">
            <label htmlFor="page4-itr-select">I know which ITR Form I need to file</label>
            <select id="page4-itr-select">
              <option value="" disabled selected>
                Select ITR Form
              </option>
              <option value="ITR-1">ITR-1</option>
              <option value="ITR-4">ITR-4</option>
            </select>

            <div className="ITF-page4-buttons">
              <button type="button" id="page4-back-btn">
                <Link to="/page3" className='ITF-link'>Back</Link>
              </button>
              <button type="submit" id="page4-proceed-btn">
                <Link to="/page5" className='ITF-link'>Proceed</Link>
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="ITF-page4-footer">
        <p>© Income Tax Department, Government of India. All Rights Reserved</p>
        <p>
          This site is best viewed in 1024 x 768 resolution with the latest versions of Chrome,
          Firefox, Safari, and Internet Explorer.
        </p>
      </footer>
    </div>
  );
};

export default PageFour;
