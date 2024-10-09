import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TallyERP9Interface = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    directory: '',
    name: '',
    mailingName: '',
    address: '',
    country: '',
    state: '',
    pincode: '',
    financialYear: '',
    booksBeginning: '',
    tallyVaultPassword: '',
    repeatPassword: '',
    useSecurityControl: false,
    currencySymbol: '₹',
    formalName: '',
    suffixSymbol: false,
    spaceBetweenSymbol: true,
    amountInMillions: false
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send formData as a JSON string
      });
      if (response.ok) {
        alert('Company created successfully!');
        navigate('/crm/view-vendors');
      } else {
        alert('Failed to create company');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the company');
    }
  };

  const states = [
    "Tamil Nadu", "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "India",
    "Punjab", "Madras", "Tripura", "Odissa", "Ranchi", "Maharashtra", "West Bengal"
  ];

  return (
    <div className="tally-interface">
      <div className="tally-navbar">
        <button onClick={() => navigate('/crm/view-vendors')} className="back-button">Back</button>
        <div>P: Print</div>
        <div>E: Export</div>
        <div>M: E-Mail</div>
        <div>O: Upload</div>
        <div>S: TallyShop</div>
        <div>G: Language</div>
        <div>K: Keyboard</div>
        <div>Ctrl + M: Control Centre</div>
        <div>Ctrl + H: Support Centre</div>
        <div>Ctrl + I: Help</div>
      </div>

      <form onSubmit={handleSubmit} className="tally-container">
        <div className="tally-main-content">
          <div className="tally-section-title">Company Creation</div>
          <div className="tally-input-row">
            <label htmlFor="directory">Directory</label>
            <input
              type="text"
              id="directory"
              value={formData.directory}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-input-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-section-title">Primary Mailing Details</div>
          <div className="tally-input-row">
            <label htmlFor="mailingName">Mailing Name</label>
            <input
              type="text"
              id="mailingName"
              value={formData.mailingName}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-input-row">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-input-row">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-input-row">
            <label htmlFor="state">State</label>
            <select
              id="state"
              value={formData.state}
              onChange={handleInputChange}
            >
              <option value="">Select a state</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="tally-input-row">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              id="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-section-title">Books and Financial Year Details</div>
          <div className="tally-input-row">
            <label htmlFor="financialYear">Financial year begins from</label>
            <input
              type="text"
              id="financialYear"
              value={formData.financialYear}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-input-row">
            <label htmlFor="booksBeginning">Books beginning from</label>
            <input
              type="text"
              id="booksBeginning"
              value={formData.booksBeginning}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-section-title">Security Control</div>
          <div className="tally-input-row">
            <label htmlFor="tallyVaultPassword">TallyVault password (if any)</label>
            <input
              type="password"
              id="tallyVaultPassword"
              value={formData.tallyVaultPassword}
              onChange={handleInputChange}
              disabled={!formData.useSecurityControl}
            />
          </div>
          <div className="tally-input-row">
            <label htmlFor="repeatPassword">Repeat password</label>
            <input
              type="password"
              id="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleInputChange}
              disabled={!formData.useSecurityControl}
            />
          </div>
          <div className="tally-input-row">
            <label htmlFor="useSecurityControl">Use security control?</label>
            <input
              type="checkbox"
              id="useSecurityControl"
              checked={formData.useSecurityControl}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-section-title">Base Currency Information</div>
          <div className="tally-input-row">
            <label htmlFor="currencySymbol">Base currency symbol</label>
            <input
              type="text"
              id="currencySymbol"
              value={formData.currencySymbol}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-input-row">
            <label htmlFor="formalName">Formal name</label>
            <input
              type="text"
              id="formalName"
              value={formData.formalName}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-input-row">
            <label htmlFor="suffixSymbol">Suffix symbol to amount</label>
            <input
              type="checkbox"
              id="suffixSymbol"
              checked={formData.suffixSymbol}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-input-row">
            <label htmlFor="spaceBetweenSymbol">Add space between amount and symbol</label>
            <input
              type="checkbox"
              id="spaceBetweenSymbol"
              checked={formData.spaceBetweenSymbol}
              onChange={handleInputChange}
            />
          </div>
          <div className="tally-input-row">
            <label htmlFor="amountInMillions">Show amount in millions</label>
            <input
              type="checkbox"
              id="amountInMillions"
              checked={formData.amountInMillions}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>

      <div className="tally-footer">
        <button type="submit" onClick={handleSubmit}>S: Save</button>
      </div>

      <style jsx>{`
        .tally-interface {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          color: #000;

        }
        .tally-navbar {
            margin-top: 50px;
          background-color: #8D6E63;
          padding: 10px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: white;
          font-weight: bold;
          text-transform: uppercase;
        }
        .back-button {
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 5px 10px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 12px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 5px;
          
        }
        .tally-container {
          display: flex;
          justify-content: center;
          padding: 20px;
            margin-bottom: 20px;

        }
        .tally-main-content {
          background-color: #F5F5F5;
          padding: 20px;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 5px;
          // margin-bottom: 80px;
          height:600px;
          overflow-Y:scroll;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .tally-section-title {
          font-weight: bold;
          margin-bottom: 10px;
          border-bottom: 2px solid #ccc;
          padding-bottom: 5px;
          color: #37474F;
          text-transform: uppercase;
        }
        .tally-input-row {
          margin-bottom: 15px;
          display: flex;
          align-items: center;
        }
        .tally-input-row label {
          display: inline-block;
          width: 200px;
          color: #37474F;
          font-weight: bold;
        }
        .tally-input-row input[type="text"],
        .tally-input-row input[type="password"],
        .tally-input-row select {
          padding: 8px;
          width: calc(100% - 210px);
          border: 1px solid #ccc;
          border-radius: 4px;
          box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1);
        }
        .tally-input-row input[type="checkbox"] {
          margin-left: 10px;
        }
        .tally-footer {
          background-color: #8D6E63;
          padding: 10px;
          text-align: center;
          color: white;
          font-weight: bold;
          position: fixed;
          bottom: 0;
          width: 92%;
          box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
        }
        .tally-footer button {
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 5px;
        }
        .tally-navbar{
        gap:14px;
        }
      `}</style>
    </div>
  );
};

export default TallyERP9Interface;
