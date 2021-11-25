import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ManageOrders = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios
      .get("https://guarded-savannah-06230.herokuapp.com/manageOrders")
      .then((res) => {
        setProducts(res.data);
      });
  }, [products]);

  //   Delete
  const handleDelete = (id) => {
    axios
      .delete(`https://guarded-savannah-06230.herokuapp.com/deleteOrder/${id}`)
      .then((res) => {
        // Updating UI
        if (res.data.deletedCount > 0) {
          alert("Deleted");
          const remainingProduct = products.filter((pd) => pd._id !== id);
          setProducts(remainingProduct);
        }
      });
  };

  // Shipped
  const handleShipped = (id) => {
    axios.put(`https://guarded-savannah-06230.herokuapp.com/shipped/${id}`);
  };
  return (
    <div className="container">
      <h2 className="text-center fw-bold text-primary">Manage All Orders</h2>
      <Row>
        {products?.map((pd) => (
          <Col md={3} key={pd._id}>
            <Card border="white" className="shadow rounded-3 p-2">
              <Card.Img
                className="px-4"
                variant="top"
                style={{ height: 195 }}
                src={pd.product?.image}
              />
              <Card.Body>
                <Card.Title>{pd.product?.name}</Card.Title>
                <Card.Text>{pd.product?.description}</Card.Text>
                <Card.Text>Price: ${pd.product?.price}</Card.Text>
              </Card.Body>
              <Row className="px-2">
                <Col md={6} className="d-grid">
                  <Button
                    onClick={() => handleDelete(pd?._id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </Col>
                <Col md={6} className="d-grid grid-gap-0">
                  <Button
                    onClick={() => handleShipped(pd?._id)}
                    variant={
                      pd.productStatus === "Shipped" ? "success" : "danger"
                    }
                  >
                    {pd.productStatus === "Shipped" ? "Shipped" : "Approve"}
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ManageOrders;
