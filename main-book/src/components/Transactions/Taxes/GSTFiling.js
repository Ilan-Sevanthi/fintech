// import React, { useState, useEffect } from "react";
// import './GSTFiling.css'; // Import the CSS file for styling

// const GstFiling = () => {
//   const [formData, setFormData] = useState({
//     gstNumber: "",
//     returnPeriod: "",
//     taxableValue: 0,
//     cgst: 0,
//     sgst: 0,
//     igst: 0,
//     cess: 0,
//     totalTaxableAmount: 0,
//     totalTaxPaid: 0,
//     cgstCheckbox: false,
//     sgstCheckbox: false,
//     igstCheckbox: false,
//     cessCheckbox: false,
//   });

//   // State for current date
//   const [currentDate, setCurrentDate] = useState("");

//   useEffect(() => {
//     // Set the current date when the component mounts
//     const today = new Date().toISOString().split('T')[0];
//     setCurrentDate(today);
//   }, []);

//   useEffect(() => {
//     // Recalculate tax amounts when taxable value or checkboxes change
//     const taxableValue = parseFloat(formData.taxableValue) || 0;
//     const cgst = formData.cgstCheckbox ? (taxableValue * 0.09).toFixed(2) : 0;
//     const sgst = formData.sgstCheckbox ? (taxableValue * 0.09).toFixed(2) : 0;
//     const igst = formData.igstCheckbox ? (taxableValue * 0.18).toFixed(2) : 0;
//     const cess = formData.cessCheckbox ? (taxableValue * 0.15).toFixed(2) : 0;
//     const totalTaxPaid = parseFloat(cgst) + parseFloat(sgst) + parseFloat(igst) + parseFloat(cess);
//     const totalTaxableAmount = taxableValue + totalTaxPaid;

//     setFormData((prevState) => ({
//       ...prevState,
//       cgst,
//       sgst,
//       igst,
//       cess,
//       totalTaxPaid: totalTaxPaid.toFixed(2),
//       totalTaxableAmount: totalTaxableAmount.toFixed(2),
//     }));
//   }, [formData.taxableValue, formData.cgstCheckbox, formData.sgstCheckbox, formData.igstCheckbox, formData.cessCheckbox]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: checked
//       }));
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/gst-filing/save', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       alert(data.message);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  

//   return (
//     <div className="gst-form-container">
//       <h2>GST Filing Form</h2>
//       <div className="date-container">
//         <span className="date-label">Date: {currentDate}</span>
//       </div>
//       <form onSubmit={handleSubmit} className="gst-form">
        
//         <div className="form-group">
//           <label>GSTIN:</label>
//           <input
//             type="text"
//             name="gstNumber"
//             value={formData.gstNumber}
//             onChange={handleChange}
//             placeholder="Enter your GSTIN"
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label>Return Period:</label>
//           <input
//             type="month"
//             name="returnPeriod"
//             value={formData.returnPeriod}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label>Taxable Value:</label>
//           <input
//             type="number"
//             name="taxableValue"
//             value={formData.taxableValue}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <div className="input-with-checkbox">
//             <label>CGST %</label>
//             <input
              
//               type="number"
//               name="cgst"
//               value={formData.cgst}
//               onChange={handleChange}
//               required
//               disabled
//             />
//             <input
//               type="checkbox"
//               name="cgstCheckbox"
//               checked={formData.cgstCheckbox || false}
//               onChange={handleChange}
//               className="tax-checkbox"
//             />
//           </div>
//         </div>
        
//         <div className="form-group">
//           <div className="input-with-checkbox">
//             <label>SGST %</label>
//             <input
//               type="number"
              
//               name="sgst"
//               value={formData.sgst}
//               onChange={handleChange}
//               required
//               disabled
//             />
//             <input
//               type="checkbox"
//               name="sgstCheckbox"
//               checked={formData.sgstCheckbox || false}
//               onChange={handleChange}
//               className="tax-checkbox"
//             />
//           </div>
//         </div>
        
//         <div className="form-group">
//           <div className="input-with-checkbox">
//             <label>IGST %</label>
//             <input
//               type="number"
//               name="igst"
              
//               value={formData.igst}
//               onChange={handleChange}
//               required
//               disabled
//             />
//             <input
//               type="checkbox"
//               name="igstCheckbox"
//               checked={formData.igstCheckbox || false}
//               onChange={handleChange}
//               className="tax-checkbox"
//             />
//           </div>
//         </div>
        
//         <div className="form-group">
//           <div className="input-with-checkbox">
//             <label>Cess if applicable</label>
//             <input
//               type="number"
//               name="cess"
//               value={formData.cess}
//               onChange={handleChange}
//               disabled
//             />
//             <input
//               type="checkbox"
//               name="cessCheckbox"
//               checked={formData.cessCheckbox || false}
//               onChange={handleChange}
//               className="tax-checkbox"
//             />
//           </div>
//         </div>
        
//         <div className="form-group">
//           <label>Total Tax Paid:</label>
//           <input
//             type="number"
//             name="totalTaxPaid"
//             value={formData.totalTaxPaid}
//             onChange={handleChange}
//             required
//             disabled
//           />
//         </div>

