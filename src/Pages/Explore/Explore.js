import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://guarded-savannah-06230.herokuapp.com/explore")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="text-center my-5 fw-bold text-primary">
          Special Cycles
        </h2>
        <Row>
          {products.map((product) => (
            <Col md={3} key={product._id}>
              <Card border="white" className="shadow p-2 rounded-3 mb-5">
                <Card.Img
                  className="px-4"
                  variant="top"
                  style={{ height: 250 }}
                  src={product?.image}
                />
                <Card.Body>
                  <Card.Title>{product?.name}</Card.Title>
                  <Card.Text>{product?.description.slice(0, 90)}</Card.Text>
                  <Card.Text>Price: ${product?.price}</Card.Text>
                </Card.Body>
                <Link to={`/placeOrder/${product._id}`}>
                  <div className="d-grid gap-2">
                    <Button variant="primary">Order</Button>
                  </div>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Explore;
