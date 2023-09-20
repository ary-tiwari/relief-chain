import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import icon from "./icon.svg";

const Navbar = () => {
  return (
    <nav
      id="scrollcon"
      className="navbar navbar-expand-lg bg-dark fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={icon} alt="ReliefChain" width="40" height="30" />
          ReliefChain
        </Link>
        <Link
          to="/donation-process"
          className="btn btn-success mt-2"
          style={{
            marginRight: "22.75rem", // Adjust as needed
            marginLeft: "auto",
          }}
        >
          Make Donation
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="nav nav-pills">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading1">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading2">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading3">
                  CreateCampaign
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading4">
                  Discover
                </a>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
