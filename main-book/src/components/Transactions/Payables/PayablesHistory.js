import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { CSVLink } from 'react-csv';
import { FaDownload, FaFilter } from 'react-icons/fa'; // For icons
import "./Payable.css";
const PayablesHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const [filters, setFilters] = useState({
    dateRange: [null, null],
    searchQuery: '',
  });
  const [sortOption, setSortOption] = useState('new-old');
  const [showDropdown, setShowDropdown] = useState(false); // For export dropdown

  useEffect(() => {
    const fetchData = async () => {
      try {
        const generateBillsResponse = await axios.get("http://localhost:5000/api/generatebills");
        const recurringBillsResponse = await axios.get("http://localhost:5000/api/recurringbills");

        const generateBillsData = generateBillsResponse.data.map(item => ({
          date: item.invoiceDate,
          name: item.clientName,
          phoneNo: item.phoneNumber,
          amount: item.totalAmount,
          transactionId: item._id,
          type: 'Generated',
          status: 'Pending',
        }));

        const recurringBillsData = recurringBillsResponse.data.map(item => ({
          date: item.dueDate,
          name: item.clientName,
          phoneNo: item.phoneNumber,
          amount: item.totalAmount,
          transactionId: item._id,
          type: 'Recurring',
          status: 'Pending',
        }));

        const allData = [...generateBillsData, ...recurringBillsData];
        setTransactions(allData);
        setFilteredTransactions(allData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const applyFilters = () => {
    let filtered = transactions;

    // Apply Date Range Filter
    if (filters.dateRange[0] && filters.dateRange[1]) {
      const startDate = filters.dateRange[0];
      const endDate = filters.dateRange[1];
      filtered = filtered.filter(transaction => {
        const transactionDate = new Date(transaction.date);
        return transactionDate >= startDate && transactionDate <= endDate;
      });
    }

    // Apply Search Query (Name or Phone No)
    if (filters.searchQuery) {
      const queryLower = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(transaction =>
        transaction.name.toLowerCase().includes(queryLower) ||
        transaction.phoneNo.includes(filters.searchQuery)
      );
    }

    // Apply Sorting
    if (sortOption === 'new-old') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredTransactions(filtered);
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

  const handleSelectTransaction = (transaction) => {
    if (selectedTransactions.includes(transaction)) {
      setSelectedTransactions(selectedTransactions.filter(t => t !== transaction));
    } else {
      setSelectedTransactions([...selectedTransactions, transaction]);
    }
  };

  const deleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
    alert('Transaction deleted successfully!');
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumns = ["Name", "Phone No", "Amount", "Transaction ID", "Type", "Date"];
    const tableRows = [];

    selectedTransactions.forEach(transaction => {
      const transactionData = [
        transaction.name,
        transaction.phoneNo,
        transaction.amount,
        transaction.transactionId,
        transaction.type,
        new Date(transaction.date).toLocaleDateString(),
      ];
      tableRows.push(transactionData);
    });

    doc.autoTable(tableColumns, tableRows, { startY: 20 });
    doc.text("Selected Transactions", 14, 15);
    doc.save("transactions.pdf");
  };

  const csvData = selectedTransactions.map(transaction => ({
    Name: transaction.name,
    PhoneNo: transaction.phoneNo,
    Amount: transaction.amount,
    TransactionId: transaction.transactionId,
    Type: transaction.type,
    Date: new Date(transaction.date).toLocaleDateString(),
  }));

  return (
    <div>
      <header className='payables-history'>
        <nav id='history_bar'>
          <ul>
            <li><a href="#" className="active">Transaction History</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="action-section_payable">
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search by name or phone number"
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
                <CSVLink data={csvData} filename="transactions.csv">
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
          <h2>Transaction List</h2>
          <table id="transaction-table">
            <thead>
              <tr>
                <th>Select</th>
                <th>Si No</th>
                <th>Date</th>
                <th>Name</th>
                <th>Phone No</th>
                <th>Amount</th>
                <th>Transaction Id</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="transaction-table-body">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        onChange={() => handleSelectTransaction(transaction)}
                        checked={selectedTransactions.includes(transaction)}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{new Date(transaction.date).toLocaleDateString()}</td>
                    <td>{transaction.name}</td>
                    <td>{transaction.phoneNo}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.transactionId}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.status}</td>
                    <td>
                      <button className="sort-btn_BIN" onClick={() => deleteTransaction(index)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10">No transactions found</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default PayablesHistory;