import React from 'react';
import './Navbar.css'; // Import file CSS untuk styling Navbar
import logo from '../image/logo (2).png';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-list">
            <li className="nav-item">
                <a href="/">Home</a>
            </li>
            <li className="nav-item">
                <a href="/produk">players</a>
            </li>
            <li className="nav-item">
                <a href="/kontak">Teams</a>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
