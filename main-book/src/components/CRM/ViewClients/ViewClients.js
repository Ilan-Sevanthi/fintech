
import React, { useEffect, useState } from "react";
import "./ViewClients.css";
import axios from "axios";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";

const ViewClients = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    dob: "",
    panCard: "",
    bankName: "",
    email: "",
    accountNumber: "",
    gstno: "",
    phoneNo: "",
    ifscCode: "",
    location: "",
    branch: "",
    gender: "",
    accountType: "",
  });

  const [customerDetails, setCustomerDetails] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isNewAccountPopupOpen, setIsNewAccountPopupOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const [selectedRows, setSelectedRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/personal-details", formData);
      alert("Personal details submitted successfully");
      setFormData({
        clientName: "",
        dob: "",
        panCard: "",
        bankName: "",
        email: "",
        accountNumber: "",
        gstno: "",
        phoneNo: "",
        ifscCode: "",
        location: "",
        branch: "",
        gender: "",
        accountType: "",
      });
      fetchData();
    } catch (error) {
      console.error("Error submitting personal details:", error);
      alert("Error submitting personal details");
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/personal-details"
      );
      setCustomerDetails(response.data);
    } catch (error) {
      console.error("Error fetching customer details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openPopup = (customer) => {
    setSelectedCustomer(customer);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openNewAccountPopup = () => {
    setIsNewAccountPopupOpen(true);
  };

  const closeNewAccountPopup = () => {
    setIsNewAccountPopupOpen(false);
  };

  const handleEditClick = (customer) => {
    setEditingId(customer._id);
    setEditedData(customer);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSaveClick = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/personal-details/${id}`,
        editedData
      );
      alert("Details updated successfully");
      setEditingId(null);
      fetchData();
    } catch (error) {
      console.error("Error updating personal details:", error);
      alert("Error updating personal details");
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/personal-details/${id}`
      );
      if (response.status === 200 || response.status === 204) {
        const deletedCustomer = customerDetails.find(
          (customer) => customer._id === id
        );

        // Store the deleted customer in local storage for history
        let history = JSON.parse(localStorage.getItem("deletedHistory")) || [];
        history.push(deletedCustomer);
        localStorage.setItem("deletedHistory", JSON.stringify(history));

        setCustomerDetails(
          customerDetails.filter((customer) => customer._id !== id)
        );
        alert("Customer deleted successfully");
      } else {
        alert("Failed to delete the customer. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting customer:", error);
      alert(
        `Error deleting customer: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleDownloadPDF = () => {
    const selectedData = customerDetails.filter((customer) =>
      selectedRows.includes(customer._id)
    );

    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Selected Customer Details", 10, 10);

    selectedData.forEach((customer, index) => {
      doc.setFontSize(12);
      doc.text(`Client Name: ${customer.clientName}`, 10, 20 + index * 70);
      doc.text(
        `Date of Birth: ${customer.dob ? customer.dob.split("T")[0] : ""}`,
        10,
        50 + index * 70
      );
      doc.text(`PAN Card: ${customer.panCard}`, 10, 60 + index * 70);
      doc.text(`Bank Name: ${customer.bankName}`, 10, 70 + index * 70);
      doc.text(`Email: ${customer.email}`, 10, 80 + index * 70);
      doc.text(
        `Account Number: ${customer.accountNumber}`,
        10,
        90 + index * 70
      );
      doc.text(`Phone Number: ${customer.phoneNo}`, 10, 100 + index * 70);
      doc.text(`IFSC Code: ${customer.ifscCode}`, 10, 110 + index * 70);
      doc.text(`Location: ${customer.location}`, 10, 120 + index * 70);
      doc.text(`Branch: ${customer.branch}`, 10, 130 + index * 70);
      doc.text(`Gender: ${customer.gender}`, 10, 140 + index * 70);
      doc.text(`Account Type: ${customer.accountType}`, 10, 150 + index * 70);

      if (index < selectedData.length - 1) {
        doc.addPage();
      }
    });

    doc.save("selected-customers.pdf");
  };

  const handleSort = () => {
    const sortedCustomers = [...customerDetails].sort((a, b) => {
      const dateA = new Date(a.dob);
      const dateB = new Date(b.dob);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setCustomerDetails(sortedCustomers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredCustomers = customerDetails.filter(
    (customer) =>
      customer.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phoneNo.includes(searchQuery)
  );

  return (
    <div className="app-container_client">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="main-content_client">
        {/* Navbar */}
        <header className="navbar_client">
          <h1 className="welcome-text_client">Client Management</h1>
          <div className="user-profile_client">
            <div className="user-info_client">
              <div className="user-name_client">Abielan</div>
              <div className="user-role_client">Accountant</div>
            </div>
            <img
              src="profile.jpg"
              alt="Profile"
              className="profile-image_client"
            />
            <i className="fas fa-chevron-down"></i>
          </div>
        </header>

        {/* Account Section */}
        <div className="account-section_client">
          <div className="search-bar_client">
            <input
              type="text"
              placeholder="Search by Client ID, Phone no., E-mail"
              className="search-input_client"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* <div className="dropdown_client">
              <div className="dropdown-content_client">
                <button  className="export-btn_client" onClick={handleDownloadPDF} >Export as PDF</button>
                <CSVLink
                  data={customerDetails.filter((customer) =>
                    selectedRows.includes(customer._id)
                  )}
                  filename="selected-customers.csv"
                  className="export-btn_client"
                  target="_blank"
                >
                  Export as CSV
                </CSVLink>
              </div>
            </div> */}
            <div>
              {" "}
              <button
                className="new-account-btn_client"
                onClick={openNewAccountPopup}
              >
                + New Account
              </button>
            </div>
          </div>

          <div id="client_drop-down">
              <div className="dropdown_client">
                <button className="sort-btn_vendor" onClick={handleSort}>
                  Sort {sortOrder === "asc" ? "▲" : "▼"}
                </button>
                <div className="dropbtn_client_div">
                  <button className="dropbtn_client">Export</button>
                <div className="dropdown-content_client">
                  <button
                    className="export-btn_client"
                    onClick={handleDownloadPDF}
                  >
                    as PDF
                  </button>
                  <CSVLink
                    data={customerDetails.filter((customer) =>
                      selectedRows.includes(customer._id)
                    )}
                    filename="selected-customers.csv"
                    className="export-btn_client"
                    target="_blank"
                  >
                    as CSV
                  </CSVLink>
                </div>
              </div>
            </div>
          </div>

          {/* <Link to="/history" className="history-link">View Deleted Clients</Link> */}
          <table className="accounts-table_client">
            <thead>
              <tr>
                <th>Select</th>
                <th>Client ID</th>
                <th>Clients Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, index) => (
                <tr key={customer._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(customer._id)}
                      onChange={() => handleSelectRow(customer._id)}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td
                    className="client-name_client"
                    onClick={() => openPopup(customer)}
                  >
                    {customer.clientName}
                  </td>
                  <td>{customer.email}</td>
                  <td>{customer.phoneNo}</td>
                  <td>
                    {editingId === customer._id ? (
                      <>
                        <button onClick={() => handleSaveClick(customer._id)}>
                          Save
                        </button>
                        <button onClick={() => setEditingId(null)}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="view-portfolio-btn_client">
                          View Portfolio
                        </button>
                        <button className="view-logs-btn_client">
                          View Logs
                        </button>
                        <button
                          className="edit-btn_client"
                          onClick={() => handleEditClick(customer)}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-btn_client"
                          onClick={() => handleDeleteClick(customer._id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup Content for Existing Account */}
      {isPopupOpen && selectedCustomer && (
        <div className="popup_client">
          <div className="popup-content_client">
            <span className="close-btn_client" onClick={closePopup}>
              &times;
            </span>
            <div className="profile-header_client">
              <img
                src="profile.jpg"
                alt="Profile"
                className="profile-image-large_client"
              />
              <h2 className="profile-name_client">
                {selectedCustomer.clientName}
              </h2>
            </div>
            <div className="profile-details_client">
              <div className="profile-info_client">
                <label>DOB:</label>
                <span>{selectedCustomer.dob}</span>
              </div>
              <div className="profile-info_client">
                <label>Location:</label>
                <span>{selectedCustomer.location}</span>
              </div>
              <div className="profile-info_client">
                <label>Email ID:</label>
                <span>{selectedCustomer.email}</span>
              </div>
              <div className="profile-info_client">
                <label>Phone No.:</label>
                <span>{selectedCustomer.phoneNo}</span>
              </div>
              <div className="profile-info_client">
                <label>Gender:</label>
                <span>{selectedCustomer.gender}</span>
              </div>
            </div>
            <div className="kyc-bank-section_client">
              <div className="kyc-section_client">
                <h3>KYC</h3>
                <div className="kyc-info_client">
                  <label>PAN Card:</label>
                  <span>{selectedCustomer.panCard}</span>
                </div>
              </div>
              <div className="bank-section_client">
                <h3>Bank</h3>
                <div className="bank-info_client">
                  <label>Bank Name:</label>
                  <span>{selectedCustomer.bankName}</span>
                </div>
                <div className="bank-info_client">
                  <label>Account No.:</label>
                  <span>{selectedCustomer.accountNumber}</span>
                </div>
                <div className="bank-info_client">
                  <label>Gst No.:</label>
                  <span>{selectedCustomer.gstNo}</span>
                </div>
                <div className="bank-info_client">
                  <label>IFSC Code:</label>
                  <span>{selectedCustomer.ifscCode}</span>
                </div>
                <div className="bank-info_client">
                  <label>Branch:</label>
                  <span>{selectedCustomer.branch}</span>
                </div>
                <div className="bank-info_client">
                  <label>Account Type:</label>
                  <span>{selectedCustomer.accountType}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup Content for New Account */}
      {isNewAccountPopupOpen && (
        <div className="popup_client">
          <div className="popup-content_client">
            <span className="close-btn_client" onClick={closeNewAccountPopup}>
              &times;
            </span>
            <h2>Create New Account</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="clientName">
                Client Name <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <input
                type="text"
                id="clientName"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                placeholder="Client Name"
                required
              />
              <label htmlFor="dob">
                Date of Birth <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Date of Birth"
              />
              <label htmlFor="panCard">
                PAN Card <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <input
                type="text"
                id="panCard"
                name="panCard"
                value={formData.panCard}
                onChange={handleChange}
                placeholder="PAN Card"
              />
              <label htmlFor="bankName">
                Bank Name <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <input
                type="text"
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="Bank Name"
              />
              <label htmlFor="email">
                Email <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <label htmlFor="accountNumber">
                Account Number <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="Account Number"
              />
              <label htmlFor="gstNo">
                GST Number <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <input
                type="text"
                id="gstNO"
                name="gstNo"
                value={formData.gstNo}
                onChange={handleChange}
                placeholder="GST Number"
              />
              <label htmlFor="phoneNo">
                Phone Number <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
              <label htmlFor="ifscCode">
                IFSC Code <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <input
                type="text"
                id="ifscCode"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                placeholder="IFSC Code"
              />
              <label htmlFor="location">
                Location <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
              />
              <label htmlFor="branch">
                Branch <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <input
                type="text"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                placeholder="Branch"
              />
              <label htmlFor="gender">
                Gender <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="accountType">
                Account Type <span className="label-asterisk_client">*</span>
              </label>
              <br />
              <select
                id="accountType"
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                required
              >
                <option value="">Select Account Type</option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
                <option value="Fixed Deposit">Fixed Deposit</option>
              </select>
              <button type="submit" className="form_sbt_btn_client">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Popup */}
      {editingId && (
        <div className="popup_client">
          <div className="popup-content_client">
            <span
              className="close-btn_client"
              onClick={() => setEditingId(null)}
            >
              &times;
            </span>
            <h2>Edit Account</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveClick(editingId);
              }}
            >
              <label htmlFor="edit-clientName">Client Name</label>
              <input
                type="text"
                id="edit-clientName"
                name="clientName"
                value={editedData.clientName || ""}
                onChange={handleEditChange}
                placeholder="Client Name"
                required
              />
              <label htmlFor="edit-dob">Date of Birth</label>
              <input
                type="date"
                id="edit-dob"
                name="dob"
                value={editedData.dob ? editedData.dob.split("T")[0] : ""}
                onChange={handleEditChange}
                placeholder="Date of Birth"
              />
              <label htmlFor="edit-panCard">PAN Card</label>
              <input
                type="text"
                id="edit-panCard"
                name="panCard"
                value={editedData.panCard || ""}
                onChange={handleEditChange}
                placeholder="PAN Card"
              />
              <label htmlFor="edit-bankName">Bank Name</label>
              <input
                type="text"
                id="edit-bankName"
                name="bankName"
                value={editedData.bankName || ""}
                onChange={handleEditChange}
                placeholder="Bank Name"
              />
              <label htmlFor="edit-email">Email</label>
              <input
                type="email"
                id="edit-email"
                name="email"
                value={editedData.email || ""}
                onChange={handleEditChange}
                placeholder="Email"
                required
              />
              <label htmlFor="edit-accountNumber">Account Number</label>
              <input
                type="text"
                id="edit-accountNumber"
                name="accountNumber"
                value={editedData.accountNumber || ""}
                onChange={handleEditChange}
                placeholder="Account Number"
              />
              <label htmlFor="edit-phoneNo">Phone Number</label>
              <input
                type="tel"
                id="edit-phoneNo"
                name="phoneNo"
                value={editedData.phoneNo || ""}
                onChange={handleEditChange}
                placeholder="Phone Number"
                required
              />
              <label htmlFor="edit-ifscCode">IFSC Code</label>
              <input
                type="text"
                id="edit-ifscCode"
                name="ifscCode"
                value={editedData.ifscCode || ""}
                onChange={handleEditChange}
                placeholder="IFSC Code"
              />
              <label htmlFor="edit-location">Location</label>
              <input
                type="text"
                id="edit-location"
                name="location"
                value={editedData.location || ""}
                onChange={handleEditChange}
                placeholder="Location"
              />
              <label htmlFor="edit-branch">Branch</label>
              <input
                type="text"
                id="edit-branch"
                name="branch"
                value={editedData.branch || ""}
                onChange={handleEditChange}
                placeholder="Branch"
              />
              <label htmlFor="edit-gender">Gender</label>
              <select
                id="edit-gender"
                name="gender"
                value={editedData.gender || ""}
                onChange={handleEditChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="edit-accountType">Account Type</label>
              <select
                id="edit-accountType"
                name="accountType"
                value={editedData.accountType || ""}
                onChange={handleEditChange}
                required
              >
                <option value="">Select Account Type</option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
                <option value="Fixed Deposit">Fixed Deposit</option>
              </select>
              <button type="submit" className="form_sbt_btn_client">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewClients;