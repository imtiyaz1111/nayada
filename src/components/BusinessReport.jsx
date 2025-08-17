import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BusinessReport = () => {
  const reports = [
    { title: "SUCCESS PAYOUT", value: 0, footer: 0, color: "bg-success" },
    { title: "PENDING PAYOUT", value: 0, footer: 0, color: "bg-warning" },
    { title: "PAYINT SUCCESS", value: 0, footer: 0, color: "bg-primary" },
    { title: "PAYINT PENDING", value: 0, footer: 0, color: "bg-dark" },
  ];

  return (
    <div className="container my-4">
      <h4 className="text-center mb-4">Business Report</h4>
      <div className="row g-3">
        {reports.map((report, index) => (
          <div className="col-12 col-sm-6 col-md-3" key={index}>
            <div
              className={`card text-center text-white shadow-sm h-100 ${report.color}`}
              style={{ borderRadius: "12px" }}
            >
              <div className="card-body d-flex flex-column justify-content-center">
                <h6 className="mb-2">{report.title}</h6>
                <h3 className="fw-bold">{report.value}</h3>
              </div>
              <div className="card-footer border-0">
                <span className="fw-bold">{report.footer}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessReport;
