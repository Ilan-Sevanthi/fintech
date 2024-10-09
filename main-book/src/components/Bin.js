import React, { useEffect, useState } from 'react';
import './Bin.css'; // Styling for the Bin page
import { FaFilter } from 'react-icons/fa'; // Funnel icon

const Bin = () => {
  const [deletedVendors, setDeletedVendors] = useState([]);
  const [deletedClients, setDeletedClients] = useState([]);
  const [viewMode, setViewMode] = useState('vendor'); // Toggle between vendor and client
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('new-old'); // Initial sort order is 'new-old'
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch deleted data from local storage for both vendors and clients
    const vendorBin = JSON.parse(localStorage.getItem('vendorBin')) || [];
    const clientBin = JSON.parse(localStorage.getItem('deletedHistory')) || [];
    setDeletedVendors(vendorBin);
    setDeletedClients(clientBin);
  }, []);

  useEffect(() => {
    // Filter and sort data based on the current view mode (vendor/client), search query, and sort order
    const data = viewMode === 'vendor' ? deletedVendors : deletedClients;
    
    let filtered = data.filter(item =>
      (item.vendorName || item.clientName)?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.phoneNo || item.contactNumber)?.includes(searchQuery) ||
      item.email?.toLowerCase().includes(searchQuery)
    );

    // Sort the filtered data based on the sortOrder (new-old or old-new)
    filtered = filtered.sort((a, b) => {
      const dateA = new Date(a.deletedAt);
      const dateB = new Date(b.deletedAt);
      return sortOrder === 'new-old' ? dateB - dateA : dateA - dateB;
    });

    setFilteredData(filtered);
  }, [viewMode, searchQuery, sortOrder, deletedVendors, deletedClients]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to toggle sort order between 'new-old' and 'old-new'
  const handleSortChange = () => {
    setSortOrder(prevSort => (prevSort === 'new-old' ? 'old-new' : 'new-old'));
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  // Function to delete an item from the list
  const handleDelete = (id) => {
    if (viewMode === 'vendor') {
      const updatedVendors = deletedVendors.filter(item => item._id !== id);
      setDeletedVendors(updatedVendors);
      localStorage.setItem('vendorBin', JSON.stringify(updatedVendors)); // Update local storage
    } else {
      const updatedClients = deletedClients.filter(item => item._id !== id);
      setDeletedClients(updatedClients);
      localStorage.setItem('deletedHistory', JSON.stringify(updatedClients)); // Update local storage
    }
  };

  // Get current date in a readable format
  const formatDateTime = (date) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
  };

  return (
    <div className="bin-container">
      <header className="navbar_bin">
        <h1 className="welcome-text_client">Deleted History</h1>
        <div className="user-profile_client">
          <div className="user-info_client">
            <div className="view-mode-switch"></div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="filter-section_bin">
        <input
          type="text"
          placeholder="Search by name, email, or phone no."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="sort-btn" onClick={handleSortChange}>
          <FaFilter /> Sort
        </button>

        {/* Dropdown for Vendor/Client */}
        <select value={viewMode} onChange={(e) => handleViewModeChange(e.target.value)}>
          <option value="vendor">Vendor</option>
          <option value="client">Client</option>
        </select>
      </div>

      {/* Transaction List */}
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Si No</th>
            <th>Date</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.deletedAt ? formatDateTime(item.deletedAt) : formatDateTime(new Date())}</td> {/* Deleted date */}
                <td>{viewMode === 'vendor' ? item.vendorName : item.clientName}</td>
                <td>{item.email}</td>
                <td>{viewMode === 'vendor' ? item.contactNumber : item.phoneNo}</td> {/* Corrected for vendor */}
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No deleted {viewMode === 'vendor' ? 'vendors' : 'clients'} found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Bin;
