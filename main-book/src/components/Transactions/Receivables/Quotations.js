import React, { useState } from "react";
import axios from "axios"; // Import axios
import "./Quotations.css";

// Utility function to generate a random GST number (example format: 22ABCDE1234F1Z5)
const generateGSTNumber = () => {
  const stateCode = "22"; // Assuming state code is '22', modify based on your region
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const gstPart1 = Array.from(
    { length: 5 },
    () => alphabets[Math.floor(Math.random() * alphabets.length)]
  ).join("");
  const gstPart2 = Math.floor(1000 + Math.random() * 9000).toString();
  const gstPart3 = alphabets[Math.floor(Math.random() * alphabets.length)];
  return `${stateCode}${gstPart1}${gstPart2}${gstPart3}1Z5`;
};

// Utility function to generate a random Quotation number (example format: Q12345)
const generateQuotationNumber = () => {
  return `Q${Math.floor(10000 + Math.random() * 90000)}`;
};

const TAX_RATE = 18; // Default tax rate as a percentage

function Quotations() {
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(100);
  const [currency, setCurrency] = useState("INR");
  const [items, setItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [quotationHistory, setQuotationHistory] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // State to show or hide popup
  const [selectedQuotation, setSelectedQuotation] = useState(null); // To store selected quotation details

  // Generate GST number and Quotation number
  const [quotationNumber, setQuotationNumber] = useState(
    generateQuotationNumber()
  );
  const [gstNumber, setGstNumber] = useState(generateGSTNumber());

  let currencySymbol = "₹";
  if (currency === "USD") currencySymbol = "$";
  if (currency === "EUR") currencySymbol = "€";

  const addItem = () => {
    if (itemDescription && quantity && unitPrice) {
      const netAmount = quantity * unitPrice;
      const taxAmount = netAmount * (TAX_RATE / 100);
      const totalAmount = netAmount + taxAmount;
      setGrandTotal((prevTotal) => prevTotal + totalAmount);

      setItems([
        ...items,
        {
          itemDescription,
          quantity,
          unitPrice,
          netAmount,
          taxAmount,
          totalAmount,
        },
      ]);

      // Clear input fields for the next item
      setItemDescription("");
      setQuantity(1);
      setUnitPrice(100);
    }
  };

  const saveQuotation = async () => {
    const quotationData = {
      clientName,
      clientCompany,
      items: items.map((item) => ({
        itemDescription: item.itemDescription,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        netAmount: item.netAmount,
        taxAmount: item.taxAmount,
        totalAmount: item.totalAmount,
      })),
      grandTotal,
      currency,
      quotationNumber,
      gstNumber,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/quotations",
        quotationData
      );
      alert("Quotation saved successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error saving the quotation:", error);
      alert("Failed to save quotation.");
    }
  };

  const fetchQuotationHistory = async () => {
    console.log("Fetching history...");
    try {
      const response = await axios.get("http://localhost:5000/api/quotations");
      setQuotationHistory(response.data);
      setShowPopup(true); // Show the popup after history is fetched
    } catch (error) {
      console.error("Error fetching quotation history:", error);
    }
  };

  const openPopup = (quotation) => {
    setSelectedQuotation(quotation); // Store the selected quotation details
    setShowPopup(true); // Show popup
  };

  const closePopup = () => {
    setShowPopup(false); // Hide popup
  };

  return (
    <div className="container_quotation">
      <div className="main-content_quotation">
        <div className="header-container_quotation">
          <h1>Quotation Generator</h1>
          <div className="quotation-info_quotation">
            <p id="quotationNumber">Quotation Number: {quotationNumber}</p>
            <p id="gstNumber">GST Number: {gstNumber}</p>
          </div>
        </div>

        <div className="form-container_quotation">
          {/* Form Inputs */}
          <div className="form-group_quotation">
            <label htmlFor="clientName">Client Name<span className="ashterisk">*</span> </label>
            
            <input
              type="text"
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Enter client's name"
            />
          </div>
          <div className="form-group_quotation">
            <label htmlFor="clientCompany">Client Company Name<span className="ashterisk">*</span> </label>
            <input
              type="text"
              id="clientCompany"
              value={clientCompany}
              onChange={(e) => setClientCompany(e.target.value)}
              placeholder="Enter client's company name "
            />
          </div>
          <div className="form-group_quotation">
            <label htmlFor="projectDescription">
              Project/Service Description<span className="ashterisk">*</span>
            </label>
            <textarea
              id="projectDescription"
              placeholder="Enter project or service description"
            />
          </div>
          <div className="form-group_quotation item-group">
            <div>
              <label htmlFor="itemDescription">Item/Service Description <span className="ashterisk">*</span></label>
              <input
                type="text"
                id="itemDescription"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                placeholder="Enter item or service"
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantity<span className="ashterisk">*</span> </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="unitPrice">Unit Price <span className="ashterisk">*</span>({currencySymbol})</label>
              <input
                type="number"
                id="unitPrice"
                value={unitPrice}
                onChange={(e) => setUnitPrice(parseFloat(e.target.value))}
              />
            </div>
          </div>
          <div className="form-group_quotation">
            <label htmlFor="currency">Currency <span className="ashterisk">*</span></label>
            
            <select
              id="currency"
              className="currency-selector"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="INR">INR (₹)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>
          <div className="form-group_quotation">
            <button onClick={addItem}>Add Item</button>
          </div>
        </div>
      </div>

      <div className="sidebar-right">
        <h2>Client and Quotation Details</h2>
        <p>
          <strong>Name:</strong>{" "}
          <span id="sidebarClientName">{clientName}</span>
        </p>
        <p>
          <strong>Company:</strong>{" "}
          <span id="sidebarClientCompany">{clientCompany}</span>
        </p>
        <p>
          <strong>Quotation Number:</strong>{" "}
          <span id="sidebarQuotationNumber">{quotationNumber}</span>
        </p>
        <p>
          <strong>GST Number:</strong>{" "}
          <span id="sidebarGSTNumber">{gstNumber}</span>
        </p>

        <h2>Quotation Details</h2>
        <div className="quotation-details">
          <table id="quoteTable">
            <thead>
              <tr>
                <th>Item/Service Description*</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Net Amount</th>
                <th>Tax Amount</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.itemDescription}</td>
                  <td>{item.quantity}</td>
                  <td>{currencySymbol + item.unitPrice.toFixed(2)}</td>
                  <td>{currencySymbol + item.netAmount.toFixed(2)}</td>
                  <td>{currencySymbol + item.taxAmount.toFixed(2)}</td>
                  <td>{currencySymbol + item.totalAmount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="quotation-footer">
          <p>
            Grand Total:{" "}
            <span id="grandTotal">
              {currencySymbol}
              {grandTotal.toFixed(2)}
            </span>
          </p>
          <button onClick={saveQuotation}>Save</button>
          <button onClick={fetchQuotationHistory}>Fetch History</button>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay_quotation">
          <div className="popup-content_quotation">
            <button className="close-popup" onClick={closePopup}>
              X
            </button>
            <h2>Quotation History</h2>

            {/* Display the Client and Quotation Info */}
            {quotationHistory.length > 0 ? (
              <>
                <table className="popup-table">
                  <thead>
                    <tr>
                      <th>Client Name</th>
                      <th>Company</th>
                      <th>Quotation Number</th>
                      <th>GST Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotationHistory.map((quote, index) => (
                      <tr key={index}>
                        <td>{quote.clientName}</td>
                        <td>{quote.clientCompany}</td>
                        <td>{quote.quotationNumber}</td>
                        <td>{quote.gstNumber}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Display the Quotation Items Details */}
                <h3>Quotation Items</h3>
                {quotationHistory.map((quote, index) => (
                  <table key={index} className="popup-table">
                    <thead>
                      <tr>
                        <th>Item/Service Description</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Net Amount</th>
                        <th>Tax Amount</th>
                        <th>Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quote.items.map((item, itemIndex) => (
                        <tr key={itemIndex}>
                          <td>{item.itemDescription}</td>
                          <td>{item.quantity}</td>
                          <td>{currencySymbol + item.unitPrice.toFixed(2)}</td>
                          <td>{currencySymbol + item.netAmount.toFixed(2)}</td>
                          <td>{currencySymbol + item.taxAmount.toFixed(2)}</td>
                          <td>
                            {currencySymbol + item.totalAmount.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}
              </>
            ) : (
              <p>No history available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quotations;