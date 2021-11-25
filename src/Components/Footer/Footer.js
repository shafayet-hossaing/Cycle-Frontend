import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerBg text-white bg-primary p-5">
      <Row className="container ms-5">
        <Col md={3}>
          <h4 className="mb-4">We Specially Focused On</h4>
          <ul>
            <li>Delivery On Time</li>
            <li>Not to waste your time</li>
            <li>Ensure food quality</li>
            <li>Client feedback</li>
          </ul>
        </Col>
        <Col md={3}>
          <h4 className="mb-4 ms-2">Time We Deliver</h4>
          <p>
            Any time your want, we are always ready to get you your products on
            time
          </p>
        </Col>
        <Col md={3}>
          <h4>To Know More About US</h4> <br />
          <p>Phone: 01356987456</p>
          <p>Email: breakitfast@gmail.com</p>
          <p>Address: Savar Dhaka</p>
        </Col>
        <Col md={3}>
          <h4>Send Your Mail</h4>
          <textarea
            placeholder="Your Text Goes Here"
            className="form-control footerBg mb-4"
            cols="30"
            rows="3"
          ></textarea>
          <Button className="btn btn-light">Contact Us</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
