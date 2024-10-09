
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Dashboard/RealEstate/components/Header'; // Adjusted path if needed
import Navbar from './components/Navbar'; // Navbar component
import ViewClients from './components/CRM/ViewClients/ViewClients';
import ViewVendors from './components/CRM/ViewVendors/ViewVendors';
import ViewEmployees from './components/CRM/ViewEmployees';
import ViewPortfolio from './components/Portfolio/ViewPortfolio';
import GSTFiling from './components/Transactions/Taxes/GSTFiling';
import IncomeTaxFiling from './components/Transactions/Taxes/IncomeTaxFiling/IncomeTaxFiling';
import Tools from './components/Transactions/Taxes/Tools';
import Bills from './components/Transactions/Payables/Bills';
import Quotations from './components/Transactions/Receivables/Quotations';

import Bin from './components/Bin';
import Stocks from './components/Dashboard/Stocks/Stocks';
import MutualFunds from './components/Dashboard/MutualFunds/MutualFunds';
import RealEstate from './components/Dashboard/RealEstate/RealEstate';
import Startups from './components/Dashboard/Startups/Startups';
import SearchResults from './components/Dashboard/RealEstate/components/SearchResults'; // Import the SearchResults component
import './App.css';
import FundDetails from './components/Dashboard/Stocks/FundDetails';
import History from './components/Transactions/Receivables/ReceivablesHistory';
import PayablesHistory from './components/Transactions/Payables/PayablesHistory';
// import HomePage from './components/Dashboard/Startups/components/HomePage';
import InvestmentsPage from './components/Dashboard/Startups/components/InvestmentsPage';
import DiscoverPage from './components/Dashboard/Startups/components/DiscoverPage';
import FindMeBrightvision from './components/Dashboard/Startups/components/FindMeBrightvision';
import ManagersPage from './components/Dashboard/Startups/components/Managers'; // Managers page component
import PageTwo from './components/Transactions/Taxes/IncomeTaxFiling/PageTwo';
import PageThree from './components/Transactions/Taxes/IncomeTaxFiling/PageThree';
import PageFour from './components/Transactions/Taxes/IncomeTaxFiling/PageFour';
import PageFive from './components/Transactions/Taxes/IncomeTaxFiling/PageFive';
import PageSix from './components/Transactions/Taxes/IncomeTaxFiling/PageSix';
import PageSeven from './components/Transactions/Taxes/IncomeTaxFiling/PageSeven';
import Tally from './components/CRM/ViewVendors/Tally';


const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false); // Sidebar hidden initially

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className={`app-layout ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
        <Sidebar isVisible={isSidebarVisible} />
        <div className="main-content">
          <Header toggleSidebar={toggleSidebar} />
          <Navbar toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar to Navbar */}
          <Routes>
            <Route path="/crm/view-clients" element={<ViewClients />} />
            <Route path="/crm/view-vendors" element={<ViewVendors />} />
            <Route path="/crm/view-employees" element={<ViewEmployees />} />
            <Route path="/portfolio/view-portfolio" element={<ViewPortfolio />} />
            <Route path="/transactions/taxes/gst-filing" element={<GSTFiling />} />
            <Route path="/transactions/taxes/income-tax-filing" element={<IncomeTaxFiling />} />
            <Route path="/transactions/taxes/tools" element={<Tools />} />
            <Route path="/transactions/payables/bills" element={<Bills />} />
            <Route path="/transactions/receivables/quotations" element={<Quotations />} />

            <Route path="/transactions/receivables/history" element={<History />} />
            <Route path="/bin" element={<Bin />} />
            {/* <ReceivableHistory/> */}
            <Route path="/dashboard/stocks" element={<Stocks />} />
            <Route path="/dashboard/mutual-funds" element={<MutualFunds toggleSidebar={toggleSidebar} />} />
            <Route path="/dashboard/real-estate" element={<RealEstate toggleSidebar={toggleSidebar} />} />
            <Route path="/dashboard/startups" element={<Startups />} />
            <Route path="/fund-details/:fundName" element={<FundDetails />} />
            {/* <FundDetails/> */}
            {/* <PayablesHistory/> */}
            <Route path="/transactions/Payables/history" element={<PayablesHistory />} />
            {/* <Route path="/startup" element={<Startups/>} /> */}
            <Route path="/investments" element={<InvestmentsPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/Brightvision" element={<FindMeBrightvision />} />
            <Route path="/managers" element={<ManagersPage />} />
            <Route path="/search" element={<SearchResults />} /> Add the route for SearchResults
            <Route path="/Page2" element={<PageTwo/>} /> Add the route for SearchResults
            <Route path="/Page3" element={<PageThree/>} /> {/* Add the route for SearchResults */}
            <Route path="/Page4" element={<PageFour/>} /> {/* Add the route for SearchResults */}
            <Route path="/Page5" element={<PageFive/>} /> {/* Add the route for SearchResults */}
            <Route path="/Page6" element={<PageSix/>} /> {/* Add the route for SearchResults */}
            <Route path="/Page7" element={<PageSeven/>} /> {/* Add the route for SearchResults */}
            <Route path='/Tally' element={<Tally/>}/>
            {/* // <TallyERP9Interface/> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
