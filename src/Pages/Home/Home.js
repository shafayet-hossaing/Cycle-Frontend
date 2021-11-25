import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Information from "../../Components/Information/Information";
import useAuth from "../../Hooks/useAuth";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import Rating from "react-rating";

const Home = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [review, setReview] = useState([]);
  useEffect(() => {
    axios
      .get("https://guarded-savannah-06230.herokuapp.com/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  // Get Reviews
  useEffect(() => {
    axios
      .get("https://guarded-savannah-06230.herokuapp.com/review")
      .then((res) => {
        setReview(res.data);
      });
  }, []);

  return (
    <>
      <div className="container py-5">
        <Banner></Banner>
        <Information></Information>
        <h1 className="text-center mt-5 fw-bold text-primary mb-5">
          Special Cycles
        </h1>
        <Row>
          {products.map((product) => (
            <Col md={3} key={product._id}>
              <Card border="white" className="shadow rounded-3 p-2 mb-5">
                <Card.Img
                  className="img-fluid px-4"
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
      <div className="container py-5">
        <h2 className="text-center text-primary fw-bold mb-5">
          Reviews From Clients
        </h2>
        {/* <div className="row"> */}
        {/* <div className="col-sm-12"> */}
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            319: {
              width: 319,
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          className="mySwiper wrap"
          spaceBetween={110}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {}}
        >
          {review.map((rev) => (
            <SwiperSlide key={rev._id}>
              <Card
                border="white"
                className="shadow text-center py-4 px-3 rounded-3 mb-3"
              >
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">{rev.name}</Card.Title>
                  <Card.Text>{rev.review.slice(0, 80)}</Card.Text>
                  <Rating
                    className="text-warning"
                    readonly
                    initialRating={rev.ratting}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    fractions={2}
                  />
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
        {/* </div> */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
