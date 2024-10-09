import React, { useState } from 'react';
import './PageThree.css';
import { Link } from 'react-router-dom';

const PageThree = () => {
  const [status, setStatus] = useState('individual');

  const handleStatusChange = (e) => setStatus(e.target.value);

  return (
    <div>
      <header className="ITF-page3-header">
        <img src="IT-filling-logo.png" alt="Gov Logo" className="ITF-page3-logo" />
        <ul className="ITF-page3-nav">
          <li>Dashboard</li>
          <li>e-File</li>
          <li>Authorized Partners</li>
          <li>Services</li>
          <li>Pending Actions</li>
          <li>Grievances</li>
          <li>Help</li>
        </ul>
        <div className="ITF-page3-session-info">
          <span>Session Time: 2:9:31</span>
        </div>
      </header>

      <div className="ITF-page3-container">
        <div className="ITF-page3-status-container">
          <h2>Please select the status applicable to you to proceed further</h2>
          <p>
            Based on your last year's data we have pre-selected a status applicable to you. 
            You may change the status if it is not applicable to you.
          </p>
          <form id="page3-status-form">
            <div className="ITF-page3-radio-group">
              <label>
                <input
                  type="radio"
                  name="status"
                  value="individual"
                  checked={status === 'individual'}
                  onChange={handleStatusChange}
                />
                Individual
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="huf"
                  checked={status === 'huf'}
                  onChange={handleStatusChange}
                />
                HUF
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="others"
                  checked={status === 'others'}
                  onChange={handleStatusChange}
                />
                Others
              </label>
            </div>

            <div className="ITF-page3-buttons">
              <button type="button" id="page3-back-btn">
                <Link to="/page2" className='ITF-link'>Back</Link>
              </button>
              <button type="submit" id="page3-continue-btn" >
                <Link to="/page4"className='ITF-link' >Continue</Link> 
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="ITF-page3-footer">
        <p>© Income Tax Department, Government of India. All Rights Reserved</p>
        <p>
          This site is best viewed in 1024 x 768 resolution with the latest versions of Chrome, Firefox, 
          Safari, and Internet Explorer.
        </p>
      </footer>
    </div>
  );
};

export default PageThree;
