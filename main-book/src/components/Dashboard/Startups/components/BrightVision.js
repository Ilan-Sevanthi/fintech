import React from 'react'
import { Link } from 'react-router-dom';

export const BrightVision = () => {
  return (
    
     <nav className="navbar">
     <div className="logo">Bright Vision</div>
     <ul className="nav-links">
       <li><Link to="/discover" className="nav-button">Discover</Link></li>
       <li>Watchlist</li>
       <li>Create</li>
       <li><Link to="/investments" className="nav-button">Investments</Link></li>
       <li className="dropdown">
         <button className="nav-button dropdown-toggle">More &#x25BC;</button>
         <div className="dropdown-content">
           <Link to="/loan" className="dropdown-link">Loan <span className="new-tag">NEW</span></Link>
           <Link to="/loan-against-mf" className="dropdown-link">Loan Against Mutual Funds</Link>
           <Link to="/Brightvision" className="dropdown-link">Find me a Bright Vision</Link>
           <Link to="/subscriptions" className="dropdown-link">Subscriptions</Link>
         </div>
       </li>
     </ul>
     <div className="search-bar">
       <input type="text" placeholder="Search Bright Vision, mutual fund, stock or manager" />
       {/* <button>Search</button> */}
     </div>
   </nav>
  )
}
