import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quotes from "../../argus website/SVG/Appostrophies square.svg";
import { API } from "../../api";
import "./carousel.css";
import SideLine from "./SideLine";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        paddingLeft: "10px",
        transform: "scale(1.5)",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        paddingRight: "100px",
        transform: "scale(1.5)",
      }}
      onClick={onClick}
    />
  );
}

const ClientTestimonial = ({ testimonial }) => {
  const settings = {
    centerMode: true,
    focusOnSelect: true,
    speed: 600,
    autoplay: true,
    centerPadding: "350px",
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          centerPadding: "350px",
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "300px",
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "250px",
          arrows: false,
        },
      },
      {
        breakpoint: 950,
        settings: {
          centerPadding: "200px",
          arrows: false,
        },
      },

      {
        breakpoint: 850,
        settings: {
          centerPadding: "170px",
          arrows: false,
        },
      },

      {
        breakpoint: 700,
        settings: {
          centerPadding: "50px",
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "10px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="bg-client">
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 pt-14 font-for-para">
        <div className="flex justify-start">
          <div className="flex flex-row items-stretch w-full mt-8 md:mt-0 mb-12 lg:justify-center">
            <SideLine />
            <h1 className="leading-tight text-3xl lg:text-4xl font-bold text-gray-3">
              Client Testimonials
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          <Slider {...settings} className="w-full">
            {testimonial.map((data) => {
              return (
                <div
                  key={data._id}
                  className="pt-10 px-2 pb-32 sm:pb-20 testimonialSlider"
                >
                  <div className="h-full bg-white shadow-lg flex flex-col">
                    <div className="bg-gray-1 px-10 py-6 ml-auto">
                      <img
                        src={quotes}
                        alt=""
                        className="w-8 h-12 text-red-1 ml-auto -mt-12"
                      />
                    </div>
                    <div className="px-6 sm:px-6 md:px-10 pb-6 pt-2 w-full h-56">
                      <p className="leading-loose mb-6 whitespace-pre-line">
                        {data?.description}
                      </p>
                      <div className="inline-flex items-center">
                        <img
                          src={`${API}/testimonal/get-photo/${data._id}`}
                          alt=""
                          className="w-20 h-20 p-1 border-2 border-red-1 flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col items- pl-4">
                          <span className="text-lg font-bold text-red-1 border-b-2 border-red-1">
                            {data?.name}
                          </span>
                          <span className="text-gray-3 text-lg">
                            {data?.role}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
