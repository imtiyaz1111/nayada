import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MainLayout from "../../Layouts/MainLayout";
import WalletLoadRequest from "../../components/WalletLoadRequest";

const AddFund = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(null);
  return (
    <MainLayout>
      <div className="container mt-4">
      {/* Search Section */}
      <div className="search-container bg-white rounded shadow-sm mb-4">
        <div
          className="search-box text-white fw-bold"
          style={{
            background: "linear-gradient(to right, #3b5998, #1e90ff)",
            padding: "15px",
            borderRadius: "8px 8px 0 0",
          }}
        >
          Search
        </div>
        <div className="p-3">
          <div className="row g-3 align-items-center">
            {/* From Date */}
            <div className="col-md-2">
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                className="form-control"
                placeholderText="From Date"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            {/* To Date */}
            <div className="col-md-2">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                className="form-control"
                placeholderText="To Date"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            {/* Dropdown 1 */}
            <div className="col-md-2">
              <select className="form-select">
                <option>None</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            {/* Search Value */}
            <div className="col-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search Value"
              />
            </div>

            {/* Dropdown 2 */}
            <div className="col-md-2">
              <select className="form-select">
                <option>Select Fund Status</option>
                <option>Active</option>
                <option>Pending</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="col-md-2 d-flex gap-2">
              <button className="btn btn-secondary w-100">
                <i className="bi bi-search"></i> SEARCH
              </button>
              <button className="btn btn-danger w-100">
                <i className="bi bi-arrow-repeat"></i> REFRESH
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div
        className="card border-0 shadow-sm"
        style={{ borderLeft: "3px solid green", borderRadius: "8px" }}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-1 fw-bold">Rmps technology private limited</p>
              <p className="mb-1">IFSC : PSIB0021116</p>
            </div>
            <div className="col-md-6 text-end">
              <p className="mb-1">11161100000295</p>
              <p className="mb-1">Branch : Punjab and Sindh bank</p>
            </div>
          </div>
          <hr />
          <a href="#" className="d-flex align-items-center gap-2 text-dark fw-medium text-decoration-none">
            <span>&#8594;</span> Click here to make request
          </a>
        </div>
      </div>
    </div>
    <WalletLoadRequest/>
    </MainLayout>
  );
};

export default AddFund;
