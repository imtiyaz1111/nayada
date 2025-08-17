// src/components/UpiLoadRequest.jsx
import React, { useState } from "react";
import { Table, Form, Row, Col, Button, Card, InputGroup } from "react-bootstrap";
import MainLayout from "../../Layouts/MainLayout";

const UpiLoadRequest = () => {
  const [fromDate, setFromDate] = useState("2025-08-17");
  const [toDate, setToDate] = useState("");
  const [filter, setFilter] = useState("None");
  const [searchValue, setSearchValue] = useState("");

  return (
    <MainLayout>
    <div className="container mt-3">
      {/* Search Section */}
      <Card className="shadow-sm">
        <Card.Header className="text-white" style={{ background: "linear-gradient(to right, #1c3f63, #0f82c1)" }}>
          <h5 className="mb-0">Search</h5>
        </Card.Header>
        <Card.Body>
          <Row className="align-items-center g-3">
            {/* From Date */}
            <Col md={3}>
              <Form.Control
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </Col>

            {/* To Date */}
            <Col md={3}>
              <Form.Control
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                placeholder="To Date"
              />
            </Col>

            {/* Filter Dropdown */}
            <Col md={2}>
              <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option>None</option>
                <option>Requested By</option>
                <option>Transaction Id</option>
                <option>Amount</option>
              </Form.Select>
            </Col>

            {/* Search Input */}
            <Col md={2}>
              <Form.Control
                type="text"
                placeholder="Search Value"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Col>

            {/* Buttons */}
            <Col md={2} className="d-flex gap-2">
              <Button variant="secondary" className="d-flex align-items-center gap-1">
                <i className="bi bi-search"></i> SEARCH
              </Button>
              <Button variant="danger" className="d-flex align-items-center gap-1">
                <i className="bi bi-arrow-repeat"></i> REFRESH
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* UPI Load Request Table */}
      <Card className="mt-4 shadow-sm">
        <Card.Header className="text-white" style={{ background: "linear-gradient(to right, #1c3f63, #0f82c1)" }}>
          <h5 className="mb-0">Upi Load Request</h5>
        </Card.Header>
        <Card.Body>
          <div className="table-responsive">
            <Table bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Requested By</th>
                  <th>Amount</th>
                  <th>Transaction Id</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center">
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          {/* Footer */}
          <div className="d-flex justify-content-between align-items-center">
            <span>Showing 0 to 0 of 0 entries</span>
            <div className="d-flex align-items-center gap-2">
              <Form.Select size="sm" style={{ width: "80px" }}>
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </Form.Select>
              <Button size="sm" variant="light" disabled>{"<"}</Button>
              <Button size="sm" variant="light" disabled>{">"}</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
    </MainLayout>
  );
};

export default UpiLoadRequest;
