import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Information = () => {
  return (
    <div className="py-5">
      <Row>
        <Col md={3}>
          <Card
            border="white"
            className="shadow text-center py-4 px-3 rounded-3 mb-3"
          >
            <div>
              <img
                style={{ width: "68px", marginBottom: "10px" }}
                src="http://kamleshyadav.com/html/cycling/version-3/assets/images/fast-delivery.png"
                alt=""
              />
            </div>
            <Card.Body>
              <Card.Title className="fw-bold">Fast Delivery</Card.Title>
              <Card.Text>
                We are the one who deliver fast as much as possible. No one can
                do deliver fast like us.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card
            border="white"
            className="shadow text-center py-4 px-3 rounded-3 mb-3"
          >
            <div>
              <img
                style={{ width: "68px", marginBottom: "10px" }}
                src="http://kamleshyadav.com/html/cycling/version-3/assets/images/genuine.png"
                alt=""
              />
            </div>
            <Card.Body>
              <Card.Title className="fw-bold">Genuine Products</Card.Title>
              <Card.Text>
                We ensure you getting genuine product from us. So we are
                delivering the genuine product.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card
            border="white"
            className="shadow text-center py-4 px-3 rounded-3 mb-3"
          >
            <div>
              <img
                style={{ width: "68px", marginBottom: "10px" }}
                src="http://kamleshyadav.com/html/cycling/version-3/assets/images/customer-service.png"
                alt=""
              />
            </div>
            <Card.Body>
              <Card.Title className="fw-bold">guarantee</Card.Title>
              <Card.Text>
                We guarantee that you will never have to come with any issue
                related to our product.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card
            border="white"
            className="shadow text-center py-4 px-3 rounded-3 mb-3"
          >
            <div>
              <img
                style={{ width: "68px", marginBottom: "10px" }}
                src="http://kamleshyadav.com/html/cycling/version-3/assets/images/return.png"
                alt=""
              />
            </div>
            <Card.Body>
              <Card.Title className="fw-bold">7 Days Return</Card.Title>
              <Card.Text>
                Within 7 days if you face any problem with the product we will
                replace that with the new one.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Information;
