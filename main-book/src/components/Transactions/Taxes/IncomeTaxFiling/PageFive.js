import React from 'react';
import './PageFive.css';
import { Link } from 'react-router-dom';

const PageFive = () => {
  return (
    <div>
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

      <div className="ITF-page5-container">
        <h2 className='ITF-page5-h2'>ITR 1 - (Income Tax Return 1)</h2>
        <p className='ITF-page5-p'>
          For individuals being a resident (other than not ordinarily resident)
          having total income up to ₹ 50 lakh, having income from Salaries, one
          house property, other sources (interest, etc.), and agriculture income
          up to ₹5000.
        </p>
        <p className='ITF-page5-p'>
          (Not for individuals who are either Directors in a company or have
          invested in unlisted equity shares, or in cases where TDS has been
          deducted u/s 194N, or if income tax is deferred on ESOP)
        </p>

        <div className="ITF-page5-steps">
          <div className="ITF-page5-step">
            <span>1</span>
            <p className='ITF-page5-p'>Validate your Returns breakup (Pre-filled)</p>
          </div>
          <div className="ITF-page5-step">
            <span>2</span>
            <p className='ITF-page5-p'>Confirm your Return Summary</p>
          </div>
          <div className="ITF-page5-step">
            <span>3</span>
            <p className='ITF-page5-p'>Verify & Submit your Return</p>
          </div>
        </div>

        <div className="ITF-page5-buttons">
          <button type="button" id="page5-back-btn">
            <Link to="/page4">
              <a href="html5.html" className="ITF-page5-anchor">Back</a>
            </Link>
          </button>
          <button type="button" id="page5-start-btn">
            <Link to="/page6" className='ITF-link'>Let's Get Started</Link>
          </button>
        </div>

        <div className="ITF-page5-documents">
          <h3>Documents list to help you file faster</h3>
          <ul>
            <li><a href="#">Form 16</a></li>
            <li><a href="#">House rent receipt</a></li>
            <li><a href="#">Interest certificate</a></li>
          </ul>
        </div>

        <div className="ITF-page5-faq">
          <h3>Frequently Asked Questions (FAQ)</h3>
          <ul>
            <li><a href="#">Do I need to file Income Tax Returns for this year?</a></li>
            <li><a href="#">I don't have a Form-16, can I still file my returns?</a></li>
            <li><a href="#">Can I file my ITR after the due date?</a></li>
          </ul>
        </div>
      </div>

      <footer className="ITF-page5-footer">
        <p className='ITF-page5-p'>© Income Tax Department, Government of India. All Rights Reserved</p>
        <p className='ITF-page5-p'>
          This site is best viewed in 1024 x 768 resolution with the latest
          versions of Chrome, Firefox, Safari, and Internet Explorer.
        </p>
      </footer>
    </div>
  );
};

export default PageFive;
