import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://guarded-savannah-06230.herokuapp.com/explore")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
  }, []);

  // Delete
  const handleDelete = (id) => {
    axios
      .delete(
        `https://guarded-savannah-06230.herokuapp.com/deleteProduct/${id}`
      )
      .then((res) => {
        // Updating UI
        if (res.data.deletedCount > 0) {
          alert("Deleted");
          const remainingProduct = products.filter((pd) => pd._id !== id);
          setProducts(remainingProduct);
        }
      });
  };
  return (
    <div className="container">
      <h2 className="text-primary fw-bold text-center mb-5">Manage Products</h2>
      <Row>
        {products.map((product) => (
          <Col md={3} key={product._id}>
            <Card border="white" className="shadow rounded-3 mb-4 p-2">
              <Card.Img
                className="px-4"
                variant="top"
                style={{ height: 195 }}
                src={product?.image}
              />
              <Card.Body>
                <Card.Title>{product?.name}</Card.Title>
                <Card.Text>{product?.description.slice(0, 90)}</Card.Text>
                <Card.Text>Price: ${product?.price}</Card.Text>
              </Card.Body>
              <Button
                onClick={() => handleDelete(product?._id)}
                variant="danger"
              >
                Delete
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ManageProducts;
