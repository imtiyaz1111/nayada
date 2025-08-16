// src/components/Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/nayadalogo.png";
import "./Sidebar.css";

import {
  FiChevronDown,
  FiChevronUp,
  FiLayers,
  FiHome,
  FiUser,
  FiBook,
  FiCode,
  FiLink,
  FiFileText,
  FiAlertCircle,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className={`sidebar ${isOpen ? "active" : ""}`}>
      {/* Logo Section */}
      <div className="logo-section text-center p-2 border-bottom position-relative">
        <img src={logo} alt="logo" style={{ height: "35px" }} />

        {/* Close btn for mobile */}
        <button
          className="btn btn-sm btn-light d-md-none position-absolute top-0 end-0 m-2"
          onClick={toggleSidebar}
        >
          ✖
        </button>
      </div>

      {/* Menu Items */}
      <ul className="nav flex-column mt-2">
        <li className="nav-item">
          <NavLink to="/" className="nav-link d-flex align-items-center">
            <FiHome className="me-2" /> Homepage
          </NavLink>
        </li>

        {/* Offline Fund Dropdown */}
        <li className="nav-item">
          <button
            className="nav-link d-flex justify-content-between align-items-center w-100"
            onClick={() => handleMenuClick("offlineFund")}
          >
            <span className="d-flex align-items-center">
              <FiLayers className="me-2" /> Offline Fund
            </span>
            {openMenu === "offlineFund" ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          {openMenu === "offlineFund" && (
            <ul className="submenu nav flex-column p-2">
              <li>
                <NavLink to="/fund/add" className="nav-link">
                  Add Fund
                </NavLink>
              </li>
              <li>
                <NavLink to="/fund/qrupload-report" className="nav-link">
                  QRUPI Load Report
                </NavLink>
              </li>
              <li>
                <NavLink to="/fund/request-report" className="nav-link">
                  Request Report
                </NavLink>
              </li>
              <li>
                <NavLink to="/fund/all-report" className="nav-link">
                  All Fund Report
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Wallet Transfer Dropdown */}
        <li className="nav-item">
          <button
            className="nav-link d-flex justify-content-between align-items-center w-100"
            onClick={() => handleMenuClick("walletTransfer")}
          >
            <span className="d-flex align-items-center">
              <FiLayers className="me-2" /> Wallet Transfer
            </span>
            {openMenu === "walletTransfer" ? (
              <FiChevronUp />
            ) : (
              <FiChevronDown />
            )}
          </button>
          {openMenu === "walletTransfer" && (
            <ul className="submenu nav flex-column p-2">
              <li>
                <NavLink to="/wallet/request-report" className="nav-link">
                  Request Report
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Report Dropdown */}
        <li className="nav-item">
          <button
            className="nav-link d-flex justify-content-between align-items-center w-100"
            onClick={() => handleMenuClick("report")}
          >
            <span className="d-flex align-items-center">
              <FiLayers className="me-2" /> Report
            </span>
            {openMenu === "report" ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          {openMenu === "report" && (
            <ul className="submenu nav flex-column p-2">
              <li>
                <NavLink to="/report/payout-transfer" className="nav-link">
                  Payout Transfer
                </NavLink>
              </li>
              <li>
                <NavLink to="/report/payin-collections" className="nav-link">
                  Payin Collections
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Other menu items */}

        <li className="nav-item">
          <NavLink to="/ledger" className="nav-link d-flex align-items-center">
            <FiBook className="me-2" /> My Ledger
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link d-flex align-items-center">
            <FiUser className="me-2" /> My Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/operator-code"
            className="nav-link d-flex align-items-center"
          >
            <FiCode className="me-2" /> Operator Code
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/callback-token"
            className="nav-link d-flex align-items-center"
          >
            <FiLink className="me-2" /> Callback & Token
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/api-documents"
            className="nav-link d-flex align-items-center"
          >
            <FiFileText className="me-2" /> API Documents
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/complaint-status"
            className="nav-link d-flex align-items-center justify-content-between"
          >
            <span className="d-flex align-items-center">
              <FiAlertCircle className="me-2" /> Complaint Status
            </span>
            <span className="badge bg-light text-dark">New</span>
          </NavLink>
        </li>

        {/* Logout */}
        <li className="nav-item mt-3 border-top">
          <button className="nav-link d-flex align-items-center text-danger w-100">
            <FiLogOut className="me-2" /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
