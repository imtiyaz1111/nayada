import React, { useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";
import BusinessReport from "../components/BusinessReport";
import DashboardGraph from "../components/DashboardGraph";

const HomePage = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("From Date:", fromDate);
    console.log("To Date:", toDate);
  };
  return (
    <MainLayout>
      <div className="container my-3">
        <div className="card shadow-sm p-3">
          <form className="row g-2 align-items-end" onSubmit={handleSubmit}>
            {/* From Date */}
            <div className="col-12 col-md-4">
              <label className="form-label text-muted mb-1">From Date</label>
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                placeholderText="Select From Date"
                className="form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            {/* To Date */}
            <div className="col-12 col-md-4">
              <label className="form-label text-muted mb-1">To Date</label>
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                placeholderText="Select To Date"
                className="form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            {/* Search Button */}
            <div className="col-12 col-md-4 d-flex">
              <button type="submit" className="btn btn-secondary w-100">
                <FaSearch className="me-2" />
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </div>
      <BusinessReport/>
      <DashboardGraph/>
    </MainLayout>
  );
};

export default HomePage;
