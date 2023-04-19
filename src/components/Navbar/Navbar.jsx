import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <p className="left-section-brand">BRAND</p>
      </div>
      <div className="middle-section">
        <SearchRoundedIcon className="middle-section-search-icon"/>
        <input className="middle-section-input" type="text" placeholder="Search for something here..." />
      </div>
      <div className="right-section">
        <p className="right-section-user-name">User name</p>
        <img className="right-section-user-image" src="Assets/MIRSHAD.jpeg" alt="000" />
      </div>
    </nav>
  );
}

export default Navbar;
