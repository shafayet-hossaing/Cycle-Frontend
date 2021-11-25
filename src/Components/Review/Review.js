import axios from "axios";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const Review = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Ratting
  const [rate, setRate] = useState(1);
  const ratingChanged = (newRating) => {
    setRate(newRating);
    console.log(newRating);
  };
  const onSubmit = (data) => {
    data.ratting = rate;
    axios.post("https://guarded-savannah-06230.herokuapp.com/review", data).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="container mb-5">
      <h1 className="fw-bold text-center mb-4 text-info">Review</h1>
      <Row className="d-flex justify-content-center align-items-center rounded-3 p-5">
        <Col className="px-5 shadow p-5" md={6}>
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Your Name
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Your Name"
                type="text"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Say Something
              </label>
              <textarea
                {...register("review", { required: true })}
                placeholder="Your Reviews"
                type="text"
                className="form-control"
                id="inputEmail4"
              />
            </div>
            <div>
              <p className="p-0 m-0">Rate The Site</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
            </div>
            <div className="col-md-12 d-grid">
              <button type="submit" className="btn btn-info text-white">
                Submit
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Review;
