import React from "react";
import img2 from "./Images/second.png";
const img =
  "http://kamleshyadav.com/html/cycling/version-3/assets/images/name-bicycle2.png";

const Banner = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide py-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="text-primary">Get Your Branded Cycle</h2>
              <p className="my-3">
                We Provides the best cycle in Bangladesh. And we import <br />
                them form abroad. We prefer Quality than Quality.
                <br /> For sure, you will not get this quality from <br />{" "}
                anywhere in Bangladesh.
              </p>
              <button className="btn btn-primary">More About Us</button>
            </div>
            <div className="col-md-6">
              <img
                style={{ height: "335px", background: "white" }}
                className="img-fluid"
                src={img}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="text-primary">New Cycle Is Coming</h2>
              <p className="my-3">
                We Provides the best cycle in Bangladesh. And we import <br />
                them form abroad. We prefer Quality than Quality.
                <br /> For sure, you will not get this quality from <br />{" "}
                anywhere in Bangladesh.
              </p>
              <button className="btn btn-primary">More About Us</button>
            </div>
            <div className="col-md-6">
              <img
                style={{ height: "335px" }}
                className="img-fluid"
                src={img2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
