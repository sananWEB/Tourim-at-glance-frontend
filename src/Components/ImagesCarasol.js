import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import "../Styles/Carasaoul.css";
import { API } from "../config";
import { Link } from "react-router-dom";

// import { API } from "../Config";

const ImagesCarasol = ({ productsBySell }) => {
  //   const settings = {
  //     // fade: true,
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     swipe: true,
  //     fade: true,
  //   };
  var settings = {
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // dots: true,
    // infinite: false,
    // // speed: 500,
    // speed: 2000,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,

    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="carasoul__gallary">
        <Slider {...settings}>
          {productsBySell.map((item) => {
            return (
              <Link
                to={{
                  pathname: "tripDetails",
                  state: item,
                }}
              >
                <div className="carasoul__img">
                  <img
                    src={`${API}/${"product"}/photo/${item._id}`}
                    className="rounded-xl h-full  w-full"
                  />
                  <p className="carasoul__title">{item.name}</p>
                  <span className="carasoul__bg"></span>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export default ImagesCarasol;
