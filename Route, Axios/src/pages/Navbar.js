import React from "react";
import Foto from "../image/logo (2).png";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <img src={Foto} alt="foto" />
            </div>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/player">player</a>
                </li>
                <li className="nav-item">
                    <a href="/">Teams</a>
                </li>
            </ul>

        </nav>
    )
}
export default Navbar;