import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";

const AddProduct = () => {
  const { registerUser } = useAuth();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://guarded-savannah-06230.herokuapp.com/products", data)
      .then((res) => {
        history.push("/home");
      });
  };

  return (
    <div className="container mb-5">
      <h1 className="fw-bold text-center mb-4 text-info">Add Product</h1>
      <Row className="d-flex justify-content-center align-items-center rounded-3 p-5">
        <Col className="p-5 shadow" md={6}>
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Product Name
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Product Name"
                type="text"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Product Price
              </label>
              <input
                {...register("price", { required: true })}
                placeholder="Product Price"
                type="number"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Product Image
              </label>
              <input
                {...register("image", { required: true })}
                placeholder="Product Image"
                type="text"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Product Description
              </label>
              <textarea
                {...register("description", { required: true })}
                placeholder="Product Description"
                type="text"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-12 d-grid">
              <button type="submit" className="btn btn-info text-white">
                Add Product
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default AddProduct;
