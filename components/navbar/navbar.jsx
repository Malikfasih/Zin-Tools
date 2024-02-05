import React from "react";
import "./navbar.css";
import { IoMdSettings } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="icon">
          <IoMdSettings />
        </div>
        <span className="app-name">Zin Tools</span>
      </div>
      <div className="search-bar">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for Movies, TV Shows, Themes & Cast"
          />
          <span className="search-icon">
            <IoIosSearch />
          </span>
        </div>
      </div>
      <div className="buttons">
        <button className="login">Log in</button>
        <button className="signup">Sign Up</button>
      </div>
    </div>
  );
};

export default navbar;
