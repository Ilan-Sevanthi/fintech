import React, { useState } from "react";
import "./PageSeven.css"; // Import the CSS file

const PageSeven = () => {
  const [step, setStep] = useState(1); // Example of using useState hook

  // Function to handle the 'Next' button click
  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1); // Increment step
    }
  };

  // Function to handle the 'Back' button click
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1); // Decrement step
    }
  };

  // Function to handle round clicks (when clicking on 1, 2, 3, etc.)
  const handleStepClick = (stepNumber) => {
    setStep(stepNumber); // Set the clicked round as the current step
  };

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

      <div className="ITF-page7-container">
        <div className="ITF-page7-return-summary">
          <h1 className="ITF-page7-h1">Return Summary</h1>
          <div className="ITF-page7-steps">
            {/* Add onClick event to rounds */}
            {[1, 2, 3, 4, 5].map((round) => (
              <React.Fragment key={round}>
                <div
                  className={`ITF-page7-rounds ${
                    step === round ? "page7-active" : ""
                  }`}
                  onClick={() => handleStepClick(round)}
                  data-step={round}
                >
                  {round}
                </div>
                {round !== 5 && <div className="ITF-page7-line"></div>}
              </React.Fragment>
            ))}
          </div>

          {/* List of summary items based on current step */}
          <ul className="ITF-page7-summary-list">
            {step === 1 && (
              <li
                className="ITF-page7-active-item"
                data-step="1"
              >
                <div className="ITF-page7-images">
                  <img
                    src="personal information.png"
                    className="ITF-page7-image"
                    alt=""
                  />
                </div>
                <div className="ITF-page7-details">
                  <h3 className="ITF-page7-title">Personal Information</h3>
                  <p className="ITF-page7-description">
                    Includes your Aadhaar, PAN, Contact, and Bank details.
                  </p>
                </div>
                <div className="ITF-page7-action">
                  <span>₹ 5,40,034</span>
                  <span>Provide your confirmation</span>
                </div>
                <button
                  type="button"
                  className="ITF-page7-next-btn"
                  onClick={handleNext}
                  disabled={step === 5}
                >
                  Next
                </button>
              </li>
            )}

            {step === 2 && (
              <li
                className="ITF-page7-active-item"
                data-step="2"
              >
                <div className="ITF-page7-images">
                  <img
                    src="gross total income.png"
                    className="ITF-page7-image"
                    alt=""
                  />
                </div>
                <div className="ITF-page7-details">
                  <h3 className="ITF-page7-title">Gross Total Income</h3>
                  <p className="ITF-page7-description">
                    Includes your income details like Salary, House Property,
                    Income from other sources such as Bank Interests, etc.
                  </p>
                </div>
                <div className="ITF-page7-action">
                  <span>₹ 6,40,034</span>
                  <span>Provide your confirmation</span>
                </div>
                <button
                  type="button"
                  className="ITF-page7-next-btn"
                  onClick={handleNext}
                  disabled={step === 5}
                >
                  Next
                </button>
              </li>
            )}

            {step === 3 && (
              <li
                className="ITF-page7-active-item"
                data-step="3"
              >
                <div className="ITF-page7-images">
                  <img
                    src="total dectuction.png"
                    className="ITF-page7-image"
                    alt=""
                  />
                </div>
                <div className="ITF-page7-details">
                  <h3 className="ITF-page7-title">Total Deductions</h3>
                  <p className="ITF-page7-description">
                    Includes tax saving deductions or payments toward life
                    insurance, medical premium, pension funds, provident fund,
                    etc.
                  </p>
                </div>
                <div className="ITF-page7-action">
                  <span>₹ 0</span>
                  <span>Provide your confirmation</span>
                </div>
                <button
                  type="button"
                  className="ITF-page7-next-btn"
                  onClick={handleNext}
                  disabled={step === 5}
                >
                  Next
                </button>
              </li>
            )}

            {step === 4 && (
              <li
                className="ITF-page7-active-item"
                data-step="4"
              >
                <div className="ITF-page7-images">
                  <img
                    src="tax paid.png"
                    className="ITF-page7-image"
                    alt=""
                  />
                </div>
                <div className="ITF-page7-details">
                  <h3 className="ITF-page7-title">Tax Paid</h3>
                  <p className="ITF-page7-description">
                    Includes details of taxes deducted and paid by deductors
                    like employers. Also includes taxes paid by you, such as
                    advance tax or self-assessment tax.
                  </p>
                </div>
                <div className="ITF-page7-action">
                  <span>₹ 26,869</span>
                  <span>Provide your confirmation</span>
                </div>
                <button
                  type="button"
                  className="ITF-page7-next-btn"
                  onClick={handleNext}
                  disabled={step === 5}
                >
                  Next
                </button>
              </li>
            )}

            {step === 5 && (
              <li
                className="ITF-page7-active-item"
                data-step="5"
              >
                <div className="ITF-page7-images">
                  <img
                    src="total tax liability.png"
                    className="ITF-page7-image"
                    alt=""
                  />
                </div>
                <div className="ITF-page7-details">
                  <h3 className="ITF-page7-title">Total Tax Liability</h3>
                  <p className="ITF-page7-description">
                    Includes computation of tax you owe to the Government based
                    on your income and deductions.
                  </p>
                </div>
                <div className="ITF-page7-action">
                  <span>₹ 43,194</span>
                  <span>Provide your confirmation</span>
                </div>
                <button
                  type="button"
                  className="ITF-page7-next-btn"
                  onClick={handleNext}
                  disabled={step === 5}
                >
                  Next
                </button>
              </li>
            )}
          </ul>

          {/* Add Next and Back buttons */}
          <div className="ITF-page7-navigation-buttons">
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSeven;
