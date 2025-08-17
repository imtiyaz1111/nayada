import React from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import MainLayout from '../../Layouts/MainLayout'

const FundRequestReport = () => {
  
  return (
    <MainLayout>
   <Container fluid className="p-3">
      {/* Search Section */}
      <div className="card shadow-sm mb-4">
        <div
          className="card-header text-white"
          style={{
            background: "linear-gradient(to right, #2c3e50, #2980b9)",
          }}
        >
          <h6 className="mb-0">Search</h6>
        </div>
        <div className="card-body">
          <Row className="gy-3">
            <Col md={2} xs={12}>
              <Form.Control type="date" defaultValue="2025-08-17" />
            </Col>
            <Col md={2} xs={12}>
              <Form.Control type="date" placeholder="To Date" />
            </Col>
            <Col md={2} xs={12}>
              <Form.Select>
                <option>None</option>
              </Form.Select>
            </Col>
            <Col md={2} xs={12}>
              <Form.Control type="text" placeholder="Search Value" />
            </Col>
            <Col md={2} xs={12}>
              <Form.Select>
                <option>Select Fund Status</option>
              </Form.Select>
            </Col>
            <Col md={2} xs={12}>
              <Form.Select>
                <option>Select Fund Type</option>
              </Form.Select>
            </Col>
          </Row>

          <div className="d-flex justify-content-end mt-3 gap-2 flex-wrap">
            <Button variant="secondary">
              <i className="bi bi-search"></i> Search
            </Button>
            <Button variant="warning" className="text-white">
              <i className="bi bi-arrow-clockwise"></i> Refresh
            </Button>
            <Button variant="info" className="text-white">
              <i className="bi bi-cloud-download"></i> Export
            </Button>
          </div>
        </div>
      </div>

      {/* Fund Request Section */}
      <div className="card shadow-sm">
        <div
          className="card-header text-white"
          style={{
            background: "linear-gradient(to right, #2c3e50, #2980b9)",
          }}
        >
          <h6 className="mb-0">Fund Request</h6>
        </div>
        <div className="card-body p-0">
          <Table striped bordered hover responsive className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Requested By</th>
                <th>Deposit Bank Details</th>
                <th>Refrence Details</th>
                <th>Amount</th>
                <th>Remark</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" className="text-center">
                  No data available in table
                </td>
              </tr>
            </tbody>
          </Table>

          {/* Footer Section */}
          <div className="d-flex justify-content-between align-items-center p-2 flex-wrap">
            <span>Showing 0 to 0 of 0 entries</span>
            <div className="d-flex align-items-center gap-2">
              <Form.Select style={{ width: "80px" }}>
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </Form.Select>
              <div className="d-flex gap-2">
                <Button size="sm" variant="light" disabled>
                  &lt;
                </Button>
                <Button size="sm" variant="light" disabled>
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </MainLayout>
  )
}

export default FundRequestReport