//         <div className="form-group">
//           <label>Total Taxable Amount:</label>
//           <input
//             type="number"
//             name="totalTaxableAmount"
//             value={formData.totalTaxableAmount}
//             onChange={handleChange}
//             required
//             disabled
//           />
//         </div>

//         <button type="submit" className="submit-button">Submit GST Filing</button>
//       </form>
//     </div>
//   );
// };

// export default GstFiling;



import React, { useState, useEffect } from "react";
import './GSTFiling.css'; // Import the CSS file for styling

const GstFiling = () => {
  const [formData, setFormData] = useState({
    gstNumber: "",
    returnPeriod: "",
    taxableValue: 0,
    cgst: 0,
    sgst: 0,
    igst: 0,
    cess: 0,
    totalTaxableAmount: 0,
    totalTaxPaid: 0,
    cgstCheckbox: false,
    sgstCheckbox: false,
    igstCheckbox: false,
    cessCheckbox: false,
  });

  // State for current date
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
  }, []);

  useEffect(() => {
    const taxableValue = parseFloat(formData.taxableValue) || 0;
    const cgst = formData.cgstCheckbox ? (taxableValue * 0.09).toFixed(2) : 0;
    const sgst = formData.sgstCheckbox ? (taxableValue * 0.09).toFixed(2) : 0;
    const igst = formData.igstCheckbox ? (taxableValue * 0.18).toFixed(2) : 0;
    const cess = formData.cessCheckbox ? (taxableValue * 0.15).toFixed(2) : 0;
    const totalTaxPaid = parseFloat(cgst) + parseFloat(sgst) + parseFloat(igst) + parseFloat(cess);
    const totalTaxableAmount = taxableValue + totalTaxPaid;

    setFormData((prevState) => ({
      ...prevState,
      cgst,
      sgst,
      igst,
      cess,
      totalTaxPaid: totalTaxPaid.toFixed(2),
      totalTaxableAmount: totalTaxableAmount.toFixed(2),
    }));
  }, [formData.taxableValue, formData.cgstCheckbox, formData.sgstCheckbox, formData.igstCheckbox, formData.cessCheckbox]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/gst-filing/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="gst-form-container">
      <h2>GST Filing Form</h2>
      <div className="gst-date-container">
        <span className="gst-date-label">Date: {currentDate}</span>
      </div>
      <form onSubmit={handleSubmit} className="gst-form">
        <div className="gst-form-group">
          <label>GSTIN:<span className="required-symbol">*</span></label>
          <input
            type="text"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleChange}
            placeholder="Enter your GSTIN"
            required
          />
        </div>
        
        <div className="gst-form-group">
          <label>Return Period:<span className="required-symbol">*</span></label>
          <input
            type="month"
            name="returnPeriod"
            value={formData.returnPeriod}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="gst-form-group">
          <label>Taxable Value:<span className="required-symbol">*</span></label>
          <input
            type="number"
            name="taxableValue"
            value={formData.taxableValue}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="gst-form-group">
          <div className="gst-input-with-checkbox">
            <label>CGST %<span className="required-symbol">*</span></label>
            <input
              type="number"
              name="cgst"
              value={formData.cgst}
              onChange={handleChange}
              disabled
            />
            <input
              type="checkbox"
              name="cgstCheckbox"
              checked={formData.cgstCheckbox || false}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="gst-form-group">
          <div className="gst-input-with-checkbox">
            <label>SGST %<span className="required-symbol">*</span></label>
            <input
              type="number"
              name="sgst"
              value={formData.sgst}
              onChange={handleChange}
              disabled
            />
            <input
              type="checkbox"
              name="sgstCheckbox"
              checked={formData.sgstCheckbox || false}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="gst-form-group">
          <div className="gst-input-with-checkbox">
            <label>IGST %<span className="required-symbol">*</span></label>
            <input
              type="number"
              name="igst"
              value={formData.igst}
              onChange={handleChange}
              disabled
            />
            <input
              type="checkbox"
              name="igstCheckbox"
              checked={formData.igstCheckbox || false}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="gst-form-group">
          <div className="gst-input-with-checkbox">
            <label>Cess (if applicable)</label>
            <input
              type="number"
              name="cess"
              value={formData.cess}
              onChange={handleChange}
              disabled
            />
            <input
              type="checkbox"
              name="cessCheckbox"
              checked={formData.cessCheckbox || false}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="gst-form-group">
          <label>Total Tax Paid:<span className="required-symbol">*</span></label>
          <input
            type="number"
            name="totalTaxPaid"
            value={formData.totalTaxPaid}
            onChange={handleChange}
            disabled
          />
        </div>

        <div className="gst-form-group">
          <label>Total Taxable Amount:<span className="required-symbol">*</span></label>
          <input
            type="number"
            name="totalTaxableAmount"
            value={formData.totalTaxableAmount}
            onChange={handleChange}
            disabled
          />
        </div>

        <button type="submit" className="gst-submit-button">Calculate</button>
      </form>
    </div>
  );
};

export default GstFiling;