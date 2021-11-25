import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { registerUser } = useAuth();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const fullName = data.fname + " " + data.lname;
    const email = data.email;
    const password = data.password;
    registerUser(email, password, history, fullName);
  };

  return (
    <div className="container mb-5">
      <h1 className="fw-bold text-center mt-5 mb-4 text-info">Register</h1>
      <Row className="d-flex justify-content-center align-items-center shadow rounded-3 p-5">
        <Col className="px-5" md={5}>
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                First Name
              </label>
              <input
                {...register("fname", { required: true })}
                placeholder="First Name"
                type="text"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Last Name
              </label>
              <input
                {...register("lname", { required: true })}
                placeholder="Last Name"
                type="text"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                placeholder="Your Email"
                type="email"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                placeholder="Password"
                type="password"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-12 d-grid">
              <button type="submit" className="btn btn-info text-white">
                Register
              </button>
            </div>
            <div>
              <Link style={{ textDecoration: "none" }} to="/login">
                Already Registered?
              </Link>
            </div>
          </form>
        </Col>
        <Col md={6} className="text-center">
          <img
            className="img-fluid w-75"
            src="https://jumbulary.com/assets/images/Account-amico.png"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default Register;
