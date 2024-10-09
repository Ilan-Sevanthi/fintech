import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserFriends, FaFileInvoiceDollar, FaBriefcase, FaFileAlt, FaTools,
  FaFileInvoice, FaQuoteRight, FaTrash, FaChevronDown, FaChevronRight
} from 'react-icons/fa';
import { MdOutlineManageAccounts } from 'react-icons/md';
import './sidebar.css';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  const toggleSubSection = (subSection) => {
    setActiveSubSection(prev => (prev === subSection ? null : subSection));
  };

  return (
    <div className="sidebar">
      {/* CRM Section */}
      <div>
        <h2
          onClick={() => toggleSection('crm')}
          className={`heading ${activeSection === 'crm' ? 'active' : ''}`}
        >
          <FaUserFriends className="heading-icon" /> CRM {activeSection === 'crm' ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
        </h2>
        <div className="sub-headings">
          <h3 className="sub-heading">
            <Link to="/crm/view-clients"><FaUserFriends className="icon" /> View Clients</Link>
          </h3>
          <h3 className="sub-heading">
            <Link to="/crm/view-vendors">
              <FaBriefcase className="icon" /> View Vendors
            </Link>
          </h3>
          
        </div>
      </div>

      {/* Portfolio Section */}
      <div>
        <h2
          onClick={() => toggleSection('portfolio')}
          className={`heading ${activeSection === 'portfolio' ? 'active' : ''}`}
        >
          <FaFileAlt className="heading-icon" /> Portfolio {activeSection === 'portfolio' ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
        </h2>
        <div className="sub-headings">
          <h3 className="sub-heading">
            <Link to="/portfolio/view-portfolio">
              <FaFileAlt className="icon" /> View Portfolio
            </Link>
          </h3>
        </div>
      </div>

      {/* Transactions Section */}
      <div>
        <h2
          onClick={() => toggleSection('transactions')}
          className={`heading ${activeSection === 'transactions' ? 'active' : ''}`}
        >
          <FaFileInvoiceDollar className="heading-icon" /> Transactions {activeSection === 'transactions' ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
        </h2>
        <div className="sub-headings">
          {/* Taxes Sub-section */}
          <h3
            onClick={() => toggleSubSection('taxes')}
            className={`sub-heading ${activeSubSection === 'taxes' ? 'active' : ''}`}
          >
            <FaFileInvoice className="sub-heading-icon" /> Taxes {activeSubSection === 'taxes' ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
          </h3>
          {activeSubSection === 'taxes' && (
            <div className="sub-heading-content">
              <Link to="/transactions/taxes/gst-filing"><FaFileInvoiceDollar className="icon" /> GST Filing</Link>
              <Link to="/transactions/taxes/income-tax-filing"><FaFileInvoice className="icon" /> Income Tax Filing</Link>
              <Link to="/transactions/taxes/tools"><FaTools className="icon" /> Tools</Link>
            </div>
          )}

          {/* Payables Sub-section */}
          <h3
            onClick={() => toggleSubSection('payables')}
            className={`sub-heading ${activeSubSection === 'payables' ? 'active' : ''}`}
          >
            <FaFileInvoiceDollar className="sub-heading-icon" /> Payables {activeSubSection === 'payables' ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
          </h3>
          {activeSubSection === 'payables' && (
            <div className="sub-heading-content">
              <Link to="/transactions/payables/bills"><FaFileInvoiceDollar className="icon" /> Bills</Link>
              <Link to="/transactions/payables/history"><FaFileInvoiceDollar className="icon" /> History</Link>
              {/* <Link to="/transactions/payables/activity"><FaFileInvoiceDollar className="icon" /> Activity</Link> */}
            </div>
          )}

          {/* Receivables Sub-section */}
          <h3
            onClick={() => toggleSubSection('receivables')}
            className={`sub-heading ${activeSubSection === 'receivables' ? 'active' : ''}`}
          >
            <FaQuoteRight className="sub-heading-icon" /> Receivables {activeSubSection === 'receivables' ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
          </h3>
          {activeSubSection === 'receivables' && (
            <div className="sub-heading-content">
              <Link to="/transactions/receivables/quotations"><FaQuoteRight className="icon" /> Quotations</Link>
              <Link to="/transactions/receivables/history"><FaQuoteRight className="icon" /> History</Link>
              {/* <Link to="/transactions/receivables/activity"><FaQuoteRight className="icon" /> Activity</Link> */}
            </div>
          )}

          {/* Activity Sub-section */}
          {/* <h3
            onClick={() => toggleSubSection('activity')}
            className={`sub-heading ${activeSubSection === 'activity' ? 'active' : ''}`}
          >
            <FaQuoteRight className="sub-heading-icon" /> Activity {activeSubSection === 'activity' ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
          </h3>
          {activeSubSection === 'activity' && (
            <div className="sub-heading-content">
              <Link to="/transactions/activity"><FaQuoteRight className="icon" /> Activity</Link>
            </div>
          )} */}
        </div>
      </div>

      {/* Bin Section */}
      <div>
        <h2
          onClick={() => toggleSection('bin')}
          className={`heading ${activeSection === 'bin' ? 'active' : ''}`}
        >
          <FaTrash className="heading-icon" /> Bin {activeSection === 'bin' ? <FaChevronDown className="toggle-icon" /> : <FaChevronRight className="toggle-icon" />}
        </h2>
        {activeSection === 'bin' && (
          <div className="sub-headings">
            <Link to="/bin"><FaTrash className="icon" /> Bin</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
