import React, { useState } from 'react';

const Tools = () => {
  const [activeTab, setActiveTab] = useState('BasicDetails');
  const [age, setAge] = useState('Below 60 Years');
  const [residentialStatus, setResidentialStatus] = useState('Resident');
  const [incomeDetails, setIncomeDetails] = useState({
    basicSalary: 0,
    hraReceived: 0,
    actualRent: 0,
    city: 'Metro',
    otherAllowances: 0,
  });
  const [deductions, setDeductions] = useState({
    elss: 0,
    epf: 0,
    ppf: 0,
    licPremium: 0,
    other: 0,
    nps: 0,
  });
  const [calculationResult, setCalculationResult] = useState(null);

  const BasicDetails = ({ age, setAge, residentialStatus, setResidentialStatus }) => (
    <div className="basic-details-tools">
      <h3>Basic Details</h3>
      <label>Age:</label>
      <div>
        <input type="radio" value="Below 60 Years" checked={age === 'Below 60 Years'} onChange={() => setAge('Below 60 Years')} /> Below 60 Years
        <input type="radio" value="60 to 80 Years" checked={age === '60 to 80 Years'} onChange={() => setAge('60 to 80 Years')} /> 60 to 80 Years
        <input type="radio" value="Above 80 Years" checked={age === 'Above 80 Years'} onChange={() => setAge('Above 80 Years')} /> Above 80 Years
      </div>

      <label>Residential Status:</label>
      <div>
        <input type="radio" value="Resident" checked={residentialStatus === 'Resident'} onChange={() => setResidentialStatus('Resident')} /> Resident
        <input type="radio" value="Not Ordinarily Resident" checked={residentialStatus === 'Not Ordinarily Resident'} onChange={() => setResidentialStatus('Not Ordinarily Resident')} /> Not Ordinarily Resident
        <input type="radio" value="Non Resident" checked={residentialStatus === 'Non Resident'} onChange={() => setResidentialStatus('Non Resident')} /> Non Resident
      </div>
    </div>
  );

  const IncomeDetails = ({ incomeDetails, setIncomeDetails }) => (
    <div className="income-details-tools">
      <h3>Income Details</h3>
      <label>Basic Salary:</label>
      <input type="number" value={incomeDetails.basicSalary} onChange={(e) => setIncomeDetails({ ...incomeDetails, basicSalary: Number(e.target.value) })} />

      <label>HRA Received:</label>
      <input type="number" value={incomeDetails.hraReceived} onChange={(e) => setIncomeDetails({ ...incomeDetails, hraReceived: Number(e.target.value) })} />

      <label>Actual Rent:</label>
      <input type="number" value={incomeDetails.actualRent} onChange={(e) => setIncomeDetails({ ...incomeDetails, actualRent: Number(e.target.value) })} />

      <label>City:</label>
      <div>
        <input type="radio" value="Metro" checked={incomeDetails.city === 'Metro'} onChange={() => setIncomeDetails({ ...incomeDetails, city: 'Metro' })} /> Metro
        <input type="radio" value="Non Metro" checked={incomeDetails.city === 'Non Metro'} onChange={() => setIncomeDetails({ ...incomeDetails, city: 'Non Metro' })} /> Non Metro
      </div>

      <label>Other Taxable Allowances:</label>
      <input type="number" value={incomeDetails.otherAllowances} onChange={(e) => setIncomeDetails({ ...incomeDetails, otherAllowances: Number(e.target.value) })} />
    </div>
  );

  const Deductions = ({ deductions, setDeductions }) => (
    <div className="deductions-tools">
      <h3>Deductions</h3>
      <label>ELSS:</label>
      <input type="number" value={deductions.elss} onChange={(e) => setDeductions({ ...deductions, elss: Number(e.target.value) })} />

      <label>EPF:</label>
      <input type="number" value={deductions.epf} onChange={(e) => setDeductions({ ...deductions, epf: Number(e.target.value) })} />

      <label>PPF:</label>
      <input type="number" value={deductions.ppf} onChange={(e) => setDeductions({ ...deductions, ppf: Number(e.target.value) })} />

      <label>LIC Premium:</label>
      <input type="number" value={deductions.licPremium} onChange={(e) => setDeductions({ ...deductions, licPremium: Number(e.target.value) })} />

      <label>Other:</label>
      <input type="number" value={deductions.other} onChange={(e) => setDeductions({ ...deductions, other: Number(e.target.value) })} />

      <label>NPS:</label>
      <input type="number" value={deductions.nps} onChange={(e) => setDeductions({ ...deductions, nps: Number(e.target.value) })} />
    </div>
  );

  const ResultDisplay = ({ result }) => (
    <div className="result-display-tools">
      <h2>Result Display</h2>
      <table>
        <thead>
          <tr>
            <th>Particulars</th>
            <th colSpan="2">Tax Regime</th>
          </tr>
          <tr>
            <th></th>
            <th>Old</th>
            <th>New</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gross Total Income</td>
            <td>₹ {result.grossTotalIncome.toFixed(2)}</td>
            <td>₹ {result.grossTotalIncome.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total Deductions</td>
            <td>₹ {result.totalDeductions.toFixed(2)}</td>
            <td>₹ {result.totalDeductions.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Gross Taxable Income</td>
            <td>₹ {result.grossTaxableIncome.toFixed(2)}</td>
            <td>₹ {result.grossTaxableIncome.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Tax on Total Income</td>
            <td>₹ {result.taxOnTotalIncome.toFixed(2)}</td>
            <td>₹ {result.taxOnTotalIncome.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Surcharge</td>
            <td>₹ {result.surcharge.toFixed(2)}</td>
            <td>₹ {result.surcharge.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Health and Education Cess</td>
            <td>₹ {result.healthAndEducationCess.toFixed(2)}</td>
            <td>₹ {result.healthAndEducationCess.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total Tax Payable</td>
            <td>₹ {(result.taxOnTotalIncome + result.surcharge + result.healthAndEducationCess).toFixed(2)}</td>
            <td>₹ {(result.taxOnTotalIncome + result.surcharge + result.healthAndEducationCess).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <button className="clear-button-tools" onClick={() => setCalculationResult(null)}>Clear Results</button>
    </div>
  );

  const handleCalculate = () => {
    // Perform calculations here (simplified for demonstration)
    const grossTotalIncome = incomeDetails.basicSalary + incomeDetails.hraReceived + incomeDetails.otherAllowances;
    const totalDeductions = Object.values(deductions).reduce((sum, value) => sum + value, 0);
    const grossTaxableIncome = grossTotalIncome - totalDeductions;
    const taxOnTotalIncome = grossTaxableIncome * 0.1; // Simplified tax calculation
    const surcharge = taxOnTotalIncome * 0.05; // Simplified surcharge calculation
    const healthAndEducationCess = (taxOnTotalIncome + surcharge) * 0.04; // Simplified cess calculation

    setCalculationResult({
      grossTotalIncome,
      totalDeductions,
      grossTaxableIncome,
      taxOnTotalIncome,
      surcharge,
      healthAndEducationCess,
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'BasicDetails':
        return <BasicDetails age={age} setAge={setAge} residentialStatus={residentialStatus} setResidentialStatus={setResidentialStatus} />;
      case 'IncomeDetails':
        return <IncomeDetails incomeDetails={incomeDetails}         setIncomeDetails={setIncomeDetails} />;
      case 'Deductions':
        return <Deductions deductions={deductions} setDeductions={setDeductions} />;
      default:
        return null;
    }
  };

  return (
    <div className="tax-calculator-tools">
      <h2>Income Tax Calculator</h2>
      <p>Select financial year, add income details & eligible deductions to calculate your income tax liability under the Old & New Tax Regime.</p>
     
      <div className="tabs-tools">
        <button onClick={() => setActiveTab('BasicDetails')}>Basic Details</button>
        <button onClick={() => setActiveTab('IncomeDetails')}>Income Details</button>
        <button onClick={() => setActiveTab('Deductions')}>Deductions</button>
      </div>

      <div className="form-section-tools">
        {renderContent()}
      </div>

      <button onClick={handleCalculate}>Calculate</button>

      {calculationResult && <ResultDisplay result={calculationResult} />}

      <style jsx>{`
        .tax-calculator-tools {
          font-family: Arial, sans-serif;
          padding: 20px;
          max-width: 800px;
          margin: auto;
          background: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
       
        .tax-calculator-tools h2 {
          text-align: center;
          color: #333;
        }
       
        .tax-calculator-tools p {
          text-align: center;
          color: #555;
        }
       
        .tabs-tools {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
        }
       
        .tabs-tools button {
          flex: 1;
          padding: 10px;
          margin: 0 5px;
          cursor: pointer;
          border: none;
          background: #004e97;
          border-radius: 5px;
          transition: background 0.3s ease;
        }
       
        .tabs-tools button:hover {
          background: #d0d0d0;
        }
       
        .form-section-tools, .income-details-tools, .deductions-tools {
          display: block;
        }
       
        .form-section-tools.active, .income-details-tools.active, .deductions-tools.active {
          display: block;
        }
       
        label, input[type="number"], input[type="radio"] {
          display: block;
          margin: 10px 0;
        }
       
        input[type="number"], input[type="radio"] {
          padding: 8px;
          width: 100%;
          box-sizing: border-box;
        }
       
        button {
          background: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
       
        button:hover {
          background: #0056b3;
        }

        .result-display-tools {
          margin: 20px 0;
        }

        .result-display-tools table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        .result-display-tools th,
        .result-display-tools td {
          border: 2px solid #000;
          padding: 10px;
          text-align: center;
        }

        .result-display-tools th {
          background-color: #f2f2f2;
        }

        .clear-button-tools {
          padding: 10px 20px;
          background-color: #d9534f;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .clear-button-tools:hover {
          background-color: #c9302c;
        }
      `}</style>
    </div>
  );
};

export default Tools;
