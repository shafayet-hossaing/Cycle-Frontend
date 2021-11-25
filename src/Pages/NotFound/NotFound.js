import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <img
              className="img-fluid"
              src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
