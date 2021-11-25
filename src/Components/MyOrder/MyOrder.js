import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://guarded-savannah-06230.herokuapp.com/orderedDataGet/${user?.email}`
        )
        .then((res) => {
          setProduct(res.data);
        });
    }
  }, [user]);

  // Delete
  const handleDelete = (id) => {
    axios
      .delete(`https://guarded-savannah-06230.herokuapp.com/deleteOrder/${id}`)
      .then((res) => {
        // Updating UI
        if (res.data.deletedCount > 0) {
          alert("Deleted");
          const remainingProduct = product.filter((pd) => pd._id !== id);
          setProduct(remainingProduct);
        }
      });
  };

  return (
    <div className="container">
      <h2 className="text-center fw-bold text-primary mb-5">Your Orders</h2>
      <Row>
        {product.map((pd) => (
          <Col md={3} key={pd._id}>
            <Card border="white" className="shadow rounded-3 ">
              <Card.Img
                className="px-4"
                variant="top"
                style={{ height: 195 }}
                src={pd.product?.image}
              />
              <Card.Body>
                <Card.Title>{pd.product?.name}</Card.Title>
                <Card.Text>{pd.product?.description}</Card.Text>
                <div className="row">
                  <div className="col-md-6">
                    <Card.Text className="fw-bold">
                      Price: ${pd.product?.price}
                    </Card.Text>
                  </div>
                  <div className="col-md-6">
                    <Card.Text className="f-bold">
                      Status:{" "}
                      <span
                        className={
                          pd.productStatus === "Shipped"
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        <b>{pd.productStatus}</b>
                      </span>
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
              <Row>
                <Col className="d-grid gap-2" md={12}>
                  <Button
                    onClick={() => handleDelete(pd?._id)}
                    variant="danger"
                  >
                    Delete
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

export default MyOrder;

{
  /* <Button variant={pd.productStatus === "Shipped" ? "success" : "danger"}>
  {pd.productStatus}
</Button>; */
}
