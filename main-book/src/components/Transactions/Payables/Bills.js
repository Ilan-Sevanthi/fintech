import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Bills.css";

function InvoiceModal({ data, isRecurring, closeModal }) {
  return (
    <div className="modal_invoice">
      <div className="modal-content_invoice">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Invoice</h2>
        <div className="invoice-header">
          <div>
            <p>
              <strong>Invoice Number</strong> INV
              {data.invoiceGeneration || Math.floor(Math.random() * 1000000)}
            </p>
            <p>
              <strong>Date</strong>{" "}
              {data.invoiceDate || new Date().toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div className="invoice-details">
          <div className="bill-to">
            <h3>Bill To</h3>
            <p>
              <strong>Name</strong> {data.clientName}
            </p>
            <p>
              <strong>Account Number</strong> {data.accountNumber}
            </p>
            <p>
              <strong>Phone Number</strong> {data.phoneNumber}
            </p>
          </div>
          <div className="ownership-details">
            <h3>Ownership Details</h3>
            <p>
              <strong>Name</strong> Zoonoodle Inc
            </p>
            <p>
              <strong>Address</strong> 21023 Pearson Point Road, Gateway Avenue
            </p>
            <p>
          <strong>Pay Period:</strong>{" "}
          {isRecurring
            ? `Up to ${data.dueDate}`
            : `${data.startDate} to ${data.finishDate}`}
        </p>
        <p>
          <strong>Ref #:</strong> REF
          {data.invoiceGeneration || Math.floor(Math.random() * 1000000)}
        </p>
        <p>
          <strong>Total Amount</strong> ₹
          {parseFloat(data.totalAmount).toFixed(2)}
        </p>
          </div>
        </div>
       
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {isRecurring
                  ? "Recurring Service Charges"
                  : `Service Charges (${data.duration} days @ ₹${data.costPerDay}/day)`}
              </td>
              <td>₹{data.totalAmount}</td>
            </tr>
            <tr>
              <td>GST (18%)</td>
              <td>₹{(parseFloat(data.totalAmount) * 0.18).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Net Pay:</strong> ₹
          {(parseFloat(data.totalAmount) * 1.18).toFixed(2)}
        </p>
        <div className="invoice-actions_invoice">
          <button>Download Invoice</button>
          <button>Share Invoice</button>
          <button>Copy Link</button>
        </div>
      </div>
    </div>
  );
}

function Bills() {
  // States for generate bills and recurring bills
  const [generateBillData, setGenerateBillData] = useState({
    phoneNumber: "",
    clientName: "",
    gstNo: "", // Use gstNo here as per your backend schema
    accountNumber: "",
    invoiceDate: "",
    startDate: "",
    finishDate: "",
    duration: "",
    costPerDay: "",
    totalAmount: "",
    invoiceGeneration: "",
  });

  const [recurringBillData, setRecurringBillData] = useState({
    phoneNumber: "",
    accountNumber: "",
    clientName: "",
    gstNo: "", // Use gstNo here as per your backend schema
    dueDate: "",
    noOfFuturePayments: "",
    totalAmount: "",
  });

  const [showGenerateInvoice, setShowGenerateInvoice] = useState(false);
  const [showRecurringInvoice, setShowRecurringInvoice] = useState(false);
  const [showStatementCard, setShowStatementCard] = useState(false);
  const [invoiceReady, setInvoiceReady] = useState(false);
  const [monthlyPayments, setMonthlyPayments] = useState([]);

  // Auto-calculate total amount for generated bills based on duration and cost per day
  useEffect(() => {
    const { duration, costPerDay } = generateBillData;
    if (duration && costPerDay) {
      setGenerateBillData((prevData) => ({
        ...prevData,
        totalAmount: (duration * costPerDay).toFixed(2),
      }));
    }
  }, [generateBillData.duration, generateBillData.costPerDay]);

  // Calculate number of days based on start date and finish date for generate bill
  useEffect(() => {
    if (generateBillData.startDate && generateBillData.finishDate) {
      const start = new Date(generateBillData.startDate);
      const end = new Date(generateBillData.finishDate);
      const diffInTime = end.getTime() - start.getTime();
      const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));

      setGenerateBillData((prevData) => ({
        ...prevData,
        duration: diffInDays,
      }));
    }
  }, [generateBillData.startDate, generateBillData.finishDate]);

  // Calculate monthly payments and future payments count based on total amount
  const calculateMonthlyPayments = (totalAmount) => {
    const monthlyPayment = (totalAmount / 12).toFixed(2);
    const currentDate = new Date();
    const futureMonths = [];

    for (let i = 0; i < 12; i++) {
      const futureDate = new Date(
        currentDate.setMonth(currentDate.getMonth() + 1)
      );
      futureMonths.push({
        month: futureDate.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        }),
        amount: monthlyPayment,
      });
    }

    setMonthlyPayments(futureMonths);
    setRecurringBillData((prevData) => ({
      ...prevData,
      noOfFuturePayments: futureMonths.length,
    }));
  };

  // Fetch personal details based on phone number, including gstNo
  const fetchPersonalDetails = async (phoneNo, setBillData) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/personal-details/client-info?phoneNo=${phoneNo}`
      );
      if (response.data) {
        const { clientName, accountNumber, gstNo } = response.data; // Use gstNo as per the schema
        setBillData((prevData) => ({
          ...prevData,
          clientName: clientName || "",
          accountNumber: accountNumber || "",
          gstNo: gstNo || "", // Store gstNo in the state
        }));
      } else {
        setBillData((prevData) => ({
          ...prevData,
          clientName: "",
          accountNumber: "",
          gstNo: "",
        }));
        alert("Phone number not found in the database");
      }
    } catch (error) {
      console.error("Error fetching personal details", error);
      alert("Error fetching personal details");
    }
  };

  const handleGenerateBillChange = (e) => {
    const { name, value } = e.target;
    setGenerateBillData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "phoneNumber" && value.length === 10) {
      fetchPersonalDetails(value, setGenerateBillData);
    }
  };

  const handleRecurringBillChange = (e) => {
    const { name, value } = e.target;
    setRecurringBillData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "phoneNumber" && value.length === 10) {
      fetchPersonalDetails(value, setRecurringBillData);
    }

    if (name === "totalAmount" && value) {
      setShowStatementCard(true);
      calculateMonthlyPayments(value);
    }
  };

  // Save generated bill data to the database
  const saveGenerateBillData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/generatebills",
        generateBillData
      );
      if (response.status === 201) {
        alert("Generate Bill data saved successfully!");
        setInvoiceReady(true);
      } else {
        alert("Failed to save the Generate Bill data.");
        setInvoiceReady(false);
      }
    } catch (error) {
      console.error("Error saving Generate Bill data", error);
      alert("Error saving Generate Bill data.");
      setInvoiceReady(false);
    }
  };

  // Save recurring bill data to the database
  const saveRecurringBillData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/recurringbills",
        recurringBillData
      );
      if (response.status === 201) {
        alert("Recurring Bill data saved successfully!");
        setInvoiceReady(true);
      } else {
        alert("Failed to save the Recurring Bill data.");
        setInvoiceReady(false);
      }
    } catch (error) {
      console.error("Error saving Recurring Bill data", error);
      alert("Error saving Recurring Bill data.");
      setInvoiceReady(false);
    }
  };

  const handleGenerateBillSubmit = async (e) => {
    e.preventDefault();
    setInvoiceReady(false);
    await saveGenerateBillData();
  };

  const handleRecurringBillSubmit = async (e) => {
    e.preventDefault();
    setInvoiceReady(false);
    await saveRecurringBillData();
  };

  const handleGenerateInvoiceClick = () => {
    if (invoiceReady) {
      setShowGenerateInvoice(true);
    } else {
      alert("Please save the invoice data first.");
    }
  };

  const handleRecurringInvoiceClick = () => {
    if (invoiceReady) {
      setShowRecurringInvoice(true);
    } else {
      alert("Please save the invoice data first.");
    }
  };

  const closeModal = () => {
    setShowGenerateInvoice(false);
    setShowRecurringInvoice(false);
  };

  const handleAmountEdit = (e) => {
    setRecurringBillData((prevData) => ({
      ...prevData,
      totalAmount: e.target.value,
    }));
    calculateMonthlyPayments(e.target.value);
  };

  return (
    <div className="container_bills">
      <div className="split-screen_bills">
        {/* Generate Bill Section */}
        <div className="section-generate-bills">
          <h2>Generate Bill:</h2>
          <form id="generate-bill-form" onSubmit={handleGenerateBillSubmit}>
            <div className="form-group">
              <label>
                Phone Number<span className="ashterisk">*</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={generateBillData.phoneNumber || ""}
                onChange={handleGenerateBillChange}
                placeholder="Phone no."
              />
            </div>
            <div className="form-group_bills">
              <label>
                Client Name<span className="ashterisk">*</span>
              </label>
              <input
                type="text"
                name="clientName"
                value={generateBillData.clientName || ""}
                placeholder="Client Name"
                readOnly
              />
            </div>
            <div className="form-group_bills">
              <label>
                GST No.<span className="ashterisk">*</span>
              </label>
              <input
                type="text"
                name="gstNo" // Use gstNo here
                value={generateBillData.gstNo || ""}
                placeholder="GST Number"
                readOnly
              />
            </div>
            <div className="form-group_bills">
              <label>
                Account No.<span className="ashterisk">*</span>
              </label>
              <input
                type="text"
                name="accountNumber"
                value={generateBillData.accountNumber || ""}
                onChange={handleGenerateBillChange}
                placeholder="Account Number"
              />
            </div>
            <div className="form-group_bills">
              <label>
                Invoice Date<span className="ashterisk">*</span>
              </label>
              <input
                type="date"
                name="invoiceDate"
                value={generateBillData.invoiceDate || ""}
                onChange={handleGenerateBillChange}
              />
            </div>
            <div className="form-group_bills">
              <label>
                Start Date<span className="ashterisk">*</span>
              </label>
              <input
                type="date"
                name="startDate"
                value={generateBillData.startDate || ""}
                onChange={handleGenerateBillChange}
              />
            </div>
            <div className="form-group_bills">
              <label>
                Finish Date<span className="ashterisk">*</span>
              </label>
              <input
                type="date"
                name="finishDate"
                value={generateBillData.finishDate || ""}
                onChange={handleGenerateBillChange}
              />
            </div>
            <div className="form-group_bills">
              <label>
                Duration<span className="ashterisk">*</span>
              </label>
              <input
                type="number"
                name="duration"
                value={generateBillData.duration || ""}
                placeholder="Duration in days"
                readOnly
              />
            </div>
            <div className="form-group_bills">
              <label>
                Cost per Day<span className="ashterisk">*</span>
              </label>
              <input
                type="number"
                name="costPerDay"
                value={generateBillData.costPerDay || ""}
                onChange={handleGenerateBillChange}
                placeholder="Amount"
              />
            </div>
            <div className="form-group_bills">
              <label>
                Total Amount<span className="ashterisk">*</span>
              </label>
              <input
                type="number"
                name="totalAmount"
                value={generateBillData.totalAmount || ""}
                onChange={handleGenerateBillChange}
                placeholder="Total Amount"
                readOnly
              />
            </div>
            <div className="form-group_bills">
              <label>
                Invoice Generation<span className="ashterisk">*</span>
              </label>
              <input
                type="text"
                name="invoiceGeneration"
                value={generateBillData.invoiceGeneration || ""}
                onChange={handleGenerateBillChange}
                placeholder="Invoice ID"
              />
            </div>
            <button type="submit" className="submit-button_bills">
              Submit
            </button>
            <button
              type="button"
              className="generate-invoice-button_bills"
              onClick={handleGenerateInvoiceClick}
            >
              Generate Invoice
            </button>
          </form>
        </div>

        {/* Recurring Bill Section */}
        <div className="section-recurring-bills">
          <h2>Recurring Bill</h2>
          <form id="recurring-bill-form" onSubmit={handleRecurringBillSubmit}>
            <div className="form-group_bills">
              <label>
                Phone Number<span className="ashterisk">*</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={recurringBillData.phoneNumber || ""}
                onChange={handleRecurringBillChange}
                placeholder="Phone no."
              />
            </div>
            <div className="form-group_bills">
              <label>
                Account No.<span className="ashterisk">*</span>
              </label>
              <input
                type="text"
                name="accountNumber"
                value={recurringBillData.accountNumber || ""}
                onChange={handleRecurringBillChange}
                placeholder="Account Number"
                readOnly
              />
            </div>
            <div className="form-group_bills">
              <label>
                Client Name<span className="ashterisk">*</span>
              </label>
              <input
                type="text"
                name="clientName"
                value={recurringBillData.clientName || ""}
                placeholder="Client Name"
                readOnly
              />
            </div>
            <div className="form-group_bills">
              <label>
                GST No.<span className="ashterisk">*</span>
              </label>
              <input
                type="text"
                name="gstNo" // Use gstNo here
                value={recurringBillData.gstNo || ""}
                placeholder="GST Number"
                readOnly
              />
            </div>
            <div className="form-group_bills">
              <label>
                Due Date (Calendar)<span className="ashterisk">*</span>
              </label>
              <input
                type="date"
                name="dueDate"
                value={recurringBillData.dueDate || ""}
                onChange={handleRecurringBillChange}
              />
            </div>
            <div className="form-group_bills">
              <label>
                Total Amount<span className="ashterisk">*</span>
              </label>
              <input
                type="number"
                name="totalAmount"
                value={recurringBillData.totalAmount || ""}
                onChange={handleRecurringBillChange}
                placeholder="Total Amount"
              />
            </div>

            {showStatementCard && (
              <div className="statement-card_bills">
                <div className="header">
                  <h2>Current Statement</h2>
                  <div className="amount-row">
                    <div className="amount-value">
                      <p>
                        Amount
                        <input
                          type="number"
                          value={recurringBillData.totalAmount || ""}
                          onChange={handleAmountEdit}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="payment-date">
                    <p>
                      Payment Due Date{" "}
                      <strong>{recurringBillData.dueDate}</strong>
                    </p>
                  </div>
                </div>
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Acc no</th>
                        <th>Client</th>
                        <th>No. of Future Payments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyPayments.map((payment, index) => (
                        <tr key={index}>
                          <td>{recurringBillData.accountNumber}</td>
                          <td>{recurringBillData.clientName}</td>
                          <td>
                            {payment.month} - ₹{payment.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <button type="submit" className="submit-button_bills">
              Submit
            </button>
            <button
              type="button"
              className="generate-invoice-button_bills"
              onClick={handleRecurringInvoiceClick}
              // disabled={!invoiceReady} // Only enable if invoice data is saved
            >
              Generate Invoice
            </button>
          </form>
        </div>
      </div>

      {showGenerateInvoice && (
        <InvoiceModal
          data={generateBillData}
          isRecurring={false}
          closeModal={closeModal}
        />
      )}
      {showRecurringInvoice && (
        <InvoiceModal
          data={recurringBillData}
          isRecurring={true}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default Bills;
