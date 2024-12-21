import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navbar.css'; // Optional: Add styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/create-incident">Create Incident</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
