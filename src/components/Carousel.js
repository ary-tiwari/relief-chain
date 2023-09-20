import React from "react";
import im1 from "./images/im1.jpg"; // Import the image using require
import im2 from "./images/im2.jpg"; // Import the image using require
import im3 from "./images/im3.jpg"; // Import the image using require

const Carousel = () => {
  const imgStyle = {
    width: "500px", // Adjust the width as needed
    height: "600px", // Adjust the height as needed
    objectFit: "cover", // Maintain aspect ratio and cover the container
  };

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={im1}
            className="d-block w-100"
            alt="Slide 1"
            style={imgStyle}
          />
          <div className="carousel-caption d-none d-md-block">
            <h4 style={{ fontWeight: "bold", background: "black" }}>
              "We make a living by what we get, but we make a life by what we
              give." - Winston Churchill
            </h4>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={im2}
            className="d-block w-100"
            alt="Slide 2"
            style={imgStyle}
          />
          <div className="carousel-caption d-none d-md-block">
            <h4 style={{ fontWeight: "bold", background: "black" }}>
              "We make a living by what we get, but we make a life by what we
              give." - Winston Churchill
            </h4>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={im3}
            className="d-block w-100"
            alt="Slide 3"
            style={imgStyle}
          />
          <div className="carousel-caption d-none d-md-block">
            <h4 style={{ fontWeight: "bold", background: "black" }}>
              "We make a living by what we get, but we make a life by what we
              give." - Winston Churchill
            </h4>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
