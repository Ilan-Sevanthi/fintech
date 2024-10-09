import React, { useState } from "react";
import "./PageTwo.css";
import { Link } from "react-router-dom";

const PageTwo = () => {
  const [assessmentYear, setAssessmentYear] = useState("");
  const [filingMode, setFilingMode] = useState("");

  const handleAssessmentYearChange = (e) => setAssessmentYear(e.target.value);
  const handleFilingModeChange = (e) => setFilingMode(e.target.value);

  return (
    <div>
      <header className="ITF-page2-header">
        <img src="IT-filling-logo.png" alt="Gov Logo" className="ITF-page2-logo" />
        <ul className="ITF-page2-nav">
          <li>Dashboard</li>
          <li>e-File</li>
          <li>Authorized Partners</li>
          <li>Services</li>
          <li>Pending Actions</li>
          <li>Grievances</li>
          <li>Help</li>
        </ul>
        <div className="ITF-page2-session-info">
          <span>Session Time: 2:9:31</span>
        </div>
      </header>

      <main className="ITF-page2-main">
        <section className="ITF-page2-section">
          <h2 className="ITF-page2-title">Income Tax Return (ITR)</h2>
          <p className="ITF-page2-mandatory-note">* Indicates mandatory fields</p>

          <div className="ITF-page2-overall">
            <div>
              <div className="ITF-page2-itr-form">
                <form>
                  <div className="ITF-page2-form-group">
                    <label
                      className="ITF-page2-label"
                      htmlFor="page2-assessment-year"
                    >
                      Select Assessment year{" "}
                      <span className="vpage2-label-span">*</span>
                    </label>
                    <select
                      id="page2-assessment-year"
                      value={assessmentYear}
                      onChange={handleAssessmentYearChange}
                      className="ITF-page2-select"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="2023-2024">2023-2024</option>
                      <option value="2022-2023">2022-2023</option>
                    </select>
                  </div>

                  <div className="ITF-page2-form-group">
                    <label>
                      Select Mode of Filing <span>*</span>
                    </label>
                    <div className="ITF-page2-radio-group">
                      <input
                        type="radio"
                        id="page2-online"
                        name="filing-mode"
                        value="online"
                        checked={filingMode === "online"}
                        onChange={handleFilingModeChange}
                      />
                      <label htmlFor="page2-online">Online (Recommended)</label>

                      <input
                        type="radio"
                        id="page2-offline"
                        name="filing-mode"
                        value="offline"
                        checked={filingMode === "offline"}
                        onChange={handleFilingModeChange}
                      />
                      <label htmlFor="page2-offline">Offline</label>
                    </div>
                  </div>

                  <p className="ITF-page2-note">
                    Note: The user can select the type of ITR applicable later.
                  </p>
                </form>
              </div>

              <div className="ITF-page2-form-actions">
                <button type="button" id="back-btn" className="page2-back-btn">
                  <Link to="/transactions/taxes/income-tax-filing" className="ITF-link">
                    Back
                  </Link>
                </button>
                <button type="submit" className="ITF-page2-continue-btn">
                  <Link to="/page3" className="ITF-link">
                    Continue
                  </Link>
                </button>
              </div>
           

              <section className="ITF-page2-income-tax-return">
                <div className="ITF-page2-income-tax-return-container">
                  <div className="ITF-page2-box">
                    <div className="ITF-page2-income-tax-return-h3">
                      <h3>To file a fresh Income Tax Return</h3>
                    </div>
                    <div className="ITF-page2-btn">
                      <p>
                        Income Tax Return is the form in which taxpayer files
                        information about his income and tax thereon to the
                        Income Tax Department.
                      </p>
                      <button className="ITF-page2-income-tax-return-button">
                        <Link to="/page3" className="ITF-link"> Start New Filing</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="ITF-page2-information-box">
              <h3>Information</h3>
              <p>
                If you select offline mode, you will need to upload the ITR form
                prepared using offline utility in the next step.
              </p>
            </div>
          </div>
        </section>
        
      </main>
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

export default PageTwo;
