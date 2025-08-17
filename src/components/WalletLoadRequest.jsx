// src/components/WalletLoadRequest.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WalletLoadRequest = () => {
  const [showModal, setShowModal] = useState(false);
  const [payDate, setPayDate] = useState(null);

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        {/* Header */}
        <div
          className="card-header d-flex justify-content-between align-items-center text-white"
          style={{
            background: "linear-gradient(to right, #3d3d3d, #0d6efd)",
          }}
        >
          <h5 className="mb-0">Wallet Load Request</h5>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => setShowModal(true)}
          >
            <i className="bi bi-plus"></i> NEW REQUEST
          </button>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Deposit Bank Details</th>
                <th>Refrence Details</th>
                <th>Amount</th>
                <th>Remark</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="fw-bold">1</div>
                  <small className="text-muted">16 Aug 25 - 06:22 PM</small>
                </td>
                <td>
                  <div>Name - Rmps technology private limited</div>
                  <div>Account No. - 11161100000295</div>
                  <div>Branch - Punjab and Sindh bank</div>
                </td>
                <td>
                  <div>Ref No. - 545</div>
                  <div>Paydate - 2025-08-07</div>
                  <div>Paymode - NEFT ( )</div>
                </td>
                <td className="fw-bold">500</td>
                <td>wefsdvgt</td>
                <td>
                  <span className="badge bg-danger">PENDING</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-muted">Showing 1 to 1 of 1 entries</small>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              <li className="page-item disabled">
                <button className="page-link">‹</button>
              </li>
              <li className="page-item active">
                <button className="page-link">1</button>
              </li>
              <li className="page-item disabled">
                <button className="page-link">›</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal show fade d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              {/* Modal Header */}
              <div
                className="modal-header text-white"
                style={{ background: "linear-gradient(to right, #3d3d3d, #0d6efd)" }}
              >
                <h5 className="modal-title">Wallet Fund Request</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <form>
                  <div className="row g-3">
                    {/* Deposit Bank */}
                    <div className="col-md-4">
                      <label className="form-label">Deposit Bank</label>
                      <select className="form-select">
                        <option>Select Bank</option>
                        <option>Punjab & Sindh Bank</option>
                      </select>
                    </div>

                    {/* Amount */}
                    <div className="col-md-4">
                      <label className="form-label">Amount</label>
                      <input type="number" className="form-control" placeholder="Enter amount" />
                    </div>

                    {/* Payment Mode */}
                    <div className="col-md-4">
                      <label className="form-label">Payment Mode</label>
                      <select className="form-select">
                        <option>Select Paymode</option>
                        <option>NEFT</option>
                        <option>IMPS</option>
                      </select>
                    </div>

                    {/* Pay Date with react-datepicker */}
                    <div className="col-md-4">
                      <label className="form-label">Pay Date</label>
                      <DatePicker
                        selected={payDate}
                        onChange={(date) => setPayDate(date)}
                        className="form-control"
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select date"
                      />
                    </div>

                    {/* Ref No. */}
                    <div className="col-md-4">
                      <label className="form-label">Ref No.</label>
                      <input type="text" className="form-control" placeholder="Enter Reference Number" />
                    </div>

                    {/* Pay Slip */}
                    <div className="col-md-4">
                      <label className="form-label">Pay Slip (Optional)</label>
                      <input type="file" className="form-control" />
                    </div>

                    {/* Remark */}
                    <div className="col-12">
                      <label className="form-label">Remark</label>
                      <textarea className="form-control" placeholder="Enter Remark"></textarea>
                    </div>
                  </div>
                </form>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  CLOSE
                </button>
                <button type="button" className="btn btn-primary">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletLoadRequest;
