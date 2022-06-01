import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { API } from "../../api";
import SideLine from "./SideLine";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    Previous
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    Next
  </button>
);
const Teams = () => {
  const team = useSelector((state) => state.team.team);

  const [nav, setnav] = useState({
    nav1: null,
    nav2: null,
  });
  let slider1, slider2;
  useEffect(() => {
    setnav({
      nav1: slider1,
      nav2: slider2,
    });
  }, [slider1, slider2]);
  var imgSliderSettings = {
    focusOnSelect: true,
    centerMode: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    slidesToShow: 3,
    variableWidth: true,
    useCSS: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 690,
        settings: {
          arrows: false,
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 468,
        settings: {
          arrows: false,
          slidesToShow: 3,
          centerPadding: "5px",
        },
      },
    ],
  };

  var descSettings = {
    focusOnSelect: true,
    centerMode: true,
    speed: 600,
    arrows: false,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div className="py-12 font-for-para overflow-hidden" id="team">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full bg-empofmon bg-cover bg-center bg-no-repeat">
          <div className="w-screen h-auto px-0 mx-auto bg-cover bg-center bg-no-repeat flex flex-col items-center justify-around">
            <div className="flex flex-row items-stretch w-full pt-16 md:mt-0 mb-12 lg:justify-center px-4">
              <SideLine />
              <h1 className="leading-tight text-3xl lg:text-4xl font-bold text-gray-3 ">
                Our Team
              </h1>
            </div>

            <div className="w-full h-80 md:h-full xl:w-3/5 ">
              <Slider
                asNavFor={nav.nav1}
                ref={(slider) => (slider2 = slider)}
                {...imgSliderSettings}
                className="teamSliderMain h-full"
              >
                {team.map((teammember) => {
                  return (
                    <img
                      src={`${API}/team/get-photo/${teammember._id}`}
                      alt=""
                      className="w-full h-36 md:max-h-44 mx-auto md:object-bottom pt-6 teamSlider"
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>

        <div className="sm:px-6 mt-4 xl-px-0 w-full xl:w-3/4 2xl:w-11/12 max-w-1366">
          <Slider
            {...descSettings}
            asNavFor={nav.nav2}
            ref={(slider) => (slider1 = slider)}
          >
            {team.map((teammember) => {
              return (
                <div className="teamDetail" key={teammember._id}>
                  <div className="w-full pt-10 sm:p-4 mt-2">
                    <h1 className="text-3xl title-font font-bold text-gray-900 mb-2 border-b-6 p-2 pt-0 pl-0 border-red-1 inline-block">
                      {teammember.name}
                    </h1>
                    <h2 className="text-xl title-font font-bold text-gray-900 mb-2">
                      {teammember.role}
                    </h2>
                    <p className="leading-loose text-lg font-medium text-gray-2 mb-8 whitespace-pre-line">
                      {teammember.description}
                    </p>
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

export default Teams;
