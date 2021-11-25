import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = () => {
  const { user } = useAuth();
  const history = useHistory();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://guarded-savannah-06230.herokuapp.com/singleDataLoad/${id}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.productStatus = "Pending";
    data.product = product;
    data.userEmail = user?.email;
    axios
      .post(
        "https://guarded-savannah-06230.herokuapp.com/orderedDataPost",
        data
      )
      .then((res) => {
        history.push("/dashboard/myOrder");
        console.log(res.data);
      });
  };

  return (
    <div className="container mb-5">
      <h1 className="fw-bold text-center mb-4 text-info">Place Order</h1>
      <Row className="d-flex justify-content-center align-items-center rounded-3 p-5">
        <Col className="p-5 shadow" md={6}>
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Your Name
              </label>
              <input
                {...register("yourName", { required: true })}
                placeholder="Your Name"
                type="text"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Your Phone Number
              </label>
              <input
                {...register("number", { required: true })}
                placeholder="Your Phone Number"
                type="number"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Your Address
              </label>
              <textarea
                {...register("address", { required: true })}
                placeholder="Your Address"
                type="text"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-12 d-grid">
              <button type="submit" className="btn btn-info text-white">
                Place Order
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default PlaceOrder;
