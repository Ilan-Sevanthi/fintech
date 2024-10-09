import React, { useEffect, useState } from "react";
import "./ViewVendors.css";
import axios from "axios";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { CSVLink } from "react-csv";
// import Link from 'react-csv/components/Link';
import { Link } from "react-router-dom";

const ViewVendors = () => {
  const [formData, setFormData] = useState({
    vendorName: "",
    contactNumber: "",
    email: "",
    address: "",
    companyRegistrationNumber: "",
    tinVatGst: "",
    bankName: "",
    bankAccountNumber: "",
  });

  const [vendorDetails, setVendorDetails] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isNewAccountPopupOpen, setIsNewAccountPopupOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
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
      await axios.post("http://localhost:5000/api/vendorProfile", formData);
      alert("Vendor details submitted successfully");
      setFormData({
        vendorName: "",
        contactNumber: "",
        email: "",
        address: "",
        companyRegistrationNumber: "",
        tinVatGst: "",
        bankName: "",
        bankAccountNumber: "",
      });
      fetchData();
    } catch (error) {
      console.error("Error submitting vendor details:", error);
      alert("Error submitting vendor details");
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/vendorProfile"
      );
      setVendorDetails(response.data);
    } catch (error) {
      console.error("Error fetching vendor details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openPopup = (vendor) => {
    setSelectedVendor(vendor);
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

  const handleEditClick = (vendor) => {
    setEditingId(vendor._id);
    setEditedData(vendor);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSaveClick = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/vendorProfile/${id}`,
        editedData
      );
      alert("Details updated successfully");
      setEditingId(null);
      fetchData();
    } catch (error) {
      console.error("Error updating vendor details:", error);
      alert("Error updating vendor details");
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/vendorProfile/${id}`
      );
      if (response.status === 200 || response.status === 204) {
        const deletedVendor = vendorDetails.find((vendor) => vendor._id === id);

        // Store the deleted vendor in local storage for bin page
        let bin = JSON.parse(localStorage.getItem("vendorBin")) || [];
        bin.push(deletedVendor);
        localStorage.setItem("vendorBin", JSON.stringify(bin));

        setVendorDetails(vendorDetails.filter((vendor) => vendor._id !== id));
        alert("Vendor deleted successfully");
      } else {
        alert("Failed to delete the vendor. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting vendor:", error);
      alert(
        `Error deleting vendor: ${
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
    const selectedData = vendorDetails.filter((vendor) =>
      selectedRows.includes(vendor._id)
    );

    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Selected Vendor Details", 10, 10);

    selectedData.forEach((vendor, index) => {
      doc.setFontSize(12);
      doc.text(`Vendor Name: ${vendor.vendorName}`, 10, 20 + index * 70);
      doc.text(`Contact Number: ${vendor.contactNumber}`, 10, 50 + index * 70);
      doc.text(`Email: ${vendor.email}`, 10, 60 + index * 70);
      doc.text(`Address: ${vendor.address}`, 10, 70 + index * 70);
      doc.text(
        `Company Registration Number: ${vendor.companyRegistrationNumber}`,
        10,
        80 + index * 70
      );
      doc.text(`TIN/VAT/GST: ${vendor.tinVatGst}`, 10, 90 + index * 70);
      doc.text(`Bank Name: ${vendor.bankName}`, 10, 100 + index * 70);
      doc.text(
        `Bank Account Number: ${vendor.bankAccountNumber}`,
        10,
        110 + index * 70
      );

      if (index < selectedData.length - 1) {
        doc.addPage();
      }
    });

    doc.save("selected-vendors.pdf");
  };

  const handleSort = () => {
    const sortedVendors = [...vendorDetails].sort((a, b) => {
      const fieldA = a.vendorName.toLowerCase();
      const fieldB = b.vendorName.toLowerCase();
      return sortOrder === "asc"
        ? fieldA > fieldB
          ? 1
          : -1
        : fieldA < fieldB
        ? 1
        : -1;
    });
    setVendorDetails(sortedVendors);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredVendors = vendorDetails.filter(
    (vendor) =>
      vendor.vendorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.contactNumber.includes(searchQuery)
  );

  return (
    <div className="app-container_vendor">
      {/* Main Content */}
      <div className="main-content_vendor">
        {/* Navbar */}
        <header className="navbar_vendor">
          <h1 className="welcome-text_vendor">Vendor Management</h1>
          <div className="user-profile_vendor">
            <div className="user-info_vendor">
              <div className="user-name_vendor">Abielan</div>
              <div className="user-role_vendor">Vendor Manager</div>
            </div>
            <img
              src="profile.jpg"
              alt="Profile"
              className="profile-image_vendor"
            />
            <i className="fas fa-chevron-down"></i>
          </div>
        </header>

        {/* Vendor Section */}
        <div className="account-section_vendor">
          <div className="search-bar_vendor">
            <input
              type="text"
              placeholder="Search by Vendor Name, Phone no., E-mail"
              className="search-input_vendor"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* <div className="dropdown_vendor">
              <div className="dropdown-content_vendor">
                <button className="export-btn_vendor" onClick={handleDownloadPDF}>
                  Export as PDF
                </button>
                <CSVLink
                  data={vendorDetails.filter((vendor) =>
                    selectedRows.includes(vendor._id)
                  )}
                  filename="selected-vendors.csv"
                  className="export-btn_vendor"
                  target="_blank"
                >
                  Export as CSV
                </CSVLink>
              </div>
            </div> */}
            <button
              className="new-account-btn_vendor"
              onClick={openNewAccountPopup}
            >
              + New Vendor
            </button>
          </div>

          <div className="vendor_drop-down_container">
            <div className="vendor_sort-and_export">
              <button className="sort-btn_vendor" onClick={handleSort}>
                Sort {sortOrder === "asc" ? "▲" : "▼"}
              </button>
              <div className="dropdown_vendor">
                <button className="dropbtn_vendor">Export</button>
                <div className="dropdown-content_vendor">
                  <button
                    className="export-btn_vendor"
                    onClick={handleDownloadPDF}
                  >
                    as PDF
                  </button>
                  <CSVLink
                    data={vendorDetails.filter((vendor) =>
                      selectedRows.includes(vendor._id)
                    )}
                    filename="selected-vendors.csv"
                    className="export-btn_vendor"
                    target="_blank"
                  >
                    as CSV
                  </CSVLink>
                </div>
              </div>
            </div>
            {/* <button className="new-account-btn_vendor" onClick={openNewAccountPopup}>
              + New Vendor
            </button> */}
          </div>

          {/* <Link to="/bin" className="bin-link">View Deleted Vendors</Link> */}
          <table className="accounts-table_vendor">
            <thead>
              <tr>
                <th>Select</th>
                <th>Vendor ID</th>
                <th>Vendor Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredVendors.map((vendor, index) => (
                <tr key={vendor._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(vendor._id)}
                      onChange={() => handleSelectRow(vendor._id)}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td
                    className="vendor-name_vendor"
                    onClick={() => openPopup(vendor)}
                  >
                    {vendor.vendorName}
                  </td>
                  <td>{vendor.email}</td>
                  <td>{vendor.contactNumber}</td>
                  <td>
                    {editingId === vendor._id ? (
                      <>
                        <button onClick={() => handleSaveClick(vendor._id)}>
                          Save
                        </button>
                        <button onClick={() => setEditingId(null)}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="view-portfolio-btn_vendor">
                          View Portfolio
                        </button>
                        <button className="view-logs-btn_vendor">
                          View Logs
                        </button>
                        <button
                          className="edit-btn_vendor"
                          onClick={() => handleEditClick(vendor)}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-btn_vendor"
                          onClick={() => handleDeleteClick(vendor._id)}
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

      {/* Popup Content for Existing Vendor */}
      {isPopupOpen && selectedVendor && (
        <div className="popup_vendor">
          <div className="popup-content_vendor">
            <span className="close-btn_vendor" onClick={closePopup}>
              &times;
            </span>
            <div className="profile-header_vendor">
              <img
                src="profile.jpg"
                alt="Profile"
                className="profile-image-large_vendor"
              />
              <h2 className="profile-name_vendor">
                {selectedVendor.vendorName}
              </h2>
            </div>
            <div className="profile-details_vendor">
              <div className="profile-info_vendor">
                <label>Contact Number:</label>
                <span>{selectedVendor.contactNumber}</span>
              </div>
              <div className="profile-info_vendor">
                <label>Email ID:</label>
                <span>{selectedVendor.email}</span>
              </div>
              <div className="profile-info_vendor">
                <label>Address:</label>
                <span>{selectedVendor.address}</span>
              </div>
              <div className="profile-info_vendor">
                <label>Company Registration Number:</label>
                <span>{selectedVendor.companyRegistrationNumber}</span>
              </div>
              <div className="profile-info_vendor">
                <label>TIN/VAT/GST:</label>
                <span>{selectedVendor.tinVatGst}</span>
              </div>
            </div>
            <div className="kyc-bank-section_vendor">
              <div className="bank-section_vendor">
                <h3>Bank</h3>
                <div className="bank-info_vendor">
                  <label>Bank Name:</label>
                  <span>{selectedVendor.bankName}</span>
                </div>
                <div className="bank-info_vendor">
                  <label>Bank Account No.:</label>
                  <span>{selectedVendor.bankAccountNumber}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup Content for New Vendor */}
      {isNewAccountPopupOpen && (
        <div className="popup_vendor">
          <div className="popup-content_vendor">
            <span className="close-btn_vendor" onClick={closeNewAccountPopup}>
              &times;
            </span>
            <h2>Create New Vendor</h2>
            <Link to="/Tally">
              {" "}
              <button className="tally-btn">Tally</button>
            </Link>
            <form onSubmit={handleSubmit}>
              <label htmlFor="vendorName">
                Vendor Name <span className="label-asterisk_vendor">*</span>
              </label>
              <br />
              <input
                type="text"
                id="vendorName"
                name="vendorName"
                value={formData.vendorName}
                onChange={handleChange}
                placeholder="Vendor Name"
                required
              />
              <label htmlFor="contactNumber">
                Contact Number <span className="label-asterisk_vendor">*</span>
              </label>
              <br />
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number"
                required
              />
              <label htmlFor="email">
                Email <span className="label-asterisk_vendor">*</span>
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
              <label htmlFor="address">
                Address <span className="label-asterisk_vendor">*</span>
              </label>
              <br />
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
              />
              <label htmlFor="companyRegistrationNumber">
                Company Registration Number{" "}
                <span className="label-asterisk_vendor">*</span>
              </label>
              <br />
              <input
                type="text"
                id="companyRegistrationNumber"
                name="companyRegistrationNumber"
                value={formData.companyRegistrationNumber}
                onChange={handleChange}
                placeholder="Company Registration Number"
                required
              />
              <label htmlFor="tinVatGst">
                TIN/VAT/GST <span className="label-asterisk_vendor">*</span>
              </label>
              <br />
              <input
                type="text"
                id="tinVatGst"
                name="tinVatGst"
                value={formData.tinVatGst}
                onChange={handleChange}
                placeholder="TIN/VAT/GST"
                required
              />
              <label htmlFor="bankName">
                Bank Name <span className="label-asterisk_vendor">*</span>
              </label>
              <br />
              <input
                type="text"
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="Bank Name"
                required
              />
              <label htmlFor="bankAccountNumber">
                Bank Account Number{" "}
                <span className="label-asterisk_vendor">*</span>
              </label>
              <br />
              <input
                type="text"
                id="bankAccountNumber"
                name="bankAccountNumber"
                value={formData.bankAccountNumber}
                onChange={handleChange}
                placeholder="Bank Account Number"
                required
              />
              <button type="submit" className="form_sbt_btn_vendor">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Popup */}
      {editingId && (
        <div className="popup_vendor">
          <div className="popup-content_vendor">
            <span
              className="close-btn_vendor"
              onClick={() => setEditingId(null)}
            >
              &times;
            </span>
            <h2>Edit Vendor</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveClick(editingId);
              }}
            >
              <label htmlFor="edit-vendorName">Vendor Name</label>
              <input
                type="text"
                id="edit-vendorName"
                name="vendorName"
                value={editedData.vendorName || ""}
                onChange={handleEditChange}
                placeholder="Vendor Name"
                required
              />
              <label htmlFor="edit-contactNumber">Contact Number</label>
              <input
                type="tel"
                id="edit-contactNumber"
                name="contactNumber"
                value={editedData.contactNumber || ""}
                onChange={handleEditChange}
                placeholder="Contact Number"
                required
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
              <label htmlFor="edit-address">Address</label>
              <input
                type="text"
                id="edit-address"
                name="address"
                value={editedData.address || ""}
                onChange={handleEditChange}
                placeholder="Address"
                required
              />
              <label htmlFor="edit-companyRegistrationNumber">
                Company Registration Number
              </label>
              <input
                type="text"
                id="edit-companyRegistrationNumber"
                name="companyRegistrationNumber"
                value={editedData.companyRegistrationNumber || ""}
                onChange={handleEditChange}
                placeholder="Company Registration Number"
                required
              />
              <label htmlFor="edit-tinVatGst">TIN/VAT/GST</label>
              <input
                type="text"
                id="edit-tinVatGst"
                name="tinVatGst"
                value={editedData.tinVatGst || ""}
                onChange={handleEditChange}
                placeholder="TIN/VAT/GST"
                required
              />
              <label htmlFor="edit-bankName">Bank Name</label>
              <input
                type="text"
                id="edit-bankName"
                name="bankName"
                value={editedData.bankName || ""}
                onChange={handleEditChange}
                placeholder="Bank Name"
                required
              />
              <label htmlFor="edit-bankAccountNumber">
                Bank Account Number
              </label>
              <input
                type="text"
                id="edit-bankAccountNumber"
                name="bankAccountNumber"
                value={editedData.bankAccountNumber || ""}
                onChange={handleEditChange}
                placeholder="Bank Account Number"
                required
              />
              <button type="submit" className="form_sbt_btn_vendor">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewVendors;
