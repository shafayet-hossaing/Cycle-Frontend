import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const redirect = location.state?.from || "/dashboard";
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    login(email, password, redirect, history);
  };
  return (
    <div className="container mb-5">
      <Row className="d-flex justify-content-center py-5 mt-4 align-items-center shadow rounded-3">
        <h1 className="fw-bold text-center text-info">Login Please!</h1>
        <Col className="px-5" md={5}>
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
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
                Login
              </button>
            </div>
            <div>
              <Link style={{ textDecoration: "none" }} to="/register">
                Need To Registered?
              </Link>
            </div>
          </form>
        </Col>
        <Col md={6} className="text-center">
          <img
            className="img-fluid w-75"
            src="https://c.neh.tw/thumb/f/720/04086f4b8b394ba7bdaa.jpg"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
