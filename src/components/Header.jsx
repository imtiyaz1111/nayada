import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between align-items-center">
      <button
        className="btn btn-outline-light d-md-none"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <div className="d-flex align-items-center ms-auto">
        <button className="btn btn-primary btn-sm me-2">
          WALLET : 5453595.64 /-
        </button>
        <button className="btn btn-success btn-sm me-3">PAYIN : 0.97</button>

        {/* Profile Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-outline-light dropdown-toggle"
            id="profileMenu"
            data-bs-toggle="dropdown"
          >
            Booking (AID - 332)
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="profileMenu"
          >
            <li>
              <span className="dropdown-item-text">Agent Id : 332</span>
            </li>
            <li>
              <span className="dropdown-item-text">Name : Booking Game</span>
            </li>
            <li>
              <span className="dropdown-item-text">Member : Api Partner</span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/">
                My Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
