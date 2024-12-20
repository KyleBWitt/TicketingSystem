import React, { useState } from 'react';
import { FaHome, FaTicketAlt, FaTachometerAlt, FaUserAlt, FaSignOutAlt } from 'react-icons/fa'; // Importing icons from react-icons
import '../assets/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        {/* <div className="logo">TicketingSystem</div> */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><button onClick={() => {}}><FaHome /> Home</button></li>
          <li><button onClick={() => {}}><FaTicketAlt /> Tickets</button></li>
          <li><button onClick={() => {}}><FaTachometerAlt /> Dashboard</button></li>
          <li><button onClick={() => {}}><FaUserAlt /> Profile</button></li>
          <li><button onClick={() => {}}><FaSignOutAlt /> Logout</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
