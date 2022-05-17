import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ServiceSlider({ images }) {
  const settings = {
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 1,
  };

  return (
    <div className="w-64 lg:mx-auto">
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <img
              src={image}
              alt=""
              className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto my-3"
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default ServiceSlider;
