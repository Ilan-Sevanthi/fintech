
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { CSVLink } from 'react-csv';
import './ReceivablesHistory.css';
import { FaFilter, FaDownload } from 'react-icons/fa'; // Funnel and Download icons

const ReceivableHistory = () => {
  const [quotations, setQuotations] = useState([]);
  const [filteredQuotations, setFilteredQuotations] = useState([]);
  const [selectedQuotations, setSelectedQuotations] = useState([]);
  const [filters, setFilters] = useState({
    searchQuery: '',
    dateRange: [null, null],
  });
  const [sortOption, setSortOption] = useState('new-old');
  const [showDropdown, setShowDropdown] = useState(false); // For export dropdown

  // Fetch data from the quotations API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/quotations");

        const quotationData = response.data.map(item => ({
          date: item.createdAt || new Date(),
          clientName: item.clientName,
          clientCompany: item.clientCompany,
          items: item.items.map(i => ({
            itemDescription: i.itemDescription,
            quantity: i.quantity,
            unitPrice: i.unitPrice,
            netAmount: i.netAmount,
            taxAmount: i.taxAmount,
            totalAmount: i.totalAmount
          })),
          grandTotal: item.grandTotal,
          currency: item.currency,
          quotationNumber: item.quotationNumber,
          gstNumber: item.gstNumber,
        }));

        setQuotations(quotationData);
        setFilteredQuotations(quotationData); // Initially display all quotations
      } catch (error) {
        console.error('Error fetching quotations:', error);
      }
    };

    fetchData();
  }, []);

  const applyFilters = () => {
    let filtered = quotations;

    // Search Filter
    if (filters.searchQuery) {
      const searchQueryLower = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(quotation => 
        quotation.clientName.toLowerCase().includes(searchQueryLower) ||
        quotation.clientCompany.toLowerCase().includes(searchQueryLower) ||
        quotation.quotationNumber.toString().includes(searchQueryLower)
      );
    }

    // Date Range Filter
    if (filters.dateRange[0] && filters.dateRange[1]) {
      const startDate = filters.dateRange[0];
      const endDate = filters.dateRange[1];
      filtered = filtered.filter(quotation => {
        const quotationDate = new Date(quotation.date);
        return quotationDate >= startDate && quotationDate <= endDate;
      });
    }

    // Apply Sorting
    if (sortOption === 'new-old') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredQuotations(filtered);
  };

  const handleSortChange = () => {
    setSortOption(prevSort => (prevSort === 'new-old' ? 'old-new' : 'new-old'));
    applyFilters();
  };

  const handleSearchChange = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      searchQuery: e.target.value,
    }));
  };

  const handleDateChange = (dates) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      dateRange: dates,
    }));
  };

  const handleSelectQuotation = (quotation) => {
    if (selectedQuotations.includes(quotation)) {
      setSelectedQuotations(selectedQuotations.filter(q => q !== quotation));
    } else {
      setSelectedQuotations([...selectedQuotations, quotation]);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumns = ["Client Name", "Company", "Quotation Number", "Grand Total", "Currency", "Date"];
    const tableRows = [];

    selectedQuotations.forEach(quotation => {
      const quotationData = [
        quotation.clientName,
        quotation.clientCompany,
        quotation.quotationNumber,
        quotation.grandTotal,
        quotation.currency,
        new Date(quotation.date).toLocaleDateString(),
      ];
      tableRows.push(quotationData);
    });

    doc.autoTable(tableColumns, tableRows, { startY: 20 });
    doc.text("Selected Quotations", 14, 15);
    doc.save("quotations.pdf");
  };

  const csvData = selectedQuotations.map(quotation => ({
    ClientName: quotation.clientName,
    Company: quotation.clientCompany,
    QuotationNumber: quotation.quotationNumber,
    GrandTotal: quotation.grandTotal,
    Currency: quotation.currency,
    Date: new Date(quotation.date).toLocaleDateString(),
  }));

  return (
    <div>
      <header className='receivable_history'>
        <nav id='receivable_bar'>
          <ul>
            <li><a href="#" className="active">Quotation History</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="action-section_receivable">
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search by client, company, or quotation number"
              value={filters.searchQuery}
              onChange={handleSearchChange}
            />
            <DatePicker
              selected={filters.dateRange[0]}
              onChange={handleDateChange}
              startDate={filters.dateRange[0]}
              endDate={filters.dateRange[1]}
              selectsRange
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD to YYYY-MM-DD"
              isClearable
              className="date-picker"
            />
          </div>

          <div className="export-sort">
            <button className="export-btn" onClick={() => setShowDropdown(!showDropdown)}>
              <FaDownload /> Export
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button className='receivable_history-quotation' onClick={generatePDF}>PDF</button>
                <CSVLink data={csvData} filename="quotations.csv">
                  <button className='receivable_history-quotation'>CSV</button>
                </CSVLink>
              </div>
            )}
            <button className="sort-btn" onClick={handleSortChange}>
              <FaFilter /> Sort
            </button>
          </div>
        </section>

        <section className="transaction-list">
          <h2>Quotation List</h2>
          <table id="transaction-table">
            <thead>
              <tr>
                <th>Select</th>
                <th>Si No</th>
                <th>Date</th>
                <th>Client Name</th>
                <th>Company</th>
                <th>Grand Total</th>
                <th>Currency</th>
                <th>Quotation Number</th>
                <th>GST Number</th>
                <th>Item Description</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody id="transaction-table-body">
              {filteredQuotations.length > 0 ? (
                filteredQuotations.map((quotation, index) => (
                  quotation.items.map((item, idx) => (
                    <tr key={`${index}-${idx}`}>
                      <td>
                        <input
                          type="checkbox"
                          onChange={() => handleSelectQuotation(quotation)}
                          checked={selectedQuotations.includes(quotation)}
                        />
                      </td>
                      <td>{index + 1}</td>
                      <td>{new Date(quotation.date).toLocaleDateString()}</td>
                      <td>{quotation.clientName}</td>
                      <td>{quotation.clientCompany}</td>
                      <td>{quotation.grandTotal}</td>
                      <td>{quotation.currency}</td>
                      <td>{quotation.quotationNumber}</td>
                      <td>{quotation.gstNumber}</td>
                      <td>{item.itemDescription}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))
                ))
              ) : (
                <tr>
                  <td colSpan="11">No quotations found</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ReceivableHistory;