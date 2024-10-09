import React from "react";
import './PageSix.css'; // Import the CSS file
import { Link } from "react-router-dom";

function PageSix() {
  return (
    <div>
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

      <div>
        <h1 className="ITF-page6-h1">Please answer the following questions to proceed further</h1>

        <div className="ITF-container">
          <form>
            <div className="ITF-form-group">
              <h4 className="ITF-page6-h4">Are you filing the income tax return for any of the following reasons?</h4>
              <div className="ITF-option-group">
                <input type="radio" id="taxable-income" name="filing-reason" value="taxable-income" defaultChecked />
                <label htmlFor="taxable-income">Taxable income is more than basic exemption limit</label>
              </div>

              <div className="ITF-option-group">
                <input type="radio" id="seventh-proviso" name="filing-reason" value="seventh-proviso" />
                <label htmlFor="seventh-proviso">
                  Filing return of income due to fulfilling any one or more of below mentioned conditions as per Seventh Proviso to section 139(1):
                </label>
                </div>
              <div className="ITF-option-group">
              <input type="checkbox" id="foreign-travel" name="conditions" value="foreign-travel" />
                    <label htmlFor="foreign-travel">
                      Incurred expenditure of an amount or aggregate of amount exceeding ₹ 2 lakhs for travel to a foreign country for yourself or for any other person;
                    </label>
                </div>
              <div className="ITF-option-group">
              <input type="checkbox" id="electricity" name="conditions" value="electricity" />
                    <label htmlFor="electricity">
                      Incurred expenditure of amount or aggregate of amount exceeding ₹ 1 lakh on consumption of electricity during the previous year
                    </label>
                </div>
              <div className="ITF-option-group">
              <input type="checkbox" id="other-conditions" name="conditions" value="other-conditions" />
                    <label htmlFor="other-conditions">
                      Are you required to file a return as per other conditions prescribed under clause (iv) of seventh proviso to section 139(1)
                    </label>
                </div>
              <div className="ITF-option-group">
                <input type="radio" id="others" name="filing-reason" value="others" />
                <label htmlFor="others">Others</label>
              </div>
            </div>
          </form>
        </div>
        <div className="pagesix_submit-buttons">
        <button type="button" id="back-btn">
          <Link to="/page5" className='ITF-link'>Back</Link>
        </button>
        <button type="submit" className="ITF-continue-btn">
          <Link to="/page7" className='ITF-link'>Continue</Link>
        </button>
        </div>
      </div>
    </div>
  );
}

export default PageSix;
